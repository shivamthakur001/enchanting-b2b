/**
 * ============================================================================
 * WILDLIFE PREMIUM DESTINATION — CENTRALIZED BACKGROUND CONTROL SYSTEM
 * ============================================================================
 * 
 * This file centrally controls SECTION BACKGROUND COLORS and design tokens
 * for all Wildlife premium destination detail pages (Kanha, Pench, Bandhavgarh, etc.).
 * 
 * IMPORTANT RULES:
 * 1. These settings ONLY apply to Wildlife destinations. Nature pages (Pachmarhi, etc.)
 *    and Heritage pages (Khajuraho, Orchha, etc.) remain completely isolated and unaffected.
 * 2. Typography, buttons, animations, and card layouts inherit from the approved template.
 * 3. Default palette is common across Wildlife destinations; destination-specific
 *    customizations can be specified in 'destinationOverrides'.
 * 
 * PRECEDENCE ORDER:
 * 1. Base universal defaults (destinationDetailConfig.ts)
 * 2. Wildlife global defaults (defaultBackgrounds below)
 * 3. Destination-specific Wildlife background overrides (destinationOverrides below)
 * 4. Content file customDesign (e.g. kanhaContent.customDesign)
 * 5. Caller config prop (<DestinationDetailPage config={...} />)
 */

import type { DestinationDetailDesign } from './destinationDetailConfig';

export interface WildlifeDestinationBackgrounds {
  /** Page base background color */
  pageBackground: string;

  /** Overview section ("Why Destination Works") background */
  overviewBg: string;

  /** Highlights section ("Iconic Highlights") background — deep emerald jungle */
  highlightsBg: string;

  /** Activities & Experiences section background */
  themesBg: string;

  /** Seasons & Getting There section background */
  seasonsBg: string;

  /** Recommended Packages section background */
  packagesBg: string;

  /** Final CTA section background — deep emerald wilderness */
  ctaBg: string;
}

export interface WildlifeDestinationConfigSchema {
  /** Default backgrounds for all Wildlife destination pages */
  defaultBackgrounds: WildlifeDestinationBackgrounds;
  /** Destination-wise optional overrides (slug -> partial background properties) */
  destinationOverrides: Record<string, Partial<WildlifeDestinationBackgrounds>>;
}

export const wildlifeDestinationConfig: WildlifeDestinationConfigSchema = {
  // ==========================================================================
  // A. DEFAULT BACKGROUNDS (Applied to all Wildlife destination detail pages)
  // ==========================================================================
  defaultBackgrounds: {
    // 1. Page Base Background — Warm earthy parchment
    pageBackground: '#F4EFE6',

    // 2. Overview Section Background ("Why Destination Works")
    // Soft clearing tone complementing the four feature cards
    overviewBg: '#F8F4EC',

    // 3. Highlights Section Background ("Iconic Experiences")
    // Deep emerald jungle / deep tiger reserve forest
    highlightsBg: '#0D2818',

    // 4. Activities & Themes Background ("Activities & Experiences")
    // Warm natural tone for 4 interactive activity cards
    themesBg: '#F4EFE6',

    // 5. Seasons & Getting There Background ("Best Time to Visit")
    // Light woodland cream tone for weather & connectivity grid
    seasonsBg: '#F8F4EC',

    // 6. Recommended Packages Section Background
    // Warm sandstone/amber backdrop for package cards
    packagesBg: '#E9E0CE',

    // 7. Final CTA Section Background ("Plan a Wildlife Journey...")
    // Deep emerald wilderness banner with gold accents
    ctaBg: '#0D2818',
  },

  // ==========================================================================
  // B. PER-DESTINATION OVERRIDES (Optional — specific destination overrides)
  // ==========================================================================
  destinationOverrides: {
    kanha: {
      // Kanha specific overrides (uncomment/edit when custom tinting needed):
      // pageBackground: '#F4EFE6',
      // overviewBg: '#F8F4EC',
      // highlightsBg: '#0D2818',
      // themesBg: '#F4EFE6',
      // seasonsBg: '#F8F4EC',
      // packagesBg: '#E9E0CE',
      // ctaBg: '#0D2818',
    },
    pench: {},
    bandhavgarh: {},
    satpura: {},
    panna: {},
    kuno: {},
    'sanjay-dubri': {},
    'national-chambal-sanctuary': {},
    'madhav-national-park': {},
    nauradehi: {},
  },
};

/**
 * Resolves the final design configuration for a Wildlife destination.
 * 
 * Order of precedence:
 * 1. Base template defaults (from destinationDetailConfig via destinationDesignVars)
 * 2. Wildlife global default backgrounds (wildlifeDestinationConfig.defaultBackgrounds)
 * 3. Destination-specific Wildlife background overrides (wildlifeDestinationConfig.destinationOverrides[destinationId])
 * 4. Content file's customDesign (content.customDesign)
 * 
 * @param destinationId - Canonical destination slug (e.g. 'kanha')
 * @param contentCustomDesign - Optional customDesign object from content file
 * @returns Combined partial design configuration
 */
export function getWildlifeDestinationDesign(
  destinationId: string,
  contentCustomDesign?: Partial<DestinationDetailDesign>,
): Partial<DestinationDetailDesign> {
  const normalizedId = destinationId.toLowerCase();
  const globalDefaults = wildlifeDestinationConfig.defaultBackgrounds;
  const destinationSpecific = wildlifeDestinationConfig.destinationOverrides[normalizedId] ?? {};

  return {
    ...globalDefaults,
    ...destinationSpecific,
    ...contentCustomDesign,
  };
}
