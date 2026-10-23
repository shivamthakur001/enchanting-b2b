/**
 * Map data for the Interactive Madhya Pradesh Map Section.
 *
 * ── Coordinate system ────────────────────────────────────────────────────────
 * SVG viewBox: "0 0 800 529"
 * Geographic extent: 74°E–83°E × 21.3°N–26.4°N
 *
 * svgX = ((longitude - 74) / 9) * 800
 * svgY = ((26.4 - latitude) / 5.1) * 529
 *
 * All map layers share this exact projection system matching the donor outline.
 * ────────────────────────────────────────────────────────────────────────────
 */

import { media } from "./media";

export type MapTheme = "heritage" | "wildlife" | "nature" | "spirituality";

export interface LabelOffset {
  dx: number;
  dy: number;
  anchor?: "start" | "middle" | "end";
}

export interface MapDestination {
  id: string;
  slug: string;
  /** Present only when the destination has a production detail page. */
  route?: string;
  name: string;
  region: string;
  summary: string;
  themes: MapTheme[];
  lon: number;
  lat: number;
  /** Projected SVG x in 800 × 529 coordinate space */
  x: number;
  /** Projected SVG y in 800 × 529 coordinate space */
  y: number;
  /** true → permanent label visible on map */
  major: boolean;
  labelOffset?: LabelOffset;
  images: string[];
  imageAlts: string[];
}

export const mapBounds = {
  minLon: 74,
  maxLon: 83,
  minLat: 21.3,
  maxLat: 26.4,
};

export const viewBox = {
  width: 800,
  height: 529,
};

export function projectPoint(lon: number, lat: number) {
  return {
    x: ((lon - mapBounds.minLon) / (mapBounds.maxLon - mapBounds.minLon)) * viewBox.width,
    y: ((mapBounds.maxLat - lat) / (mapBounds.maxLat - mapBounds.minLat)) * viewBox.height,
  };
}

function createDestination(
  data: Omit<MapDestination, "x" | "y">
): MapDestination {
  const p = projectPoint(data.lon, data.lat);
  return {
    ...data,
    route: Object.prototype.hasOwnProperty.call(data, "route")
      ? data.route
      : `/destinations/${data.slug}`,
    x: Number(p.x.toFixed(1)),
    y: Number(p.y.toFixed(1)),
  };
}

