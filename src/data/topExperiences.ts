import { media } from "./media";

export type TopExperienceVariant = "hero" | "wide" | "compact";

export interface TopExperience {
  id: string;
  /** Editorial number shown on the card, e.g. "01" */
  number: string;
  title: string;
  destination: string;
  /** Slug used for /destinations/:slug routing */
  destinationSlug: string;
  category: string;
  caption: string;
  description: string;
  image: {
    src: string;
    alt: string;
    /** CSS object-position — steers the cinematic crop */
    position?: string;
  };
  /** Gradient tone used in the image-failure fallback panel */
  tone: string;
  /** Layout role inside the mosaic */
  variant: TopExperienceVariant;
}

export const topExperiencesCopy = {
  eyebrow: "Moments to remember",
  scriptWord: "Top",
  title: "Experiences",
  intro:
    "Meet Madhya Pradesh through moments shaped by wilderness, heritage, riverside life and quiet landscapes.",
};

export const topExperiences: TopExperience[] = [
  {
    id: "wild-mornings",
    number: "01",
    title: "Wild Mornings",
    destination: "Kanha",
    destinationSlug: "kanha",
    category: "Wildlife",
    caption: "The forest has its own way of beginning a day.",
    description:
      "Kanha's sal forest and meadows stir at first light. Watch for birdlife and deer; a tiger may pass, but the forest itself is the experience.",
    image: {
      src: media.tigerKanhaRest,
      alt: "Bengal tiger resting on a forest track in Kanha National Park",
      position: "50% 55%",
    },
    tone: "#3d4a36",
    variant: "hero",
  },
  {
    id: "royal-evenings",
    number: "02",
    title: "Royal Evenings",
    destination: "Orchha",
    destinationSlug: "orchha",
    category: "Heritage",
    caption: "Stone remembers the last light differently.",
    description:
      "Walk among Orchha's palaces and cenotaphs as the light softens, with the Betwa winding past the town.",
    image: {
      src: media.orchhaSunset,
      alt: "Raja Mahal palace in Orchha glowing in the soft light of evening",
      position: "50% 40%",
    },
    tone: "#8a5a3c",
    variant: "wide",
  },
  {
    id: "riverside-hours",
    number: "03",
    title: "Riverside Hours",
    destination: "Maheshwar",
    destinationSlug: "maheshwar",
    category: "Slow Travel",
    caption: "Let the Narmada set the pace.",
    description:
      "Spend an unhurried hour beside the Narmada at Maheshwar's ghats, then explore the town's handloom traditions.",
    image: {
      src: media.maheshwar,
      alt: "Boats resting on the Narmada below the ghats and townscape of Maheshwar",
      position: "50% 55%",
    },
    tone: "#5a6f78",
    variant: "compact",
  },
  {
    id: "quiet-trails",
    number: "04",
    title: "Quiet Trails",
    destination: "Pachmarhi",
    destinationSlug: "pachmarhi",
    category: "Nature",
    caption: "Some views ask you to stay a little longer.",
    description:
      "Follow forested paths to Pachmarhi's viewpoints and waterfalls, leaving time to take in the Satpura landscape.",
    image: {
      src: media.waterfall,
      alt: "A waterfall falling through a green, mist-hung valley in Pachmarhi",
      position: "50% 50%",
    },
    tone: "#4b6247",
    variant: "compact",
  },
];
