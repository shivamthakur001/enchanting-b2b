import type { CSSProperties } from "react";
import {
  BotanicalPattern,
  CornerEngraving,
  EdgeFernBank,
  HangingVineMotif,
  JungleCornerMotif,
  SectionVine,
} from "./EmeraldWildlifeOrnaments";
import { wildlifeEmeraldBackgroundConfig as cfg } from "../../../config/wildlifeEmeraldBackgroundConfig";
import "./wildlifeEmeraldBackground.css";

const rootStyle = {
  "--emerald-base": cfg.baseColor,
  "--emerald-canopy-gradient": cfg.gradients.canopy,
  "--emerald-undergrowth-gradient": cfg.gradients.undergrowth,
  "--emerald-vignette-gradient": cfg.gradients.vignette,
  "--emerald-canopy-opacity": cfg.opacity.canopy,
  "--emerald-undergrowth-opacity": cfg.opacity.undergrowth,
  "--emerald-foliage-opacity": cfg.opacity.foliage,
  "--emerald-pattern-opacity": cfg.opacity.botanicalPattern,
  "--emerald-corner-opacity": cfg.opacity.cornerOrnaments,
  "--emerald-frame-opacity": cfg.opacity.goldFrame,
  "--emerald-texture-opacity": cfg.opacity.texture,
  "--emerald-vignette-opacity": cfg.opacity.vignette,
  "--emerald-section-page": cfg.sections.page,
  "--emerald-section-hero": cfg.sections.hero,
  "--emerald-section-intro": cfg.sections.intro,
  "--emerald-section-expressions": cfg.sections.expressions,
  "--emerald-section-destinations": cfg.sections.destinations,
  "--emerald-section-programmes": cfg.sections.programmes,
  "--emerald-section-cta": cfg.sections.cta,
  "--emerald-canopy-position": cfg.images.canopyPosition,
  "--emerald-canopy-size": cfg.images.canopySize,
  "--emerald-undergrowth-position": cfg.images.undergrowthPosition,
  "--emerald-undergrowth-size": cfg.images.undergrowthSize,
  "--emerald-foliage-size": cfg.images.foliageSize,
  "--emerald-mobile-canopy-position": cfg.mobile.canopyPosition,
  "--emerald-mobile-undergrowth-position": cfg.mobile.undergrowthPosition,
  "--emerald-mobile-foliage-size": cfg.mobile.foliageSize,
  "--emerald-mobile-opacity-scale": cfg.mobile.opacityScale,
} as CSSProperties;

export function EmeraldWildlifeBackground() {
  if (!cfg.enabled) return null;

  return (
    <div className="wildlife-emerald-background" style={rootStyle} aria-hidden="true">
      <div className="wildlife-emerald-background__base" />
      <div className="wildlife-emerald-background__gradient wildlife-emerald-background__gradient--canopy" />
      <div className="wildlife-emerald-background__gradient wildlife-emerald-background__gradient--undergrowth" />
      {cfg.effects.silk && <div className="wildlife-emerald-background__silk" />}
      {cfg.effects.botanicalPattern && <div className="wildlife-emerald-background__pattern"><BotanicalPattern /></div>}
      <div className="wildlife-emerald-background__photo wildlife-emerald-background__photo--canopy" />
      <div className="wildlife-emerald-background__photo wildlife-emerald-background__photo--undergrowth" />
      {cfg.effects.foliage && <>
        <div className="wildlife-emerald-background__photo wildlife-emerald-background__photo--left" />
        <div className="wildlife-emerald-background__photo wildlife-emerald-background__photo--right" />
      </>}
      {cfg.effects.corners && <div className="wildlife-emerald-background__corners">
        <span><JungleCornerMotif /></span><span><JungleCornerMotif /></span>
        <span><JungleCornerMotif /></span><span><JungleCornerMotif /></span>
      </div>}
      {cfg.effects.vines && <div className="wildlife-emerald-background__vines">
        <span><HangingVineMotif /></span><span><HangingVineMotif /></span>
      </div>}
      {cfg.effects.ferns && <div className="wildlife-emerald-background__ferns">
        <span><EdgeFernBank /></span><span><EdgeFernBank /></span>
      </div>}
      {cfg.effects.corners && <div className="wildlife-emerald-background__gold-corners">
        <span><CornerEngraving /></span><span><CornerEngraving /></span>
        <span><CornerEngraving /></span><span><CornerEngraving /></span>
      </div>}
      <div className="wildlife-emerald-background__section-vine"><SectionVine /></div>
      {cfg.effects.frame && <div className="wildlife-emerald-background__frame" />}
      {cfg.effects.vignette && <div className="wildlife-emerald-background__vignette" />}
      {cfg.effects.silk && <div className="wildlife-emerald-background__linen" />}
      {cfg.effects.velvet && <div className="wildlife-emerald-background__velvet" />}
      {cfg.effects.grain && <div className="wildlife-emerald-background__grain" />}
    </div>
  );
}

