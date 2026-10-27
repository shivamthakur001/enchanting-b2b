import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/sanjay-dubri/${name}.webp`;

export const sanjayDubriContent: DestinationDetailContent = {
  id: 'sanjay-dubri',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE DESTINATION · MADHYA PRADESH',
  title: 'Sanjay-Dubri',
  subtitle: 'The Untamed Sal Wilderness — Ancient Forest Corridors, Sloth Bear Strongholds and Primal Central Indian Solitude.',
  heroImage: a('sanjay-dubri-hero'),
  ctaBackgroundImage: a('sanjay-dubri-hero'),
  tags: [
    'Tiger Reserve',
    'Ancient Sal Forests',
    'Sloth Bear Stronghold',
    'Elephant Wildlife Corridor',
    'Zero-Crowd Safaris',
  ],
  quickFacts: [
    { label: 'Region', value: 'Sidhi & Singrauli, MP', icon: 'pin' },
    { label: 'Reserve Type', value: 'Project Tiger Reserve & Eco-Corridor', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2–3 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Jun (Core Oct 1 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Wilderness Solitude · Sloth Bears · Untracked Sal', icon: 'leaf' },
  ],
  overview: {
    heading: 'Central India’s Most Primal & Uncrowded Tiger Wilderness',
    description:
      'Encompassing more than 1,674 square kilometres across Sidhi and Singrauli districts in eastern Madhya Pradesh, Sanjay-Dubri Tiger Reserve comprises Sanjay National Park and Dubri Wildlife Sanctuary. Blessed with continuous canopies of towering Shorea robusta (Sal), bamboo groves, deep perennial streams and the tranquil Gopad and Banas rivers, it forms a critical ecological corridor linking Bandhavgarh with Chhattisgarh’s Guru Ghasidas National Park. Free from tourist crowds and commercial vehicle queues, Sanjay-Dubri preserves the quiet authenticity of ancient Central Indian forests, offering high densities of sloth bears, leopards, barking deer, burgeoning tigers, and seasonal migratory elephant herds.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Connoisseur Naturalists, Wilderness Explorers, Serious Wildlife Photographers & Trade Clients Seeking Untouristed Wilderness',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Silent Sal Forests, High Sloth Bear Encounters, Zero-Vehicle-Traffic Safaris, River Gorges & Ancestral Forest Lore',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D or 3N / 4D (Easily paired as a tranquil wilderness contrast after high-intensity safaris in Bandhavgarh)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Eco-Luxury Camps, Private Expeditions, Bandhavgarh-Rewa Circuits & Custom Inbound Wilderness Programmes',
      },
    ],
  },
  highlights: [
    {
      id: 'sanjay-dubri-sal-forests',
      name: 'Cathedral Sal Forests & Canopy Walks',
      category: 'Pristine Canopy',
      description:
        'Vast uninterrupted stretches of mature Shorea robusta (Sal) trees create lofty cathedral-like forest canopies where dappled sunlight filters onto bamboo undergrowth and crystal forest brooks.',
      image: a('sanjay-dubri-sal-forests'),
    },
    {
      id: 'sanjay-dubri-core-zone',
      name: 'Dubri & Chamardaha Core Safari Sectors',
      category: 'Primary Safari Gateway',
      description:
        'The main safari sectors entered near Chamardaha wind through pristine teak and sal woodlands, offering serene game tracks with exceptionally low vehicle density and intimate wildlife viewing.',
      image: a('sanjay-dubri-core-zone'),
    },
    {
      id: 'sanjay-dubri-gopad-river',
      name: 'Gopad & Banas River Valleys',
      category: 'Perennial River Systems',
      description:
        'The Gopad and Banas river basins carve gentle sandstone gorges and sandy riverbeds through the reserve, creating vital watering stretches for herbivore herds, otter families, and basking marsh reptiles.',
      image: a('sanjay-dubri-gopad-river'),
    },
    {
      id: 'sanjay-dubri-elephant-corridor',
      name: 'Trans-Boundary Elephant & Wildlife Corridor',
      category: 'Ecological Corridor',
      description:
        'Connecting Madhya Pradesh directly to Guru Ghasidas National Park in Chhattisgarh, this crucial corridor witnesses seasonal movements of wild elephant herds, tigers and wild dogs across contiguous forests.',
      image: a('sanjay-dubri-elephant-corridor'),
    },
    {
      id: 'sanjay-dubri-sloth-bear-terrain',
      name: 'Vindhyan Sloth Bear Stronghold',
      category: 'Faunal Haven',
      description:
        'Rocky outcrops, termite-rich forest floors, and abundant wild fruit trees support one of the densest populations of sloth bears in Central India, frequently observed during twilight safari hours.',
      image: a('sanjay-dubri-sloth-bear-terrain'),
    },
    {
      id: 'sanjay-dubri-white-tiger-heritage',
      name: 'The Ancestral White Tiger Legacy',
      category: 'Historic Legacy',
      description:
        'The forests of the surrounding Vindhyan basin represent the historic domain of the royal Rewa forests, where the world’s first wild white tiger cub (Mohan) was discovered in 1951, sparking global conservation fascination.',
      image: a('sanjay-dubri-white-tiger-heritage'),
    },
  ],
  themes: [
    {
      id: 'theme-uncrowded-jeep-safaris',
      title: 'Zero-Crowd 4x4 Core Safaris',
      icon: 'compass',
      image: a('theme-uncrowded-jeep-safaris'),
      sights: [
        'Chamardaha Gate Wilderness Tracks',
        'Dubri Forest Core Corridors',
        'Pristine Bamboo & Sal Clearings',
        'Waterhole Vantage Points',
        'Private Unhurried Game Drives',
      ],
      note: 'Morning and afternoon 4x4 safaris characterized by complete freedom from convoy queues, operated with experienced local forest department trackers.',
    },
    {
      id: 'theme-naturalist-forest-tracking',
      title: 'Deep Sal Tracking & Interpretation',
      icon: 'leaf',
      image: a('theme-naturalist-forest-tracking'),
      sights: [
        'Apex Predator Pugmark Analysis',
        'Sloth Bear Foraging Signs & Claw Marks',
        'Vindhyan Flora & Medicinal Plants',
        'Termite Mound & Ecology Insights',
        'Resident Lodge Naturalist Walks',
      ],
      note: 'Interpretive botanical and wildlife tracking sessions focused on immersive forest literacy, acoustic alarm calls and Central Indian ecosystem dynamics.',
    },
    {
      id: 'theme-riverine-birdwatching',
      title: 'Gopad Riverine Avian Observation',
      icon: 'mountain',
      image: a('theme-riverine-birdwatching'),
      sights: [
        'Gopad & Banas Riverbanks',
        'Over 180 Forest & Wetland Species',
        'Crested Serpent Eagle & Fish Owls',
        'Storks, Kingfishers & River Terns',
        'Tranquil Shoreline Hides',
      ],
      note: 'Dedicated avian observation outings along designated river buffer tracks and lake edges during early morning and late afternoon golden hours.',
    },
    {
      id: 'theme-tribal-village-interactions',
      title: 'Gond & Baiga Cultural Heritage',
      icon: 'landmark',
      image: a('theme-tribal-village-interactions'),
      sights: [
        'Indigenous Forest Villages',
        'Traditional Gond Folk Art & Architecture',
        'Sustainable Forest Gathering Practices',
        'Local Community Eco-Guides',
        'Authentic Bundelkhandi & Bagheli Meals',
      ],
      note: 'Respectful cultural walks through peripheral villages, fostering authentic trade partnerships with indigenous communities and celebrating local folk heritage.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Greenery',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Lush post-monsoon sal canopies, brimming forest rivers and moderate day temperatures (24°C–30°C); scenic landscape photography and vibrant migrant birds.',
      tag: 'Park Opening',
      theme: 'green',
    },
    {
      name: 'Crisp Sal Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'Chilly morning safaris (6°C–12°C) with morning mist dancing between tall sal trunks; delightful sunny afternoons (20°C–25°C) and excellent predator movement.',
      tag: 'Peak Season',
      theme: 'blue',
    },
    {
      name: 'Warm Wilderness Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Dry, warm to hot weather (34°C–43°C); thinning foliage opens wide vistas across undulating valleys, drawing sloth bears and tigers to riverbed pools.',
      tag: 'Optimal Wildlife Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon Replenishment',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Heavy tropical downpours revive the rivers, watercourses and ancient sal forest canopies; core gates close annually for wildlife breeding and terrain regeneration.',
      tag: 'Core Closed',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Prayagraj Airport (IXD, approx. 180 km / 4–4.5 hrs) and Varanasi Airport (VNS, approx. 210–230 km / 5 hrs) are the most convenient airports with daily flights from Delhi, Mumbai and key hubs. Jabalpur Airport (approx. 270 km / 5.5 hrs) is another viable gateway.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Beohari Railway Station (approx. 45–50 km / 1 hr drive) is the closest railhead with connections to Katni and Jabalpur. Rewa Railway Station (approx. 115 km / 2.5 hrs) and Singrauli (approx. 110 km) offer extensive superfast trains.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Sanjay-Dubri connects effortlessly by paved highways to Bandhavgarh National Park (approx. 120 km / 2.5–3 hrs drive), making it an effortless low-density extension. Rewa (115 km) and Prayagraj (180 km) are easily reached.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private SUV transfers can be coordinated directly from Bandhavgarh lodges, Beohari or Rewa railheads. Authorized morning and afternoon 4x4 safaris depart from Chamardaha gate accompanied by department guides.',
    },
  ],
  cta: {
    heading: 'Discover the Untouched Silence of Sanjay-Dubri',
    description:
      'Partner with our B2B travel specialists for guaranteed core permits, secluded eco-lodge arrangements, bespoke Bandhavgarh extensions and private naturalist-led wilderness expeditions.',
  },
};
