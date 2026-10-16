import { media } from "./media";
import type { Destination } from "../types";

export const THEME_EYEBROWS: Record<string, string> = {
  nature: "Landscape Escape",
  heritage: "Living Heritage",
  wildlife: "Into The Wild",
  spirituality: "Sacred Journey",
};

/**
 * High-quality destination gallery image mapping using existing master production media assets.
 * Each visible destination has up to 3 curated images.
 * If a destination is not explicitly mapped or has fewer images, the fallback handles 1 or 2 images safely.
 */
export const DESTINATION_GALLERY_MAP: Record<string, string[]> = {
  // ── Nature ──────────────────────────────────────────────────────────
  pachmarhi: [media.pachmarhi, media.waterfall, media.cascade],
  bhedaghat: [media.bhedaghat, media.narmadaBoats, media.jabalpurLake],
  amarkantak: [media.cascade, media.waterfall, media.jabalpurLake],
  tamia: [media.pachmarhi, media.cascade, media.safariRiver],
  "raneh-falls": [media.waterfall, media.cascade, media.safariRiver],
  patalkot: [media.jabalpurLake, media.pachmarhi, media.cascade],

  // ── Heritage ────────────────────────────────────────────────────────
  khajuraho: [media.khajuraho, media.sanchiCarvings, media.sanchiDetail],
  orchha: [media.orchhaSunset, media.orchhaPalace, media.orchhaFort],
  gwalior: [media.orchhaFort, media.heritageLobby, media.orchhaPalace],
  mandu: [media.orchhaPalace, media.orchhaFort, media.heritageLobby],
  bhimbetka: [media.sanchiCarvings, media.sanchiWide, media.sanchiDetail],
  maheshwar: [media.maheshwar, media.narmadaBoats, media.heritageLobby],

  // ── Wildlife ────────────────────────────────────────────────────────
  pench: [media.tigerKanhaWalk, media.safari, media.tigerKanhaRest],
  kanha: [media.tigerKanhaRest, media.tigerKanhaWalk, media.safari],
  bandhavgarh: [media.tigerBandhavgarh, media.tigerYawn, media.safari],
  satpura: [media.safari, media.safariRiver, media.pachmarhi],
  panna: [media.tigerYawn, media.safariRiver, media.waterfall],
  kuno: [media.safariRiver, media.safari, media.tigerYawn],

  // ── Spirituality ────────────────────────────────────────────────────
  ujjain: [media.ujjainAarti, media.narmadaBoats, media.maheshwar],
  omkareshwar: [media.narmadaBoats, media.maheshwar, media.ujjainAarti],
  sanchi: [media.sanchiStupa, media.sanchiWide, media.sanchiCarvings],
  chitrakoot: [media.sanchiWide, media.cascade, media.narmadaBoats],
};

/**
 * Returns an array of 1 to 3 images for a given destination.
 * If destination has a custom gallery, returns those images;
 * otherwise safely falls back to destination's primary image or provided fallback.
 */
export function getDestinationGalleryImages(destination: Destination): string[] {
  const mapped = DESTINATION_GALLERY_MAP[destination.slug] ?? DESTINATION_GALLERY_MAP[destination.id];
  if (mapped && mapped.length > 0) {
    return mapped;
  }
  if (destination.image) {
    return [destination.image];
  }
  return [];
}
