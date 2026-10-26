export type WildlifeEmeraldSection = "page" | "hero" | "intro" | "expressions" | "destinations" | "programmes" | "cta";

export interface WildlifeEmeraldBackgroundConfig {
  enabled: boolean;
  baseColor: string;
  gradients: {
    canopy: string;
    undergrowth: string;
    vignette: string;
  };
  opacity: {
    canopy: number;
    undergrowth: number;
    foliage: number;
    botanicalPattern: number;
    cornerOrnaments: number;
    goldFrame: number;
    texture: number;
    vignette: number;
  };
  images: {
    canopyPosition: string;
    canopySize: string;
    undergrowthPosition: string;
    undergrowthSize: string;
    foliageSize: string;
  };
  sections: Record<WildlifeEmeraldSection, number>;
  effects: {
    silk: boolean;
    grain: boolean;
    velvet: boolean;
    botanicalPattern: boolean;
    foliage: boolean;
    vines: boolean;
    ferns: boolean;
    corners: boolean;
    frame: boolean;
    vignette: boolean;
  };
  mobile: {
    canopyPosition: string;
    undergrowthPosition: string;
    foliageSize: string;
    opacityScale: number;
  };
}

// Yahin se Emerald background ka color, images, opacity aur decorative layers control karein.
export const wildlifeEmeraldBackgroundConfig: WildlifeEmeraldBackgroundConfig = {
  enabled: true,
  baseColor: "#071410",
  gradients: {
    canopy: "radial-gradient(ellipse 70% 55% at 50% 28%, rgba(18,50,36,.45), rgba(8,22,16,.2) 42%, rgba(5,12,9,.9) 100%)",
    undergrowth: "radial-gradient(ellipse 60% 50% at 50% 78%, rgba(14,40,28,.35), transparent 70%)",
    vignette: "linear-gradient(to bottom, rgba(5,12,9,.42), transparent 18%, transparent 82%, rgba(5,12,9,.62))",
  },
  opacity: {
    canopy: 0.82,
    undergrowth: 0.78,
    foliage: 0.72,
    botanicalPattern: 0.09,
    cornerOrnaments: 0.52,
    goldFrame: 0.38,
    texture: 0.32,
    vignette: 1,
  },
  images: {
    canopyPosition: "center top",
    canopySize: "cover",
    undergrowthPosition: "center bottom",
    undergrowthSize: "cover",
    foliageSize: "cover",
  },
  sections: {
    page: 1,
    hero: 0.12,
    intro: 0.38,
    expressions: 0.45,
    destinations: 0.38,
    programmes: 0.32,
    cta: 0.52,
  },
  effects: {
    silk: true,
    grain: true,
    velvet: true,
    botanicalPattern: true,
    foliage: true,
    vines: true,
    ferns: true,
    corners: true,
    frame: true,
    vignette: true,
  },
  mobile: {
    canopyPosition: "center top",
    undergrowthPosition: "center bottom",
    foliageSize: "auto 100%",
    opacityScale: 0.78,
  },
};

