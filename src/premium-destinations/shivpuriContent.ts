import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/shivpuri/${name}.webp`;

export const shivpuriContent: DestinationDetailContent = {
  id: 'shivpuri',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Shivpuri',
  subtitle: 'Where Scindia Royalty Meets Timeless Landscapes.',
  heroImage: a('shivpuri-hero'),
  tags: [
    'Scindia Legacy',
    'Royal Chhatris',
    'George Castle',
    'Survaya Garhi',
    'Narwar Fort',
  ],
  quickFacts: [
    { label: 'Region', value: 'Gwalior–Chambal, MP', icon: 'pin' },
    { label: 'Heritage', value: 'Scindia Royal Legacy', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Cenotaphs, Forts, Castles & Lakes', icon: 'temple' },
  ],
  overview: {
    heading: 'The Regal Summer Capital of the Scindias',
    description:
      'Nestled amidst the wooded plateaus and tranquil lakes of Northern Madhya Pradesh, Shivpuri served as the cherished summer capital of the Scindia rulers of Gwalior. Surrounded by dense dry-deciduous forests that once formed the private royal hunting reserves of kings and emperors, Shivpuri presents a distinctive royal identity. Here, marble royal cenotaphs designed in a rare synthesis of Hindu and Mughal architectural styles stand within landscaped Mughal gardens, while British-era stone castles crown forested hilltops and medieval fortresses watch over ancient trade routes. Shivpuri is also deeply revered as the sacred soil where the legendary 1857 freedom struggle leader Tatya Tope made the ultimate sacrifice for India’s independence.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Scindia Dynasty Historians, Freedom Movement Enthusiasts & Nature-Heritage Travellers',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Marble Royal Cenotaphs, Hilltop English-Style Castles, Ancient Monastic Forts & Serene Lake Vistas',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1–2 Nights (or High-Value Circuit Anchor Linking Gwalior, Jhansi & Chanderi)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Uncrowded Boutique Heritage Stays, Heritage Add-On to Gwalior & Golden Triangle Extensions',
      },
    ],
  },
  highlights: [
    {
      id: 'shivpuri-royal-chhatris',
      name: 'Scindia Royal Chhatris',
      category: 'Marble Memorial Architecture',
      description:
        'Graceful marble cenotaphs of Maharaja Madhav Rao Scindia and Maharani Sakhya Raje Scindia set in formal Charbagh gardens, blending Rajput pavilions, Mughal arches, and fine pietra dura inlay.',
      image: a('shivpuri-royal-chhatris'),
    },
    {
      id: 'shivpuri-george-castle',
      name: 'George Castle',
      category: 'Colonial Forest Castle',
      description:
        'A historic stone castle built in 1911 by Maharaja Jivaji Rao Scindia atop the highest crest of Madhav National Park for King George V, commanding sweeping views of lakes and dense forests.',
      image: a('shivpuri-george-castle'),
    },
    {
      id: 'shivpuri-survaya-garhi',
      name: 'Survaya Garhi',
      category: '10th-Century Monastic Fortress',
      description:
        'A fortified medieval complex enclosing a 10th-century Hindu monastery, open stepwell (baoli), and three intricately carved sandstone Shiva temples renowned for detailed stone reliefs.',
      image: a('shivpuri-survaya-garhi'),
    },
    {
      id: 'shivpuri-narwar-fort',
      name: 'Narwar Fort',
      category: 'Medieval Hilltop Citadel Excursion',
      description:
        'A dramatic hilltop fortress perched 500 feet above the Sind River (approx. 42 km from Shivpuri), associated with Raja Nal and Damayanti, featuring Rajput-style gateways and medieval palaces.',
      image: a('shivpuri-narwar-fort'),
    },
    {
      id: 'shivpuri-tatya-tope',
      name: 'Tatya Tope Memorial',
      category: 'National Freedom Landmark',
      description:
        'A historic memorial and statue honoring the legendary hero of the 1857 Indian War of Independence, situated near Gandhi Park at the revered site of his martyrdom.',
      image: a('shivpuri-tatya-tope'),
    },
    {
      id: 'shivpuri-sakhya-sagar',
      name: 'Sakhya Sagar Lake',
      category: 'Scenic Royal Reservoir',
      description:
        'A historic lake created from the Manier River bordering Madhav forest, famous for its royal-era sailing club heritage, rich resident birdlife, and tranquil sunset reflections.',
      image: a('shivpuri-sakhya-sagar'),
    },
  ],
  themes: [
    {
      id: 'scindia-heritage',
      title: 'Scindia Royal Heritage Walk',
      icon: 'landmark',
      image: a('theme-scindia-heritage'),
      sights: [
        'Madhav Rao Scindia Chhatri',
        'Maharani Sakhya Raje Cenotaph',
        'Mughal-Style Charbagh Gardens',
        'Ornamental Victorian Inlay Work',
      ],
      note: 'A guided walk through the serene Scindia memorial complex, exploring the harmonious integration of Hindu shikhara and Mughal dome elements alongside living musical and prayer rituals.',
    },
    {
      id: 'forts-temples',
      title: 'Forts & Ancient Temples Trail',
      icon: 'temple',
      image: a('theme-forts-temples'),
      sights: [
        'Survaya Garhi Monastic Ruins (21 km)',
        'Ancient Stone-Cut Stepwell (Baoli)',
        'Narwar Fort Hilltop Ramparts (42 km)',
        'Sind River Gorge Viewpoints',
      ],
      note: 'A captivating archaeological excursion connecting 10th-century monastic stone carvings at Survaya with the formidable, uncrowded medieval bastions and royal palace ruins of Narwar Fort.',
    },
    {
      id: 'freedom-history',
      title: 'Freedom History & Cultural Discovery',
      icon: 'graduation',
      image: a('theme-freedom-history'),
      sights: [
        'Tatya Tope Martyrdom Memorial',
        'Historic Gandhi Park',
        'Shivpuri District Museum Gallery',
        'Old Cantonment Heritage Quarter',
      ],
      note: 'Trace Shivpuri’s pivotal chapter in India’s 1857 struggle for independence, unravelling the final campaign, trial, and enduring folklore of the master guerrilla commander Tatya Tope.',
    },
    {
      id: 'lake-forest',
      title: 'Royal Lakes & Forest Heritage Experience',
      icon: 'compass',
      image: a('theme-lake-forest'),
      sights: [
        'Sakhya Sagar Lake Promenade',
        'George Castle Hilltop Lookout',
        'Madhav Forest Heritage Landscapes',
        'Madhav Sagar Reservoir Viewpoints',
      ],
      note: 'Experience the regal outdoor lifestyle of the Scindias, visiting panoramic lake viewpoints and the historic hilltop George Castle (subject to current park entry permissions and timings).',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp, cool sunny days with temperatures between 10°C and 25°C. The prime travel season for walking garden memorials, exploring Survaya Garhi and Narwar Fort, and visiting lakeside viewpoints.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Pleasant warm days and golden light with daytime temperatures from 16°C to 30°C. Excellent for outdoor photography across the marble Chhatris and enjoying unhurried countryside drives.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Warm daytime temperatures ranging from 28°C to 42°C across Northern MP. Recommended for early morning heritage visits, shaded garden walks, and quiet off-season retreats.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Refreshing monsoon rains transform the deciduous forests of Shivpuri into vibrant green. Sakhya Sagar lake fills, streams cascade through the hills, and George Castle offers dramatic misty panoramas.',
      tag: 'Scenic & Lush',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (GWL, ~126 km / 2.5–3 hrs) is the closest commercial airport, offering scheduled domestic flights to Delhi, Mumbai, Bengaluru, and Hyderabad with onward highway transfers.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Shivpuri Railway Station (SVPI) provides direct train connectivity to Gwalior, Bhopal, Indore, and Delhi; Jhansi Junction (~100 km) serves as the primary high-speed mainline railway hub.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Excellent four-lane national highway links via NH-46 and NH-27 connecting Gwalior (120 km), Jhansi (100 km), Chanderi (105 km), Guna (95 km), and Bhopal (290 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured cars for local heritage visits and excursions to Survaya Garhi (21 km), Narwar Fort (42 km), and permitted viewpoints inside Madhav National Park.',
    },
  ],
  cta: {
    heading: 'Plan a Shivpuri Heritage Journey for Your Clients',
    description:
      'Weave together the royal summer seat of the Scindias, intricate marble Chhatris, 10th-century monastic ruins, and scenic lake landscapes in an authentic Central India itinerary.',
  },
  story: {
    heading: 'The Royal Summer Retreat of Northern Madhya Pradesh',
    paragraphs: [
      'Framed by dense forests and undulating hills, Shivpuri was chosen by the Scindia Maharajas of Gwalior as their private summer capital and hunting haven. Here, away from the intense heat of the northern plains, the royal family constructed tranquil water bodies, laid out manicured gardens, and built memorial pavilions of breathtaking marble refinement.',
      'Yet Shivpuri’s soil also echoes with deeper historical narratives—from ancient 10th-century monasteries carved in sandstone at Survaya, to the heroic defiance of 1857 freedom struggle leader Tatya Tope. Today, it remains an uncrowded, evocative destination where royal architecture and central Indian countryside converge in quiet harmony.',
    ],
    image: a('shivpuri-hero'),
    imageAlt: 'Panoramic view of Scindia Royal Chhatris and marble pavilions in Shivpuri',
    quote: 'Where Scindia royal memorials stand in quiet marble grace, surrounded by timeless lakes and the historic forests of Madhav.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Tour Groups' },
    { icon: 'landmark', name: 'Scindia Dynasty Historians' },
    { icon: 'graduation', name: 'Freedom Struggle Researchers' },
    { icon: 'compass', name: 'Heritage Photographers' },
    { icon: 'footprints', name: 'Independent Regional FITs' },
    { icon: 'heart', name: 'Scenic Heritage Seekers' },
  ],
  fullGuide: [
    {
      title: 'Scindia Memorial Architecture',
      points: [
        'Madhav Rao Scindia Chhatri: marble cenotaph featuring intricate pietra dura lapidary inlay, fluted columns, and an equestrian statue.',
        'Sakhya Raje Scindia Chhatri: elegant multi-pillared marble monument built in an open courtyard facing a tranquil fountain pool.',
        'Charbagh Layout: Persian-style four-part formal garden with stone walkways and water channels enclosing the royal memorials.',
      ],
    },
    {
      title: 'Medieval Forts & Archaeological Sites',
      points: [
        'Survaya Garhi: 10th-century fortified Hindu monastery and temple complex featuring delicate ceiling medallions and carved friezes.',
        'Narwar Fort: historic hilltop fort with Rajput-style gateways, Kachwaha palaces, and views over the Sind river valley.',
      ],
    },
    {
      title: 'Freedom History & Royal Lakes',
      points: [
        'Tatya Tope Memorial: memorial garden and life-size bronze statue commemorating the 1857 revolutionary general.',
        'George Castle: English-style stone turreted castle built inside Madhav forest commanding 360-degree views.',
        'Sakhya Sagar & Madhav Sagar: historic reservoirs constructed to provide water to the summer capital and game sanctuary.',
      ],
    },
  ],
};