export const mapDestinations: MapDestination[] = [
  // ── Northern MP / Bundelkhand ─────────────────────────────────────────────
  createDestination({
    id: "gwalior",
    slug: "gwalior",
    name: "Gwalior",
    region: "Northern MP",
    summary: "A UNESCO City of Music crowned by a hill fort of palaces and Jain sculpture.",
    themes: ["heritage"],
    lon: 78.18,
    lat: 26.22,
    major: true,
    labelOffset: { dx: 12, dy: 14, anchor: "start" },
    images: [media.orchhaFort, media.heritageLobby],
    imageAlts: ["Gwalior fort architecture", "Heritage palace interior"],
  }),
  createDestination({
    id: "orchha",
    slug: "orchha",
    name: "Orchha",
    region: "Bundelkhand",
    summary: "Palaces, cenotaphs and the Betwa river — a complete medieval court town where Lord Ram is venerated as King.",
    themes: ["heritage"],
    lon: 78.64,
    lat: 25.35,
    major: true,
    labelOffset: { dx: -12, dy: -10, anchor: "end" },
    images: [media.orchhaSunset, media.orchhaPalace, media.orchhaFort],
    imageAlts: ["Orchha palace at sunset", "Orchha palace courtyard", "Orchha fort"],
  }),
  createDestination({
    id: "khajuraho",
    slug: "khajuraho",
    name: "Khajuraho",
    region: "Bundelkhand",
    summary: "UNESCO World Heritage temples whose sandstone sculpture remains among India's finest.",
    themes: ["heritage"],
    lon: 79.92,
    lat: 24.85,
    major: true,
    images: [media.khajuraho],
    imageAlts: ["Khajuraho temple shikharas"],
  }),
  createDestination({
    id: "kuno",
    slug: "kuno",
    name: "Kuno",
    region: "Sheopur",
    summary: "India's cheetah landscape — open woodland and a pioneering conservation story.",
    themes: ["wildlife"],
    lon: 77.16,
    lat: 25.75,
    major: false,
    images: [media.safariRiver],
    imageAlts: ["Safari track at Kuno"],
  }),
  createDestination({
    id: "chitrakoot",
    slug: "chitrakoot",
    name: "Chitrakoot",
    region: "Satna",
    summary: "Ramayana landscape of ghats, Mandakini river and a gentle pilgrimage rhythm.",
    themes: ["spirituality"],
    lon: 80.86,
    lat: 24.90,
    major: false,
    images: [media.sanchiWide],
    imageAlts: ["Sacred landscape of Chitrakoot"],
  }),
  createDestination({
    id: "panna",
    slug: "panna",
    name: "Panna",
    region: "Ken River",
    summary: "Riverine tiger reserve beside the temples of Khajuraho — a rare pairing.",
    themes: ["wildlife"],
    lon: 80.19,
    lat: 24.72,
    major: false,
    images: [media.tigerYawn],
    imageAlts: ["Tiger in Panna"],
  }),
  createDestination({
    id: "chanderi",
    slug: "chanderi",
    name: "Chanderi",
    region: "Ashoknagar",
    summary: "A quiet Bundelkhand town of hilltop ruins, lakes and celebrated handloom.",
    themes: ["heritage"],
    lon: 78.14,
    lat: 24.72,
    major: false,
    route: undefined,
    images: [media.orchhaPalace],
    imageAlts: ["Historic architecture in Madhya Pradesh"],
  }),
  createDestination({
    id: "shivpuri",
    slug: "shivpuri",
    name: "Shivpuri",
    region: "Northern MP",
    summary: "Forest, lakes and royal history at the edge of the Madhav landscape.",
    themes: ["nature", "heritage"],
    lon: 77.74,
    lat: 25.43,
    major: false,
    route: undefined,
    images: [media.safari],
    imageAlts: ["Forest landscape in Madhya Pradesh"],
  }),
  createDestination({
    id: "raneh-falls",
    slug: "raneh-falls",
    name: "Raneh Falls",
    region: "Chhatarpur",
    summary: "A canyon of volcanic rock where the Ken river drops spectacularly in the monsoon.",
    themes: ["nature"],
    lon: 80.02,
    lat: 24.68,
    major: false,
    images: [media.waterfall],
    imageAlts: ["Raneh Falls canyon"],
  }),

  // ── Central MP / Narmada Belt ─────────────────────────────────────────────
  createDestination({
    id: "bhopal",
    slug: "bhopal",
    name: "Bhopal",
    region: "Central MP",
    summary: "The City of Lakes — royal heritage, grand mosques and living arts beside serene waters.",
    themes: ["heritage"],
    lon: 77.4126,
    lat: 23.2599,
    major: true,
    labelOffset: { dx: 0, dy: -14, anchor: "middle" },
    images: [media.heritageLobby, media.orchhaPalace],
    imageAlts: ["Royal heritage architecture of Bhopal", "Historic courtyard"],
  }),
  createDestination({
    id: "indore",
    slug: "indore",
    name: "Indore",
    region: "Malwa",
    summary: "Heart of Malwa — historic Rajwada palace, lively night bazaars and renowned street food.",
    themes: ["heritage"],
    lon: 75.8577,
    lat: 22.7196,
    major: true,
    labelOffset: { dx: -12, dy: -12, anchor: "end" },
    images: [media.orchhaPalace, media.ujjainAarti],
    imageAlts: ["Rajwada palace architecture in Indore", "Cultural life of Malwa"],
  }),
  createDestination({
    id: "burhanpur",
    slug: "burhanpur",
    name: "Burhanpur",
    region: "Khandwa",
    summary: "A historic Mughal-era city of riverside monuments, gateways and textiles.",
    themes: ["heritage"],
    lon: 76.23,
    lat: 21.30,
    major: false,
    route: undefined,
    images: [media.maheshwar],
    imageAlts: ["Historic riverside architecture in Madhya Pradesh"],
  }),
  createDestination({
    id: "hanuwantiya",
    slug: "hanuwantiya",
    name: "Hanuwantiya",
    region: "Khandwa",
    summary: "A wide-water landscape on the Indira Sagar reservoir shaped for slow adventure.",
    themes: ["nature"],
    lon: 76.67,
    lat: 22.05,
    major: false,
    route: undefined,
    images: [media.narmadaBoats],
    imageAlts: ["Boats on a Madhya Pradesh reservoir"],
  }),
  createDestination({
    id: "sanchi",
    slug: "sanchi",
    name: "Sanchi",
    region: "Raisen",
    summary: "The Great Stupa — Ashokan Buddhism rendered in stone and stillness.",
    themes: ["spirituality", "heritage"],
    lon: 77.74,
    lat: 23.48,
    major: true,
    images: [media.sanchiStupa, media.sanchiWide, media.sanchiCarvings],
    imageAlts: ["Sanchi Great Stupa", "Sanchi wide view", "Sanchi stone carvings"],
  }),
  createDestination({
    id: "ratapani",
    slug: "ratapani",
    name: "Ratapani",
    region: "Raisen–Sehore",
    summary: "A forested sanctuary of teak hills, quiet reservoirs and ancient rock shelters.",
    themes: ["wildlife", "nature"],
    lon: 77.55,
    lat: 22.75,
    major: false,
    route: undefined,
    images: [media.safariRiver],
    imageAlts: ["Forest and water landscape in Madhya Pradesh"],
  }),
  createDestination({
    id: "bhimbetka",
    slug: "bhimbetka",
    name: "Bhimbetka",
    region: "Raisen",
    summary: "Rock shelters holding 30,000-year-old prehistoric painting — a landscape of deep time.",
    themes: ["heritage"],
    lon: 77.63,
    lat: 22.94,
    major: false,
    images: [media.sanchiCarvings],
    imageAlts: ["Rock art at Bhimbetka"],
  }),
  createDestination({
    id: "ujjain",
    slug: "ujjain",
    name: "Ujjain",
    region: "Malwa",
    summary: "One of Hinduism's seven sacred cities — Mahakaleshwar Jyotirlinga and the Shipra aarti.",
    themes: ["spirituality"],
    lon: 75.7885,
    lat: 23.1765,
    major: true,
    labelOffset: { dx: 12, dy: 14, anchor: "start" },
    images: [media.ujjainAarti],
    imageAlts: ["Ujjain evening aarti on the ghats"],
  }),
  createDestination({
    id: "mandu",
    slug: "mandu",
    name: "Mandu",
    region: "Malwa Plateau",
    summary: "Afghan palaces on a monsoon plateau — Jahaz Mahal, Rewa Kund, timeless ruins.",
    themes: ["heritage"],
    lon: 75.3967,
    lat: 22.3422,
    major: true,
    labelOffset: { dx: -10, dy: 14, anchor: "end" },
    images: [media.orchhaPalace],
    imageAlts: ["Mandu palace architecture"],
  }),
  createDestination({
    id: "omkareshwar",
    slug: "omkareshwar",
    name: "Omkareshwar",
    region: "Narmada",
    summary: "A Jyotirlinga on an Om-shaped island, reached across the sacred Narmada.",
    themes: ["spirituality"],
    lon: 76.1511,
    lat: 22.2425,
    major: true,
    labelOffset: { dx: 10, dy: -10, anchor: "start" },
    images: [media.narmadaBoats],
    imageAlts: ["Boats on the Narmada at Omkareshwar"],
  }),
  createDestination({
    id: "maheshwar",
    slug: "maheshwar",
    name: "Maheshwar",
    region: "Narmada",
    summary: "Ahilya Fort, Maheshwari handloom ghats and a river town of unusual grace.",
    themes: ["heritage", "spirituality"],
    lon: 75.5867,
    lat: 22.1767,
    major: true,
    labelOffset: { dx: 10, dy: 14, anchor: "start" },
    images: [media.maheshwar, media.narmadaBoats],
    imageAlts: ["Maheshwar riverside", "Boats on the Narmada"],
  }),

  // ── Eastern MP ────────────────────────────────────────────────────────────
  createDestination({
    id: "bhedaghat",
    slug: "bhedaghat",
    name: "Bhedaghat",
    region: "Narmada, Jabalpur",
    summary: "Gateway to the marble rocks of Bhedaghat where the Narmada glows at dusk.",
    themes: ["nature"],
    lon: 79.91,
    lat: 23.14,
    major: false,
    labelOffset: { dx: 12, dy: 14, anchor: "start" },
    images: [media.bhedaghat],
    imageAlts: ["Marble rocks at Bhedaghat"],
  }),
  createDestination({
    id: "kanha",
    slug: "kanha",
    name: "Kanha",
    region: "Mandla–Balaghat",
    summary: "Sal meadows, barasingha and one of India's most complete tiger landscapes.",
    themes: ["wildlife"],
    lon: 80.6130,
    lat: 22.3345,
    major: true,
    images: [media.tigerKanhaRest, media.tigerKanhaWalk],
    imageAlts: ["Tiger resting in Kanha", "Tiger walking through Kanha forest"],
  }),
  createDestination({
    id: "bandhavgarh",
    slug: "bandhavgarh",
    name: "Bandhavgarh",
    region: "Umaria",
    summary: "Compact, dramatic and famously tiger-rich — with a 2,000-year-old fort on the skyline.",
    themes: ["wildlife"],
    lon: 81.0260,
    lat: 23.7200,
    major: true,
    images: [media.tigerBandhavgarh],
    imageAlts: ["Bengal tiger in Bandhavgarh"],
  }),
  createDestination({
    id: "amarkantak",
    slug: "amarkantak",
    name: "Amarkantak",
    region: "Maikal Hills",
    summary: "Sacred source of the Narmada river, wrapped in sal forests and cool highland air.",
    themes: ["nature", "spirituality"],
    lon: 81.75,
    lat: 22.68,
    major: false,
    images: [media.cascade],
    imageAlts: ["Waterfall near Amarkantak"],
  }),
  createDestination({
    id: "jabalpur",
    slug: "jabalpur",
    name: "Jabalpur",
    region: "Eastern MP",
    summary: "A Narmada city and gateway to the marble rocks, ghats and forests of the east.",
    themes: ["nature"],
    lon: 79.95,
    lat: 23.18,
    major: true,
    route: "/destinations/bhedaghat",
    labelOffset: { dx: -12, dy: -12, anchor: "end" },
    images: [media.jabalpurLake],
    imageAlts: ["Narmada landscape near Jabalpur"],
  }),
  createDestination({
    id: "mandla",
    slug: "mandla",
    name: "Mandla",
    region: "Narmada, Eastern MP",
    summary: "A riverside town on the Narmada and a gateway to the forests of Kanha.",
    themes: ["nature"],
    lon: 80.37,
    lat: 22.60,
    major: false,
    route: undefined,
    images: [media.safariRiver],
    imageAlts: ["River landscape in eastern Madhya Pradesh"],
  }),

  // ── Southern MP / Satpura ─────────────────────────────────────────────────
  createDestination({
    id: "pachmarhi",
    slug: "pachmarhi",
    name: "Pachmarhi",
    region: "Satpura Hills",
    summary: "Queen of the Satpuras — waterfalls, gorges, Bee Falls and colonial hill-station calm.",
    themes: ["nature"],
    lon: 78.4333,
    lat: 22.4674,
    major: true,
    labelOffset: { dx: 12, dy: -10, anchor: "start" },
    images: [media.pachmarhi, media.waterfall],
    imageAlts: ["Pachmarhi valley", "Waterfall in Pachmarhi"],
  }),
  createDestination({
    id: "satpura",
    slug: "satpura",
    name: "Satpura",
    region: "Hoshangabad",
    summary: "Walking safaris, canoeing and a quieter wilderness of sandstone gorges.",
    themes: ["wildlife", "nature"],
    lon: 78.4333,
    lat: 22.5300,
    major: true,
    labelOffset: { dx: -12, dy: -10, anchor: "end" },
    images: [media.safari, media.safariRiver],
    imageAlts: ["Safari in Satpura", "River safari in Satpura"],
  }),
  createDestination({
    id: "pench",
    slug: "pench",
    name: "Pench",
    region: "Seoni–Chhindwara",
    summary: "Kipling's Jungle Book country — teak forest, wild dogs and excellent birding.",
    themes: ["wildlife"],
    lon: 79.33,
    lat: 21.95,
    major: true,
    images: [media.tigerKanhaWalk],
    imageAlts: ["Tiger in Pench forest"],
  }),
  createDestination({
    id: "tamia",
    slug: "tamia",
    name: "Tamia",
    region: "Chhindwara",
    summary: "Quiet Satpura viewpoints, tribal hamlets and breathtaking sunrise over layered hills.",
    themes: ["nature"],
    lon: 78.76,
    lat: 22.51,
    major: false,
    images: [media.pachmarhi],
    imageAlts: ["Hill view near Tamia"],
  }),
  createDestination({
    id: "patalkot",
    slug: "patalkot",
    name: "Patalkot",
    region: "Chhindwara",
    summary: "A deep horseshoe valley of medicinal forests and living tribal culture.",
    themes: ["nature"],
    lon: 78.80,
    lat: 22.33,
    major: false,
    images: [media.jabalpurLake],
    imageAlts: ["Hidden valley of Patalkot"],
  }),
];

