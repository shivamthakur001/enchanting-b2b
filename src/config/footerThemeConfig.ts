/**
 * FOOTER THEME CONFIGURATION
 * ──────────────────────────────────────────────────────────────────────────────
 * ONE footer component. Nine independently editable visual presets.
 *
 * HOW COLORS WORK
 * ───────────────
 * The footer CSS reads CSS custom properties (--mp-*) from the .mp-footer
 * element.  This config emits an inline `style` object for each preset that
 * overrides those properties.  Nothing is hardcoded in the component — every
 * colour shown below is what the browser will use.
 *
 * HOW THE PANORAMA WORKS
 * ──────────────────────
 * The panorama is a JPG rendered inside an SVG <image>.  You cannot recolour a
 * JPG via background-color.  Instead each preset controls:
 *   panoramaImage  – path to the artwork (swap for a different photo)
 *   panoramaOpacity – dim the artwork (0–1)
 *   panoramaOverlay – a CSS colour painted over the artwork (use rgba)
 *   sceneFadeColor  – the bottom gradient that blends the panorama into the body
 *
 * HOW RIVER ANIMATION WORKS
 * ─────────────────────────
 * riverColor        – SVG stroke colour of the animated water currents
 * riverColorSecond  – second layer stroke colour
 * riverOpacity      – base opacity of both stroke layers (0–1)
 * riverAnimationEnabled – set false to disable the keyframe animation
 * riverAnimationDuration – seconds for the primary layer (string, e.g. "7s")
 *
 * HOW TO CHANGE COLOURS FOR EACH SECTION
 * ────────────────────────────────────────
 * 1. Find the preset below (e.g. `natureLanding`)
 * 2. Edit the colour values directly — they are plain CSS colour strings
 * 3. Save — the dev server hot-reloads instantly
 * 4. To swap the panorama artwork, change `panoramaImage` to a public URL
 *
 * ⚠️  Do NOT edit Footer.tsx or footer.css to change visual theme colours.
 *     Edit ONLY this file.
 * ──────────────────────────────────────────────────────────────────────────────
 */

export type FooterPresetId =
  | "default"
  | "natureLanding"
  | "natureDestinations"
  | "heritageLanding"
  | "heritageDestinations"
  | "wildlifeLanding"
  | "wildlifeDestinations"
  | "spiritualityLanding"
  | "spiritualityDestinations";

/** CSS custom-property values emitted as inline styles onto .mp-footer */
export interface FooterThemeVars {
  /** Primary background of the footer body */
  "--mp-bg": string;
  /** Slightly lighter/secondary surface (used for input fields, subtle panels) */
  "--mp-bg-secondary": string;
  /** Bottom copyright bar background */
  "--mp-bottom-bg": string;
  /** Gradient painted over the main body for depth (CSS gradient string or "none") */
  "--mp-body-gradient": string;
  /** Accent / gold colour — brand wordmark, icons, borders, hover states */
  "--mp-gold": string;
  /** Cream / primary text colour */
  "--mp-cream": string;
  /** Muted / secondary text colour */
  "--mp-muted": string;
  /** Link hover colour */
  "--mp-link-hover": string;
  /** Column divider colour */
  "--mp-divider": string;
  /** Column divider opacity (0–1, as a string) */
  "--mp-divider-opacity": string;
  /** Ornament SVG colour (lotus icons in ornament rules) */
  "--mp-ornament": string;
  /** Ornament opacity */
  "--mp-ornament-opacity": string;
  /** Newsletter signup button background gradient */
  "--mp-btn-bg": string;
  /** Newsletter signup button text colour */
  "--mp-btn-text": string;
  /** Newsletter signup button border colour */
  "--mp-btn-border": string;
  /** Email input background (rgba recommended) */
  "--mp-input-bg": string;
  /** Email input border colour */
  "--mp-input-border": string;
  /** Social icon border colour */
  "--mp-social-border": string;
  /** Contact icon circle border colour */
  "--mp-contact-icon-border": string;
  /** Focus ring colour */
  "--mp-focus": string;
  /**
   * Colour used by the SVG linearGradient that fades the panorama bottom edge
   * into the footer body. Must match --mp-bg exactly.
   */
  "--mp-scene-fade": string;
  /** Brand-rule horizontal line colour (CSS gradient string) */
  "--mp-rule-gradient": string;
  /** Ornament rule line colour (CSS gradient string) */
  "--mp-ornament-rule-gradient": string;
  /** Bottom-bar text colour */
  "--mp-bottom-text": string;
  /** Bottom-bar link separator colour */
  "--mp-bottom-separator": string;
}

