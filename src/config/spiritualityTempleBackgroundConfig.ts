/**
 * Centralized configuration for the Temple Ivory Spiritual Background system.
 * 
 * Edit this file to control all colors, opacities, imagery, decorative ornaments,
 * section intensities, and mobile scaling for the Spirituality theme background.
 */

export type SpiritualitySection =
  | "page"
  | "hero"
  | "intro"
  | "expressions"
  | "destinations"
  | "programmes"
  | "cta";

export type SpiritualitySectionBoundary =
  | "intro-expressions"
  | "expressions-destinations"
  | "destinations-programmes"
  | "programmes-cta";

export type SpiritualityOmTarget =
  | SpiritualitySection
  | SpiritualitySectionBoundary;

export interface OmSymbolPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  /** Vertical offset from anchor point (e.g. '0px', '-20px', '40px') */
  offsetY?: string;
  /** Horizontal offset from anchor point (e.g. '0px', '20px') */
  offsetX?: string;
}

export interface OmSymbolConfig {
  /** Unique ID for this ornament instance (e.g. 'om-symbol-main', 'mandala-accent') */
  id?: string;
  /** Master toggle to show/hide this ornament */
  enabled: boolean;
  /** Image asset URL path */
  image: string;
  /** CSS color applied to the symbol via CSS mask */
  color: string;
  /** Symbol opacity from 0.0 (invisible) to 1.0 (opaque) */
  opacity: number;
  /** CSS width of the ornament (e.g. '420px', '920px') */
  width: string;
  /** Optional CSS height of the ornament (defaults to width if omitted) */
  height?: string;
  /** CSS rotation angle (e.g. '0deg') */
  rotation: string;
  /** Target section or section boundary for the ornament ('destinations-programmes', 'intro', etc.) */
  section: SpiritualityOmTarget;
  /** Explicit section boundary anchor ('destinations-programmes', 'expressions-destinations', etc.) */
  boundary?: SpiritualitySectionBoundary;
  /** Anchoring mode: 'section' (within section) or 'boundary' (centered on boundary between sections) */
  anchor?: "section" | "boundary";
  /** Vertical offset from anchor point (e.g. '0px', '-20px', '30px') */
  offsetY?: string;
  /** Horizontal offset from anchor point (e.g. '0px', '20px', '-30px') */
  offsetX?: string;
  /** Semantic position coordinates */
  position: OmSymbolPosition;
  /** CSS blend mode (e.g. 'normal', 'multiply') */
  blendMode:
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity"
  | (string & {});
  /** Responsive mobile controls */
  mobile: {
    /** Show/hide ornament on mobile devices */
    enabled: boolean;
    /** Mobile opacity */
    opacity: number;
    /** Mobile width */
    width: string;
    /** Optional mobile height (defaults to mobile.width if omitted) */
    height?: string;
    /** Mobile position coordinates */
    position: OmSymbolPosition;
    /** Mobile vertical offset from boundary/anchor */
    offsetY?: string;
    /** Mobile horizontal offset */
    offsetX?: string;
    /** Mobile rotation angle */
    rotation: string;
  };
}

/** Type alias for any decorative background ornament configuration */
export type SpiritualityOrnamentConfig = OmSymbolConfig;

export interface SpiritualityTempleBackgroundConfig {
  /** Master on/off toggle for the entire background system */
  enabled: boolean;

  /**
   * Primary Om (ॐ) Symbol Decorative Background Ornament
   * Controls the subtle background watermark symbol rendered via transparent CSS mask.
   */
  omSymbol: OmSymbolConfig;

  /**
   * Array of additional independently configurable ornamental background images.
   * Add any number of decorative images here by copying an existing ornament entry!
   */
  ornaments: OmSymbolConfig[];

  /** Backwards compatibility alias for ornaments */
  omSymbols?: OmSymbolConfig[];

  /**
   * Continuous Antique Gold Side Borders Configuration
   * Controls the elegant framing borders extending continuously from just below
   * the Cinematic Theme Switcher to the end of the Spiritual Programmes section.
   */
  borders: {
    /** Master toggle to show/hide the continuous side borders */
    show: boolean;
    /** Antique gold border color */
    color: string;
    /** Secondary accent rule color for temple architectural depth */
    softColor: string;
    /** Border opacity from 0.0 (invisible) to 1.0 (fully opaque) */
    opacity: number;
    /** Border line width (e.g., '1px') */
    width: string;
    /** Left and right border positioning relative to screen flanks */
    position: {
      left: string;
      right: string;
    };
    /** Optional elegant double-rule architectural line */
    doubleRule: boolean;
    /** Gap between the primary and secondary line */
    doubleRuleGap: string;
    /** Mobile and tablet responsive controls */
    mobile: {
      /** Show borders on mobile screens */
      show: boolean;
      /** Mobile border opacity (0.0 to 1.0) */
      opacity: number;
      /** Mobile border line width */
      width: string;
      /** Mobile left and right border positioning */
      position: {
        left: string;
        right: string;
      };
    };
  };

