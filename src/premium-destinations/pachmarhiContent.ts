import type { DestinationDetailContent, DestinationPackage } from './destinationDetailTypes';
export type { DestinationDetailContent, DestinationPackage } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/pachmarhi/${name}.webp`;

export const pachmarhiContent: DestinationDetailContent = {
  id: 'pachmarhi',
  themeLabel: 'Nature',
  heroEyebrow: 'Nature Destination · Madhya Pradesh',
  title: 'Pachmarhi',
  subtitle: "The Queen of Satpura — Madhya Pradesh’s timeless hill retreat of waterfalls, forests, caves and colonial charm.",
  heroImage: a('pachmarhi-hero'),
  tags: ['Hill Station', 'Waterfalls', 'Caves', 'Forest Escape', 'Colonial Charm'],
  overview: {
    heading: 'Madhya Pradesh’s Only Hill Station',
    description: 'Pachmarhi is a rare blend of natural beauty, adventure, spiritual sites and colonial heritage. With misty hills, waterfalls, dense forests and dramatic viewpoints, it offers a refreshing escape for all kinds of travellers.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Leisure, Soft Adventure, Family Holidays, School Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Scenic, Calm, Refreshing, Elevated' },
      { icon: 'calendar', label: 'Ideal Duration', text: '2N / 3D or 3N / 4D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Family, School Groups & Nature Circuits' },
    ],
  },
  story: {
    heading: 'A Hill Town of Legends and Landscapes',
    paragraphs: [
      'Nestled in the Satpura Range, Pachmarhi is Madhya Pradesh’s only hill station. Often called the “Queen of Satpura”, it is known for its scenic beauty, waterfalls, caves, colonial heritage and serene forests.',
      'From breathtaking viewpoints and cascading waterfalls to ancient caves and spiritual sites, Pachmarhi offers a perfect blend of nature, history and quiet charm.',
    ],
    image: a('pachmarhi-story'),
    imageAlt: 'Golden sunset over the layered Satpura hills',
    quote: 'A rare hill destination where forest silence, stone legends and cool mountain air meet in one journey.',
  },
  access: [
    { icon: 'plane', label: 'By Air', text: 'Air access via Bhopal or Jabalpur; choose transfer based on your routing.' },
    { icon: 'train', label: 'By Rail', text: 'Pipariya is the nearest major railhead, around 50 km from Pachmarhi.' },
    { icon: 'car', label: 'By Road', text: 'Road transfers are available via Pipariya, Bhopal and Jabalpur.' },
    { icon: 'pin', label: 'Local Transfer', text: 'Sightseeing routes may require local permits or designated transport.' },
  ],
  travellers: [
    { icon: 'heart', name: 'Couples' }, { icon: 'users', name: 'Families' },
    { icon: 'luggage', name: 'Leisure FIT' }, { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'graduation', name: 'School Groups' }, { icon: 'leaf', name: 'Nature Lovers' },
  ],
  cta: {
    heading: 'Plan a Pachmarhi Journey for Your Clients',
    description: 'Customised FIT, family, educational and nature-led itineraries available for the Queen of Satpura.',
  },
  fullGuide: [
    {
      title: 'Natural marvels and scenic viewpoints',
      points: [
        'Priyadarshini Point (Forsyth Point): panoramic vistas of the Pachmarhi Valley and distant peaks.',
        'Dhoopgarh: a famed Satpura sunset viewpoint; timing and accessibility can vary.',
        'Bee Fall (Jamuna Prapat), Duchess Fall and Apsara Vihar: popular cascades and pools, subject to weather and local access.',
        'Handi Khoh: a dramatic deep ravine framed by rugged forested cliffs.',
      ],
    },
    {
      title: 'Caves, faith and colonial history',
      points: [
        'Pandav Caves: a group of ancient rock-cut caves with legends associated with the Pandavas.',
        'Jata Shankar: a revered natural cave associated with Lord Shiva.',
        'Mahadev, Gupt Mahadev and Chauragarh: significant devotional stops with differing walking requirements.',
        'Colonial-era churches, buildings and cantonment heritage provide a distinct historical layer.',
      ],
    },
    {
      title: 'Experiences and travel planning',
      points: [
        'Nature walks, birdwatching, forest photography, jeep sightseeing and sunrise/sunset outings suit many leisure guests.',
        'Seasonal adventure opportunities may be available only through authorized operators; confirm conditions and permits before quoting.',
        'October to March usually works well for sightseeing; monsoon creates lush scenery but some sites and roads can have restrictions.',
        'Pipariya serves as a principal rail gateway. Transfers can also be designed from Bhopal or Jabalpur.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Satpura Range', icon: 'pin' },
    { label: 'Ideal Stay', value: '2–3 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Elevation', value: '≈ 1,067 m', icon: 'mountain' },
    { label: 'Best For', value: 'Nature · Leisure · Family', icon: 'leaf' },
  ],
  highlights: [
    { id: 'priyadarshini', name: 'Priyadarshini Point', category: 'Viewpoint', description: 'Expansive valley views from a celebrated hilltop lookout.', image: a('pachmarhi-sunset') },
    { id: 'dhoopgarh', name: 'Dhoopgarh', category: 'Viewpoint', description: 'A striking Satpura summit known for its sunset panoramas.', image: a('pachmarhi-dhoopgarh') },
    { id: 'bee-fall', name: 'Bee Fall', category: 'Waterfall', description: 'A refreshing cascading waterfall framed by lush forest.', image: a('pachmarhi-beefalls') },
    { id: 'duchess-fall', name: 'Duchess Fall', category: 'Waterfall', description: 'A picturesque cascade reached through rugged green terrain.', image: a('pachmarhi-duchess') },
    { id: 'pandav-caves', name: 'Pandav Caves', category: 'Caves', description: 'Rock-cut caves associated with the region’s local traditions.', image: a('pachmarhi-pandav') },
    { id: 'jata-shankar', name: 'Jata Shankar', category: 'Spiritual', description: 'A sacred natural cave dedicated to Lord Shiva.', image: a('pachmarhi-jatashankar') },
  ],
  themes: [
    { id: 'nature', title: 'Nature & Viewpoints', icon: 'mountain', image: a('theme-nature'), sights: ['Priyadarshini Point', 'Dhoopgarh', 'Handi Khoh', 'Bee Fall', 'Duchess Fall'], note: 'Valleys, forests, viewpoints and waterfalls make Pachmarhi a favourite for gentle nature-led journeys.' },
    { id: 'caves', title: 'Caves & Sacred Sites', icon: 'temple', image: a('theme-caves'), sights: ['Pandav Caves', 'Jata Shankar', 'Mahadev Caves', 'Gupt Mahadev'], note: 'Explore rocky sanctuaries and sites steeped in local mythology and spiritual tradition.' },
    { id: 'colonial', title: 'Colonial Charm', icon: 'landmark', image: a('theme-colonial'), sights: ['Old cantonment', 'Colonial bungalows', 'Historic churches', 'Gardens & heritage'], note: 'The hill town retains echoes of its 19th-century cantonment story and laid-back heritage.' },
    { id: 'adventure', title: 'Soft Adventure', icon: 'footprints', image: a('theme-adventure'), sights: ['Forest trails', 'Jeep sightseeing', 'Photography', 'Sunrise & sunset', 'Moderate walks'], note: 'Flexible outdoor experiences, subject to local access, weather and permit conditions.' },
  ],
  seasons: [
    { name: 'Winter', months: 'Oct – Feb', icon: 'snowflake', description: 'Cool weather, ideal for sightseeing and outdoor activities.', tag: 'Best Season', theme: 'blue' },
    { name: 'Summer', months: 'Mar – Jun', icon: 'sun', description: 'A greener, cooler escape from the heat of the plains.', tag: 'Great for Families', theme: 'green' },
    { name: 'Monsoon', months: 'Jul – Sep', icon: 'cloud', description: 'Lush hills and lively waterfalls; check access during heavy rain.', tag: 'Scenic Landscapes', theme: 'sky' },
    { name: 'Shoulder Travel', months: 'Varies', icon: 'users', description: 'Good for leisure and quieter customized departures.', tag: 'Trade Friendly', theme: 'peach' },
  ],
  itineraries: [
    { id: '2n3d', title: '2N / 3D', summary: 'A quick hill escape covering key scenic highlights.', days: ['Day 1: Arrival, local sightseeing and relaxed evening.', 'Day 2: Viewpoints, selected waterfalls and cave visits (subject to access).', 'Day 3: Leisurely morning and departure.'] },
    { id: '3n4d', title: '3N / 4D', summary: 'A deeper hill retreat with caves, waterfalls and leisure time.', days: ['Day 1: Arrival and acclimatize in Pachmarhi.', 'Day 2: Scenic lookouts, forest experiences and sunset point.', 'Day 3: Sacred caves, waterfalls and unhurried exploring.', 'Day 4: Check-out and departure.'] },
    { id: 'extended', title: 'Extended Routing', summary: 'Combine Pachmarhi with Bhopal, Satpura or another nearby stop.', days: ['Choose additional destinations based on travel dates and guests.', 'Confirm road transfers and local access before quotation.', 'Customize number of nights to match the clients’ pace.'] },
  ],
};

/** DEMO ONLY: sample visual cards for the standalone preview. NOT real packages. */
export const demonstrationPackages: DestinationPackage[] = [
  { id: 'demo-nature', title: 'Pachmarhi Nature Escape', image: a('package-1'), duration: '3 Days / 2 Nights', category: 'Nature • Preview' },
  { id: 'demo-family', title: 'Pachmarhi Family Getaway', image: a('package-2'), duration: '4 Days / 3 Nights', category: 'Family • Preview' },
  { id: 'demo-satpura', title: 'Satpura – Pachmarhi Combo', image: a('package-3'), duration: '5 Days / 4 Nights', category: 'Adventure • Preview' },
  { id: 'demo-bhopal', title: 'Bhopal – Pachmarhi Circuit', image: a('package-4'), duration: '4 Days / 3 Nights', category: 'Heritage • Preview' },
];
