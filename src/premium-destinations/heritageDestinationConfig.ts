/**
 * ============================================================================
 * HERITAGE PREMIUM DESTINATION — CENTRALIZED BACKGROUND CONTROL SYSTEM
 * ============================================================================
 * 
 * Yeh file sabhi Heritage premium destination detail pages ke SECTION BACKGROUND
 * COLORS ko centrally control karti hai (e.g., Khajuraho, Orchha, Gwalior, etc.).
 * 
 * IMPORTANT RULES:
 * 1. Yeh settings SIRF Heritage destinations par apply hoti hain. Nature pages
 *    (Pachmarhi, Bhedaghat, etc.), landing pages, aur website ka baaki hissa
 *    is se bilkul affect NAHI hoga.
 * 2. Yahan sirf BACKGROUND COLORS badlein. Typography, buttons, layout aur
 *    animations Nature ke approved template se hi inherit honge.
 * 3. Default palette sabhi Heritage destinations ke liye common hai. Agar kisi
 *    khas destination (jaise Khajuraho ya Orchha) ka background alag chahiye,
 *    toh neeche 'destinationOverrides' section mein us destination ka slug
 *    daal kar override karein.
 * 
 * PRECEDENCE ORDER (Kaunsa color pehle jeetega):
 * 1. Base universal defaults (destinationDetailConfig.ts)
 * 2. Heritage global defaults (defaultBackgrounds below)
 * 3. Destination-specific Heritage background overrides (destinationOverrides below)
 * 4. Content file ka apna customDesign (e.g. khajurahoContent.customDesign)
 * 5. Caller config prop (<DestinationDetailPage config={...} />)
 */

import type { DestinationDetailDesign } from './destinationDetailConfig';

export interface HeritageDestinationBackgrounds {
  /** 
   * Entire Heritage destination page base background 
   * Poore page ka base background color (default warm ivory)
   */
  pageBackground: string;

  /** 
   * Overview section ("Why Destination Works") background 
   * Overview aur 4 feature cards section ka background
   */
  overviewBg: string;

  /** 
   * Highlights section ("Iconic Experiences") background 
   * 6 photo cards wale iconic highlights section ka background (deep royal burgundy)
   */
  highlightsBg: string;

  /** 
   * Activities section ("Activities & Experiences") background 
   * 4 interactive activity cards section ka background
   */
  themesBg: string;

  /** 
   * Seasons & Getting There section background 
   * Best Time to Visit aur Access transport section ka background
   */
  seasonsBg: string;

  /** 
   * Recommended Packages section background 
   * Curated packages grid section ka background
   */
  packagesBg: string;

  /** 
   * Final CTA section background 
   * Bottom scenic enquiry banner ka background
   */
  ctaBg: string;
}

export interface HeritageDestinationConfigSchema {
  /** Sabhi Heritage destination pages ke default backgrounds */
  defaultBackgrounds: HeritageDestinationBackgrounds;
  /** Destination-wise optional overrides (slug -> partial background properties) */
  destinationOverrides: Record<string, Partial<HeritageDestinationBackgrounds>>;
}

export const heritageDestinationConfig: HeritageDestinationConfigSchema = {
  // ==========================================================================
  // A. DEFAULT BACKGROUNDS (Sabhi Heritage destinations par apply honge)
  // ==========================================================================
  defaultBackgrounds: {
    // 1. Page Base Background — Soft warm ivory base
    // Badalne ke liye hex code change karein (e.g. '#F2E9D8', '#FAF6EE')
    pageBackground: '#F2E9D8',

    // 2. Overview Section Background ("Why Destination Works")
    // Intro text aur 4 white feature cards ke peeche ka light cream background
    overviewBg: '#FBF2E3',

    // 3. Highlights Section Background ("Iconic Experiences")
    // 6 iconic photo cards ke peeche ka royal deep burgundy background
    // (Nature me dark green forestDeep hota hai, Heritage me royal burgundy)
    highlightsBg: '#61252E',

    // 4. Activities & Themes Background ("Activities & Experiences")
    // 4 expandable activity cards ke peeche ka warm background
    themesBg: '#F2E9D8',

    // 5. Seasons & Getting There Background ("Best Time to Visit")
    // Weather cards aur rail/air access column ke peeche ka light cream tone
    seasonsBg: '#FBF2E3',

    // 6. Recommended Packages Section Background
    // Curated packages cards ke peeche ka warm sandstone tone
    packagesBg: '#EAD9BD',

    // 7. Final CTA Section Background ("Plan a Heritage Journey...")
    // Footer se pehle wale enquiry banner ka deep royal burgundy background
    ctaBg: '#61252E',
  },

  // ==========================================================================
  // B. PER-DESTINATION OVERRIDES (Optional — specific destination ke liye)
  // ==========================================================================
  // Agar kisi destination ka background baakiyon se alag chahiye,
  // toh yahan us destination ke slug ke andar color specify karein.
  // Khali chhodne par defaultBackgrounds hi use honge.
  destinationOverrides: {
    khajuraho: {
      // Example: Khajuraho specific override (uncomment if custom color needed)
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    indore: {
      // Indore specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    sanchi: {
      // Sanchi specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    chanderi: {
      // Chanderi specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    bhimbetka: {
      // Bhimbetka specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    orchha: {
      // Orchha specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    gwalior: {
      // Gwalior specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    mandu: {
      // Mandu specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    bhopal: {
      // Bhopal specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    burhanpur: {
      // Burhanpur specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    shivpuri: {
      // Shivpuri specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
    morena: {
      // Morena specific overrides (uncomment if custom color needed):
      // pageBackground: '#F2E9D8',
      // overviewBg: '#FBF2E3',
      // highlightsBg: '#61252E',
      // themesBg: '#F2E9D8',
      // seasonsBg: '#FBF2E3',
      // packagesBg: '#EAD9BD',
      // ctaBg: '#61252E',
    },
  },
};

/**
 * Resolves the final design configuration for a Heritage destination.
 * 
 * Order of precedence:
 * 1. Base template defaults (from destinationDetailConfig via destinationDesignVars)
 * 2. Heritage global default backgrounds (heritageDestinationConfig.defaultBackgrounds)
 * 3. Destination-specific Heritage background overrides (heritageDestinationConfig.destinationOverrides[destinationId])
 * 4. Content file's customDesign (content.customDesign)
 * 
 * @param destinationId - Canonical destination slug (e.g. 'khajuraho')
 * @param contentCustomDesign - Optional customDesign object from content file
 * @returns Combined partial design configuration
 */
export function getHeritageDestinationDesign(
  destinationId: string,
  contentCustomDesign?: Partial<DestinationDetailDesign>,
): Partial<DestinationDetailDesign> {
  const normalizedId = destinationId.toLowerCase();
  const globalDefaults = heritageDestinationConfig.defaultBackgrounds;
  const destinationSpecific = heritageDestinationConfig.destinationOverrides[normalizedId] ?? {};

  return {
    ...globalDefaults,
    ...destinationSpecific,
    ...contentCustomDesign,
  };
}
