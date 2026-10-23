import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/patalkot/${name}.webp`;

export const patalkotContent: DestinationDetailContent = {
  id: 'patalkot',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Patalkot',
  subtitle: 'A Hidden Horseshoe Valley of Forests, Legends and Tribal Heritage.',
  heroImage: a('patalkot-hero'),
  ctaBackgroundImage: a('patalkot-hero'),
  tags: ['Deep Valley', 'Tribal Heritage', 'Forest Trails', 'Scenic Viewpoints', 'Offbeat Escape'],
  overview: {
    heading: 'Where the Satpuras Open Into a Hidden World',
    description:
      'Carved deep into the Satpura range in Chhindwara district, Patalkot is a spectacular horseshoe-shaped valley spanning over 79 square kilometres and descending more than a thousand feet beneath the surrounding plateau. Blessed with the meandering Doodhi River, untouched medicinal forests, and the timeless cultural traditions of the Bharia and Gond indigenous communities across 12 historic villages, this secluded natural bowl offers travel partners a uniquely authentic, slow-paced eco-cultural sanctuary best experienced with Tamia as a comfortable scenic stay base.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Nature explorers, culture seekers, photographers, offbeat travelers' },
      { icon: 'leaf', label: 'The Mood', text: 'Remote, earthy, quiet, mysterious' },
      { icon: 'calendar', label: 'Ideal Duration', text: '1N/2D or combine with Tamia for 2N/3D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, small groups, special-interest itineraries, experiential travel' },
    ],
  },
  story: {
    heading: 'A Secluded Canyon Basin of Myth and Ancient Canopy',
    paragraphs: [
      'Legend holds that Patalkot—literally the entrance to the underworld—sheltered mythical tales of old, yet its living reality is a breathtaking geological marvel where steep forested escarpments shield a serene microclimate and vibrant riparian ecosystems along the Doodhi River.',
      'For centuries, the indigenous Bharia people have lived in deep harmony with this landscape, gathering botanical knowledge of extraordinary rare herbs and crafting self-sufficient lifestyles. Because there are no commercial accommodations within the fragile valley itself, travellers enjoy immersive daytime valley trails while returning to the cliffside lodges of nearby Tamia.',
    ],
    image: a('patalkot-valley'),
    imageAlt: 'Panoramic vista of Patalkot horseshoe valley bowl framed by Satpura mountains',
    quote: 'Where the earth drops into emerald depths, cradling ancient tribal heritage and untouched forest calm.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Dr. Babasaheb Ambedkar International Airport, Nagpur (approx. 180–190 km) is the nearest major airport; Bhopal and Jabalpur serve as broader regional air gateways.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Chhindwara Railway Station (approx. 78 km) connects with regional lines; Parasia and Nagpur provide additional railway access.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Accessible by road via Tamia (approx. 20–23 km) from Chhindwara (approx. 78 km) and Pachmarhi (approx. 90 km) through scenic Satpura mountain highways.',
    },
    {
      icon: 'pin',
      label: 'Stay Base',
      text: 'There is no commercial accommodation inside the valley; Tamia serves as the primary comfortable stay base for day excursions and circuits.',
    },
  ],
  travellers: [
    { icon: 'leaf', name: 'Nature Explorers' },
    { icon: 'users', name: 'Culture Seekers' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'compass', name: 'Offbeat Travellers' },
    { icon: 'luggage', name: 'FIT & Small Groups' },
    { icon: 'heart', name: 'Slow Travellers' },
  ],
  cta: {
    heading: 'Plan a Patalkot Journey for Your Clients',
    description:
      'Design immersive itineraries combining Patalkot’s hidden valley landscapes with Tamia’s viewpoints and the wider Satpura experience.',
  },
  fullGuide: [
    {
      title: 'Horseshoe Topography & Doodhi River Basin',
      points: [
        'Geological Basin: A 79 sq km horseshoe-shaped depression dropping 1,000–1,500 feet from rim elevation (2,750–3,250 ft).',
        'River Ecosystem: The Doodhi River winds through the valley floor, nurturing lush riparian vegetation and village agriculture.',
        'Viewpoints: Rim lookouts provide bird’s-eye vistas of mist-shrouded gorges and dense sal and teak canopies.',
      ],
    },
    {
      title: 'Ethnobotanical Heritage & Tribal Traditions',
      points: [
        'Bharia & Gond Communities: Centuries-old tribal hamlets sustaining indigenous traditions, folklore, and harmonious forest living.',
        'Medicinal Knowledge: Famed across Central India as a natural treasure of healing roots, herbs, and traditional ethnobotanical wisdom.',
        'Responsible Travel: Exploration is conducted with utmost cultural respect and local guide partnerships to preserve community dignity.',
      ],
    },
    {
      title: 'Practical Planning & Tamia Base',
      points: [
        'Stay Base at Tamia: Nearest comfortable hotels and MPT resorts are located in Tamia (20–23 km away), as the valley has no commercial hotels.',
        'Circuit Pairings: Pairs seamlessly with Tamia’s sunset cliffs, Pachmarhi hill retreat, and Chhindwara cultural circuits.',
        'Optimal Exploration Times: Morning descending walks and evening ridge sunset views provide the most rewarding conditions.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Chhindwara District', icon: 'pin' },
    { label: 'Suggested Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Landscape', value: 'Valley / Forest Basin', icon: 'mountain' },
    { label: 'Best For', value: 'Nature, Culture, Slow Travel', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'patalkot-valley-view',
      name: 'Patalkot Valley View',
      category: 'Geological Wonder',
      description: 'A breathtaking horseshoe-shaped valley dropping over a thousand feet into a secluded forest basin.',
      image: a('patalkot-valley'),
    },
    {
      id: 'doodhi-river-landscape',
      name: 'Doodhi River Landscape',
      category: 'Riparian Nature',
      description: 'The winding river lifeline that sustains the valley’s fertile basin, surrounded by ancient Satpura rock formations.',
      image: a('patalkot-doodhi-river'),
    },
    {
      id: 'tribal-village-experience',
      name: 'Tribal Village Experience',
      category: 'Living Culture',
      description: 'Traditional hamlets of the Bharia and Gond communities, preserving centuries-old customs and harmonious forest living.',
      image: a('patalkot-tribal-village'),
    },
    {
      id: 'forested-escarpments',
      name: 'Forested Escarpments',
      category: 'Scenic Cliff',
      description: 'Dramatic vertical canyon walls draped in sal, teak, and evergreen canopy framing wide Satpura horizons.',
      image: a('patalkot-escarpment'),
    },
    {
      id: 'herbal-indigenous-knowledge',
      name: 'Herbal & Indigenous Knowledge Landscape',
      category: 'Ethnobotanical Heritage',
      description: 'A legendary natural pharmacy of rare medicinal herbs and roots treasured by traditional local healers.',
      image: a('patalkot-herbal-landscape'),
    },
    {
      id: 'sunrise-mist-viewpoints',
      name: 'Sunrise & Mist Viewpoints',
      category: 'Atmospheric Vista',
      description: 'Ethereal morning mists and golden sunrise light filling the deep canyon bowl from edge viewpoints.',
      image: a('patalkot-mist-view'),
    },
  ],
  themes: [
    {
      id: 'valley-landscapes-viewpoints',
      title: 'Valley Landscapes & Viewpoints',
      icon: 'mountain',
      image: a('theme-landscape'),
      sights: ['Patalkot basin views', 'Horseshoe valley outlooks', 'Forest panoramas', 'Golden-hour photography'],
      note: 'Panoramic viewpoints perched along the rim offer sweeping views across the 79 sq km deep forest bowl.',
    },
    {
      id: 'tribal-cultural-encounters',
      title: 'Tribal & Cultural Encounters',
      icon: 'users',
      image: a('theme-culture'),
      sights: ['Bharia cultural identity', 'Rural village atmosphere', 'Local lifestyle observation', 'Slow immersive exploration'],
      note: 'Respectful cultural appreciation in coordination with local guides, honouring indigenous lifestyle and heritage.',
    },
    {
      id: 'nature-walks-forest-discovery',
      title: 'Nature Walks & Forest Discovery',
      icon: 'leaf',
      image: a('theme-forest'),
      sights: ['Forest edge trails', 'Herbal landscape interpretation', 'Quiet walking routes', 'Seasonal greenery'],
      note: 'Guided exploratory walks through Satpura flora, ancient trees, and medicinal plant biodiversity.',
    },
    {
      id: 'tamia-patalkot-circuit',
      title: 'Tamia + Patalkot Circuit',
      icon: 'compass',
      image: a('theme-circuit'),
      sights: ['Combine with Tamia viewpoints', 'Sunset Point', 'Chhota Mahadev (regional circuit)', 'Scenic Satpura drive'],
      note: 'Pair Patalkot excursions seamlessly with Tamia’s cliffside resorts, quiet sunsets, and sacred forest shrines.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'October to February',
      icon: 'snowflake',
      description: 'Clear skies, crisp highland weather, and optimal visibility across the valley basin.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Early Summer',
      months: 'March to April',
      icon: 'sun',
      description: 'Pleasant mornings and evenings; daytime exploration is best planned around dawn or dusk.',
      tag: 'Quiet Travel',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'July to September',
      icon: 'cloud',
      description: 'Dense mist and vibrant green valley flora; travel depends on weather and local road conditions.',
      tag: 'Lush Greenery',
      theme: 'sky',
    },
    {
      name: 'Shoulder Season / Post-Monsoon',
      months: 'September to October',
      icon: 'users',
      description: 'Dramatic post-monsoon waterfalls, fresh forest canopies, and pleasant travelling temperatures.',
      tag: 'Dramatic Landscapes',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Patalkot Valley & Tamia Heights',
      summary: 'A curated short getaway exploring the dramatic Patalkot horseshoe canyon and Tamia’s cliffside viewpoints.',
      days: [
        'Day 1: Arrive in Tamia, afternoon excursion to Patalkot rim viewpoints, evening sunset over the Satpura gorge.',
        'Day 2: Morning nature walk along the forest edge, visit to local cultural sites, and onward departure toward Nagpur or Chhindwara.',
      ],
    },
    {
      id: '2n3d',
      title: '2N / 3D Deep Satpura Eco-Cultural Immersion',
      summary: 'Comprehensive exploration of Patalkot valley, Doodhi river trails, and Tamia’s sacred forest circuits.',
      days: [
        'Day 1: Arrive at Tamia stay base, check-in, orientation walk, and sunset view from Tamia heights.',
        'Day 2: Full-day guided valley trail into Patalkot, experiencing the Doodhi river basin and learning about local ethnobotany.',
        'Day 3: Morning excursion to Chhota Mahadev rock shrine, regional craft appreciation, and departure.',
      ],
    },
  ],
};
