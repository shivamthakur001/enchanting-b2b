import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/raneh-falls/${name}.webp`;

export const ranehFallsContent: DestinationDetailContent = {
  id: 'raneh-falls',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Raneh Falls',
  subtitle: 'Where the Ken River Carves Through Stone.',
  heroImage: a('raneh-falls-hero'),
  ctaBackgroundImage: a('raneh-falls-hero'),
  tags: ['Ken River', 'Granite Canyon', 'Waterfall', 'Geological Wonder', 'Nature Photography'],
  overview: {
    heading: 'A Canyon Carved by Time',
    description:
      'Located just a short drive from Khajuraho in Chhatarpur district, Raneh Falls is an extraordinary geological marvel where the pristine Ken River carves a dramatic five-kilometre gorge through multicoloured crystalline granite. Revealing sheer cliffs that plunge up to thirty metres into roaring seasonal cascades, this protected canyon sanctuary offers travel partners a captivating, high-impact half-day nature excursion that pairs effortlessly with the world-renowned temple heritage of Khajuraho and the wildlife wilderness of Panna.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Nature Lovers, Families, Photographers, Small Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Dramatic, Geological, Scenic, Untamed' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Half-Day Excursion; Combine with Khajuraho Stay' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Private Groups, Photography & Special-Interest Travel' },
    ],
  },
  story: {
    heading: 'Crystalline Granite Chasms and Powerful River Currents',
    paragraphs: [
      'Over countless millennia, the Ken River has incised a deep, serpentine rift through varied igneous rock strata, exposing extraordinary walls of pink, red, green, and grey crystalline granite found nowhere else in the region. During and following the monsoon rains, multiple powerful cascades tumble over these multi-hued cliffs into the frothing canyon below.',
      'Bordered by the protected Ken Gharial Sanctuary, the landscape preserves rich riverine habitats and rugged canyon viewpoints. Because Raneh Falls is a protected natural monument without commercial lodging, travellers base themselves in the comfortable luxury hotels of Khajuraho, making this an ideal half-day scenic outing.',
    ],
    image: a('raneh-waterfall'),
    imageAlt: 'Cascading waters of Raneh Falls plunging through a multicoloured crystalline granite canyon',
    quote: 'Where the Ken River cuts deep into ancient granite, revealing nature’s vibrant palette in stone and spray.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Khajuraho Airport (approx. 20–22 km) is the nearest practical airport for the Raneh Falls excursion; flight routes and schedules should be confirmed prior to travel.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Khajuraho Railway Station (approx. 20 km) is the primary rail access point; Mahoba and Satna provide additional broad-gauge regional rail connections.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Raneh Falls is approximately 20–22 kilometres from Khajuraho depending on departure point; pre-arranged private vehicle transfers are recommended.',
    },
    {
      icon: 'pin',
      label: 'Local Access',
      text: 'Khajuraho serves as the practical accommodation and tour base. Always recheck current forest entry procedures, permits, and designated viewing guidelines.',
    },
  ],
  travellers: [
    { icon: 'leaf', name: 'Nature Enthusiasts' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'users', name: 'Families' },
    { icon: 'compass', name: 'Geology Explorers' },
    { icon: 'luggage', name: 'FIT Travellers' },
    { icon: 'landmark', name: 'Heritage Extensionists' },
  ],
  cta: {
    heading: 'Plan a Raneh Falls Journey for Your Clients',
    description:
      'Create memorable nature excursions through the Ken River’s granite canyon, with curated Khajuraho and Panna extensions.',
  },
  fullGuide: [
    {
      title: 'Geological Architecture & Ken River Gorge',
      points: [
        'Crystalline Formations: Exposed volcanic and plutonic granite displaying striking shades of pink, red, jasper, and green crystalline rock.',
        'Canyon Scale: A gorge stretching approximately five kilometres in length and dropping roughly thirty metres into the Ken River bed.',
        'Seasonal Hydraulics: Water flow varies dramatically, transforming from quiet clear-water emerald pools in winter to raging torrents in the monsoon.',
      ],
    },
    {
      title: 'Protected Reserve & Viewpoint Guidelines',
      points: [
        'Ken Gharial Sanctuary: The river corridor forms a crucial protected habitat for the endangered gharial crocodile and diverse avian species.',
        'Designated Safe Platforms: Visitors must observe all waterfalls and cliffs exclusively from established forest department platforms; cliff-edge walking or descending to the water is strictly prohibited.',
        'Guided Visits: Forest naturalists and department guides provide interpretation on regional geology and conservation ecology.',
      ],
    },
    {
      title: 'Circuit Integration & Travel Logistics',
      points: [
        'Half-Day Timing: Best enjoyed as a 3 to 4-hour morning or afternoon excursion from Khajuraho.',
        'Khajuraho Base: Exceptional hotel and resort infrastructure in Khajuraho caters comfortably to luxury, FIT, and group travellers.',
        'Panna Pairing: Easily paired on the same day or weekend with Pandav Falls and wildlife safaris inside Panna National Park.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Near Khajuraho, Chhatarpur', icon: 'pin' },
    { label: 'Ideal Visit', value: 'Half-Day Excursion', icon: 'calendar' },
    { label: 'Best Season', value: 'Post-Monsoon; Monsoon Flows', icon: 'sun' },
    { label: 'Landscape', value: 'Granite Canyon & Ken River', icon: 'mountain' },
    { label: 'Best For', value: 'Nature, Photography & Geology', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'raneh-waterfall',
      name: 'Raneh Waterfall',
      category: 'River Cascade',
      description: 'A dramatic Ken River waterfall framed by steep canyon walls, with changing flow and scenery across seasons.',
      image: a('raneh-waterfall'),
    },
    {
      id: 'ken-river-canyon',
      name: 'Ken River Canyon',
      category: 'Gorge Landscape',
      description: 'The striking gorge carved by the Ken River, approximately five kilometres long and reaching roughly 30 metres deep.',
      image: a('raneh-canyon'),
    },
    {
      id: 'multicoloured-granite',
      name: 'Multicoloured Granite Formations',
      category: 'Geological Wonder',
      description: 'Pink, red and grey crystalline rock formations reveal the distinctive geology of the canyon.',
      image: a('raneh-granite'),
    },
    {
      id: 'seasonal-cascades',
      name: 'Seasonal Cascades',
      category: 'Seasonal Phenomenon',
      description: 'Additional cascades and powerful river scenery become especially dramatic with monsoon rainfall.',
      image: a('raneh-cascades'),
    },
    {
      id: 'canyon-viewpoints',
      name: 'Canyon Viewpoints',
      category: 'Scenic Lookouts',
      description: 'Panoramic views of the canyon, rugged cliff formations and changing light from designated visitor-accessible viewpoints.',
      image: a('raneh-viewpoints'),
    },
    {
      id: 'ken-gharial-sanctuary',
      name: 'Ken Gharial Sanctuary',
      category: 'Protected Reserve',
      description: 'The surrounding protected Ken River landscape and an opportunity to appreciate its conservation significance.',
      image: a('raneh-gharial-sanctuary'),
    },
  ],
  themes: [
    {
      id: 'waterfalls-canyon-views',
      title: 'Waterfalls & Canyon Views',
      icon: 'mountain',
      image: a('theme-waterfalls'),
      sights: ['Raneh Falls', 'Seasonal Cascades', 'Ken River Gorge', 'Designated Scenic Viewpoints'],
      note: 'Dramatic canyon overlooks providing panoramic views of plunging water channels and deep rocky chasms.',
    },
    {
      id: 'geology-natural-wonders',
      title: 'Geology & Natural Wonders',
      icon: 'compass',
      image: a('theme-geology'),
      sights: ['Granite Rock Formations', 'Coloured Canyon Walls', 'Ken River Erosion Landscape', 'Geological Photography'],
      note: 'Crystalline pink, red, green and grey igneous formations sculpted by millions of years of river erosion.',
    },
    {
      id: 'nature-protected-landscapes',
      title: 'Nature & Protected Landscapes',
      icon: 'leaf',
      image: a('theme-wildlife'),
      sights: ['Ken Gharial Sanctuary', 'Birdwatching Opportunities', 'Riverine Landscape', 'Guided Interpretation Where Available'],
      note: 'A sanctuary landscape bordering the river; visitor exploration is strictly guided and regulated for wildlife conservation.',
    },
    {
      id: 'khajuraho-panna-circuit',
      title: 'Khajuraho & Panna Nature Circuit',
      icon: 'landmark',
      image: a('theme-circuit'),
      sights: ['Raneh Falls Excursion', 'Khajuraho Heritage Extension', 'Panna National Park Extension', 'Pandav Falls Extension'],
      note: 'Effortlessly combined as a half-day scenic excursion while staying at Khajuraho hotels and safari lodges in Panna.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'December to February',
      icon: 'snowflake',
      description: 'Comfortable weather for canyon viewing, outdoor photography and Khajuraho sightseeing combinations.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'March to May',
      icon: 'sun',
      description: 'Hotter conditions; cooler early-morning visits are preferable. River flow and waterfall volume can vary.',
      tag: 'Morning Travel',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'June to September',
      icon: 'cloud',
      description: 'Powerful rainfall-driven scenery and seasonal cascades can transform the gorge. Access may be temporarily restricted due to water levels, safety or protected-area decisions.',
      tag: 'Rushing Waters',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'October to November',
      icon: 'users',
      description: 'A particularly rewarding period to appreciate the canyon formations, changing water flow and scenic landscape, subject to current access conditions.',
      tag: 'Rewarding Landscape',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: 'half-day',
      title: 'Half-Day Raneh Falls Geological Excursion',
      summary: 'A 3 to 4-hour morning or afternoon tour from Khajuraho taking in the Ken River gorge and colourful granite canyon.',
      days: [
        'Morning: Depart Khajuraho hotel for Raneh Falls (approx. 20 km drive through countryside).',
        'Midday: Guided walk along designated canyon viewpoints to observe multi-hued granite formations and waterfalls; return to Khajuraho for lunch.',
      ],
    },
    {
      id: 'full-day-circuit',
      title: '1-Day Khajuraho Heritage & Raneh Canyon Pairing',
      summary: 'Combine UNESCO temple architecture with raw geological beauty on a seamless day itinerary.',
      days: [
        'Morning: Guided exploration of the Western Group of Temples in Khajuraho.',
        'Afternoon: Excursion to Raneh Falls and Ken Gharial Sanctuary, sunset photography across the canyon, and return to Khajuraho.',
      ],
    },
  ],
};
