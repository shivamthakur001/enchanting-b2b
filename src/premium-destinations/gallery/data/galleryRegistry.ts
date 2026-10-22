import type { GalleryContent } from "./galleryContent";
import type { GalleryOverrides } from "../config/galleryConfig";
import { pachmarhiGallery } from "./galleryContent";

export interface GalleryEntry {
  content: GalleryContent;
  settings?: GalleryOverrides;
}

/**
 * Is registry mein destination slug add karo to auto same shared gallery use hogi.
 * Abhi sirf Pachmarhi registered hai. Dusri destination files baad mein add hongi.
 * settings property ka use sirf tab karein jab kisi destination ko alag color chahiye.
 */
const galleryRegistry: Record<string, GalleryEntry> = {
  pachmarhi: {
    content: pachmarhiGallery,
    // Example destination-specific visual changes (optional):
    // settings: { colors: { forest: '#102f20', paper: '#39503c' } },
  },
};

export function getDestinationGallery(slug: string): GalleryEntry | undefined {
  return galleryRegistry[slug.toLowerCase()];
}
