/**
 * =============================================================================
 * CENTRALIZED CINEMATIC ENVELOPE GALLERY THEME CONFIGURATION
 * =============================================================================
 * One master configuration for the Cinematic Envelope Gallery across all 44
 * premium destinations, split into four independently configurable theme groups:
 *
 *   1. NATURE       (all 12 Nature destinations: Pachmarhi, Bhedaghat, Tawa, etc.)
 *   2. HERITAGE     (all 12 Heritage destinations: Khajuraho, Indore, Sanchi, etc.)
 *   3. WILDLIFE     (all 10 Wildlife destinations: Kanha, Bandhavgarh, Pench, etc.)
 *   4. SPIRITUALITY (all 10 Spirituality destinations: Ujjain, Omkareshwar, etc.)
 *
 * TO CHANGE THE VISUAL APPEARANCE:
 * Simply edit the values below in the corresponding theme preset.
 * No individual destination files, components, or layout CSS need to be touched.
 *
 * SOLID VS GRADIENT BACKGROUND:
 * When `galleryBackgroundMode: "solid"`:
 *   - `galleryBg` is applied purely without gradient or atmospheric green wash.
 *   - Setting `galleryBg: "#FFFFFF"` genuinely produces a pure white background.
 * When `galleryBackgroundMode: "gradient"`:
 *   - `galleryGradient` provides the cinematic backdrop gradient wash.
 * =============================================================================
 */

import type { GalleryOverrides } from "./config/galleryConfig";

export type GalleryBackgroundMode = "solid" | "gradient";

export interface GalleryThemeConfig {
  /** Canonical theme identifier */
  theme: "nature" | "heritage" | "wildlife" | "spirituality";

  // ---------------------------------------------------------------------------
  // 1. SECTION BACKGROUND & ATMOSPHERE
  // ---------------------------------------------------------------------------
  /** Actual Gallery section background color (e.g. "#153B2F", "#FFFFFF") */
  galleryBg: string;
  /** Fullscreen expanded gallery background color */
  galleryFullscreenBg: string;
  /** Background mode: "solid" for unclouded color, "gradient" for rich wash */
  galleryBackgroundMode: GalleryBackgroundMode;
  /** Optional section gradient (active in gradient mode) */
  galleryGradient: string;
  /** Atmosphere & mist wash opacity (0 = flat color only, 1 = full atmosphere) */
  galleryOverlayOpacity: number;
  /** Decorative paper/grain texture opacity (0 = none, 0.09 = default subtle) */
  galleryTextureOpacity: number;

  // ---------------------------------------------------------------------------
  // 2. TYPOGRAPHY & LABELS
  // ---------------------------------------------------------------------------
  /** Primary headline & title color */
  galleryTextColor: string;
  /** Subtitle, description & metadata text color */
  galleryMutedColor: string;
  /** Eyebrow, rules, numbers & decorative accent color */
  galleryAccentColor: string;

  // ---------------------------------------------------------------------------
  // 3. ENVELOPE SURFACES & PANELS
  // ---------------------------------------------------------------------------
  /** Envelope base body color */
  envelopeBodyColor: string;
  /** Envelope front pocket / face color (matches gallerySurfaceColor) */
  envelopeFrontColor: string;
  /** Envelope surface color alias */
  gallerySurfaceColor: string;
  /** Envelope back panel paper color */
  envelopeBackColor: string;
  /** Envelope folding flap face color */
  envelopeFlapColor: string;
  /** Envelope interior pocket lining color */
  envelopeLiningColor: string;

  // ---------------------------------------------------------------------------
  // 4. ENVELOPE BORDERS, EDGES & SHADOWS
  // ---------------------------------------------------------------------------
  /** Envelope edge border color */
  envelopeBorderColor: string;
  /** Envelope border color alias */
  galleryBorderColor: string;
  /** Envelope bright border / hover highlight */
  envelopeBorderBrightColor: string;
  /** Envelope pedestal & drop shadow color */
  envelopeShadowColor: string;
  /** Envelope shadow intensity multiplier (1.0 = standard depth) */
  envelopeShadowIntensity: number;
  /** Envelope paper weave texture opacity (0 = smooth, 1 = textured) */
  envelopeTextureOpacity: number;

