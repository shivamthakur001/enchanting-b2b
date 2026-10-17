/**
 * pachmarhi.ts
 * Complete editorial content for the Pachmarhi destination detail page.
 * All facts sourced from verified destination knowledge; no invented prices or bookings.
 * Consumed by PachmarhiDestinationPage through the reusable DestinationDetailPage template.
 */

import { media } from "./media";
import { packages } from "./packages";

// ── Pachmarhi quick facts shown in the hero ────────────────────────────────

export const pachmarhiQuickFacts = [
  { label: "Altitude", value: "1,067 m" },
  { label: "Best season", value: "Oct – Jun" },
  { label: "Hill station", value: "Only in MP" },
  { label: "Protected area", value: "Satpura Reserve" },
] as const;

// ── Destination tags shown in the hero ────────────────────────────────────

export const pachmarhiTags = [
  "Hill Station",
  "Nature & Forests",
  "Waterfalls",
  "Colonial Heritage",
  "Caves & Sacred Sites",
  "Soft Adventure",
] as const;

// ── Why Pachmarhi works — four editorial cards ─────────────────────────────

export interface WhyCard {
  id: string;
  icon: "altitude" | "temperature" | "diversity" | "accessibility";
  heading: string;
  body: string;
}

export const pachmarhiWhyCards: WhyCard[] = [
  {
    id: "altitude",
    icon: "altitude",
    heading: "MP's Only Hill Station",
    body:
      "At 1,067 m above sea level, Pachmarhi is the sole hill station of Madhya Pradesh, offering a cool retreat year-round when plains temperatures soar.",
  },
  {
    id: "temperature",
    icon: "temperature",
    heading: "Refreshing Cool Climate",
    body:
      "Summers reach only 30°C while winters dip to 10°C, making Pachmarhi a natural air conditioner for families, honeymooners and senior travellers alike.",
  },
  {
    id: "diversity",
    icon: "diversity",
    heading: "Layered Experiences",
    body:
      "Waterfalls, cave paintings, colonial churches, panoramic viewpoints and dense sal forest coexist within a few kilometres — rare depth for a single destination.",
  },
  {
    id: "accessibility",
    icon: "accessibility",
    heading: "Easy to Combine",
    body:
      "Pipariya rail junction (47 km) connects Pachmarhi to Bhopal, Jabalpur and Delhi. Pairs naturally with Bhopal and Satpura wildlife stays.",
  },
];

// ── Iconic Experiences — premium image cards ───────────────────────────────

export interface IconicExperience {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
}

export const pachmarhiIconicExperiences: IconicExperience[] = [
  {
    id: "bee-falls",
    number: "01",
    title: "Bee Falls",
    subtitle: "Pachmarhi's most loved waterfall",
    description:
      "A 35-metre cascade tumbling through layered rock into a natural pool. Easily walkable via a forest path and universally loved by all traveller types.",
    image: media.waterfall,
    imageAlt: "Waterfall cascading through forested hills at Bee Falls, Pachmarhi",
    tag: "Waterfall",
  },
  {
    id: "priyadarshini",
    number: "02",
    title: "Priyadarshini Point",
    subtitle: "Panoramic Satpura view",
    description:
      "Also called Forsyth Point, this elevated lookout reveals layer upon layer of forested ridges across the Satpura range — a signature moment on every itinerary.",
    image: media.pachmarhi,
    imageAlt: "Wide panoramic view of layered green Satpura hills from Priyadarshini Point",
    tag: "Viewpoint",
  },
  {
    id: "pandav-caves",
    number: "03",
    title: "Pandav Caves",
    subtitle: "Rock-cut Buddhist heritage",
    description:
      "Five interconnected rock-cut caves dating to the Gupta period, traditionally associated with the Pandavas. Peaceful gardens and accessible pathways surround them.",
    image: media.sanchiCarvings,
    imageAlt: "Stone cave chambers carved into rock at Pandav Caves, Pachmarhi",
    tag: "Heritage",
  },
  {
    id: "jatashankar",
    number: "04",
    title: "Jatashankar",
    subtitle: "Sacred gorge shrine",
    description:
      "A narrow gorge and natural cave shelter a Shiva lingam formation within the rocky hillside. The descent through overhanging rocks creates a powerful sense of place.",
    image: media.cascade,
    imageAlt: "Rocky gorge leading to the Jatashankar cave temple near Pachmarhi",
    tag: "Sacred Site",
  },
  {
    id: "handi-khoh",
    number: "05",
    title: "Handi Khoh",
    subtitle: "The 300-foot gorge",
    description:
      "A dramatic 100-metre-deep gorge cuts through dense forest. Viewpoints along the rim offer vertiginous views and a sense of the raw Satpura geology.",
    image: media.jabalpurLake,
    imageAlt: "Deep forested gorge at Handi Khoh, Pachmarhi",
    tag: "Natural Wonder",
  },
  {
    id: "satpura-safari",
    number: "06",
    title: "Satpura Safari",
    subtitle: "Wildlife at the edge",
    description:
      "Pachmarhi's forests border the Satpura Tiger Reserve, allowing walking safaris, jeep drives and canoeing to spot leopard, bison, sloth bear and rich birdlife.",
    image: media.safari,
    imageAlt: "Forest safari vehicle on a track through Satpura National Park",
    tag: "Wildlife",
  },
];

