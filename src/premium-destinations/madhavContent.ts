import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/madhav-national-park/${name}.webp`;

export const madhavContent: DestinationDetailContent = {
  id: 'madhav-national-park',
  themeLabel: 'Wildlife',
  heroEyebrow: 'TIGER RESERVE · SHIVPURI, MADHYA PRADESH',
  title: 'Madhav National Park',
  subtitle: 'Scindia Royal Game Sanctuary, Ramsar Wetland Waters and Madhya Pradesh’s Newest Tiger Reserve Landscape.',
  heroImage: a('madhav-hero'),
  ctaBackgroundImage: a('madhav-hero'),
  tags: [
    'Notified Tiger Reserve',
    'Sakhya Sagar Ramsar Site',
    'George Castle Crest',
    'Kardhai & Salai Woodlands',
    'Scindia Princely Heritage',
  ],
  quickFacts: [
    { label: 'Region', value: 'Shivpuri, Northern MP', icon: 'pin' },
    { label: 'Reserve Type', value: 'Tiger Reserve & National Park', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – May (Core Oct 1 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Wetland Birds · Tigers · George Castle', icon: 'leaf' },
  ],
  overview: {
    heading: 'Royal Hunting Sanctuary Reborn as Central India’s Newest Tiger Reserve',
    description:
      'Spanning over 354 square kilometres across the undulating Vindhyan hills of Shivpuri district, Madhav National Park carries an illustrious natural and historical pedigree. Historically conserved as the private summer game preserve of the Scindia rulers of Gwalior, the park received historic notification as Madhya Pradesh’s 8th Tiger Reserve following a successful tiger translocation and reintroduction programme. Anchored by the expansive Sakhya Sagar lake — a designated Ramsar wetland of international importance — and Madhav Sagar, the park features dense dry deciduous forests dominated by Kardhai, Salai, and Palash, intermingled with expansive lakeside grasslands. Madhav provides sanctuary to burgeoning tigers, thriving leopards, sloth bears, Indian gazelles (chinkara), marsh crocodiles, and over 200 resident and migratory bird species.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Wildlife & Heritage Travellers, Ornithologists, Conservation Study Groups & Inbound Gwalior-Kuno Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Lakeside Safari Tracks, Sakhya Sagar Crocodile Overlooks, George Castle Hill Vistas & Royal Scindia Heritage',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D (Permitting morning and afternoon game drives complemented by Shivpuri’s marble chhatris and palaces)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Heritage-Wildlife Combos, Kuno Safari Extensions, Boutique Hotel Pairings & Accessible North MP Wilderness Stops',
      },
    ],
  },
  highlights: [
    {
      id: 'madhav-sakhya-sagar-lake',
      name: 'Sakhya Sagar Lake & Ramsar Wetland',
      category: 'International Ramsar Site',
      description:
        'A magnificent freshwater reservoir created from the Manier River, Sakhya Sagar is globally recognized as a Ramsar site. The lake edge supports thriving marsh crocodile populations, migratory waterfowl, purple swamphens and wading storks against scenic forest shorelines.',
      image: a('madhav-sakhya-sagar-lake'),
    },
    {
      id: 'madhav-tiger-reintroduction',
      name: 'Historic Tiger Reintroduction & Recovery',
      category: 'Apex Predator Recovery',
      description:
        'Notified as a full Project Tiger Reserve in 2025 following the scientific translocation of tigers from Bandhavgarh and Panna, Madhav marks a triumphant chapter in predator restoration across Central India’s northern forest corridors.',
      image: a('madhav-tiger-reintroduction'),
    },
    {
      id: 'madhav-george-castle-crest',
      name: 'George Castle & Vindhyan Forest Panoramas',
      category: 'Colonial Stone Fortress',
      description:
        'Constructed in 1911 by Maharaja Madhav Rao Scindia atop the park’s highest elevation for King George V, this English-style stone turreted castle offers breathtaking 360-degree panoramas over the Sakhya Sagar lake and emerald forest canopy.',
      image: a('madhav-george-castle-crest'),
    },
    {
      id: 'madhav-leopard-kardhai-woodlands',
      name: 'Kardhai Woodlands & Coexisting Predators',
      category: 'Botanical & Predator Stronghold',
      description:
        'The rugged sandstone ridges and undulating slopes of Kardhai (Anogeissus pendula) trees shelter dense populations of Indian leopards, striped hyenas, jackals, sloth bears, and abundant herds of chital, sambar and nilgai.',
      image: a('madhav-leopard-kardhai-woodlands'),
    },
    {
      id: 'madhav-marsh-crocodiles',
      name: 'Marsh Crocodiles & Aquatic Reptiles',
      category: 'Reptilian Haven',
      description:
        'Sakhya Sagar and its peripheral wetlands support one of the highest concentrations of mugger crocodiles (Crocodylus palustris) in Northern Madhya Pradesh, frequently observed basking upon designated lake spits.',
      image: a('madhav-marsh-crocodiles'),
    },
    {
      id: 'madhav-sailing-club-wetlands',
      name: 'The Historic Sailing Club & Avian Waters',
      category: 'Royal Heritage & Birding',
      description:
        'The historic stone pavilion of the Scindia-era Sailing Club on the shores of Sakhya Sagar provides an evocative heritage setting for spotting osprey, white-bellied drongos, painted storks and cormorant roosts.',
      image: a('madhav-sailing-club-wetlands'),
    },
  ],
  themes: [
    {
      id: 'theme-lake-forest-game-drives',
      title: '4x4 Lake & Woodland Game Drives',
      icon: 'compass',
      image: a('theme-lake-forest-game-drives'),
      sights: [
        'Sakhya Sagar Shoreline Tracks',
        'Madhav Sagar Deep Core Corridors',
        'Kardhai Forest Canopy Trails',
        'Crocodile Point Lake Overlooks',
        'Chinkara & Four-Horned Antelope Clearings',
      ],
      note: 'Morning and afternoon game drives conducted in authorized vehicles with certified forest department eco-guides across regulated tourism circuits. Tiger sightings are natural events and cannot be guaranteed.',
    },
    {
      id: 'theme-george-castle-panoramas',
      title: 'George Castle Heritage Viewpoints',
      icon: 'landmark',
      image: a('theme-george-castle-panoramas'),
      sights: [
        '1911 Stone Turreted Royal Castle',
        'Highest Elevation in Madhav Reserve',
        'Sweeping Vistas of Sakhya Sagar',
        'Sunset Silhouette Photography',
        'Scindia Royal Hunting History',
      ],
      note: 'Permitted vehicle stop and interpretive vantage point inside the national park, combining majestic natural vistas with early 20th-century royal heritage.',
    },
    {
      id: 'theme-wetland-raptor-birding',
      title: 'Ramsar Wetland & Raptor Birdwatching',
      icon: 'leaf',
      image: a('theme-wetland-raptor-birding'),
      sights: [
        'Over 200 Avian Species',
        'Winter Migrants: Bar-Headed Geese & Pochards',
        'Osprey, Crested Serpent Eagle & Fish Owls',
        'Sakhya Sagar Shoreline Hides',
        'Resident Marsh Harrier Patrols',
      ],
      note: 'Specialist birdwatching outings organized along authorized lake viewpoints with expert naturalists during optimal morning light.',
    },
    {
      id: 'theme-scindia-regal-trail',
      title: 'Shivpuri Royal Chhatris & Heritage Circuit',
      icon: 'mountain',
      image: a('theme-scindia-regal-trail'),
      sights: [
        'Madhav Rao Scindia Marble Cenotaph',
        'Sakhya Raje Scindia Chhatri & Charbagh',
        'Intricate Pietra Dura Inlay Artistry',
        'Bhadaiya Kund Natural Springs',
        'Seamless Kuno & Gwalior Connections',
      ],
      note: 'Dual-purpose trade itineraries pairing morning wildlife safaris in Madhav with afternoon visits to Shivpuri’s breathtaking marble Mughal-Rajput royal cenotaphs.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Awakening',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Lakes are full, forests are lush green post-monsoon, and temperatures are pleasantly mild (24°C–31°C); excellent for scenic photography, water views and early migratory arrivals.',
      tag: 'Lakes Full & Green',
      theme: 'green',
    },
    {
      name: 'Crisp Wetland Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'Cool to chilly morning drives (7°C–14°C) with morning mist dancing over Sakhya Sagar; sunny afternoons (20°C–25°C) bring peak crocodile basking and thousands of winter migratory birds.',
      tag: 'Peak Birding & Safaris',
      theme: 'blue',
    },
    {
      name: 'Dry Deciduous Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Dry, warm to hot weather (32°C–42°C); tree foliage drops to reveal open forest terrain, concentrating predators, deer and bears near Sakhya Sagar and Madhav Sagar watering pools.',
      tag: 'Optimal Wildlife Movement',
      theme: 'gold',
    },
    {
      name: 'Monsoon Rejuvenation',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Rainfall replenishes the reservoirs, streams and deciduous woodlands; select park zones close for wildlife breeding while peripheral heritage sites remain accessible.',
      tag: 'Core Safari Closed',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (GWL, approx. 125 km / 2.5 hrs drive) is the closest commercial airport, offering daily scheduled flights to Delhi, Mumbai, Bengaluru and Hyderabad. Bhopal Airport (approx. 300 km) is another viable hub.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Shivpuri Railway Station (approx. 7–10 km / 15 mins) offers local and regional rail connections. Jhansi Junction (approx. 95–100 km / 2 hrs) and Gwalior Junction (approx. 125 km / 2.5 hrs) provide nationwide superfast Shatabdi and Rajdhani express connectivity.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Superb 4-lane national highways (NH-46 / Agra-Mumbai highway) connect Shivpuri and Madhav directly to Gwalior (125 km), Jhansi (100 km), Orchha (115 km) and Kuno National Park (approx. 85–90 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private air-conditioned taxis operate seamlessly between Shivpuri hotels, railheads and park entry gates. Registered open-top 4x4 safaris operate from authorized park gates accompanied by certified forest guides.',
    },
  ],
  cta: {
    heading: 'Curate a Combined Wildlife & Regal Heritage Journey in Madhav',
    description:
      'Partner with our B2B travel specialists for guaranteed safari permits, boutique heritage stays in Shivpuri, expert naturalists and seamless Kuno, Gwalior or Orchha circuit integration.',
  },
};