export interface FooterTypographyConfig {
  /** Center newsletter title (target 30px–32px on laptop/desktop) */
  headingMainSize: string;
  /** Right contact heading (target 24px–27px on laptop/desktop) */
  headingSecondarySize: string;
  /** Explore navigation links (target 14px–15px) */
  navLinkSize: string;
  /** Newsletter description paragraph (target 14px–15px) */
  bodySize: string;
  /** Contact items phone/email/cell (target 13px–14px) */
  contactSize: string;
  /** Contact secondary sub-label text (target 12px–12.5px) */
  contactSubSize: string;
  /** Newsletter email input and sign-up button (target 14px–15px) */
  inputButtonSize: string;
  /** Bottom copyright, heart tagline, and legal links (target 11px–12px) */
  legalSize: string;
  /** Brand tagline under logo */
  brandTaglineSize: string;
  /** Heading line height */
  headingLineHeight: string;
  /** Body line height */
  bodyLineHeight: string;
}

export interface FooterSpacingConfig {
  /** Main grid horizontal padding (desktop/laptop) */
  paddingHorizontal: string;
  /** Main grid vertical padding */
  paddingVertical: string;
  /** Column gap between the 3 main columns */
  columnGap: string;
  /** Navigation link vertical gap / row spacing */
  navLinkGap: string;
  /** Spacing between headings and body/ornaments */
  headingSpacing: string;
  /** Spacing between contact list rows */
  contactRowGap: string;
  /** Newsletter input and button container min-height */
  inputHeight: string;
  /** Social icon spacing */
  socialGap: string;
  /** Social icon button size */
  socialSize: string;
}

/**
 * Shared typography system for all footer themes.
 * Provides comfortable, readable font sizes on laptop and desktop screens.
 */
export const sharedFooterTypography: FooterTypographyConfig = {
  headingMainSize: "clamp(30px, 2.2vw, 32px)",
  headingSecondarySize: "clamp(24px, 1.8vw, 26px)",
  navLinkSize: "14.5px",
  bodySize: "14.5px",
  contactSize: "13.5px",
  contactSubSize: "12px",
  inputButtonSize: "14px",
  legalSize: "11.5px",
  brandTaglineSize: "10px",
  headingLineHeight: "1.08",
  bodyLineHeight: "1.65",
};

/**
 * Shared spacing system for all footer themes.
 * Balances internal column breathing room, gaps, and vertical margins.
 */
export const sharedFooterSpacing: FooterSpacingConfig = {
  paddingHorizontal: "clamp(36px, 5vw, 70px)",
  paddingVertical: "0 0 34px",
  columnGap: "38px",
  navLinkGap: "4px",
  headingSpacing: "13px",
  contactRowGap: "20px",
  inputHeight: "46px",
  socialGap: "14px",
  socialSize: "32px",
};

