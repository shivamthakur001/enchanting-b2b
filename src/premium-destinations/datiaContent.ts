import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/datia/${name}.webp`;

export const datiaContent: DestinationDetailContent = {
  id: 'datia',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED TANTRA SHAKTI PEETH · BUNDELKHAND',
  title: 'Datia',
  subtitle: 'Where the Divine Feminine Meets Timeless Heritage.',
  heroImage: a('datia-hero'),
  ctaBackgroundImage: a('datia-hero'),
  tags: [
    'Shri Pitambara Peeth Mahavidya Seat',
    'Maa Baglamukhi & Maa Dhumavati Shrines',
    'Mahabharata-Era Vankhandeshwar Mahadev',
    'Sonagiri Digambar Jain Sacred Hills',
    '17th-Century Bir Singh Deo Bundela Palace',
  ],
  quickFacts: [
    { label: 'Region', value: 'Datia District, Bundelkhand (30 km from Jhansi)', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Shri Pitambara Peeth | Supreme Tantric Seat', icon: 'temple' },
    { label: 'Ideal Stay', value: '1 to 2 Nights (or Circuit with Orchha & Gwalior)', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Bundelkhand Winter Weather)', icon: 'sun' },
    { label: 'Best For', value: 'Pitambara Peeth · Sonagiri Jain Hills · Palaces', icon: 'heart' },
  ],
  overview: {
    heading: 'Sacred Mahavidya Devotion, Ancient Jain Sanctuaries, and Bundela Royal Grandeur',
    description:
      'Steeped in spiritual mystique and historical grandeur in the rolling plains of Bundelkhand, Datia is revered across India as a paramount seat of the Divine Feminine and high spiritual asceticism. At its sacred epicenter lies Shri Pitambara Peeth, a renowned ashram complex established in 1935 by the revered saint Pujyapada Swamiji Maharaj, dedicated to the veneration of Maa Baglamukhi and Maa Dhumavati from the sacred Ten Mahavidyas (Dasha Mahavidyas). Complementing its profound Shakti traditions, the Mahabharata-era Vankhandeshwar Mahadev temple burns with an ancient eternal flame, while just 15 km away rise the serene golden hills of Sonagiri, adorned with 77 gleaming white Digambar Jain spires dating back centuries. Overlooking the sacred lakes stands the monumental 17th-century Bir Singh Deo Palace, creating an evocative synthesis of deep esoteric spirituality and majestic Bundela courtly heritage.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Devout Shakti Pilgrims, Tantric & Mahavidya Scholars, Digambar Jain Devotees, Heritage Connoisseurs, and Inbound Cultural Travelers on the Gwalior–Jhansi–Orchha Circuit',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Offering Yellow Flowers at Maa Baglamukhi Sanctum, Special Saturday Dhumavati Darshan, Wandering Sonagiri’s 77 Hilltop Jain Shrines & Exploring Bir Singh Deo Palace',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1 to 2 Nights (Permits early morning temple rituals, dedicated excursion to Sonagiri’s hilltop Jain temples, architectural study of Datia Palace, and unhurried transit)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Strategically located on NH-44 midway between Gwalior (75 km) and Jhansi/Orchha (30 km). Superfast mainline railway access, quality vegetarian hotels, and strong spiritual prestige',
      },
    ],
  },
  highlights: [
    {
      id: 'datia-pitambara-peeth',
      name: 'Shri Pitambara Peeth',
      category: 'Supreme Tantric Mahavidya Seat',
      description:
        'Established in 1935 by the revered saint Pujyapada Rashtrasant Brahmachariji Swamiji Maharaj, this renowned ashram complex is one of India’s most influential centers of Baglamukhi and Mahavidya worship, frequented by national leaders, spiritual seekers, and thousands of devotees daily.',
      image: a('datia-pitambara-peeth'),
    },
    {
      id: 'datia-baglamukhi-shrine',
      name: 'Maa Baglamukhi Shrine',
      category: 'Inner Sanctum of Pitambara Devi',
      description:
        'The paramount sanctum inside the Peeth dedicated to the eighth Mahavidya, Maa Baglamukhi, revered as the deity who paralyzes enemies of the intellect and bestows divine victory. Devotees dress in traditional yellow silk attire and offer yellow oleander flowers, turmeric, and sweets in sacred silence.',
      image: a('datia-baglamukhi-shrine'),
    },
    {
      id: 'datia-dhumavati-shrine',
      name: 'Maa Dhumavati Shrine',
      category: 'Exclusive Saturday Morning Sanctum',
      description:
        'An exceptionally rare sanctum dedicated to the seventh Mahavidya, Maa Dhumavati, representing the primordial elder aspect of the cosmic Mother. In accordance with strict ashram tradition, darshan is granted exclusively on Saturday mornings (and select auspicious Navratri timings) with reverent solemnity.',
      image: a('datia-dhumavati-shrine'),
    },
    {
      id: 'datia-vankhandeshwar-shiva-temple',
      name: 'Vankhandeshwar Shiva Temple',
      category: 'Mahabharata-Era Consecrated Shivalinga',
      description:
        'Located within the consecrated perimeter of Pitambara Peeth, this ancient Shivalinga is traditionally held to have been established by Ashwatthama of the Mahabharata. It features an eternal flame (Akhand Dhuni) tended uninterruptedly by resident ascetics for generations.',
      image: a('datia-vankhandeshwar-shiva-temple'),
    },
    {
      id: 'datia-sonagiri-jain-complex',
      name: 'Sonagiri Jain Temple Complex',
      category: 'Sacred Digambar Jain Nirvana Kshetra',
      description:
        'Situated 15 km from Datia, this sacred granite hill (the "Golden Mountain") is crowned by 77 gleaming white Digambar Jain temples dating from the 9th to 17th centuries, venerated as the nirvana site where King Nanganag Kumar attained liberation alongside five and a half crore ascetics.',
      image: a('datia-sonagiri-jain-complex'),
    },
    {
      id: 'datia-bir-singh-deo-palace',
      name: 'Veer Singh Deo Palace and Datia Sacred Heritage',
      category: '17th-Century Bundela Architectural Marvel',
      description:
        'Commissioned in 1614 CE by Raja Bir Singh Deo, this monumental 7-story palace was constructed entirely of stone and brick without using any wood or structural iron. Rising majestically beside Karna Sagar lake, it features exquisite stone jali screens, Rajput frescoes, and five-tiered arcades.',
      image: a('datia-bir-singh-deo-palace'),
    },
  ],
  themes: [
    {
      id: 'theme-pitambara-peeth-shakti-traditions',
      title: 'Pitambara Peeth Darshan & Shakti Traditions',
      icon: 'temple',
      image: a('theme-pitambara-peeth-shakti-traditions'),
      sights: [
        'Venerated Sanctum of Maa Baglamukhi in Radiant Yellow Vestments',
        'Traditional Offering of Yellow Oleander Garlands and Besan Laddoos',
        'Special Saturday Morning Darshan of Maa Dhumavati Devi',
        'Ashram Yajnashala & Sacred Vedic Havan Enclosures',
        'Akhand Dhuni Eternal Fire at Vankhandeshwar Mahadev',
      ],
      note: 'Pitambara Peeth maintains strict monastic discipline. Modest traditional attire (preferably yellow or white) is customary. Mobile phones and leather items are strictly prohibited inside the inner ashram premises.',
    },
    {
      id: 'theme-sacred-temples-heritage-walk',
      title: 'Sacred Temples & Religious Heritage Walk',
      icon: 'compass',
      image: a('theme-sacred-temples-heritage-walk'),
      sights: [
        'Ancient Vankhandeshwar Mahadev Inner Shivalinga',
        'Ashram Sanskrit Vidyapeeth & Rare Manuscript Archives',
        'Pujyapada Swamiji Maharaj Samadhi & Meditation Hall',
        'Radha Sagar & Karna Sagar Historic Holy Water Bodies',
        'Historic Peeth Bazaars selling Authentic Brass & Puja Paraphernalia',
      ],
      note: 'Walking through the ashram and adjoining old city temple lanes takes approximately 2 hours. Peaceful early morning hours (6:30 AM – 9:00 AM) offer the best opportunity for silent contemplation and study.',
    },
    {
      id: 'theme-sonagiri-jain-pilgrimage',
      title: 'Sonagiri Jain Pilgrimage Extension',
      icon: 'mountain',
      image: a('theme-sonagiri-jain-pilgrimage'),
      sights: [
        '77 Whitewashed Digambar Jain Shikhara Temples on the Hill',
        'Main Temple No. 57 enshrining 11-ft Idol of Bhagwan Chandraprabha',
        'Barefoot Ascent along Pristine Clean Paved Stone Pathways',
        'Sweeping Panoramic Views of the Rocky Bundelkhand Plain',
        'Quiet Monastic Ashrams and Dharmashalas at the Foothills',
      ],
      note: 'Located 15 km northwest of Datia. Visitors must remove footwear at the hill base and climb barefoot (or wear special cotton pilgrimage socks). Strict vegetarian, non-smoking, and respectful codes of conduct apply throughout the sacred hill.',
    },
    {
      id: 'theme-datia-palace-bundela-heritage',
      title: 'Datia Palace & Bundela Cultural Heritage',
      icon: 'landmark',
      image: a('theme-datia-palace-bundela-heritage'),
      sights: [
        'Bir Singh Deo Palace Seven-Story Sandstone Architecture',
        'Central Octagonal Dome & Interconnected Gallery Bridges',
        'Faded 17th-Century Bundela Murals & Intricate Stone Jali Windows',
        'Panoramic Views of Datia Fortified City Walls & Lake Basins',
        'Govind Mahal & Ancient Stepwells (Baolis) of Datia Town',
      ],
      note: 'The palace is under state archaeological protection. Exploring the multi-level courtyards takes approximately 1.5 to 2 hours. Guided architectural commentary reveals how theoretical Vastu and Persian geometric harmonies were combined.',
    },
  ],
  seasons: [
    {
      name: 'Crisp Winter Pilgrimage',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'The premier season for visiting Datia. Cool mornings (10°C–14°C) and pleasant golden sunny afternoons (20°C–26°C) provide perfect conditions for walking between shrines, climbing the Sonagiri hill barefoot, and exploring the palace.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Navratri & Guru Purnima',
      months: 'Mar/Apr, Jul & Sep/Oct',
      icon: 'calendar',
      description:
        'Shri Pitambara Peeth observes Navratri and Guru Purnima with profound solemnity. Thousands of spiritual aspirants and dignitaries gather for sacred homams, chandi paths, and darshan. Advance logistics coordination is essential.',
      tag: 'Spiritual High Periods',
      theme: 'gold',
    },
    {
      name: 'Summer Devotional Flow',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Very warm Bundelkhand summer (32°C–44°C). Temple darshan is best conducted during the cooler early morning hours (6:00 AM – 9:00 AM) or after 6:30 PM. The barefoot walk at Sonagiri is intensely hot during midday and must be completed by 8:30 AM.',
      tag: 'Early Morning Darshan',
      theme: 'gold',
    },
    {
      name: 'Monsoon Greenery',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Moderate seasonal rains fill Karna Sagar and surrounding reservoirs, cloaking the granite hills around Sonagiri in fresh vegetation. Temple courtyards are quiet, peaceful, and washed clean by passing showers.',
      tag: 'Lush Lake Horizons',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Gwalior Airport (GWL, approx. 80 km / 1.5 hrs drive) is the closest operational airport, offering commercial flights to New Delhi, Mumbai, Bengaluru, and Hyderabad. Khajuraho Airport (approx. 180 km) is also accessible for multi-destination circuits.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Datia Railway Station (DAA) is on the main Delhi–Mumbai / Delhi–Chennai mainline, served by major express trains. Jhansi Junction (VGLB, approx. 30 km / 35 mins drive) is an A1-class junction served by premier Vande Bharat, Shatabdi, and Rajdhani expresses.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Located directly on the smooth 4-lane North-South Corridor (NH-44), Datia offers effortless driving connections to Jhansi (30 km), Orchha (45 km), Gwalior (75 km), Khajuraho (180 km), and Bhopal (320 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans and SUVs are readily organized from Jhansi or Gwalior for day trips. Local battery e-rickshaws and auto-rickshaws easily connect Datia station, Pitambara Peeth, and Sonagiri (15 km away).',
    },
  ],
  cta: {
    heading: 'Curate an Unforgettable Sacred Journey to Datia & Bundelkhand',
    description:
      'Partner with our Central India destination specialists for verified temple protocol guidance, seamless Sonagiri Jain pilgrimage extensions, luxury transfers from Jhansi and Gwalior, and tailor-made circuits combining Datia with Orchha and Khajuraho.',
  },
};
