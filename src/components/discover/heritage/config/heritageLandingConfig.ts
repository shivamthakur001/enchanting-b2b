/**
 * ===========================================================================
 * HERITAGE LANDING PAGE — EASY MANUAL CONTROL (HINGLISH GUIDE)
 * ===========================================================================
 * EDIT KARNE KA TARIKA:
 *   1. Ctrl+F dabao; neeche diye section ko search karo.
 *   2. Sirf : ke BAAD wali value badlo. Property/key ka naam mat badlo.
 *   3. Ctrl+S save karo. Vite development page par result dekho.
 *
 * KYA KAHAN CHANGE HOGA (Ctrl+F SEARCH):
 *   colors          -> Puri Heritage palette / common colors
 *   boundary        -> 4 taraf golden border, width, opacity, corners
 *   hero            -> Main banner photo, text, height, darkness, buttons
 *   themeSwitcher   -> Hero ke neeche Nature/Heritage/Wildlife/Spirituality bar
 *   introduction    -> 'Every Stone Holds a Story' text aur section styling
 *   expressions     -> 4 interactive Heritage chapters, photos, timing
 *   destinations    -> 12 destination cards ka design aur photo overrides
 *   programmes      -> Package cards, ENQUIRE button, price, badges, images
 *   closingCTA      -> Footer ke turant upar 'Build a Heritage Journey' section
 *   backgrounds     -> Section background ka optional texture
 *   responsive      -> Desktop/tablet/mobile card columns
 *   animations      -> Scroll reveal, hover, photo transition
 *
 * EKDAM IMPORTANT:
 * - YE FILE sirf settings deti hai. React/CSS me agar koi setting USE nahi ki
 *   gayi, to isse badalne par website me kuch nahi badlega.
 * - Programmes ke ENQUIRE button ka text: programmes.buttonText
 *   Button background: programmes.buttonBackground
 *   Button ke upar PRICE amount: programmes.priceColor
 *   Card ka heading: programmes.cardTitle
 *   Description: programmes.cardDescription
 * - Agar programmes.buttonText change karke bhi effect nahi hai, React/CSS
 *   binding fix karna padega. Is file me color value badalna enough nahi hai.
 * - Package asli price, duration aur details src/data/packages.ts se aati hain.
 *   Destination ki asli ID/route src/data/destinations.ts se aati hai.
 * - Living Stone cancelled hai; yahan uska koi control nahi hai.
 * - Is file me existing keys/values preserved hain, bina design badle.
 * ===========================================================================
 */

import { media } from "../../../../data/media";

// ─── COLOR TYPES ─────────────────────────────────────────────────────────────
export type HeritageColorConfig = {
  page: string;
  pageSoft: string;
  ivory: string;
  sandstone: string;
  burgundy: string;
  gold: string;
  ink: string;
  muted: string;
  divider: string;
};

export type HeritageBoundaryConfig = {
  enabled: boolean;
  sideAsset: string;
  horizontalAsset: string;
  cornerAsset: string;
  desktopWidth: number;
  tabletWidth: number;
  mobileWidth: number;
  desktopHeight: number;
  mobileHeight: number;
  contentGap: number;
  cornerSize: number;
  opacity: number;
  zIndex: number;
  showHorizontalOnTablet: boolean;
  showSideOnMobile: boolean;
};

export type HeritageHeroConfig = {
  image: string;
  overlay: string;
  overlayOpacity: number;
  backgroundPosition: string;
  desktopHeight: string;
  mobileHeight: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  scrollCueText: string;
  showScrollCue: boolean;
};

export type HeritageThemeSwitcherConfig = {
  background: string;
  labelColor: string;
  activeColor: string;
  inactiveColor: string;
  badgeColor: string;
  badgeBackground: string;
  badgeBorder: string;
  underlineColor: string;
  barHeight: string;
  itemPaddingX: string;
  itemPaddingY: string;
  itemFontSize: string;
};

export type HeritageIntroConfig = {
  eyebrow: string;
  title: string;
  description: string;
  tags: readonly string[];
  background: string;
  textColor: string;
  paddingBlock: string;
};

export type HeritageExpressionChapter = {
  id: string;
  number: string;
  chapterLabel: string;
  title: string;
  blurb: string;
  description: string;
  keyDestination: string;
  heritageCharacter: string;
  image: string;
  imageAlt: string;
};

