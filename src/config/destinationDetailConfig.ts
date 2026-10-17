/**
 * destinationDetailConfig.ts
 * Centralized design control system for all Destination Detail Pages.
 *
 * HOW TO USE:
 *   Import `destinationDetailConfig` and call `buildDDCSSVars(destinationDetailConfig)`
 *   to produce an inline CSS custom property object for the page root element.
 *   All CSS in DestinationDetailPage.css consumes `var(--dd-*)` tokens with safe fallbacks.
 *
 * THEME OVERRIDES:
 *   Pass a Partial<DestinationDetailConfig> into `resolveConfig(base, override)` to create
 *   per-destination or per-theme variants (Nature, Heritage, Wildlife, Spirituality).
 *
 * SCOPING:
 *   All tokens use the `--dd-` namespace, scoped to `.dd-page`.
 *   No homepage or global styles are affected.
 */

// ═══════════════════════════════════════════════════════════════════════════
//  TYPE DEFINITION
// ═══════════════════════════════════════════════════════════════════════════

export interface DestinationDetailConfig {
  // A. PAGE LAYOUT
  /** Max container width for content. Change to widen or narrow the readable line. */
  containerMaxWidth: string;
  /** Horizontal section padding — applied left/right of the container */
  sectionPaddingX: string;
  /** Vertical space between major sections */
  sectionGapY: string;
  /** Inner vertical padding inside each section */
  sectionPaddingY: string;

  // B. HERO SECTION
  /** Hero background image height on desktop */
  heroHeight: string;
  /** Hero minimum height — prevents collapse on small screens */
  heroMinHeight: string;
  /** CSS object-fit for the hero image */
  heroObjectFit: string;
  /** Hero image position X (CSS object-position) */
  heroObjectPositionX: string;
  /** Hero image position Y (CSS object-position) */
  heroObjectPositionY: string;
  /** Brightness filter on hero image (1 = normal, 0.7 = darker) */
  heroBrightness: number;
  /** Contrast filter on hero image */
  heroContrast: number;
  /** Gaussian blur on hero image in px ("0px" = off) */
  heroBlur: string;
  /** Bottom gradient — darkest stop (bottom of hero, where title sits) */
  heroOverlayStop1: string;
  /** Bottom gradient — mid-dark stop */
  heroOverlayStop2: string;
  /** Bottom gradient — top mid stop */
  heroOverlayStop3: string;
  /** Bottom gradient — top fade to transparent */
  heroOverlayStop4: string;
  /** Subtle top vignette gradient (dark to transparent) */
  heroTopOverlay: string;

  // C. TYPOGRAPHY — Hero
  /** Destination title size (CSS clamp expression or fixed value) */
  heroTitleSize: string;
  /** Destination title weight */
  heroTitleWeight: number;
  /** Hero description font size */
  heroDescSize: string;
  /** Hero description line height */
  heroDescLineHeight: number;
  /** Hero metadata (quick facts) font size */
  heroMetaSize: string;

  // D. TYPOGRAPHY — Body
  /** Primary section heading size */
  headingPrimarySize: string;
  /** Secondary heading size (card titles, sub-sections) */
  headingSecondarySize: string;
  /** Body text size */
  bodySize: string;
  /** Body text line height */
  bodyLineHeight: number;
  /** Caption / label font size */
  captionSize: string;
  /** Eyebrow / overline text size */
  eyebrowSize: string;
  /** Eyebrow letter spacing */
  eyebrowTracking: string;

  // E. COLOR PALETTE
  /** Primary green — used for section backgrounds, borders, and accents */
  colorGreen: string;
  /** Deep forest green for hero tones and heavy accents */
  colorGreenDeep: string;
  /** Mid-green for hover states */
  colorGreenMid: string;
  /** Soft green — light background tint used on alternating sections */
  colorGreenSoft: string;
  /** Ivory / parchment — warm light surface for alternating sections */
  colorIvory: string;
  /** Deep ivory — slightly richer warm background */
  colorIvoryDeep: string;
  /** Cream — the lightest background surface */
  colorCream: string;
  /** Copper / saffron accent — used for highlights and tags */
  colorCopper: string;
  /** Deep copper for hover states */
  colorCopperDeep: string;
  /** Ink — primary text color */
  colorInk: string;
  /** Ink muted — secondary body text */
  colorInkMuted: string;
  /** Ink soft — captions, metadata */
  colorInkSoft: string;
  /** Border / line color */
  colorLine: string;

