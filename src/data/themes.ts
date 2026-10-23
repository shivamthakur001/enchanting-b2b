import type { DiscoverTheme } from "../types";
import { media } from "./media";

export const discoverThemes: DiscoverTheme[] = [
  {
    slug: "nature",
    name: "Nature",
    shortDescription: "Landscapes, forests, waterfalls and tranquil hill escapes.",
    microcopy: "Landscapes & natural escapes",
    previewCaption: "Explore landscapes, forests, waterfalls and tranquil escapes",
    previewImage: media.pachmarhi,
    previewImageAlt: "Forested hills and valley light in Pachmarhi",
    heroImage: media.pachmarhi,
    heroImageAlt: "Wide view of the Pachmarhi valley",
    featuredDestinationIds: ["pachmarhi", "bhedaghat", "tamia", "raneh-falls", "patalkot"],
    packageCategory: "nature",
    visual: {
      accent: "#2a4536",
      accentSoft: "#e4eee6",
      overlay: "from-forest-deep/70 via-forest-deep/25 to-transparent",
      background: "#f4f7f3",
      eyebrow: "The green heartland",
    },
    seoTitle: "Nature in Madhya Pradesh | Enchanting Madhya Pradesh",
    seoDescription:
      "Discover Pachmarhi, Bhedaghat, Amarkantak and the Satpura landscapes with trade-ready nature itineraries.",
  },
  {
    slug: "heritage",
    name: "Heritage",
    shortDescription: "Fortresses, monuments and living historic cities.",
    microcopy: "Fortresses, monuments & living history",
    previewCaption: "Discover timeless architecture, forts and historic cities",
    previewImage: media.khajuraho,
    previewImageAlt: "Sandstone temples of Khajuraho",
    heroImage: media.khajuraho,
    heroImageAlt: "Khajuraho temple complex in morning light",
    featuredDestinationIds: ["khajuraho", "orchha", "gwalior", "mandu", "bhimbetka"],
    packageCategory: "heritage",
    visual: {
      accent: "#8c5a32",
      accentSoft: "#f3eadf",
      overlay: "from-[#3a2716]/75 via-[#3a2716]/30 to-transparent",
      background: "#f7f1e8",
      eyebrow: "Stone, court and craft",
    },
    seoTitle: "Heritage of Madhya Pradesh | Enchanting Madhya Pradesh",
    seoDescription:
      "Khajuraho, Orchha, Mandu, Gwalior and Maheshwar — heritage circuits designed for the travel trade.",
  },
  {
    slug: "wildlife",
    name: "Wildlife",
    shortDescription: "National parks, reserves and wilderness lodges.",
    microcopy: "National parks & wilderness",
    previewCaption: "Explore Madhya Pradesh's National Parks & Reserves",
    previewImage: media.tigerKanhaWalk,
    previewImageAlt: "Bengal tiger walking through Kanha forest",
    heroImage: media.tigerKanhaWalk,
    heroImageAlt: "Tiger in the forests of central India",
    featuredDestinationIds: ["pench", "kanha", "bandhavgarh", "satpura", "panna", "kuno"],
    packageCategory: "wildlife",
    visual: {
      accent: "#3d2a1c",
      accentSoft: "#efe6db",
      overlay: "from-[#1a140f]/75 via-[#1a140f]/35 to-transparent",
      background: "#f3eee7",
      eyebrow: "The tiger state",
    },
    seoTitle: "Wildlife of Madhya Pradesh | Enchanting Madhya Pradesh",
    seoDescription:
      "Kanha, Bandhavgarh, Pench, Satpura, Panna and Kuno — specialist wildlife programmes for travel agents.",
  },
  {
    slug: "spirituality",
    name: "Spirituality",
    shortDescription: "Sacred cities, river pilgrimages and quiet architecture.",
    microcopy: "Sacred cities & spiritual journeys",
    previewCaption: "Experience Madhya Pradesh's sacred cities and spiritual journeys",
    previewImage: media.sanchiStupa,
    previewImageAlt: "The Great Stupa at Sanchi",
    heroImage: media.ujjainAarti,
    heroImageAlt: "Evening aarti on the ghats of Ujjain",
    featuredDestinationIds: ["ujjain", "omkareshwar", "maheshwar", "chitrakoot", "amarkantak"],
    packageCategory: "spirituality",
    visual: {
      accent: "#9a6b2f",
      accentSoft: "#f6edd9",
      overlay: "from-[#2c2418]/70 via-[#2c2418]/25 to-transparent",
      background: "#faf6ee",
      eyebrow: "Along the sacred rivers",
    },
    seoTitle: "Spiritual Madhya Pradesh | Enchanting Madhya Pradesh",
    seoDescription:
      "Ujjain, Omkareshwar, Sanchi and the Narmada circuit — spiritual journeys for the travel trade.",
  },
];

export function getTheme(slug: string) {
  return discoverThemes.find((theme) => theme.slug === slug);
}

export function getThemeByPackageCategory(category: string) {
  return discoverThemes.find((theme) => theme.packageCategory === category);
}
