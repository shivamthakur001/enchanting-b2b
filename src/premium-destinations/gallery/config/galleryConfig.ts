import type { MosaicCell } from "../types/gallery";

export const galleryConfig = {
  // PHOTO METADATA VISIBILITY — individual photo titles, captions, categories control
  visibility: {
    showPhotoTitles: false,
    showPhotoCaptions: false,
    showPhotoCategories: false,
  },
  // SECTION SIZE & TYPOGRAPHY — full destination page mein embedded version.
  section: {
    minHeight: "675px",           // Envelope waale section ki min height; value badhao = section taller.
    mobileMinHeight: "585px",     // Mobile par envelope section height.
    paddingY: "48px",            // Top/bottom section padding.
    headingSize: "clamp(36px, 5.4vw, 68px)", // Gallery main heading size.
    mobileHeadingSize: "28px",     // <=420px par heading size.
    shortScreenHeadingSize: "clamp(28px, 5vw, 48px)", // Short display par heading.
    mobileDescriptionSize: "12.5px", // <=420px par description text.
    eyebrowSize: "11px",         // Small label ka size.
    descriptionSize: "14.5px",   // Heading ke niche description size.
    zIndex: 9999,                // Fullscreen layer navbar/modal ke upar.
    atmosphereOpacity: "1",     // 0 = no atmospheric overlay (exact section background), 1 = full mist effect.
  },
  // PAGE COLOR CONTROLS — yahan se gallery ka background, envelope, text aur seal badlein.
  colors: {
    // Closed gallery section ka forest background.
    forest: "#061D17",
    // Fullscreen expanded gallery ka background.
    forestDeep: "#03110E",
    moss: "#1A3D32",
    mossMid: "#244A3E",
    mossLight: "#2F5C4C",
    // Envelope outline aur accent highlights.
    copper: "#C4A574",
    copperBright: "#E0C49A",
    copperDim: "rgba(196, 165, 116, 0.35)",
    // Main heading aur label ka color.
    ivory: "#F4EDE1",
    ivoryMuted: "rgba(244, 237, 225, 0.7)",
    ivorySoft: "rgba(244, 237, 225, 0.45)",
    // Wax seal center ka color.
    wax: "#0B3D2E",
    waxMid: "#145C44",
    waxHighlight: "#1F7A5A",
    // Envelope front/paper ka main color.
    paper: "#15261F",
    // Envelope secondary shading color.
    paperLight: "#1E332A",
    // Envelope ke andar lining ka color.
    lining: "#2A4036",
    overlay: "rgba(4, 18, 14, 0.62)",
  },
  // ENVELOPE SIZE — width/height px mein, flap angles degrees mein.
  envelope: {
    // Desktop envelope width: 408px.
    width: 408,
    // Desktop envelope height: 272px.
    height: 272,
    // Mobile envelope width: 286px.
    widthMobile: 286,
    heightMobile: 192,
    perspective: 1480,
    flapHover: -48,
    flapOpen: -162,
    riseHover: -16,
    borderRadius: 3,
    tiltX: 7,
    tiltY: -4,
  },
  // ANIMATION: values milliseconds mein (1000 = 1 second).
  timing: {
    hoverMs: 720,
    flapMs: 860,
    photoStaggerMs: 72,
    photoFlyMs: 1280,
    openingHoldMs: 980,
    envelopeFadeMs: 1100,
    focusMs: 740,
    closingMs: 1080,
    chromeMs: 500,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    easingFlap: "cubic-bezier(0.45, 0.05, 0.2, 1)",
    easingSoft: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  // FULLSCREEN PHOTO CONTROLS — focus blur/size/mosaic gap.
  gallery: {
    // Selected photo chhodkar baki photos ka blur. 0 = clear; 18 = strongly blurred.
    blurPx: 18,
    // Background dim intensity (0-1).
    overlayDarkness: 0.58,
    selectedMaxWidthVw: 76,
    selectedMaxHeightVh: 74,
    selectedMaxWidthPx: 1180,
    mobileSelectedMaxWidthVw: 86,
    mobileSelectedMaxHeightVh: 70,
    gridCols: 12,
    gridRows: 12,
    mobileCols: 6,
    mobileRows: 12,
    gridGapVw: 0.85,
    gridGapVh: 1.2,
    padXVw: 3.1,
    padYVh: 7.2,
    mobilePadXVw: 3.6,
    mobilePadYVh: 9,
    imageRadius: 2,
    hoverZoom: 1.048,
    printBorder: 3,
  },
  // FONTS — destination template se independent.
  typography: {
    eyebrow: '"Cinzel", "Times New Roman", serif',
    heading: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif',
    body: '"Outfit", "Avenir Next", system-ui, sans-serif',
  },
  // ENVELOPE PHOTO FLY TRAJECTORY (9 curated positions; extra photos auto repeat offsets).
  fan: [
    { dx: -310, dy: -250, r: -17, s: 0.72 },
    { dx: -170, dy: -305, r: -9, s: 0.76 },
    { dx: -20, dy: -338, r: -1, s: 0.8 },
    { dx: 140, dy: -312, r: 8, s: 0.76 },
    { dx: 290, dy: -240, r: 16, s: 0.72 },
    { dx: -250, dy: -110, r: -12, s: 0.68 },
    { dx: 265, dy: -100, r: 13, s: 0.68 },
    { dx: -95, dy: -175, r: -5, s: 0.7 },
    { dx: 110, dy: -165, r: 6, s: 0.7 },
  ],
  peek: [
    { dx: -18, dy: -36, r: -11 },
    { dx: 10, dy: -52, r: 4 },
    { dx: -6, dy: -28, r: 9 },
    { dx: 16, dy: -44, r: -5 },
    { dx: -12, dy: -22, r: 7 },
    { dx: 8, dy: -18, r: -8 },
    { dx: -4, dy: -14, r: 3 },
    { dx: 12, dy: -10, r: -3 },
    { dx: 0, dy: -8, r: 5 },
  ],
  closedStack: [
    { dx: -6, dy: 10, r: -8 },
    { dx: 8, dy: 6, r: 5 },
    { dx: -2, dy: 14, r: 9 },
    { dx: 4, dy: 8, r: -4 },
    { dx: 0, dy: 12, r: 2 },
    { dx: -8, dy: 16, r: -6 },
    { dx: 6, dy: 18, r: 7 },
    { dx: -3, dy: 20, r: -2 },
    { dx: 2, dy: 22, r: 4 },
  ],
  // 9-photo editorial layout. Different photo counts use automatic responsive grid.
  mosaicDesktop: [
    { col: 0, row: 0, w: 5, h: 5 },
    { col: 5, row: 0, w: 3, h: 7 },
    { col: 8, row: 0, w: 4, h: 4 },
    { col: 8, row: 4, w: 4, h: 3 },
    { col: 0, row: 5, w: 3, h: 4 },
    { col: 3, row: 5, w: 2, h: 4 },
    { col: 5, row: 7, w: 3, h: 5 },
    { col: 0, row: 9, w: 5, h: 3 },
    { col: 8, row: 7, w: 4, h: 5 },
  ] as MosaicCell[],
  mosaicMobile: [
    { col: 0, row: 0, w: 6, h: 3 },
    { col: 0, row: 3, w: 3, h: 3 },
    { col: 3, row: 3, w: 3, h: 3 },
    { col: 0, row: 6, w: 3, h: 2 },
    { col: 3, row: 6, w: 3, h: 2 },
    { col: 0, row: 8, w: 2, h: 2 },
    { col: 2, row: 8, w: 2, h: 2 },
    { col: 4, row: 8, w: 2, h: 2 },
    { col: 0, row: 10, w: 6, h: 2 },
  ] as MosaicCell[],
};


/** Per-destination optional settings, matching the same single master control system. */
export type GalleryConfig = typeof galleryConfig;
export type GalleryOverrides = {
  visibility?: Partial<GalleryConfig["visibility"]>;
  section?: Partial<GalleryConfig["section"]>;
  colors?: Partial<GalleryConfig["colors"]>;
  envelope?: Partial<GalleryConfig["envelope"]>;
  timing?: Partial<GalleryConfig["timing"]>;
  gallery?: Partial<GalleryConfig["gallery"]>;
  typography?: Partial<GalleryConfig["typography"]>;
};

export function getGalleryConfig(overrides?: GalleryOverrides): GalleryConfig {
  if (!overrides) return galleryConfig;
  return {
    ...galleryConfig,
    visibility: { ...galleryConfig.visibility, ...overrides.visibility },
    section: { ...galleryConfig.section, ...overrides.section },
    colors: { ...galleryConfig.colors, ...overrides.colors },
    envelope: { ...galleryConfig.envelope, ...overrides.envelope },
    timing: { ...galleryConfig.timing, ...overrides.timing },
    gallery: { ...galleryConfig.gallery, ...overrides.gallery },
    typography: { ...galleryConfig.typography, ...overrides.typography },
  };
}