  // F. CARDS — General
  /** Border radius for all cards */
  cardRadius: string;
  /** Card background color (used on light-surface cards) */
  cardBg: string;
  /** Card box shadow */
  cardShadow: string;
  /** Card hover shadow */
  cardHoverShadow: string;
  /** Gap between cards in a grid */
  cardGridGap: string;

  // G. IMAGE CARDS — Experience & Package Cards
  /** Aspect ratio for experience image cards (width/height as CSS value) */
  expCardAspect: string;
  /** Experience number badge font size */
  expNumberSize: string;
  /** Experience card columns on desktop (CSS grid repeat count) */
  expGridCols: string;
  /** Package card aspect ratio */
  pkgCardAspect: string;
  /** Package card grid columns on desktop */
  pkgGridCols: string;

  // H. THEME CARDS (2×2 grid)
  /** Theme category card aspect ratio */
  themeCardAspect: string;
  /** Theme card border radius */
  themeCardRadius: string;

  // I. CTA SECTION
  /** CTA section background color */
  ctaBg: string;
  /** CTA primary button background */
  ctaBtnBg: string;
  /** CTA primary button text color */
  ctaBtnText: string;
  /** CTA primary button hover background */
  ctaBtnHoverBg: string;
  /** CTA secondary button outline color */
  ctaOutlineBg: string;
  /** CTA button border radius */
  ctaBtnRadius: string;
  /** CTA button padding (vertical) */
  ctaBtnPaddingY: string;
  /** CTA button padding (horizontal) */
  ctaBtnPaddingX: string;
  /** CTA heading font size */
  ctaHeadingSize: string;

  // J. ANIMATION
  /** Reveal animation fade-up distance in px */
  fadeUpDistance: string;
  /** Reveal animation transition duration */
  revealDuration: string;
  /** Image hover zoom scale (e.g. 1.04) */
  hoverZoom: number;
  /** Image hover transition duration */
  hoverZoomDuration: string;
}

// ═══════════════════════════════════════════════════════════════════════════
//  BASE NATURE CONFIG (Pachmarhi default — deep forest green + ivory)
// ═══════════════════════════════════════════════════════════════════════════

export const destinationDetailConfig: DestinationDetailConfig = {
  // A. PAGE LAYOUT
  containerMaxWidth: "1200px",
  sectionPaddingX: "clamp(1.25rem, 4vw, 3rem)",
  sectionGapY: "clamp(3.5rem, 7vw, 7rem)",
  sectionPaddingY: "clamp(2.5rem, 5vw, 5rem)",

  // B. HERO SECTION
  heroHeight: "88vh",
  heroMinHeight: "560px",
  heroObjectFit: "cover",
  heroObjectPositionX: "center",
  heroObjectPositionY: "60%",
  heroBrightness: 0.88,
  heroContrast: 1.05,
  heroBlur: "0px",
  // Gradient: dense dark at bottom where text sits, fading upward
  heroOverlayStop1: "rgba(14,22,14,0.97)",
  heroOverlayStop2: "rgba(17,27,17,0.82)",
  heroOverlayStop3: "rgba(20,32,20,0.45)",
  heroOverlayStop4: "rgba(12,18,12,0.05)",
  heroTopOverlay: "rgba(12,18,12,0.22)",

  // C. TYPOGRAPHY — Hero
  heroTitleSize: "clamp(2.6rem, 6vw, 5.2rem)",
  heroTitleWeight: 400,
  heroDescSize: "clamp(1rem, 1.4vw, 1.2rem)",
  heroDescLineHeight: 1.65,
  heroMetaSize: "0.82rem",

  // D. TYPOGRAPHY — Body
  headingPrimarySize: "clamp(1.9rem, 3.5vw, 2.9rem)",
  headingSecondarySize: "clamp(1.3rem, 2vw, 1.7rem)",
  bodySize: "clamp(0.93rem, 1.1vw, 1.02rem)",
  bodyLineHeight: 1.72,
  captionSize: "0.8rem",
  eyebrowSize: "0.72rem",
  eyebrowTracking: "0.18em",

  // E. COLOR PALETTE (Nature/Green theme)
  colorGreen: "#2a4536",
  colorGreenDeep: "#1c3228",
  colorGreenMid: "#3d5c4a",
  colorGreenSoft: "#e8f0eb",
  colorIvory: "#f4f0e6",
  colorIvoryDeep: "#ede8da",
  colorCream: "#fbf8f3",
  colorCopper: "#b87a38",
  colorCopperDeep: "#9b6830",
  colorInk: "#171411",
  colorInkMuted: "#5a544c",
  colorInkSoft: "#8a8378",
  colorLine: "#ddd8cc",

  // F. CARDS — General
  cardRadius: "16px",
  cardBg: "#ffffff",
  cardShadow: "0 6px 24px -8px rgba(23,20,17,0.14)",
  cardHoverShadow: "0 12px 36px -10px rgba(23,20,17,0.22)",
  cardGridGap: "clamp(1rem, 2vw, 1.5rem)",

  // G. IMAGE CARDS
  expCardAspect: "4 / 3",
  expNumberSize: "0.72rem",
  expGridCols: "3",
  pkgCardAspect: "16 / 10",
  pkgGridCols: "3",

  // H. THEME CARDS
  themeCardAspect: "4 / 3",
  themeCardRadius: "16px",

  // I. CTA
  ctaBg: "#1c3228",
  ctaBtnBg: "#f4f0e6",
  ctaBtnText: "#1c3228",
  ctaBtnHoverBg: "#ffffff",
  ctaOutlineBg: "rgba(244,240,230,0.2)",
  ctaBtnRadius: "10px",
  ctaBtnPaddingY: "0.85rem",
  ctaBtnPaddingX: "2rem",
  ctaHeadingSize: "clamp(1.7rem, 3vw, 2.5rem)",

  // J. ANIMATION
  fadeUpDistance: "22px",
  revealDuration: "0.55s",
  hoverZoom: 1.04,
  hoverZoomDuration: "0.4s",
};