// ── Travel circuits ───────────────────────────────────────────────────────────

export type Circuit = {
  id: string;
  label: string;
  color: string;
  dashArray: string;
  stops: string[];
};

export const circuits: Circuit[] = [
  {
    id: "wildlife",
    label: "Wildlife Circuit",
    color: "#4d7a58",
    dashArray: "6 5",
    stops: ["pench", "satpura", "kanha", "bandhavgarh", "panna"],
  },
  {
    id: "heritage",
    label: "Heritage Circuit",
    color: "#8c6840",
    dashArray: "4 6",
    stops: ["gwalior", "orchha", "khajuraho", "sanchi"],
  },
  {
    id: "spiritual",
    label: "Spiritual Circuit",
    color: "#9a7030",
    dashArray: "3 7",
    stops: ["ujjain", "mandu", "omkareshwar", "maheshwar"],
  },
  {
    id: "narmada-corridor",
    label: "Narmada Corridor",
    color: "#8a6d54",
    dashArray: "2 7",
    stops: ["omkareshwar", "maheshwar", "bhedaghat"],
  },
];

// ── Neighbour state labels (reserved for future phase) ────────────────────────
export interface NeighborLabel {
  name: string;
  x: number;
  y: number;
}

export const neighborLabels: NeighborLabel[] = [];
