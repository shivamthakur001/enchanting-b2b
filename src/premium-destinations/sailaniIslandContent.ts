import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/sailani-island/${name}.webp`;

export const sailaniIslandContent: DestinationDetailContent = {
  id: 'sailani-island',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Sailani Island',
  subtitle: 'Where Island Serenity Meets Water Adventure.',
  heroImage: a('sailani-hero'),
  ctaBackgroundImage: a('sailani-hero'),
  tags: ['Island Retreat', 'Narmada Backwaters', 'Scenic Boating', 'Water Adventure', 'Leisure Escape'],
  overview: {
    heading: 'An Island Escape in the Heart of India',
    description:
      'Surrounded by the vast waters of the Narmada backwaters near Omkareshwar, Sailani Island offers a tranquil island-like sanctuary blending waterfront calm with recreational boating. An appealing choice for couples, families, and leisure travelers seeking relaxed downtime away from bustling city centers, the destination pairs comfortable resort relaxation with scenic cruising and convenient proximity to the sacred Narmada circuit.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Couples, Families, Leisure FIT, Small Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Peaceful, Scenic, Refreshing, Adventurous' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Suggested Day Visit or 1N / 2D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Families, Relaxation & Water-Based Leisure' },
    ],
  },
  story: {
    heading: 'A Water-Bound Sanctuary on the Narmada',
    paragraphs: [
      'Formed within the expansive reservoir backwaters of the Narmada River basin, Sailani Island stands as a peaceful haven surrounded by gentle blue waters. The island offers panoramic shorelines, morning reflections, and an unhurried tempo distinct from mainland travel.',
      'Anchored by MPT Sailani Island Resort, the destination invites travelers to unwind in quiet waterfront cottages, take to the water on operator-run cruises or speedboats where permitted, and enjoy easy access to the spiritual sanctuary of nearby Omkareshwar.',
    ],
    image: a('sailani-backwaters'),
    imageAlt: 'Calm Narmada backwaters surrounding Sailani Island at sunset',
    quote: 'Where tranquil backwaters cradle an island sanctuary, and the Narmada invites quiet renewal.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar Airport, Indore (approx. 85–95 km) is the primary air gateway, offering frequent flights from major Indian cities.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Omkareshwar Road (approx. 20–25 km) and Khandwa Junction (approx. 70 km) provide the nearest rail connections.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Accessible by road from Indore and Omkareshwar via state highways; pre-arranged private vehicle or taxi transfers are recommended.',
    },
    {
      icon: 'pin',
      label: 'Local Access',
      text: 'Final access arrangements, parking, and any boat transfer or causeway crossing should be verified with the resort prior to arrival.',
    },
  ],
  travellers: [
    { icon: 'heart', name: 'Couples' },
    { icon: 'users', name: 'Families' },
    { icon: 'luggage', name: 'Leisure FIT' },
    { icon: 'compass', name: 'Small Groups' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'leaf', name: 'Nature Seekers' },
  ],
  cta: {
    heading: 'Plan a Sailani Island Journey for Your Clients',
    description:
      'Scenic waterfront retreats, curated leisure experiences and customised island getaways in the Narmada region.',
  },
  fullGuide: [
    {
      title: 'Narmada Backwaters & Island Setting',
      points: [
        'Reservoir Landscape: Expansive freshwater backwaters creating a serene island-like setting with sweeping water horizons.',
        'Peaceful Ambience: Secluded from heavy vehicular traffic, providing clean air, gentle breezes, and tranquil natural surroundings.',
        'Sunset & Sunrise Views: Unhindered western and eastern vistas offer exceptional natural light across the water, ideal for photography.',
      ],
    },
    {
      title: 'Water Activities & Operational Information',
      points: [
        'Scenic Boating: Relaxing boat rides and scenic cruises operated by authorized local providers, subject to water levels and weather.',
        'Speedboat Rides: Thrilling speedboating experiences across designated reservoir zones when operational and cleared by local authorities.',
        'Recreational Water Sports: Operator-led activities such as paddle boating may be available seasonally; availability should always be reconfirmed before travel.',
        'Safety & Guidelines: Life jackets and safety protocols are strictly implemented; water activities may be temporarily suspended during high winds or monsoon periods.',
      ],
    },
    {
      title: 'Resort Stay & Circuit Planning',
      points: [
        'MPT Sailani Island Resort: Waterfront cottage accommodations managed by MP Tourism, featuring dining facilities and scenic outdoor spaces.',
        'Omkareshwar Extension: Located within convenient driving distance of Omkareshwar, making it easy to combine leisure with a Jyotirlinga pilgrimage.',
        'Indore & Maheshwar Connections: Pairs naturally with heritage and culinary itineraries starting in Indore or extending toward Maheshwar and Mandu.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Khandwa District, MP', icon: 'pin' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Travel Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Landscape', value: 'Narmada Backwaters', icon: 'mountain' },
    { label: 'Best For', value: 'Couples & Leisure Groups', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'narmada-backwaters',
      name: 'Narmada Backwaters',
      category: 'Scenic Landscape',
      description: 'Expansive reservoir waters and peaceful island scenery framed by gentle Central Indian shorelines.',
      image: a('sailani-backwaters'),
    },
    {
      id: 'scenic-boat-cruise',
      name: 'Scenic Boat Cruise',
      category: 'Water Experience',
      description: 'Relaxing waterborne journeys across the backwaters, subject to operator schedules and water conditions.',
      image: a('sailani-boat-cruise'),
    },
    {
      id: 'speedboat-experience',
      name: 'Speedboat Experience',
      category: 'Water Adventure',
      description: 'Exhilarating motorboat rides across open reservoir stretches where authorized and permitted.',
      image: a('sailani-speedboat'),
    },
    {
      id: 'water-adventure',
      name: 'Water Adventure',
      category: 'Recreation',
      description: 'Paddle boating and operator-led waterfront activities, subject to seasonal operation and clearances.',
      image: a('sailani-water-sports'),
    },
    {
      id: 'sailani-resort',
      name: 'Sailani Island Resort',
      category: 'Island Retreat',
      description: 'Waterfront hospitality by MPT Sailani Island Resort, offering peaceful cottage stays and lake views.',
      image: a('sailani-resort'),
    },
    {
      id: 'golden-hour-views',
      name: 'Golden-Hour Waterfront Views',
      category: 'Scenic Viewpoint',
      description: 'Vivid sunset and sunrise horizons reflecting across still reservoir waters, ideal for photography.',
      image: a('sailani-sunset'),
    },
  ],
  themes: [
    {
      id: 'water-adventure',
      title: 'Water Adventure',
      icon: 'compass',
      image: a('theme-water-adventure'),
      sights: ['Speedboat Experience', 'Operator-Led Water Sports', 'Paddle Boating, Where Available', 'Waterfront Recreation'],
      note: 'Exciting water-based outings managed by authorized local operators, subject to daily reservoir and weather conditions.',
    },
    {
      id: 'cruises',
      title: 'Cruises & Backwater Views',
      icon: 'mountain',
      image: a('theme-cruises'),
      sights: ['Scenic Cruise', 'Narmada Backwaters', 'Reservoir Views', 'Photography from Approved Viewpoints'],
      note: 'Gentle cruises offering panoramic vistas of the surrounding islands, calm inlets, and wide water horizons.',
    },
    {
      id: 'island-retreat',
      title: 'Island Retreat & Relaxation',
      icon: 'leaf',
      image: a('theme-island-retreat'),
      sights: ['Sailani Island Resort', 'Peaceful Waterfront Stay', 'Sunrise and Sunset Views', 'Relaxed Leisure Time'],
      note: 'Cottage accommodations and open lakeside grounds suited for couples and families looking to disconnect in nature.',
    },
    {
      id: 'spiritual-circuit',
      title: 'Spiritual & Leisure Circuits',
      icon: 'landmark',
      image: a('theme-spiritual-circuit'),
      sights: ['Omkareshwar Excursion', 'Narmada Cultural Landscape', 'Leisure and Spiritual Circuits', 'Indore / Omkareshwar Extension'],
      note: 'Convenient road connections enable effortless combinations with Omkareshwar’s Jyotirlinga and Indore’s heritage.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description: 'Crisp, pleasant weather ideal for daytime waterfront leisure, nature walks, and evening sunsets.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'Mar – May',
      icon: 'sun',
      description: 'Warm conditions; plan waterfront and boating activities for early mornings and late afternoons.',
      tag: 'Quiet Travel',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'Jun – Sep',
      icon: 'cloud',
      description: 'Lush green surroundings and full reservoir levels; water sports and boat departures may be restricted during heavy rain.',
      tag: 'Scenic Waters',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'Oct – Nov',
      icon: 'users',
      description: 'Pleasant temperatures and fresh reservoir landscapes as seasonal water operations resume.',
      tag: 'Shoulder Season',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Sailani Island Leisure Break',
      summary: 'A rejuvenating waterfront getaway on the Narmada backwaters.',
      days: [
        'Day 1: Arrive from Indore or Omkareshwar, check in to MPT Sailani Island Resort, afternoon relaxation, and sunset backwater views.',
        'Day 2: Morning scenic cruise or waterfront walk, breakfast overlooking the lake, and onward departure.',
      ],
    },
    {
      id: '2n3d',
      title: '2N / 3D Narmada Island & Omkareshwar Circuit',
      summary: 'Combine peaceful island downtime with sacred temple exploration.',
      days: [
        'Day 1: Arrival at Sailani Island, check-in, leisure time by the water, and peaceful evening dinner.',
        'Day 2: Day excursion to Omkareshwar Jyotirlinga temple and Narmada ghats; return to Sailani Island for sunset.',
        'Day 3: Morning speedboat experience (subject to operation) and departure toward Indore.',
      ],
    },
  ],
};
