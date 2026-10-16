/**
 * Upcoming Groups & Fixed Tours — tour data.
 *
 * Temporary placeholder records for preview. Replace getUpcomingGroupTours()
 * with a CMS / API source when production data is available.
 *
 * Data model is intentionally stable so the UI does not need to change.
 */

export type DepartureStatus =
  | "available"
  | "few-seats"
  | "sold-out"
  | "on-request";

export interface TourDeparture {
  id: string;
  /** ISO 8601 date string: YYYY-MM-DD */
  date: string;
  status: DepartureStatus;
  availableSeats?: number;
}

export interface UpcomingGroupTour {
  id: string;
  tourCode: string;
  title: string;
  category: string;
  groupType: string;
  days: number;
  nights: number;
  /** Ordered route stops */
  route: string[];
  /** Short editorial summary (1–2 sentences) */
  summary: string;
  /** Hero image URL (Pexels temporary; swap with production assets later) */
  image: string;
  /** Accessible alt text for the hero image */
  imageAlt: string;
  startingPrice?: number;
  currency: "INR";
  departureKind: "Guaranteed Departure" | "Fixed Departure";
  departures: TourDeparture[];
  /** Optional SPA-safe tour detail URL — omit if no route exists yet */
  tourUrl?: string;
  /** Optional Create Query URL — falls back to /create-query */
  queryUrl?: string;
  bookingUrl?: string;
}

export const DEPARTURE_STATUS_LABEL: Record<DepartureStatus, string> = {
  available: "Available",
  "few-seats": "Few Seats",
  "sold-out": "Sold Out",
  "on-request": "On Request",
};

