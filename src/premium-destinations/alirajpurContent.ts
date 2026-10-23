import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/alirajpur/${name}.webp`;

export const alirajpurContent: DestinationDetailContent = {
  id: 'alirajpur',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Alirajpur',
  subtitle: 'Where Hills, Art and Living Traditions Meet.',
  heroImage: a('alirajpur-hero'),
  ctaBackgroundImage: a('alirajpur-hero'),
  tags: ['Katthiwada Hills', 'Pithora Art', 'Tribal Heritage', 'Offbeat Nature', 'Rural Experiences'],
  overview: {
    heading: 'Where Nature and Living Heritage Come Together',
    description:
      'Nestled in the picturesque undulating highlands of westernmost Madhya Pradesh along the Gujarat border, Alirajpur is a captivating realm of rolling forested hills, indigenous artistry, and deeply rooted community culture. From the refreshing highland microclimate, seasonal waterfalls, and famed Noorjahan mango orchards of Katthiwada to the sacred ritualistic Pithora murals of Aadharkaanch and the vibrant weekly tribal haats, Alirajpur provides travel partners with a distinctly authentic, slow-paced destination crafted for discerning cultural travelers, photographers, and small-group explorers.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Culture Seekers, Nature Lovers, Photographers, Small Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Authentic, Colourful, Scenic, Unhurried' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Suggested 1N/2D or 2N/3D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Small Groups, Craft & Culture Circuits' },
    ],
  },
  story: {
    heading: 'Highland Canopies, Sacred Murals and Indigenous Grace',
    paragraphs: [
      'Alirajpur’s landscape is defined by the Katthiwada hills, where verdant forest cover, seasonal streams, and tranquil countryside offer a refreshing contrast to the plains. The region enjoys cooler highland breezes and an agrarian rhythm that has sustained rare horticultural heritage such as the giant Noorjahan mango.',
      'Centuries of Bhil and Bhilala cultural heritage resonate through the hamlets, where the sacred art of Pithora painting transforms dwelling walls into ritual canvases honoring ancestral deities and nature spirits. Travel here emphasizes respectful community encounters, vibrant rural haats, and unhurried exploration through western Madhya Pradesh’s untamed nature.',
    ],
    image: a('alirajpur-katthiwada'),
    imageAlt: 'Rolling green forested hills of Katthiwada in Alirajpur district',
    quote: 'Where forested ridges shelter sacred folk art, and ancient tribal rhythms guide a gentle way of life.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Vadodara Airport, Gujarat (approx. 170 km) and Devi Ahilyabai Holkar Airport, Indore (approx. 202 km) serve as the primary airport gateways; flight routes should be confirmed prior to booking.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Dahod Railway Station, Gujarat (approx. 75 km) is the nearest major railhead on the Western Railway mainline, with onward road transfers to Alirajpur.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well connected by road from Indore, Dhar, and Vadodara via national and state highways; private vehicle transfers are recommended for regional travel.',
    },
    {
      icon: 'pin',
      label: 'Local Exploration',
      text: 'Pre-arranged private vehicles are recommended for Katthiwada, Aadharkaanch, and outlying backwaters as public transit to remote hamlets is limited.',
    },
  ],
  travellers: [
    { icon: 'users', name: 'Culture Seekers' },
    { icon: 'leaf', name: 'Nature Enthusiasts' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'compass', name: 'Offbeat Explorers' },
    { icon: 'luggage', name: 'FIT Travellers' },
    { icon: 'heart', name: 'Slow Travellers' },
  ],
  cta: {
    heading: 'Plan an Alirajpur Journey for Your Clients',
    description:
      'Explore scenic western highlands, living craft traditions and thoughtfully curated cultural journeys through Alirajpur.',
  },
  fullGuide: [
    {
      title: 'Katthiwada Highlands & Natural Scenery',
      points: [
        'Highland Microclimate: Elevated ridges and dense woodland create a cooler, lush microclimate distinct from the surrounding western plains.',
        'Seasonal Cascades: Monsoonal and post-monsoon rainwater feeds seasonal waterfalls and streams across rocky highland fissures.',
        'Horticultural Legacy: Famed for traditional mango cultivation, including the extraordinarily rare and large Noorjahan mango variety harvested in early summer.',
      ],
    },
    {
      title: 'Living Traditions & Indigenous Artistry',
      points: [
        'Pithora Wall Paintings: Sacred ritual art crafted by indigenous artists (Lakhindras) in Aadharkaanch and surrounding villages, depicting mythic horses and cosmic lore.',
        'Tribal Haats & Crafts: Vibrant weekly rural markets featuring traditional bead jewellery, silver ornaments, bamboo ware, and handloom textiles.',
        'Bhagoria Celebration: Renowned cultural festival celebrated across the Bhil and Bhilala tribal heartland in the week preceding Holi.',
      ],
    },
    {
      title: 'Circuit Design & Cultural Protocols',
      points: [
        'Suggested Duration: A 1N/2D or 2N/3D itinerary allows immersion in Katthiwada nature and local village artisan studios.',
        'Regional Combinations: Connects naturally with heritage exploration in Mandu and Maheshwar, or cross-border itineraries through Vadodara and the Statue of Unity.',
        'Respectful Travel: Village visits and photography of local residents, sacred ceremonies, and homes must always be conducted with sensitivity and prior permission.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Alirajpur, Western MP', icon: 'pin' },
    { label: 'Suggested Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar; Monsoon Scenery', icon: 'sun' },
    { label: 'Landscape', value: 'Hills, Valleys & Backwaters', icon: 'mountain' },
    { label: 'Best For', value: 'Culture, Nature & FIT', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'katthiwada-hills',
      name: 'Katthiwada Hills',
      category: 'Highland Landscape',
      description: 'Rolling forested hills, lush green surroundings and scenic viewpoints in the tranquil Katthiwada highland belt.',
      image: a('alirajpur-katthiwada'),
    },
    {
      id: 'katthiwada-waterfall',
      name: 'Katthiwada Seasonal Waterfall',
      category: 'Seasonal Waterfall',
      description: 'Scenic seasonal cascades tumbling through verdant forest ravines, at their most dramatic during and after the monsoon.',
      image: a('alirajpur-waterfall'),
    },
    {
      id: 'pithora-art-aadharkaanch',
      name: 'Pithora Art of Aadharkaanch',
      category: 'Indigenous Art',
      description: 'Sacred, ritualistic wall murals created by indigenous Bhil and Bhilala artisans, celebrating ancestral folklore and nature.',
      image: a('alirajpur-pithora'),
    },
    {
      id: 'noorjahan-mango-heritage',
      name: 'Noorjahan Mango Heritage',
      category: 'Agricultural Heritage',
      description: 'The legendary, exceptionally large Noorjahan mango variety nurtured in historic orchards around Katthiwada (seasonal).',
      image: a('alirajpur-noorjahan'),
    },
    {
      id: 'bhagoria-festival-haats',
      name: 'Bhagoria Festival & Local Haats',
      category: 'Cultural Tradition',
      description: 'Vibrant traditional weekly markets and the celebrated pre-Holi Bhagoria festival alive with music, dance, and colourful attire.',
      image: a('alirajpur-bhagoria'),
    },
    {
      id: 'narmada-backwaters-kherwada',
      name: 'Narmada Backwaters at Kherwada',
      category: 'Waterfront Nature',
      description: 'Tranquil backwaters where the Narmada skirts western Madhya Pradesh, offering scenic rural shorelines and slow nature exploration.',
      image: a('alirajpur-narmada-backwaters'),
    },
  ],
  themes: [
    {
      id: 'hills-seasonal-nature',
      title: 'Hills & Seasonal Nature',
      icon: 'mountain',
      image: a('theme-hills'),
      sights: ['Katthiwada Landscapes', 'Seasonal Waterfall Views', 'Scenic Countryside', 'Nature Photography'],
      note: 'Scenic highland terrain offering fresh country breezes and seasonal cascades best enjoyed with local orientation.',
    },
    {
      id: 'traditional-art-crafts',
      title: 'Traditional Art & Crafts',
      icon: 'compass',
      image: a('theme-crafts'),
      sights: ['Pithora Art', 'Aadharkaanch Craft Traditions', 'Bead Jewellery', 'Local Artisan Heritage'],
      note: 'Authentic artisan appreciation conducted with community consent, respecting ritual customs and local heritage.',
    },
    {
      id: 'festivals-regional-culture',
      title: 'Festivals & Regional Culture',
      icon: 'users',
      image: a('theme-festivals'),
      sights: ['Bhagoria Cultural Festival', 'Traditional Local Haats', 'Regional Food & Crafts', 'Community-Led Cultural Experiences'],
      note: 'Seasonal cultural gatherings traditionally held before Holi; market days and cultural events require advance planning.',
    },
    {
      id: 'backwaters-slow-travel',
      title: 'Backwaters & Slow Travel',
      icon: 'leaf',
      image: a('theme-backwaters'),
      sights: ['Kherwada Region', 'Narmada Backwater Scenery', 'Guided Nature Exploration Where Available', 'Rural Landscapes & Photography'],
      note: 'Serene riverside topography suitable for unhurried nature photography and peaceful rural exploration.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'December to February',
      icon: 'snowflake',
      description: 'Generally pleasant weather for cultural sightseeing, local markets and nature-based day excursions.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'March to May',
      icon: 'sun',
      description: 'Warm conditions; early-morning and evening sightseeing is preferable. Mango-related experiences depend on harvest timing and availability.',
      tag: 'Harvest Period',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'June to September',
      icon: 'cloud',
      description: 'Katthiwada becomes lush and seasonal waterfalls may become active. Heavy rain can affect access and road conditions.',
      tag: 'Lush Highlands',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'October to November',
      icon: 'users',
      description: 'Fresh landscapes and pleasant conditions for slower rural, scenic and outdoor exploration.',
      tag: 'Pleasant Travel',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Katthiwada Hills & Pithora Art Discovery',
      summary: 'A rewarding cultural and scenic weekend break exploring Alirajpur’s tribal artistry and verdant highland countryside.',
      days: [
        'Day 1: Arrival from Indore or Vadodara, transfer to Katthiwada highlands, explore local countryside and scenic sunset viewpoints.',
        'Day 2: Morning visit to Aadharkaanch village for an introduction to authentic Pithora art, visit a local rural market, and onward departure.',
      ],
    },
    {
      id: '2n3d',
      title: '2N / 3D Deep Tribal Heritage & Western Highlands Trail',
      summary: 'Comprehensive slow-travel itinerary connecting Katthiwada nature, tribal artisan hamlets, and Narmada backwaters.',
      days: [
        'Day 1: Arrival in Alirajpur district, check-in, orientation to local Bhil and Bhilala craft traditions, and evening rural walk.',
        'Day 2: Excursion to Katthiwada waterfalls, heritage mango orchards (in season), and dedicated interaction with Pithora painters.',
        'Day 3: Morning excursion to Kherwada backwaters along the Narmada, nature photography, and departure toward Dahod or Indore.',
      ],
    },
  ],
};