export interface FooterThemePreset {
  id: FooterPresetId;
  label: string;
  /**
   * Path to the panorama artwork.
   * The footer SVG renders this as a <image> element.
   * Supply a different image to change the illustrated skyline.
   * Use the original /footer-art/footer-reference.jpg for any theme that
   * should show the original Madhya Pradesh cityscape artwork.
   */
  panoramaImage: string;
  /** 0–1.  Lower values dim the JPG.  Useful when the base artwork is too
   *  bright or wrong-toned for the current theme. */
  panoramaOpacity: number;
  /**
   * CSS colour laid over the panorama as a full-bleed rect.
   * Use "transparent" for no overlay, or "rgba(r,g,b,a)" for a tint.
   * This is the primary tool for toning a JPG without replacing it.
   */
  panoramaOverlay: string;
  /** SVG stroke colour for the primary animated river layer */
  riverColor: string;
  /** SVG stroke colour for the secondary animated river layer */
  riverColorSecond: string;
  /** Base opacity for both river stroke layers */
  riverOpacity: number;
  /** Optional stroke width override for river ripples (e.g. 1.3) */
  riverStrokeWidth?: number;
  /** Optional peak opacity for river ripples in CSS keyframe (e.g. 0.85) */
  riverPeakOpacity?: number;
  /** Optional body opacity for river ripples in CSS keyframe (e.g. 0.65) */
  riverBodyOpacity?: number;
  /** Set false to hide river animation (pauses it in CSS) */
  riverAnimationEnabled: boolean;
  /** Animation duration for the primary river layer, e.g. "7s" */
  riverAnimationDuration: string;
  /** Mobile overrides — applied at ≤600px via inline style on a data-mobile attr.
   *  Leave undefined to use desktop values unchanged. */
  mobile?: {
    panoramaOpacity?: number;
    panoramaOverlay?: string;
  };
  /** Whether this preset is a light theme (requiring dark text and non-inverted logo) */
  isLight?: boolean;
  /** Optional CSS mix-blend-mode for the panorama image (e.g. "multiply" for light themes) */
  panoramaBlendMode?: string;
  /** Optional CSS mix-blend-mode for the panorama overlay rect */
  panoramaOverlayBlendMode?: string;
  /** Optional CSS filter for the panorama image (e.g. "sepia(0.2) contrast(1.05)") */
  panoramaFilter?: string;
  /** Optional horizontal (x) and vertical (y) offset coordinates for panorama SVG image */
  panoramaPosition?: {
    x?: number;
    y?: number;
  };
  /** Optional typography overrides for this preset (inherits sharedFooterTypography by default) */
  typography?: Partial<FooterTypographyConfig>;
  /** Optional spacing overrides for this preset (inherits sharedFooterSpacing by default) */
  spacing?: Partial<FooterSpacingConfig>;
  /** All CSS custom-property overrides for this preset */
  vars: FooterThemeVars;
}

/* ════════════════════════════════════════════════════════════════════════════
   PRESET DEFINITIONS
   ════════════════════════════════════════════════════════════════════════════ */

/* ── 1. DEFAULT (Royal Burgundy — approx #390E13) ─────────────────────────── */
const ROYAL_BURGUNDY: FooterThemeVars = {
  "--mp-bg":                    "#390E13",
  "--mp-bg-secondary":          "#24080C",
  "--mp-bottom-bg":             "#20090D",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(101,31,40,0.18), transparent 46%), radial-gradient(ellipse at 92% 95%, rgba(92,36,34,0.14), transparent 40%)",
  "--mp-gold":                  "#D6B77F",
  "--mp-cream":                 "#F9EDDB",
  "--mp-muted":                 "#CBB9AE",
  "--mp-link-hover":            "#E8CFA0",
  "--mp-divider":               "#D6B77F",
  "--mp-divider-opacity":       "0.55",
  "--mp-ornament":              "#D6B77F",
  "--mp-ornament-opacity":      "1",
  "--mp-btn-bg":                "linear-gradient(115deg, #E3C793, #E8CFA2 50%, #D8B984)",
  "--mp-btn-text":              "#35161A",
  "--mp-btn-border":            "#D8B77E",
  "--mp-input-bg":              "rgba(36,8,12,0.35)",
  "--mp-input-border":          "rgba(203,185,174,0.45)",
  "--mp-social-border":         "#C39C60",
  "--mp-contact-icon-border":   "#C39C60",
  "--mp-focus":                 "#D6B77F",
  "--mp-scene-fade":            "#390E13",
  "--mp-rule-gradient":         "linear-gradient(90deg, transparent, rgba(180,139,86,0.48))",
  "--mp-ornament-rule-gradient":"linear-gradient(90deg, transparent, rgba(180,139,86,0.55))",
  "--mp-bottom-text":           "#DED0C6",
  "--mp-bottom-separator":      "rgba(169,143,119,0.43)",
};

