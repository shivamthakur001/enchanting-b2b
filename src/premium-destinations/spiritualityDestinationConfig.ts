/**
 * ============================================================================
 * SPIRITUALITY PREMIUM DESTINATION — CENTRALIZED BACKGROUND CONTROL SYSTEM
 * ============================================================================
 * 
 * This file centrally controls SECTION BACKGROUND COLORS, accent tokens, and
 * design parameters for all Spirituality premium destination detail pages
 * (Ujjain, Omkareshwar, Maheshwar, Chitrakoot, Amarkantak, Bhojpur, Maihar,
 * Salkanpur, Datia, Mandsaur).
 * 
 * IMPORTANT RULES:
 * 1. These settings ONLY apply to Spirituality destinations.
 *    Nature, Heritage, and Wildlife pages remain completely isolated and unaffected.
 * 2. Landing page background config (src/config/spiritualityTempleBackgroundConfig.ts)
 *    is strictly independent from this destination detail config.
 * 3. Typography, buttons, animations, and card layouts inherit from the approved template.
 * 4. Default palette is common across Spirituality destinations; destination-specific
 *    customizations can be specified in 'destinationOverrides'.
 * 
 * PRECEDENCE ORDER:
 * 1. Base universal defaults (destinationDetailConfig.ts)
 * 2. Spirituality global defaults (defaultBackgrounds below)
 * 3. Destination-specific Spirituality background overrides (destinationOverrides below)
 * 4. Content file customDesign (e.g. ujjainContent.customDesign)
 * 5. Caller config prop (<DestinationDetailPage config={...} />)
 */

import type { DestinationDetailDesign } from './destinationDetailConfig';

export interface SpiritualityDestinationBackgrounds {
  /** Page base background color (Warm Temple Parchment) */
  pageBackground: string;

  /** Overview section ("Why Destination Works") background (Temple Ivory) */
  overviewBg: string;

  /** Highlights section ("Iconic Highlights") background (Deep Sacred Sanctum / Antique Brown) */
  highlightsBg: string;

  /** Activities & Experiences section background (Warm Temple Parchment) */
  themesBg: string;

  /** Seasons & Getting There section background (Light Sandstone Ivory) */
  seasonsBg: string;

  /** Recommended Packages section background (Warm Antique Sandstone) */
  packagesBg: string;

  /**
   * Final CTA section background color.
   * Controls the exact visible background of the conversion banner.
   * In 'solid' mode, this color renders 100% pure without competing dark gradients or photo overlays.
   */
  ctaBg: string;

  /**
   * Final CTA background treatment mode:
   * - 'solid' (default): Pure, accurate solid background matching `ctaBg` without unwanted gradients or photo tints.
   * - 'cinematic': Preserves photographic background image with configurable `ctaOverlayGradient` and `ctaOverlayOpacity`.
   */
  ctaBackgroundMode?: 'solid' | 'cinematic';

  /**
   * Optional CTA heading and body text color override.
   * If not set, automatically resolves high-contrast readable colors based on whether `ctaBg` is light or dark.
   */
  ctaTextColor?: string;

  /** Optional override for CTA heading text color (defaults to ctaTextColor or auto-contrast tone) */
  ctaHeadingColor?: string;

  /** Optional override for CTA description text color (defaults to complementary readable tone) */
  ctaDescColor?: string;

  /** Optional override for CTA eyebrow text color (defaults to muted antique gold) */
  ctaEyebrowColor?: string;

  /** Optional override for CTA outline button text color */
  ctaOutlineBtnColor?: string;

  /** Optional override for CTA outline button border color */
  ctaOutlineBtnBorder?: string;

  /** Optional override for CTA outline button background */
  ctaOutlineBtnBg?: string;

  /** Optional override for CTA gold action button background */
  ctaGoldBtnBg?: string;

  /** Optional override for CTA gold action button text color */
  ctaGoldBtnText?: string;

  /** Optional override for CTA circular icon container background */
  ctaIconBg?: string;

  /** Optional override for CTA circular icon SVG color */
  ctaIconColor?: string;

  /** Optional CTA overlay opacity (e.g. '0.85'). In 'solid' mode, this is automatically forced to '0'. */
  ctaOverlayOpacity?: string;

