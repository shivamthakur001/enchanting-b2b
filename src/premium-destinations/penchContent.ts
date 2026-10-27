import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/pench/${name}.webp`;

export const penchContent: DestinationDetailContent = {
  id: 'pench',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Pench',
  subtitle: "Kipling’s Legendary Jungle Book Country — Where Teak Forests and River Corridors Come Alive.",
  heroImage: a('pench-hero'),
  ctaBackgroundImage: a('pench-hero'),
  tags: [
    'Tiger Reserve',
    'Kipling Lore',
    'Teak & Mahua Canopy',
    'Wild Dog Sanctuary',
    'Riverine Safaris',
  ],
  quickFacts: [
    { label: 'Region', value: 'Seoni & Chhindwara', icon: 'pin' },
    { label: 'Reserve Type', value: 'Project Tiger Reserve', icon: 'landmark' },
    { label: 'Ideal Stay', value: '3–4 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 15 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Kipling Country · Tigers · Wild Dogs', icon: 'leaf' },
  ],
  overview: {
    heading: "The Living Landscape of Rudyard Kipling’s Imagination",
    description:
      "Straddling the southern foothills of the Satpura Range in Seoni and Chhindwara districts, Pench National Park is immortalized as the real-world setting of Rudyard Kipling's The Jungle Book. Bisected by the meandering Pench River, this 758-square-kilometre core reserve features open tropical dry deciduous teak forests, rocky streams, and vast waterhole glades. Renowned for thriving Bengal tiger families, stealthy leopards, and one of Central India's healthiest populations of endangered Indian wild dogs (dholes), Pench offers an unhurried, evocative wilderness experience with exceptional air and road accessibility via Nagpur.",
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Wildlife Travellers, Kipling Enthusiasts, Dhole & Leopard Photographers, Family Safaris & Inbound Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Open Teak Canopy Safaris, Pack-Hunting Wild Dogs, Meandering River Corridors, Night Buffer Drives & Atmospheric Lodges',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '3N / 4D or 4N / 5D (Allowing 5–6 safari drives split between Turia, Karmajhiri and Jamtara core gates)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Luxury Wilderness Camps, Rapid 2-Hour Airport Transfers from Nagpur & Seamless Combinations with Kanha and Satpura',
      },
    ],
  },
  highlights: [
    {
      id: 'pench-turia-gate',
      name: 'Turia Core Safari Zone',
      category: 'Core Safari Zone',
      description:
        'The celebrated southern core sector famed for prime waterhole tracking, open teak glades, and historic tiger territories easily reached from luxury lodges.',
      image: a('pench-turia-gate'),
    },
    {
      id: 'pench-river-landscape',
      name: 'Pench River & Catchment',
      category: 'Riverine Ecology',
      description:
        'The lifeblood of the reserve, snaking through boulder-strewn gorges and feeding the Totladoh reservoir catchment where herbivores and waterbirds gather in large numbers.',
      image: a('pench-river-landscape'),
    },
    {
      id: 'pench-kipling-country',
      name: 'Kipling Lore & Seeonee Hills',
      category: 'Literary Heritage',
      description:
        "The evocative physical terrain that inspired Mowgli, Sher Khan, Bagheera, and Baloo, with rocky outcrops and forest ravines echoing the tales of the Seeonee pack.",
      image: a('pench-kipling-country'),
    },
    {
      id: 'pench-dhole-packs',
      name: 'Indian Wild Dog (Dhole) Territory',
      category: 'Predator Ecology',
      description:
        'One of Central India’s premier sanctuaries for observing the endangered Asiatic wild dog (Cuon alpinus) hunting and socializing in tightly coordinated family packs.',
      image: a('pench-dhole-packs'),
    },
    {
      id: 'pench-karmajhiri-zone',
      name: 'Karmajhiri Woodland Sector',
      category: 'Core Safari Zone',
      description:
        'A quieter northern core forest characterized by towering teak stands, mixed bamboo valleys, and tranquil game routes offering high-quality naturalist excursions.',
      image: a('pench-karmajhiri-zone'),
    },
    {
      id: 'pench-rukhad-corridor',
      name: 'Rukhad Ecological Corridor',
      category: 'Wildlife Corridor',
      description:
        'A vital forested buffer corridor connecting Pench to Kanha National Park, featuring nocturnal safari opportunities, nature walks, and elephant-grass valleys.',
      image: a('pench-rukhad-corridor'),
    },
  ],
  themes: [
    {
      id: 'theme-jeep-safaris',
      title: 'Core 4x4 Wilderness Safaris',
      icon: 'compass',
      image: a('theme-jeep-safaris'),
      sights: [
        'Turia Core Sector',
        'Karmajhiri Gateway',
        'Jamtara Riverine Tracks',
        'Alikatta Grassland Glades',
        'Totladoh Lake Shoreline',
      ],
      note: 'Morning and afternoon open jeep game drives led by licensed forest guides and seasoned lodge naturalists across permitted park sectors.',
    },
    {
      id: 'theme-kipling-interpretation',
      title: 'The Jungle Book Trail & Lore',
      icon: 'landmark',
      image: a('theme-kipling-interpretation'),
      sights: [
        'Seeonee Rock Outcrops',
        'Waingunga Watershed Briefings',
        'Mowgli Forest Trails',
        'Wolf Pack Territory Lore',
        'Lodge Naturalist Story Sessions',
      ],
      note: "Enriching guided storytelling sessions linking 19th-century colonial forest gazetteers with Kipling's immortal characters and contemporary conservation reality.",
    },
    {
      id: 'theme-rukhad-night-buffer',
      title: 'Rukhad Buffer & Night Drives',
      icon: 'leaf',
      image: a('theme-rukhad-night-buffer'),
      sights: [
        'Nocturnal Mammal Spotting',
        'Indian Civet & Jungle Cat',
        'Flying Squirrel Woodlands',
        'Evening Buffer Glades',
        'Stargazing over Forest Ridges',
      ],
      note: 'Authorized dusk and night buffer drives using specialized vehicle spotlights to observe shy nocturnal predators and active nocturnal avifauna.',
    },
    {
      id: 'theme-birding-pottery-culture',
      title: 'Birdwatching & Local Culture',
      icon: 'mountain',
      image: a('theme-birding-pottery-culture'),
      sights: [
        'Over 285 Avian Species',
        'Malabar Pied Hornbill',
        'Indian Pitta & Paradise Flycatcher',
        'Pachdhar Potter Village',
        'Terracotta Craft Demonstrations',
      ],
      note: 'A harmonious blend of morning lake-edge birding along the Totladoh perimeter followed by visits to the historic artisanal potter settlement of Pachdhar.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Pleasant cool mornings (8°C–14°C), clear sunny afternoons, golden light filtering through the open teak canopy, and active daytime predator movement.',
      tag: 'Peak Safari Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Warm to hot temperatures (34°C–43°C) cause broad teak leaves to drop, maximizing forest visibility and concentrating wildlife around the drying Pench river pools.',
      tag: 'Optimal Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Core gates close for annual breeding cycles and trail maintenance; select buffer zones and tranquil nature lodges remain open amidst lush greenery.',
      tag: 'Buffer Open Only',
      theme: 'green',
    },
    {
      name: 'Transitional / Shoulder',
      months: 'Mid-Oct & March',
      icon: 'calendar',
      description:
        'Mid-October offers sparkling post-monsoon foliage and brimming watercourses; March brings flowering Mahua and Palash trees with pleasant temperatures.',
      tag: 'Pleasant Weather',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Dr. Babasaheb Ambedkar International Airport, Nagpur (approx. 90–110 km, 2–2.5 hrs drive via the modern 4-lane NH-44 highway) is the most convenient airport gateway with flights nationwide.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Nagpur Junction (approx. 100 km, 2.5 hrs) is a major nationwide railway hub connecting to all Indian capitals; Seoni Railway Station (approx. 35 km) provides regional rail access.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'NH-44 runs directly past Pench with dedicated elevated wildlife underpasses, linking easily to Kanha (approx. 190 km, 4 hrs), Satpura (approx. 210 km, 4.5 hrs) and Jabalpur (approx. 200 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Air-conditioned SUVs provide effortless 2-hour door-to-door highway transfers between Nagpur airport and safari lodge gates across Turia, Karmajhiri and Jamtara.',
    },
  ],
  cta: {
    heading: 'Step into Kipling’s Living Jungle at Pench',
    description:
      'Partner with our B2B travel specialists for secured core safari permits, luxury wilderness camps, expert private naturalists and rapid 2-hour Nagpur airport transfers.',
  },
};
