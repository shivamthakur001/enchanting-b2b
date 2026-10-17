/**
 * TOP JOURNEYS ACROSS MADHYA PRADESH — CENTRAL DESIGN CONTROLS
 *
 * EDIT ONLY THE VALUES INSIDE `topJourneysConfig` BELOW.
 * Every setting has a short comment directly ABOVE its value.
 *
 * DESKTOP DEFAULT: LEFT FEATURED IMAGE 70% | RIGHT JOURNEY LIST 30%.
 * This split applies to the available grid width after subtracting `layoutGap`.
 * Tablet/mobile layout can be overridden by TopJourneysSection.css media queries.
 *
 * IMPORTANT: Keep property names and buildTJCSSVars() mappings unchanged;
 * TopJourneysSection.tsx and TopJourneysSection.css depend on these names.
 */

// TypeScript structure: do not edit this unless adding a NEW supported setting.
export interface TopJourneysDesignConfig {
  // A. Main layout
  containerMaxWidth: string;
  layoutGap: string;
  spotlightColRatio: string;
  listColWidth: string;
  cardBorderRadius: string;
  listBorderRadius: string;
  listPadding: string;
  listGap: string;

  // B. Left image/card
  spotlightHeight: string;
  spotlightMinHeight: string;
  imageObjectFit: "cover" | "contain" | "fill";
  imageObjectPositionX: string;
  imageObjectPositionY: string;
  imageBrightness: number;
  imageContrast: number;
  imageBlur: string;
  overlayOpacity: number;
  backdropBlur: string;
  shadowIntensity: number;

  // C. Dark gradient above featured image
  overlayStop1: string;
  overlayStop2: string;
  overlayStop3: string;
  overlayStop4: string;

  // D. Left image text
  journeyTitleSizeMin: string;
  journeyTitleSizeMax: string;
  journeyTitleWeight: number;
  journeyTitleLineHeight: number;
  descFontSize: string;
  descLineHeight: number;
  contentPaddingMin: string;
  contentPaddingMax: string;
  contentGap: string;

  // E. Right journey list
  thumbWidth: string;
  thumbHeight: string;
  thumbRadius: string;
  rowItemPadding: string;
  rowItemGap: string;
  listTitleSize: string;
  listSubtitleSize: string;

  // F. Buttons
  btnFontSize: string;
  btnFontWeight: number;
  btnPaddingY: string;
  btnPaddingX: string;
  ctaGap: string;

  // G. Hover / transitions
  hoverZoomScale: number;
  thumbHoverZoomScale: number;
  hoverAnimDuration: string;
  transitionDuration: string;
  fadeUpDistance: string;
}

/**
 * ================== START EDITING FROM HERE ==================
 * Change the values below; the related CSS automatically uses them.
 */