  /** Optional CTA background image intensity/opacity. In 'solid' mode, this is automatically '0'. */
  ctaImageOpacity?: string;

  /** Optional custom overlay gradient for 'cinematic' mode. In 'solid' mode, this is automatically 'none'. */
  ctaOverlayGradient?: string;

  /** Primary accent color token (Muted Antique Gold) */
  copper: string;

  /** Forest/deep accent token for titles and dark surfaces */
  forestDeep: string;

  /** Light neutral surface token (Temple Ivory) */
  cream: string;

  /** Secondary neutral token (Parchment) */
  parchment: string;
}

export interface SpiritualityDestinationConfigSchema {
  /** Default backgrounds for all Spirituality destination pages */
  defaultBackgrounds: SpiritualityDestinationBackgrounds;
  /** Destination-wise optional overrides (slug -> partial background properties) */
  destinationOverrides: Record<string, Partial<SpiritualityDestinationBackgrounds>>;
}

export const spiritualityDestinationConfig: SpiritualityDestinationConfigSchema = {
  // ==========================================================================
  // A. DEFAULT BACKGROUNDS (Applied to all Spirituality destination detail pages)
  // ==========================================================================
  defaultBackgrounds: {
    // 1. Page Base Background — Warm Temple Parchment
    pageBackground: '#F5EFEB',

    // 2. Overview Section Background ("Why Destination Works") — Temple Ivory
    overviewBg: '#FAF7F0',

    // 3. Highlights Section Background ("Iconic Experiences") — Deep Sacred Sanctum
    highlightsBg: '#f5f5f5',

    // 4. Activities & Themes Background ("Activities & Experiences") — Warm Temple Parchment
    themesBg: '#F5EFEB',

    // 5. Seasons & Getting There Background ("Best Time to Visit") — Light Sandstone Ivory
    seasonsBg: '#FAF7F0',

    // 6. Recommended Packages Section Background — Elegant Warm Sandstone
    packagesBg: '#EBE3D7',

    // 7. Final CTA Section Background — Pure, solid, customizable color
    ctaBg: '#e6ccb2',

    // CTA Background Mode — 'solid' ensures ctaBg appears pure and undistorted without overlays
    ctaBackgroundMode: 'solid',

    // Accent and neutral design tokens matching Temple Ivory + Muted Gold identity
    copper: '#B89758',
    forestDeep: '#1C1712',
    cream: '#FAF7F0',
    parchment: '#F5EFEB',
  },

  // ==========================================================================
  // B. PER-DESTINATION OVERRIDES (Optional — specific destination overrides)
  // ==========================================================================
  destinationOverrides: {
    ujjain: {},
    omkareshwar: {},
    maheshwar: {},
    chitrakoot: {},
    amarkantak: {},
    bhojpur: {},
    maihar: {},
    salkanpur: {},
    datia: {},
    mandsaur: {},
  },
};

/**
 * Calculates whether a color string is light or dark to ensure optimal, accessible text contrast.
 */
export function isLightColor(colorStr?: string): boolean {
  if (!colorStr) return false;
  const hex = colorStr.replace('#', '').trim();
  let r = 255;
  let g = 255;
  let b = 255;

  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length >= 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    return false;
  }

  // Perceived relative luminance
  const luminance = (r * 299 + g * 587 + b * 114) / 1000;
  return luminance > 150;
}

/**
 * Generates the full set of CSS custom variables for the Spirituality Final CTA.
 * In 'solid' mode, it completely disables the overlay gradient and photo layer,
 * ensuring the chosen `ctaBg` renders 100% accurate and unclouded.
 */
