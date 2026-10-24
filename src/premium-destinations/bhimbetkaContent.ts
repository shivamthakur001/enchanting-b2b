import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/bhimbetka/${name}.webp`;

export const bhimbetkaContent: DestinationDetailContent = {
  id: 'bhimbetka',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Bhimbetka',
  subtitle: "Where Humanity's Earliest Stories Live in Stone.",
  heroImage: a('bhimbetka-hero'),
  tags: [
    'UNESCO World Heritage',
    'Prehistoric Rock Art',
    'Vindhyan Shelters',
    'Palaeolithic Archaeology',
    'Mesolithic Murals',
  ],
  quickFacts: [
    { label: 'Region', value: 'Raisen District, near Bhopal', icon: 'pin' },
    { label: 'Heritage', value: 'UNESCO World Heritage', icon: 'landmark' },
    { label: 'Ideal Stay', value: 'Half-Day Excursion', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Rock Art & Ancient Shelters', icon: 'temple' },
  ],
  overview: {
    heading: 'Where Ancient Humanity Speaks Through Stone',
    description:
      "Rising above the sal and teak forests of the Ratapani hills, the Bhimbetka rock shelters preserve one of the world's oldest and most continuous chronicles of prehistoric human expression. Inscribed as a UNESCO World Heritage Site in 2003, this archaeological sanctuary encompasses more than 750 sandstone shelters spanning thirty millennia from the Lower Palaeolithic to the medieval era. Ochre, manganese, and white mineral paintings vividly reveal hunting bands, ritual dances, ancestral fauna, and daily life carved into the living rock.",
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Archaeology Scholars, School & Academic Groups, Cultural Travellers',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Prehistoric Rock Paintings, Monumental Shelters, Ancient Landscapes and Woodland Silence',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: 'Half-Day Excursion (3–4 Hours on Site) from Bhopal',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Bhopal Day Circuits, Educational Itineraries, Inbound Cultural Routes & UNESCO Trails',
      },
    ],
  },
  highlights: [
    {
      id: 'bhimbetka-auditorium',
      name: 'Auditorium Rock Shelter',
      category: 'Prehistoric Landmark',
      description:
        'A colossal cathedral-like shelter featuring ancient cupules, early stone-age tool levels, and a monumental natural central rock pillar.',
      image: a('bhimbetka-auditorium'),
    },
    {
      id: 'bhimbetka-zoo-rock',
      name: 'Zoo Rock',
      category: 'Rock Art Gallery',
      description:
        "One of Bhimbetka's most celebrated canvases, dense with layered depictions of prehistoric animals including elephants, bison, sambar, and tigers.",
      image: a('bhimbetka-zoo-rock'),
    },
    {
      id: 'bhimbetka-boar-rock',
      name: 'Boar Rock',
      category: 'Iconic Rock Art',
      description:
        'A dramatic natural shelter dominated by a massive mythical boar motif, featuring horn-like tusks and tiny fleeing human figures in striking red pigment.',
      image: a('bhimbetka-boar-rock'),
    },
    {
      id: 'bhimbetka-turtle-rock',
      name: 'Turtle Rock',
      category: 'Geological Formation',
      description:
        'A remarkable natural sandstone outcrop eroded over millions of years into the lifelike silhouette of a colossal turtle resting among Vindhyan greenery.',
      image: a('bhimbetka-turtle-rock'),
    },
    {
      id: 'bhimbetka-hunting-scenes',
      name: 'Prehistoric Hunting Scenes',
      category: 'Mesolithic Art',
      description:
        'Dynamic narrative panels capturing Mesolithic hunting parties equipped with barbed spears, bows, and arrows pursuing game across rock faces.',
      image: a('bhimbetka-hunting-scenes'),
    },
    {
      id: 'bhimbetka-rock-shelters',
      name: 'Ancient Sandstone Shelters',
      category: 'Archaeological Landscape',
      description:
        'Rugged weathered sandstone formations and overhangs that provided sustained habitation, shade, and communal shelter for tens of thousands of years.',
      image: a('bhimbetka-rock-shelters'),
    },
  ],
  themes: [
    {
      id: 'rock-art-walk',
      title: 'Guided Prehistoric Rock Art Walk',
      icon: 'landmark',
      image: a('theme-rock-art-walk'),
      sights: [
        'Auditorium Cave (Shelter III F-24)',
        'Zoo Rock (Shelter III F-19)',
        'Boar Rock',
        'Turtle Rock Formation',
      ],
      note: 'Walk along the elevated wooden and paved pathways with expert archaeological guides, observing the most vivid and well-preserved prehistoric art panels.',
    },
    {
      id: 'human-history',
      title: 'Ancient Art & Human History Interpretation',
      icon: 'graduation',
      image: a('theme-human-history'),
      sights: [
        'Palaeolithic Cupule Markings',
        'Mesolithic Daily Life Panels',
        'Mineral Pigment Layers',
        'Historic Horseback Friezes',
      ],
      note: 'Unravel the evolution of early human consciousness through thirty thousand years of art, studying pigment sources, symbolic motifs, and tool assemblages.',
    },
    {
      id: 'rock-landscape',
      title: 'Sandstone Formations & Landscape Photography',
      icon: 'compass',
      image: a('theme-rock-landscape'),
      sights: [
        'Vindhyan Sandstone Cliffs',
        'Ratapani Forest Canopy',
        'Natural Balancing Rocks',
        'Hilltop Valley Lookouts',
      ],
      note: 'Capture the raw elemental beauty of sculpted sandstone towers, ancient tree roots clutching stone, and panoramic views over the deciduous sanctuary woodland.',
    },
    {
      id: 'bhojpur-excursion',
      title: 'Bhimbetka–Bhojpur Heritage Excursion',
      icon: 'temple',
      image: a('theme-bhojpur-excursion'),
      sights: [
        'Bhojeshwar Shiva Temple (28 km)',
        'Colossal Monolithic Lingam',
        'Architectural Blueprints on Stone',
        'Betwa River Valley',
      ],
      note: 'Pair the prehistoric wonder of Bhimbetka with a rewarding nearby excursion to Bhojpur, marveling at King Bhoja’s unfinished 11th-century colossal stone temple.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp sunny days and cool forest breezes make winter the most pleasant season for unhurried walking across the open rock shelters.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Warm days and blossoming forest vegetation; comfortable early mornings and late afternoons for viewing rock art in soft natural light.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'High temperatures in the Vindhyas; morning visits before noon are highly advised, with shaded resting spots along the boardwalk.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Vibrant green teak forests and misty hills; the rock surfaces become vivid, although rain showers require practical outdoor footwear.',
      tag: 'Atmospheric',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport in Bhopal (approx. 50 km) is the nearest airport, offering daily domestic connections to Delhi, Mumbai, and major Indian cities.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Bhopal Junction (45 km) and Rani Kamlapati Station (40 km) provide premier train connectivity on the main North–South and East–West rail corridors.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Located approximately 45 km south of Bhopal on the Bhopal–Hoshangabad highway (NH-46); a scenic and smooth 1-hour drive.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Chauffeur-driven private vehicles, tourist taxis, and guided walking routes along ASI paved boardwalks throughout the open complex.',
    },
  ],
  cta: {
    heading: 'Plan a Bhimbetka Heritage Journey for Your Clients',
    description:
      "Connect your travellers with humanity's earliest artistic expressions, ancient sandstone shelters, and memorable Central India heritage circuits.",
  },
  story: {
    heading: 'Thirty Thousand Years in the Shadow of the Rocks',
    paragraphs: [
      'Hidden deep inside the Vindhyan hills of Raisen, the Bhimbetka rock shelters were stumbled upon in 1957 by the archaeologist Dr. V. S. Wakankar. What he discovered was a vast prehistoric refuge where generations of early human communities lived, hunted, crafted tools, and painted their world upon the natural sandstone overhangs.',
      'From simple red ochre stick figures hunting game to elaborate multi-figure dances, maternity scenes, and religious processions spanning to medieval times, Bhimbetka presents a staggering continuity of human imagination. Set amid the tranquil woodland of the Ratapani hills, it invites visitors to stand before the very beginnings of human storytelling.',
    ],
    image: a('bhimbetka-hero'),
    imageAlt: 'Prehistoric sandstone rock shelter at Bhimbetka framed by forest',
    quote: 'Where the silent Vindhyan sandstone holds thirty millennia of human memory, art, and the dawn of creative consciousness.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Groups' },
    { icon: 'landmark', name: 'Heritage Travellers' },
    { icon: 'graduation', name: 'Archaeology & Academic Tours' },
    { icon: 'compass', name: 'Photographers & Explorers' },
    { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'heart', name: 'Curious Families' },
  ],
  fullGuide: [
    {
      title: 'UNESCO Prehistoric Rock Shelters',
      points: [
        'Auditorium Cave (Shelter III F-24): towering cavern with Acheulian Lower Palaeolithic stone tools and deep cupule marks.',
        'Zoo Rock (Shelter III F-19): over 250 animal figures painted across distinct cultural layers from Mesolithic to early historic periods.',
        'Boar Rock: celebrated painting of a colossal mythical horned boar facing a diminutive human silhouette.',
        'Shelter 15: dynamic hunting processions, communal dances, and ritual ceremonial figures.',
      ],
    },
    {
      title: 'Geology and Natural Environment',
      points: [
        'Vindhyan Sandstone: ancient sedimentary stone formations sculpted by wind and rain into balancing rocks and cave galleries.',
        'Ratapani Wildlife Sanctuary: surrounding forest home to leopards, sloth bears, chital, and vibrant central Indian birdlife.',
        'Boardwalk Trail: well-maintained 1.5 km pathway with interpretive signboards designed by the Archaeological Survey of India.',
      ],
    },
    {
      title: 'Itinerary and Regional Combinations',
      points: [
        'Bhojpur Temple (28 km): pair Bhimbetka with King Bhoja’s 11th-century unfinished colossal stone Shiva temple.',
        'Bhopal Heritage Base (45 km): combine with the tribal museum, Bharat Bhavan, and Sanchi Stupa on a UNESCO heritage triangle.',
        'Best Visiting Hours: morning light between 8:00 AM and 11:30 AM illuminates the paintings with natural indirect glow.',
      ],
    },
  ],
};
