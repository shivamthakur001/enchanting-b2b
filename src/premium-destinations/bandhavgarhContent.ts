import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/bandhavgarh/${name}.webp`;

export const bandhavgarhContent: DestinationDetailContent = {
  id: 'bandhavgarh',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Bandhavgarh',
  subtitle: 'Ancient Fort Citadel and the Undisputed Realm of the Royal Bengal Tiger.',
  heroImage: a('bandhavgarh-hero'),
  ctaBackgroundImage: a('bandhavgarh-hero'),
  tags: [
    'Tiger Reserve',
    'High Tiger Density',
    'Bandhavgarh Fort',
    'Shesh Shaiya Monolith',
    'Vindhyan Sal Forest',
  ],
  quickFacts: [
    { label: 'Region', value: 'Umaria, Vindhya Range', icon: 'pin' },
    { label: 'Reserve Type', value: 'Project Tiger Reserve', icon: 'landmark' },
    { label: 'Ideal Stay', value: '3–4 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 15 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Tiger Tracking · Fort History · Birding', icon: 'leaf' },
  ],
  overview: {
    heading: "India's Most Storied High-Density Tiger Citadel",
    description:
      'Bandhavgarh National Park is internationally celebrated for harboring one of the highest known concentrations of Royal Bengal tigers in the wild. Nestled amid thirty-two dramatic sandstone hillocks in the Vindhya mountain range of Umaria district, the park encompasses over 716 square kilometres of rugged core habitat. Dominated by the crumbling ramparts of a 2,000-year-old table-top fortress and the sacred 10th-century reclining Vishnu at Shesh Shaiya, Bandhavgarh combines dramatic geological beauty, deep mythical heritage and unrivaled predator encounters.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Big-Cat Wildlife Photographers, Serious Naturalists, Luxury Safari Travellers & Heritage Connoisseurs',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'High-Probability Tiger Tracking, Sandstone Cliff Panoramas, Ancient Rock Sculptures, Bamboo Groves & Riverine Tracks',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '3N / 4D or 4N / 5D (Allowing 5–6 safari drives split between Tala, Magdhi and Khitauli zones)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Premier Luxury Safari Lodges, Specialist Small-Group Inbound Departures & Dual-Park Tiger Circuits with Kanha',
      },
    ],
  },
  highlights: [
    {
      id: 'bandhavgarh-tala-zone',
      name: 'Tala Safari Zone',
      category: 'Core Safari Zone',
      description:
        'The legendary historical core of Bandhavgarh situated directly beneath the fort cliffs, encompassing the scenic Charan Ganga meadows and prime predator territories.',
      image: a('bandhavgarh-tala-zone'),
    },
    {
      id: 'bandhavgarh-magdhi-zone',
      name: 'Magdhi Safari Zone',
      category: 'Core Safari Zone',
      description:
        'A diverse landscape of mixed sal woodlands, expansive savannah grasslands and natural waterholes, renowned for consistent big-cat tracking and prolific herbivore herds.',
      image: a('bandhavgarh-magdhi-zone'),
    },
    {
      id: 'bandhavgarh-khitauli-zone',
      name: 'Khitauli Safari Zone',
      category: 'Core Safari Zone',
      description:
        'A picturesque dry deciduous and bamboo terrain famous for regular leopard sightings, sloth bears, chinkara gazelles and tranquil open forest drives.',
      image: a('bandhavgarh-khitauli-zone'),
    },
    {
      id: 'bandhavgarh-shesh-shaiya',
      name: 'Shesh Shaiya Monolith',
      category: 'Heritage & Faith',
      description:
        'A monumental 35-foot 10th-century Kalachuri sandstone sculpture of Lord Vishnu reclining upon the seven-headed serpent Sheshnag, sheltered beneath a verdant spring pool.',
      image: a('bandhavgarh-shesh-shaiya'),
    },
    {
      id: 'bandhavgarh-fort-plateau',
      name: 'Bandhavgarh Fort & Cliffs',
      category: 'Historic Citadel',
      description:
        'Perched upon an 811-metre sandstone plateau, this ancient fortress steeped in Ramayana lore features rock-cut caves, medieval inscriptions and sweeping valley panoramas.',
      image: a('bandhavgarh-fort-plateau'),
    },
    {
      id: 'bandhavgarh-bamboo-woodlands',
      name: 'Bamboo Groves & Meadows',
      category: 'Forest Ecology',
      description:
        'Dense natural stands of male bamboo (Dendrocalamus strictus) interspersed with sal corridors and marshy watercourses that provide crucial cover for predators and prey.',
      image: a('bandhavgarh-bamboo-woodlands'),
    },
  ],
  themes: [
    {
      id: 'theme-jeep-safaris',
      title: 'Core & Buffer 4x4 Jeep Safaris',
      icon: 'compass',
      image: a('theme-jeep-safaris'),
      sights: [
        'Tala Premium Core Zone',
        'Magdhi Wildlife Sector',
        'Khitauli Forest Trails',
        'Dhamokhar & Johila Buffers',
        'Charan Ganga Riverbanks',
      ],
      note: 'Park-regulated open 4x4 jeep safaris scheduled across sunrise and afternoon sessions, driven by registered forest guides and skilled lodge naturalists.',
    },
    {
      id: 'theme-tiger-tracking',
      title: 'Naturalist-Led Tiger Tracking',
      icon: 'leaf',
      image: a('theme-tiger-tracking'),
      sights: [
        'Fresh Pugmark Interpretation',
        'Langur & Chital Alarm Calls',
        'Scent-Marking Trees',
        'Territorial Patrol Corridors',
        'Waterhole Ambush Points',
      ],
      note: 'In-depth naturalist briefings deciphering forest acoustic signals and feline tracking methods across Bandhavgarh’s high-density territories.',
    },
    {
      id: 'theme-shesh-shaiya-heritage',
      title: 'Shesh Shaiya & Cultural Heritage',
      icon: 'landmark',
      image: a('theme-shesh-shaiya-heritage'),
      sights: [
        '35-Foot Reclining Vishnu',
        'Charan Ganga Perennial Spring',
        'Kalachuri Dynasty Carvings',
        'Ancient Rock-Cut Caves',
        'Bari Gufa Cave Complexes',
      ],
      note: 'Permitted vehicle stops and guided interpretive visits along designated paths exploring Bandhavgarh’s sacred medieval rock architecture.',
    },
    {
      id: 'theme-birding-nature-walks',
      title: 'Birdwatching & Nature Walks',
      icon: 'mountain',
      image: a('theme-birding-nature-walks'),
      sights: [
        'Malabar Pied Hornbill',
        'Changeable Hawk-Eagle',
        'White-Rumped Vulture Corridors',
        'Sirpoi Water Reservoir',
        'Buffer-Zone Guided Trails',
      ],
      note: 'Dedicated avian walks outside core boundaries and hide observation for over 250 resident woodland, raptor and migratory bird species.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Misty mornings with temperatures dropping to 4°C–10°C, radiant midday sun, active territorial movement, and spectacular photographic lighting.',
      tag: 'Peak Safari Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Intense warmth (35°C–44°C) with dry, sparse foliage that clusters animals near remaining waterholes, offering unmatched tiger sighting probability.',
      tag: 'Optimal Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Core gates close for breeding and monsoon rejuvenation; select buffer zones remain open for tranquil green forest drives.',
      tag: 'Buffer Open Only',
      theme: 'green',
    },
    {
      name: 'Transitional / Shoulder',
      months: 'Mid-Oct & March',
      icon: 'calendar',
      description:
        'Mid-October offers sparkling post-monsoon greenery; March brings blooming red flame-of-the-forest (Palash) trees and pleasant weather.',
      tag: 'Pleasant Weather',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Jabalpur Airport (approx. 165 km, 3.5–4 hrs drive) and Khajuraho Airport (approx. 230 km, 5 hrs drive) are the nearest airports with domestic flights from Delhi, Mumbai and key cities.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Umaria Railway Station (approx. 35 km, 45 mins drive) is the closest railhead; Katni Junction (approx. 100 km, 2.5 hrs) provides broad-gauge connections nationwide.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'State and national highways link Bandhavgarh smoothly to Kanha (approx. 215 km, 4.5 hrs), Khajuraho (approx. 230 km, 5 hrs), Panna (approx. 190 km) and Jabalpur.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private air-conditioned SUVs and lodge-operated transfer vehicles are standard for all station, airport and park gate transfers across Tala, Magdhi and Khitauli.',
    },
  ],
  cta: {
    heading: 'Curate a Legendary Bandhavgarh Tiger Expedition',
    description:
      'Partner with our B2B travel specialists for secured core safari permits, luxury jungle villas, expert private naturalists and seamless ground logistics.',
  },
};
