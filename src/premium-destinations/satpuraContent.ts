import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/satpura/${name}.webp`;

export const satpuraContent: DestinationDetailContent = {
  id: 'satpura',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Satpura',
  subtitle: "Untamed Highland Wilderness — Where Silence, Sandstone Gorges and Walking Safaris Lead the Way.",
  heroImage: a('satpura-hero'),
  ctaBackgroundImage: a('satpura-hero'),
  tags: [
    'Tiger Reserve',
    'Walking Safaris on Foot',
    'Denwa River Canoeing',
    'Sloth Bear Stronghold',
    'Low-Density Wilderness',
  ],
  quickFacts: [
    { label: 'Region', value: 'Narmadapuram, Satpura Range', icon: 'pin' },
    { label: 'Reserve Type', value: 'Project Tiger Reserve', icon: 'landmark' },
    { label: 'Ideal Stay', value: '3–4 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 15 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Walking Safaris · Bears · Canoeing', icon: 'leaf' },
  ],
  overview: {
    heading: "Central India’s Premier Experiential Walking Wilderness",
    description:
      'Spanning over 1,427 square kilometres of rugged highland plateau, sandstone gorges, and tranquil reservoir backwaters in Narmadapuram district, Satpura National Park stands apart from any other wildlife destination in India. Renowned as a sanctuary of quiet exploration rather than crowded jeep queues, Satpura is one of the exceptionally rare Project Tiger reserves where guests can track wildlife legally on foot with trained naturalists, glide silently in canoes along the Denwa River, or embark on 4x4 drives into deep core teak forests. It is an extraordinary sanctuary for sloth bears, leopards, wild dogs, Indian giant squirrels, and burgeoning tiger populations.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Connoisseur Travellers, Naturalists, Walking Safari Aficionados, Birdwatchers & Discerning Inbound FITs',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Denwa River Crossings, Walking Safaris, Silent Canoeing, Sloth Bear Tracking, Sandstone Gorges & Low Vehicle Density',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '3N / 4D or 4N / 5D (Allowing a balanced mix of walking trails, river canoe sessions and deep-core jeep drives)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Boutique River-Edge Eco Lodges, Experiential B2B Programmes, Walking Circuits with Pachmarhi & Conservation FITs',
      },
    ],
  },
  highlights: [
    {
      id: 'satpura-madhai-gate',
      name: 'Madhai Safari Sector & Denwa Crossing',
      category: 'Iconic Gateway',
      description:
        'The atmospheric northern embarkation point where travellers cross the shimmering Denwa River by boat to enter prime teak and crocodile-lined forest tracks.',
      image: a('satpura-madhai-gate'),
    },
    {
      id: 'satpura-walking-trails',
      name: 'Core Walking Safari Trails',
      category: 'Experiential Safari',
      description:
        'A rare privilege in Indian tiger reserves — permitted on-foot wilderness tracking accompanied by trained forest department guards and lodge naturalists.',
      image: a('satpura-walking-trails'),
    },
    {
      id: 'satpura-denwa-canoeing',
      name: 'Denwa River & Canoe Safaris',
      category: 'Water Safaris',
      description:
        'Silent twilight and sunrise paddle excursions along tranquil backwaters observing basking mugger crocodiles, river terns, and herd dynamics along the water’s edge.',
      image: a('satpura-denwa-canoeing'),
    },
    {
      id: 'satpura-sloth-bear',
      name: 'Sloth Bear & Leopard Stronghold',
      category: 'Predator Habitat',
      description:
        'Unrivaled sandstone terrain with rocky caves and rich fruiting trees providing one of India’s most dependable habitats for observing sloth bears and stealthy leopards.',
      image: a('satpura-sloth-bear'),
    },
    {
      id: 'satpura-churna-plateau',
      name: 'Churna Deep Forest Plateau',
      category: 'Deep Core Wilderness',
      description:
        'A remote meadow plateau deep inside the central core of the park, accessible on full-day jungle safaris through towering sal, mahua and teak canopies.',
      image: a('satpura-churna-plateau'),
    },
    {
      id: 'satpura-sandstone-gorges',
      name: 'Sandstone Canyons & Gorges',
      category: 'Geological Marvel',
      description:
        'Dramatic ancient ravines, seasonal springs and sheer cliffs that shelter endemic flora, the Indian giant squirrel, and four-horned antelopes (chausingha).',
      image: a('satpura-sandstone-gorges'),
    },
  ],
  themes: [
    {
      id: 'theme-walking-safaris',
      title: 'Guided Walking Safaris on Foot',
      icon: 'footprints',
      image: a('theme-walking-safaris'),
      sights: [
        'Dedicated Core Walking Routes',
        'Pugmark & Track Interpretation',
        'Medicinal Forest Botany',
        'Arboreal Giant Squirrel Spotting',
        'Sensory Forest Immersion',
      ],
      note: 'One of the very few Project Tiger reserves in India permitting regulated walking safaris with armed forest rangers and naturalist guides.',
    },
    {
      id: 'theme-boat-canoe-safari',
      title: 'Denwa River Canoeing & Boat Safaris',
      icon: 'compass',
      image: a('theme-boat-canoe-safari'),
      sights: [
        'Silent Hand-Paddled Canoes',
        'Mugger Crocodile Basking Rocks',
        'Ospreys & Crested Kingfishers',
        'Twilight River Reflections',
        'Shoreline Herbivore Observation',
      ],
      note: 'Silent rivercraft and small motorboats offer unhurried aquatic observation of riparian ecology and migratory winter bird species.',
    },
    {
      id: 'theme-jeep-safaris',
      title: '4x4 Jeep Safaris & Churna Drives',
      icon: 'mountain',
      image: a('theme-jeep-safaris'),
      sights: [
        'Madhai Core Sector',
        'Full-Day Churna Deep Expeditions',
        'Panaarpatha Sector',
        'Highland Bamboo Slopes',
        'Perennial Stream Crossings',
      ],
      note: 'Open four-wheel-drive safaris exploring remote highland tracts and deep-forest canopies with exceptionally low vehicle congestion.',
    },
    {
      id: 'theme-night-buffer-drives',
      title: 'Night Drives & Nocturnal Tracking',
      icon: 'leaf',
      image: a('theme-night-buffer-drives'),
      sights: [
        'Parsapani Buffer Tracks',
        'Nocturnal Indian Civet & Leopard',
        'Rusty-Spotted Cat Habitat',
        'Nightjars & Forest Owls',
        'Clear Night Wilderness Stargazing',
      ],
      note: 'Permitted post-dusk buffer zone safaris utilizing low-intensity spotlights to discover Central India’s elusive nocturnal fauna.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp, cool morning temperatures (10°C–18°C), misty river crossings, vibrant migratory bird arrivals, and exceptionally comfortable walking safari conditions.',
      tag: 'Peak Safari Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Dry heat (32°C–42°C), blooming Palash and Mahua trees, and extraordinary sloth bear and leopard viewing as animals frequent the shrinking Denwa shoreline.',
      tag: 'Optimal Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Core park tracks close for annual regeneration and monsoon storms; select riverfront lodges and buffer zones remain open for lush scenic retreats.',
      tag: 'Buffer Open Only',
      theme: 'green',
    },
    {
      name: 'Transitional / Shoulder',
      months: 'Mid-Oct & March',
      icon: 'calendar',
      description:
        'Mid-October brings post-monsoon greenery and high water levels; March offers temperate breezes, comfortable walking weather and active birdlife.',
      tag: 'Pleasant Weather',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport, Bhopal (approx. 140–150 km, 3.5 hrs drive) is the primary airport connection with frequent flights to Delhi, Mumbai, Hyderabad and Bengaluru.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Sohagpur Railway Station (approx. 20 km, 30 mins) is the closest station; Itarsi Junction (approx. 70 km, 1.5 hrs) and Pipariya (approx. 45 km, 1 hr) offer nationwide superfast rail connections.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Smooth state highways connect Madhai smoothly to Bhopal (140 km), Pachmarhi hill station (approx. 85 km, 2.5 hrs), Pench (approx. 210 km, 4.5 hrs) and Jabalpur (250 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private transfers run reliably to the Madhai boat embarkation point, where guests enjoy a brief scenic river crossing to lodge jeeps on the opposite shore.',
    },
  ],
  cta: {
    heading: 'Craft a Bespoke Satpura Walking & Water Wilderness',
    description:
      'Partner with our B2B trade specialists for curated core walking permits, private canoe allocations, boutique river-lodge bookings and seamless Central Indian combinations.',
  },
};
