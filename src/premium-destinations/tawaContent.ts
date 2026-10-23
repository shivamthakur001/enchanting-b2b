import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/tawa/${name}.webp`;

export const tawaContent: DestinationDetailContent = {
  id: 'tawa',
  themeLabel: 'Nature',
  heroEyebrow: 'Nature Destination · Madhya Pradesh',
  title: 'Tawa',
  subtitle: 'A Serene Lakeside Escape at the Gateway to Satpura.',
  heroImage: a('tawa-hero'),
  ctaBackgroundImage: a('tawa-hero'),
  tags: ['Reservoir', 'Nature Retreat', 'Boat Cruise', 'Birdwatching', 'Satpura Landscapes'],
  overview: {
    heading: 'Where the Waters Meet the Wilderness',
    description:
      'Set against the rugged contours of the Satpura hills, Tawa Reservoir is a tranquil sanctuary of calm waters, wooded shores, and scenic islands. Presenting an unhurried contrast to core wildlife tracks, it offers a peaceful lakeside setting for scenic leisure itineraries and relaxed nature escapes, with convenient connections to Satpura and Madai where routing permits.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Couples, Families, Leisure FIT, Nature Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Peaceful, Scenic, Refreshing' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Day excursion or suggested overnight visit (1N / 2D)' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Families, Small Groups' },
    ],
  },
  story: {
    heading: 'A Peaceful Reservoir on the Edge of the Forest',
    paragraphs: [
      'Built across the Tawa and Denwa rivers within the Narmadapuram district, Tawa Reservoir forms a vast expanse of blue water bordered by the Satpura hills. It serves as a gentle introduction to the Satpura landscape, where open skies meet rolling sal and teak woods.',
      'Visitors come for quiet waterfront afternoons, scenic boat rides when operating, sunset horizons over still waters, and the opportunity to pair tranquil lakeside relaxation with deeper Satpura wildlife circuits.',
    ],
    image: a('tawa-reservoir'),
    imageAlt: 'Calm waters of Tawa Reservoir with forested hills in the distance',
    quote: 'Where forested ridges drop into silent waters, offering an unhurried threshold to the Satpura wild.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport, Bhopal (approx. 115 km) is the primary air gateway, with highway transfers to Tawa.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Itarsi Junction (approx. 35 km) is a major national rail hub; Narmadapuram station (approx. 45 km) also serves the area.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Accessible via well-paved roads from Bhopal (approx. 2.5–3 hrs) and Narmadapuram / Hoshangabad (approx. 1 hr).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Pre-arranged vehicle transfers are recommended; boat cruises and jetty crossings operate under local tourism authorities and are subject to schedule.',
    },
  ],
  travellers: [
    { icon: 'heart', name: 'Couples' },
    { icon: 'users', name: 'Families' },
    { icon: 'luggage', name: 'Leisure FIT' },
    { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'compass', name: 'Small Groups' },
    { icon: 'leaf', name: 'Nature Lovers' },
  ],
  cta: {
    heading: 'Plan a Tawa Journey for Your Clients',
    description:
      'Scenic reservoir escapes, customised leisure itineraries and nature-focused experiences in the Satpura region.',
  },
  fullGuide: [
    {
      title: 'Tawa Reservoir and Waterfront Highlights',
      points: [
        'Tawa Reservoir: Expansive water catchment created by the Tawa Dam on the Tawa River, framed by Satpura hills.',
        'Scenic Boat Cruise: Seasonal boating services operated by MP Tourism / authorized local operators provide relaxing reservoir journeys; schedules depend on water levels and operational clearances.',
        'Sunset Viewing: Wide unhindered western horizon over the reservoir makes sunset one of the signature moments of any stay.',
        'Birdwatching: Reservoir margins attract cormorants, kingfishers, egrets, seasonal migratory ducks and waders during cooler months.',
      ],
    },
    {
      title: 'Satpura & Madai Logistics Distinction',
      points: [
        'Important distinction: Tawa Dam and Resort area are primarily peaceful reservoir leisure destinations, located roughly 30–40 km from the Madhai safari gate.',
        'Madhai is the primary entrance for Satpura National Park core jungle safaris, canters, and canoeing on the Denwa.',
        'While Tawa and Madhai can be combined in extended regional itineraries, safari bookings must be coordinated specifically through official forest department channels at Madhai.',
      ],
    },
    {
      title: 'Travel Trade Planning & Seasonality',
      points: [
        'Ideal travel window runs from October through March when daytime temperatures are pleasant and skies are clear.',
        'Monsoon season (July to September) transforms the landscape into lush green, but heavy rains can lead to regulatory suspension of reservoir boat rides.',
        'Recommended as a 1-night relaxing stopover between Bhopal and Pachmarhi / Satpura, or as an unhurried weekend escape.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Narmadapuram, MP', icon: 'pin' },
    { label: 'Ideal Stay', value: '1–2 Days', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Landscape', value: 'Reservoir & Hills', icon: 'mountain' },
    { label: 'Best For', value: 'Couples & Nature Groups', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'tawa-reservoir',
      name: 'Tawa Reservoir',
      category: 'Scenic Landscape',
      description: 'Expansive serene waters framed by forested Satpura hills and peaceful scattered islands.',
      image: a('tawa-reservoir'),
    },
    {
      id: 'boat-cruise',
      name: 'Reservoir Boat Cruise',
      category: 'Water Experience',
      description: 'Relaxing waterborne exploration across the reservoir, subject to operator availability.',
      image: a('tawa-boat-cruise'),
    },
    {
      id: 'birdwatching',
      name: 'Birdwatching',
      category: 'Wildlife & Nature',
      description: 'Resident and seasonal birdlife around suitable reservoir coves and forest margins.',
      image: a('tawa-birdwatching'),
    },
    {
      id: 'sunset-point',
      name: 'Sunset Point',
      category: 'Viewpoint',
      description: 'Beautiful evening views as the sun lowers across the open expanse of the water.',
      image: a('tawa-sunset'),
    },
    {
      id: 'tawa-dam',
      name: 'Tawa Dam',
      category: 'Landmark',
      description: 'The monumental dam structure providing panoramic viewpoints across the lake catchment.',
      image: a('tawa-dam'),
    },
    {
      id: 'satpura-backwaters',
      name: 'Satpura Backwaters',
      category: 'Wilderness Gateway',
      description: 'Scenic forest-and-water vistas, with nearby Madai experiences accessible as an optional extension.',
      image: a('tawa-backwaters'),
    },
  ],
  themes: [
    {
      id: 'boating',
      title: 'Water & Boating',
      icon: 'compass',
      image: a('theme-boating'),
      sights: ['Reservoir Cruise', 'Scenic Boat Ride', 'Waterfront Exploration', 'Sunset Viewing'],
      note: 'Cruises and boat excursions operate subject to local administration and seasonal water conditions.',
    },
    {
      id: 'nature',
      title: 'Birdlife & Nature',
      icon: 'leaf',
      image: a('theme-nature'),
      sights: ['Birdwatching', 'Forest Landscapes', 'Seasonal Bird Activity', 'Nature Appreciation'],
      note: 'Woodland fringes and shallow inlets provide quiet habitats for resident birds and winter migratory visitors.',
    },
    {
      id: 'photography',
      title: 'Photography & Scenic Views',
      icon: 'mountain',
      image: a('theme-photography'),
      sights: ['Reservoir Photography', 'Golden-Hour Landscapes', 'Sunset Photography', 'Panoramic Viewpoints'],
      note: 'Wide horizons, dramatic reflections and morning mist make Tawa a compelling stop for landscape photographers.',
    },
    {
      id: 'eco',
      title: 'Slow Travel & Eco Experiences',
      icon: 'footprints',
      image: a('theme-eco'),
      sights: ['Lakeside Relaxation', 'Nature-Based Retreat', 'Leisure Walks Where Permitted', 'Optional Madai Extension'],
      note: 'Designed for guests seeking peaceful downtime away from crowded circuits, with optional Madai extensions for wildlife.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description: 'Pleasant weather, nature excursions and birdwatching across comfortable sunny days.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – Jun',
      icon: 'sun',
      description: 'Warm conditions; plan comfortable morning and late-afternoon lakeside timings.',
      tag: 'Quiet Travel',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description: 'Dramatic greenery and changing reservoir scenery; water activities may be restricted.',
      tag: 'Scenic Landscapes',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'Sep – Nov',
      icon: 'users',
      description: 'Scenic landscape experiences with availability checks as post-rain operations resume.',
      tag: 'Trade Friendly',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Lakeside Escape',
      summary: 'A rejuvenating overnight getaway on the Tawa Reservoir.',
      days: [
        'Day 1: Arrive from Bhopal or Itarsi, check in at lakeside resort, afternoon waterfront relaxation and sunset boat cruise (subject to operation).',
        'Day 2: Morning birdwatching along reservoir shores, leisurely breakfast, and departure toward Pachmarhi or Bhopal.',
      ],
    },
    {
      id: 'satpura-circuit',
      title: 'Satpura Wilderness & Water Circuit',
      summary: 'Combine Tawa lakeside leisure with Madhai safari adventures.',
      days: [
        'Day 1: Arrive Tawa, reservoir sunset and tranquil overnight.',
        'Day 2: Transfer to Madhai / Satpura National Park (approx. 1 hr), afternoon buffer safari or canoe ride.',
        'Day 3: Morning core jeep safari at Satpura, wilderness walk, and forward journey.',
      ],
    },
  ],
};
