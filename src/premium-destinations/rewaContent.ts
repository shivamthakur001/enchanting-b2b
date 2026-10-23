import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/rewa/${name}.webp`;

export const rewaContent: DestinationDetailContent = {
  id: 'rewa',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Rewa',
  subtitle: 'Where Waterfalls Meet Royal Heritage.',
  heroImage: a('rewa-hero'),
  ctaBackgroundImage: a('rewa-hero'),
  tags: ['Waterfalls', 'Rewa Plateau', 'Scenic Landscapes', 'White Tiger Heritage', 'Royal Rewa'],
  overview: {
    heading: 'Where Cascading Waters Meet Timeless Heritage',
    description:
      'Set upon the scenic Rewa Plateau in northeastern Madhya Pradesh, Rewa presents a captivating blend of spectacular canyon waterfalls, deep river gorges, enduring royal heritage, and its renowned historical association with the white tiger. From the dramatic plunges of Purwa, Keoti, and Bahuti falls to the lakeside serenity of Govindgarh and the storied walls of Rewa Fort, the destination provides travel partners with a distinctive, multi-faceted circuit ideal for nature enthusiasts, family breaks, and heritage explorers.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Families, Nature Lovers, Photographers, FIT Travellers' },
      { icon: 'leaf', label: 'The Mood', text: 'Dramatic, Scenic, Historic, Refreshing' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Suggested 1N/2D or 2N/3D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Family Groups, Educational & Nature Circuits' },
    ],
  },
  story: {
    heading: 'Plateau Horizons, Plunging Falls and Royal Memory',
    paragraphs: [
      'The Rewa Plateau is shaped by the tributaries of the Tons River carving sheer vertical drops across sandstone scarps, creating some of Central India’s most dramatic canyon waterfalls. These majestic falls come alive with powerful visual force during and immediately following the monsoon rains.',
      'Beyond its cascades, Rewa holds a rich regal past as the historic seat of the Baghela dynasty, celebrated for the architectural legacy of Rewa Fort, the peaceful summer palace at Govindgarh, and its global fame as the birthplace of the world’s first captive white tiger.',
    ],
    image: a('rewa-purwa-falls'),
    imageAlt: 'Scenic view of Purwa Falls cascading over the Rewa plateau into a deep rocky gorge',
    quote: 'Where the rugged sandstone plateau gives way to thundering canyon falls and centuries of royal grace.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Rewa Airport serves the region; flight schedules and regional connectivity via Prayagraj or Khajuraho should be verified prior to travel.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Rewa Railway Station is connected through the Satna–Rewa line with direct trains to Bhopal, Jabalpur, Delhi and major regional hubs.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Accessible via national and state highways linking Rewa with Satna (approx. 50 km), Prayagraj (approx. 130 km), Varanasi and Jabalpur.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Pre-arranged private vehicles are recommended for exploring widely dispersed waterfalls, heritage sites and Mukundpur.',
    },
  ],
  travellers: [
    { icon: 'users', name: 'Families' },
    { icon: 'leaf', name: 'Nature Lovers' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'luggage', name: 'FIT Travellers' },
    { icon: 'landmark', name: 'Heritage Seekers' },
    { icon: 'compass', name: 'Educational Groups' },
  ],
  cta: {
    heading: 'Plan a Rewa Journey for Your Clients',
    description:
      'Waterfall landscapes, royal heritage and curated nature-led journeys through the heart of Rewa.',
  },
  fullGuide: [
    {
      title: 'Plateau Cascades & Landscape Topography',
      points: [
        'Dramatic Gorges: Plunging waterfalls carving steep rocky canyons across the Vindhya and Rewa plateaus.',
        'Seasonal Flow Dynamics: Maximum cascade volume occurs during the monsoon season (July to September), transitioning to calm pools in post-monsoon months.',
        'Designated Safe Viewpoints: All waterfall viewing must be observed strictly from authorized railings and platforms; venturing to cliff edges or swimming is prohibited.',
      ],
    },
    {
      title: 'Heritage Landmarks & White Tiger Legacy',
      points: [
        'Rewa Fort & Royal Palaces: A storied fortress showcasing royal halls, temples, and weaponry of the Baghela rulers.',
        'Govindgarh Summer Palace: Historic lakeside residence famed for its scenic vistas, refreshing microclimate, and historical mango orchards.',
        'Mukundpur White Tiger Safari: A regulated regional safari and conservation center near Govindgarh commemorating Rewa’s historical white tiger discovery; operated as a separate daytime excursion.',
      ],
    },
    {
      title: 'Itinerary Planning & Circuit Integration',
      points: [
        'Short Break (1N/2D): Waterfalls circuit paired with Govindgarh Lake and Rewa Fort.',
        'Extended Circuit (2N/3D): In-depth waterfall exploration, Mukundpur safari, and royal architecture.',
        'Regional Combinations: Easily integrated into broader Vindhya circuits connecting Khajuraho, Panna, and Bandhavgarh.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Rewa, Madhya Pradesh', icon: 'pin' },
    { label: 'Ideal Stay', value: 'Suggested 1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Monsoon for waterfalls; cooler months for sightseeing', icon: 'sun' },
    { label: 'Landscape', value: 'Plateau, Waterfalls & Lakes', icon: 'mountain' },
    { label: 'Best For', value: 'Nature, Families, Photography & Heritage Groups', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'purwa-falls',
      name: 'Purwa Falls',
      category: 'Scenic Waterfall',
      description: 'A dramatic waterfall dropping over the Rewa Plateau into a steep gorge, with seasonal flow and striking canyon views.',
      image: a('rewa-purwa-falls'),
    },
    {
      id: 'keoti-falls',
      name: 'Keoti Falls',
      category: 'Waterfall & Canyon',
      description: 'A spectacular waterfall surrounded by rocky cliffs and scenic viewpoints; visitors should observe from designated safe viewing areas.',
      image: a('rewa-keoti-falls'),
    },
    {
      id: 'bahuti-falls',
      name: 'Bahuti Falls',
      category: 'Dramatic Waterfall',
      description: 'One of the region’s remarkable tall waterfalls, offering dramatic plateau landscapes and seasonal scenic beauty.',
      image: a('rewa-bahuti-falls'),
    },
    {
      id: 'govindgarh-palace-lake',
      name: 'Govindgarh Palace & Lake',
      category: 'Lakeside Heritage',
      description: 'Historic royal architecture and an attractive lakeside setting associated with Rewa’s former rulers.',
      image: a('rewa-govindgarh'),
    },
    {
      id: 'mukundpur-safari',
      name: 'Mukundpur White Tiger Safari & Zoo',
      category: 'Wildlife & Heritage',
      description: 'A well-known regional wildlife attraction linked to Rewa’s white tiger legacy, located as a separate excursion from Rewa city with regulated visitor access.',
      image: a('rewa-white-tiger'),
    },
    {
      id: 'rewa-fort',
      name: 'Rewa Fort',
      category: 'Royal Architecture',
      description: 'A historic royal landmark offering a glimpse into Rewa’s cultural and architectural heritage.',
      image: a('rewa-fort'),
    },
  ],
  themes: [
    {
      id: 'waterfalls-landscapes',
      title: 'Waterfalls & Scenic Landscapes',
      icon: 'mountain',
      image: a('theme-waterfalls'),
      sights: ['Purwa Falls', 'Keoti Falls', 'Bahuti Falls', 'Chachai Falls'],
      note: 'Spectacular plateau waterfalls with flow dependent on seasonal rains; viewing must strictly remain within designated safe observation points.',
    },
    {
      id: 'royal-heritage',
      title: 'Royal Heritage & Architecture',
      icon: 'landmark',
      image: a('theme-heritage'),
      sights: ['Rewa Fort', 'Govindgarh Palace', 'Venkat Bhawan', 'Rewa Royal Heritage'],
      note: 'Architectural and cultural landmarks reflecting the royal lineage of the Baghela rulers across palaces, forts, and historic civic buildings.',
    },
    {
      id: 'wildlife-nature',
      title: 'Wildlife & Nature',
      icon: 'compass',
      image: a('theme-wildlife'),
      sights: ['Mukundpur White Tiger Safari & Zoo', 'Birdwatching Where Permitted', 'Scenic Countryside', 'Nature Excursions'],
      note: 'A dedicated regional wildlife and conservation facility celebrating the historical legacy of the white tiger; organized as a separate day excursion.',
    },
    {
      id: 'photography-exploration',
      title: 'Photography & Slow Exploration',
      icon: 'camera',
      image: a('theme-photography'),
      sights: ['Waterfall Viewpoints', 'Govindgarh Lake', 'Plateau Landscapes', 'Golden-Hour Photography'],
      note: 'Expansive viewpoints across canyon drops, lakeside reflections at dawn and dusk, and distinctive plateau topography ideal for photography.',
    },
  ],
  seasons: [
    {
      name: 'Monsoon',
      months: 'July to September',
      icon: 'cloud',
      description: 'Waterfalls and surrounding landscapes are often at their most dramatic. Heavy rainfall, slippery surfaces and restricted viewpoints require caution.',
      tag: 'Cascades in Flow',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'October to November',
      icon: 'users',
      description: 'Green scenery and suitable sightseeing conditions, depending on rainfall and local access.',
      tag: 'Fresh Landscapes',
      theme: 'peach',
    },
    {
      name: 'Winter',
      months: 'December to February',
      icon: 'snowflake',
      description: 'Comfortable conditions for heritage sightseeing, wildlife excursions and general leisure itineraries.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'March to June',
      icon: 'sun',
      description: 'Warmer weather; recommend early morning or evening sightseeing where suitable. Waterfall flow may be reduced.',
      tag: 'Quiet Sightseeing',
      theme: 'green',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Rewa Cascades & Royal Highlights',
      summary: 'A curated short getaway covering Rewa’s premier waterfalls, Govindgarh Lake, and heritage landmarks.',
      days: [
        'Day 1: Arrival in Rewa, visit Rewa Fort and Govindgarh Palace & Lake, evening sunset views over the water.',
        'Day 2: Morning excursion to Purwa and Keoti waterfalls, scenic canyon photography, and onward departure.',
      ],
    },
    {
      id: '2n3d',
      title: '2N / 3D Complete Rewa Nature & Heritage Circuit',
      summary: 'Comprehensive exploration of dramatic plateau cascades, Mukundpur safari, and regal heritage.',
      days: [
        'Day 1: Arrival and check-in, exploration of Rewa Fort and royal architectural landmarks, followed by evening leisure.',
        'Day 2: Full-day waterfalls trail taking in Purwa, Keoti, and Bahuti falls from designated viewpoints.',
        'Day 3: Morning excursion to Mukundpur White Tiger Safari & Zoo near Govindgarh, scenic lakeside views, and departure.',
      ],
    },
  ],
};