// ═══════════════════════════════════════════════════════════════════════════
//  THEME OVERRIDE PRESETS (for future destinations)
// ═══════════════════════════════════════════════════════════════════════════

/** Heritage override: warm stone + amber accents */
export const heritageThemeOverride: Partial<DestinationDetailConfig> = {
  colorGreen: "#7a5230",
  colorGreenDeep: "#5c3c22",
  colorGreenMid: "#9a6844",
  colorGreenSoft: "#f3ede2",
  colorIvory: "#f7f1e6",
  colorCopper: "#c17a38",
  heroOverlayStop1: "rgba(32,20,10,0.97)",
  heroOverlayStop2: "rgba(40,25,12,0.80)",
  ctaBg: "#5c3c22",
  ctaBtnText: "#5c3c22",
};

/** Wildlife override: dark earth + deep amber */
export const wildlifeThemeOverride: Partial<DestinationDetailConfig> = {
  colorGreen: "#4a3520",
  colorGreenDeep: "#2e2010",
  colorGreenMid: "#6a4e32",
  colorGreenSoft: "#f0ebe0",
  colorIvory: "#f5f0e4",
  colorCopper: "#c48832",
  heroOverlayStop1: "rgba(22,14,6,0.97)",
  heroOverlayStop2: "rgba(28,18,8,0.80)",
  ctaBg: "#2e2010",
  ctaBtnText: "#2e2010",
};

/** Spirituality override: deep saffron + gold */
export const spiritualityThemeOverride: Partial<DestinationDetailConfig> = {
  colorGreen: "#8c5e20",
  colorGreenDeep: "#6a4418",
  colorGreenMid: "#a87832",
  colorGreenSoft: "#f6f0de",
  colorIvory: "#faf6ec",
  colorCopper: "#d4962a",
  heroOverlayStop1: "rgba(32,18,4,0.97)",
  heroOverlayStop2: "rgba(40,22,6,0.80)",
  ctaBg: "#6a4418",
  ctaBtnText: "#6a4418",
};

// ═══════════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Merges a base config with a theme override.
 * Use this to create destination-specific configs without duplicating the full object.
 */
export function resolveConfig(
  base: DestinationDetailConfig,
  override: Partial<DestinationDetailConfig>,
): DestinationDetailConfig {
  return { ...base, ...override };
}

/**
 * Converts a DestinationDetailConfig into a flat React CSSProperties object
 * of `--dd-*` custom properties to be applied inline on the page root.
 */
