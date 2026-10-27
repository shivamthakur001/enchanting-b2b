import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/nauradehi/${name}.webp`;

export const nauradehiContent: DestinationDetailContent = {
  id: 'nauradehi',
  themeLabel: 'Wildlife',
  heroEyebrow: 'WILDLIFE SANCTUARY · CENTRAL MADHYA PRADESH',
  title: 'Nauradehi Wildlife Sanctuary',
  subtitle: 'Veerangana Durgavati Tiger Landscape — Expansive Teak Plateaus, Indian Wolf Strongholds and Vast Central Indian Savannahs.',
  heroImage: a('nauradehi-hero'),
  ctaBackgroundImage: a('nauradehi-hero'),
  tags: [
    'Veerangana Durgavati Tiger Reserve',
    'Indian Wolf Stronghold',
    'Vast Savannah Grasslands',
    'Cheola Lake Wetlands',
    'Zero-Crowd Safaris',
  ],
  quickFacts: [
    { label: 'Region', value: 'Sagar, Damoh & Narsinghpur, MP', icon: 'pin' },
    { label: 'Reserve Type', value: 'Sanctuary & Tiger Reserve Expanse', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2–3 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – May (Core Oct 1 – Jun 30)', icon: 'sun' },
    { label: 'Best For', value: 'Indian Wolves · Untamed Savannahs · Solitude', icon: 'leaf' },
  ],
  overview: {
    heading: 'Central India’s Vast Grassland Savannah & Unified Tiger Reserve',
    description:
      'Spanning over 1,197 square kilometres across Sagar, Damoh, and Narsinghpur districts, Nauradehi Wildlife Sanctuary forms the core expanse of Madhya Pradesh’s 7th Tiger Reserve — officially notified as the Veerangana Durgavati Tiger Reserve. Anchored between the Narmada and Ganges river drainage basins in the Vindhyan range, Nauradehi features sweeping dry deciduous teak woodlands, broad grassland plateaus formed through voluntary forest village relocations, and tranquil river catchments feeding the Bamner and Kopra rivers. Globally recognized by conservationists as Central India’s premier sanctuary for the elusive Indian grey wolf (Canis lupus pallipes), Nauradehi also shelters tigers establishing breeding territories, leopards, striped hyenas, sloth bears, chinkara gazelles, nilgai, and wetland avifauna around Cheola Lake. For connoisseur travellers, it represents an authentic wilderness untouched by commercial tourism mass.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Connoisseur Naturalists, Wolf Enthusiasts, Landscape Photographers & Travellers Seeking Uncrowded Wilderness',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Expansive Savannah 4x4 Drives, Indian Wolf Tracking, Cheola Lake Avian Hides & Zero Vehicle Congestion',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D or 3N / 4D (Sufficient for morning and late afternoon game drives across Mohli, Jhapan and Cheola gates)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Bespoke Wildlife Expeditions, Off-the-Beaten-Path Central India Circuits, Jabalpur-Bandhavgarh Pairings & Study Groups',
      },
    ],
  },
  highlights: [
    {
      id: 'nauradehi-savannah-grasslands',
      name: 'Expansive Restored Savannah Grasslands',
      category: 'Vast Plateau Grassland',
      description:
        'Following exemplary voluntary village relocation initiatives, vast agricultural clearings on the high Vindhyan plateau have regenerated into sweeping golden grasslands that sustain thriving populations of herbivores and cursorial predators.',
      image: a('nauradehi-savannah-grasslands'),
    },
    {
      id: 'nauradehi-indian-wolf-habitat',
      name: 'Indian Grey Wolf Stronghold',
      category: 'Canid Conservation Haven',
      description:
        'Nauradehi is one of the premier strongholds in the subcontinent for the Indian grey wolf (Canis lupus pallipes). Small packs hunt across open grasslands and scrub terrain, coexisting alongside golden jackals, Bengal foxes and striped hyenas.',
      image: a('nauradehi-indian-wolf-habitat'),
    },
    {
      id: 'nauradehi-veerangana-durgavati-tiger',
      name: 'Veerangana Durgavati Tiger Landscape',
      category: 'Notified Tiger Reserve',
      description:
        'Constituted as the core expanse of the unified Veerangana Durgavati Tiger Reserve in 2023, the sanctuary serves as an active tiger landscape, receiving translocated breeding tigers that are establishing viable wilderness lineages.',
      image: a('nauradehi-veerangana-durgavati-tiger'),
    },
    {
      id: 'nauradehi-cheola-wetlands',
      name: 'Cheola Lake & Forest Waterholes',
      category: 'Perennial Forest Wetland',
      description:
        'A picturesque freshwater reservoir nestled deep inside the forest, Cheola Lake features a forest watchtower and attracts drinking herds of sambar, chital, wild boar, mugger crocodiles and diverse migrant waterfowl throughout the dry months.',
      image: a('nauradehi-cheola-wetlands'),
    },
    {
      id: 'nauradehi-teak-plateau-forests',
      name: 'Dry Deciduous Teak & Bamboo Forests',
      category: 'Botanical Heritage',
      description:
        'Mature stands of teak (Tectona grandis), bamboo thickets, dhaora, tendu and mahua blanket the rolling sandstone hills, shifting dramatically from lush emerald foliage in autumn to luminous golden woodlands in summer.',
      image: a('nauradehi-teak-plateau-forests'),
    },
    {
      id: 'nauradehi-sloth-bear-rocky-ridges',
      name: 'Sloth Bear & Leopard Sandstone Ridges',
      category: 'Rocky Escarpments',
      description:
        'The rugged sandstone outcrops and boulder-strewn ravines provide ideal denning terrain for sloth bears and elusive Indian leopards, frequently spotted foraging near termite mounds in twilight hours.',
      image: a('nauradehi-sloth-bear-rocky-ridges'),
    },
  ],
  themes: [
    {
      id: 'theme-open-savannah-jeep-safaris',
      title: 'Low-Density 4x4 Savannah Safaris',
      icon: 'compass',
      image: a('theme-open-savannah-jeep-safaris'),
      sights: [
        'Mohli & Jhapan Tourism Gates',
        'Open-Veld Plateau Game Tracks',
        'Cheola Lake Shoreline Loops',
        'Riverine Crossing Points on the Bamner',
        'Zero-Crowd Wildlife Photography',
      ],
      note: 'Morning and afternoon game drives operated with authorized open-top vehicles and certified local forest department guides. Low tourist density ensures quiet, unhurried wildlife observations.',
    },
    {
      id: 'theme-wolf-naturalist-tracking',
      title: 'Wolf & Predator Habitat Interpretation',
      icon: 'leaf',
      image: a('theme-wolf-naturalist-tracking'),
      sights: [
        'Wolf Pack Territory Mapping',
        'Canid Pugmark & Scent Marking Identification',
        'Grassland Micro-Fauna Ecology',
        'Hyena & Fox Den Sites Outside Core',
        'Resident Lodge Naturalist Briefings',
      ],
      note: 'In-depth natural history sessions led by experienced field naturalists focusing on cursorial canid behaviour, scrubland ecology and Central Indian predator co-existence.',
    },
    {
      id: 'theme-wetland-waterfowl-birding',
      title: 'Cheola Lake & Wetland Avian Watching',
      icon: 'mountain',
      image: a('theme-wetland-waterfowl-birding'),
      sights: [
        'Cheola Lake Elevated Watchtower',
        'Over 190 Forest & Wetland Bird Species',
        'Sarus Cranes, Storks & Painted Sandgrouse',
        'Short-Toed Snake Eagles & Harriers',
        'Early Morning Golden Light Birding',
      ],
      note: 'Focused birdwatching halts at the Cheola watchtower overlooking waterholes where guests can observe diverse waterbirds and wetland wildlife using spotting scopes.',
    },
    {
      id: 'theme-vindhyan-conservation-briefings',
      title: 'Grassland Restoration & Forest Ecology',
      icon: 'landmark',
      image: a('theme-vindhyan-conservation-briefings'),
      sights: [
        'Voluntary Village Relocation Success',
        'Grassland Succession & Meadow Care',
        'Veerangana Durgavati Corridor Linkages',
        'Community Forest Protection Programmes',
        'Interactive Naturalist Discussions',
      ],
      note: 'Educational briefings providing trade partners, conservationists and nature study groups with profound insights into large-scale habitat restoration in Central India.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Greenery',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Lush green grasslands and filled streams post-monsoon; temperate daytime conditions (24°C–30°C) with scenic landscape photography and vibrant post-monsoon birdlife.',
      tag: 'Park Reopening',
      theme: 'green',
    },
    {
      name: 'Crisp Savannah Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'Chilly mornings (7°C–14°C) with clear sunny afternoons (20°C–25°C); peak visibility across open savannah plateaus and active daytime movement of wolves, herbivores and raptors.',
      tag: 'Peak Safari Season',
      theme: 'blue',
    },
    {
      name: 'Dry Golden Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description:
        'Dry, warm to hot weather (33°C–42°C); golden thinned grasses offer unobstructed views across expansive horizons, drawing wildlife reliably to Cheola Lake and waterholes.',
      tag: 'Optimal Wildlife Sightings',
      theme: 'gold',
    },
    {
      name: 'Monsoon Regeneration',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Heavy tropical monsoon rains nourish the Vindhyan catchments and revive natural aquifers; core safari tracks close annually for wildlife breeding and terrain regeneration.',
      tag: 'Core Closed',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Jabalpur Airport (JLR, approx. 95–115 km / 2–2.5 hrs drive depending on entry gate) offers regular flights from Delhi, Mumbai, Hyderabad and Bengaluru. Bhopal Airport (approx. 210–230 km / 4.5 hrs) is an alternative gateway.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Sagar Railway Station (approx. 65–75 km / 1.5 hrs drive) and Damoh Railway Station (approx. 60–70 km) are primary railheads with frequent express trains. Jabalpur Junction (approx. 100–110 km) provides extensive nationwide connectivity.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Paved state highways and NH-45 connect Nauradehi smoothly to Jabalpur (approx. 100 km), Sagar (approx. 70 km), Damoh (approx. 65 km), Bhopal (approx. 220 km) and Bandhavgarh (approx. 210 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private SUV transfers operate directly between Jabalpur, Sagar or Damoh and wilderness accommodations. Registered open 4x4 safaris depart from designated entry gates (Mohli, Jhapan, Cheola) with official department guides.',
    },
  ],
  cta: {
    heading: 'Experience the Untamed Silence of Nauradehi',
    description:
      'Partner with our Central India B2B travel specialists for guaranteed core permits, wilderness eco-lodge arrangements, expert wolf naturalists and seamless Jabalpur, Bandhavgarh or Panna circuit design.',
  },
};