// ── Destination story — editorial narrative ────────────────────────────────

export const pachmarhiStory = {
  eyebrow: "Origin & character",
  title: "A Hill Town of Legends and Landscapes",
  paragraphs: [
    "Pachmarhi entered recorded history when Captain James Forsyth of the British Army discovered it in 1857 while surveying the Satpura ranges. He named it for its five rock caves — 'Panch' (five) and 'Marhi' (rock shelters) — though local lore stretches far older, tying the site to the Pandavas of the Mahabharata.",
    "The British developed it as a sanatorium and hill station, leaving behind a distinctive colonial fabric — bungalows with wraparound verandahs, a church spire rising above the treeline, and a measured town layout still visible today. This colonial calm sits in productive tension with the deep mythology of the gorges, caves and springs that surround it.",
    "Within Satpura Biosphere Reserve, Pachmarhi's forests support leopard, bison, sloth bear, over 300 bird species and extraordinary botanical diversity. The combination of colonial heritage, sacred geography and ecological richness is genuinely rare — and makes Pachmarhi an unusually easy destination to sell across every client profile.",
  ],
  image: media.waterfall,
  imageAlt: "Lush forested valley and waterfall typical of the Pachmarhi hill station landscape",
};

// ── Themes & Experiences — four visual categories ─────────────────────────

export interface ThemeExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
  accent: string;
}

export const pachmarhiThemes: ThemeExperience[] = [
  {
    id: "nature-viewpoints",
    title: "Nature & Viewpoints",
    subtitle: "The forest above and below",
    description:
      "Sunrise from Dhoopgarh, panoramas from Priyadarshini, the hush of Apsara Vihar — Pachmarhi rewards those who slow down and look up.",
    image: media.pachmarhi,
    imageAlt: "Sweeping Satpura hill landscape from a Pachmarhi viewpoint",
    items: [
      "Dhoopgarh — highest point in MP",
      "Priyadarshini / Forsyth Point",
      "Apsara Vihar waterfall",
      "Duchess Falls",
      "Green Valley views",
    ],
    accent: "#2a4536",
  },
  {
    id: "caves-sacred",
    title: "Caves & Sacred Sites",
    subtitle: "Stone memories and living faith",
    description:
      "Gupta-era Buddhist caves, Shiva shrines tucked into gorge rock and prehistoric paintings make Pachmarhi a site of layered spiritual and archaeological significance.",
    image: media.sanchiCarvings,
    imageAlt: "Ancient rock art and cave formations at a Pachmarhi archaeological site",
    items: [
      "Pandav Caves (Gupta period)",
      "Jatashankar cave temple",
      "Mahadev temple, Chauragarh",
      "Charmagadh prehistoric paintings",
      "Rajat Prapat sacred waterfall",
    ],
    accent: "#7b5c3a",
  },
  {
    id: "colonial-charm",
    title: "Colonial Charm",
    subtitle: "A sanatorium city still standing",
    description:
      "Forsyth's bungalows, the Pachmarhi Club, the Christ Church spire and shaded cantonment lanes preserve an Edwardian hill-station atmosphere unlike anywhere else in MP.",
    image: media.heritageLobby,
    imageAlt: "Colonial-era bungalow and garden architecture in Pachmarhi hill station",
    items: [
      "Christ Church (1875)",
      "Satpura Retreat heritage bungalows",
      "Old cantonment quarter",
      "Forsyth Bungalow site",
      "Colonial market quarter",
    ],
    accent: "#5c4a2a",
  },
  {
    id: "soft-adventure",
    title: "Soft Adventure",
    subtitle: "Active exploration at your pace",
    description:
      "Rock climbing on Chauragarh ridge, forest cycling, jeep excursions into Satpura buffer zones and guided nature walks calibrate perfectly to leisure FIT and school groups.",
    image: media.safariRiver,
    imageAlt: "Forest trail and river crossing in the Satpura buffer zone near Pachmarhi",
    items: [
      "Chauragarh rock climb",
      "Satpura jeep safari",
      "Forest cycling trails",
      "Guided nature walks",
      "Satpura canoeing (day trip)",
    ],
    accent: "#3d5c4a",
  },
];

