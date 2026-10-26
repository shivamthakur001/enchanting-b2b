/**
 * ============================================================
 * ENCHANTING B2B — THEME SWITCHER CONTROL FILE (EASY VERSION)
 * ============================================================
 *
 * BAS ISI FILE MEIN SETTINGS BADLO.
 * Component / CSS / generated registry ko edit karne ki zaroorat nahi.
 *
 * [1] ALL FOUR PAGES KE LIYE PHOTOS KI POSITION: globalArtworkControls
 * [2] PAGE-WISE COLOR & OPACITY: cinematicThemeSwitcherConfig.themes
 * [3] EXTRA PHOTOS: public/theme-switcher-assets/<folder>/ me paste karo
 *
 * IMAGE FILE: public/theme-switcher-assets/wildlife/04-tiger.png
 * IMAGE ID:   wildlife-04-tiger
 *
 * Automatic discovery ka kaam Vite watcher karta hai. Nayi photo
 * detect hone ke baad yahan entry OPTIONAL hai; entry sirf position,
 * size aur opacity customize karne ke liye chahiye.
 */

import { discoveredThemeSwitcherIllustrations } from "../../../data/themeSwitcherIllustrations.generated";

// ============================================================
// 0. TYPES — Is section ko change MAT karo.
// ============================================================

export type SwitcherTheme = "nature" | "heritage" | "wildlife" | "spiritual";

export interface IllustrationPosition {
  x: number;             // 0 = left, 50 = center, 100 = right
  y: number;             // 0 = top, 50 = center, 100 = bottom
  width: number;         // Image ki width pixels mein
  opacity: number;       // 0 = invisible, 1 = fully visible
  rotation?: number;     // Angle in degrees: -10, 0, 10, etc.
  visible?: boolean;     // false = image chhup jayegi
}

export interface SwitcherIllustration extends IllustrationPosition {
  id: string;
  panel: SwitcherTheme;   // nature/heritage/wildlife/spiritual tile
  src: string;
  mobile?: Partial<IllustrationPosition>;
}

export type IllustrationOverride = Partial<Omit<SwitcherIllustration, "id" | "panel">> & {
  mobile?: Partial<IllustrationPosition>;
};

export interface SwitcherPageStyle {
  backgroundColor: string;
  backgroundOpacity: number; // sirf background layer
  accentColor: string;
  accentTextColor: string;
  textColor: string;
  iconColor: string;
  outlineColor: string;
  dividerColor: string;
  hoverColor: string;
  illustrationOpacity: number; // retained for page palette compatibility; artwork opacity is global
  additionalIllustrations: SwitcherIllustration[];
}

// ============================================================
// 1. PHOTO CONTROL — ALL FOUR LANDING PAGES PAR SAME POSITION
// ============================================================
//
// Image ka filename -> unique ID:
//   wildlife/04-tiger.png         -> wildlife-04-tiger
//   wildlife/engraved-tiger.svg  -> wildlife-engraved-tiger
//   nature/engraved-tree.svg     -> nature-engraved-tree
//
// Yahan kisi bhi illustration ki x, y, width, opacity, rotation badlo.
// Ye controls chaaron landing pages ke theme switcher par apply honge.
//
// These values are authoritative on every landing page.
//
// Image hide karna ho: visible: false
// Image permanently hatani ho: public folder se file delete kar do.
// Is version mein deleted file ke liye koi hardcoded fallback nahi hai.

export const globalArtworkControls: Record<string, IllustrationOverride> = {
  // NATURE TILE
  "nature-engraved-tree": {
    x: 10, y: 72, width: 170, opacity: 0.58, rotation: 0,
    mobile: { x: 17, y: 66, width: 98, opacity: 0.38 },
  },
  "nature-engraved-deer": {
    x: 83, y: 85, width: 105, opacity: 0.38,
    mobile: { x: 89, y: 85, width: 66, opacity: 0.25 },
  },

  // HERITAGE TILE
  "heritage-engraved-palace": {
    x: 21, y: 71, width: 170, opacity: 0.55,
    mobile: { x: 17, y: 70, width: 100, opacity: 0.34 },
  },
  "heritage-engraved-gateway": {
    x: 89, y: 87, width: 100, opacity: 0.36,
    mobile: { x: 92, y: 84, width: 65, opacity: 0.23 },
    //visible:false, // agar gateway chhupana ho to is line ko uncomment karo
  },

  // WILDLIFE TILE — pehle se maujood SVG illustrations
  "wildlife-engraved-tiger": {
    x: 83, y: 69, width: 180, opacity: 0.75,
    mobile: { x: 86, y: 68, width: 92, opacity: 0.34 },
    // Purana tiger chhupana hai? niche wali line uncomment karo:
    // visible: false,
  },
  "wildlife-engraved-forest": {
    x: 15, y: 91, width: 135, opacity: 0.33,
    mobile: { x: 10, y: 91, width: 70, opacity: 0.17 },
  },

  // WILDLIFE TILE — TUMHARI NAYI FILE: 04-tiger.png
  // Image already folder mein hai. Ye usi image ka direct control hai.
  "wildlife-04-tiger": {
    x: 25,              // Left / Right
    y: 55,              // Up / Down
    width: 290,         // Pixels
    opacity: 0.7,       // Is image ki opacity (0 se 1)
    rotation: 0,        // Image tilt
    visible: true,      // false = hide
    mobile: {
      x: 65,
      y: 70,
      width: 76,
      opacity: 0.35,
    },
},

    

  // SPIRITUAL TILE
  "spiritual-engraved-temple": {
    x: 89, y: 72, width: 165, opacity: 0.60,
    mobile: { x: 94, y: 71, width: 94, opacity: 0.32 },
  },
  "spiritual-engraved-lotus": {
    x: 12, y: 83, width: 104, opacity: 0.43,
    mobile: { x: 10, y: 85, width: 59, opacity: 0.25 },
  },

  // Nayi illustration, jaise wildlife/bird-new.webp, add karne par:
   "wildlife-5": { x: 78, y: 65, width: 190, opacity: 0.7 },
   "wildlife-6": { x: 25, y: 60, width: 190, opacity: 0.5 },

   "heritage-3": { x: 38, y: 55, width: 290, opacity: 0.7 },
   "nature-11": { x: 45, y: 50, width: 290, opacity: 0.7 },
   "spiritual-9": { x: 50, y: 55, width: 290, opacity: 1.5 },
};

