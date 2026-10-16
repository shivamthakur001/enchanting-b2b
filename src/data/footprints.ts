export type FootprintEvent = {
  id: string;
  eventName: string;
  city: string;
  country: string;
  year: number;
  shortDescription: string;
  image: string;
  imageAlt: string;
  storyUrl?: string;
};

export const footprintEvents: FootprintEvent[] = [
  {
    id: "sydney-sales-mission-2023",
    eventName: "International Sales Mission",
    city: "Sydney",
    country: "Australia",
    year: 2023,
    shortDescription:
      "A focused sales mission with Australian wholesalers, introducing Madhya Pradesh as India’s heartland for culture, forests, and living heritage.",
    image: "/images/footprints/sydney-mission.jpg",
    imageAlt:
      "Sydney Harbour at dawn with the Opera House and Harbour Bridge in soft pearl light",
    storyUrl: "/stories/sydney-sales-mission-2023",
  },
  {
    id: "arabian-travel-market-2024",
    eventName: "Arabian Travel Market",
    city: "Dubai",
    country: "UAE",
    year: 2024,
    shortDescription:
      "At ATM Dubai, the Madhya Pradesh booth drew Gulf operators seeking distinctive central-India itineraries beyond the familiar circuits.",
    image: "/images/footprints/atm-dubai.jpg",
    imageAlt:
      "Dubai skyline at sunset with warm desert gold light on modern towers",
    storyUrl: "/stories/arabian-travel-market-2024",
  },
  {
    id: "fitur-madrid-2025",
    eventName: "FITUR",
    city: "Madrid",
    country: "Spain",
    year: 2025,
    shortDescription:
      "In Madrid, Madhya Pradesh engaged Iberian and Latin American partners around temple trails, slow travel, and exclusive FAM invitations.",
    image: "/images/footprints/fitur-madrid.jpg",
    imageAlt:
      "Madrid boulevard at golden hour with neoclassical ochre stone facades",
    storyUrl: "/stories/fitur-madrid-2025",
  },
  {
    id: "singapore-travel-showcase-2025",
    eventName: "Singapore Travel Showcase",
    city: "Singapore",
    country: "Singapore",
    year: 2025,
    shortDescription:
      "A precise showcase for Southeast Asian agents, highlighting short-haul India holidays and premium wildlife experiences in the heart of the country.",
    image: "/images/footprints/singapore-showcase.jpg",
    imageAlt:
      "Singapore Marina Bay at dusk with gold lights reflected in still water",
    storyUrl: "/stories/singapore-travel-showcase-2025",
  },
  {
    id: "itb-berlin-2026",
    eventName: "ITB Berlin",
    city: "Berlin",
    country: "Germany",
    year: 2026,
    shortDescription:
      "At the world’s largest travel trade show, the state hosted buyer meetings on cultural routes, national parks, and long-stay India programmes.",
    image: "/images/footprints/itb-berlin.jpg",
    imageAlt:
      "Brandenburg Gate in Berlin at twilight with warm parchment-gold lighting",
    storyUrl: "/stories/itb-berlin-2026",
  },
  {
    id: "wtm-london-2026",
    eventName: "World Travel Market",
    city: "London",
    country: "United Kingdom",
    year: 2026,
    shortDescription:
      "Madhya Pradesh returned to ExCeL London to meet global operators, presenting heritage circuits, wildlife lodges, and new trade-ready itineraries.",
    image: "/images/footprints/wtm-london.jpg",
    imageAlt:
      "London at dusk along the Thames with the Palace of Westminster in atmospheric haze",
    storyUrl: "/stories/wtm-london-2026",
  },
];

export const footprintYears: number[] = Array.from(
  new Set(footprintEvents.map((event) => event.year)),
).sort((a, b) => a - b);

export function getEventsByYear(year: number): FootprintEvent[] {
  return footprintEvents.filter((event) => event.year === year);
}

export function getEventById(id: string): FootprintEvent | undefined {
  return footprintEvents.find((event) => event.id === id);
}
