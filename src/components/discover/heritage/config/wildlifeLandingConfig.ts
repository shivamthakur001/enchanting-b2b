import { media } from "../../../../data/media";

/** Wildlife landing controls. Change copy, images and colors here, not in the page component. */
export const wildlifeLandingConfig = {
  colors: {
    background: "#081710",
    surface: "#10251B",
    surfaceLight: "#1B3526",
    gold: "#D7B66F",
    ivory: "#F5EEDD",
    muted: "#C2CABD",
    border: "rgba(216,187,122,.24)",
  },
  hero: {
    image: media.tigerKanhaWalk,
    imageAlt: "Bengal tiger moving through a forest in Madhya Pradesh",
    eyebrow: "Discover Wildlife",
    titleTop: "Into the Untamed",
    titleAccent: "Heart of India",
    description:
      "Step into Madhya Pradesh's extraordinary wilderness — from tiger territories and ancient sal forests to immersive safaris and unforgettable encounters with the wild.",
    primaryText: "Explore Wildlife Destinations",
    secondaryText: "Plan a Wildlife Journey",
    quickFacts: [
      { label: "Top Parks", detail: "Kanha · Pench · Bandhavgarh", icon: "paw" },
      { label: "Safari Season", detail: "Park-dependent · check dates", icon: "calendar" },
      { label: "Ideal For", detail: "Safaris · Wildlife · Photography", icon: "camera" },
    ],
  },
  intro: {
    eyebrow: "Wildlife in Madhya Pradesh",
    heading: "A Land Where the Wild Still Leads.",
    paragraphOne:
      "Madhya Pradesh is the heart of India's wildlife heritage — home to renowned national parks, tiger landscapes, ancient forests and a remarkable range of birdlife and mammals.",
    paragraphTwo:
      "From sweeping sal meadows to quiet waterways, every habitat tells a different story. Build journeys around expert naturalists, considered safari pacing and a deeper understanding of living wilderness.",
    tags: ["Tiger Safaris", "National Parks", "Biodiversity", "Wildlife Photography", "Conservation"],
  },
  expressions: {
    eyebrow: "Chapters of the Heartland",
    heading: "Four Wildlife Expressions",
    description:
      "From tiger territories and ancient forest corridors to birdlife and thoughtful conservation, explore the many dimensions of Madhya Pradesh's wild heart.",
    chapters: [
      {
        id: "tigers", number: "01", tag: "Tiger Territories", title: "Tiger Safaris",
        blurb: "Iconic parks and exceptional predator landscapes.",
        description:
          "Follow forest trails into tiger country, with experienced guides and naturalists interpreting the habitat beyond each sighting. Kanha, Bandhavgarh and Pench are among Madhya Pradesh's defining wildlife experiences.",
        image: media.tigerKanhaRest,
        imageAlt: "Tiger resting in a central Indian forest",
        locations: "Kanha · Bandhavgarh · Pench",
        characteristic: "Jeep safaris · Tracking · Naturalist-led journeys",
      },
      {
        id: "forest", number: "02", tag: "Ancient Forests", title: "Forest Wilderness",
        blurb: "Woodlands, river valleys and quieter encounters.",
        description:
          "Step beyond the familiar tiger trail into deciduous forests, highland valleys and layered ecosystems. Satpura's landscapes invite a slower and more varied encounter with nature, subject to permitted visitor activities.",
        image: media.safariRiver,
        imageAlt: "Forest landscape and wilderness safari trail",
        locations: "Satpura · Pench · Kuno",
        characteristic: "Forest interpretation · Landscape observation",
      },
      {
        id: "birds", number: "03", tag: "Life in the Canopy", title: "Birdlife & Biodiversity",
        blurb: "Birdsong, wetlands and the rhythm of the forest.",
        description:
          "Look closer at the rich biodiversity of central India: birds, deer, insects, river habitats and ancient trees. With an expert guide, a quieter morning can be as rewarding as a big-cat encounter.",
        image: media.jabalpurLake,
        imageAlt: "Peaceful wooded water landscape with rich bird habitat",
        locations: "Pench · Satpura · Panna",
        characteristic: "Birdwatching · Habitat appreciation · Photography",
      },
      {
        id: "conservation", number: "04", tag: "The Future of the Wild", title: "Conservation & Experiences",
        blurb: "Responsible travel and meaningful interpretation.",
        description:
          "Create informed journeys that celebrate conservation work, local knowledge and respect for protected habitats. The focus is on responsible, park-compliant visits and authentic naturalist-led learning.",
        image: media.safari,
        imageAlt: "Safari vehicle travelling responsibly through a forest",
        locations: "Kanha · Panna · Kuno",
        characteristic: "Responsible tourism · Conservation stories",
      },
    ],
  },
  destinations: {
    eyebrow: "Sanctuaries of the Heartland",
    heading: "Explore Wildlife Destinations",
    description:
      "Trade-ready national parks, reserves and wilderness experiences — curated around expert guiding, responsible access and immersive stays.",
    priorityIds: ["kanha", "bandhavgarh", "pench", "satpura", "panna", "kuno"],
  },
  programmes: {
    eyebrow: "For the Trade",
    heading: "Wildlife Programmes",
    description: "Real trade programmes from the existing package catalogue.",
  },
  closingCTA: {
    image: media.tigerKanhaRest,
    eyebrow: "Tailored Trade Itineraries",
    heading: "Build a Wildlife Journey",
    accent: "into the Heart of India",
    description:
      "From iconic national parks to lesser-known wilderness, create considered Madhya Pradesh journeys for your clients with our travel team.",
  },
} as const;
