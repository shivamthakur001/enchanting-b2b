import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/national-chambal-sanctuary/${name}.webp`;

export const nationalChambalContent: DestinationDetailContent = {
  id: 'national-chambal-sanctuary',
  themeLabel: 'Wildlife',
  heroEyebrow: 'RIVERINE WILDLIFE SANCTUARY · MADHYA PRADESH',
  title: 'National Chambal Sanctuary',
  subtitle: 'The Living River of Central India — Pristine Ravines, Gharial Sanctuaries and Gangetic Dolphin Waters.',
  heroImage: a('national-chambal-hero'),
  ctaBackgroundImage: a('national-chambal-hero'),
  tags: [
    'Riverine Wildlife Sanctuary',
    'Critically Endangered Gharials',
    'Gangetic River Dolphins',
    'Indian Skimmer Breeding Grounds',
    'Pristine Ravine Badlands',
  ],
  quickFacts: [
    { label: 'Region', value: 'Morena & Chambal Basin, MP', icon: 'pin' },
    { label: 'Reserve Type', value: 'Aquatic Wildlife Sanctuary', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Nov – Mar (Boating Oct 15 – May)', icon: 'sun' },
    { label: 'Best For', value: 'Gharials · River Dolphins · Avian Safaris', icon: 'leaf' },
  ],
  overview: {
    heading: 'India’s Premier Aquatic Sanctuary & Pristine River Ecosystem',
    description:
      'Stretching along the crystalline waters of the Chambal River where Madhya Pradesh meets Rajasthan and Uttar Pradesh, the National Chambal Sanctuary protects over 400 linear kilometres of one of Northern and Central India’s cleanest river systems. Renowned globally as the paramount stronghold for the critically endangered Gharial (Gavialis gangeticus), the sanctuary shelters a thriving aquatic ecosystem untouched by heavy industrialisation. Flanked by dramatic labyrinthine ravines (bihad) carved by millennia of river erosion, Chambal provides refuge to rare Gangetic river dolphins, eight species of endangered freshwater turtles, and critical nesting colonies of the charismatic Indian skimmer. Unlike terrestrial tiger reserves, wildlife exploration here unfolds from silent eco-motorboats gliding over glass-like waters.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Aquatic Wildlife Enthusiasts, Ornithologists, Conservation Travellers & Inbound Heritage-Wildlife Combinations',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Silent Eco-Boat Safaris, Sandbank Basking Gharials, River Dolphin Surfacing, Skimmer Flocks & Badland Ravine Vistas',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1N / 2D or 2N / 3D (Permitting morning and late-afternoon river cruises paired with Morena’s medieval temple architecture)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Bespoke River Safaris, Educational Group Tours, Golden Triangle Extensions & Gwalior-Morena Circuit Additions',
      },
    ],
  },
  highlights: [
    {
      id: 'chambal-gharial-basking',
      name: 'Critically Endangered Gharial Sanctuaries',
      category: 'Aquatic Apex Predator',
      description:
        'The Chambal River supports the world’s largest breeding population of the slender-snouted Gharial. Discerning guests can observe juvenile and adult gharials, including impressive males with distinct bulbous ‘gharas’, basking peacefully upon isolated mid-river sandbars.',
      image: a('chambal-gharial-basking'),
    },
    {
      id: 'chambal-gangetic-dolphin',
      name: 'Gangetic River Dolphins',
      category: 'Endangered Freshwater Cetacean',
      description:
        'Deep water pools along the pristine river course shelter resident pods of the blind Gangetic river dolphin (Platanista gangetica). Surfacing rhythmically for air with quiet exhalations, observing these elusive mammals requires patience and quiet waters.',
      image: a('chambal-gangetic-dolphin'),
    },
    {
      id: 'chambal-indian-skimmer',
      name: 'Indian Skimmers & Avian Colonies',
      category: 'Avian Stronghold',
      description:
        'Mid-stream sandbars provide internationally significant nesting grounds for the striking Indian skimmer, which cleaves the river surface with its elongated lower mandible, alongside black-bellied terns, bar-headed geese and sarus cranes.',
      image: a('chambal-indian-skimmer'),
    },
    {
      id: 'chambal-sand-banks-ravines',
      name: 'The Chambal Badlands & Ravine Formations',
      category: 'Dramatic Landscape',
      description:
        'Centuries of monsoon runoff have sculpted high alluvial clay bluffs into the storied Chambal bihad — a mesmerizing labyrinth of dry ravines and gullies rich in folklore that frames the serene emerald ribbon of the river.',
      image: a('chambal-sand-banks-ravines'),
    },
    {
      id: 'chambal-freshwater-turtles',
      name: 'Threatened Freshwater River Turtles',
      category: 'Reptilian Diversity',
      description:
        'The sanctuary harbours eight rare turtle species, including the critically endangered red-crowned roofed turtle (Batagur kachuga) and three-striped roofed turtle, frequently seen sunning on fallen branches and sand spits.',
      image: a('chambal-freshwater-turtles'),
    },
    {
      id: 'chambal-deoraha-boat-wharf',
      name: 'Authorized Eco-Boat Safari Wharfs',
      category: 'Regulated Tourism Wharf',
      description:
        'Designated forest department boarding points near Rajghat (Morena) and surrounding permitted river sectors serve as departure wharfs for regulated motorized eco-boats equipped with life jackets and trained naturalists.',
      image: a('chambal-deoraha-boat-wharf'),
    },
  ],
  themes: [
    {
      id: 'theme-motorboat-river-safari',
      title: 'Authorized Silent Riverboat Safaris',
      icon: 'compass',
      image: a('theme-motorboat-river-safari'),
      sights: [
        'Mid-River Sandbanks & Shingle Islands',
        'Basking Gharials & Mugger Crocodiles',
        'Deep River Pools for Dolphin Surfacing',
        'High Clay Escarpments & Cliff Nests',
        'Certified Forest Department Eco-Pilots',
      ],
      note: 'River safaris operate under strict forest department guidelines; boat speeds and idling distances are strictly regulated to protect nesting birds and aquatic fauna. Wildlife sightings are natural and cannot be guaranteed.',
    },
    {
      id: 'theme-avian-sandbank-trails',
      title: 'Specialist Riverine Avian Observation',
      icon: 'leaf',
      image: a('theme-avian-sandbank-trails'),
      sights: [
        'Indian Skimmers & Black-Bellied Terns',
        'Great Thick-Knees & River Lapwings',
        'Winter Migratory Waterfowl & Pochards',
        'Bonelli’s Eagles & Osprey Overlooks',
        'Spotting Scopes & Avian Interpretation',
      ],
      note: 'Cruises are timed during early morning and late afternoon golden hours when bird activity on the open river sandbars is at its absolute peak.',
    },
    {
      id: 'theme-river-conservation-briefing',
      title: 'River Ecology & Conservation Briefings',
      icon: 'mountain',
      image: a('theme-river-conservation-briefing'),
      sights: [
        'Gharial Rehabilitation & Hatching Insights',
        'Riverine Habitat Protection Measures',
        'Freshwater Dolphin Acoustic Research',
        'Local Community Stewardship Initiatives',
        'Resident Wildlife Expert Sessions',
      ],
      note: 'Educational natural history sessions arranged for inbound educational groups, researchers and specialized conservation travel delegations.',
    },
    {
      id: 'theme-heritage-ravine-pairing',
      title: 'Bateshwar & Morena Heritage Pairings',
      icon: 'landmark',
      image: a('theme-heritage-ravine-pairing'),
      sights: [
        'Bateshwar 200 Medieval Temple Complex',
        'Mitawali Circular Yogini Shrine',
        'Padhavali Fortified Temple Gateway',
        'Chambal Ravine Scenic Drives',
        'Seamless Golden Triangle Linkages',
      ],
      note: 'Effortless dual-pace itineraries pairing morning riverboat safaris with afternoon explorations of Morena’s 8th-to-11th-century Gurjara-Pratihara stone monuments.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Arrival',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'River levels stabilize following the monsoon; boating permits commence from mid-October with clear waters, pleasant daytime temperatures (24°C–30°C), and early migratory waterfowl.',
      tag: 'Boating Commences',
      theme: 'green',
    },
    {
      name: 'Crisp River Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'Chilly morning river cruises (8°C–14°C) with mist clearing over glassy waters; warm sunny afternoons (20°C–24°C) offer prime basking conditions for gharials and large flocks of winter migrants.',
      tag: 'Peak Birding & Basking',
      theme: 'blue',
    },
    {
      name: 'Early Summer Sunning',
      months: 'Mar – May',
      icon: 'sun',
      description:
        'Warm to hot dry days (30°C–40°C); water levels recede to reveal wide sandbars where Indian skimmers establish nesting colonies and gharials congregate in deep river channels.',
      tag: 'Skimmer Breeding Period',
      theme: 'gold',
    },
    {
      name: 'Monsoon High Waters',
      months: 'Jun (late) – Sep',
      icon: 'cloud',
      description:
        'Heavy seasonal precipitation causes river levels to swell dramatically; all riverboat safaris are suspended for visitor safety and sandbank habitat regeneration.',
      tag: 'River Safaris Suspended',
      theme: 'purple',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (GWL, approx. 65–85 km / 1.5–2 hrs drive depending on boarding ghat) is the closest commercial airport, offering daily domestic connections to Delhi, Mumbai, Bengaluru and Hyderabad. Agra Airport (approx. 90–110 km) provides additional northern access.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Morena Railway Station (approx. 30–45 km) and Gwalior Junction (approx. 65–85 km) are principal railheads on the main Delhi-Mumbai/Chennai lines, served by frequent Shatabdi, Rajdhani and express services.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'National Highway 44 connects Gwalior and Agra seamlessly. Paved state roads lead smoothly through Morena district to official forest department safari embarkation points along the Chambal River.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured SUV transfers are arranged directly from Gwalior or Agra hotels to safari ghats. Authorized open-deck eco-boats with certified life jackets operate from designated forest wharfs.',
    },
  ],
  cta: {
    heading: 'Curate a Bespoke Aquatic Safari on the Chambal River',
    description:
      'Partner with our B2B travel specialists for guaranteed forest department boat allocations, certified river naturalists, eco-lodge arrangements and seamless Gwalior or Golden Triangle circuit combinations.',
  },
};