export const topJourneysConfig: TopJourneysDesignConfig = {
  // ================= A. SECTION LAYOUT =================

  // Poore section ke content ki maximum width. Increase => section wider.
  containerMaxWidth: "1580px",

  // Left image aur right journey list ke beech horizontal gap.
  layoutGap: "20px",

  // LEFT FEATURED IMAGE WIDTH: 7 parts = 70% of usable grid width.
  spotlightColRatio: "7fr",

  // RIGHT JOURNEY LIST WIDTH: 3 parts = 30% of usable grid width.
  // Both values together are 7fr : 3fr (70:30 desktop).
  listColWidth: "minmax(0, 3fr)",

  // Left large image/card ke corners kitne rounded honge.
  cardBorderRadius: "18px",

  // Right journey panel ke corners kitne rounded honge.
  listBorderRadius: "18px",

  // Right list container ke andar ki padding (all sides).
  listPadding: "10px",

  // Right list ke items ke beech vertical spacing, where CSS uses it.
  listGap: "6px",

  // ================= B. LEFT FEATURED IMAGE / CARD =================

  // Desktop featured photo/card ki overall height.
  spotlightHeight: "510px",

  // Minimum featured card height, where this CSS property is applied.
  spotlightMinHeight: "460px",

  // "cover" fills box with cropping; "contain" shows full photo with empty space.
  imageObjectFit: "cover",

  // Photo ka horizontal focus: "left", "center", "right", "60%" etc.
  imageObjectPositionX: "center",

  // Photo ka vertical focus: "top", "center", "bottom", "40%" etc.
  imageObjectPositionY: "center",

  // Image brightness: 1 = normal, below 1 = darker, above 1 = brighter.
  imageBrightness: 0.98,

  // Image contrast: 1 = normal, 1.05 = slightly richer contrast.
  imageContrast: 1.05,

  // Actual photo blur: "0px" = off; try "1px" or "2px" for soft focus.
  imageBlur: "0px",

  // Dark gradient overlay ki total visibility: 1 = full, 0 = hidden.
  overlayOpacity: 1,

  // Backdrop blur for overlay/glass area (only visible where CSS supports it).
  backdropBlur: "0px",

  // Featured card shadow: 0 = none, 1 = normal, 1.3 = stronger.
  shadowIntensity: 0.85,

  // ================= C. FEATURED IMAGE GRADIENT =================

  // Image ke top par dark gradient: alpha 0.04 = almost clear.
  overlayStop1: "rgba(23,20,17,0.04)",

  // Upper-middle area par gradient (approx. 38% position).
  overlayStop2: "rgba(23,20,17,0.20)",

  // Lower-middle area par gradient (approx. 68% position).
  overlayStop3: "rgba(23,20,17,0.64)",

  // Bottom text ke peeche gradient; zyada alpha => text zyada readable.
  overlayStop4: "rgba(18,16,13,0.94)",

  // ================= D. LEFT IMAGE TYPOGRAPHY =================

  // Journey title ka minimum responsive font size.
  journeyTitleSizeMin: "1.85rem",

  // Journey title ka maximum responsive font size.
  journeyTitleSizeMax: "2.65rem",

  // Journey title font thickness: 400 normal, 600 semibold, 700 bold.
  journeyTitleWeight: 700,

  // Journey title lines ke beech distance (smaller = tighter).
  journeyTitleLineHeight: 1.12,

  // Featured image description ka font size.
  descFontSize: "clamp(0.92rem, 1.05vw, 1rem)",

  // Description ki lines ke beech distance.
  descLineHeight: 1.55,

  // Featured image ke text block ki minimum inner padding.
  contentPaddingMin: "1.8rem",

  // Featured image ke text block ki maximum inner padding.
  contentPaddingMax: "2.6rem",

  // Title, description aur text elements ke beech spacing (CSS-dependent).
  contentGap: "0.6rem",

  // ================= E. RIGHT JOURNEY NAVIGATOR =================

  // Right side small journey thumbnail ki width.
  thumbWidth: "89px",

  // Right side small journey thumbnail ki height.
  thumbHeight: "66px",

  // Thumbnail photo ke rounded corners.
  thumbRadius: "8px",

  // Har journey row ke andar top/bottom aur left/right padding.
  rowItemPadding: "4px 4px",

  // Thumbnail aur journey-name text ke beech horizontal gap.
  rowItemGap: "9px",

  // Right list mein journey name ka font size.
  listTitleSize: "1rem",

  // Right list mein journey subtitle/secondary text ka font size.
  listSubtitleSize: "0.72rem",

  // ================= F. ACTION BUTTONS =================

  // "View Journey" / "Create Query" button text size.
  btnFontSize: "0.84rem",

  // Button text thickness.
  btnFontWeight: 600,

  // Button ke andar upar aur neeche ki padding.
  btnPaddingY: "0.72rem",

  // Button ke andar left aur right ki padding.
  btnPaddingX: "1.4rem",

  // Dono CTA buttons ke beech ka gap.
  ctaGap: "0.8rem",

  // ================= G. HOVER EFFECTS & ANIMATIONS =================

  // Large image hover par zoom: 1 = no zoom; 1.04 = 4% zoom.
  hoverZoomScale: 1.04,

  // Small thumbnails hover par zoom: 1.08 = 8% zoom.
  thumbHoverZoomScale: 1.08,

  // Hover animation kitni der chale: "0.25s" = 250 milliseconds.
  hoverAnimDuration: "0.25s",

  // Journey change/visual transition ki duration.
  transitionDuration: "0.35s",

  // Text fade-up animation ka vertical travel distance.
  fadeUpDistance: "14px",
};

