/**
 * Madhya Pradesh Highlights - centralized data for the silhouette carousel.
 * Images live in public/images/highlights/ and are referenced as root-relative
 * URLs so Vite serves them as static assets without hashing.
 *
 * To swap artwork, update HIGHLIGHT_ASSETS only; carousel components are untouched.
 */

export interface MadhyaPradeshHighlight {
  id: string;
  sequence: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  accentColor: string;
  accentStyle: "gold" | "forest" | "stone" | "amber" | "saffron" | "teal" | "spice";
}

export const HIGHLIGHT_ASSETS = {
  cheetah: "/images/highlights/01-cheetah.png",
  adventure: "/images/highlights/02-adventure.png",
  heritage: "/images/highlights/03-heritage.png",
  tiger: "/images/highlights/04-tiger.png",
  jyotirlingas: "/images/highlights/05-jyotirlingas.png",
  art: "/images/highlights/06-art.png",
  food: "/images/highlights/07-food.png",
} as const;

export const madhyaPradeshHighlights: MadhyaPradeshHighlight[] = [
  {
    id: "cheetah",
    sequence: "01",
    title: "Cheetah",
    description:
      "Witness history unfold as the fastest land animal returns to Indian soil at Kuno National Park.",
    image: HIGHLIGHT_ASSETS.cheetah,
    alt: "Editorial illustration of a cheetah at Kuno National Park",
    accentColor: "#d4b483",
    accentStyle: "gold",
  },
  {
    id: "adventure",
    sequence: "02",
    title: "Adventure",
    description:
      "From hot air balloon safaris to treks and camping deep in the tiger reserve - thrill meets wilderness like nowhere else.",
    image: HIGHLIGHT_ASSETS.adventure,
    alt: "Editorial illustration of a hot air balloon safari over forest canopy",
    accentColor: "#c48a6a",
    accentStyle: "spice",
  },
  {
    id: "heritage",
    sequence: "03",
    title: "Heritage",
    description:
      "From the iconic temples of Khajuraho to the timeless forts of Gwalior - Madhya Pradesh is India's living legacy, with ancient wonders woven across the land.",
    image: HIGHLIGHT_ASSETS.heritage,
    alt: "Editorial illustration of an ancient Madhya Pradesh temple",
    accentColor: "#c4a07a",
    accentStyle: "stone",
  },
  {
    id: "tiger",
    sequence: "04",
    title: "Tiger",
    description:
      "Roar into the wild at the Tiger Capital of the World - where the real Jungle Book begins.",
    image: HIGHLIGHT_ASSETS.tiger,
    alt: "Editorial illustration of a Bengal tiger in Madhya Pradesh",
    accentColor: "#d09a5a",
    accentStyle: "amber",
  },
  {
    id: "jyotirlingas",
    sequence: "05",
    title: "Jyotirlingas",
    description:
      "Seek blessings at the heart of devotion - home to the sacred Mahakaleshwar and Omkareshwar Jyotirlingas.",
    image: HIGHLIGHT_ASSETS.jyotirlingas,
    alt: "Editorial illustration of a sacred Jyotirlinga shrine",
    accentColor: "#d4a05c",
    accentStyle: "saffron",
  },
  {
    id: "art",
    sequence: "06",
    title: "Art",
    description:
      "A canvas of tribal traditions and royal elegance, where every wall, weave, and mural breathes creativity.",
    image: HIGHLIGHT_ASSETS.art,
    alt: "Editorial illustration of a peacock inspired by Madhya Pradesh tribal art",
    accentColor: "#7ea08c",
    accentStyle: "teal",
  },
  {
    id: "food",
    sequence: "07",
    title: "Food",
    description:
      "Flavours that tell stories - from Poha-Jalebi mornings to Daal Bafla feasts, Madhya Pradesh is a celebration for every palate and soul.",
    image: HIGHLIGHT_ASSETS.food,
    alt: "Editorial illustration of a traditional Madhya Pradesh thali",
    accentColor: "#c4784a",
    accentStyle: "spice",
  },
];
