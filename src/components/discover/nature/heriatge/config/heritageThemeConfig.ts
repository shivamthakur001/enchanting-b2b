/**
 * HERITAGE CONTROL CENTRE — edit THIS file for visual changes.
 * Independent from Nature, Wildlife, Spirituality and the global footer/nav.
 * Any numeric dimension below is in px unless stated otherwise.
 */
export interface HeritageThemeConfig {
  colors: {
    page: string; pageSoft: string; sandstone: string; burgundy: string;
    burgundyDark: string; gold: string; antiqueGold: string;
    ink: string; muted: string; cream: string; border: string;
  };
  boundary: {
    enabled: boolean;
    showTop: boolean; showBottom: boolean; showSides: boolean; showCorners: boolean;
    desktopWidth: number; tabletWidth: number; mobileWidth: number;
    desktopTopHeight: number; mobileTopHeight: number;
    opacity: number; // 0–1
    sideAsset: string; horizontalAsset: string; cornerAsset: string;
    repeatScale: number; // 1 = original ornament tile size
  };
  typography: {
    displayFont: string; bodyFont: string;
    heroMaxFontSize: number; sectionMaxFontSize: number;
    letterSpacingEm: number;
  };
  sections: {
    intro: { enabled: boolean; background: string };
    expressions: { background: string };
    destinations: { background: string };
    programmes: { background: string };
  };
  layout: {
    maxContentWidth: number; desktopSectionGap: number;
    mobileSectionGap: number; cardColumnsDesktop: number;
    cardRadius: number; sectionContentPadding: number;
  };
  hero: {
    enabled: boolean; minHeightDesktop: number; minHeightMobile: number;
    backgroundImage: string; backgroundImageOpacity: number;
    archImage: string; archRadiusTop: number;
    imageOverlayOpacity: number;
    showLivingStone: boolean;
    livingStoneImage: string; livingStoneSizeDesktop: number;
    livingStoneSizeMobile: number; livingStoneFloatPx: number;
    livingStoneFloatDurationSeconds: number;
    livingStoneGlow: number; // intensity 0–1
    livingStonePointerTiltDegrees: number;
    livingStoneScrollRotationDegrees: number;
  };
  expressions: { enabled: boolean; panelHeightDesktop: number; panelHeightMobile: number; crossfadeMs: number };
  destinationCards: { enabled: boolean; imageHeight: number; zoomOnHover: number; showIndex: boolean };
  programmes: { enabled: boolean; maxVisible: number; showPrices: boolean; showDuration: boolean };
  finalCta: {
    enabled: boolean; background: string; textColor: string;
    accentColor: string; centred: true; showWatermark: boolean;
    buttonBackground: string; buttonTextColor: string;
  };
  motion: { enabled: boolean; revealMs: number; parallaxEnabled: boolean; honourReducedMotion: true };
}

export const heritageThemeConfig: HeritageThemeConfig = {
  colors: {
    page: '#F2E9D8', pageSoft: '#FBF2E3', sandstone: '#B87951',
    burgundy: '#61252E', burgundyDark: '#27191A', gold: '#D2A367',
    antiqueGold: '#B5955D', ink: '#321F22', muted: '#775E52',
    cream: '#FFF6E6', border: '#A46D40',
  },
  boundary: {
    enabled: true,
    showTop: true, showBottom: true, showSides: true, showCorners: true,
    desktopWidth: 60, tabletWidth: 39, mobileWidth: 17,
    desktopTopHeight: 42, mobileTopHeight: 19,
    opacity: 0.97,
    sideAsset: '/heritage-assets/heritage-ornament-v.svg',
    horizontalAsset: '/heritage-assets/heritage-ornament-h.svg',
    cornerAsset: '/heritage-assets/heritage-corner.svg',
    repeatScale: 1,
  },
  typography: {
    displayFont: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
    bodyFont: '"Inter", Arial, sans-serif',
    heroMaxFontSize: 94, sectionMaxFontSize: 67, letterSpacingEm: -0.035,
  },
  sections: {
    intro: { enabled: true, background: '#FBF2E3' },
    expressions: { background: '#EFE0C6' },
    destinations: { background: '#F2E9D8' },
    programmes: { background: '#ECD8B8' },
  },
  layout: {
    maxContentWidth: 1320, desktopSectionGap: 112,
    mobileSectionGap: 68, cardColumnsDesktop: 3,
    cardRadius: 13, sectionContentPadding: 32,
  },
  hero: {
    enabled: true, minHeightDesktop: 690, minHeightMobile: 660,
    backgroundImage: '/heritage-assets/parchment.webp',
    backgroundImageOpacity: 0.55,
    archImage: '/heritage-assets/heritage-arch-scene.webp',
    archRadiusTop: 230, imageOverlayOpacity: 0.17,
    showLivingStone: true,
    livingStoneImage: '/heritage-assets/living-stone.webp',
    livingStoneSizeDesktop: 370, livingStoneSizeMobile: 205,
    livingStoneFloatPx: 12, livingStoneFloatDurationSeconds: 7.8,
    livingStoneGlow: 0.38, livingStonePointerTiltDegrees: 8,
    livingStoneScrollRotationDegrees: 8,
  },
  expressions: { enabled: true, panelHeightDesktop: 520, panelHeightMobile: 345, crossfadeMs: 420 },
  destinationCards: { enabled: true, imageHeight: 258, zoomOnHover: 1.055, showIndex: true },
  programmes: { enabled: true, maxVisible: 4, showPrices: true, showDuration: true },
  finalCta: {
    enabled: true, background: '#54252D', textColor: '#FFF0DB',
    accentColor: '#D5A76B', centred: true, showWatermark: true,
    buttonBackground: '#BD8950', buttonTextColor: '#271A18',
  },
  motion: { enabled: true, revealMs: 720, parallaxEnabled: true, honourReducedMotion: true },
};