export type HeritageExpressionsConfig = {
  eyebrow: string;
  title: string;
  description: string;
  background: string;
  panelHeight: string;
  crossfadeMs: number;
  autoRotate: boolean;
  autoRotateMs: number;
  overlayStrength: string;
  chapters: HeritageExpressionChapter[];
};

export type HeritageDestinationsConfig = {
  eyebrow: string;
  title: string;
  description: string;
  background: string;
  cardHeight: string;
  cardRadius: number;
  overlayColor: string;
  overlayStrength: string;
  hoverScale: number;
  gridGap: string;
  showRegionLabel: boolean;
  showDescription: boolean;
  imageOverrides: Record<string, string>;
};

export type HeritageProgrammesConfig = {
  eyebrow: string;
  title: string;
  description: string;
  background: string;
  cardBackground: string;
  cardTitle: string;
  cardDescription: string;
  cardBorder: string;
  badgeBackground: string;
  badgeText: string;
  priceColor: string;
  buttonBackground: string;
  buttonText: string;
  buttonHover: string;
  cardRadius: number;
  cardShadow: string;
  imageOverrides: Record<string, string>;
  featuredPackageIds: string[];
};

export type HeritageClosingCTAConfig = {
  eyebrow: string;
  heading: string;
  headingItalic: string;
  /** Font family for the calligraphic second heading (Nature: '"Pinyon Script", "Snell Roundhand", cursive') */
  headingScriptFontFamily: string;
  /** Desktop font size clamp */
  headingScriptSize: string;
  /** Mobile font size clamp */
  headingScriptSizeMobile: string;
  /** Font weight (calligraphy fonts typically use 400) */
  headingScriptWeight: string | number;
  /** Line height */
  headingScriptLineHeight: string;
  /** Letter spacing (keep normal for calligraphy to preserve cursive ligatures) */
  headingScriptLetterSpacing: string;
  /** Top margin to space from the first heading */
  headingScriptMarginTop: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  background: string;
  accent: string;
  buttonBackground: string;
  buttonText: string;
  buttonHover: string;
  paddingBlock: string;
  contentMaxWidth: string;
};

export type HeritageBackgroundsConfig = {
  enabled: boolean;
  assetPath: string;
  opacity: number;
  backgroundSize: string;
  showOnIntro: boolean;
  showOnExpressions: boolean;
  showOnDestinations: boolean;
  showOnProgrammes: boolean;
};

export type HeritageResponsiveConfig = {
  desktop: { destinationColumns: number; programmeColumns: number; breakpoint: string };
  tablet: { destinationColumns: number; programmeColumns: number; breakpoint: string };
  mobile: { destinationColumns: number; programmeColumns: number; breakpoint: string };
};

export type HeritageAnimationsConfig = {
  revealEnabled: boolean;
  revealMs: number;
  revealEasing: string;
  imageCrossfadeMs: number;
  hoverScale: number;
  respectReducedMotion: boolean;
};

export type HeritageLandingConfig = {
  colors: HeritageColorConfig;
  boundary: HeritageBoundaryConfig;
  hero: HeritageHeroConfig;
  themeSwitcher: HeritageThemeSwitcherConfig;
  introduction: HeritageIntroConfig;
  expressions: HeritageExpressionsConfig;
  destinations: HeritageDestinationsConfig;
  programmes: HeritageProgrammesConfig;
  closingCTA: HeritageClosingCTAConfig;
  backgrounds: HeritageBackgroundsConfig;
  responsive: HeritageResponsiveConfig;
  animations: HeritageAnimationsConfig;
};

