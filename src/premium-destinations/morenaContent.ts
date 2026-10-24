import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/morena/${name}.webp`;

export const morenaContent: DestinationDetailContent = {
  id: 'morena',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Morena',
  subtitle: 'Where Ancient Temples Tell Timeless Stories.',
  heroImage: a('morena-hero'),
  tags: [
    'Bateshwar Temples',
    'Mitawali Chausath Yogini',
    'Padavali Temple',
    'Kakanmath Sihoniya',
    'Gurjara-Pratihara Art',
  ],
  quickFacts: [
    { label: 'Region', value: 'Chambal–Gwalior, MP', icon: 'pin' },
    { label: 'Heritage', value: 'Pratihara & Kachchhapaghata', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Ancient Temples, Forts & Sculptures', icon: 'temple' },
  ],
  overview: {
    heading: 'The Sacred Temple Sanctuary of the Chambal Valley',
    description:
      'Set against the rugged contours and undulating ravine plateaus of Northern Madhya Pradesh, the Morena district preserves one of India’s most extraordinary clusters of early medieval Hindu architecture. Flourishing under the Gurjara-Pratihara and Kachchhapaghata dynasties between the 8th and 13th centuries, this landscape became a fertile canvas for experimental sacred masonry. From the awe-inspiring restoration of over two hundred tumbled sandstone shrines at Bateshwar to the rare hypaethral circular stone colonnades of Mitawali and the monumental, mortarless balance of the 115-foot Kakanmath temple, Morena presents an open-air museum of temple evolution, stone sculpture, and deep archaeological wonder.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Archaeology Enthusiasts, Medieval Architecture Scholars, Heritage Photographers & Cultural FITs',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Restored Bateshwar Temple Forest, Circular Mitawali Colonnades, Ornate Padavali Carvings & Towering Kakanmath',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1–2 Nights (or Seamless High-Value Excursion from Gwalior / Agra)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Specialized Heritage Trails, Uncrowded Archaeological Discoveries & Prime Gwalior Hub Add-On',
      },
    ],
  },
  highlights: [
    {
      id: 'morena-bateshwar-temples',
      name: 'Bateshwar Temple Complex',
      category: 'Gurjara-Pratihara Temple Cluster',
      description:
        'A mesmerizing sanctuary of over 200 ancient sandstone shrines dedicated to Shiva and Vishnu, dating from the 8th to 10th centuries, painstakingly reassembled from ruins by the ASI.',
      image: a('morena-bateshwar-temples'),
    },
    {
      id: 'morena-mitawali-temple',
      name: 'Mitawali Chausath Yogini Temple',
      category: 'Circular Tantric Temple',
      description:
        'A rare 14th-century hypaethral circular temple crowning an isolated 100-foot hill, featuring an open ring of 64 stone-pillared chambers enclosing a central Shiva shrine with panoramic valley views.',
      image: a('morena-mitawali-temple'),
    },
    {
      id: 'morena-padavali',
      name: 'Padavali Fort & Shiva Temple',
      category: 'Fortified Temple & Relief Carvings',
      description:
        'A 10th-century Kachchhapaghata temple fortified in the 18th century, celebrated for its spectacular mukhamandapa ceiling and pillars carved with dense narratives from the Ramayana, Mahabharata, and Krishna lila.',
      image: a('morena-padavali'),
    },
    {
      id: 'morena-kakanmath',
      name: 'Kakanmath Temple, Sihoniya',
      category: 'Monumental Medieval Temple',
      description:
        'An imposing 11th-century Shiva temple built by Kachchhapaghata king Kirtiraj rising 115 feet into the sky, constructed entirely from piled sandstone blocks standing without mortar.',
      image: a('morena-kakanmath'),
    },
    {
      id: 'morena-sabalgarh-fort',
      name: 'Sabalgarh Fort',
      category: 'Hilltop Fortress Excursion',
      description:
        'A formidable 16th-century fortress situated on a high cliff overlooking the Chambal basin (separate excursion ~75 km), featuring layered stone ramparts, battlements, and historic palaces.',
      image: a('morena-sabalgarh-fort'),
    },
    {
      id: 'morena-sihoniya-temples',
      name: 'Sihoniya Heritage Temples',
      category: 'Ancient Capital Monuments',
      description:
        'The historic capital of the Kachchhapaghatas, preserving the sacred Ambika Devi temple and 11th-century Digambar Jain tirthankara rock sculptures echoing the town’s ancient prominence.',
      image: a('morena-sihoniya-temples'),
    },
  ],
  themes: [
    {
      id: 'temple-circuit',
      title: 'Mitawali–Padavali–Bateshwar Heritage Circuit',
      icon: 'landmark',
      image: a('theme-temple-circuit'),
      sights: [
        'Mitawali Circular Yogini Shrine',
        'Padavali Fortified Mukhamandapa',
        'Bateshwar Reassembled Temple Valley',
        'Ancient Sandstone Water Reservoirs',
      ],
      note: 'The premier archaeological triangle of Morena, taking travellers on an unhurried journey through circular hill temples, dense narrative epic carvings, and the forest sanctuary of Bateshwar.',
    },
    {
      id: 'kakanmath-sihoniya',
      title: 'Kakanmath & Sihoniya Temple Discovery',
      icon: 'temple',
      image: a('theme-kakanmath-sihoniya'),
      sights: [
        'Kakanmath 115-Ft Towering Shikhara',
        'Dry-Sandstone Architectural Balance',
        'Ambika Devi Temple Shrines',
        'Historic Sihoniya Jain Idols',
      ],
      note: 'Discover one of Central India’s most astonishing structural marvels, examining how massive sandstone blocks have stood for a millennium without mortar against the open skies of Sihoniya.',
    },
    {
      id: 'sabalgarh-heritage',
      title: 'Sabalgarh Fort & Regional History Trail',
      icon: 'compass',
      image: a('theme-sabalgarh-heritage'),
      sights: [
        'Sabalgarh High Cliff Ramparts',
        'Nawal Singh Palace Courtyards',
        'Chambal Valley Ravine Lookouts',
        'Historic Moat and Bastions',
      ],
      note: 'A rewarding day excursion westward across the Morena district to explore Sabalgarh Fort’s imposing masonry and panoramic vistas over the rugged Chambal river basin (allow adequate travel time).',
    },
    {
      id: 'chambal-culture',
      title: 'Chambal Landscape & Living Culture Experience',
      icon: 'graduation',
      image: a('theme-chambal-culture'),
      sights: [
        'Historic Chambal Ravine Vistas',
        'Rural Mustard Countryside (Winter)',
        'Traditional Morena Gajak Confectionery',
        'Regional Stonecraft & Pottery Units',
      ],
      note: 'Experience the unique natural terrain and cultural identity of the Chambal region, combining scenic ravine viewpoints with rural village hospitality and Morena’s renowned culinary sweets.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp, cool sunny days and clear skies with temperatures ranging between 10°C and 25°C. The prime travel season for climbing the hill steps of Mitawali, exploring Bateshwar, and photographing stone carvings.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Pleasant warm days with daytime temperatures from 16°C to 30°C. Blooming yellow mustard fields create a striking visual contrast against the ancient ochre sandstone monuments.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Intense dry heat across the northern Chambal plains with temperatures reaching 35°C to 44°C. Monument explorations are advised strictly in the early morning hours before midday.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Monsoon rains revitalize the dry landscape, turning ravine scrubland green and filling seasonal forest streams around Bateshwar. Check rural road conditions during heavy rainfall.',
      tag: 'Scenic & Green',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Rajmata Vijayaraje Scindia Airport, Gwalior (GWL, ~50 km / 1–1.25 hrs from Morena city) provides scheduled domestic flights connecting Delhi, Mumbai, Bengaluru, and Hyderabad.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Morena Railway Station (MRA) is a major stop on the Delhi–Mumbai/Chennai trunk mainline; Gwalior Junction (GWL, 40 km) serves as an additional premier railhead with high-speed Vande Bharat and Shatabdi trains.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Superb four-lane connectivity along the NH-44 highway corridor: Gwalior (40 km / 45 mins), Agra (85 km / 1.75 hrs), Dholpur (30 km), and Delhi (280 km via Yamuna Expressway).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured vehicles are essential to navigate between the rural, dispersed monument clusters of Mitawali, Padavali, Bateshwar, Sihoniya (35 km), and Sabalgarh (75 km).',
    },
  ],
  cta: {
    heading: 'Plan a Morena Heritage Journey for Your Clients',
    description:
      'Connect your travellers with the architectural wonders of the Gurjara-Pratiharas, circular hill temples, and reassembled ancient shrines in an unforgettable Central India archaeological itinerary.',
  },
  story: {
    heading: 'Where Sandstone Tells the Story of Ancient Faith',
    paragraphs: [
      'In the quiet hinterlands of the Chambal valley, far from tourist thoroughfares, lies an archaeological treasury of breathtaking scope. Between the 8th and 13th centuries, royal builders and master stone carvers sculpted a landscape of deep sacred reverence, constructing hundreds of temples that captured the finest artistic expressions of early medieval India.',
      'Forgotten for centuries in the scrub forests, these monuments have re-emerged as monuments of world renown—from the astonishing rebirth of Bateshwar’s two hundred temples to the timeless symmetry of Mitawali and the soaring wonder of Kakanmath. Morena stands as a powerful testament to the enduring genius of India’s temple artisans.',
    ],
    image: a('morena-hero'),
    imageAlt: 'Ancient sandstone temples of Bateshwar in Morena surrounded by forest',
    quote: 'Where two hundred restored shrines rise from the forest floor, and circular stone temples watch over the Chambal valley.',
  },
  travellers: [
    { icon: 'users', name: 'Archaeological Tour Groups' },
    { icon: 'landmark', name: 'Medieval Art & Temple Scholars' },
    { icon: 'graduation', name: 'Heritage Researchers' },
    { icon: 'compass', name: 'Architectural Photographers' },
    { icon: 'footprints', name: 'Informed Cultural FITs' },
    { icon: 'heart', name: 'Gwalior Day-Circuit Explorers' },
  ],
  fullGuide: [
    {
      title: 'Mitawali–Padavali–Bateshwar Triangle',
      points: [
        'Bateshwar: extensive complex of 200+ Shiva and Vishnu temples reassembled by the ASI under archaeologist K. K. Muhammed.',
        'Mitawali Chausath Yogini: 14th-century circular temple set on an isolated hill with 64 peripheral pillared shrines.',
        'Padavali: 10th-century temple fortress featuring a richly sculpted mandapa with intricate friezes of Hindu epics.',
      ],
    },
    {
      title: 'Sihoniya & Kakanmath Complex',
      points: [
        'Kakanmath: colossal 11th-century Kachchhapaghata temple rising 115 feet, built without cementing mortar.',
        'Ambika Devi Temple: medieval shrine dedicated to goddess Ambika, preserving historic carved pillars and relief panels.',
        'Sihoniya Jain Sculptures: colossal 11th-century Digambar Jain tirthankara stone idols from the ancient Kachchhapaghata capital.',
      ],
    },
    {
      title: 'Sabalgarh & Regional Excursions',
      points: [
        'Sabalgarh Fort: 16th-century cliff-top fortress with defensive bastions and palaces overlooking the Chambal basin.',
        'Chambal Valley Landscapes: dramatic ravine topography offering unique geological vistas and cultural traditions.',
      ],
    },
  ],
};