// ============================================================
// 2. LANDING PAGE-WISE SWITCHER COLOR + TRANSPARENCY
// ============================================================
//
// themes.nature        -> Nature LANDING par dikhne wala switcher
// themes.heritage      -> Heritage LANDING par dikhne wala switcher
// themes.wildlife      -> Wildlife LANDING par dikhne wala switcher
// themes.spiritual     -> Spirituality LANDING par dikhne wala switcher
//
// Har landing par chaaron tiles dikhti hain. Par background/button
// colors active landing ke hisab se alag ho sakte hain.
//
// opacity ka rule: 0 = fully transparent, 1 = fully opaque.
// Photo opacity is controlled directly by globalArtworkControls.

const themes: Record<SwitcherTheme, SwitcherPageStyle> = {
  nature: {
    backgroundColor: "#E8E9DB",
    backgroundOpacity: 0.97,
    accentColor: "#44684A",
    accentTextColor: "#FFF8EB",
    textColor: "#253B28",
    iconColor: "#355E42",
    outlineColor: "#52664F",
    dividerColor: "#BFC7B3",
    hoverColor: "rgba(73,115,66,.14)",
    illustrationOpacity: 0.85,
    additionalIllustrations: [], // auto-detected images ke liye yahan entry nahi chahiye
  },

  heritage: {
    backgroundColor: "#EEDFC7",
    backgroundOpacity: 0.97,
    accentColor: "#783E43",
    accentTextColor: "#FFF6E9",
    textColor: "#48312C",
    iconColor: "#774B3A",
    outlineColor: "#72564C",
    dividerColor: "#D2BCA1",
    hoverColor: "rgba(127,70,65,.13)",
    illustrationOpacity: 0.92,
    additionalIllustrations: [],
  },

  wildlife: {
    backgroundColor: "#EFE2C9",
    backgroundOpacity: 0.96,
    accentColor: "#365523",
    accentTextColor: "#FFFFFF",
    textColor: "#263325",
    iconColor: "#315124",
    outlineColor: "#555B3E",
    dividerColor: "#D1BF9E",
    hoverColor: "rgba(62,91,37,.16)",
    illustrationOpacity: 0.95,
    additionalIllustrations: [],
  },

  spiritual: {
    backgroundColor: "#F3E5D2",
    backgroundOpacity: 0.96,
    accentColor: "#96683C",
    accentTextColor: "#FFFFFF",
    textColor: "#4C3A29",
    iconColor: "#8B6235",
    outlineColor: "#78634D",
    dividerColor: "#D7C4AA",
    hoverColor: "rgba(150,104,60,.15)",
    illustrationOpacity: 0.91,
    additionalIllustrations: [],
  },
};

// ============================================================
// 3. SYSTEM LOGIC — Is section ko change MAT karo.
// ============================================================

function applyArtworkControls(
  illustration: SwitcherIllustration,
  patch: IllustrationOverride | undefined,
): SwitcherIllustration {
  if (!patch) return illustration;
  const { mobile, ...desktop } = patch;
  return {
    ...illustration,
    ...desktop,
    mobile: { ...illustration.mobile, ...mobile },
  };
}

// Registry se hi images render hongi. Deleted images ko hardcoded
// curated list dobara display nahi karegi (old missing-image issue fixed).
const sharedIllustrations: SwitcherIllustration[] = discoveredThemeSwitcherIllustrations.map(
  (item) => applyArtworkControls(item, globalArtworkControls[item.id]),
);

export const cinematicThemeSwitcherConfig: {
  sharedIllustrations: SwitcherIllustration[];
  themes: Record<SwitcherTheme, SwitcherPageStyle>;
} = {
  sharedIllustrations,
  themes,
};

export function getThemeSwitcherPageStyle(activeSlug: string): SwitcherPageStyle {
  const slug = activeSlug === "spirituality" ? "spiritual" : activeSlug;
  if (slug === "nature" || slug === "heritage" || slug === "wildlife" || slug === "spiritual") {
    return cinematicThemeSwitcherConfig.themes[slug];
  }
  return cinematicThemeSwitcherConfig.themes.nature;
}

export function getThemeSwitcherIllustrations(activeSlug: string): SwitcherIllustration[] {
  const scene = getThemeSwitcherPageStyle(activeSlug);
  const all = [
    ...cinematicThemeSwitcherConfig.sharedIllustrations,
    ...scene.additionalIllustrations,
  ];

  const seen = new Set<string>();
  return all
    .filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .map((item) => applyArtworkControls(item, globalArtworkControls[item.id]))
    .filter((item) => item.visible !== false);
}
