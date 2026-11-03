import type { DestinationPhoto } from '../../premium-destinations/gallery/types/gallery';

export type GalleryPublicationState = 'unconfigured' | 'published' | 'empty' | 'error';

export interface DestinationGallery {
  destinationId: string;
  destinationSlug: string;
  galleryId: string;
  revision: string;
  publicationState: GalleryPublicationState;
  items: DestinationPhoto[];
}

export interface LocalGalleryPhotoMetadata {
  filename: string;
  title?: string;
  category?: string;
  alt?: string;
  caption?: string;
  focal?: string;
  aspect?: DestinationPhoto['aspect'];
  displayOrder?: number;
  hidden?: boolean;
}

export interface GalleryRepository {
  getGalleryByDestinationSlug(slug: string): Promise<DestinationGallery>;
  getGalleryRevision(slug: string): Promise<string | undefined>;
}

export interface SupabaseGalleryRepository extends GalleryRepository {}

export function createGalleryRepository(
  localRepository: GalleryRepository,
  backendRepository?: GalleryRepository
): GalleryRepository {
  if (!backendRepository) return localRepository;

  return {
    async getGalleryByDestinationSlug(slug: string): Promise<DestinationGallery> {
      try {
        const backendGallery = await backendRepository.getGalleryByDestinationSlug(slug);
        if (backendGallery.publicationState === 'unconfigured') {
          return localRepository.getGalleryByDestinationSlug(slug);
        }
        return backendGallery;
      } catch (error) {
        console.warn('[GalleryRepository] Backend gallery unavailable', error);
        return {
          destinationId: slug,
          destinationSlug: slug,
          galleryId: `${slug}-backend`,
          revision: 'error',
          publicationState: 'error',
          items: [],
        };
      }
    },

    async getGalleryRevision(slug: string): Promise<string | undefined> {
      const gallery = await this.getGalleryByDestinationSlug(slug);
      return gallery.publicationState === 'error' ? undefined : gallery.revision;
    },
  };
}

export class LocalManifestGalleryRepository implements GalleryRepository {
  constructor(
    private readonly manifestBasePath = '/destination-gallery',
    private readonly metadata: LocalGalleryPhotoMetadata[] = []
  ) {}

  async getGalleryByDestinationSlug(slug: string): Promise<DestinationGallery> {
    const normalized = slug.trim().toLowerCase();
    try {
      const response = await fetch(`${this.manifestBasePath}/${normalized}/manifest.json`, {
        cache: 'no-store',
      });
      if (!response.ok) {
        if (response.status === 404) {
          return {
            destinationId: normalized,
            destinationSlug: normalized,
            galleryId: `${normalized}-local`,
            revision: 'local',
            publicationState: 'unconfigured',
            items: [],
          };
        }
        throw new Error(`Gallery manifest request failed with HTTP ${response.status}`);
      }
      const manifest = (await response.json()) as {
        generatedAt?: string;
        images?: Array<{ filename: string; path: string }>;
      };
      const metadataByFilename = new Map(this.metadata.map((item) => [item.filename, item]));
      const items = (manifest.images ?? [])
        .map((image, index) => {
          const meta = metadataByFilename.get(image.filename);
          if (meta?.hidden) return undefined;
          return {
            id: `${normalized}-${index}-${image.filename}`,
            title: meta?.title ?? image.filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
            category: meta?.category ?? 'Photograph',
            image: image.path,
            alt: meta?.alt ?? `Photograph ${index + 1} of ${normalized}`,
            caption: meta?.caption ?? '',
            focal: meta?.focal ?? 'center center',
            aspect: meta?.aspect ?? ('landscape' as const),
            displayOrder: meta?.displayOrder ?? index,
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(({ displayOrder: _displayOrder, ...item }) => item);
      return {
        destinationId: normalized,
        destinationSlug: normalized,
        galleryId: `${normalized}-local`,
        revision: manifest.generatedAt ?? 'local',
        publicationState: items.length ? 'published' : 'empty',
        items,
      };
    } catch (error) {
      console.warn('[LocalManifestGalleryRepository] Gallery unavailable', error);
      return {
        destinationId: normalized,
        destinationSlug: normalized,
        galleryId: `${normalized}-local`,
        revision: 'error',
        publicationState: 'error',
        items: [],
      };
    }
  }

  async getGalleryRevision(slug: string): Promise<string | undefined> {
    const gallery = await this.getGalleryByDestinationSlug(slug);
    return gallery.publicationState === 'error' ? undefined : gallery.revision;
  }
}

export const localManifestGalleryRepository = new LocalManifestGalleryRepository();
