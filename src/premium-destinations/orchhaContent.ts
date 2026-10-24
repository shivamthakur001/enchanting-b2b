import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/orchha/${name}.webp`;

export const orchhaContent: DestinationDetailContent = {
  id: 'orchha',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Orchha',
  subtitle: 'Where Royal Grandeur Meets the Sacred Betwa.',
  heroImage: a('orchha-hero'),
  tags: [
    'Bundela Kingdom',
    'Jahangir Mahal',
    'Ram Raja Temple',
    'Betwa Cenotaphs',
    'Bundelkhand Murals',
  ],
  quickFacts: [
    { label: 'Region', value: 'Niwari District, Bundelkhand', icon: 'pin' },
    { label: 'Heritage', value: 'Historic Bundela Kingdom', icon: 'landmark' },
    { label: 'Ideal Stay', value: 'Suggested 1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Monsoon Scenic)', icon: 'sun' },
    { label: 'Character', value: 'Palaces, Temples & Betwa River', icon: 'temple' },
  ],
  overview: {
    heading: 'The Regal Sanctuary of Bundelkhand',
    description:
      'Founded in the 16th century by the Bundela chieftain Rudra Pratap Singh, Orchha ("the hidden place") stands frozen in time on a granite-strewn island embraced by the whispering currents of the Betwa River. Renowned for its monumental palaces, soaring medieval temples, and multi-tiered riverside cenotaphs, Orchha represents the zenith of Bundela architectural brilliance and artistic patronage. Here, royal opulence harmonises with living devotion, where Lord Rama is uniquely worshipped as a reigning king amidst echoing temple chimes, intricate palace murals, and dramatic sunset silhouettes.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Travellers, Architecture Connoisseurs, Cultural FITs, Photography & Leisure Groups',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Bundela Palaces, Living Ram Raja Temple, Riverside Royal Chhatris & Betwa Sunset Panoramas',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: 'Suggested 1–2 Nights (or Seamless High-Value Day Circuit from Jhansi / Gwalior)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Key Anchor on Golden Triangle–Khajuraho Corridors, Luxury Heritage Stays & Inbound Itineraries',
      },
    ],
  },
  highlights: [
    {
      id: 'orchha-jahangir-mahal',
      name: 'Jahangir Mahal',
      category: 'Bundela–Mughal Palace',
      description:
        'A magnificent multi-tiered 17th-century palace built by Raja Bir Singh Deo, featuring graceful domed chhatris, ornamental balconies, courtyards, and delicate turquoise tilework.',
      image: a('orchha-jahangir-mahal'),
    },
    {
      id: 'orchha-raja-mahal',
      name: 'Raja Mahal',
      category: 'Royal Palace & Murals',
      description:
        'The historic seat of the Bundela sovereigns, famed for its austere geometric exterior giving way to sumptuous royal chambers and richly pigmented religious wall frescoes.',
      image: a('orchha-raja-mahal'),
    },
    {
      id: 'orchha-ram-raja-temple',
      name: 'Ram Raja Temple',
      category: 'Living Royal Temple',
      description:
        'A revered sacred sanctuary housed within a former royal palace, where Lord Rama is uniquely worshipped not merely as a deity, but as a living king with daily police guards of honour.',
      image: a('orchha-ram-raja-temple'),
    },
    {
      id: 'orchha-chaturbhuj-temple',
      name: 'Chaturbhuj Temple',
      category: 'Colossal Temple Architecture',
      description:
        'A soaring 16th-century cruciform sanctuary built on a monumental stone platform, distinguished by cavernous basilica-like halls and spires commanding panoramic valley views.',
      image: a('orchha-chaturbhuj-temple'),
    },
    {
      id: 'orchha-laxmi-narayan',
      name: 'Laxmi Narayan Temple',
      category: 'Temple-Fortress & Murals',
      description:
        'An ingenious triangular hybrid of fortress and temple architecture, celebrated for its well-preserved Bundela frescoes depicting mythological epics, court life, and historical battles.',
      image: a('orchha-laxmi-narayan'),
    },
    {
      id: 'orchha-royal-chhatris',
      name: 'Royal Chhatris of Orchha',
      category: 'Riverside Cenotaphs',
      description:
        'Fourteen grand multi-tiered stone cenotaphs commemorating Bundela rulers standing majestically along the boulder-strewn banks of the Betwa, renowned for dramatic sunset vistas.',
      image: a('orchha-royal-chhatris'),
    },
  ],
  themes: [
    {
      id: 'bundela-fort',
      title: 'Bundela Fort & Palace Heritage Walk',
      icon: 'landmark',
      image: a('theme-bundela-fort'),
      sights: [
        'Jahangir Mahal',
        'Raja Mahal Royal Chambers',
        'Sheesh Mahal & Courtyards',
        'Rai Praveen Mahal Gardens',
      ],
      note: 'A comprehensive guided exploration through the fortified palace island, revealing the architectural genius, royal rivalries, and Mughal-Bundela diplomacy of Central India.',
    },
    {
      id: 'sacred-murals',
      title: 'Sacred Temples & Mural Discovery',
      icon: 'temple',
      image: a('theme-sacred-murals'),
      sights: [
        'Ram Raja Temple Ceremonies',
        'Chaturbhuj Temple Ramparts',
        'Laxmi Narayan Temple Murals',
        'Sacred Processional Paths',
      ],
      note: 'Discover Orchha’s living devotional spirit and extraordinary Bundelkhand wall paintings, from ancient Ramayana narratives to detailed 19th-century historical chronicles.',
    },
    {
      id: 'betwa-chhatris',
      title: 'Betwa River & Royal Chhatris Photography',
      icon: 'compass',
      image: a('theme-betwa-chhatris'),
      sights: [
        'Fourteen Royal Cenotaphs',
        'Granite River Boulders',
        'Betwa Sunrise & Sunset Views',
        'Vulture Sanctuary Viewpoints',
      ],
      note: 'Capture the timeless reflection of Bundela cenotaphs in the tranquil waters of the Betwa, complemented by serene riverside walks and panoramic landscape vistas.',
    },
    {
      id: 'bundela-culture',
      title: 'Bundela History & Living Culture Trail',
      icon: 'graduation',
      image: a('theme-bundela-culture'),
      sights: [
        'Evening Aarti at Ram Raja',
        'Old Orchha Town Bazaars',
        'Local Brass & Textile Crafts',
        'Riverside Heritage Dining',
      ],
      note: 'An immersive experiential journey through town lanes, bustling pilgrim markets, and local craft ateliers, capped by the stirring evening guard of honour and aarti.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'Crisp, pleasant days with temperatures ranging from 10°C to 26°C. Ideal for exploring palace courtyards, climbing temple terraces, taking riverside walks, and enjoying al fresco dining.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Warm, dry days with blooming bougainvillea and golden evening light. Excellent for landscape photography across the Betwa River and witnessing colorful Bundelkhand festive traditions.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Daytime temperatures range from 28°C to 44°C. Suited for early morning monument explorations, leisurely poolside relaxation at heritage hotels, and attractive off-season contracted rates.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Monsoon showers transform the surrounding Vindhyan landscape into vibrant emerald green while the Betwa flows in full grandeur. Exercise standard safety precautions along river boulders.',
      tag: 'Atmospheric',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (GWL, ~125 km / 2.5–3 hrs) and Khajuraho Airport (HJR, ~175 km / 3.5–4 hrs) offer scheduled domestic connectivity, with seamless chauffeured highway transfers to Orchha.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Jhansi Junction (VGLJ, ~16–17 km / 25–30 mins) is the primary major railway gateway, served by Vande Bharat, Shatabdi, and Rajdhani expresses from Delhi, Mumbai, Agra, and Bhopal.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Orchha is well-connected via smooth four-lane highway links to Jhansi (17 km), Gwalior (125 km), Khajuraho (175 km), Shivpuri (115 km), and Agra (240 km), forming an ideal central circuit anchor.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured cars for regional excursions; compact town layout enables delightful guided walking circuits between palaces, temples, and the Betwa riverside cenotaphs.',
    },
  ],
  cta: {
    heading: 'Plan an Orchha Heritage Journey for Your Clients',
    description:
      'Orchha is one of Central India’s most evocative medieval destinations, offering a rare blend of majestic architectural heritage, spiritual living traditions, and peaceful riverside landscapes.',
  },
  story: {
    heading: 'Where Palaces Crown the Betwa and Kings Rule as Gods',
    paragraphs: [
      'Founded in the 16th century by Bundela king Rudra Pratap Singh, Orchha grew within the protective curve of the Betwa River into a fortress-capital of astonishing aesthetic daring. Its rulers forged an architectural idiom entirely their own—combining Rajput grandeur, delicate Mughal courtliness, and soaring indigenous temple forms.',
      'From the multi-tiered terraces of Jahangir Mahal to the solemn dignity of the fourteen royal cenotaphs watching over the rushing river, Orchha remains an intimate, unhurried enclave where centuries of royalty, living faith, and Bundelkhand countryside coalesce.',
    ],
    image: a('orchha-hero'),
    imageAlt: 'Regal silhouette of Orchha Jahangir Mahal and the Betwa River',
    quote: 'Where the stones of the Bundelas tell of empire, devotion, and the quiet music of the Betwa.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Groups' },
    { icon: 'landmark', name: 'Heritage Travellers' },
    { icon: 'graduation', name: 'Architecture Scholars' },
    { icon: 'compass', name: 'Landscape Photographers' },
    { icon: 'footprints', name: 'Independent FITs' },
    { icon: 'heart', name: 'Luxury Leisure Couples' },
  ],
  fullGuide: [
    {
      title: 'Bundela Island Palace Complex',
      points: [
        'Jahangir Mahal: 17th-century palace built by Raja Bir Singh Deo for Emperor Jahangir, featuring multi-tiered courtyards, carved brackets, and turquoise tilework.',
        'Raja Mahal: ancient seat of the Bundela kings featuring courtyards and wall frescoes of the Dashavatara and royal court.',
        'Sheesh Mahal: former royal retreat transformed into a heritage accommodation within the palace ramparts.',
        'Rai Praveen Mahal: two-storeyed brick palace and gardens built for the famed 17th-century poetess and courtesan Rai Praveen.',
      ],
    },
    {
      title: 'Sacred Architecture & Living Temples',
      points: [
        'Ram Raja Temple: the only shrine where Lord Rama is venerated as king, featuring daily armed police salutes.',
        'Chaturbhuj Temple: soaring multi-level spire and monumental halls built on a high stone plinth opposite the palace.',
        'Laxmi Narayan Temple: triangular fort-temple famed for its panoramic fresco murals depicting mythology and historical battles.',
      ],
    },
    {
      title: 'Riverside Cenotaphs & Landscape',
      points: [
        'Fourteen Royal Chhatris: majestic multi-domed Bundela cenotaphs lined along Kanchana Ghat on the Betwa.',
        'Betwa River Boulders: tranquil vantage points for sunrise and sunset photography over the river.',
      ],
    },
  ],
};