// ── Seasonal information ───────────────────────────────────────────────────

export interface SeasonCard {
  id: string;
  season: string;
  months: string;
  temperature: string;
  character: string;
  highlights: string[];
  suitability: string;
  badge?: string;
}

export const pachmarhiSeasons: SeasonCard[] = [
  {
    id: "post-monsoon",
    season: "Post-Monsoon",
    months: "October – November",
    temperature: "15°C – 28°C",
    character:
      "The forests are at their greenest after the rains. Waterfalls are full, the air is clear and trails are at their most rewarding.",
    highlights: [
      "Waterfalls in full flow",
      "Emerald forest canopy",
      "Excellent photography",
      "Pleasant walking weather",
    ],
    suitability: "Honeymooners, nature lovers, photographers",
    badge: "Peak season",
  },
  {
    id: "winter",
    season: "Winter",
    months: "December – February",
    temperature: "10°C – 24°C",
    character:
      "Cool, dry and clear — ideal for long walks and outdoor activities. Misty mornings add a romantic quality. Pack layers for early starts and evenings.",
    highlights: [
      "Cool walking temperatures",
      "Crisp panoramic views",
      "Campfire evenings",
      "Birdwatching season",
    ],
    suitability: "Families, senior travellers, school groups",
  },
  {
    id: "summer",
    season: "Summer",
    months: "March – June",
    temperature: "22°C – 33°C",
    character:
      "Significantly cooler than the plains (often 10°C lower) — making Pachmarhi a premium summer escape. Forests thin slightly but walks remain comfortable.",
    highlights: [
      "Cool escape from plains heat",
      "Open forest walking",
      "Colonial bungalow charm",
      "Fewer crowds than peak",
    ],
    suitability: "Summer escape clients, plains-fleeing families",
    badge: "Best value",
  },
  {
    id: "monsoon",
    season: "Monsoon",
    months: "July – September",
    temperature: "18°C – 27°C",
    character:
      "Heavy rainfall. Most trekking trails are restricted within the Satpura Reserve. The forest is dramatic and atmospheric but outdoor access is limited.",
    highlights: [
      "Dramatic cloud forest scenery",
      "Dramatic waterfalls at peak",
      "Very green landscape",
    ],
    suitability: "Experienced travellers only — trail access restricted",
  },
];

// ── Connectivity information ───────────────────────────────────────────────

export interface ConnectivityItem {
  id: string;
  mode: "air" | "rail" | "road" | "local";
  title: string;
  detail: string;
  distance?: string;
  duration?: string;
}

export const pachmarhiConnectivity: ConnectivityItem[] = [
  {
    id: "air-bhopal",
    mode: "air",
    title: "Bhopal Airport (BHO)",
    detail: "Raja Bhoj Airport, the nearest international-connected hub. Daily connections to Delhi, Mumbai and Hyderabad.",
    distance: "195 km",
    duration: "3.5 – 4 hrs by road",
  },
  {
    id: "air-jabalpur",
    mode: "air",
    title: "Jabalpur Airport (JLR)",
    detail: "Smaller airport with connections to Delhi. Useful when combining Pachmarhi with Bhedaghat and Kanha.",
    distance: "200 km",
    duration: "3.5 hrs by road",
  },
  {
    id: "rail-pipariya",
    mode: "rail",
    title: "Pipariya Junction",
    detail:
      "The closest railhead on the Mumbai–Howrah main line. Served by multiple trains from Delhi, Bhopal, Jabalpur and Nagpur.",
    distance: "47 km",
    duration: "1.5 hrs by road",
  },
  {
    id: "road-bhopal",
    mode: "road",
    title: "Road from Bhopal",
    detail:
      "Well-maintained state highway via Hoshangabad and Pipariya. Drive through the Satpura foothills is scenic in its own right.",
    distance: "195 km",
    duration: "4 hrs",
  },
  {
    id: "local-transfers",
    mode: "local",
    title: "Local Transfers & Permits",
    detail:
      "Forest area entry by permit only. Jeeps and guides arranged at the entry gate. All trails within the Satpura Reserve require licensed naturalist guides.",
  },
];

