import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/indore/${name}.webp`;

export const indoreContent: DestinationDetailContent = {
  id: 'indore',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Indore',
  subtitle: 'Where Royal Heritage Meets the Living Spirit of Malwa.',
  heroImage: a('indore-hero'),
  tags: [
    'Holkar Heritage',
    'Royal Palaces',
    'Historic Architecture',
    'Malwa Culture',
    'Heritage Walks',
  ],
  quickFacts: [
    { label: 'Region', value: 'Malwa, Madhya Pradesh', icon: 'pin' },
    { label: 'Heritage', value: 'Holkar Royal Legacy', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Palaces, Culture & Bazaars', icon: 'temple' },
  ],
  overview: {
    heading: 'The Royal Heart of Malwa',
    description:
      "Indore is a city where the legacy of the Holkar rulers lives alongside a vibrant contemporary culture. The imposing Rajwada Palace, the European-inspired grandeur of Lal Bagh Palace, intricately carved cenotaphs and historic religious monuments offer a compelling introduction to Malwa's royal heritage. Beyond its monuments, Indore's markets, food traditions and bustling old-city streets reveal a living cultural destination ideally suited to tailored heritage journeys.",
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Travellers, Families, Cultural Groups and Architecture Enthusiasts',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Royal Palaces, Historic Streets, Holkar Architecture and Living Culture',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1N / 2D or 2N / 3D; shorter city visits possible',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'FIT, Heritage Groups, Educational Tours and Malwa Circuits',
      },
    ],
  },
  highlights: [
    {
      id: 'indore-rajwada',
      name: 'Rajwada Palace',
      category: 'Royal Heritage',
      description:
        "Discover Indore's landmark seven-storey Holkar palace, where Maratha architectural character, historic courtyards and royal stories meet at the heart of the old city.",
      image: a('indore-rajwada'),
    },
    {
      id: 'indore-lalbagh',
      name: 'Lal Bagh Palace',
      category: 'Royal Palace',
      description:
        'Step into the grand residential world of the Holkars, where European-inspired interiors, ceremonial halls and expansive palace grounds reflect a distinctive royal era.',
      image: a('indore-lalbagh'),
    },
    {
      id: 'indore-krishnapura',
      name: 'Krishnapura Chhatris',
      category: 'Architectural Heritage',
      description:
        "Admire the beautifully carved royal cenotaphs commemorating Holkar rulers, with graceful domes, sculptural stonework and a rich sense of Malwa's dynastic history.",
      image: a('indore-krishnapura'),
    },
    {
      id: 'indore-kanch-mandir',
      name: 'Kanch Mandir',
      category: 'Jain Heritage',
      description:
        'Explore an extraordinary Jain temple celebrated for intricate glasswork, mirrored interiors and craftsmanship that turns architecture into a luminous visual experience.',
      image: a('indore-kanch-mandir'),
    },
    {
      id: 'indore-gandhi-hall',
      name: 'Gandhi Hall',
      category: 'Historic Landmark',
      description:
        "Discover Indore's celebrated Indo-Gothic civic landmark, recognised for its distinctive clock tower, grand architectural detailing and place in the city's public history.",
      image: a('indore-gandhi-hall'),
    },
    {
      id: 'indore-central-museum',
      name: 'Central Museum, Indore',
      category: 'Museum & Culture',
      description:
        "Trace Central India's artistic and archaeological legacy through collections of ancient sculptures, inscriptions, historic objects and regional heritage.",
      image: a('indore-central-museum'),
    },
  ],
  themes: [
    {
      id: 'holkar-walk',
      title: 'Holkar Heritage Walk',
      icon: 'landmark',
      image: a('theme-holkar-walk'),
      sights: [
        'Rajwada Palace',
        'Krishnapura Chhatris',
        'Old Indore Streets',
        'Ahilyabai Holkar Memorial Area',
      ],
      note: "Experience the stories of Indore's old city through guided walks, historic landmarks, royal-era architecture and the enduring legacy of the Holkars.",
    },
    {
      id: 'royal-palaces',
      title: 'Royal Palace Circuit',
      icon: 'temple',
      image: a('theme-royal-palaces'),
      sights: [
        'Rajwada Palace',
        'Lal Bagh Palace',
        'Holkar History',
        'Royal Architecture',
      ],
      note: "A curated introduction to Indore's royal heritage, contrasting the Maratha-influenced character of Rajwada with the European-inspired grandeur of Lal Bagh Palace.",
    },
    {
      id: 'art-museums',
      title: 'Architecture & Museum Discovery',
      icon: 'graduation',
      image: a('theme-art-museums'),
      sights: [
        'Central Museum',
        'Gandhi Hall',
        'Krishnapura Chhatris',
        'Kanch Mandir',
      ],
      note: 'Discover Indore through historic collections, architectural details, sacred craftsmanship and the evolution of its cultural identity.',
    },
    {
      id: 'oldcity-food',
      title: 'Old City Food & Bazaar Trail',
      icon: 'footprints',
      image: a('theme-oldcity-food'),
      sights: [
        'Sarafa Bazaar',
        'Chappan Dukan',
        'Traditional Malwa Snacks',
        'Historic Commercial Streets',
      ],
      note: "Explore Indore's living food culture through its renowned bazaars, local flavours and lively marketplace traditions—an engaging addition to any heritage itinerary.",
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Comfortable weather makes this the most suitable period for palace visits, old-city walks and cultural sightseeing.',
      tag: 'Best for Heritage',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Mar – Apr',
      icon: 'sun',
      description:
        'Suitable for cultural touring, with increasingly warm afternoons. Schedule longer outdoor walks earlier in the day.',
      tag: 'Plan Around Heat',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'May – Jun',
      icon: 'sun',
      description:
        'Hot weather makes indoor museum visits, palace interiors and early-morning or evening sightseeing more comfortable.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Seasonal rains refresh the city and surrounding Malwa landscape, although outdoor sightseeing may require flexible timing.',
      tag: 'Flexible Touring',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilya Bai Holkar Airport serves Indore, with domestic air connectivity to major Indian cities. Confirm current flight schedules before finalising guest arrangements.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: "Indore Junction is the city's main railway gateway, connecting Indore with major destinations across the Indian rail network.",
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Indore has strong road links across Madhya Pradesh and provides a practical starting point for journeys toward Ujjain, Mandu, Maheshwar and other regional destinations.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private vehicles and local transport are suitable for palace visits, old-city heritage walks, museums and cultural sightseeing. Allow time for traffic and site accessibility.',
    },
  ],
  cta: {
    heading: 'Plan an Indore Heritage Journey for Your Clients',
    description:
      'Bring together royal palaces, old-city heritage, Malwa culture and distinctive local experiences in a tailor-made journey through Indore.',
  },
  story: {
    heading: 'The Royal Legacy of the Holkars',
    paragraphs: [
      'Indore rose to prominence under the visionary leadership of the Holkar dynasty, particularly Maharani Ahilyabai Holkar whose equitable governance and architectural patronage reshaped Central India. The city reflects this royal story through monuments that range from the towering wooden and stone tiers of Rajwada to the opulent halls of Lal Bagh Palace.',
      'As the commercial and cultural capital of the Malwa plateau, Indore bridges past and present with rare vibrancy. Historic chhatris along the river Khan, sunlit glass panels of Kanch Mandir, and the sensory evening spectacle of Sarafa Bazaar create a multi-layered urban heritage encounter for discerning travellers.',
    ],
    image: a('indore-hero'),
    imageAlt: 'Rajwada Palace facade in historic Indore',
    quote: 'A grand crossroads where Holkar royal grandeur, living heritage and the warmth of Malwa culture thrive side by side.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Groups' },
    { icon: 'landmark', name: 'Heritage Travellers' },
    { icon: 'luggage', name: 'Leisure FITs' },
    { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'graduation', name: 'Educational Tours' },
    { icon: 'heart', name: 'Families & Couples' },
  ],
  fullGuide: [
    {
      title: 'Holkar Palaces and Royal Monuments',
      points: [
        'Rajwada Palace: seven-storey Holkar seat blending Maratha, Mughal, and French architectural elements in the heart of old Indore.',
        'Lal Bagh Palace: neoclassical European-influenced royal residence set amidst landscaped gardens with ceremonial durbar halls.',
        'Krishnapura Chhatris: cenotaphs dedicated to Holkar rulers situated along the Khan river, celebrated for intricate stone carvings.',
      ],
    },
    {
      title: 'Sacred Architecture and Cultural Sights',
      points: [
        'Kanch Mandir: private Jain temple constructed by Seth Hukumchand, featuring exquisite Belgian glass mirrors and mosaics.',
        'Gandhi Hall: Indo-Gothic civic hall with a red stone clock tower that anchors the colonial-era civic history of Indore.',
        'Central Museum: repository of medieval sculptures from Hinglajgarh and Parmar dynasty stone inscriptions.',
      ],
    },
    {
      title: 'Malwa Circuit Gateway and Culinary Heritage',
      points: [
        'Strategic base for day trips and circuits to Ujjain (55 km), Mandu (98 km), Maheshwar (91 km), and Omkareshwar (77 km).',
        'Sarafa Bazaar: historic jewelry market transforming at night into an iconic open-air culinary celebration.',
        'Chappan Dukan: dedicated gastronomic street offering legendary Malwa snacks, sweets, and regional specialities.',
      ],
    },
  ],
};
