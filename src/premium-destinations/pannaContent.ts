import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/panna/${name}.webp`;

export const pannaContent: DestinationDetailContent = {
  id: 'panna',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Panna',
  subtitle: 'Ken River Gorges, Vulture Sanctuaries and One of the World’s Greatest Tiger Recovery Stories.',
  heroImage: a('panna-hero'),
  ctaBackgroundImage: a('panna-hero'),
  tags: [
    'Tiger Reserve',
    'UNESCO Biosphere Reserve',
    'Ken River Gorges',
    'Vulture Haven',
    'Khajuraho Pairing',
  ],
  quickFacts: [
    { label: 'Region', value: 'Panna & Chhatarpur, Bundelkhand', icon: 'pin' },
    { label: 'Reserve Type', value: 'Project Tiger & UNESCO Biosphere', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2–3 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 15 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Riverine Safaris · Vulture Cliffs · Gorges', icon: 'leaf' },
  ],
  overview: {
    heading: 'The Resurgent Riverine Wilderness of Bundelkhand',
    description:
      'Located where the northern reaches of the Vindhyan Range converge with the dramatic gorges of the Ken River in Panna and Chhatarpur districts, Panna National Park is globally celebrated for one of the greatest wildlife conservation comebacks of modern times. Repopulated under Project Tiger after facing local extirpation in 2009, Panna today shelters a thriving, dispersing population of Royal Bengal tigers. Characterized by dry teak and kardhai woodlands, deep sandstone ravines, sheer vulture nesting cliffs and clean riverine channels, Panna offers an extraordinary safari experience just 30 kilometres from the UNESCO World Heritage temples of Khajuraho.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Wildlife Connoisseurs, Heritage & Wildlife Dual-Circuits, Birdwatchers, Raptor Enthusiasts & Inbound FITs',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Riverine Teak Safaris, Sandstone Gorges, Spectacular Vulture Cliffs, Reintroduced Tiger Tracking & Khajuraho Proximity',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D or 3N / 4D (Allowing 3–4 safaris across Madla and Hinouta gates seamlessly paired with Khajuraho)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Luxury Riverfront Lodges, Inbound Bundelkhand Circuits, Golden Triangle Extensions & Heritage-Wildlife Pairings',
      },
    ],
  },
  highlights: [
    {
      id: 'panna-ken-river',
      name: 'Ken River Gorge & Riverine Ecology',
      category: 'Riverine Landscape',
      description:
        'The pristine aquatic artery of the reserve, flanked by deep sandstone ravines, boulder banks, and rocky perches sheltering mugger crocodiles and riverine birds.',
      image: a('panna-ken-river'),
    },
    {
      id: 'panna-tiger-recovery',
      name: 'Landmark Tiger Reintroduction Landscape',
      category: 'Conservation Milestone',
      description:
        'The globally acclaimed terrain of Project Tiger’s historic reintroduction programme that successfully rebuilt a vibrant, breeding wild tiger population from zero.',
      image: a('panna-tiger-recovery'),
    },
    {
      id: 'panna-vulture-cliffs',
      name: 'Vulture Nesting Escarpments',
      category: 'Avian Sanctuary',
      description:
        'Sheer vertical Vindhyan cliffs providing one of India’s most critical nesting havens for endangered Long-billed, White-rumped, and Red-headed vultures.',
      image: a('panna-vulture-cliffs'),
    },
    {
      id: 'panna-madla-core',
      name: 'Madla Core Safari Zone',
      category: 'Core Safari Zone',
      description:
        'The celebrated riverfront gateway sector featuring mixed teak woodlands, expansive river glades, and historic predator movement tracks.',
      image: a('panna-madla-core'),
    },
    {
      id: 'panna-hinouta-plateau',
      name: 'Hinouta Escarpment & Gorges',
      category: 'Core Safari Zone',
      description:
        'A rugged eastern core sector characterized by dry deciduous gorges, rocky plateaus, and scrub terrain renowned for leopards, sloth bears, and chinkaras.',
      image: a('panna-hinouta-plateau'),
    },
    {
      id: 'panna-pandav-falls',
      name: 'Pandav Falls & Forest Ravines',
      category: 'Natural Landmark',
      description:
        'A picturesque natural gorge waterfall fed by perennial local springs, steeped in Mahabharata lore and fringed by lush gorge micro-habitats.',
      image: a('panna-pandav-falls'),
    },
  ],
  themes: [
    {
      id: 'theme-core-jeep-safari',
      title: 'Core 4x4 Jeep Safaris',
      icon: 'compass',
      image: a('theme-core-jeep-safari'),
      sights: [
        'Madla Core Riverfront Sector',
        'Hinouta Rocky Escarpment Tracks',
        'Dhundhua Seha Deep Gorges',
        'Pipartola Meadow Corridors',
        'Ken River Crossing Overlooks',
      ],
      note: 'Morning and afternoon open jeep safaris led by authorized forest department guides and lodge naturalists across regulated core routes.',
    },
    {
      id: 'theme-ken-river-boating',
      title: 'Ken River Boat Safaris',
      icon: 'leaf',
      image: a('theme-ken-river-boating'),
      sights: [
        'Permitted Ken River Waterway',
        'Basking Marsh Crocodiles',
        'Gharial Reintroduction Corridors',
        'River Terns & Storks',
        'Sandstone Cliff Formations',
      ],
      note: 'Regulated forest department motorboat rides along permitted river reaches inside the park, strictly subject to seasonal river depth and department permissions.',
    },
    {
      id: 'theme-vulture-birdwatching',
      title: 'Vulture & Raptor Observation',
      icon: 'mountain',
      image: a('theme-vulture-birdwatching'),
      sights: [
        'Over 200 Avian Species',
        'Long-Billed & Red-Headed Vultures',
        'Crested Serpent Eagle',
        'White-Eyed Buzzard',
        'Cliff Vantage Points',
      ],
      note: 'Specialist birdwatching outings exploring cliff-edge observation points and riverbank groves during optimal morning light.',
    },
    {
      id: 'theme-heritage-safari-pairing',
      title: 'Khajuraho Heritage Pairing',
      icon: 'landmark',
      image: a('theme-heritage-safari-pairing'),
      sights: [
        'UNESCO Western Temple Group',
        'Eastern Sandstone Shrines',
        'Scenic 30-Minute Highway Drive',
        'Sculpture & Wildlife Dual Pacing',
        'Boutique Ken River Lodges',
      ],
      note: 'Seamless dual-centre trade itineraries combining morning game drives on the Ken with afternoon temple architecture tours in nearby Khajuraho.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Pleasant cool morning safaris (8°C–14°C), mist lifting off the Ken River, sparkling clear skies, active raptor breeding, and comfortable all-day weather.',
      tag: 'Peak Safari Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Hot and dry (34°C–44°C); deciduous trees drop foliage, revealing open rocky terrain and drawing tigers, leopards and herbivores to the Ken River pools.',
      tag: 'Optimal Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Core gates close for breeding and monsoon trail maintenance; Pandav Falls and select scenic buffer trails remain accessible in lush green surroundings.',
      tag: 'Buffer Open Only',
      theme: 'green',
    },
    {
      name: 'Transitional / Shoulder',
      months: 'Mid-Oct & March',
      icon: 'calendar',
      description:
        'Mid-October opening brings full waterfalls and emerald forests; March offers temperate weather, blossoming Palash (flame-of-the-forest) and vibrant birding.',
      tag: 'Pleasant Weather',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Khajuraho Airport (approx. 25–40 km depending on lodge/gate, 45–60 mins drive) offers scheduled seasonal flights; Jabalpur Airport (approx. 230 km, 4.5–5 hrs) provides broad domestic connectivity.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Khajuraho Railway Station (approx. 30 km, 45 mins) and Satna Junction (approx. 75 km, 1.5–2 hrs drive on the main Mumbai-Howrah line) are the primary rail gateways.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'High-quality state highways link Panna directly to Khajuraho (30 km), Bandhavgarh (approx. 190 km, 4 hrs), Jhansi (approx. 200 km) and Orchha (approx. 195 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private air-conditioned SUVs and lodge-operated chauffeur vehicles provide comfortable 45-minute transfers between Khajuraho hotels or airport and Panna’s riverfront lodges.',
    },
  ],
  cta: {
    heading: 'Pair Panna’s Riverine Wilderness with World Heritage',
    description:
      'Partner with our B2B travel specialists for guaranteed core safari permits, luxury riverfront lodges on the Ken, expert private naturalists and seamless Khajuraho combinations.',
  },
};
