import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/gwalior/${name}.webp`;

export const gwaliorContent: DestinationDetailContent = {
  id: 'gwalior',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Gwalior',
  subtitle: 'Where Fortresses Echo with Royal Legends.',
  heroImage: a('gwalior-hero'),
  tags: [
    'Tomar Dynasty',
    'Scindia Legacy',
    'Gwalior Fort',
    'Tansen Musical Heritage',
    'Jai Vilas Palace',
  ],
  quickFacts: [
    { label: 'Region', value: 'Gwalior–Chambal, MP', icon: 'pin' },
    { label: 'Heritage', value: 'Tomar & Scindia Royal Legacy', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Forts, Palaces, Temples & Music', icon: 'temple' },
  ],
  overview: {
    heading: 'The Impregnable Citadel of Royal Splendour',
    description:
      'Perched atop a sheer three-kilometre-long sandstone plateau rising precipitously above the plains of Northern Madhya Pradesh, Gwalior is an enduring citadel of dynastic prestige, military defiance, and refined cultural genius. Celebrated by the Mughal Emperor Babur as "the pearl amongst the fortresses of Hind", this historic royal city preserves an extraordinary lineage bridging the 8th-century Pratiharas, the romantic 15th-century Tomar renaissance under Raja Man Singh, the Mughal imperial era, and the opulent 19th-century Scindia dynasty. Beyond its monumental ramparts, Gwalior is the revered cradle of Hindustani classical music—the home of the legendary musical maestro Tansen and the venerable Gwalior Gharana.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Royal History Buffs, Classical Music Enthusiasts & Golden Triangle Travellers',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Colossal Hilltop Ramparts, Vivid Turquoise Tilework, Royal Scindia Grandeur & Classical Musical Shrines',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1–2 Nights (or High-Value Strategic Hub for Agra, Chambal, Datia & Orchha Circuits)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Key Anchor on Delhi–Agra–Gwalior–Khajuraho Corridors, Luxury Heritage Stays & Inbound FITs',
      },
    ],
  },
  highlights: [
    {
      id: 'gwalior-fort',
      name: 'Gwalior Fort',
      category: 'Hilltop Fortress',
      description:
        'A monumental defensive bastion stretching nearly three kilometres along an isolated sandstone hill, featuring ancient gateways, towering bastions, and panoramic city vistas.',
      image: a('gwalior-fort'),
    },
    {
      id: 'gwalior-man-mandir',
      name: 'Man Mandir Palace',
      category: 'Tomar Royal Architecture',
      description:
        'A romantic 15th-century palace built by Raja Man Singh Tomar, renowned for its spectacular friezes of yellow and turquoise blue enamelled tiles depicting ducks, elephants, and peacocks.',
      image: a('gwalior-man-mandir'),
    },
    {
      id: 'gwalior-gujari-mahal',
      name: 'Gujari Mahal Archaeological Museum',
      category: 'Palace Museum & Sculpture',
      description:
        'Built by Raja Man Singh for his warrior queen Mrignayani, now housing priceless archaeological treasures including the world-famous 10th-century Salabhanjika yakshi sculpture.',
      image: a('gwalior-gujari-mahal'),
    },
    {
      id: 'gwalior-sas-bahu',
      name: 'Sas Bahu Temples',
      category: 'Medieval Stone Temples',
      description:
        'A magnificent pair of 11th-century carved sandstone temples dedicated to Lord Vishnu, celebrated for intricately layered pillars, multi-tiered ceilings, and fine stone lattice work.',
      image: a('gwalior-sas-bahu'),
    },
    {
      id: 'gwalior-jai-vilas',
      name: 'Jai Vilas Palace & Scindia Museum',
      category: 'Royal Palace & Museum',
      description:
        'The lavish 19th-century residence of the Scindia dynasty blending Italian, Tuscan, and Corinthian styles, home to the gold-leaf Durbar Hall and the world’s largest crystal chandeliers.',
      image: a('gwalior-jai-vilas'),
    },
    {
      id: 'gwalior-tansen-tomb',
      name: 'Tansen’s Tomb',
      category: 'Musical & Historical Shrine',
      description:
        'The historic Mughal-era memorial of Mian Tansen, legendary jewel of Emperor Akbar’s court, set beside the graceful domed tomb of Sufi saint Muhammad Ghaus amidst shaded gardens.',
      image: a('gwalior-tansen-tomb'),
    },
  ],
  themes: [
    {
      id: 'fort-heritage',
      title: 'Gwalior Fort & Palace Heritage Walk',
      icon: 'landmark',
      image: a('theme-fort-heritage'),
      sights: [
        'Man Mandir Palace',
        'Teli Ka Mandir (Dravidian Shikhara)',
        'Karan Mahal & Vikram Mahal',
        'Jauhar Kund & Suraj Kund',
      ],
      note: 'Walk through centuries of royal architecture atop the colossal plateau, discovering defensive innovations, underground passages, and Tomar artistry with expert heritage guides.',
    },
    {
      id: 'scindia-palace',
      title: 'Scindia Royal Heritage & Museum Trail',
      icon: 'sparkles',
      image: a('theme-scindia-palace'),
      sights: [
        'Jai Vilas Palace Durbar Hall',
        'Scindia Family Museum Galleries',
        'Model Silver Dining Train',
        'Royal Armor & Antique Carriage Wing',
      ],
      note: 'Step into the opulent world of the Scindia rulers, marvelling at gold-leaf baroque ceilings, royal regalia, rare European crystal collections, and historic treaty archives.',
    },
    {
      id: 'tansen-music',
      title: 'Tansen Music & Cultural Heritage Trail',
      icon: 'graduation',
      image: a('theme-tansen-music'),
      sights: [
        'Tansen’s Tomb & Memorial Courtyard',
        'Tomb of Sufi Saint Muhammad Ghaus',
        'Traditional Tamarind Tree Legacy',
        'Gwalior Gharana Music Institutions',
      ],
      note: 'Immerse in the cradle of Indian classical music, unravelling the legends of Tansen’s ragas, the annual Tansen Samaroh festival heritage, and generations of Dhrupad mastery.',
    },
    {
      id: 'jain-temples',
      title: 'Ancient Temples & Jain Rock-Cut Discovery',
      icon: 'temple',
      image: a('theme-jain-temples'),
      sights: [
        'Sas Bahu (Sahastrabahu) Temples',
        'Gopachal Parvat Rock Sculptures',
        'Urwahi Ravine Colossal Tirthankaras',
        'Chaturbhuj Temple (Zero Inscription)',
      ],
      note: 'Explore towering 15th-century rock-cut Jain colossi carved into fort cliff faces, alongside early medieval temples including the famous site of the world’s oldest recorded zero digit inscription.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'Crisp, sunny days and cool pleasant evenings with temperatures ranging between 10°C and 25°C. Ideal for walking the fort ramparts, museum visits, and the December Tansen Samaroh music festival.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Gentle warmth and clear skies with daytime temperatures between 18°C and 30°C. Perfect for unhurried outdoor exploration, open-air monument photography, and comfortable inter-city road travel.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Intense dry heat across the northern plains with daytime temperatures reaching 35°C to 45°C. Recommended for early morning fort walks and afternoon air-conditioned museum tours at Jai Vilas Palace.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Revitalising rains bring dramatic skies and vivid greenery to the fort hill and Chambal valley. Pleasant breezes sweep across the high ramparts, though rainfall may require flexible sightseeing.',
      tag: 'Atmospheric',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (Rajmata Vijaya Raje Scindia Airport / GWL) features a brand new modern terminal with regular scheduled flights connecting Delhi, Mumbai, Bengaluru, Hyderabad, and major metros.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Gwalior Junction (GWL) is a premier station on the Delhi–Mumbai/Chennai main railway corridor, served by multiple daily high-speed Vande Bharat, Gatimaan, Shatabdi, and Rajdhani expresses.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Direct access via smooth multi-lane highways: Agra (120 km / 2.5 hrs via NH-44), Jhansi/Orchha (100–120 km / 2 hrs), Delhi (330 km / 5.5 hrs via Yamuna Expressway), and Khajuraho (280 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured vehicles for seamless fortress hill ascents and city sightseeing; auto-rickshaws for traditional city bazaars; well-paved walking trails across the fort plateau.',
    },
  ],
  cta: {
    heading: 'Plan a Gwalior Heritage Journey for Your Clients',
    description:
      'Unite the grandeur of India’s most formidable hilltop fortress, the opulence of Scindia royal palaces, and the timeless melodies of Tansen in a tailored North & Central India itinerary.',
  },
  story: {
    heading: 'The Rock of Gibraltar of the East',
    paragraphs: [
      'Rising dramatically above the surrounding plains, the sandstone bluff of Gwalior has served as a strategic prize for empires since antiquity. Over twelve centuries, kings, sultans, Mughals, Marathas, and the British fought to command its ramparts, each dynasty leaving an indelible imprint on its ramparts.',
      'Yet Gwalior is as much a citadel of the arts as of arms. Here, Raja Man Singh Tomar composed classical ragas and crafted palaces adorned with luminous turquoise glaze; here Mian Tansen sang melodies that legends claim could kindle flame; and here the Scindias cultivated an era of grand European-inspired royal courtliness.',
    ],
    image: a('gwalior-hero'),
    imageAlt: 'Panoramic view of Gwalior Fort illuminated at dusk',
    quote: 'Where formidable medieval ramparts guard twelve centuries of royal valour, architectural marvels, and immortal classical music.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Tour Groups' },
    { icon: 'landmark', name: 'Fort & Military Historians' },
    { icon: 'graduation', name: 'Music & Art Connoisseurs' },
    { icon: 'compass', name: 'Heritage Photographers' },
    { icon: 'footprints', name: 'Golden Triangle FITs' },
    { icon: 'heart', name: 'Luxury Palace Leisure Guests' },
  ],
  fullGuide: [
    {
      title: 'The Great Gwalior Fort Complex',
      points: [
        'Man Mandir Palace: late 15th-century masterpiece with turquoise and yellow enamelled tilework, elephant friezes, and tiered courtyards.',
        'Gujari Mahal: stone palace museum containing the celebrated 10th-century Salabhanjika sculpture and rare archaeological relics.',
        'Teli Ka Mandir: 8th-century 30-metre-tall monument blending Dravidian barrel-vaulted shikhara with North Indian nagara motifs.',
        'Sas Bahu Temples: twin 11th-century sandstone temples dedicated to Vishnu, adorned with intricate multi-tiered relief carvings.',
      ],
    },
    {
      title: 'Scindia Dynasty & Royal Heritage',
      points: [
        'Jai Vilas Palace: 1874 Italian-Corinthian palace complex designed by Sir Michael Filose for Maharaja Jayajirao Scindia.',
        'Durbar Hall: magnificent gold-leaf assembly hall featuring two 12.5-metre-tall Belgian crystal chandeliers.',
        'Model Silver Train: electric solid silver dining train carrying decanters and cigars across banquet tables.',
      ],
    },
    {
      title: 'Musical Legacy & Sacred Monuments',
      points: [
        'Tansen’s Tomb: simple and graceful Mughal memorial honoring the father of Hindustani classical music.',
        'Tomb of Muhammad Ghaus: 16th-century Sufi saint’s tomb famed for extraordinary pierced stone jali screens.',
        'Gopachal Parvat: colossal 15th-century rock-cut Jain tirthankara idols lining the sheer cliff faces along the Urwahi approach.',
      ],
    },
  ],
};
