import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/gulawat/${name}.webp`;

export const gulawatContent: DestinationDetailContent = {
  id: 'gulawat',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Gulawat',
  subtitle: 'Where a Thousand Lotuses Meet the Morning Light.',
  heroImage: a('gulawat-hero'),
  ctaBackgroundImage: a('gulawat-hero'),
  tags: ['Lotus Valley', 'Scenic Wetlands', 'Nature Photography', 'Birdwatching', 'Indore Countryside'],
  overview: {
    heading: 'Where Nature Blooms in Quiet Beauty',
    description:
      'Tucked away near Gulawat village in Hatod tehsil, just a short drive from Indore, Gulawat Lotus Valley is a peaceful wetland escape where seasonal pink lotus blooms, green lily-covered water surfaces, bamboo-lined scenery and gentle morning light create an unforgettable natural setting. Conceived as a scenic half-day excursion from Indore rather than an overnight resort stay, Gulawat offers trade partners an effortless nature addition to urban, culinary, and Malwa heritage itineraries, providing travelers with calming open waters, rural air, and pristine early-morning photography.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Couples, Families, Nature Lovers, Photographers' },
      { icon: 'leaf', label: 'The Mood', text: 'Peaceful, Romantic, Refreshing, Scenic' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Half-Day Excursion from Indore' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Families, Photography & Leisure Groups' },
    ],
  },
  story: {
    heading: 'Morning Mist, Water Lilies and Whispering Bamboo',
    paragraphs: [
      'Gulawat Lotus Valley unfolds as an expansive natural wetland basin in the Malwa countryside near Indore. As dawn breaks over the calm water body, soft morning light filters through the morning mist, coaxing seasonal pink lotus blossoms open above broad floating green pads across the calm water surface.',
      'Flanked by rustic agrarian landscapes, dense bamboo groves, and scenic wooden walking paths, the valley invites unhurried contemplation. Visitors can stroll along the scenic bridge, observe resident wetland birds foraging in the shallows, and enjoy crisp countryside air before returning to Indore for urban leisure and culinary sightseeing.',
    ],
    image: a('gulawat-lake'),
    imageAlt: 'Calm wetland waters, lily pads and seasonal lotus blooms at Gulawat near Indore',
    quote: 'Where seasonal lotuses meet the morning sun, and peaceful wetland waters reflect the gentle rhythm of rural Malwa.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar International Airport, Indore is the nearest airport hub (approx. 16–25 km depending on route), followed by a private taxi transfer.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Indore Junction Railway Station (approx. 25–30 km) connects major nationwide rail lines, with convenient onward road transfers to Gulawat.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Located near Gulawat village in Hatod tehsil, approximately 25–30 km from central Indore depending on the starting point, via rural and district roads.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private car or pre-arranged taxi is recommended for a comfortable day excursion; approach roads are rustic, so confirming conditions locally is advised.',
    },
  ],
  travellers: [
    { icon: 'users', name: 'Couples & Honeymooners' },
    { icon: 'leaf', name: 'Nature Lovers' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'users', name: 'Families with Children' },
    { icon: 'compass', name: 'Day Excursionists' },
    { icon: 'heart', name: 'Birdwatching Enthusiasts' },
  ],
  cta: {
    heading: 'Plan a Gulawat Escape for Your Clients',
    description:
      'Create refreshing nature excursions through lotus-filled wetlands, scenic countryside and peaceful landscapes near Indore.',
  },
  fullGuide: [
    {
      title: 'Wetland Ecosystem & Lotus Phenology',
      points: [
        'Seasonal Flowering: Lotus blooms respond to morning sunlight and are most vibrant from post-monsoon through late winter, depending on seasonal rainfall and water levels.',
        'Wetland Habitat: The shallow lake basin supports native aquatic flora, lily beds, and reeds that provide feeding and nesting ground for resident bird species.',
        'Conservation Awareness: Visitors are reminded that lotuses grow in a fragile aquatic habitat; picking flowers or disturbing root structures is discouraged.',
      ],
    },
    {
      title: 'Photography Etiquette & Visiting Tips',
      points: [
        'Golden Hour Advantage: Arrive around sunrise (6:30 AM – 8:30 AM) to capture diffused morning light, opening lotus blossoms, and calm glassy water reflections.',
        'Scenic Footbridge: The wooden walkway structure provides elevated views across the lotus carpet without wading into delicate wetland vegetation.',
        'Responsible Tourism: Please carry personal waste back to Indore, avoid single-use plastics, and respect local farming boundaries surrounding the lake.',
      ],
    },
    {
      title: 'Circuit Planning & Itinerary Integration',
      points: [
        'Excursion Format: Gulawat is ideally designed as a 2–3 hour morning nature excursion rather than an overnight stay, with guests staying in Indore hotels.',
        'Complementary Sights: Pairs seamlessly with afternoon culinary explorations in Indore (Sarafa Bazar, Chappan Dukan) or regional heritage circuits to Ujjain and Mandu.',
        'Seasonal Verification: B2B partners should verify recent bloom status with local operators prior to booking photography-focused client groups.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Hatod, Indore District', icon: 'pin' },
    { label: 'Ideal Visit', value: 'Half-Day Excursion', icon: 'calendar' },
    { label: 'Best Season', value: 'Lotus Bloom Months, Approx. Oct–Feb', icon: 'sun' },
    { label: 'Landscape', value: 'Lotus Wetlands & Greenery', icon: 'mountain' },
    { label: 'Best For', value: 'Couples, Families, Nature & Photography', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'pink-lotus-blooms',
      name: 'Pink Lotus Blooms',
      category: 'Seasonal Wetland Flower',
      description: 'Seasonal pink lotus flowers spreading across the wetland water surface, with bloom intensity naturally varying by season, weather and water conditions.',
      image: a('gulawat-lotus-blooms'),
    },
    {
      id: 'gulawat-wetland-lake',
      name: 'Gulawat Wetland Lake',
      category: 'Wetland Landscape',
      description: 'Calm open water bodies, expansive lotus-covered water surfaces, natural reflections, and serene rural surroundings.',
      image: a('gulawat-lake'),
    },
    {
      id: 'scenic-wetland-bridge',
      name: 'Scenic Wetland Bridge',
      category: 'Scenic Walkway',
      description: 'A picturesque walkway bridge stretching over the water, offering panoramic viewpoints across the lotus beds and serene wetland surroundings.',
      image: a('gulawat-bridge'),
    },
    {
      id: 'bamboo-lined-greenery',
      name: 'Bamboo-Lined Greenery',
      category: 'Nature Corridor',
      description: 'Lush green vegetation and bamboo-lined wetland surroundings creating cool shaded corridors and picturesque countryside atmosphere.',
      image: a('gulawat-bamboo'),
    },
    {
      id: 'birdwatching-wetland-life',
      name: 'Birdwatching & Wetland Life',
      category: 'Avian Habitat',
      description: 'Opportunities to observe resident and seasonal wetland birdlife quietly foraging across the shallows and reed beds.',
      image: a('gulawat-birdwatching'),
    },
    {
      id: 'sunrise-golden-hour',
      name: 'Sunrise & Golden-Hour Views',
      category: 'Atmospheric Light',
      description: 'Changing morning light, gentle natural mist, and mirror-like reflections that reward early-risers and nature photography enthusiasts.',
      image: a('gulawat-sunrise'),
    },
  ],
  themes: [
    {
      id: 'lotus-wetland-discovery',
      title: 'Lotus & Wetland Discovery',
      icon: 'leaf',
      image: a('theme-lotus'),
      sights: ['Seasonal Pink Lotuses', 'Water-Lily Landscapes', 'Scenic Wetland Bridge', 'Nature Appreciation'],
      note: 'Best experienced during morning hours in the flowering months; visitors should stay on designated walkways and protect aquatic vegetation.',
    },
    {
      id: 'photography-scenic-moments',
      title: 'Photography & Scenic Moments',
      icon: 'camera',
      image: a('theme-photography'),
      sights: ['Sunrise Photography', 'Lotus Reflections', 'Scenic Landscape Views', 'Nature Portraits Where Permitted'],
      note: 'Early morning provides optimal soft lighting and calm water reflections; respect visitor walkways and local countryside norms.',
    },
    {
      id: 'birdlife-nature',
      title: 'Birdlife & Nature',
      icon: 'compass',
      image: a('theme-birdlife'),
      sights: ['Wetland Birdwatching', 'Natural Vegetation', 'Quiet Observation', 'Seasonal Bird Activity'],
      note: 'A tranquil haven for quiet avian observation; sightings vary naturally by season, water depth, and weather.',
    },
    {
      id: 'indore-countryside-escapes',
      title: 'Indore Countryside Escapes',
      icon: 'mountain',
      image: a('theme-countryside'),
      sights: ['Gulawat Day Excursion', 'Rural Road Landscapes', 'Indore City Extension', 'Leisure Sightseeing Circuit'],
      note: 'Conveniently added as a half-day morning nature escape to any Indore leisure, culinary, or Malwa heritage itinerary.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'December to February',
      icon: 'snowflake',
      description: 'The preferred period for cool-weather wetland visits, seasonal lotus flowers and comfortable morning photography. Bloom conditions must be checked locally.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'March to May',
      icon: 'sun',
      description: 'Warmer conditions and potentially fewer lotus blooms. Recommend short early-morning visits where appropriate before temperatures rise.',
      tag: 'Early Mornings',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'June to September',
      icon: 'cloud',
      description: 'Green countryside and replenished wetland scenery, with possible access or weather limitations during heavy downpours.',
      tag: 'Replenished Waters',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'October to November',
      icon: 'users',
      description: 'An attractive transition into the main lotus-viewing period, subject to seasonal flowering and water levels.',
      tag: 'Bloom Transition',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: 'half-day-lotus-escape',
      title: 'Half-Day Morning Lotus & Countryside Excursion',
      summary: 'An invigorating morning escape from Indore designed for nature enthusiasts, couples, and photography lovers.',
      days: [
        '6:30 AM: Depart Indore by private vehicle for the scenic 25 km drive through Malwa countryside.',
        '7:15 AM – 9:30 AM: Arrive at Gulawat Lotus Valley for early-morning photography, wetland bridge walk, and tranquil lotus observation.',
        '9:30 AM – 10:30 AM: Enjoy a scenic countryside tea stop and return to Indore for scheduled city sightseeing.',
      ],
    },
    {
      id: 'full-day-indore-nature',
      title: 'Full-Day Indore Nature & Cultural Heritage Circuit',
      summary: 'Combine serene morning wetland landscapes with Indore’s vibrant royal architecture and legendary culinary culture.',
      days: [
        'Morning: Early-morning departure to Gulawat Lotus Valley for sunrise, birdwatching, and lotus valley walking paths.',
        'Afternoon: Return to Indore to explore Rajwada Palace, Lal Bagh Palace, and Central Museum.',
        'Evening: Experience Indore’s celebrated street food heritage at the iconic Sarafa Bazar night market.',
      ],
    },
  ],
};
