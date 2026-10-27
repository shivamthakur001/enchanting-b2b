import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/kanha/${name}.webp`;

export const kanhaContent: DestinationDetailContent = {
  id: 'kanha',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Kanha',
  subtitle: 'Where the Soul of the Jungle Comes Alive.',
  heroImage: a('kanha-hero'),
  ctaBackgroundImage: a('kanha-hero'),
  tags: [
    'Tiger Reserve',
    'Sal & Bamboo Forests',
    'Hard-Ground Barasingha',
    'Wilderness Safaris',
    'Naturalist-Led Expeditions',
  ],
  quickFacts: [
    { label: 'Region', value: 'Mandla & Balaghat', icon: 'pin' },
    { label: 'Reserve Type', value: 'Project Tiger Reserve', icon: 'landmark' },
    { label: 'Ideal Stay', value: '3–4 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 15 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Tiger Safaris · Barasingha · Photography', icon: 'leaf' },
  ],
  overview: {
    heading: 'The Definitive Tiger Landscape of Central India',
    description:
      "Kanha National Park is globally celebrated as one of Asia's finest wilderness reserves and the timeless inspiration behind Rudyard Kipling's jungle lore. Spanning over 940 square kilometres of protected core deciduous sal forests, expansive savannah-style maidans and rolling Maikal hills, Kanha provides an incomparable safari ecosystem. It is world-renowned for thriving Royal Bengal tiger populations, visionary conservation milestones, and as the last global refuge of the endangered hard-ground barasingha.",
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Wildlife Enthusiasts, Serious Photographers, Naturalists, High-End Inbound Circuits & Discerning Safari Travellers',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Bengal Tiger Tracking, Pristine Sal Canopy, Grazing Barasingha Herds, Atmospheric Golden-Hour Safaris & Jungle Solitude',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '3N / 4D or 4N / 5D (Allowing 5–6 safari drives across multiple core zones)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Luxury Wilderness Lodges, Specialist Small-Group Departures, Inbound FITs & Central Indian Wildlife Circuits',
      },
    ],
  },
  highlights: [
    {
      id: 'kanha-meadows',
      name: "Kanha's Grassland Meadows",
      category: 'Grassland Ecology',
      description:
        'Expansive open maidans framed by ancient sal forest ridges, creating natural arenas where chital, gaur and barasingha graze under the watchful gaze of apex predators.',
      image: a('kanha-meadows'),
    },
    {
      id: 'kanha-barasingha',
      name: 'Barasingha Conservation',
      category: 'Endangered Species',
      description:
        'A landmark wildlife victory — the miraculous rescue of the endemic southern hard-ground swamp deer (Rucervus duvaucelii branderi) from near extinction through dedicated habitat management.',
      image: a('kanha-barasingha'),
    },
    {
      id: 'kanha-mukki',
      name: 'Mukki Safari Landscape',
      category: 'Core Safari Zone',
      description:
        'The southeastern gateway characterized by luxuriant sal corridors, meandering forest streams, and high tiger density, celebrated by wildlife connoisseurs for serene game drives.',
      image: a('kanha-mukki'),
    },
    {
      id: 'kanha-kisli',
      name: 'Kisli Safari Landscape',
      category: 'Core Safari Zone',
      description:
        'Northern woodland terrain with undulating bamboo thickets, historic forest roads and sweeping grassland openings renowned for leopard and tiger encounters.',
      image: a('kanha-kisli'),
    },
    {
      id: 'kanha-bamni-dadar',
      name: 'Bamni Dadar Landscape',
      category: 'Plateau Viewpoint',
      description:
        "Kanha's celebrated Sunset Point, an elevated laterite plateau providing breathtaking panoramic vistas across the forested valley and layered Maikal ridgelines.",
      image: a('kanha-bamni-dadar'),
    },
    {
      id: 'kanha-interpretation',
      name: 'Kanha Interpretation & Conservation Heritage',
      category: 'Heritage & Education',
      description:
        'The Khatia Forest Interpretation Centre, deep indigenous Baiga tribal heritage, and pioneering ecological research that shaped modern tiger conservation across India.',
      image: a('kanha-interpretation'),
    },
  ],
  themes: [
    {
      id: 'wildlife-jeep-safari',
      title: 'Wildlife Jeep Safaris',
      icon: 'compass',
      image: a('theme-jeep-safari'),
      sights: [
        'Kanha Core Zone',
        'Mukki Safari Gateway',
        'Kisli & Sarhi Tracks',
        'Buffer Zone Drives',
        'Naturalist-Led Tracking',
      ],
      note: 'Park-regulated open 4x4 jeep safaris scheduled across sunrise and afternoon sessions, driven by registered forest guides and skilled lodge naturalists.',
    },
    {
      id: 'barasingha-grassland-ecology',
      title: 'Barasingha & Grassland Ecology',
      icon: 'leaf',
      image: a('theme-barasingha-ecology'),
      sights: [
        'Kanha Maidan',
        'Sondar Tank',
        'Hard-Ground Barasingha Herds',
        'Gaur (Indian Bison)',
        'Chital Herbivore Corridors',
      ],
      note: "Observe the world's only thriving wild population of southern hard-ground swamp deer across emerald sal meadows and perennial watering holes.",
    },
    {
      id: 'birdwatching-photography',
      title: 'Birdwatching & Nature Photography',
      icon: 'mountain',
      image: a('theme-birdwatching-photography'),
      sights: [
        'Over 300 Avian Species',
        'Crested Serpent Eagle',
        'Malabar Pied Hornbill',
        'Racket-tailed Drongo',
        'Soft-Light Golden Hours',
      ],
      note: 'A paradise for ornithologists and wildlife photographers, offering slow-paced drives focused on rare forest birds, raptor perches and evocative forest lighting.',
    },
    {
      id: 'conservation-nature-experiences',
      title: 'Forest Nature & Interpretation',
      icon: 'footprints',
      image: a('theme-conservation-interpretation'),
      sights: [
        'Khatia Museum Briefings',
        'Buffer-Zone Guided Walks',
        'Indigenous Baiga Culture',
        'Evening Naturalist Talks',
        'Stargazing in Jungle Air',
      ],
      note: 'Immersive educational walks outside core zones, tribal interactions, and evening wildlife lectures hosted by premier eco-lodges.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp early morning safaris, ethereal ground mist across the meadows, active predator territorial patrols, and pleasant sunny afternoons.',
      tag: 'Peak Safari Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Rising temperatures thin out deciduous foliage and draw wildlife toward shrinking watercourses; the highest probability for predator sightings.',
      tag: 'Optimal Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Core national park gates are closed for breeding seasons and road preservation; select buffer zone trails remain accessible for verdant forest landscapes.',
      tag: 'Buffer Open Only',
      theme: 'green',
    },
    {
      name: 'Transitional / Shoulder',
      months: 'Mid-Oct & March',
      icon: 'calendar',
      description:
        'Post-monsoon October reveals lush green vistas and sparkling streams; March delivers balanced temperate weather and vibrant migratory bird activity.',
      tag: 'Pleasant Weather',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Jabalpur Airport (approx. 165 km, 3.5–4 hours) and Nagpur International Airport (approx. 260 km, 5–5.5 hours) provide primary air connections with daily flights from Delhi, Mumbai and Bengaluru.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Gondia Junction (approx. 145 km) and Jabalpur (approx. 165 km) are the principal railheads connected via premium express trains from all Indian metros.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well-maintained state and national highways connect Kanha smoothly to Bandhavgarh (approx. 215 km, 4.5 hrs), Pench (approx. 190 km, 4 hrs) and Raipur (approx. 220 km, 4.5 hrs).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private air-conditioned SUVs and lodge-operated chauffeur transfers are recommended for seamless park gate access across Khatia, Mukki and Sarhi entrances.',
    },
  ],
  cta: {
    heading: 'Curate an Unforgettable Kanha Wilderness Journey',
    description:
      'Partner with our B2B travel specialists for secured safari permits, luxury eco-lodge allocations, expert private naturalists and seamless ground logistics.',
  },
};
