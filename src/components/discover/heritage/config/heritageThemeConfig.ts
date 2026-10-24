/**
 * heritageThemeConfig.ts — Backward-compatibility re-export
 *
 * Ye file ab sirf heritageLandingConfig.ts se data re-export karti hai.
 * Direct editing ke liye: src/components/discover/heritage/config/heritageLandingConfig.ts
 */

import { heritageLandingConfig, type HeritageLandingConfig } from "./heritageLandingConfig";

// Re-export types for any existing imports
export type HeritageThemeConfig = {
  colors: HeritageLandingConfig["colors"];
  boundary: HeritageLandingConfig["boundary"];
  hero: {
    image: string;
    overlay: string;
    overlayOpacity: number;
    backgroundPosition: string;
    desktopHeight: string;
    mobileHeight: string;
  };
  expressions: {
    background: string;
    panelHeight: string;
    crossfadeMs: number;
  };
  destinations: {
    background: string;
    cardRadius: number;
    borderColor: string;
    overlayStrength: number;
    hoverScale: number;
    shadow: string;
  };
  programmes: HeritageLandingConfig["programmes"];
  themeSwitcher: HeritageLandingConfig["themeSwitcher"];
  cta: {
    background: string;
    accent: string;
    buttonBackground: string;
    buttonText: string;
    buttonHover: string;
  };
  motion: {
    enabled: boolean;
    revealMs: number;
  };
};

// Re-export default config in shape expected by old consumers
export const heritageThemeConfig: HeritageThemeConfig = {
  colors: heritageLandingConfig.colors,
  boundary: heritageLandingConfig.boundary,
  hero: {
    image: heritageLandingConfig.hero.image,
    overlay: heritageLandingConfig.hero.overlay,
    overlayOpacity: heritageLandingConfig.hero.overlayOpacity,
    backgroundPosition: heritageLandingConfig.hero.backgroundPosition,
    desktopHeight: heritageLandingConfig.hero.desktopHeight,
    mobileHeight: heritageLandingConfig.hero.mobileHeight,
  },
  expressions: {
    background: heritageLandingConfig.expressions.background,
    panelHeight: heritageLandingConfig.expressions.panelHeight,
    crossfadeMs: heritageLandingConfig.expressions.crossfadeMs,
  },
  destinations: {
    background: heritageLandingConfig.destinations.background,
    cardRadius: heritageLandingConfig.destinations.cardRadius,
    borderColor: heritageLandingConfig.colors.divider,
    overlayStrength: 0.85,
    hoverScale: heritageLandingConfig.destinations.hoverScale,
    shadow: heritageLandingConfig.programmes.cardShadow,
  },
  programmes: heritageLandingConfig.programmes,
  themeSwitcher: heritageLandingConfig.themeSwitcher,
  cta: {
    background: heritageLandingConfig.closingCTA.background,
    accent: heritageLandingConfig.closingCTA.accent,
    buttonBackground: heritageLandingConfig.closingCTA.buttonBackground,
    buttonText: heritageLandingConfig.closingCTA.buttonText,
    buttonHover: heritageLandingConfig.closingCTA.buttonHover,
  },
  motion: {
    enabled: heritageLandingConfig.animations.revealEnabled,
    revealMs: heritageLandingConfig.animations.revealMs,
  },
};
