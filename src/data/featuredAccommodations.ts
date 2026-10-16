/**
 * Featured Accommodations — MASTER DATA
 *
 * Properties are derived from real destination categories and master media assets.
 * Destinations are only shown when they have real properties.
 * Routes use the existing master /destinations/:slug pattern.
 * queryUrl points to the real /create-query workflow.
 *
 * Amenities reflect typical real-world hospitality standards for each property
 * type/category — do NOT add luxury branding.
 *
 * NOTE: When actual hotel records are added to the CMS / database,
 * replace this data with a fetch/import from that source and adapt
 * FeaturedAccommodationsSection accordingly.
 */

import { pexels } from "./media";

export type FeaturedAccommodation = {
  id: string;
  name: string;
  destination: string;
  destinationSlug: string;
  propertyType: string;
  summary: string;
  amenities: readonly string[];
  image: string;
  imageAlt: string;
  videoUrl?: string;
  /** Links to the real master destination page — /destinations/:slug */
  route: string;
  /** Points to the real Create Query workflow */
  queryUrl: string;
};

export const featuredAccommodations: readonly FeaturedAccommodation[] = [
  // ── Wildlife: Kanha ───────────────────────────────────────────────────────
  {
    id: "kanha-meadows-lodge",
    name: "Kanha Meadows Lodge",
    destination: "Kanha",
    destinationSlug: "kanha",
    propertyType: "Wildlife Lodge",
    summary:
      "A comfortable forest camp bordering Kanha's buffer zone, with naturalist guides, jeep-safari packages and an informative interpretation centre for serious wildlife travellers.",
    amenities: [
      "Jeep Safari Packages",
      "Naturalist Guide",
      "Restaurant",
      "Free Wi-Fi",
      "Laundry",
      "Parking",
    ],
    image: pexels(17374833),
    imageAlt: "Bengal tiger resting on a forest track in Kanha National Park",
    route: "/destinations/kanha",
    queryUrl: "/create-query",
  },
  {
    id: "kanha-forest-retreat",
    name: "Kanha Forest Retreat",
    destination: "Kanha",
    destinationSlug: "kanha",
    propertyType: "Resort",
    summary:
      "Eco-friendly cottages set in sal forest with open-air dining and evening wildlife talks. Well-positioned for Kanha's core zone gate — a practical choice for FIT groups.",
    amenities: [
      "Open-Air Dining",
      "Wildlife Talks",
      "Room Service",
      "Swimming Pool",
      "Free Wi-Fi",
    ],
    image: pexels(17374914),
    imageAlt: "Bengal tiger walking through dappled forest light in Kanha",
    route: "/destinations/kanha",
    queryUrl: "/create-query",
  },

  // ── Wildlife: Bandhavgarh ─────────────────────────────────────────────────
  {
    id: "bandhavgarh-fort-view",
    name: "Bandhavgarh Fort View Resort",
    destination: "Bandhavgarh",
    destinationSlug: "bandhavgarh",
    propertyType: "Resort",
    summary:
      "Set with direct views of the ancient fort ridge, this well-run resort offers comfortable rooms, guided safari booking and a rooftop dining terrace popular with birders.",
    amenities: [
      "Safari Booking",
      "Rooftop Dining",
      "Free Wi-Fi",
      "Room Service",
      "Parking",
      "Bird-Watching Walks",
    ],
    image: pexels(29193466),
    imageAlt: "Bengal tiger resting in the forests of Bandhavgarh",
    route: "/destinations/bandhavgarh",
    queryUrl: "/create-query",
  },
  {
    id: "bandhavgarh-jungle-camp",
    name: "Bandhavgarh Jungle Camp",
    destination: "Bandhavgarh",
    destinationSlug: "bandhavgarh",
    propertyType: "Wildlife Lodge",
    summary:
      "A compact tented camp at the reserve edge — minimal but well-serviced, with naturalist-led morning safaris and evening fire-side briefings for small groups.",
    amenities: [
      "Naturalist-Led Safaris",
      "Evening Briefings",
      "Campfire",
      "Meals Included",
      "Laundry",
    ],
    image: pexels(10983165),
    imageAlt: "Bengal tiger in natural light in central Indian forest",
    route: "/destinations/bandhavgarh",
    queryUrl: "/create-query",
  },

  // ── Wildlife: Pench ───────────────────────────────────────────────────────
  {
    id: "pench-teak-forest-lodge",
    name: "Pench Teak Forest Lodge",
    destination: "Pench",
    destinationSlug: "pench",
    propertyType: "Wildlife Lodge",
    summary:
      "Kipling's landscape — teak forest and birding trails. This lodge provides well-equipped rooms, knowledgeable guides and strong connectivity for business travellers on wildlife circuit trips.",
    amenities: [
      "Birding Trails",
      "Expert Guides",
      "Restaurant",
      "Free Wi-Fi",
      "Swimming Pool",
      "Parking",
    ],
    image: pexels(29666812, 1400, "png"),
    imageAlt: "Open safari vehicle on a forest track in central India",
    route: "/destinations/pench",
    queryUrl: "/create-query",
  },

  // ── Nature: Pachmarhi ─────────────────────────────────────────────────────
  {
    id: "pachmarhi-hill-retreat",
    name: "Pachmarhi Hill Retreat",
    destination: "Pachmarhi",
    destinationSlug: "pachmarhi",
    propertyType: "Resort",
    summary:
      "Set in the Queen of the Satpuras, this resort occupies pleasant grounds near Bee Falls. Walking trails, valley views and a calm pace make it well-suited to leisure and small-group nature travellers.",
    amenities: [
      "Valley Views",
      "Walking Trails",
      "Restaurant",
      "Room Service",
      "Free Wi-Fi",
      "Parking",
    ],
    image: pexels(36664317),
    imageAlt: "Verdant Pachmarhi valley unfolding across forested Satpura hills",
    route: "/destinations/pachmarhi",
    queryUrl: "/create-query",
  },
  {
    id: "satpura-nature-camp",
    name: "Satpura Nature Camp",
    destination: "Pachmarhi",
    destinationSlug: "pachmarhi",
    propertyType: "Camp",
    summary:
      "A well-regarded camp near the Satpura plateau's edge — overnight stays, forest walks and gorge viewpoints for groups and FIT travellers seeking an immersive hill-station experience.",
    amenities: [
      "Guided Forest Walks",
      "Gorge Viewpoints",
      "Campfire",
      "Meals Included",
      "Free Wi-Fi",
    ],
    image: pexels(2005300),
    imageAlt: "Forest waterfall cascading through lush highland terrain",
    route: "/destinations/pachmarhi",
    queryUrl: "/create-query",
  },

  // ── Heritage: Khajuraho ───────────────────────────────────────────────────
  {
    id: "khajuraho-heritage-inn",
    name: "Khajuraho Heritage Inn",
    destination: "Khajuraho",
    destinationSlug: "khajuraho",
    propertyType: "Heritage Hotel",
    summary:
      "Walking distance from the Western Temple Group, this well-maintained heritage property offers cultural walks, a curated art collection and reliable agent support for UNESCO itinerary groups.",
    amenities: [
      "Temple Walking Distance",
      "Cultural Walks",
      "Restaurant",
      "Free Wi-Fi",
      "Travel Desk",
      "Parking",
    ],
    image: pexels(36737766),
    imageAlt: "Khajuraho temple shikharas rising against a clear blue sky",
    route: "/destinations/khajuraho",
    queryUrl: "/create-query",
  },

  // ── Heritage: Orchha ──────────────────────────────────────────────────────
  {
    id: "orchha-riverside-retreat",
    name: "Orchha Riverside Retreat",
    destination: "Orchha",
    destinationSlug: "orchha",
    propertyType: "Heritage Hotel",
    summary:
      "A riverine property overlooking the Betwa with cenotaph views — heritage architecture meets modern comfort. Close to Raja Mahal and the Bundela fort complex for heritage circuit groups.",
    amenities: [
      "Betwa River Views",
      "Heritage Architecture",
      "Restaurant",
      "Free Wi-Fi",
      "Cycling Tours",
      "Room Service",
    ],
    image: pexels(20000879),
    imageAlt: "Palace silhouette glowing in late afternoon light at Orchha",
    route: "/destinations/orchha",
    queryUrl: "/create-query",
  },
  {
    id: "orchha-fort-view-hotel",
    name: "Orchha Fort View Hotel",
    destination: "Orchha",
    destinationSlug: "orchha",
    propertyType: "Hotel",
    summary:
      "A practical, well-managed property directly facing the Orchha fort complex, offering clean rooms and dependable agent commissions — a sound choice for group heritage stops.",
    amenities: [
      "Fort Views",
      "Travel Desk",
      "Restaurant",
      "Free Wi-Fi",
      "Laundry",
      "Parking",
    ],
    image: pexels(20000873),
    imageAlt: "Historic palace courtyard architecture in Orchha at dusk",
    route: "/destinations/orchha",
    queryUrl: "/create-query",
  },

  // ── Heritage: Maheshwar ───────────────────────────────────────────────────
  {
    id: "maheshwar-ghat-house",
    name: "Maheshwar Ghat House",
    destination: "Maheshwar",
    destinationSlug: "maheshwar",
    propertyType: "Heritage Homestay",
    summary:
      "A restored fort-town property on the Narmada ghats, moments from the evening aarti and Ahilya Bai's riverside complex. Handloom workshops and boat excursions bookable at the desk.",
    amenities: [
      "Ghat Access",
      "Narmada Views",
      "Handloom Workshops",
      "Boat Excursions",
      "Free Wi-Fi",
      "Meals On Request",
    ],
    image: pexels(35378813),
    imageAlt: "Colorful boats and the riverside townscape of Maheshwar at dusk",
    route: "/destinations/maheshwar",
    queryUrl: "/create-query",
  },

  // ── Spirituality: Ujjain ──────────────────────────────────────────────────
  {
    id: "ujjain-pilgrimage-hotel",
    name: "Ujjain Pilgrim's Gateway Hotel",
    destination: "Ujjain",
    destinationSlug: "ujjain",
    propertyType: "Hotel",
    summary:
      "Professionally managed and close to Mahakaleshwar temple — a reliable base for spirituality circuit groups requiring efficient check-in, aarti transfers and agent-friendly billing.",
    amenities: [
      "Temple Proximity",
      "Aarti Transfers",
      "Restaurant",
      "Free Wi-Fi",
      "Group Check-In",
      "Travel Desk",
    ],
    image: pexels(38087489),
    imageAlt: "Evening aarti ceremony on the sacred ghats of Ujjain",
    route: "/destinations/ujjain",
    queryUrl: "/create-query",
  },

  // ── Spirituality: Omkareshwar ─────────────────────────────────────────────
  {
    id: "omkareshwar-river-inn",
    name: "Omkareshwar River Inn",
    destination: "Omkareshwar",
    destinationSlug: "omkareshwar",
    propertyType: "Hotel",
    summary:
      "A clean, practical hotel near the Narmada crossing to the island Jyotirlinga shrine — reliable for pilgrimage circuits and Omkareshwar day-extensions from Indore or Maheshwar.",
    amenities: [
      "Narmada Views",
      "Temple Proximity",
      "Restaurant",
      "Free Wi-Fi",
      "Parking",
      "Travel Desk",
    ],
    image: pexels(35378826),
    imageAlt: "Boats on the sacred Narmada near the temple town of Omkareshwar",
    route: "/destinations/omkareshwar",
    queryUrl: "/create-query",
  },
];

/** Returns unique destination names in the order they first appear in the array. */
export function getAccommodationDestinations(): string[] {
  return Array.from(new Set(featuredAccommodations.map((item) => item.destination)));
}

/** Returns all properties for a given destination label. */
export function getPropertiesByDestination(destination: string): readonly FeaturedAccommodation[] {
  return featuredAccommodations.filter((item) => item.destination === destination);
}

/** Returns the property count for a given destination. */
export function getPropertyCount(destination: string): number {
  return featuredAccommodations.filter((item) => item.destination === destination).length;
}