  // ---------------------------------------------------------------------------
  // 5. WAX SEAL & MONOGRAM
  // ---------------------------------------------------------------------------
  /** Wax seal base dark tone */
  waxSealColor: string;
  /** Wax seal mid-tone shading */
  waxSealMid: string;
  /** Wax seal specular highlight */
  waxSealHighlight: string;
  /** Letter inside wax seal color */
  sealTextColor: string;
  /** Monogram geometric SVG emblem color on the flap */
  monogramColor: string;

  // ---------------------------------------------------------------------------
  // 6. DECORATIVE ACCENTS & GLOW
  // ---------------------------------------------------------------------------
  /** Envelope interior light fold / glow accent */
  envelopeAccentColor: string;
  /** Envelope hover peak glow color */
  envelopeAccentBrightColor: string;

  // ---------------------------------------------------------------------------
  // 7. PHOTO FRAMES & NAVIGATION CONTROLS
  // ---------------------------------------------------------------------------
  /** Photograph subtle outer border / ring */
  photoFrameBorder: string;
  /** Photograph classic white print border */
  printBorderColor: string;
  /** Navigation previous/next button background */
  navButtonBg: string;
  /** Navigation button border */
  navButtonBorder: string;
  /** Navigation button icon / text color */
  navButtonColor: string;
}

// =============================================================================
// PRESET 1: NATURE (All 12 Nature destinations)
// =============================================================================
export const natureGalleryTheme: GalleryThemeConfig = {
  theme: "nature",

  // Background
  galleryBg: "#153B2F",
  galleryFullscreenBg: "#0B241C",
  galleryBackgroundMode: "gradient",
  galleryGradient: "linear-gradient(180deg, #1A4436 0%, #153B2F 45%, #0B241C 100%)",
  galleryOverlayOpacity: 1,
  galleryTextureOpacity: 0.09,

  // Typography
  galleryTextColor: "#F7F1E6",
  galleryMutedColor: "rgba(247, 241, 230, 0.72)",
  galleryAccentColor: "#C9D5AC",

  // Envelope surfaces
  envelopeBodyColor: "#153B2F",
  envelopeFrontColor: "#1A4235",
  gallerySurfaceColor: "#1A4235",
  envelopeBackColor: "#133328",
  envelopeFlapColor: "#1E4E3F",
  envelopeLiningColor: "#265F4D",

  // Envelope borders & shadows
  envelopeBorderColor: "rgba(201, 213, 172, 0.28)",
  galleryBorderColor: "rgba(201, 213, 172, 0.28)",
  envelopeBorderBrightColor: "rgba(201, 213, 172, 0.65)",
  envelopeShadowColor: "rgba(0, 0, 0, 0.5)",
  envelopeShadowIntensity: 1,
  envelopeTextureOpacity: 1,

  // Wax seal & monogram
  waxSealColor: "#0D2A20",
  waxSealMid: "#153F31",
  waxSealHighlight: "#235E4B",
  sealTextColor: "#F7F1E6",
  monogramColor: "#C9D5AC",

  // Accents
  envelopeAccentColor: "#C9D5AC",
  envelopeAccentBrightColor: "#E2EDC8",

  // Photo frames & controls
  photoFrameBorder: "rgba(201, 213, 172, 0.25)",
  printBorderColor: "#F7F1E6",
  navButtonBg: "rgba(21, 59, 47, 0.45)",
  navButtonBorder: "rgba(201, 213, 172, 0.35)",
  navButtonColor: "#F7F1E6",
};