// ── Traveller match — client profiles ─────────────────────────────────────

export interface TravellerProfile {
  id: string;
  profile: string;
  icon: "couple" | "family" | "fit" | "senior" | "school" | "nature";
  suitability: "ideal" | "good" | "limited";
  reason: string;
  tips: string[];
}

export const pachmarhiTravellerProfiles: TravellerProfile[] = [
  {
    id: "couples",
    profile: "Couples & Honeymooners",
    icon: "couple",
    suitability: "ideal",
    reason:
      "Colonial bungalow stays, misty mornings, waterfall excursions and cool evenings create a genuinely romantic atmosphere without mass-tourism crowds.",
    tips: [
      "Book heritage-category bungalows for atmosphere",
      "Dhoopgarh sunrise is unmissable",
      "Evening strolls in the cantonment quarter",
    ],
  },
  {
    id: "families",
    profile: "Families with Children",
    icon: "family",
    suitability: "ideal",
    reason:
      "Safe walkable trails, Bee Falls swimming, easy jeep excursions and a compact, manageable layout make this one of MP's best family destinations.",
    tips: [
      "Base at a property with a garden",
      "Bee Falls and Apsara Vihar for children",
      "Pandav Caves are fascinating for older children",
    ],
  },
  {
    id: "leisure-fit",
    profile: "Leisure FIT",
    icon: "fit",
    suitability: "ideal",
    reason:
      "Deep itinerary possibilities, variable activity levels and a 3N minimum that packs in substantial variety without rushing.",
    tips: [
      "4N minimum for a complete experience",
      "Add a Satpura safari day trip",
      "Combine with Bhopal for a 5N circuit",
    ],
  },
  {
    id: "seniors",
    profile: "Senior Travellers",
    icon: "senior",
    suitability: "good",
    reason:
      "Cool climate, flat cantonment walks, jeep access to most viewpoints and comfortable heritage stays suit seniors well. Chauragarh trek is not recommended.",
    tips: [
      "Stick to jeep-accessible viewpoints",
      "Book ground-floor or lift-access rooms",
      "Slower paced 4N itinerary recommended",
    ],
  },
  {
    id: "school",
    profile: "School & College Groups",
    icon: "school",
    suitability: "good",
    reason:
      "Excellent for educational itineraries: ecology, colonial history, cave archaeology and forest ecosystems. Hostel and group lodge options available.",
    tips: [
      "Pre-book group forest permits well in advance",
      "Combine geology (Handi Khoh), ecology (Satpura) and history (Pandav Caves)",
      "Early morning departures essential for park access",
    ],
  },
  {
    id: "nature-lovers",
    profile: "Nature Enthusiasts",
    icon: "nature",
    suitability: "ideal",
    reason:
      "Over 300 bird species, diverse flora, leopard and bison, prehistoric rock paintings and exceptional forest trails satisfy serious naturalists.",
    tips: [
      "October–February for birding",
      "Hire specialist naturalist guide",
      "Combine with Satpura Tiger Reserve night stay",
    ],
  },
];

// ── Sample itineraries ─────────────────────────────────────────────────────

export interface ItineraryDay {
  day: string;
  title: string;
  activities: string[];
}

export interface SampleItinerary {
  id: string;
  title: string;
  duration: string;
  nights: string;
  theme: string;
  summary: string;
  days: ItineraryDay[];
  note?: string;
}