export const upcomingGroupTours: UpcomingGroupTour[] = [
  {
    id: "kingdom-of-mahakaal",
    tourCode: "MP-MAH-05",
    title: "Kingdom of Mahakaal",
    category: "Spiritual",
    groupType: "Group Join-in",
    days: 5,
    nights: 4,
    route: ["Indore", "Ujjain", "Omkareshwar", "Maheshwar"],
    summary:
      "A guaranteed join-in pilgrimage through Ujjain, Omkareshwar and the ghats of Maheshwar.",
    image:
      "https://images.pexels.com/photos/36840026/pexels-photo-36840026.jpeg?auto=compress&cs=tinysrgb&w=1800",
    imageAlt:
      "Sunlit historic temple architecture in Madhya Pradesh, golden stone against a clear sky.",
    startingPrice: 18500,
    currency: "INR",
    departureKind: "Guaranteed Departure",
    // No /tours/* route exists yet — tourUrl omitted to prevent 404
    queryUrl: "/create-query",
    departures: [
      {
        id: "mahakaal-2026-11-12",
        date: "2026-11-12",
        status: "available",
        availableSeats: 12,
      },
      {
        id: "mahakaal-2026-11-26",
        date: "2026-11-26",
        status: "few-seats",
        availableSeats: 4,
      },
      {
        id: "mahakaal-2026-12-10",
        date: "2026-12-10",
        status: "available",
        availableSeats: 14,
      },
    ],
  },
  {
    id: "thrilling-madhya-pradesh",
    tourCode: "MP-THR-07",
    title: "Thrilling Madhya Pradesh",
    category: "Adventure",
    groupType: "Group Join-in",
    days: 7,
    nights: 6,
    route: ["Indore", "Pachmarhi", "Bhedaghat", "Jabalpur"],
    summary:
      "Hill stations, marble gorges and forest trails — a paced group circuit across scenic MP.",
    image:
      "https://images.pexels.com/photos/10483174/pexels-photo-10483174.jpeg?auto=compress&cs=tinysrgb&w=1800",
    imageAlt:
      "White marble rock formations of Bhedaghat gorge rising above the Narmada river.",
    startingPrice: 24900,
    currency: "INR",
    departureKind: "Fixed Departure",
    queryUrl: "/create-query",
    departures: [
      {
        id: "thrill-2026-11-15",
        date: "2026-11-15",
        status: "sold-out",
      },
      {
        id: "thrill-2026-11-29",
        date: "2026-11-29",
        status: "few-seats",
        availableSeats: 3,
      },
      {
        id: "thrill-2026-12-13",
        date: "2026-12-13",
        status: "available",
        availableSeats: 10,
      },
    ],
  },
  {
    id: "heritage-spiritual-mp",
    tourCode: "MP-HER-08",
    title: "Heritage & Spiritual Madhya Pradesh",
    category: "Heritage",
    groupType: "Group Join-in",
    days: 8,
    nights: 7,
    route: ["Khajuraho", "Orchha", "Sanchi", "Bhopal"],
    summary:
      "Temples, palaces and living heritage from Khajuraho to Sanchi — built for agents to sell.",
    image:
      "https://images.pexels.com/photos/36737766/pexels-photo-36737766.jpeg?auto=compress&cs=tinysrgb&w=1800",
    imageAlt:
      "Ancient Khajuraho temple shikharas rising above lawns under a clear blue sky.",
    startingPrice: 32900,
    currency: "INR",
    departureKind: "Guaranteed Departure",
    queryUrl: "/create-query",
    departures: [
      {
        id: "heritage-2026-11-08",
        date: "2026-11-08",
        status: "few-seats",
        availableSeats: 5,
      },
      {
        id: "heritage-2026-11-22",
        date: "2026-11-22",
        status: "available",
        availableSeats: 11,
      },
      {
        id: "heritage-2026-12-06",
        date: "2026-12-06",
        status: "available",
        availableSeats: 16,
      },
    ],
  },
  {
    id: "wildlife-explorer",
    tourCode: "MP-WLD-06",
    title: "Wildlife Explorer",
    category: "Wildlife",
    groupType: "Small Group",
    days: 6,
    nights: 5,
    route: ["Jabalpur", "Bandhavgarh", "Kanha"],
    summary:
      "Core tiger landscapes of Bandhavgarh and Kanha with fixed, safari-inclusive departures.",
    image:
      "https://images.pexels.com/photos/17374914/pexels-photo-17374914.jpeg?auto=compress&cs=tinysrgb&w=1800",
    imageAlt:
      "A Bengal tiger walking through sunlit forest in a central Indian national park.",
    startingPrice: 45500,
    currency: "INR",
    departureKind: "Fixed Departure",
    queryUrl: "/create-query",
    departures: [
      {
        id: "wildlife-2026-11-18",
        date: "2026-11-18",
        status: "few-seats",
        availableSeats: 2,
      },
      {
        id: "wildlife-2026-12-02",
        date: "2026-12-02",
        status: "available",
        availableSeats: 8,
      },
      {
        id: "wildlife-2026-12-16",
        date: "2026-12-16",
        status: "on-request",
      },
    ],
  },
  {
    id: "complete-mp-group",
    tourCode: "MP-CMP-12",
    title: "Complete Madhya Pradesh Group Tour",
    category: "Grand Circuit",
    groupType: "Group Join-in",
    days: 12,
    nights: 11,
    route: ["Bhopal", "Sanchi", "Orchha", "Khajuraho", "Bandhavgarh", "Kanha"],
    summary:
      "A complete selling circuit covering spiritual, heritage and wildlife Madhya Pradesh.",
    image:
      "https://images.pexels.com/photos/20000879/pexels-photo-20000879.jpeg?auto=compress&cs=tinysrgb&w=1800",
    imageAlt:
      "Raja Mahal palace in Orchha glowing in late-afternoon sun, historic Rajput architecture.",
    startingPrice: 68900,
    currency: "INR",
    departureKind: "Guaranteed Departure",
    queryUrl: "/create-query",
    departures: [
      {
        id: "complete-2026-11-05",
        date: "2026-11-05",
        status: "sold-out",
      },
      {
        id: "complete-2026-11-20",
        date: "2026-11-20",
        status: "available",
        availableSeats: 9,
      },
      {
        id: "complete-2027-01-10",
        date: "2027-01-10",
        status: "available",
        availableSeats: 14,
      },
    ],
  },
];

export function getUpcomingGroupTours(): UpcomingGroupTour[] {
  return upcomingGroupTours;
}

/**
 * Returns the ID of the first sellable (available / few-seats) departure,
 * or falls back to the very first departure in the list.
 */
export function getDefaultDepartureId(tour: UpcomingGroupTour): string {
  const sellable = tour.departures.find(
    (d) => d.status === "available" || d.status === "few-seats",
  );
  return (sellable ?? tour.departures[0]).id;
}