  /** Color palette tokens */
  colors: {
    baseIvory: string;
    parchment: string;
    sandstone: string;
    mutedGold: string;
    borderGold: string;
    borderSoft: string;
    accentGlow: string;
    gradients: {
      hero: string;
      parchmentLayer: string;
      sideFadeLeft: string;
      sideFadeRight: string;
      vignette: string;
      sectionTransition: string;
    };
  };

  /** Layer opacities (0 to 1) */
  opacity: {
    heroBackground: number;
    sidePhotographs: number;
    templeEngravings: number;
    borders: number;
    mandalaPatterns: number;
    cornerOrnaments: number;
    decorativeColumns: number;
    ghatImagery: number;
    lotusMotifs: number;
    textures: number;
    vignette: number;
  };

  /** Background photographic asset paths, sizing and positions */
  images: {
    heroRiver: {
      path: string;
      position: string;
      size: string;
    };
    ctaEveningTemple: {
      path: string;
      position: string;
      size: string;
    };
    parchmentTexture: {
      path: string;
      position: string;
      size: string;
    };
    sidePillars: {
      path: string;
      position: string;
      size: string;
      side: "left";
    };
    sideArchway: {
      path: string;
      position: string;
      size: string;
      side: "left";
    };
    sideShikhara: {
      path: string;
      position: string;
      size: string;
      side: "right";
    };
    sideNarmadaGhats: {
      path: string;
      position: string;
      size: string;
      side: "right";
    };
    templeEngraving: {
      path: string;
      position: string;
      size: string;
    };
    templeCarving: {
      path: string;
      position: string;
      size: string;
    };
    lotusWater: {
      path: string;
      position: string;
      size: string;
    };
  };

  /** Section-specific background intensity controls (0 to 1) */
  sections: Record<SpiritualitySection, number>;

  /** Feature toggles for individual decorative layers */
  effects: {
    photos: boolean;
    sidePhotos: boolean;
    borders: boolean;
    decorativeColumns: boolean;
    mandalas: boolean;
    ornaments: boolean;
    cornerDecorations: boolean;
    textures: boolean;
    vignette: boolean;
    engravings: boolean;
    ghatAtmosphere: boolean;
    lotusMotifs: boolean;
    sectionDividers: boolean;
    omSymbol: boolean;
  };

  /** Responsive controls for mobile and tablet screens */
  mobile: {
    opacityScale: number;
    decorativeElementScale: number;
    showSidePhotos: boolean;
    showDecorativeColumns: boolean;
    showMandalas: boolean;
    sidePhotoWidthVw: number;
    cornerSizePx: number;
    heroImagePosition: string;
    ctaImagePosition: string;
  };
}