export const pachmarhiItineraries: SampleItinerary[] = [
  {
    id: "weekend",
    title: "Pachmarhi Essentials",
    duration: "3 Days",
    nights: "2 Nights",
    theme: "Quick Escape",
    summary:
      "The must-see highlights in a time-efficient format — suitable for domestic couples and short-break FIT.",
    days: [
      {
        day: "Day 1",
        title: "Arrival & Cantonment Walk",
        activities: [
          "Arrive at Pipariya by train or road transfer",
          "Check in to heritage bungalow",
          "Afternoon: Christ Church and cantonment quarter stroll",
          "Sunset at Priyadarshini Point",
          "Dinner at property",
        ],
      },
      {
        day: "Day 2",
        title: "Waterfalls & Viewpoints",
        activities: [
          "Early morning: Dhoopgarh sunrise (permits required)",
          "Bee Falls visit and short forest trail",
          "Apsara Vihar",
          "Pandav Caves afternoon",
          "Evening: Jatashankar cave temple at dusk",
        ],
      },
      {
        day: "Day 3",
        title: "Forest Excursion & Departure",
        activities: [
          "Morning jeep in the Satpura buffer zone",
          "Handi Khoh gorge viewpoint",
          "Picnic lunch",
          "Transfer to Pipariya for onward journey",
        ],
      },
    ],
  },
  {
    id: "classic",
    title: "Pachmarhi in Depth",
    duration: "4 Days",
    nights: "3 Nights",
    theme: "Nature & Heritage",
    summary:
      "The classic commercial itinerary for nature-heritage FIT and families. Comfortably paced with genuine variety.",
    days: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        activities: [
          "Transfer from Pipariya / Bhopal",
          "Check-in and property briefing",
          "Priyadarshini Point sunset",
          "Welcome dinner",
        ],
      },
      {
        day: "Day 2",
        title: "Waterfalls & Sacred Sites",
        activities: [
          "Dhoopgarh sunrise",
          "Bee Falls forest walk",
          "Apsara Vihar and Duchess Falls",
          "Post-lunch rest at property",
          "Jatashankar cave temple evening",
        ],
      },
      {
        day: "Day 3",
        title: "Heritage & Gorge",
        activities: [
          "Pandav Caves and Charmagadh rock paintings",
          "Handi Khoh gorge rim walk",
          "Mahadev temple, Chauragarh (for fit travellers)",
          "Cantonment evening stroll",
        ],
      },
      {
        day: "Day 4",
        title: "Satpura Safari & Departure",
        activities: [
          "Early morning Satpura jeep safari",
          "Breakfast on return",
          "Rajat Prapat waterfall (Big Falls)",
          "Transfer to Pipariya / Bhopal",
        ],
      },
    ],
    note: "Can be extended to 5N by adding a Satpura Tiger Reserve night stay.",
  },
  {
    id: "extended",
    title: "Pachmarhi–Satpura–Bhopal Circuit",
    duration: "6 Days",
    nights: "5 Nights",
    theme: "Extended Nature Circuit",
    summary:
      "The premium multi-destination circuit. Combines Pachmarhi's hill character with Satpura wildlife and Bhopal's heritage museums.",
    days: [
      { day: "Day 1–2", title: "Pachmarhi Essentials", activities: ["As per 2N Essentials itinerary"] },
      {
        day: "Day 3–4",
        title: "Satpura Tiger Reserve",
        activities: [
          "Transfer to Satpura Lodge",
          "Afternoon walking safari",
          "Full-day safari: jeep, boat and walking combination",
          "Night at reserve-edge property",
        ],
      },
      {
        day: "Day 5",
        title: "Bhopal — Lakes & Museums",
        activities: [
          "Transfer to Bhopal (2.5 hrs)",
          "Upper Lake promenade",
          "State Museum of Tribal and Folk Art",
          "Bharat Bhavan evening (if available)",
        ],
      },
      {
        day: "Day 6",
        title: "Bhopal Heritage & Departure",
        activities: [
          "Taj-ul-Masajid mosque",
          "Gohar Mahal",
          "Transfer to Bhopal airport or station",
        ],
      },
    ],
    note: "Add Bhimbetka rock shelters (45 km from Bhopal) for a full heritage add-on.",
  },
];

// ── Related packages pulled from existing packages data ────────────────────

export const pachmarhiRelatedPackages = packages.filter(
  (pkg) =>
    pkg.destinations.includes("pachmarhi") ||
    pkg.themes.includes("nature") ||
    pkg.destinations.some((d) => ["satpura", "bhedaghat"].includes(d)),
);

// ── Related experiences pulled from existing data ─────────────────────────
// Loaded in the page component to avoid circular imports

export const pachmarhiRelatedActivityIds = ["pachmarhi-nature-trail"];
