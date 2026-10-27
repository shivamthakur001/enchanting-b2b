import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/kuno/${name}.webp`;

export const kunoContent: DestinationDetailContent = {
  id: 'kuno',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Kuno',
  subtitle: 'The Historic Cheetah Landscape — Expansive Golden Savannahs, Kardhai Forests and Conservation History in the Making.',
  heroImage: a('kuno-hero'),
  ctaBackgroundImage: a('kuno-hero'),
  tags: [
    'Cheetah Conservation Landscape',
    'Open Grassland Savannahs',
    'Kuno River Valley',
    'Kardhai Woodlands',
    'Exclusive Wildlife Tourism',
  ],
  quickFacts: [
    { label: 'Region', value: 'Sheopur, Vindhyan Hills', icon: 'pin' },
    { label: 'Reserve Type', value: 'National Park & Cheetah Habitat', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2–3 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 1 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Cheetah Landscapes · Birding · Savannah Safaris', icon: 'leaf' },
  ],
  overview: {
    heading: 'India’s Pioneering Savannah Wilderness & Global Conservation Landmark',
    description:
      'Spanning over 748 square kilometres of open dry deciduous forests, rolling grasslands, and acacia woodlands in Sheopur district, Kuno National Park represents one of modern Asia’s most consequential ecological restoration projects. Named after the perennial Kuno River that flows through its heart, the park was historically prepared over two decades as a sanctuary for apex predators, culminating in the historic reintroduction of African cheetahs under Project Cheetah. With picturesque Kardhai-covered hills, undulating savannah valleys, and low-density visitor access, Kuno offers discerning travellers a distinct, unhurried wildlife experience unlike any standard tiger reserve.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Wildlife Conservationists, Serious Naturalists, Savannah Safari Seekers, Photographers & Discerning Inbound FITs',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Expansive Grassland Drives, Regulated Vehicle Safaris, River Gorges, Historical Fortress Vistas & Coexisting Predators',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D or 3N / 4D (Sufficient time for multiple morning and afternoon drives across Tikatoli and Ahera sectors)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Luxury Tented Wilderness Camps, Eco-Lodges, Educational Group Charters & Gwalior/Ranthambore Extensions',
      },
    ],
  },
  highlights: [
    {
      id: 'kuno-cheetah-landscape',
      name: 'The Global Cheetah Restoration Landscape',
      category: 'Conservation Milestone',
      description:
        'Kuno is globally celebrated as the release ground for the reintroduction of the cheetah to the Indian subcontinent. Scientifically monitored under strict protocols by conservation teams and the Wildlife Institute of India, the sprawling savannah provides a glimpse into this pioneering species restoration effort.',
      image: a('kuno-cheetah-landscape'),
    },
    {
      id: 'kuno-river-corridor',
      name: 'Kuno River Lifeline & Riverine Ecosystem',
      category: 'Perennial River',
      description:
        'Bisecting the park from south to north, the pristine Kuno River sustains lush riverine corridors, crystal rock pools and deep waterholes that attract wildlife throughout the dry season, creating scenic vantage points for riverine avifauna and drinking herbivore herds.',
      image: a('kuno-river-corridor'),
    },
    {
      id: 'kuno-tikatoli-savannah',
      name: 'Tikatoli Gateway & Open Savannah Vistas',
      category: 'Primary Safari Sector',
      description:
        'The Tikatoli entry sector leads into sweeping golden grasslands reminiscent of African veld landscapes, interspersed with umbrella thorn acacia and ziziphus bushes where herbivores graze against broad horizons.',
      image: a('kuno-tikatoli-savannah'),
    },
    {
      id: 'kuno-kardhai-forests',
      name: 'Kardhai Woodlands & Rugged Plateaus',
      category: 'Botanical Heritage',
      description:
        'Undulating ridges covered with pure stands of Kardhai (Anogeissus pendula), Salai and Khair trees transform dramatically with the seasons, shifting from deep emerald canopies in autumn to ethereal silver-grey woodlands in dry summer.',
      image: a('kuno-kardhai-forests'),
    },
    {
      id: 'kuno-palpur-fort',
      name: 'Historic Palpur Fortress & Cultural Relics',
      category: 'Cultural Relic',
      description:
        'Perched majestically beside the Kuno River, the ancient ramparts of Palpur Fort narrate the feudal history of the former princely rulers of the region, providing an evocative architectural silhouette against the wild forested hills.',
      image: a('kuno-palpur-fort'),
    },
    {
      id: 'kuno-indigenous-predators',
      name: 'Coexisting Fauna — Leopards, Hyenas & Chousinghas',
      category: 'Diverse Wildlife',
      description:
        'Beyond the cheetah, Kuno shelters thriving populations of Indian leopards, striped hyenas, jackals, jungle cats, and four-horned antelopes (chousingha), alongside large herds of chital, sambar and nilgai.',
      image: a('kuno-indigenous-predators'),
    },
  ],
  themes: [
    {
      id: 'theme-cheetah-safari',
      title: 'Regulated 4x4 Savannah Jeep Safaris',
      icon: 'compass',
      image: a('theme-cheetah-safari'),
      sights: [
        'Tikatoli Savannah Grassland Tracks',
        'Ahera Tourism Sector Plains',
        'Peepalbawadi Forest Gate Corridors',
        'Kuno Riverbed Overlooks',
        'Open-Air 4x4 Wildlife Tracking',
      ],
      note: 'Safaris follow strict forest department protocols; tracking and observing wildlife is strictly vehicle-based along authorized routes with no on-foot approaches permitted.',
    },
    {
      id: 'theme-conservation-briefing',
      title: 'Expert Wildlife & Conservation Briefings',
      icon: 'leaf',
      image: a('theme-conservation-briefing'),
      sights: [
        'Project Cheetah Science Overview',
        'Radio-Telemetry Tracking Insights',
        'Grassland Ecology Restoration',
        'Community Resettlement History',
        'Resident Lodge Naturalist Sessions',
      ],
      note: 'In-depth natural history and conservation presentations organized by resident lodge naturalists for international FITs and specialist trade delegations.',
    },
    {
      id: 'theme-kuno-river-walks',
      title: 'Buffer Nature Walks & Avian Tracking',
      icon: 'mountain',
      image: a('theme-kuno-river-walks'),
      sights: [
        'Kuno Riverbank Riparian Buffers',
        'Over 200 Avian Species',
        'Painted Sandgrouse & Indian Pitta',
        'Vulture & Raptor Roosting Trees',
        'Kardhai Forest Boundary Trails',
      ],
      note: 'Nature walks are restricted to designated safe eco-tourism buffer zones with certified naturalists; core zones remain strictly vehicle-only.',
    },
    {
      id: 'theme-chambal-circuit',
      title: 'Gwalior & Chambal Circuit Extensions',
      icon: 'landmark',
      image: a('theme-chambal-circuit'),
      sights: [
        'Gwalior Fort & Scindia Palaces',
        'National Chambal Gharial Sanctuary',
        'Shivpuri Princely Chhatris',
        'Smooth Highway Connections',
        'Seamless Multi-Day Itineraries',
      ],
      note: 'High-value multi-destination B2B itineraries linking Kuno’s savannah wilderness with the heritage monuments of Gwalior and riverboat safaris on the Chambal.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Awakening',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Comfortable days (25°C–32°C) with post-monsoon greenery across the savannah; optimal landscape photography, sparkling river views and active avian populations.',
      tag: 'Park Reopening',
      theme: 'green',
    },
    {
      name: 'Crisp Savannah Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'Chilly morning safaris (7°C–14°C) warming to pleasant afternoons (22°C–26°C); outstanding visibility across open veld grasslands and peak movement of herbivores and predators.',
      tag: 'Peak Season',
      theme: 'blue',
    },
    {
      name: 'Golden Dry Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Warm to hot dry days (32°C–43°C); vegetation thins dramatically, concentrating leopards, antelopes and other species around the perennial Kuno river pools.',
      tag: 'Prime Wildlife Density',
      theme: 'gold',
    },
    {
      name: 'Monsoon Regeneration',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Core tourism zones close annually for wildlife breeding and monsoon track recovery; select partner safari lodges offer tranquil rejuvenation escapes and rural exploration.',
      tag: 'Core Closed',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (approx. 165 km / 3.5–4 hrs drive) offers scheduled flights connecting Delhi, Mumbai, Bengaluru and Hyderabad. Alternatively, Jaipur International Airport (approx. 230–250 km / 5 hrs) serves extensive international and domestic routes.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Sawai Madhopur Junction (approx. 115 km / 2.5–3 hrs) is a major mainline railhead on the Delhi-Mumbai route with frequent express trains. Shivpuri (approx. 90 km) and Gwalior (approx. 165 km) provide additional reliable rail links.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well-maintained state highways link Kuno smoothly to Shivpuri (90 km), Sawai Madhopur / Ranthambore (115 km), Gwalior (165 km), Kota (160 km) and Agra (280 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private transfers operate directly between Gwalior or Sawai Madhopur and wilderness lodges. Authorized open-top 4x4 safaris depart morning and afternoon from Tikatoli and Ahera gates with certified guides.',
    },
  ],
  cta: {
    heading: 'Incorporate Kuno’s Historic Savannah into Your Wildlife Portfolios',
    description:
      'Partner with our B2B travel specialists for guaranteed vehicle safaris, luxury tented wilderness camps, expert conservation briefings and seamless Gwalior or Ranthambore extensions.',
  },
};
