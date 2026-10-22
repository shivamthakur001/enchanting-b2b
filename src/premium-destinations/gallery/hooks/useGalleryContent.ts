import { useEffect, useMemo, useState } from "react";
import type { GalleryContent } from "../data/galleryContent";
import type { DestinationPhoto } from "../types/gallery";
import type { DestinationGalleryRegistration, PhotoMetadataEntry } from "../galleryManager";

interface ManifestImage {
  filename: string;
  path: string;
}

interface GalleryManifest {
  slug: string;
  generatedAt: string;
  images: ManifestImage[];
}

/** Converts filename to readable title if ever needed internally */
function filenameToTitle(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildPhotos(
  manifestImages: ManifestImage[],
  metadata: PhotoMetadataEntry[],
  slug: string
): DestinationPhoto[] {
  const metaMap = new Map(metadata.map((m) => [m.filename, m]));

  const photos = manifestImages
    .filter((img) => {
      const meta = metaMap.get(img.filename);
      return !meta?.hidden;
    })
    .map((img, idx) => {
      const meta = metaMap.get(img.filename);
      const title = meta?.title ?? filenameToTitle(img.filename);
      // Safe fallback alt text for accessibility when no metadata exists
      const fallbackAlt = `Photograph ${idx + 1} of ${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
      const alt = meta?.alt ?? (meta?.title ? `${meta.title} photograph` : fallbackAlt);
      const safeId =
        img.filename
          .replace(/\.[^.]+$/, "")
          .replace(/[^a-zA-Z0-9_-]/g, "-")
          .toLowerCase() + `-${idx}`;

      return {
        id: safeId,
        title,
        category: meta?.category ?? "Photograph",
        image: img.path,
        alt,
        caption: meta?.caption ?? "",
        focal: meta?.focal ?? "center center",
        aspect: meta?.aspect ?? "landscape",
        _order: meta?.displayOrder ?? idx + 100,
      } as DestinationPhoto & { _order: number };
    });

  photos.sort((a, b) => (a as any)._order - (b as any)._order);
  return photos.map((item) => {
    const { _order, ...photo } = item as DestinationPhoto & { _order: number };
    void _order;
    return photo;
  });
}

/**
 * useGalleryContent
 * Automatically fetches manifest.json, watches Vite HMR events for zero-command photo discovery,
 * and handles dynamic image counts.
 */
export function useGalleryContent(
  registration: DestinationGalleryRegistration | undefined
): GalleryContent | null {
  const [manifest, setManifest] = useState<GalleryManifest | null>(null);
  const [version, setVersion] = useState<number>(0);
  const [error, setError] = useState(false);

  const manifestPath = registration?.manifestPath ?? null;
  const slug = registration?.slug ?? null;

  // 1. Listen for Vite HMR custom events emitted by viteGalleryPlugin
  useEffect(() => {
    if (!import.meta.hot || !slug) return;

    const handleHmrUpdate = (data: { slug?: string; count?: number; timestamp?: number }) => {
      if (!data?.slug || data.slug.toLowerCase() === slug.toLowerCase()) {
        setVersion((v) => v + 1);
      }
    };

    import.meta.hot.on("gallery:manifest-updated", handleHmrUpdate);
    return () => {
      import.meta.hot?.off("gallery:manifest-updated", handleHmrUpdate);
    };
  }, [slug]);

  // 2. Window focus check — re-verifies manifest when user switches back from file explorer
  useEffect(() => {
    if (!manifestPath) return;

    const handleFocus = () => {
      setVersion((v) => v + 1);
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [manifestPath]);

  // 3. Manifest fetch with cache-busting
  useEffect(() => {
    if (!manifestPath) return;

    let cancelled = false;
    setError(false);

    const cacheBuster = version ? `?v=${version}` : `?t=${Date.now()}`;
    const url = `${manifestPath}${cacheBuster}`;

    fetch(url, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<GalleryManifest>;
      })
      .then((data) => {
        if (!cancelled) {
          setManifest(data);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.warn("[useGalleryContent] Failed to fetch manifest:", err);
          setError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [manifestPath, version]);

  return useMemo(() => {
    if (!registration) return null;
    if (error) return null;
    if (!manifest) return null;

    const photos = buildPhotos(manifest.images, registration.photoMetadata ?? [], registration.slug);
    const monogram =
      registration.monogram ?? registration.slug.charAt(0).toUpperCase();

    const countText = `${photos.length} extraordinary frame${photos.length === 1 ? "" : "s"}.`;

    return {
      id: registration.slug,
      eyebrow: registration.eyebrow ?? `${registration.slug.toUpperCase()} COLLECTION`,
      heading:
        registration.heading ??
        `Discover ${registration.slug.charAt(0).toUpperCase() + registration.slug.slice(1)}.`,
      tagline: registration.tagline ?? "Unfold the Extraordinary.",
      description: registration.description ?? `${countText} One unforgettable journey.`,
      collectionName: `${registration.slug} photographic collection`,
      envelopeMonogram: monogram,
      photos,
    } satisfies GalleryContent;
  }, [manifest, error, registration]);
}