/* ── 2. NATURE LANDING (Premium Forest Emerald — starting palette #163F32) ─ */
const NATURE_FOREST_GREEN: FooterThemeVars = {
  "--mp-bg":                    "#163F32",
  "--mp-bg-secondary":          "#285841",
  "--mp-bottom-bg":             "#0E2B22",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(40,88,65,0.36), transparent 48%), radial-gradient(ellipse at 92% 95%, rgba(22,63,50,0.26), transparent 42%)",
  "--mp-gold":                  "#D7B67A",
  "--mp-cream":                 "#F5F8F2",
  "--mp-muted":                 "#ABC4B6",
  "--mp-link-hover":            "#F0DFB8",
  "--mp-divider":               "#D7B67A",
  "--mp-divider-opacity":       "0.45",
  "--mp-ornament":              "#D7B67A",
  "--mp-ornament-opacity":      "0.95",
  "--mp-btn-bg":                "linear-gradient(115deg, #D7B67A, #EAD19B 50%, #C9A464)",
  "--mp-btn-text":              "#163F32",
  "--mp-btn-border":            "#D7B67A",
  "--mp-input-bg":              "rgba(40,88,65,0.32)",
  "--mp-input-border":          "rgba(215,182,122,0.40)",
  "--mp-social-border":         "#D7B67A",
  "--mp-contact-icon-border":   "#D7B67A",
  "--mp-focus":                 "#D7B67A",
  "--mp-scene-fade":            "#163F32",
  "--mp-rule-gradient":         "linear-gradient(90deg, transparent, rgba(215,182,122,0.45))",
  "--mp-ornament-rule-gradient":"linear-gradient(90deg, transparent, rgba(215,182,122,0.50))",
  "--mp-bottom-text":           "#C2D6CA",
  "--mp-bottom-separator":      "rgba(215,182,122,0.35)",
};

/* ── 3. NATURE DESTINATIONS (Forest Emerald, deeper nuance) ─────────────── */
const NATURE_DESTINATIONS: FooterThemeVars = {
  ...NATURE_FOREST_GREEN,
  "--mp-bg":                    "#12362B",
  "--mp-bg-secondary":          "#204A37",
  "--mp-bottom-bg":             "#0B231C",
  "--mp-scene-fade":            "#12362B",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(32,74,55,0.36), transparent 48%), radial-gradient(ellipse at 92% 95%, rgba(18,54,43,0.26), transparent 42%)",
  "--mp-gold":                  "#D0AF73",
  "--mp-cream":                 "#F2F6EF",
  "--mp-muted":                 "#9EB7A9",
  "--mp-divider":               "#D0AF73",
  "--mp-btn-bg":                "linear-gradient(115deg, #D0AF73, #E4CA94 50%, #C29F5F)",
  "--mp-btn-text":              "#12362B",
  "--mp-bottom-text":           "#B4C9BE",
};

/* ── 4. HERITAGE LANDING (Royal Terracotta / Antique Gold — palette #602B30) ─ */
const HERITAGE_TERRACOTTA: FooterThemeVars = {
  "--mp-bg":                    "#602B30",
  "--mp-bg-secondary":          "#854B3C",
  "--mp-bottom-bg":             "#451D22",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(133,75,60,0.35), transparent 48%), radial-gradient(ellipse at 92% 95%, rgba(96,43,48,0.26), transparent 42%)",
  "--mp-gold":                  "#E7B77C",
  "--mp-cream":                 "#FCF4EB",
  "--mp-muted":                 "#D8BEB3",
  "--mp-link-hover":            "#F8DEC0",
  "--mp-divider":               "#E7B77C",
  "--mp-divider-opacity":       "0.50",
  "--mp-ornament":              "#E7B77C",
  "--mp-ornament-opacity":      "1",
  "--mp-btn-bg":                "linear-gradient(115deg, #E7B77C, #F4D09F 50%, #D8A264)",
  "--mp-btn-text":              "#451D22",
  "--mp-btn-border":            "#E7B77C",
  "--mp-input-bg":              "rgba(69,29,34,0.35)",
  "--mp-input-border":          "rgba(231,183,124,0.42)",
  "--mp-social-border":         "#E7B77C",
  "--mp-contact-icon-border":   "#E7B77C",
  "--mp-focus":                 "#E7B77C",
  "--mp-scene-fade":            "#602B30",
  "--mp-rule-gradient":         "linear-gradient(90deg, transparent, rgba(231,183,124,0.50))",
  "--mp-ornament-rule-gradient":"linear-gradient(90deg, transparent, rgba(231,183,124,0.55))",
  "--mp-bottom-text":           "#DEC9C0",
  "--mp-bottom-separator":      "rgba(231,183,124,0.38)",
};

