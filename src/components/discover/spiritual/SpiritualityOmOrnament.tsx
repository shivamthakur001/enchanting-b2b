import type { CSSProperties } from "react";
import {
  spiritualityTempleBackgroundConfig as bgConfig,
  type SpiritualitySectionBoundary,
  type SpiritualityOmTarget,
  type OmSymbolConfig,
} from "../../../config/spiritualityTempleBackgroundConfig";
import "./spiritualityTempleBackground.css";

const KNOWN_BOUNDARIES: SpiritualitySectionBoundary[] = [
  "intro-expressions",
  "expressions-destinations",
  "destinations-programmes",
  "programmes-cta",
];

function isSectionBoundary(val?: string): val is SpiritualitySectionBoundary {
  return typeof val === "string" && KNOWN_BOUNDARIES.includes(val as SpiritualitySectionBoundary);
}

interface SpiritualityOmOrnamentProps {
  section?: SpiritualityOmTarget;
  boundary?: SpiritualitySectionBoundary;
  className?: string;
}

/**
 * Sacred Om (ॐ) & Decorative Ornaments Background System
 * 
 * Supports both:
 * 1. Section-boundary anchoring (centered across two adjacent sections, e.g. 50% Destinations / 50% Programmes)
 * 2. In-section anchoring (contained within a specific section, e.g. intro, hero, cta)
 * 
 * Centralized controls:
 * - Unique ID
 * - Enabled toggle
 * - Image asset path
 * - Color & Opacity (transparent mask)
 * - Width & Height
 * - Rotation
 * - Section selection & Boundary anchoring
 * - Vertical and horizontal offsets
 * - Semantic positioning (top, bottom, left, right)
 * - Mobile responsive controls
 * - Blend mode
 */
export function SpiritualityOmOrnament({
  section,
  boundary,
  className = "",
}: SpiritualityOmOrnamentProps) {
  if (!bgConfig.enabled) return null;

  const allInstances: OmSymbolConfig[] = [];
  if (bgConfig.omSymbol && bgConfig.omSymbol.enabled) {
    allInstances.push(bgConfig.omSymbol);
  }
  if (bgConfig.ornaments && Array.isArray(bgConfig.ornaments)) {
    allInstances.push(...bgConfig.ornaments.filter((item) => item && item.enabled));
  }
  if (bgConfig.omSymbols && Array.isArray(bgConfig.omSymbols)) {
    allInstances.push(...bgConfig.omSymbols.filter((item) => item && item.enabled));
  }

  // Filter instances that match this ornament anchor point
  const matching = allInstances.filter((config) => {
    const isBoundaryAnchor =
      config.anchor === "boundary" ||
      config.boundary !== undefined ||
      isSectionBoundary(config.section);

    if (boundary) {
      if (!isBoundaryAnchor) return false;
      const targetBoundary =
        config.boundary || (isSectionBoundary(config.section) ? config.section : "destinations-programmes");
      return targetBoundary === boundary;
    }

    if (section) {
      // If caller passed a boundary as section prop (e.g. section="destinations-programmes")
      if (isSectionBoundary(section)) {
        if (!isBoundaryAnchor) return false;
        const targetBoundary =
          config.boundary || (isSectionBoundary(config.section) ? config.section : "destinations-programmes");
        return targetBoundary === section;
      }

      // In-section mode: must NOT be a boundary anchor, and section must match
      if (isBoundaryAnchor) return false;
      return config.section === section;
    }

    return false;
  });

  if (matching.length === 0) return null;

  const isBoundaryMode = Boolean(boundary || isSectionBoundary(section));

  return (
    <>
      {matching.map((config, idx) => {
        const ornamentKey = config.id || `spirituality-ornament-${idx}`;

        const isHorizontalCentered = config.position.left === "50%";
        const defaultOffsetX = isHorizontalCentered ? "-50%" : "0px";
        const translateX = config.offsetX ?? config.position.offsetX ?? defaultOffsetX;

        const mIsHorizontalCentered = config.mobile.position.left === "50%";
        const mDefaultOffsetX = mIsHorizontalCentered ? "-50%" : translateX;
        const mTranslateX =
          config.mobile.offsetX ??
          config.mobile.position.offsetX ??
          mDefaultOffsetX;

        const offsetY = config.offsetY ?? config.position.offsetY ?? "0px";
        const mOffsetY =
          config.mobile.offsetY ??
          config.mobile.position.offsetY ??
          offsetY;

        const top = isBoundaryMode
          ? "0px"
          : (config.position.top ?? "auto");
        const bottom = isBoundaryMode
          ? "auto"
          : (config.position.bottom ?? (config.position.top !== undefined ? "auto" : undefined));

        const left = config.position.left ?? "auto";
        const right =
          config.position.left !== undefined
            ? "auto"
            : (config.position.right ?? (isBoundaryMode ? "clamp(32px, 5.5vw, 84px)" : "auto"));

        const mTop = isBoundaryMode
          ? "0px"
          : (config.mobile.position.top ?? "auto");
        const mBottom = isBoundaryMode
          ? "auto"
          : (config.mobile.position.bottom ?? (config.mobile.position.top !== undefined ? "auto" : undefined));

        const mLeft = config.mobile.position.left ?? "auto";
        const mRight =
          config.mobile.position.left !== undefined
            ? "auto"
            : (config.mobile.position.right ?? (isBoundaryMode ? "16px" : right));

        const width = config.width;
        const height = config.height || config.width;
        const mWidth = config.mobile.width;
        const mHeight = config.mobile.height || config.mobile.width;

        const omStyle: CSSProperties = {
          "--om-image": `url("${config.image}")`,
          "--om-color": config.color,
          "--om-opacity": config.opacity,
          "--om-width": width,
          "--om-height": height,
          "--om-rotation": config.rotation,
          "--om-blend-mode": config.blendMode || "normal",
          "--om-offset-y": offsetY,
          "--om-translate-x": translateX,
          "--om-top": top,
          "--om-bottom": bottom ?? "auto",
          "--om-left": left,
          "--om-right": right ?? "auto",
          "--om-mobile-display": config.mobile.enabled ? "block" : "none",
          "--om-mobile-opacity": config.mobile.opacity,
          "--om-mobile-width": mWidth,
          "--om-mobile-height": mHeight,
          "--om-mobile-rotation": config.mobile.rotation,
          "--om-mobile-offset-y": mOffsetY,
          "--om-mobile-translate-x": mTranslateX,
          "--om-mobile-top": mTop,
          "--om-mobile-bottom": mBottom ?? "auto",
          "--om-mobile-left": mLeft,
          "--om-mobile-right": mRight ?? "auto",
        } as CSSProperties;

        const ornamentEl = (
          <div
            key={ornamentKey}
            id={config.id ? `ornament-${config.id}` : undefined}
            className={`spirituality-om-ornament ${isBoundaryMode ? "spirituality-om-ornament--boundary" : ""} ${className}`.trim()}
            style={omStyle}
            aria-hidden="true"
            role="presentation"
          />
        );

        if (isBoundaryMode) {
          return (
            <div
              key={`boundary-${ornamentKey}`}
              className="spirituality-section-boundary"
              aria-hidden="true"
              role="presentation"
            >
              {ornamentEl}
            </div>
          );
        }

        return ornamentEl;
      })}
    </>
  );
}