// =============================================================================
// PRESET 2: HERITAGE (All 12 Heritage destinations)
// =============================================================================
export const heritageGalleryTheme: GalleryThemeConfig = {
  theme: "heritage",

  // Background
  galleryBg: "#4B2922",
  galleryFullscreenBg: "#2A1410",
  galleryBackgroundMode: "gradient",
  galleryGradient: "linear-gradient(180deg, #5C332B 0%, #4B2922 45%, #2A1410 100%)",
  galleryOverlayOpacity: 1,
  galleryTextureOpacity: 0.09,

  // Typography
  galleryTextColor: "#FFF1E3",
  galleryMutedColor: "rgba(255, 241, 227, 0.72)",
  galleryAccentColor: "#D8AF79",

  // Envelope surfaces
  envelopeBodyColor: "#8f4c4c",
  envelopeFrontColor: "#5C332B",
  gallerySurfaceColor: "#5C332B",
  envelopeBackColor: "#3F221C",
  envelopeFlapColor: "#683931",
  envelopeLiningColor: "#7B4339",

  // Envelope borders & shadows
  envelopeBorderColor: "rgba(216, 175, 121, 0.28)",
  galleryBorderColor: "rgba(216, 175, 121, 0.28)",
  envelopeBorderBrightColor: "rgba(216, 175, 121, 0.65)",
  envelopeShadowColor: "rgba(0, 0, 0, 0.55)",
  envelopeShadowIntensity: 1,
  envelopeTextureOpacity: 1,

  // Wax seal & monogram
  waxSealColor: "#2C1410",
  waxSealMid: "#45201A",
  waxSealHighlight: "#6E342B",
  sealTextColor: "#FFF1E3",
  monogramColor: "#D8AF79",

  // Accents
  envelopeAccentColor: "#D8AF79",
  envelopeAccentBrightColor: "#ECD0A6",

  // Photo frames & controls
  photoFrameBorder: "rgba(216, 175, 121, 0.25)",
  printBorderColor: "#FFF1E3",
  navButtonBg: "rgba(75, 41, 34, 0.45)",
  navButtonBorder: "rgba(216, 175, 121, 0.35)",
  navButtonColor: "#FFF1E3",
};

// =============================================================================
// PRESET 3: WILDLIFE (All 10 Wildlife destinations)
// =============================================================================
export const wildlifeGalleryTheme: GalleryThemeConfig = {
  theme: "wildlife",

  // Background
  galleryBg: "#0D281F",
  galleryFullscreenBg: "#061711",
  galleryBackgroundMode: "gradient",
  galleryGradient: "linear-gradient(180deg, #13382C 0%, #0D281F 45%, #061711 100%)",
  galleryOverlayOpacity: 1,
  galleryTextureOpacity: 0.09,

  // Typography
  galleryTextColor: "#F3F3E8",
  galleryMutedColor: "rgba(243, 243, 232, 0.72)",
  galleryAccentColor: "#C1CD9A",

  // Envelope surfaces
  envelopeBodyColor: "#0D281F",
  envelopeFrontColor: "#13382C",
  gallerySurfaceColor: "#13382C",
  envelopeBackColor: "#0A2018",
  envelopeFlapColor: "#194637",
  envelopeLiningColor: "#215846",

  // Envelope borders & shadows
  envelopeBorderColor: "rgba(193, 205, 154, 0.28)",
  galleryBorderColor: "rgba(193, 205, 154, 0.28)",
  envelopeBorderBrightColor: "rgba(193, 205, 154, 0.65)",
  envelopeShadowColor: "rgba(0, 0, 0, 0.5)",
  envelopeShadowIntensity: 1,
  envelopeTextureOpacity: 1,

  // Wax seal & monogram
  waxSealColor: "#06150F",
  waxSealMid: "#0E291F",
  waxSealHighlight: "#1B4A39",
  sealTextColor: "#F3F3E8",
  monogramColor: "#C1CD9A",

  // Accents
  envelopeAccentColor: "#C1CD9A",
  envelopeAccentBrightColor: "#D9E4B7",

  // Photo frames & controls
  photoFrameBorder: "rgba(193, 205, 154, 0.25)",
  printBorderColor: "#F3F3E8",
  navButtonBg: "rgba(13, 40, 31, 0.45)",
  navButtonBorder: "rgba(193, 205, 154, 0.35)",
  navButtonColor: "#F3F3E8",
};