/* ── 5. HERITAGE DESTINATIONS (Terracotta / Deep Copper) ──────────────────── */
const HERITAGE_DESTINATIONS: FooterThemeVars = {
  ...HERITAGE_TERRACOTTA,
  "--mp-bg":                    "#502327",
  "--mp-bg-secondary":          "#723E32",
  "--mp-bottom-bg":             "#38161A",
  "--mp-scene-fade":            "#502327",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(114,62,50,0.35), transparent 48%), radial-gradient(ellipse at 92% 95%, rgba(80,35,39,0.26), transparent 42%)",
  "--mp-gold":                  "#DFAC70",
  "--mp-cream":                 "#F8EFE4",
  "--mp-muted":                 "#CEB2A6",
  "--mp-divider":               "#DFAC70",
  "--mp-btn-bg":                "linear-gradient(115deg, #DFAC70, #EAC392 50%, #D09858)",
  "--mp-btn-text":              "#38161A",
  "--mp-bottom-text":           "#D2BDB4",
};

/* ── 6. WILDLIFE LANDING (Deep Cinematic Jungle Emerald — palette #10372A) ─ */
const WILDLIFE_EMERALD: FooterThemeVars = {
  "--mp-bg":                    "#10372A",
  "--mp-bg-secondary":          "#32624A",
  "--mp-bottom-bg":             "#0A241C",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(50,98,74,0.36), transparent 48%), radial-gradient(ellipse at 92% 95%, rgba(16,55,42,0.28), transparent 42%)",
  "--mp-gold":                  "#D4BB84",
  "--mp-cream":                 "#F4F9F5",
  "--mp-muted":                 "#A8C4B6",
  "--mp-link-hover":            "#E8D5A6",
  "--mp-divider":               "#D4BB84",
  "--mp-divider-opacity":       "0.45",
  "--mp-ornament":              "#D4BB84",
  "--mp-ornament-opacity":      "0.95",
  "--mp-btn-bg":                "linear-gradient(115deg, #D4BB84, #E6D09E 50%, #C2A46A)",
  "--mp-btn-text":              "#0B241C",
  "--mp-btn-border":            "#D4BB84",
  "--mp-input-bg":              "rgba(50,98,74,0.28)",
  "--mp-input-border":          "rgba(212,187,132,0.40)",
  "--mp-social-border":         "#D4BB84",
  "--mp-contact-icon-border":   "#D4BB84",
  "--mp-focus":                 "#D4BB84",
  "--mp-scene-fade":            "#10372A",
  "--mp-rule-gradient":         "linear-gradient(90deg, transparent, rgba(212,187,132,0.45))",
  "--mp-ornament-rule-gradient":"linear-gradient(90deg, transparent, rgba(212,187,132,0.50))",
  "--mp-bottom-text":           "#BCD2C6",
  "--mp-bottom-separator":      "rgba(212,187,132,0.35)",
};

