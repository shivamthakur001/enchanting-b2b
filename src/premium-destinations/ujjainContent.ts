import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/ujjain/${name}.webp`;

export const ujjainContent: DestinationDetailContent = {
  id: 'ujjain',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED JYOTIRLINGA CITY · MADHYA PRADESH',
  title: 'Ujjain',
  subtitle: 'Where Time Bows Before Mahakal.',
  heroImage: a('ujjain-hero'),
  ctaBackgroundImage: a('ujjain-hero'),
  tags: [
    'Dakshinmukhi Jyotirlinga',
    'One of the Sapta Mokshapuris',
    'Grand Mahakal Lok Corridor',
    'Sacred River Kshipra & Ram Ghat',
    'Simhastha Kumbh Mahaparva Seat',
  ],
  quickFacts: [
    { label: 'Region', value: 'Malwa Plateau, MP', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Dakshinmukhi Jyotirlinga & Sapta Puri', icon: 'temple' },
    { label: 'Ideal Stay', value: '2 Nights / 3 Days', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Pilgrimage Weather)', icon: 'sun' },
    { label: 'Best For', value: 'Mahakal Darshan · Kshipra Aarti · Heritage Trail', icon: 'heart' },
  ],
  overview: {
    heading: 'The Sacred Meridian of Time, Faith & Divine Sovereignty',
    description:
      'Standing proudly upon the holy banks of the River Kshipra, Ujjain — known in antiquity as Ujjayini, Avanti, and Kanakashringi — is one of the seven holy cities (Sapta Puri) endowed with the power to confer spiritual liberation. Revered for millennia as the Greenwich of classical Hindu astronomy, the Tropic of Cancer intersects this consecrated ground, establishing Ujjain as the cosmic prime meridian of the traditional calendar. At the spiritual heart of the city presides Shri Mahakaleshwar, the only south-facing (Dakshinmukhi) of the twelve revered Jyotirlingas, symbolizing absolute mastery over time, destiny, and dissolution. With the inauguration of the magnificent Shri Mahakal Lok corridor, Ujjain harmoniously unites ancient Vedic traditions with modern pilgrim infrastructure, offering an extraordinary destination for spiritual, cultural, and heritage-focused travel itineraries.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Pilgrimage & Faith Delegations, Cultural Inbound Travellers, Multi-Generational Families & Regional Malwa Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Mahakaleshwar Jyotirlinga Darshan, Sculptural Mahakal Lok Promenade, Twin Deepstambha Illumination at Harsiddhi, Ram Ghat Aarti & Sacred Ashrams',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D (Recommended for comfortable darshan pacing, evening river rituals, temple heritage excursions, and unhurried access to historic monuments)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'High-Purity Vegetarian Hospitality, Pre-Booked Darshan Guidance, Wheelchair-Accessible Corridors & Seamless Indore Highway Transfers',
      },
    ],
  },
  highlights: [
    {
      id: 'ujjain-mahakaleshwar-jyotirlinga',
      name: 'Shri Mahakaleshwar Jyotirlinga',
      category: 'Svayambhu Dakshinmukhi Jyotirlinga',
      description:
        'The paramount sanctum of Ujjain houses the swayambhu (self-manifested) lingam facing south, unique among the twelve Jyotirlingas. Spread across three tiered subterranean sanctums enshrining Mahakaleshwar, Omkareshwar, and Nagchandreshwar, the complex radiates profound antiquity. The historic dawn Bhasma Aarti and daily devotional rituals follow venerable temple protocols administered by the official temple trust.',
      image: a('ujjain-mahakaleshwar-jyotirlinga'),
    },
    {
      id: 'ujjain-mahakal-lok-corridor',
      name: 'Shri Mahakal Lok Corridor',
      category: 'Monumental Pilgrimage Plaza',
      description:
        'Spanning over 900 metres alongside the historic Rudrasagar lake, this grand pedestrian corridor presents an architectural celebration of Shivaite lore. Embellished with 108 intricately sculpted sandstone pillars, monumental murals depicting the Shiv Purana, landscaped fountains, and illuminated plazas, Mahakal Lok redefines visitor circulation and comfort.',
      image: a('ujjain-mahakal-lok-corridor'),
    },
    {
      id: 'ujjain-harsiddhi-mata-temple',
      name: 'Harsiddhi Mata Temple',
      category: 'Revered Shaktipeeth',
      description:
        'Celebrated as one of the 51 sacred Shaktipeeths where Sati’s elbow is traditionally believed to have fallen, this venerated shrine was also the chosen kuldevi of legendary Emperor Vikramaditya. Its courtyard features twin monumental deepstambhas (pillar lamp towers) whose hundreds of stone lamp brackets glow resplendently during evening twilight.',
      image: a('ujjain-harsiddhi-mata-temple'),
    },
    {
      id: 'ujjain-kaal-bhairav-temple',
      name: 'Kaal Bhairav Temple',
      category: 'Tantric Guardian Shrine',
      description:
        'Located along the outer northern perimeter of ancient Ujjain, this powerful shrine honors Kaal Bhairav, the traditional fierce guardian deity of the city. Deeply rooted in historic Kapalika and Nath traditions, the temple features time-honored offering rituals, vibrant courtyard bazaars, and an atmosphere of intense religious devotion.',
      image: a('ujjain-kaal-bhairav-temple'),
    },
    {
      id: 'ujjain-ram-ghat-kshipra',
      name: 'Ram Ghat & River Kshipra',
      category: 'Sacred Riverfront & Aarti',
      description:
        'Among the most venerable riverbanks in Central India, Ram Ghat is the epicentre of the holy snan during the quadrennial Simhastha Kumbh Mahaparva. As dusk settles over the water, priests perform the evocative Kshipra evening aarti with multi-tiered brass oil lamps, accompanied by conch shells, devotional bells, and floating flower diyas.',
      image: a('ujjain-ram-ghat-kshipra'),
    },
    {
      id: 'ujjain-sandipani-ashram',
      name: 'Sandipani Ashram',
      category: 'Ancient Vedic Hermitage',
      description:
        'Revered as the traditional gurukul where Lord Shri Krishna, his brother Balarama, and their companion Sudama mastered the 64 classical arts and Vedic sciences under Guru Sandipani. The tranquil grove houses the ancient Gomti Kund water reservoir and an engraved stone pedestal marking the legendary Gurukul seat.',
      image: a('ujjain-sandipani-ashram'),
    },
  ],
  themes: [
    {
      id: 'theme-mahakaleshwar-darshan-circuit',
      title: 'Mahakaleshwar Darshan & Sacred Temple Circuit',
      icon: 'temple',
      image: a('theme-mahakaleshwar-darshan-circuit'),
      sights: [
        'Mahakaleshwar Jyotirlinga Sanctum Protocol',
        'Shri Mahakal Lok Architectural Walkways',
        'Harsiddhi Shaktipeeth & Deepstambha Lamps',
        'Bada Ganeshji & Chintaman Ganesh Shrines',
        'Kaal Bhairav & Mangalnath Astrological Seat',
      ],
      note: 'Darshan queues, general access lines, and special queue allocations are strictly regulated by the Shri Mahakaleshwar Temple Management Committee. The dawn Bhasma Aarti requires prior advance registration and formal traditional dress codes (dhoti-kurta for men, saree for women during inner garbhagriha ceremonies); admission is never automatically guaranteed.',
    },
    {
      id: 'theme-kshipra-ghats-evening-rituals',
      title: 'Kshipra Ghats & Evening Ritual Traditions',
      icon: 'compass',
      image: a('theme-kshipra-ghats-evening-rituals'),
      sights: [
        'Ram Ghat Sunset Twilight & Brass Oil Lamp Ceremony',
        'Morning Pavitra Snan & Vedic Chanting',
        'Heritage Footbridges & Riverfront Pavilions',
        'Floating Earthen Diyas upon the Kshipra Waters',
        'Traditional Riverbank Priestly Consultations',
      ],
      note: 'River rituals and evening aarti are open to all visitors with respectful decorum. Ghat platforms can become lively and crowded on auspicious lunar dates such as Purnima, Amavasya, and during the holy month of Shravan.',
    },
    {
      id: 'theme-spiritual-heritage-trail',
      title: "Ujjain's Spiritual Heritage Trail",
      icon: 'landmark',
      image: a('theme-spiritual-heritage-trail'),
      sights: [
        'Vedh Shala (Jantar Mantar Astronomical Observatory)',
        'Sandipani Ashram & Gomti Kund Heritage',
        'Bhartrihari Caves overlooking the River Ridge',
        'Gopal Mandir Maratha Architecture in Old City',
        'Vikram Kirti Mandir Cultural Museum',
      ],
      note: 'Ujjain has been an intellectual capital since the Mauryan and Gupta eras. Exploring the 18th-century stone sundials of Maharaja Sawai Jai Singh alongside ancient hermitages offers an illuminating bridge between science and spirituality.',
    },
    {
      id: 'theme-pilgrimage-cultural-interpretation',
      title: 'Festivals, Local Culture & Pilgrimage Interpretation',
      icon: 'heart',
      image: a('theme-pilgrimage-cultural-interpretation'),
      sights: [
        'Shravan Month Sawari (Lord Mahakal Palanquin Processions)',
        'Traditional Malwa Sweets (Mawa Bati & Rabdi Ghewar)',
        'Pilgrim Bazaars for Rudraksha, Brassware & Ittar',
        'Classical Vedic Astrology Interpretation',
        'Guided Senior-Citizen Friendly Pacing',
      ],
      note: 'During the holy month of Shravan (July–August) and Maha Shivratri (February–March), Ujjain hosts extraordinary devotional gatherings. Itineraries during these periods require meticulous advance logistics and dedicated local trade coordination.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Festive Onset',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Pleasant daytime weather (22°C–32°C) following the retreat of the monsoon. Ideal for unhurried temple darshans, evening river breezes along the Kshipra, and the sparkling festivities of Dussehra and Deepawali.',
      tag: 'Festive & Pleasant',
      theme: 'gold',
    },
    {
      name: 'Crisp Winter Pilgrimage',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'The premier travel season across Central India. Crisp, invigorating mornings (8°C–14°C) give way to mild, sunny afternoons (22°C–26°C), allowing comfortable walking circuits through Mahakal Lok and heritage markets.',
      tag: 'Peak Travel Window',
      theme: 'blue',
    },
    {
      name: 'Summer Devotion & Shivratri',
      months: 'Mar – May',
      icon: 'sun',
      description:
        'Rising temperatures (30°C–42°C) characterize Malwa summer. Maha Shivratri brings sublime spiritual fervor. Itineraries are thoughtfully scheduled with early-morning temple visits and relaxed afternoon indoor cultural stops.',
      tag: 'Maha Shivratri Fervor',
      theme: 'gold',
    },
    {
      name: 'Holy Shravan & Monsoon',
      months: 'Jun – Sep',
      icon: 'cloud',
      description:
        'Refreshing monsoon showers revitalize the Kshipra riverfront. Mondays of the Shravan month witness the legendary Mahakal Sawari processions, filling the historic streets with brass bands, royal banners, and deep devotion.',
      tag: 'Shravan Sawari Season',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar International Airport in Indore (IDR, approx. 55 km / 1 hr 15 mins drive) is the primary aviation hub, operating frequent daily nonstop flights to Delhi, Mumbai, Bengaluru, Hyderabad, Ahmedabad, and Goa.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Ujjain Junction (UJN) is a premier railway crossroads served by major superfast, Rajdhani, and Vande Bharat express trains directly linking Mumbai, Delhi, Varanasi, Kolkata, Jaipur, and Chennai.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'A modern, smooth 4-lane expressway links Ujjain to Indore in just over an hour. Paved regional highways provide seamless road connections to Omkareshwar (135 km), Maheshwar (145 km), Mandu (150 km), and Bhopal (190 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Chauffeured private AC sedans and SUVs provide door-to-door comfort. Dedicated e-rickshaws and authorized electric carts facilitate convenient transit across the pedestrianized zones of Shri Mahakal Lok.',
    },
  ],
  cta: {
    heading: 'Curate a Sacred Pilgrimage to Ujjain & the Malwa Shrines',
    description:
      'Partner with our B2B travel specialists for certified temple heritage guides, verified darshan planning assistance, high-standard vegetarian hospitality, and seamless private transfers across the Malwa-Narmada circuit.',
  },
};