// ─── MASTER CONFIG ────────────────────────────────────────────────────────────
export const heritageLandingConfig: HeritageLandingConfig = {

  // ── 11A. COLORS
  colors: {
    // Main Heritage background. Example: #F2E9D8 (warm ivory).
    page: "#F2E9D8",
    // Alternate/softer section background.
    pageSoft: "#FBF2E3",
    // Cream-white accent/text color.
    ivory: "#FFF6E6",
    // Warm sandstone accent color.
    sandstone: "#B87951",
    // Royal dark-red accent; kisi CSS usage me CTA etc ko affect kar sakta hai.
    burgundy: "#61252E",
    // Golden highlights/ornament accents.
    gold: "#B5955D",
    // Dark heading/body ink.
    ink: "#211C1B",
    // Secondary, lighter body text.
    muted: "#775E52",
    // Thin separator / border color; last 2 hex digits transparency hain.
    divider: "#B5955D33",
  },

  // ── 11B. BOUNDARY
  boundary: {
    // true = golden 4-side boundary on; false = off.
    enabled: true,
    // Left/right SVG. File public/heritage-assets me honi chahiye.
    sideAsset: "/heritage-assets/heritage-ornament-v.svg",
    // Top/bottom floral SVG image path.
    horizontalAsset: "/heritage-assets/heritage-ornament-h.svg",
    // Four corners ke decoration ka SVG path.
    cornerAsset: "/heritage-assets/heritage-corner.svg",
    // Desktop side border width in px. Large value se border mota.
    desktopWidth: 60,
    // Tablet side border width in px.
    tabletWidth: 39,
    // Phone side border width in px.
    mobileWidth: 17,
    // Desktop top/bottom horizontal border height in px.
    desktopHeight: 42,
    // Phone top/bottom border height in px.
    mobileHeight: 19,
    // Border aur andar ke content ka safe gap in px.
    contentGap: 18,
    // Corner ornament ka size px me.
    cornerSize: 83,
    // 0 invisible; 1 fully visible. Example 0.6 = 60%.
    opacity: 0.97,
    // Boundary ka stacking order. Bina zarurat mat badlo.
    zIndex: 4,
    // true = tablet par top/bottom artwork visible.
    showHorizontalOnTablet: true,
    // true = mobile par left/right artwork visible.
    showSideOnMobile: true,
  },

  // ── 11C. HERO
  hero: {
    // Hero banner image. media.khajuraho or /heritage-assets/hero.webp.
    image: media.khajuraho,
    // Hero image par dark overlay ka color.
    overlay: "#211C1B",
    // Photo darkness: 0 no overlay, 1 full cover; e.g. 0.35 light.
    overlayOpacity: 0.55,
    // Image crop direction: center / center top / 50% 35%.
    backgroundPosition: "center",
    // Desktop banner height. e.g. 88vh or 700px.
    desktopHeight: "88vh",
    // Phone banner height.
    mobileHeight: "70vh",
    // Hero ke title ke upar chhote letters.
    eyebrow: "DISCOVER THE HEART OF INDIA",
    // Main large title: Heritage.
    title: "Heritage",
    // Title ke neeche italic editorial line.
    subtitle: "Where History Still Breathes.",
    // Hero ke neeche supporting paragraph.
    description: "Journey through timeless temples, magnificent forts, royal palaces and the living traditions of Madhya Pradesh.",
    // Explore Destinations button LABEL. Navigation logic alag.
    primaryButton: "EXPLORE DESTINATIONS",
    // Create Query button LABEL. Navigation logic alag.
    secondaryButton: "CREATE QUERY",
    // Neeche dikhne wala SCROLL TO EXPLORE.
    scrollCueText: "SCROLL TO EXPLORE",
    // true = scroll indicator dikhe; false = hide.
    showScrollCue: true,
  },

  // ── 11D. THEME SWITCHER
  themeSwitcher: {
    // Hero ke neeche 4 themes wali horizontal strip ka color.
    background: "#61252EF7",
    // EXPLORE MADHYA PRADESH THEMES small label color.
    labelColor: "#D2A367",
    // Current theme (HERITAGE) ka text color.
    activeColor: "#FFF6E6",
    // Baaki Nature/Wildlife/Spirituality ka text color.
    inactiveColor: "#D6BFAE",
    // ACTIVE THEME pill ke letters ka color.
    badgeColor: "#D2A367",
    // ACTIVE THEME pill ka background.
    badgeBackground: "#B5955D26",
    // ACTIVE THEME pill outline color.
    badgeBorder: "#B5955D59",
    // Selected theme ke neeche chhoti underline.
    underlineColor: "#D2A367",
    // Strip height. auto = content ke hisaab se.
    barHeight: "auto",
    // Theme item ke left/right spacing.
    itemPaddingX: "1.4rem",
    // Theme item ke top/bottom spacing.
    itemPaddingY: "1.1rem",
    // Nature/Heritage etc text size.
    itemFontSize: "0.85rem",
  },

  // ── 11E. INTRODUCTION
  introduction: {
    // Introduction title ke upar small label.
    eyebrow: "A living cultural landscape",
    // Intro ka main heading.
    title: "Every Stone Holds a Story",
    // Intro ka detailed paragraph.
    description:
      "From prehistoric rock paintings to exquisite temple carvings, legendary forts and royal architecture, Madhya Pradesh offers an extraordinary journey through centuries of culture and craftsmanship.",
    // Intro ke niche small pills; labels comma-separated.
    tags: ["Ancient civilisations", "Royal architecture", "Living craft traditions"],
    // Introduction section ki background color.
    background: "#F2E9D8",
    // Introduction paragraph text color.
    textColor: "#775E52",
    // Intro ka top/bottom vertical padding.
    paddingBlock: "clamp(5rem, 9vw, 8rem)",
  },

  // ── 11F. FOUR HERITAGE EXPRESSIONS
  expressions: {
    // 4 heritage chapters section ka small label.
    eyebrow: "Four heritage expressions",
    // 4 chapters section ka main heading.
    title: "Four Ways to Experience Centuries of Wonder",
    // Heading ke neeche intro line.
    description: "Choose a chapter to discover the traditions, artistry and architecture that shape Madhya Pradesh.",
    // Entire Expressions section background.
    background: "#EAD9BD",
    // Badi active photograph ki height.
    panelHeight: "min(620px, 55vw)",
    // Image switch duration in milliseconds (lower faster).
    crossfadeMs: 420,
    // true = chapters auto switch, false = manual only.
    autoRotate: false,
    // Agar autoRotate true hai, kitne ms me next chapter.
    autoRotateMs: 5000,
    // Photo ke niche dark gradient (full CSS background gradient).
    overlayStrength: "linear-gradient(0deg, #211c1bdd, transparent 65%)",
    // Neeche 4 chapters ke text aur images customize karo.
    chapters: [
      {
        // Internal stable chapter key. Bina zarurat na badlo.
        id: "prehistoric",
        // Card ke chapter number 01..04.
        number: "01",
        // Large image par small label.
        chapterLabel: "CHAPTER 01 — EARLY HUMAN EXPRESSION",
        // Chapter ke liye heading, right selector + image panel.
        title: "Prehistoric Expressions",
        // Right selector ka short description.
        blurb: "Rock paintings, early artistic expression and archaeological heritage.",
        // Selected large image par detailed description.
        description:
          "Begin where human stories were first painted into the earth. Bhimbetka preserves striking traces of early imagination across a landscape of ancient rock shelters.",
        // Bottom strip me KEY DESTINATION text.
        keyDestination: "BHIMBETKA",
        // Bottom strip me heritage type / craft detail.
        heritageCharacter: "PREHISTORIC ROCK ART",
        // Selected chapter ki large photo. Existing media.x or direct asset path.
        image: media.sanchiCarvings,
        // Accessible image description.
        imageAlt: "Ancient stone surfaces representing the prehistoric heritage of Madhya Pradesh",
      },
      {
        // Internal stable chapter key. Bina zarurat na badlo.
        id: "sacred",
        // Card ke chapter number 01..04.
        number: "02",
        // Large image par small label.
        chapterLabel: "CHAPTER 02 — SACRED STONE",
        // Chapter ke liye heading, right selector + image panel.
        title: "Sacred Architecture",
        // Right selector ka short description.
        blurb: "Classical temples, Buddhist monuments and finely carved stone.",
        // Selected large image par detailed description.
        description:
          "Explore the quiet majesty of Sanchi and the intricate carvings of Khajuraho, where spiritual traditions became enduring architectural masterpieces.",
        // Bottom strip me KEY DESTINATION text.
        keyDestination: "SANCHI · KHAJURAHO",
        // Bottom strip me heritage type / craft detail.
        heritageCharacter: "CLASSICAL TEMPLE SCULPTURE",
        // Selected chapter ki large photo. Existing media.x or direct asset path.
        image: media.khajuraho,
        // Accessible image description.
        imageAlt: "Sandstone temple architecture at Khajuraho",
      },
      {
        // Internal stable chapter key. Bina zarurat na badlo.
        id: "royal",
        // Card ke chapter number 01..04.
        number: "03",
        // Large image par small label.
        chapterLabel: "CHAPTER 03 — THE ROYAL SILHOUETTE",
        // Chapter ke liye heading, right selector + image panel.
        title: "Royal Forts & Palaces",
        // Right selector ka short description.
        blurb: "Historic fortifications, court towns and royal architecture.",
        // Selected large image par detailed description.
        description:
          "Pass through the gates of history into the soaring forts, graceful palaces and royal silhouettes of Orchha, Mandu and Gwalior.",
        // Bottom strip me KEY DESTINATION text.
        keyDestination: "ORCHHA · GWALIOR · MANDU",
        // Bottom strip me heritage type / craft detail.
        heritageCharacter: "BUNDELA & MUGHAL ARCHITECTURE",
        // Selected chapter ki large photo. Existing media.x or direct asset path.
        image: media.orchhaSunset,
        // Accessible image description.
        imageAlt: "Historic palace architecture in Orchha at sunset",
      },
      {
        // Internal stable chapter key. Bina zarurat na badlo.
        id: "living",
        // Card ke chapter number 01..04.
        number: "04",
        // Large image par small label.
        chapterLabel: "CHAPTER 04 — LIVING HERITAGE",
        // Chapter ke liye heading, right selector + image panel.
        title: "Living Arts & Heritage",
        // Right selector ka short description.
        blurb: "Textiles, craftsmanship and historic urban traditions.",
        // Selected large image par detailed description.
        description:
          "Heritage is still made by hand. Discover Chanderi textiles, regional craftsmanship and the living cultural knowledge of historic towns.",
        // Bottom strip me KEY DESTINATION text.
        keyDestination: "CHANDERI · MAHESHWAR",
        // Bottom strip me heritage type / craft detail.
        heritageCharacter: "HANDLOOM & LIVING CRAFT",
        // Selected chapter ki large photo. Existing media.x or direct asset path.
        image: media.maheshwar,
        // Accessible image description.
        imageAlt: "Riverside heritage architecture and craft traditions in Madhya Pradesh",
      },
    ],
  },

  // ── 11G. DESTINATION CARDS
  destinations: {
    // Destination section small label.
    eyebrow: "The heritage collection",
    // Explore Heritage Destinations heading.
    title: "Explore Heritage Destinations",
    // Heading ke paas small description.
    description:
      "Twelve distinct places, from celebrated monuments to historic cities and extraordinary lesser-known legacies.",
    // Destinations section ka background.
    background: "#F2E9D8",
    // Har destination photo-card ki height.
    cardHeight: "min(380px, 35vw)",
    // Corners kitne rounded (number in px).
    cardRadius: 20,
    // Photo par dark tint color.
    overlayColor: "#211c1b",
    // Bottom fade stops; gradient fragment, CSS syntax preserve.
    overlayStrength: "0deg, #211c1be6 0%, #211c1b90 40%, #211c1b26 75%",
    // Hover par image zoom; 1.035 = 3.5% bigger.
    hoverScale: 1.035,
    // Destination cards ke beech distance.
    gridGap: "1.5rem",
    // false karoge to card ka region label hide.
    showRegionLabel: true,
    // false karoge to short description hide.
    showDescription: true,
    // Specific destination slug -> image path map. Khali {} = existing photo.
    // Example (jab asli photo paste kar do):
    // imageOverrides: { khajuraho: "/heritage-assets/destinations/khajuraho.webp" },
    imageOverrides: {},
  },

  // ── 11H. PROGRAMMES
  programmes: {
    // Package section heading ke upar chhota label.
    eyebrow: "Designed for the travel trade",
    // Package section heading Heritage Programmes.
    title: "Heritage Programmes",
    // Section ka supporting description.
    description:
      "Use the live Heritage itineraries already available in the Enchanting Madhya Pradesh collection.",
    // Programmes poore section ka backdrop.
    background: "#EAD8BC",
    // Har package card ka cream background.
    cardBackground: "#FFF6E6",
    // Package name text e.g. Heritage Grand Tour ka color.
    cardTitle: "#211C1B",
    // Package card ka short description/text color.
    cardDescription: "#775E52",
    // Package card ke around line.
    cardBorder: "#B5955D66",
    // Photo par badges ka fill.
    badgeBackground: "#8F5B32",
    // Badge ke andar text color.
    badgeText: "#FFF6E6",
    // Card ka asli price amount (₹…) ka color.
    priceColor: "#61252E",
    // ENQUIRE/CTA button ke peeche ka color.
    buttonBackground: "#813843",
    // ENQUIRE button ke ANDAR letters ka color; binding required!
    // IMPORTANT: Agar ye color change hokar bhi screen par na aaye, to
    // HeritageLandingPage.tsx / heritageLanding.css me actual button label par
    // programmes.buttonText ka CSS-variable/style binding missing/overridden hai.
    // Is file ke sirf comment/value se woh code bug fix nahi hoga.
    buttonText: "#ac7625",
    // Mouse hover par ENQUIRE button background.
    buttonHover: "#8F5B32",
    // Package card corners radius (px number).
    cardRadius: 16,
    // Card ke shadow ki CSS string.
    cardShadow: "0 1rem 2rem #61252e1c",
    // Package ID -> card cover photograph. {} means canonical image.
    imageOverrides: {},
    // IDs ki list. [] = default/all, implementation par depend.
    // Example: featuredPackageIds: ["real-existing-package-id-1"],
    // Hamesha src/data/packages.ts se actual IDs hi use karo.
    featuredPackageIds: [],
  },

  // ── 11I. FINAL CTA
  closingCTA: {
    // Footer ke upar CTA ka small overline.
    eyebrow: "TAILORED TRADE ITINERARIES",
    // CTA first big heading.
    heading: "Build a Heritage Journey",
    // CTA ki second gold/italic line.
    headingItalic: "Through Centuries of Wonder",
    // Calligraphic font family (Nature script font: "Pinyon Script", "Snell Roundhand", cursive)
    headingScriptFontFamily: '"Pinyon Script", "Snell Roundhand", cursive',
    // Script heading font size for desktop/tablet
    headingScriptSize: "clamp(3rem, 6vw, 5rem)",
    // Script heading font size for mobile screens (<=640px)
    headingScriptSizeMobile: "clamp(2.15rem, 8.5vw, 3.25rem)",
    // Font weight for the script line
    headingScriptWeight: 400,
    // Line height for the script line
    headingScriptLineHeight: "1.15",
    // Letter spacing (normal recommended for cursive calligraphy so strokes connect cleanly)
    headingScriptLetterSpacing: "normal",
    // Top margin between the first heading and calligraphy line
    headingScriptMarginTop: "0.2rem",
    // CTA ka supporting sentence.
    description:
      "Turn timeless architecture, royal stories and living traditions into unforgettable journeys.",
    // Explore Heritage Destinations button label.
    primaryButton: "EXPLORE HERITAGE DESTINATIONS",
    // Create Query button label.
    secondaryButton: "CREATE QUERY",
    // Entire final CTA section ka background.
    background: "#61252E",
    // Italic heading / decorative accent color.
    accent: "#D2A367",
    // CTA section ke button ka fill.
    buttonBackground: "#D2A367",
    // Final CTA section ke button ka TEXT (Programme button se alag).
    buttonText: "#211C1B",
    // CTA button hover background.
    buttonHover: "#B87951",
    // CTA top/bottom padding; height ko indirectly badalta.
    paddingBlock: "clamp(5.5rem, 10vw, 9rem)",
    // CTA center content ko max width deta hai.
    contentMaxWidth: "820px",
  },

  // ── 11J. BACKGROUND TEXTURES
  backgrounds: {
    // true = texture system enable; assetPath empty ho to no texture.
    enabled: true,
    // Background texture file e.g. /heritage-assets/parchment.webp.
    assetPath: "",
    // Texture transparency. e.g. 0.045 = very subtle.
    opacity: 0.045,
    // Texture tiling/render size.
    backgroundSize: "320px 320px",
    // Introduction background par texture.
    showOnIntro: true,
    // Expressions par texture.
    showOnExpressions: false,
    // Destination cards section par texture.
    showOnDestinations: true,
    // Package section par texture.
    showOnProgrammes: false,
  },

  // ── 11K. RESPONSIVE
  responsive: {
    // Desktop view: number of destination / package columns & breakpoint.
    desktop: { destinationColumns: 3, programmeColumns: 4, breakpoint: "1024px" },
    // Tablet view: card columns & responsive breakpoint.
    tablet: { destinationColumns: 2, programmeColumns: 2, breakpoint: "768px" },
    // Phone view: usually 1 card per row.
    mobile: { destinationColumns: 1, programmeColumns: 1, breakpoint: "640px" },
  },

  // ── 11L. ANIMATIONS
  animations: {
    // Scroll par elements reveal animation on/off.
    revealEnabled: true,
    // Scroll reveal duration in milliseconds.
    revealMs: 650,
    // CSS easing keyword, e.g. ease / ease-out.
    revealEasing: "ease",
    // Active Expression image crossfade speed.
    imageCrossfadeMs: 420,
    // Cards/image hover zoom factor.
    hoverScale: 1.035,
    // OS reduced-motion settings respect karna.
    respectReducedMotion: true,
  },
};