/* ── 7. WILDLIFE DESTINATIONS (Jungle Emerald, deeper twilight) ─────────── */
const WILDLIFE_DESTINATIONS: FooterThemeVars = {
  ...WILDLIFE_EMERALD,
  "--mp-bg":                    "#0C2D22",
  "--mp-bg-secondary":          "#26523D",
  "--mp-bottom-bg":             "#071E17",
  "--mp-scene-fade":            "#0C2D22",
  "--mp-body-gradient":         "radial-gradient(ellipse at 8% 100%, rgba(38,82,61,0.36), transparent 48%), radial-gradient(ellipse at 92% 95%, rgba(12,45,34,0.28), transparent 42%)",
  "--mp-gold":                  "#CBAF78",
  "--mp-cream":                 "#EEF5F0",
  "--mp-muted":                 "#9BB7A9",
  "--mp-divider":               "#CBAF78",
  "--mp-btn-bg":                "linear-gradient(115deg, #CBAF78, #DEC38E 50%, #B8995E)",
  "--mp-btn-text":              "#071E17",
  "--mp-bottom-text":           "#AFC7BB",
};

/* ── 8. SPIRITUALITY LANDING (Royal Burgundy — matching Homepage default) ─── */
const SPIRITUALITY_BURGUNDY_LANDING: FooterThemeVars = {
  ...ROYAL_BURGUNDY,
};

/* ── 9. SPIRITUALITY DESTINATIONS (Royal Burgundy — matching Homepage default) */
const SPIRITUALITY_BURGUNDY_DESTINATIONS: FooterThemeVars = {
  ...ROYAL_BURGUNDY,
};

/* ════════════════════════════════════════════════════════════════════════════
   PRESET EXPORT TABLE
   Edit any value here; the footer updates automatically on save.
   ════════════════════════════════════════════════════════════════════════════ */

