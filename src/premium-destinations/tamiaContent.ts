import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/tamia/${name}.webp`;

export const tamiaContent: DestinationDetailContent = {
  id: 'tamia',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Tamia',
  subtitle: 'A Hidden Hill Retreat in the Heart of the Satpuras.',
  heroImage: a('tamia-hero'),
  ctaBackgroundImage: a('tamia-hero'),
  tags: ['Hill Retreat', 'Patalkot Valley', 'Nature', 'Forest Trails', 'Scenic Viewpoints'],
  overview: {
    heading: 'Where the Satpuras Whisper',
    description:
      'Perched on a high ridge overlooking deep forested gorges, Tamia is an unspoiled hill haven offering tranquility, dramatic cliff viewpoints, and the legendary depths of Patalkot Valley. A refreshing and less-commercialized alternative to crowded hill circuits, it presents B2B travel planners with exceptional opportunities for scenic leisure, landscape photography, and mindful nature travel.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Couples, Families, Nature Lovers, Photography Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Peaceful, Misty, Scenic, Unhurried' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Suggested 1N / 2D or 2N / 3D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Small Groups, Special-Interest Travel' },
    ],
  },
  story: {
    heading: 'An Untouched Highland Haven',
    paragraphs: [
      'Set high in the Satpura range of Chhindwara district, Tamia commands dramatic vistas across ancient forest canopies and deep sandstone chasms. Far removed from commercialized hill stations, the destination retains a quiet, contemplative atmosphere where morning mist drifts across forested ravines and cool breezes carry the scent of sal and mahua.',
      'Just beyond Tamia lies Patalkot, an extraordinary horseshoe-shaped geological depression sinking hundreds of meters below the plateau. Home to indigenous communities living in harmony with dense medicinal woodlands, the valley adds a profound layer of natural mystery and cultural reverence to every journey.',
    ],
    image: a('tamia-patalkot'),
    imageAlt: 'Deep forested horseshoe valley of Patalkot seen from the Tamia cliffs',
    quote: 'Where ancient forests tumble into mist-veiled gorges, and the hills speak in quiet mountain winds.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Nagpur Airport (approx. 185 km) is the most convenient air gateway; Raja Bhoj Airport, Bhopal (approx. 220 km) also offers good connectivity.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Parasia railway station is approx. 45 km away; Chhindwara Junction (approx. 70 km) is the primary railhead serving national routes.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well connected via state highways from Chhindwara, Parasia and Pipariya; scenic hill routes require comfortable private vehicle transfers.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Pre-arranged private vehicles are strongly advised for traversing ridge-top viewpoints, valley access roads, and forest excursion trailheads.',
    },
  ],
  travellers: [
    { icon: 'heart', name: 'Couples' },
    { icon: 'users', name: 'Families' },
    { icon: 'luggage', name: 'Nature FIT' },
    { icon: 'footprints', name: 'Slow Travellers' },
    { icon: 'compass', name: 'Special Interest' },
    { icon: 'leaf', name: 'Photographers' },
  ],
  cta: {
    heading: 'Plan a Tamia Journey for Your Clients',
    description:
      'Offbeat hill retreats, scenic valleys and customised nature journeys through the Satpura landscape.',
  },
  fullGuide: [
    {
      title: 'Patalkot Valley & Highland Landscapes',
      points: [
        'Patalkot Valley: A dramatic geological formation shaped like a horseshoe, descending over 1,200 to 1,500 feet into a lush bowl fed by the Dudhi River.',
        'Viewpoints: Cliffside lookouts at Tamia and nearby Chimtipur offer sweeping vistas over rolling forested hills stretching toward the horizon.',
        'Waterfalls: Seasonal cascades emerge along escarpments and ravine walls during the monsoon, creating temporary spectacles of rushing mountain water.',
        'Flora & Ethnobotany: Renowned across Central India for rare medicinal herbs, indigenous flora, and dense sal and teak cover.',
      ],
    },
    {
      title: 'Cultural Heritage & Respectful Exploration',
      points: [
        'Indigenous Heritage: The region is culturally significant for the Bharia and Gond communities, who hold deep ancestral connections with the forest ecosystem.',
        'Tribal Museum: The Sri Badal Bhoi State Tribal Museum in Chhindwara provides authentic academic and visual documentation of regional arts, crafts, and lifestyle.',
        'Responsible Tourism: Commercial community visits are never guaranteed without confirmed arrangements and official permissions, ensuring the privacy and dignity of local hamlets.',
      ],
    },
    {
      title: 'Seasonal Planning & Route Suggestions',
      points: [
        'Monsoon and Post-Monsoon (July to November) provide the most visually striking landscapes with lush greenery, low-hanging clouds, and active streams.',
        'Winter (December to February) brings crisp, sunny days and chilly evenings, ideal for viewpoints, heritage walks, and outdoor meals.',
        'Tamia easily connects with Satpura National Park, Pachmarhi, or Pench to form a diverse wildlife, hill, and valley circuit.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Chhindwara, MP', icon: 'pin' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Jun – Nov', icon: 'sun' },
    { label: 'Landscape', value: 'Hills & Valleys', icon: 'mountain' },
    { label: 'Best For', value: 'Nature & Photography', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'patalkot-valley',
      name: 'Patalkot Valley',
      category: 'Valley Landscape',
      description: 'A spectacular horseshoe-shaped valley surrounded by forested hills and ancient medicinal woods.',
      image: a('tamia-patalkot'),
    },
    {
      id: 'tamia-viewpoint',
      name: 'Tamia Valley Viewpoint',
      category: 'Panoramic Viewpoint',
      description: 'Wide panoramic views of the Satpura hills and surrounding green valleys from the high ridge.',
      image: a('tamia-viewpoint'),
    },
    {
      id: 'tamia-waterfalls',
      name: 'Tamia Waterfalls',
      category: 'Seasonal Waterfall',
      description: 'Seasonal waterfalls that become particularly scenic during the monsoon, tumbling down rocky cliffs.',
      image: a('tamia-waterfall'),
    },
    {
      id: 'sunset-point',
      name: 'Tamia Sunset Point',
      category: 'Scenic Lookout',
      description: 'Golden-hour mountain and valley views, ideal for relaxed scenic exploration and photography.',
      image: a('tamia-sunset'),
    },
    {
      id: 'chhota-mahadev',
      name: 'Chhota Mahadev',
      category: 'Cave Sanctuary',
      description: 'A forest-associated cave temple and peaceful spiritual excursion, subject to local trail conditions.',
      image: a('tamia-chhota-mahadev'),
    },
    {
      id: 'tribal-museum',
      name: 'Tribal Museum & Local Heritage',
      category: 'Cultural Heritage',
      description: "An educational opportunity to learn about the region's rich tribal heritage, arts, and traditions.",
      image: a('tamia-tribal-museum'),
    },
  ],
  themes: [
    {
      id: 'hills',
      title: 'Hills & Viewpoints',
      icon: 'mountain',
      image: a('theme-hills'),
      sights: ['Patalkot Valley', 'Tamia Viewpoints', 'Sunset Point', 'Chimtipur Viewpoint'],
      note: 'Commanding cliffside viewpoints provide dramatic panoramas over deep escarpments and distant Satpura crests.',
    },
    {
      id: 'forests',
      title: 'Forests & Waterfalls',
      icon: 'leaf',
      image: a('theme-forest'),
      sights: ['Forest Landscapes', 'Seasonal Tamia Waterfalls', 'Guided Nature Walks', 'Scenic Forest Routes'],
      note: 'Forested trails and seasonal cascades come alive in the monsoon; exact access depends on terrain and weather conditions.',
    },
    {
      id: 'culture',
      title: 'Culture & Heritage',
      icon: 'landmark',
      image: a('theme-culture'),
      sights: ['Regional Heritage', 'Tribal Museum', 'Chhota Mahadev', 'Traditional Architecture'],
      note: 'Insightful cultural exploration focused on authentic museum curation and sacred forest cave shrines.',
    },
    {
      id: 'photography',
      title: 'Photography & Slow Travel',
      icon: 'footprints',
      image: a('theme-photography'),
      sights: ['Valley Photography', 'Golden-Hour Viewpoints', 'Misty Landscapes', 'Relaxing Nature Retreats'],
      note: 'Deep morning mist, dramatic light shifts across ravines, and tranquil forest lodges create ideal conditions for slow travel.',
    },
  ],
  seasons: [
    {
      name: 'Monsoon',
      months: 'Jun – Sep',
      icon: 'cloud',
      description: 'The forested valleys become lush and green. Ideal for appreciating monsoon scenery, subject to weather and road safety.',
      tag: 'Lush Scenery',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'Oct – Nov',
      icon: 'sun',
      description: 'Fresh landscapes, clear scenic views where weather permits, and pleasant temperatures for nature exploration.',
      tag: 'Best Season',
      theme: 'peach',
    },
    {
      name: 'Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description: 'Cooler weather, quieter hill experiences, and suitable daylight conditions for sightseeing and lookouts.',
      tag: 'Crisp Days',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – May',
      icon: 'users',
      description: 'A warmer season suitable for carefully planned morning and evening viewpoints and slower travel.',
      tag: 'Quiet Travel',
      theme: 'green',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Tamia Highland Getaway',
      summary: 'A refreshing mountain retreat overlooking Patalkot and Satpura valleys.',
      days: [
        'Day 1: Arrive via Nagpur or Chhindwara, settle into hillside stay, afternoon scenic viewpoints and golden sunset over the valley.',
        'Day 2: Morning nature walk along the ridge, visit Chhota Mahadev cave shrine (subject to conditions), and departure.',
      ],
    },
    {
      id: '2n3d',
      title: '2N / 3D Patalkot & Satpura Discovery',
      summary: 'A complete immersion into offbeat highland landscapes and tribal heritage.',
      days: [
        'Day 1: Arrival, sunset viewpoint, evening nature briefing.',
        'Day 2: Full day exploring Patalkot rim viewpoints, seasonal waterfalls, and cultural museum visit.',
        'Day 3: Quiet sunrise photography, leisurely breakfast, and onward journey toward Pachmarhi or Pench.',
      ],
    },
  ],
};
