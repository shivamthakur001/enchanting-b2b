import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/chanderi/${name}.webp`;

export const chanderiContent: DestinationDetailContent = {
  id: 'chanderi',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Chanderi',
  subtitle: 'Where Royal History Meets the Art of Weaving.',
  heroImage: a('chanderi-hero'),
  tags: [
    'Medieval Forts',
    'Chanderi Handloom',
    'Malwa Sultanate',
    'Jain Heritage',
    'Bundela Architecture',
  ],
  quickFacts: [
    { label: 'Region', value: 'Ashoknagar, Bundelkhand–Malwa', icon: 'pin' },
    { label: 'Heritage', value: 'Medieval Forts & Weaving', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Feb', icon: 'sun' },
    { label: 'Character', value: 'Forts, Palaces & Handloom', icon: 'temple' },
  ],
  overview: {
    heading: 'The Weaver’s Citadel of Central India',
    description:
      'Perched dramatically among the Vindhyan hills at the historic border of Malwa and Bundelkhand, Chanderi is a town where monumental medieval stone architecture coexists with six centuries of living textile art. Controlled across eras by the Pratiharas, the Delhi and Malwa Sultanates, the Mughals, and the Bundela Rajputs, Chanderi retains an astonishing density of stone forts, arched palaces, rock-cut passes, and ancient stepwells alongside the world-famous gossamer Chanderi silk and cotton weaving tradition.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Textile & Craft Enthusiasts, Heritage Connoisseurs, Photographers and Medieval History Scholars',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Hilltop Citadels, Monumental Gates, Master Weavers at the Loom and Timeless Streets',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1N / 2D to 2N / 3D for Town, Fort & Craft Hamlet Visits',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Special-Interest Craft Tours, Cultural FITs, Regional Heritage Circuits & Inbound Groups',
      },
    ],
  },
  highlights: [
    {
      id: 'chanderi-fort',
      name: 'Chanderi Fort',
      category: 'Medieval Fortress',
      description:
        'A commanding hill fortress rising two hundred metres above the town, featuring the historic Khooni Darwaza, royal cenotaphs, and sweeping valley panoramas.',
      image: a('chanderi-fort'),
    },
    {
      id: 'chanderi-badal-mahal',
      name: 'Badal Mahal Gate',
      category: 'Monumental Gateway',
      description:
        'An iconic 15th-century triumphal archway built by Sultan Mahmud Khilji, standing as an enduring architectural symbol of Chanderi with delicate floral carvings.',
      image: a('chanderi-badal-mahal'),
    },
    {
      id: 'chanderi-koshak-mahal',
      name: 'Koshak Mahal',
      category: 'Sultanate Palace',
      description:
        'An imposing multi-tiered square palace commissioned in 1445 CE, celebrated for its interlocking arched corridors, geometric symmetry and grand stone fenestrations.',
      image: a('chanderi-koshak-mahal'),
    },
    {
      id: 'chanderi-kati-ghati',
      name: 'Kati Ghati',
      category: 'Rock-Cut Gateway',
      description:
        'A monumental gateway carved by hand through a single sandstone hill in 1480 CE, serving as a strategic southern mountain passage into medieval Chanderi.',
      image: a('chanderi-kati-ghati'),
    },
    {
      id: 'chanderi-jama-masjid',
      name: 'Jama Masjid',
      category: 'Indo-Islamic Heritage',
      description:
        'One of the oldest and largest mosques in Bundelkhand, featuring three white bulbous domes, expansive pillared cloisters and serpentine brackets.',
      image: a('chanderi-jama-masjid'),
    },
    {
      id: 'chanderi-raja-rani-mahal',
      name: 'Raja Rani Mahal',
      category: 'Royal Palace Complex',
      description:
        'A twin historic palace complex displaying a fascinating blend of Bundela Rajput and Malwa Sultanate architectural styles set around tranquil royal courtyards.',
      image: a('chanderi-raja-rani-mahal'),
    },
  ],
  themes: [
    {
      id: 'fort-heritage',
      title: 'Fort & Royal Heritage Walk',
      icon: 'landmark',
      image: a('theme-fort-heritage'),
      sights: [
        'Chanderi Fort (Kirti Durg)',
        'Khooni Darwaza',
        'Jauhar Smarak',
        'Battisi Baoli Stepwell',
        'Raja Rani Mahal',
      ],
      note: 'Guided exploration through Chanderi’s dramatic hilltop ramparts and historic royal quarters, unravelling the military strategy and dynastic conflicts of medieval Central India.',
    },
    {
      id: 'handloom-weaving',
      title: 'Chanderi Handloom & Weaving Trail',
      icon: 'heart',
      image: a('theme-handloom-weaving'),
      sights: [
        'Traditional Weaver Households',
        'Chanderi Handloom Park',
        'Silk & Zari Warping Units',
        'Pranpur Craft Village (3 km)',
      ],
      note: 'An immersive craft encounter connecting travellers directly with master handloom artisans producing the renowned GI-tagged Chanderi sarees on pit looms.',
    },
    {
      id: 'jain-heritage',
      title: 'Jain Heritage Discovery',
      icon: 'temple',
      image: a('theme-jain-heritage'),
      sights: [
        'Shri Choubisi Jain Mandir',
        'Khandargiri Rock Sculptures',
        'Buddhi Chanderi (Ancient Ruins)',
        'Pratihara Stone Carvings',
      ],
      note: 'Discover Chanderi’s profound Jain spiritual legacy, from colossal 13th-century rock-cut tirthankaras at Khandargiri to the remote forested temples of ancient Buddhi Chanderi.',
    },
    {
      id: 'medieval-museum',
      title: 'Medieval Architecture & Museum Trail',
      icon: 'graduation',
      image: a('theme-medieval-museum'),
      sights: [
        'Badal Mahal Gate',
        'Koshak Mahal',
        'Jama Masjid',
        'ASI Archaeological Museum',
        'Kati Ghati Pass',
      ],
      note: 'Examine the extraordinary stone masonry and Indo-Islamic monuments of the Malwa Sultanate, complemented by curated regional sculptures at the ASI Archaeological Museum.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp pleasant days and cool evenings, ideal for climbing the fort, exploring heritage streets and visiting artisan looms.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Mild weather and vibrant spring colors, suitable for unhurried monument walks and open countryside tours.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Intense dry heat across the Bundelkhand plateau; early morning monument visits and shaded indoor loom tours are advised.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Lush greenery surrounds the Vindhyan hills and lakes; dramatic mist envelops the fort, though road travel needs flexible pacing.',
      tag: 'Atmospheric',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (215 km) and Bhopal Airport (220 km) are the principal air gateways, offering domestic flights with onward chauffeur transfers to Chanderi.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Lalitpur Junction (36 km) on the main Delhi–Mumbai/Chennai line is the most convenient railway station; Ashoknagar (45 km) provides local rail links.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well connected via state highways to Lalitpur (36 km), Jhansi (100 km), Orchha (125 km), Gwalior (215 km), and Bhopal (220 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Chauffeur-driven vehicles for town monuments, walking tours within the compact old bazaar, and auto-rickshaws for craft hamlet excursions.',
    },
  ],
  cta: {
    heading: 'Plan a Chanderi Heritage Journey for Your Clients',
    description:
      'Weave together hilltop fortifications, Sultanate gateways, sacred Jain heritage, and centuries of living handloom artistry in a tailored Central India itinerary.',
  },
  story: {
    heading: 'Stone Citadels and Gossamer Threads',
    paragraphs: [
      'Set against a dramatic escarpment of the Vindhyan ranges, Chanderi has served as a prized strategic threshold between Northern and Central India since antiquity. Kings, sultans and emperors vied for its high citadel, leaving behind more than three hundred historic structures that encompass hill fortresses, arched gates, magnificent stepwells and quiet cenotaphs.',
      'Yet Chanderi’s greatest living wonder is woven on wooden handlooms in the courtyards of the old town. For centuries, skilled weavers have combined pure silk, fine cotton, and gold zari into sheer fabrics favored by royal courts across India. Today, Chanderi presents an unhurried heritage landscape where architectural grandeur and artisanal mastery breathe together in every winding lane.',
    ],
    image: a('chanderi-hero'),
    imageAlt: 'Commanding ramparts of Chanderi Fort over the historic town',
    quote: 'Where medieval stone bastions look out over centuries of royal history and the quiet rhythm of the weaver’s loom.',
  },
  travellers: [
    { icon: 'heart', name: 'Textile & Craft Lovers' },
    { icon: 'landmark', name: 'Heritage Travellers' },
    { icon: 'users', name: 'Cultural Tour Groups' },
    { icon: 'luggage', name: 'Curious FITs' },
    { icon: 'graduation', name: 'Design & History Students' },
    { icon: 'footprints', name: 'Slow Travellers' },
  ],
  fullGuide: [
    {
      title: 'Hill Fort and Military Architecture',
      points: [
        'Chanderi Fort (Kirti Durg): built by the Pratihara king Kirtipal on a 200m high hill, featuring the historic Khooni Darwaza and Jauhar monument.',
        'Kati Ghati: 80-foot wide gateway cut directly into a sandstone mountain ridge by Jiman Khan in 1480 CE.',
        'Battisi Baoli: grand square stepwell built in 1485 CE containing 32 ghats/landings, a masterwork of medieval water architecture.',
      ],
    },
    {
      title: 'The Handloom Legacy of Chanderi',
      points: [
        'GI-Tagged Handloom: protected geographical indication ensuring authentic handwoven silk, cotton and zari textiles.',
        'Pranpur Craft Village: located 3 km away, India’s first rural tourism craft destination where almost every household weaves.',
        'Handloom Park: modern artisan center preserving ancient motifs like nalferma, chatai, and dandidar borders.',
      ],
    },
    {
      title: 'Circuit Combinations and Routing',
      points: [
        'Ideal pairing with Orchha (125 km), Gwalior (215 km), and Shivpuri (110 km) on a royal heritage circuit.',
        'Convenient day excursions to Buddhi Chanderi (18 km forested ancient ruins) and Deogarh Jain temples (60 km).',
        'October to February provides the most comfortable weather for fort hikes, old town walks, and weaver visits.',
      ],
    },
  ],
};
