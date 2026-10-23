import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/janapav/${name}.webp`;

export const janapavContent: DestinationDetailContent = {
  id: 'janapav',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Janapav',
  subtitle: 'Where Sacred Hills Meet the Open Sky.',
  heroImage: a('janapav-hero'),
  ctaBackgroundImage: a('janapav-hero'),
  tags: ['Janapav Kuti', 'Hilltop Views', 'Forest Landscapes', 'Sacred Heritage', 'Scenic Escape'],
  overview: {
    heading: 'A Sacred Summit Above the Malwa Hills',
    description:
      'Rising approximately 881 metres above sea level in Mhow tehsil, Janapav Kuti is a scenic forested summit in Indore district renowned for its sweeping panoramic vistas and deep-rooted spiritual heritage. Long revered in regional tradition as the birthplace of Lord Parshuram and the ancient retreat of Sage Jamadagni, the hilltop offers refreshing country air, quiet woodland paths, and an iconic sunrise vantage point across the undulating Malwa plateau. Perfectly structured as a half-day excursion from Indore or Mhow, Janapav delivers an enriching blend of nature photography, peaceful hillside walks, and sacred cultural discovery.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Nature Lovers, Families, Photographers, Pilgrims' },
      { icon: 'leaf', label: 'The Mood', text: 'Serene, Scenic, Spiritual, Refreshing' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Half-Day Visit; Combine with Indore or Mhow' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Families, Nature & Spiritual Circuits' },
    ],
  },
  story: {
    heading: 'Forested Summits and Revered Malwa Legends',
    paragraphs: [
      'Standing proudly in the Vindhyachal range in Mhow tehsil, Janapav is enveloped by deciduous forests that burst into vibrant emerald green following the seasonal rains. The winding hill road ascents past leafy canopies to the peaceful summit, where cool breezes and expansive views across the Malwa landscape greet morning travelers.',
      'At the hilltop stands the revered Shri Parshuram Temple, Jamadagni Ashram, and the sacred Kund, forming a timeless sanctuary of devotion and natural repose. Revered in traditional beliefs as a sacred cradle of mythic lore and river origins, the summit welcomes travelers seeking respite, respectful exploration, and atmospheric photography above the plains.',
    ],
    image: a('janapav-hilltop'),
    imageAlt: 'Panoramic view from the forested summit of Janapav Kuti in Mhow tehsil near Indore',
    quote: 'Where quiet forest trails rise above the Malwa plateau, and sacred traditions echo through peaceful hilltop breezes.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar International Airport, Indore is approximately 47–48 km away, with road transfers to Janapav via the Indore–Mhow corridor.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Dr. Ambedkar Nagar (Mhow) Railway Station (approx. 20 km) is the nearest railhead; Indore Junction (approx. 45 km) provides nationwide connectivity.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Accessible from Indore and Mhow via the Indore–Khargone highway corridor; central Indore to Janapav is approximately 45 km via well-paved roads.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Pre-arranged private vehicle or taxi is recommended; confirm current final approach road conditions, seasonal weather, and temple parking arrangements.',
    },
  ],
  travellers: [
    { icon: 'leaf', name: 'Nature Lovers' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'users', name: 'Families with Children' },
    { icon: 'temple', name: 'Spiritual Pilgrims' },
    { icon: 'compass', name: 'Day Excursionists' },
    { icon: 'heart', name: 'FIT Travellers' },
  ],
  cta: {
    heading: 'Plan a Janapav Journey for Your Clients',
    description:
      'Create scenic hilltop escapes, nature-led excursions and meaningful spiritual journeys through the beautiful landscapes near Indore.',
  },
  fullGuide: [
    {
      title: 'Hilltop Elevation & Forest Ecosystem',
      points: [
        'Vindhyan Elevation: Rising to approximately 881 metres above sea level according to official district records, offering cooler breezes and panoramic valley vistas.',
        'Forest Cover: Surrounded by tropical dry deciduous and teak woodland that thrives and rejuvenates dramatically during monsoon months.',
        'Responsible Visits: Guests are requested to stay on paved access paths and maintained viewpoints to protect hillside vegetation and prevent soil erosion.',
      ],
    },
    {
      title: 'Pilgrimage Heritage & Sacred Traditions',
      points: [
        'Shri Parshuram Birthplace Tradition: Long revered in regional belief and Puranic lore as the sacred birthplace of Lord Parshuram.',
        'Jamadagni Ashram & Sacred Kund: Historic hermitage grounds and sacred spring water tank central to regional ritual devotion.',
        'Kartik Purnima Fair: A vibrant annual fair held during the Kartik Purnima period, welcoming pilgrims from throughout the Malwa and Nimar regions.',
      ],
    },
    {
      title: 'Itinerary Planning & Practical Travel Tips',
      points: [
        'Ideal Timing: Early morning visits (7:00 AM – 10:00 AM) provide pleasant temperatures, soft photography light, and peaceful temple visits.',
        'Regional Base: Best organized as a half-day excursion from hotels in Indore or Mhow; not suited as a standalone overnight stay.',
        'Nearby Additions: Can be paired seamlessly with visits to Mhow military heritage, Patalpani waterfall (seasonal), or Choral river landscapes.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Mhow Tehsil, Indore District', icon: 'pin' },
    { label: 'Ideal Visit', value: 'Half-Day Excursion', icon: 'calendar' },
    { label: 'Best Season', value: 'Monsoon & Post-Monsoon Scenery', icon: 'sun' },
    { label: 'Landscape', value: 'Forested Hills & Valleys', icon: 'mountain' },
    { label: 'Best For', value: 'Nature, Photography, Families & Pilgrims', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'janapav-hilltop',
      name: 'Janapav Hilltop Panorama',
      category: 'Hilltop Viewpoint',
      description: 'Expansive vistas overlooking forested slopes and surrounding Malwa landscapes from scenic hilltop viewpoints at approximately 881 metres elevation.',
      image: a('janapav-hilltop'),
    },
    {
      id: 'janapav-parshuram-temple',
      name: 'Shri Parshuram Temple',
      category: 'Sacred Temple',
      description: 'The hilltop shrine dedicated to Lord Parshuram, traditionally revered in regional belief as his sacred birthplace.',
      image: a('janapav-parshuram-temple'),
    },
    {
      id: 'janapav-jamadagni-ashram',
      name: 'Jamadagni Ashram',
      category: 'Pilgrimage Heritage',
      description: 'The sacred site traditionally associated with Sage Jamadagni, offering a peaceful atmosphere amidst ancient banyan and woodland shade.',
      image: a('janapav-jamadagni-ashram'),
    },
    {
      id: 'janapav-sacred-kund',
      name: 'Janapav Sacred Kund',
      category: 'Sacred Water Body',
      description: 'A revered hilltop water tank central to local pilgrimage traditions and folk lore associating the summit with regional river origins.',
      image: a('janapav-sacred-kund'),
    },
    {
      id: 'janapav-forest-trails',
      name: 'Forested Hill Routes',
      category: 'Nature Walk',
      description: 'Winding approach roads, green seasonal vegetation, and designated walking pathways through the surrounding teak and mixed forest canopy.',
      image: a('janapav-forest-trails'),
    },
    {
      id: 'janapav-kartik-purnima',
      name: 'Kartik Purnima Fair',
      category: 'Cultural Tradition',
      description: 'A traditional annual fair celebrated during Kartik Purnima, drawing devotees and rural visitors from across western Madhya Pradesh.',
      image: a('janapav-kartik-purnima'),
    },
  ],
  themes: [
    {
      id: 'hills-scenic-viewpoints',
      title: 'Hills & Scenic Viewpoints',
      icon: 'mountain',
      image: a('theme-hills'),
      sights: ['Janapav Hilltop', 'Panoramic Valley Views', 'Scenic Hill Drive', 'Golden-Hour Landscapes'],
      note: 'Best visited during clear morning or late afternoon hours for expansive views and comfortable climbing.',
    },
    {
      id: 'sacred-heritage-reflection',
      title: 'Sacred Heritage & Reflection',
      icon: 'temple',
      image: a('theme-spirituality'),
      sights: ['Shri Parshuram Temple', 'Jamadagni Ashram', 'Sacred Kund', 'Peaceful Spiritual Exploration'],
      note: 'Please respect shrine customs, devotee sentiments, and traditional sanctum protocols during visits.',
    },
    {
      id: 'forests-photography',
      title: 'Forests & Photography',
      icon: 'camera',
      image: a('theme-forest'),
      sights: ['Forested Landscapes', 'Seasonal Greenery', 'Nature Photography', 'Permitted Scenic Walks'],
      note: 'Walks should remain on confirmed accessible paths; visitors are encouraged to protect vegetation and wildlife.',
    },
    {
      id: 'indore-mhow-nature-circuit',
      title: 'Indore & Mhow Nature Circuit',
      icon: 'compass',
      image: a('theme-circuit'),
      sights: ['Janapav Kuti', 'Mhow Region', 'Patalpani Waterfall Extension', 'Choral Region Extension'],
      note: 'Easily combined as a half-day or full-day regional excursion with Indore city sightseeing or Mhow heritage.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'December to February',
      icon: 'snowflake',
      description: 'Pleasant weather for hilltop sightseeing, religious visits and daytime photography with comfortable temperatures.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'March to May',
      icon: 'sun',
      description: 'Warmer conditions; early morning or late afternoon excursions are recommended to avoid midday peak temperatures.',
      tag: 'Early Mornings',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'June to September',
      icon: 'cloud',
      description: 'Green hills and lush forest scenery at their most vibrant. Caution is advised for slippery stone paths and misty driving conditions.',
      tag: 'Lush Greenery',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'October to November',
      icon: 'users',
      description: 'Fresh greenery, clear vistas and comfortable outdoor conditions leading up to the traditional Kartik Purnima fair period.',
      tag: 'Fresh Landscapes',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: 'half-day-janapav-escape',
      title: 'Half-Day Morning Hilltop & Heritage Excursion',
      summary: 'A refreshing morning journey from Indore or Mhow exploring the panoramic heights and sacred lore of Janapav Kuti.',
      days: [
        '7:00 AM: Depart Indore or Mhow by private vehicle along the scenic highway corridor toward Janapav.',
        '8:00 AM – 10:30 AM: Ascend to Janapav summit for panoramic valley views, Shri Parshuram Temple visit, and nature photography.',
        '10:30 AM – 11:30 AM: Enjoy a scenic countryside descent and return to Mhow or Indore for scheduled afternoon activities.',
      ],
    },
    {
      id: 'full-day-mhow-nature-circuit',
      title: 'Full-Day Mhow Nature & Sacred Summit Circuit',
      summary: 'Combine Janapav’s elevated natural splendor with Mhow’s historical landmarks and regional seasonal attractions.',
      days: [
        'Morning: Early visit to Janapav Kuti for hilltop mist, morning prayers, and sweeping Malwa valley viewpoints.',
        'Midday: Explore Dr. Ambedkar Memorial and colonial cantonment heritage landmarks in nearby Mhow.',
        'Afternoon: Seasonal excursion toward Patalpani waterfall or scenic Choral countryside before returning to Indore.',
      ],
    },
  ],
};