export const footerThemePresets: Record<FooterPresetId, FooterThemePreset> = {

  /* ── 1. DEFAULT (Royal Burgundy — homepage, packages, about, etc.) ─────── */
  default: {
    id: "default",
    label: "Default – Royal Burgundy",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        1,
    panoramaOverlay:        "transparent",
    riverColor:             "#2d2ae6",
    riverColorSecond:       "#26cc97",
    riverOpacity:           0.35,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "7s",
    vars: ROYAL_BURGUNDY,
  },

  /* ── 2. NATURE LANDING ─────────────────────────────────────────────────── */
  natureLanding: {
    id: "natureLanding",
    label: "Nature – Landing (Premium Forest Emerald)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        0.90,
    panoramaOverlay:        "rgba(22,63,50,0.22)",
    panoramaFilter:         "contrast(1.10) brightness(1.02) saturate(1.12)",
    riverColor:             "#408DB4",
    riverColorSecond:       "#6BB4D8",
    riverOpacity:           0.85,
    riverPeakOpacity:       0.85,
    riverBodyOpacity:       0.65,
    riverStrokeWidth:       1.3,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "8s",
    mobile: {
      panoramaOpacity: 0.85,
      panoramaOverlay: "rgba(22,63,50,0.30)",
    },
    vars: NATURE_FOREST_GREEN,
  },

  /* ── 3. NATURE DESTINATIONS ────────────────────────────────────────────── */
  natureDestinations: {
    id: "natureDestinations",
    label: "Nature – Destination Pages (Forest Emerald, deeper nuance)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        0.88,
    panoramaOverlay:        "rgba(18,54,43,0.26)",
    panoramaFilter:         "contrast(1.10) brightness(1.01) saturate(1.10)",
    riverColor:             "#3A82A6",
    riverColorSecond:       "#5FA5C8",
    riverOpacity:           0.80,
    riverPeakOpacity:       0.80,
    riverBodyOpacity:       0.60,
    riverStrokeWidth:       1.3,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "9s",
    vars: NATURE_DESTINATIONS,
  },

  /* ── 4. HERITAGE LANDING ───────────────────────────────────────────────── */
  heritageLanding: {
    id: "heritageLanding",
    label: "Heritage – Landing (Royal Terracotta / Antique Gold)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        0.94,
    panoramaOverlay:        "rgba(96,43,48,0.16)",
    panoramaFilter:         "contrast(1.08) brightness(1.03) saturate(1.10)",
    riverColor:             "#4888AC",
    riverColorSecond:       "#78B0CE",
    riverOpacity:           0.85,
    riverPeakOpacity:       0.85,
    riverBodyOpacity:       0.65,
    riverStrokeWidth:       1.3,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "7.5s",
    mobile: {
      panoramaOpacity: 0.90,
      panoramaOverlay: "rgba(96,43,48,0.24)",
    },
    vars: HERITAGE_TERRACOTTA,
  },

  /* ── 5. HERITAGE DESTINATIONS ──────────────────────────────────────────── */
  heritageDestinations: {
    id: "heritageDestinations",
    label: "Heritage – Destination Pages (Terracotta / Deep Copper)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        0.92,
    panoramaOverlay:        "rgba(80,35,39,0.20)",
    panoramaFilter:         "contrast(1.08) brightness(1.02) saturate(1.08)",
    riverColor:             "#427F9F",
    riverColorSecond:       "#6EA5C2",
    riverOpacity:           0.80,
    riverPeakOpacity:       0.80,
    riverBodyOpacity:       0.60,
    riverStrokeWidth:       1.3,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "8s",
    vars: HERITAGE_DESTINATIONS,
  },

  /* ── 6. WILDLIFE LANDING ───────────────────────────────────────────────── */
  wildlifeLanding: {
    id: "wildlifeLanding",
    label: "Wildlife – Landing (Deep Cinematic Jungle Emerald)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        0.90,
    panoramaOverlay:        "rgba(16,55,42,0.22)",
    panoramaFilter:         "contrast(1.15) brightness(1.03) saturate(1.16)",
    riverColor:             "#3497C5",
    riverColorSecond:       "#60B6DF",
    riverOpacity:           0.85,
    riverPeakOpacity:       0.85,
    riverBodyOpacity:       0.65,
    riverStrokeWidth:       1.3,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "8s",
    mobile: {
      panoramaOpacity: 0.85,
      panoramaOverlay: "rgba(16,55,42,0.30)",
    },
    vars: WILDLIFE_EMERALD,
  },

  /* ── 7. WILDLIFE DESTINATIONS ──────────────────────────────────────────── */
  wildlifeDestinations: {
    id: "wildlifeDestinations",
    label: "Wildlife – Destination Pages (Jungle Emerald, deeper twilight)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        0.86,
    panoramaOverlay:        "rgba(12,45,34,0.26)",
    panoramaFilter:         "contrast(1.14) brightness(1.02) saturate(1.14)",
    riverColor:             "#2E88B4",
    riverColorSecond:       "#55A7D0",
    riverOpacity:           0.80,
    riverPeakOpacity:       0.80,
    riverBodyOpacity:       0.60,
    riverStrokeWidth:       1.3,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "9.5s",
    vars: WILDLIFE_DESTINATIONS,
  },

  /* ── 8. SPIRITUALITY LANDING ───────────────────────────────────────────── */
  spiritualityLanding: {
    id: "spiritualityLanding",
    label: "Spirituality – Landing (Royal Burgundy — matching Homepage)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        1,
    panoramaOverlay:        "transparent",
    riverColor:             "#ffe0a0",
    riverColorSecond:       "#c8e7dd",
    riverOpacity:           0.35,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "7s",
    vars: SPIRITUALITY_BURGUNDY_LANDING,
  },

  /* ── 9. SPIRITUALITY DESTINATIONS ─────────────────────────────────────── */
  spiritualityDestinations: {
    id: "spiritualityDestinations",
    label: "Spirituality – Destination Pages (Royal Burgundy — matching Homepage)",
    isLight:                false,
    panoramaImage:          "/footer-art/footer-reference.jpg",
    panoramaOpacity:        1,
    panoramaOverlay:        "transparent",
    riverColor:             "#ffe0a0",
    riverColorSecond:       "#c8e7dd",
    riverOpacity:           0.35,
    riverAnimationEnabled:  true,
    riverAnimationDuration: "7s",
    vars: SPIRITUALITY_BURGUNDY_DESTINATIONS,
  },
};

/** Helper — retrieve a preset (falls back to "default" for unknown IDs) */
export function getFooterPreset(id: FooterPresetId | string): FooterThemePreset {
  return footerThemePresets[id as FooterPresetId] ?? footerThemePresets.default;
}


