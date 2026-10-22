import type { DestinationPhoto } from "../types/gallery";
import { destinationPhotos } from "./destinationPhotos";

/** Same structure use karke Kanha/Pench/Kajuraho ki alag data files banayein. */
export interface GalleryContent {
  id: string;
  eyebrow: string;
  heading: string;
  tagline: string;
  description: string;
  collectionName: string;
  envelopeMonogram: string;
  photos: DestinationPhoto[];
}

export const pachmarhiGallery: GalleryContent = {
  id: "pachmarhi",
  eyebrow: "THE SATPURA COLLECTION",
  heading: "Discover Pachmarhi, One Memory at a Time.",
  tagline: "Unfold the Extraordinary.",
  description: "Nine extraordinary frames. One unforgettable journey.",
  collectionName: "Pachmarhi photographic collection",
  envelopeMonogram: "P",
  photos: destinationPhotos,
};
