/**
 * useFooterTheme
 * ──────────────────────────────────────────────────────────────────────
 * Resolves the current page URL to the correct footer theme preset.
 *
 * RESOLUTION RULES (in priority order):
 *
 * 1. /discover/nature            → natureLanding
 * 2. /discover/heritage          → heritageLanding
 * 3. /discover/wildlife          → wildlifeLanding
 * 4. /discover/spirituality      → spiritualityLanding
 * 5. /destinations/:slug         → look up slug in destinations.ts to get its
 *                                  canonical theme(s), then map to the correct
 *                                  *Destinations preset. Falls back to "default".
 * 6. Everything else             → default (Royal Burgundy)
 *
 * We deliberately use canonical Destination records (not pathname substrings)
 * for destination pages, so a destination categorised as "wildlife" always
 * gets the wildlife footer even if its URL doesn't contain "wildlife".
 * ──────────────────────────────────────────────────────────────────────
 */

import { useMemo } from "react";
import { usePathname } from "../router/Router";
import { getDestination } from "../data/destinations";
import { getPremiumDestination } from "../premium-destinations/destinationRegistry";
import { type FooterPresetId, type FooterThemePreset, getFooterPreset } from "../config/footerThemeConfig";

/** Maps a canonical theme slug → footer preset ID */
const DESTINATION_THEME_MAP: Record<string, FooterPresetId> = {
  nature:        "natureDestinations",
  heritage:      "heritageDestinations",
  wildlife:      "wildlifeDestinations",
  spirituality:  "spiritualityDestinations",
};

/** Maps a discover/:slug → landing preset ID */
const LANDING_THEME_MAP: Record<string, FooterPresetId> = {
  nature:        "natureLanding",
  heritage:      "heritageLanding",
  wildlife:      "wildlifeLanding",
  spirituality:  "spiritualityLanding",
};

export function resolvePresetId(pathname: string): FooterPresetId {
  const parts = pathname.split("/").filter(Boolean);

  // /discover/:themeSlug  (landing pages)
  if (parts[0] === "discover" && parts.length === 2) {
    const themeSlug = parts[1].toLowerCase();
    const landingPreset = LANDING_THEME_MAP[themeSlug];
    if (landingPreset) return landingPreset;
  }

  // /destinations/:destinationSlug  (individual destination pages)
  if (parts[0] === "destinations" && parts.length === 2) {
    const destinationSlug = parts[1].toLowerCase();

    // 1. Primary lookup: canonical destinations data
    const destination = getDestination(destinationSlug);
    if (destination && destination.themes && destination.themes.length > 0) {
      const primaryTheme = destination.themes[0].toLowerCase();
      const destinationPreset = DESTINATION_THEME_MAP[primaryTheme];
      if (destinationPreset) return destinationPreset;
    }

    // 2. Secondary lookup: premium destination registry theme label
    const premium = getPremiumDestination(destinationSlug);
    if (premium && premium.themeLabel) {
      const label = premium.themeLabel.toLowerCase();
      const destinationPreset = DESTINATION_THEME_MAP[label];
      if (destinationPreset) return destinationPreset;
    }
  }

  return "default";
}

export function useFooterTheme(): FooterThemePreset {
  const pathname = usePathname();
  return useMemo(() => {
    const presetId = resolvePresetId(pathname);
    return getFooterPreset(presetId);
  }, [pathname]);
}