export function buildDDCSSVars(
  config: DestinationDetailConfig,
): Record<string, string | number> {
  return {
    // Layout
    "--dd-max-w": config.containerMaxWidth,
    "--dd-px": config.sectionPaddingX,
    "--dd-gap-y": config.sectionGapY,
    "--dd-py": config.sectionPaddingY,

    // Hero
    "--dd-hero-h": config.heroHeight,
    "--dd-hero-min-h": config.heroMinHeight,
    "--dd-hero-fit": config.heroObjectFit,
    "--dd-hero-pos-x": config.heroObjectPositionX,
    "--dd-hero-pos-y": config.heroObjectPositionY,
    "--dd-hero-brightness": config.heroBrightness,
    "--dd-hero-contrast": config.heroContrast,
    "--dd-hero-blur": config.heroBlur,
    "--dd-hero-stop1": config.heroOverlayStop1,
    "--dd-hero-stop2": config.heroOverlayStop2,
    "--dd-hero-stop3": config.heroOverlayStop3,
    "--dd-hero-stop4": config.heroOverlayStop4,
    "--dd-hero-top-overlay": config.heroTopOverlay,

    // Typography — hero
    "--dd-hero-title-size": config.heroTitleSize,
    "--dd-hero-title-weight": config.heroTitleWeight,
    "--dd-hero-desc-size": config.heroDescSize,
    "--dd-hero-desc-lh": config.heroDescLineHeight,
    "--dd-hero-meta-size": config.heroMetaSize,

    // Typography — body
    "--dd-heading-primary": config.headingPrimarySize,
    "--dd-heading-secondary": config.headingSecondarySize,
    "--dd-body-size": config.bodySize,
    "--dd-body-lh": config.bodyLineHeight,
    "--dd-caption-size": config.captionSize,
    "--dd-eyebrow-size": config.eyebrowSize,
    "--dd-eyebrow-tracking": config.eyebrowTracking,

    // Colors
    "--dd-green": config.colorGreen,
    "--dd-green-deep": config.colorGreenDeep,
    "--dd-green-mid": config.colorGreenMid,
    "--dd-green-soft": config.colorGreenSoft,
    "--dd-ivory": config.colorIvory,
    "--dd-ivory-deep": config.colorIvoryDeep,
    "--dd-cream": config.colorCream,
    "--dd-copper": config.colorCopper,
    "--dd-copper-deep": config.colorCopperDeep,
    "--dd-ink": config.colorInk,
    "--dd-ink-muted": config.colorInkMuted,
    "--dd-ink-soft": config.colorInkSoft,
    "--dd-line": config.colorLine,

    // Cards
    "--dd-card-radius": config.cardRadius,
    "--dd-card-bg": config.cardBg,
    "--dd-card-shadow": config.cardShadow,
    "--dd-card-hover-shadow": config.cardHoverShadow,
    "--dd-card-gap": config.cardGridGap,

    // Experience & Package cards
    "--dd-exp-aspect": config.expCardAspect,
    "--dd-exp-number-size": config.expNumberSize,
    "--dd-exp-cols": config.expGridCols,
    "--dd-pkg-aspect": config.pkgCardAspect,
    "--dd-pkg-cols": config.pkgGridCols,

    // Theme cards
    "--dd-theme-aspect": config.themeCardAspect,
    "--dd-theme-radius": config.themeCardRadius,

    // CTA
    "--dd-cta-bg": config.ctaBg,
    "--dd-cta-btn-bg": config.ctaBtnBg,
    "--dd-cta-btn-text": config.ctaBtnText,
    "--dd-cta-btn-hover-bg": config.ctaBtnHoverBg,
    "--dd-cta-outline-bg": config.ctaOutlineBg,
    "--dd-cta-btn-radius": config.ctaBtnRadius,
    "--dd-cta-btn-py": config.ctaBtnPaddingY,
    "--dd-cta-btn-px": config.ctaBtnPaddingX,
    "--dd-cta-heading-size": config.ctaHeadingSize,

    // Animation
    "--dd-fadeup-dist": config.fadeUpDistance,
    "--dd-reveal-dur": config.revealDuration,
    "--dd-hover-zoom": config.hoverZoom,
    "--dd-hover-dur": config.hoverZoomDuration,
  };
}
