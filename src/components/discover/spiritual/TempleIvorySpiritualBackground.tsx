import type { CSSProperties } from "react";
import { spiritualityTempleBackgroundConfig as cfg } from "../../../config/spiritualityTempleBackgroundConfig";
import "./spiritualityTempleBackground.css";

export { SpiritualityOmOrnament } from "./SpiritualityOmOrnament";

interface TempleIvorySpiritualBackgroundProps {
  className?: string;
}

export function TempleIvorySpiritualBackground({ className = "" }: TempleIvorySpiritualBackgroundProps) {
  if (!cfg.enabled) return null;

  const rootStyle: CSSProperties = {
    "--stb-base-ivory": cfg.colors.baseIvory,
    "--stb-muted-gold": cfg.colors.mutedGold,
    "--stb-border-gold": cfg.colors.borderGold,
    "--stb-border-soft": cfg.colors.borderSoft,
    "--stb-parchment-gradient": cfg.colors.gradients.parchmentLayer,
    "--stb-texture-opacity": cfg.opacity.textures,
    "--stb-hero-opacity": cfg.opacity.heroBackground,
    "--stb-engraving-opacity": cfg.opacity.templeEngravings,
    "--stb-side-photos-opacity": cfg.opacity.sidePhotographs,
    "--stb-ghat-opacity": cfg.opacity.ghatImagery,
    "--stb-cta-opacity": cfg.opacity.heroBackground,
    "--stb-columns-opacity": cfg.opacity.decorativeColumns,
    "--stb-mandala-opacity": cfg.opacity.mandalaPatterns,
    "--stb-corner-opacity": cfg.opacity.cornerOrnaments,
    "--stb-border-opacity": cfg.opacity.borders,
    "--stb-lotus-opacity": cfg.opacity.lotusMotifs,
    "--stb-vignette-opacity": cfg.opacity.vignette,
    "--stb-hero-pos": cfg.images.heroRiver.position,
  } as CSSProperties;

  return (
    <div
      className={`spirituality-temple-bg ${className}`.trim()}
      style={rootStyle}
      aria-hidden="true"
    >
      {/* 1. Base Ivory Foundation */}
      <div className="spirituality-temple-bg__base" />

      {/* 2. Soft Parchment Layer */}
      <div className="spirituality-temple-bg__parchment" />

      {/* 3. Subtle Stone Parchment Texture */}
      {cfg.effects.textures && <div className="spirituality-temple-bg__texture" />}

      {/* 4. Hero Faded Sacred River Backdrop */}
      {cfg.effects.photos && <div className="spirituality-temple-bg__hero-layer" />}

      {/* 5. Architectural Temple Engravings & Carvings */}
      {cfg.effects.engravings && (
        <>
          <div className="spirituality-temple-bg__engraving-layer" />
          <div className="spirituality-temple-bg__carving-layer" />
        </>
      )}

      {/* 6. Soft Faded Side Photographs */}
      {cfg.effects.sidePhotos && (
        <>
          <div className="spirituality-temple-bg__side-photo spirituality-temple-bg__side-photo--left" />
          <div className="spirituality-temple-bg__side-photo spirituality-temple-bg__side-photo--right" />
        </>
      )}

      {/* 7. Narmada Ghats Atmosphere */}
      {cfg.effects.ghatAtmosphere && <div className="spirituality-temple-bg__ghats" />}

      {/* 8. CTA Evening Temple Atmosphere */}
      {cfg.effects.photos && <div className="spirituality-temple-bg__cta-layer" />}

      {/* 9. Temple-Inspired Decorative Columns */}
      {cfg.effects.decorativeColumns && (
        <div className="spirituality-temple-bg__columns">
          <div className="spirituality-temple-bg__column spirituality-temple-bg__column--left" />
          <div className="spirituality-temple-bg__column spirituality-temple-bg__column--right" />
        </div>
      )}

      {/* 10. Sacred Mandala Watermarks */}
      {cfg.effects.mandalas && (
        <div className="spirituality-temple-bg__mandalas">
          <div className="spirituality-temple-bg__mandala spirituality-temple-bg__mandala--top" />
          <div className="spirituality-temple-bg__mandala spirituality-temple-bg__mandala--center" />
          <div className="spirituality-temple-bg__mandala spirituality-temple-bg__mandala--bottom" />
        </div>
      )}

      {/* 11. Subtle Lotus Motifs */}
      {cfg.effects.lotusMotifs && (
        <>
          <div className="spirituality-temple-bg__lotus-cluster spirituality-temple-bg__lotus-cluster--1" />
          <div className="spirituality-temple-bg__lotus-cluster spirituality-temple-bg__lotus-cluster--2" />
        </>
      )}

      {/* 12. Muted Gold Corner Ornaments */}
      {cfg.effects.cornerDecorations && (
        <div className="spirituality-temple-bg__corners">
          <div className="spirituality-temple-bg__corner spirituality-temple-bg__corner--tl" />
          <div className="spirituality-temple-bg__corner spirituality-temple-bg__corner--tr" />
        </div>
      )}

      {/* 13. Soft Warm Radial Vignette */}
      {cfg.effects.vignette && <div className="spirituality-temple-bg__vignette" />}
    </div>
  );
}
