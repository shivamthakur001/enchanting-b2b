// Temporary / placeholder data for the "Top Journeys Across Madhya Pradesh" section.
// Replace with live CMS / API data later — the shape below is intentionally stable
// so the UI does not need to change when real content is wired in.

export interface TopJourney {
  /** Stable unique identifier */
  id: string;
  /** Journey headline, e.g. "Heritage Heart of Madhya Pradesh" */
  title: string;
  /** Short tag shown above the title, e.g. "Heritage Trail" */
  category: string;
  /** Human readable duration label, e.g. "06 Days" */
  duration: string;
  /** Human readable nights label, e.g. "05 Nights" */
  nights: string;
  /** Ordered list of stops that make up the route ribbon */
  route: string[];
  /** Short editorial summary (1–2 sentences) */
  summary: string;
  /** 2–4 short highlight chips */
  highlights: string[];
  /** Hero image path */
  image: string;
  /** Accessible alt text describing the image */
  imageAlt: string;
  /** Optional link to the full itinerary */
  routeUrl?: string;
  /** Optional link to the enquiry / create-query flow */
  queryUrl?: string;
}

export const topJourneys: TopJourney[] = [
  {
    id: "heritage-heart",
    title: "Heritage Heart of Madhya Pradesh",
    category: "Heritage Trail",
    duration: "06 Days",
    nights: "05 Nights",
    route: ["Indore", "Ujjain", "Maheshwar", "Mandu"],
    summary:
      "A refined journey through royal forts, riverside ghats and sandstone palaces — the most requested heritage circuit for first-time Madhya Pradesh travellers.",
    highlights: ["Ahilya Fort ghats", "Mahakaleshwar darshan", "Jahaz Mahal sunset", "Maheshwari weaving village"],
    image: "/images/journeys/heritage-heart.jpg",
    imageAlt: "Sandstone palace ghats on the Narmada river at Maheshwar, Madhya Pradesh",
    queryUrl: "/create-query",
  },
  {
    id: "wildlife-circuit",
    title: "Wildlife Circuit",
    category: "Jungle & Safari",
    duration: "07 Days",
    nights: "06 Nights",
    route: ["Kanha", "Bandhavgarh", "Pench"],
    summary:
      "Three of India's finest tiger reserves, strung together for an effortless big-cat itinerary that consistently delights wildlife clients.",
    highlights: ["Prime tiger territory", "Expert naturalist drives", "Forest-edge luxury stays"],
    image: "/images/journeys/wildlife-circuit.jpg",
    imageAlt: "A Bengal tiger walking through golden forest in Kanha National Park",
    queryUrl: "/create-query",
  },
  {
    id: "sacred-mp",
    title: "Sacred Madhya Pradesh",
    category: "Spiritual Journey",
    duration: "05 Days",
    nights: "04 Nights",
    route: ["Ujjain", "Omkareshwar", "Maheshwar"],
    summary:
      "A devotional route through two Jyotirlingas and sacred riverbanks — an easy sell for pilgrimage and heritage-minded clients alike.",
    highlights: ["Mahakaleshwar Bhasma Aarti", "Omkareshwar island temple", "Evening Narmada aarti"],
    image: "/images/journeys/sacred-mp.jpg",
    imageAlt: "Glowing temple lamps along the ghats of Ujjain at dusk",
    queryUrl: "/create-query",
  },
  {
    id: "heritage-spiritual-trail",
    title: "Heritage & Spiritual Trail",
    category: "Culture & Devotion",
    duration: "08 Days",
    nights: "07 Nights",
    route: ["Khajuraho", "Orchha", "Gwalior"],
    summary:
      "Exquisite temple carvings, riverside cenotaphs and hilltop forts — a culturally rich route that photographs beautifully for every itinerary deck.",
    highlights: ["UNESCO temple complex", "Orchha riverside cenotaphs", "Gwalior Fort light show"],
    image: "/images/journeys/heritage-spiritual.jpg",
    imageAlt: "Intricately carved sandstone temples of Khajuraho at golden hour",
    queryUrl: "/create-query",
  },
  {
    id: "pachmarhi-satpura",
    title: "Pachmarhi & Satpura Escape",
    category: "Hills & Nature",
    duration: "04 Days",
    nights: "03 Nights",
    route: ["Pachmarhi", "Satpura"],
    summary:
      "Misty hill viewpoints, waterfalls and dense sal forests — a cool-climate add-on that pairs effortlessly with any core itinerary.",
    highlights: ["Satpura canopy walks", "Bee Falls", "Panchmarhi viewpoints"],
    image: "/images/journeys/pachmarhi-satpura.jpg",
    imageAlt: "Lush green hills and a waterfall in Pachmarhi, Madhya Pradesh",
    queryUrl: "/create-query",
  },
  {
    id: "complete-mp",
    title: "Complete Madhya Pradesh",
    category: "Grand Tour",
    duration: "12 Days",
    nights: "11 Nights",
    route: ["Indore", "Ujjain", "Mandu", "Khajuraho", "Orchha", "Bandhavgarh"],
    summary:
      "The definitive Madhya Pradesh grand tour — heritage, wildlife and spirituality combined into one unforgettable, fully-rounded itinerary.",
    highlights: ["Best of every region", "Balanced pacing", "Signature flagship tour"],
    image: "/images/journeys/complete-mp.jpg",
    imageAlt: "Panoramic sunset over the Narmada river valley in Madhya Pradesh",
    queryUrl: "/create-query",
  },
];