// =============================================================================
// PRESET 4: SPIRITUALITY (All 10 Spirituality destinations)
// =============================================================================
export const spiritualityGalleryTheme: GalleryThemeConfig = {
  theme: "spirituality",

  // Background
  galleryBg: "#390E13",
  galleryFullscreenBg: "#1D0508",
  galleryBackgroundMode: "gradient",
  galleryGradient: "linear-gradient(180deg, #4A151B 0%, #390E13 45%, #1D0508 100%)",
  galleryOverlayOpacity: 1,
  galleryTextureOpacity: 0.09,

  // Typography
  galleryTextColor: "#F9EDDB",
  galleryMutedColor: "rgba(249, 237, 219, 0.72)",
  galleryAccentColor: "#D6B77F",

  // Envelope surfaces
  envelopeBodyColor: "#390E13",
  envelopeFrontColor: "#4A151B",
  gallerySurfaceColor: "#4A151B",
  envelopeBackColor: "#2C0A0E",
  envelopeFlapColor: "#591A21",
  envelopeLiningColor: "#691E28",

  // Envelope borders & shadows
  envelopeBorderColor: "rgba(214, 183, 127, 0.28)",
  galleryBorderColor: "rgba(214, 183, 127, 0.28)",
  envelopeBorderBrightColor: "rgba(214, 183, 127, 0.65)",
  envelopeShadowColor: "rgba(0, 0, 0, 0.55)",
  envelopeShadowIntensity: 1,
  envelopeTextureOpacity: 1,

  // Wax seal & monogram
  waxSealColor: "#1D0508",
  waxSealMid: "#320B10",
  waxSealHighlight: "#54151C",
  sealTextColor: "#F9EDDB",
  monogramColor: "#D6B77F",

  // Accents
  envelopeAccentColor: "#D6B77F",
  envelopeAccentBrightColor: "#ECD3A4",

  // Photo frames & controls
  photoFrameBorder: "rgba(214, 183, 127, 0.25)",
  printBorderColor: "#F9EDDB",
  navButtonBg: "rgba(57, 14, 19, 0.45)",
  navButtonBorder: "rgba(214, 183, 127, 0.35)",
  navButtonColor: "#F9EDDB",
};

// =============================================================================
// CENTRAL REGISTRY & RESOLVER
// =============================================================================
export const galleryThemes: Record<string, GalleryThemeConfig> = {
  nature: natureGalleryTheme,
  heritage: heritageGalleryTheme,
  wildlife: wildlifeGalleryTheme,
  spirituality: spiritualityGalleryTheme,
};

/**
 * Resolves the theme config given a theme label (e.g. 'Nature', 'Heritage',
 * 'Wildlife', 'Spirituality') or slug. Falls back cleanly to 'nature'.
 */
export function getGalleryTheme(themeSlugOrLabel?: string): GalleryThemeConfig {
  if (!themeSlugOrLabel) return natureGalleryTheme;
  const key = themeSlugOrLabel.trim().toLowerCase();
  return galleryThemes[key] || natureGalleryTheme;
}

/**
 * Converts a GalleryThemeConfig into standard GalleryOverrides for backwards
 * compatibility with any subsystem reading the legacy config tree.
 */
export function galleryThemeToGalleryOverrides(theme: GalleryThemeConfig): GalleryOverrides {
  return {
    colors: {
      forest: theme.galleryBg,
      forestDeep: theme.galleryFullscreenBg,
      copper: theme.galleryAccentColor,
      copperBright: theme.envelopeAccentBrightColor,
      ivory: theme.galleryTextColor,
      ivoryMuted: theme.galleryMutedColor,
      wax: theme.waxSealColor,
      waxMid: theme.waxSealMid,
      waxHighlight: theme.waxSealHighlight,
      paper: theme.envelopeFrontColor,
      paperLight: theme.envelopeBackColor,
      lining: theme.envelopeLiningColor,
    },
    section: {
      atmosphereOpacity: String(theme.galleryOverlayOpacity),
    },
  };
}