/**
 * ================== CSS VARIABLE BRIDGE ==================
 * Neeche ki function ko EDIT karne ki zarurat nahi hai.
 * Ye upar wali settings ko existing TopJourneysSection.css ke CSS variables
 * se connect karti hai. Isko remove ya rename NA KAREIN.
 *
 * NOTE: Autoplay interval is NOT a field of this existing config. The
 * 5.5-second autoplay timer remains controlled in TopJourneysSection.tsx.
 * Mobile-only overrides may still be defined in CSS media queries.
 */
export function buildTJCSSVars(
  cfg: TopJourneysDesignConfig,
): Record<string, string> {
  // Shadow strength ko CSS box-shadow values mein convert karta hai.
  const si = cfg.shadowIntensity;
  const spotlightShadow = [
    `0 ${Math.round(24 * si)}px ${Math.round(50 * si)}px -22px rgba(28,50,40,${+(0.4 * si).toFixed(2)})`,
    `0 ${Math.round(10 * si)}px ${Math.round(24 * si)}px -14px rgba(23,20,17,${+(0.25 * si).toFixed(2)})`,
  ].join(", ");

  return {
    // A. Section layout
    "--tj-container-max-width": cfg.containerMaxWidth,
    "--tj-layout-gap": cfg.layoutGap,
    "--tj-spotlight-col-ratio": cfg.spotlightColRatio,
    "--tj-list-col-width": cfg.listColWidth,
    "--tj-card-radius": cfg.cardBorderRadius,
    "--tj-list-radius": cfg.listBorderRadius,
    "--tj-list-padding": cfg.listPadding,
    "--tj-list-gap": cfg.listGap,

    // B. Featured image/card
    "--tj-spotlight-height": cfg.spotlightHeight,
    "--tj-spotlight-min-height": cfg.spotlightMinHeight,
    "--tj-image-fit": cfg.imageObjectFit,
    "--tj-image-pos-x": cfg.imageObjectPositionX,
    "--tj-image-pos-y": cfg.imageObjectPositionY,
    "--tj-image-brightness": String(cfg.imageBrightness),
    "--tj-image-contrast": String(cfg.imageContrast),
    "--tj-image-blur": cfg.imageBlur,
    "--tj-overlay-opacity": String(cfg.overlayOpacity),
    "--tj-backdrop-blur": cfg.backdropBlur,
    "--tj-spotlight-shadow": spotlightShadow,

    // C. Gradient overlay
    "--tj-overlay-stop1": cfg.overlayStop1,
    "--tj-overlay-stop2": cfg.overlayStop2,
    "--tj-overlay-stop3": cfg.overlayStop3,
    "--tj-overlay-stop4": cfg.overlayStop4,

    // D. Typography
    "--tj-title-size-min": cfg.journeyTitleSizeMin,
    "--tj-title-size-max": cfg.journeyTitleSizeMax,
    "--tj-title-weight": String(cfg.journeyTitleWeight),
    "--tj-title-lh": String(cfg.journeyTitleLineHeight),
    "--tj-desc-size": cfg.descFontSize,
    "--tj-desc-lh": String(cfg.descLineHeight),
    "--tj-content-pad-min": cfg.contentPaddingMin,
    "--tj-content-pad-max": cfg.contentPaddingMax,
    "--tj-content-gap": cfg.contentGap,

    // E. Right journey navigator
    "--tj-thumb-w": cfg.thumbWidth,
    "--tj-thumb-h": cfg.thumbHeight,
    "--tj-thumb-radius": cfg.thumbRadius,
    "--tj-item-padding": cfg.rowItemPadding,
    "--tj-item-gap": cfg.rowItemGap,
    "--tj-list-title-size": cfg.listTitleSize,
    "--tj-list-sub-size": cfg.listSubtitleSize,

    // F. Buttons
    "--tj-btn-size": cfg.btnFontSize,
    "--tj-btn-weight": String(cfg.btnFontWeight),
    "--tj-btn-pad-y": cfg.btnPaddingY,
    "--tj-btn-pad-x": cfg.btnPaddingX,
    "--tj-cta-gap": cfg.ctaGap,

    // G. Effects & motion
    "--tj-hover-zoom": String(cfg.hoverZoomScale),
    "--tj-thumb-hover-zoom": String(cfg.thumbHoverZoomScale),
    "--tj-hover-dur": cfg.hoverAnimDuration,
    "--tj-transition-dur": cfg.transitionDuration,
    "--tj-fade-up-dist": cfg.fadeUpDistance,
  };
}