export const spiritualityTempleBackgroundConfig: SpiritualityTempleBackgroundConfig = {
  enabled: true,

  omSymbol: {
    id: "om-symbol-main",
    enabled: true,
    image: "/spirituality-assets/ornaments/om-symbol.png",
    color: "#887b62",
    opacity: 0.1,
    width: "920px",
    height: "920px",
    rotation: "0deg",
    section: "destinations-programmes",
    boundary: "destinations-programmes",
    anchor: "boundary",
    offsetY: "0px",
    offsetX: "0px",
    position: {
      right: "clamp(32px, 5.5vw, 84px)",
      offsetY: "0px",
      offsetX: "0px",
    },
    blendMode: "normal",
    mobile: {
      enabled: true,
      opacity: 0.12,
      width: "280px",
      height: "280px",
      offsetY: "0px",
      offsetX: "0px",
      position: {
        right: "16px",
        offsetY: "0px",
        offsetX: "0px",
      },
      rotation: "0deg",
    },
  },

  /**
   * Additional Independently Configurable Decorative Background Ornaments
   *
   * Add any number of decorative images by copying an ornament block into this array!
   * Supports all sections, boundary-anchoring (e.g. 'intro-expressions', 'destinations-programmes'),
   * offsets, custom sizes, colors, and responsive mobile controls.
   */
  ornaments: [


    {
  id: "temple-intro-design",
  enabled: true,

  image: "/spirituality-assets/ornaments/trisul.png",

  color: "#B89758",
  opacity: 0.15,

  width: "700px",
  height: "900px",
  rotation: "0deg",

  section: "intro",
  anchor: "section",

  offsetY: "-300px",
  offsetX: "0px",

  position: {
    top: "30%",
    right: "30px",
  },

  blendMode: "normal",

  mobile: {
    enabled: true,
    opacity: 0.08,
    width: "180px",
    height: "180px",
    position: {
      top: "20%",
      right: "10px",
    },
    rotation: "0deg",
  },
},
    // To add another ornament, copy an existing ornament entry, change its id,
    // image path, position, size, and settings. Example:
    // {
    //   id: "lotus-intro-accent",
    //   enabled: true,
    //   image: "/spirituality-assets/ornaments/lotus.svg",
    //   color: "#B89758",
    //   opacity: 0.14,
    //   width: "260px",
    //   height: "260px",
    //   rotation: "0deg",
    //   section: "intro",
    //   anchor: "section",
    //   offsetY: "0px",
    //   offsetX: "0px",
    //   position: {
    //     top: "36px",
    //     left: "clamp(24px, 4vw, 60px)",
    //   },
    //   blendMode: "normal",
    //   mobile: {
    //     enabled: true,
    //     opacity: 0.08,
    //     width: "140px",
    //     height: "140px",
    //     position: {
    //       top: "16px",
    //       left: "16px",
    //     },
    //     rotation: "0deg",
    //   },
    // },
  ],

  borders: {
    show: true,
    color: "rgba(184, 151, 88, 0.45)",
    softColor: "rgba(184, 151, 88, 0.20)",
    opacity: 0.48,
    width: "1px",
    position: {
      left: "clamp(16px, 2.8vw, 44px)",
      right: "clamp(16px, 2.8vw, 44px)",
    },
    doubleRule: true,
    doubleRuleGap: "4px",
    mobile: {
      show: true,
      opacity: 0.32,
      width: "1px",
      position: {
        left: "12px",
        right: "12px",
      },
    },
  },

  colors: {
    baseIvory: "#FAF7F0",
    parchment: "#F5EFEB",
    sandstone: "#EBE3D7",
    mutedGold: "#B89758",
    borderGold: "rgba(184, 151, 88, 0.45)",
    borderSoft: "rgba(184, 151, 88, 0.20)",
    accentGlow: "rgba(224, 194, 138, 0.15)",
    gradients: {
      hero: "radial-gradient(ellipse 85% 65% at 50% 25%, rgba(250, 247, 240, 0.35), rgba(245, 239, 235, 0.85) 60%, #FAF7F0 100%)",
      parchmentLayer: "linear-gradient(180deg, rgba(250, 247, 240, 0.90) 0%, rgba(245, 239, 235, 0.95) 50%, #FAF7F0 100%)",
      sideFadeLeft: "linear-gradient(to right, rgba(250, 247, 240, 0) 0%, rgba(250, 247, 240, 0.75) 70%, #FAF7F0 100%)",
      sideFadeRight: "linear-gradient(to left, rgba(250, 247, 240, 0) 0%, rgba(250, 247, 240, 0.75) 70%, #FAF7F0 100%)",
      vignette: "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 68%, rgba(235, 227, 215, 0.5) 100%)",
      sectionTransition: "linear-gradient(180deg, transparent 0%, rgba(184, 151, 88, 0.08) 50%, transparent 100%)",
    },
  },

  opacity: {
    heroBackground: 0.32,
    sidePhotographs: 0.4,
    templeEngravings: 0.12,
    borders: 0.70,
    mandalaPatterns: 0.3,
    cornerOrnaments: 0.42,
    decorativeColumns: 0.26,
    ghatImagery: 0.20,
    lotusMotifs: 0.52,
    textures: 1,
    vignette: 0.85,
  },

  images: {
    heroRiver: {
      path: "/spirituality-assets/hero-sacred-river.jpg",
      position: "center 30%",
      size: "cover",
    },
    ctaEveningTemple: {
      path: "/spirituality-assets/cta-evening-temple.jpg",
      position: "center bottom",
      size: "cover",
    },
    parchmentTexture: {
      path: "/spirituality-assets/parchment-texture.jpg",
      position: "center top",
      size: "500px 500px",
    },
    sidePillars: {
      path: "/spirituality-assets/side-temple-pillars.jpg",
      position: "left center",
      size: "cover",
      side: "left",
    },
    sideArchway: {
      path: "/spirituality-assets/side-archway.jpg",
      position: "left bottom",
      size: "cover",
      side: "left",
    },
    sideShikhara: {
      path: "/spirituality-assets/side-shikhara.jpg",
      position: "right top",
      size: "cover",
      side: "right",
    },
    sideNarmadaGhats: {
      path: "/spirituality-assets/side-narmada-ghats.jpg",
      position: "right center",
      size: "cover",
      side: "right",
    },
    templeEngraving: {
      path: "/spirituality-assets/temple-engraving.jpg",
      position: "center top",
      size: "contain",
    },
    templeCarving: {
      path: "/spirituality-assets/temple-carving.jpg",
      position: "center bottom",
      size: "contain",
    },
    lotusWater: {
      path: "/spirituality-assets/lotus-water.jpg",
      position: "center center",
      size: "cover",
    },
  },

  sections: {
    page: 1.0,
    hero: 0.35,
    intro: 0.40,
    expressions: 0.50,
    destinations: 0.30,
    programmes: 0.35,
    cta: 0.55,
  },

  effects: {
    photos: true,
    sidePhotos: true,
    borders: true,
    decorativeColumns: true,
    mandalas: true,
    ornaments: true,
    cornerDecorations: true,
    textures: true,
    vignette: true,
    engravings: true,
    ghatAtmosphere: true,
    lotusMotifs: true,
    sectionDividers: true,
    omSymbol: true,
  },

  mobile: {
    opacityScale: 0.75,
    decorativeElementScale: 0.65,
    showSidePhotos: false,
    showDecorativeColumns: false,
    showMandalas: true,
    sidePhotoWidthVw: 28,
    cornerSizePx: 96,
    heroImagePosition: "center 20%",
    ctaImagePosition: "center bottom",
  },
};