export function getSpiritualityCtaCssVars(
  config: Partial<SpiritualityDestinationBackgrounds>,
): Record<string, string> {
  const ctaBg = config.ctaBg ?? '#ecc6a0';
  const mode = config.ctaBackgroundMode ?? 'solid';
  const isLight = isLightColor(ctaBg);

  // High-contrast readable typography
  const textColor = config.ctaTextColor ?? (isLight ? '#1C1712' : '#FFFFFF');
  const headingColor = config.ctaHeadingColor ?? textColor;
  const descColor = config.ctaDescColor ?? (isLight ? '#4A3E31' : '#E8E2D8');
  const eyebrowColor = config.ctaEyebrowColor ?? (isLight ? '#8C682A' : '#C4A574');

  // Button contrast
  const outlineBtnColor = config.ctaOutlineBtnColor ?? (isLight ? '#1C1712' : '#FFFFFF');
  const outlineBtnBorder = config.ctaOutlineBtnBorder ?? (isLight ? '#8C682A' : '#C4A574');
  const outlineBtnBg = config.ctaOutlineBtnBg ?? (isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.15)');

  // If ctaBg is gold (#B89758), use dark action button for distinct contrast; otherwise use antique gold
  const isGoldBg = ctaBg.toUpperCase().replace(/\s/g, '') === '#B89758';
  const goldBtnBg = config.ctaGoldBtnBg ?? (isGoldBg ? '#1C1712' : '#B89758');
  const goldBtnText = config.ctaGoldBtnText ?? (isGoldBg ? '#FFFFFF' : '#172b22');

  // Icon styling
  const iconBg = config.ctaIconBg ?? (isLight ? '#EDE4D3' : '#2A2219');
  const iconColor = config.ctaIconColor ?? '#B89758';

  // Overlay management
  const overlayOpacity = mode === 'solid' ? '0' : (config.ctaOverlayOpacity ?? '0.85');
  const overlayGradient = mode === 'solid' ? 'none' : (config.ctaOverlayGradient ?? (
    isLight
      ? 'linear-gradient(90deg, rgba(250, 247, 240, 0.94), rgba(245, 239, 235, 0.78))'
      : 'linear-gradient(90deg, rgba(28, 23, 18, 0.95), rgba(28, 23, 18, 0.78))'
  ));

  return {
    '--empd-cta-bg': ctaBg,
    '--empd-cta-overlay-opacity': overlayOpacity,
    '--empd-cta-overlay-gradient': overlayGradient,
    '--empd-cta-text-color': textColor,
    '--empd-cta-heading-color': headingColor,
    '--empd-cta-desc-color': descColor,
    '--empd-cta-eyebrow-color': eyebrowColor,
    '--empd-cta-outline-btn-text': outlineBtnColor,
    '--empd-cta-outline-btn-border': outlineBtnBorder,
    '--empd-cta-outline-btn-bg': outlineBtnBg,
    '--empd-cta-gold-btn-bg': goldBtnBg,
    '--empd-cta-gold-btn-text': goldBtnText,
    '--empd-cta-icon-bg': iconBg,
    '--empd-cta-icon-color': iconColor,
  };
}

/**
 * Resolves the final design configuration for a Spirituality destination.
 * 
 * Order of precedence:
 * 1. Base universal defaults (destinationDetailConfig.ts)
 * 2. Spirituality global defaults (defaultBackgrounds)
 * 3. Destination-specific Spirituality background overrides (destinationOverrides[destinationId])
 * 4. Content file's customDesign (content.customDesign)
 * 
 * @param destinationId - Canonical destination slug (e.g. 'ujjain')
 * @param contentCustomDesign - Optional customDesign object from content file
 * @returns Combined partial design configuration
 */
export function getSpiritualityDestinationDesign(
  destinationId: string,
  contentCustomDesign?: Partial<DestinationDetailDesign>,
): Partial<DestinationDetailDesign> {
  const normalizedId = destinationId.toLowerCase();
  const globalDefaults = spiritualityDestinationConfig.defaultBackgrounds;
  const destinationSpecific = spiritualityDestinationConfig.destinationOverrides[normalizedId] ?? {};

  const merged = {
    ...globalDefaults,
    ...destinationSpecific,
    ...contentCustomDesign,
  };

  const ctaVars = getSpiritualityCtaCssVars(merged);

  return {
    ...merged,
    ctaBg: merged.ctaBg,
    ctaOverlayOpacity: ctaVars['--empd-cta-overlay-opacity'],
    ctaOverlayGradient: ctaVars['--empd-cta-overlay-gradient'],
    ctaGoldBtnBg: ctaVars['--empd-cta-gold-btn-bg'],
    ctaOutlineBtnBorder: ctaVars['--empd-cta-outline-btn-border'],
  };
}
