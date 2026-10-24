import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/khajuraho/${name}.webp`;

export const khajurahoContent: DestinationDetailContent = {
  id: 'khajuraho',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Khajuraho',
  subtitle: 'Where Sandstone Preserves Centuries of Art.',
  heroImage: a('khajuraho-hero'),
  tags: [
    'UNESCO World Heritage',
    'Chandela Architecture',
    'Hindu & Jain Temples',
    'Heritage Trails',
    'Classical Sculpture',
  ],
  quickFacts: [
    { label: 'Region', value: 'Chhatarpur, Bundelkhand', icon: 'pin' },
    { label: 'Heritage', value: 'UNESCO World Heritage', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Temples & Sculpture', icon: 'temple' },
  ],
  overview: {
    heading: 'Where Architecture Becomes Art',
    description:
      'Khajuraho represents the pinnacle of medieval temple architecture and stone craftsmanship in India. Built between 950 and 1050 CE under the patron Chandela kings, this UNESCO World Heritage Site preserves remarkable Hindu and Jain temples whose nagara-style shikharas, balanced geometric plans and celebrated friezes offer an incomparable cultural encounter for heritage travellers.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Cultural Travellers, Architecture Enthusiasts, Photography Groups',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Monumental Sandstone Temples, Living Sculpture, Classical Artistry, Sacred Stillness',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1N / 2D to 2N / 3D',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Inbound Leisure, Cultural FITs, Luxury Bundelkhand & Golden Triangle Extensions',
      },
    ],
  },
  highlights: [
    {
      id: 'kandariya-mahadeva',
      name: 'Kandariya Mahadeva Temple',
      category: 'Western Group',
      description:
        'The pinnacle of Chandela architecture with soaring shikharas, intricate friezes and over eight hundred carved figures.',
      image: a('khajuraho-kandariya'),
    },
    {
      id: 'lakshmana-temple',
      name: 'Lakshmana Temple',
      category: 'Western Group',
      description:
        'One of the earliest and best-preserved sandstone temples, dedicated to Vaikuntha Vishnu with exquisitely carved plinth friezes.',
      image: a('khajuraho-lakshmana'),
    },
    {
      id: 'vishvanatha-temple',
      name: 'Vishvanatha Temple',
      category: 'Western Group',
      description:
        'Majestic Shiva temple flanked by a monumental monolithic Nandi pavilion, celebrated for harmonious proportions and celestial nymphs.',
      image: a('khajuraho-vishvanatha'),
    },
    {
      id: 'chitragupta-temple',
      name: 'Chitragupta Temple',
      category: 'Western Group',
      description:
        'The only temple at Khajuraho dedicated to Surya, facing east with dynamic relief panels of royal processions and celestial dancers.',
      image: a('khajuraho-chitragupta'),
    },
    {
      id: 'eastern-jain-temples',
      name: 'Eastern Jain Temple Group',
      category: 'Eastern Group',
      description:
        'Serene compound featuring Parsvanatha and Adinatha temples, renowned for delicate decorative mastery and peaceful atmosphere.',
      image: a('khajuraho-jain-temples'),
    },
    {
      id: 'duladeo-temple',
      name: 'Duladeo Temple',
      category: 'Southern Group',
      description:
        'A graceful later Chandela shrine on the banks of the Khodar stream, featuring flying celestial figures and expressive Shiva iconography.',
      image: a('khajuraho-duladeo'),
    },
  ],
  themes: [
    {
      id: 'temple-walk',
      title: 'Guided Temple Heritage Walk',
      icon: 'temple',
      image: a('theme-temple-walk'),
      sights: [
        'Kandariya Mahadeva',
        'Lakshmana Temple',
        'Vishvanatha Temple',
        'Chitragupta Temple',
        'Matangeshwar Temple',
      ],
      note: 'In-depth exploration of the UNESCO Western Group with licensed scholarly guides, unlocking the architectural layout, geometry and historical context of the Chandela monuments.',
    },
    {
      id: 'sculpture-architecture',
      title: 'Sculpture & Architecture Discovery',
      icon: 'landmark',
      image: a('theme-sculpture'),
      sights: [
        'Sandstone Relief Panels',
        'Surasundari Sculptures',
        'Panchayatana Temple Plans',
        'Shikhara Geometry',
      ],
      note: 'Detailed aesthetic examination of medieval Indian stone carving, iconographic symbolism, daily life friezes and advanced temple engineering.',
    },
    {
      id: 'jain-heritage',
      title: 'Jain & Eastern Heritage Trail',
      icon: 'footprints',
      image: a('theme-jain-heritage'),
      sights: [
        'Parsvanatha Temple',
        'Adinatha Temple',
        'Shantinatha Temple',
        'Vamana Temple',
        'Javari Temple',
      ],
      note: 'A calmer heritage circuit highlighting the distinctive architectural nuances and refined stone detailing of Khajuraho’s Jain and Eastern Hindu monuments.',
    },
    {
      id: 'cultural-experiences',
      title: 'Cultural Heritage & Museums',
      icon: 'graduation',
      image: a('theme-cultural-experiences'),
      sights: [
        'Archaeological Museum',
        'Adivart Tribal & Folk Art Museum',
        'Evening Sound & Light Show',
        'Raneh Falls Day Circuit',
      ],
      note: 'Enrich client journeys with contextual museum exhibits, state-of-the-art evening heritage projections, and seamless excursions into the Ken river canyon.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Pleasant days and cool evenings, ideal for extended temple walks and architectural photography.',
      tag: 'Peak Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Warm sunny days with vibrant cultural events and comfortable morning and evening touring conditions.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Hot central Indian temperatures; early morning visits and shaded museum visits are advised for clients.',
      tag: 'Off-Peak',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Lush green temple lawns and dramatic rain-washed sandstone contrasts; lower tourist traffic.',
      tag: 'Atmospheric',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Khajuraho Airport (HJR) connects with seasonal and scheduled domestic flights; alternate gateways via Varanasi, Gwalior or Bhopal.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Khajuraho Railway Station (KURJ) connects to Delhi and key regional junctions; Mahoba and Jhansi serve as major nearby railheads.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'National and state highways connect Khajuraho smoothly to Orchha (175 km), Jhansi (180 km), and Panna National Park (45 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfer',
      text: 'Private chauffeurs, air-conditioned touring coaches and battery-operated carts within the Western Group complex.',
    },
  ],
  cta: {
    heading: 'Plan a Khajuraho Heritage Journey for Your Clients',
    description:
      'Discover timeless temple architecture, guided cultural experiences and tailor-made heritage circuits through the heart of Bundelkhand.',
  },
  story: {
    heading: 'A Millennium of Stone and Spirit',
    paragraphs: [
      'In the quiet plains of Bundelkhand rise the extraordinary shikharas of Khajuraho, built by the Chandela rulers over a golden century of artistic creation. Once a vibrant religious capital of eighty-five temples, the surviving twenty-five monuments stand as an enduring testimony to medieval India’s architectural brilliance.',
      'From the towering mountain-like profile of Kandariya Mahadeva to the serene courtyard of the Parsvanatha temple, every façade presents a cosmic vision where sacred divinity, royal ceremony, nature, and human life are carved into warm Vindhyan sandstone with unmatched mastery.',
    ],
    image: a('khajuraho-hero'),
    imageAlt: 'Sandstone temple shikharas of Khajuraho against morning sky',
    quote: 'Where medieval sandstone breathes with the pulse of art, devotion and timeless architectural harmony.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural FITs' },
    { icon: 'landmark', name: 'Heritage Travellers' },
    { icon: 'luggage', name: 'Inbound Groups' },
    { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'graduation', name: 'Educational Tours' },
    { icon: 'temple', name: 'Architecture Enthusiasts' },
  ],
  fullGuide: [
    {
      title: 'UNESCO Western Group of Temples',
      points: [
        'Kandariya Mahadeva Temple: the largest and most ornate temple, dedicated to Shiva with more than 800 carved figures.',
        'Lakshmana Temple: superbly preserved Panchayatana temple dedicated to Vishnu, featuring historic battle and procession friezes.',
        'Vishvanatha Temple: exquisite Shaivite temple with a dedicated monolithic Nandi bull pavilion facing the sanctum.',
        'Chitragupta and Jagadambi Temples: dedicated respectively to Surya the Sun God and Parvati, featuring dynamic relief sculptures.',
      ],
    },
    {
      title: 'Eastern and Southern Temple Groups',
      points: [
        'Parsvanatha Temple: the finest Jain temple in the Eastern Group, celebrated for delicate figures of celestial maidens.',
        'Adinatha Temple: elegant shrine adorned with graceful sculptures of musicians and celestial dancers.',
        'Duladeo Temple: positioned in the Southern Group beside the river, showcasing later Chandela artistic evolution.',
        'Chaturbhuj Temple: facing west towards the sunset, housing a colossal four-armed Vishnu icon.',
      ],
    },
    {
      title: 'Travel Trade Planning & Circuit Connections',
      points: [
        'Ideal combination with Orchha (heritage circuit) and Panna National Park (wilderness and Ken river).',
        'Licensed local guides and audio guides are available through ASI and MP Tourism at the Western complex.',
        'October to March provides the most comfortable climate for full-day temple explorations and photography.',
      ],
    },
  ],
};
