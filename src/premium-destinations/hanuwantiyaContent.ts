import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/hanuwantiya/${name}.webp`;

export const hanuwantiyaContent: DestinationDetailContent = {
  id: 'hanuwantiya',
  themeLabel: 'Nature',
  heroEyebrow: 'NATURE DESTINATION · MADHYA PRADESH',
  title: 'Hanuwantiya',
  subtitle: 'Where Adventure Meets the Waterfront.',
  heroImage: a('hanuwantiya-hero'),
  ctaBackgroundImage: a('hanuwantiya-hero'),
  tags: ['Indira Sagar', 'Island Retreat', 'Water Adventure', 'Jal Mahotsav', 'Lakeside Escape'],
  overview: {
    heading: 'Adventure on the Shores of Indira Sagar',
    description:
      'Perched on the scenic banks of the sprawling Indira Sagar reservoir in Khandwa district, Hanuwantiya is Central India’s premier waterfront retreat combining active water sports, scenic cruising and relaxed lakeside leisure. Home to the celebrated seasonal Jal Mahotsav, this distinctive destination offers travel partners an exceptional opportunity to curate refreshing weekend breaks, family escapes and water-based leisure circuits paired with nearby spiritual and heritage destinations.',
    cards: [
      { icon: 'users', label: 'Best For', text: 'Couples, Families, FIT, Small Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Adventurous, Scenic, Refreshing, Relaxed' },
      { icon: 'calendar', label: 'Ideal Duration', text: 'Suggested Day Visit or 1N/2D' },
      { icon: 'compass', label: 'Trade Suitability', text: 'Water-Based Leisure, Family Trips, Special-Interest Groups' },
    ],
  },
  story: {
    heading: 'Adventure and Serenity on Central India’s Great Reservoir',
    paragraphs: [
      'Formed by the majestic waters of the Indira Sagar Dam across the Narmada River basin, Hanuwantiya has emerged as a premier water tourism hub in Madhya Pradesh. Its vast blue horizons, gentle breezes, and picturesque shoreline offer a coastal retreat feel right in the heart of India.',
      'From thrilling operator-run speedboating and scenic cruising to peaceful evenings at MPT Hanuwantiya Resort, the destination offers an appealing balance of outdoor energy and tranquil waterfront relaxation.',
    ],
    image: a('hanuwantiya-reservoir'),
    imageAlt: 'Panoramic view of Indira Sagar reservoir waters at Hanuwantiya',
    quote: 'Where the vast blue of Indira Sagar meets lakeside adventure and unforgettable waterfront calm.',
  },
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar International Airport, Indore (approx. 150 km) is the primary air gateway, with frequent flights connecting major Indian cities.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Khandwa Junction (approx. 50 km) is the closest major railway station, providing broad-gauge rail connectivity across Central and Western India.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Accessible by road from Khandwa (approx. 50 km) and Indore (approx. 150 km) via state highways; pre-arranged private vehicle or taxi transfers are recommended.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private transfers, local transport and operator arrangements for waterfront activities. Confirm exact property access and arrival routes in advance.',
    },
  ],
  travellers: [
    { icon: 'heart', name: 'Couples' },
    { icon: 'users', name: 'Families' },
    { icon: 'luggage', name: 'Leisure FIT' },
    { icon: 'compass', name: 'Small Groups' },
    { icon: 'camera', name: 'Photographers' },
    { icon: 'leaf', name: 'Water Lovers' },
  ],
  cta: {
    heading: 'Plan a Hanuwantiya Journey for Your Clients',
    description:
      'Scenic reservoir escapes, curated water adventures and customised lakeside journeys in the heart of Madhya Pradesh.',
  },
  fullGuide: [
    {
      title: 'Indira Sagar Reservoir & Waterfront Landscape',
      points: [
        'Vast Freshwater Horizon: Spanning hundreds of square kilometers, the reservoir creates sweeping water vistas reminiscent of a coastal retreat.',
        'Island-Like Setting: Clean shorelines, secluded peninsulas, and open horizons offer refreshing natural ambience away from busy urban centers.',
        'Waterfront Sunsets: Unhindered western horizons create spectacular sunset vistas reflecting over the reservoir waters.',
      ],
    },
    {
      title: 'Water Adventure & Seasonal Events',
      points: [
        'Scenic Boating: Relaxing boat cruises and boat-club excursions operated by authorized providers, subject to water levels and weather conditions.',
        'Speedboat & Water Sports: Operator-led speedboat rides, jet skiing, and recreational water activities where authorized and permitted.',
        'Jal Mahotsav Event: Hanuwantiya’s signature seasonal festival historically featuring tent city living, adventure sports, and cultural programs. Actual dates and activities must be confirmed with official organizers.',
        'Safety Protocols: Mandatory life jackets and trained operating crew accompany all waterborne recreation.',
      ],
    },
    {
      title: 'Hospitality & Circuit Planning',
      points: [
        'MPT Hanuwantiya Resort: Comfortable cottages and rooms operated by MP Tourism, featuring direct views of the reservoir and dining facilities.',
        'Omkareshwar & Maheshwar Circuits: Easily combined with spiritual visits to Omkareshwar Jyotirlinga and heritage exploration in Maheshwar.',
        'Indore Connectivity: Serves as an ideal 1N/2D weekend extension for corporate, family, or leisure travelers originating from Indore.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Khandwa District, Madhya Pradesh', icon: 'pin' },
    { label: 'Ideal Stay', value: 'Suggested 1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Cooler Months Preferred', icon: 'sun' },
    { label: 'Landscape', value: 'Reservoir & Backwaters', icon: 'mountain' },
    { label: 'Best For', value: 'Couples, Families & Leisure Groups', icon: 'leaf' },
  ],
  highlights: [
    {
      id: 'indira-sagar-reservoir',
      name: 'Indira Sagar Reservoir',
      category: 'Scenic Waterbody',
      description: 'Wide blue waters, island-like landscapes and scenic reservoir views across Central India’s largest freshwater expanse.',
      image: a('hanuwantiya-reservoir'),
    },
    {
      id: 'scenic-boat-cruise',
      name: 'Scenic Boat Cruise',
      category: 'Water Experience',
      description: 'A relaxing reservoir cruise or boat-club experience across tranquil backwaters, subject to confirmed local operations and weather conditions.',
      image: a('hanuwantiya-boat-cruise'),
    },
    {
      id: 'jal-mahotsav',
      name: 'Jal Mahotsav',
      category: 'Seasonal Festival',
      description: 'Hanuwantiya’s signature adventure and tourism event, historically associated with tent accommodation, recreation and cultural experiences; seasonal event dates require official reconfirmation.',
      image: a('hanuwantiya-jal-mahotsav'),
    },
    {
      id: 'water-adventure',
      name: 'Water Adventure',
      category: 'Recreation & Sports',
      description: 'Operator-led activities such as speedboat rides, jet skiing or other permitted water sports when available; operations are subject to daily weather and reservoir conditions.',
      image: a('hanuwantiya-water-sports'),
    },
    {
      id: 'hanuwantiya-resort',
      name: 'MPT Hanuwantiya Resort',
      category: 'Waterfront Hospitality',
      description: 'A waterfront stay experience connected with the Indira Sagar backwaters, offering comfortable cottages, lakeside dining and scenic reservoir views.',
      image: a('hanuwantiya-resort'),
    },
    {
      id: 'sunset-lakeside-views',
      name: 'Sunset & Lakeside Views',
      category: 'Scenic Viewpoint',
      description: 'Peaceful evening views, golden-hour photography and quiet relaxation beside the still reservoir horizons.',
      image: a('hanuwantiya-sunset'),
    },
  ],
  themes: [
    {
      id: 'water-adventure',
      title: 'Water Adventure',
      icon: 'compass',
      image: a('theme-water-adventure'),
      sights: ['Scenic Boat Rides', 'Speedboat Experience', 'Jet Skiing Where Available', 'Operator-Led Water Activities'],
      note: 'Operator-led water sports and boating activities subject to seasonal operation, reservoir water levels and local weather clearances.',
    },
    {
      id: 'jal-mahotsav-events',
      title: 'Jal Mahotsav & Events',
      icon: 'landmark',
      image: a('theme-festival'),
      sights: ['Jal Mahotsav', 'Seasonal Adventure Activities', 'Festival Tent Experience', 'Cultural & Recreational Events'],
      note: 'Event-linked possibilities historically organized seasonally; actual festival dates, schedules and activities require official reconfirmation from organizers.',
    },
    {
      id: 'lakeside-leisure',
      title: 'Lakeside Leisure',
      icon: 'leaf',
      image: a('theme-lakeside'),
      sights: ['MPT Hanuwantiya Resort', 'Reservoir Views', 'Relaxed Waterfront Stay', 'Sunset Viewing'],
      note: 'Unhurried waterfront downtime, scenic open-air dining and peaceful lakeside walks beside the Indira Sagar backwaters.',
    },
    {
      id: 'nature-photography',
      title: 'Nature & Photography',
      icon: 'mountain',
      image: a('theme-nature'),
      sights: ['Scenic Reservoir Landscapes', 'Birdwatching Opportunities', 'Golden-Hour Photography', 'Nature Appreciation'],
      note: 'Sweeping freshwater vistas, migratory and resident waterbirds in season, and serene dawn and dusk horizons across the lake.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'December to February',
      icon: 'snowflake',
      description: 'Generally pleasant weather for outdoor recreation and reservoir sightseeing. Event activities require separate confirmation.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Summer',
      months: 'March to May',
      icon: 'sun',
      description: 'Warmer conditions; suggest early-morning and late-afternoon activities when suitable.',
      tag: 'Quiet Travel',
      theme: 'green',
    },
    {
      name: 'Monsoon',
      months: 'June to September',
      icon: 'cloud',
      description: 'Lush landscapes and changing reservoir levels. Water sports and cruises may be restricted.',
      tag: 'Scenic Waters',
      theme: 'sky',
    },
    {
      name: 'Post-Monsoon',
      months: 'October to November',
      icon: 'users',
      description: 'Scenic reservoir surroundings and generally comfortable outdoor travel, subject to local conditions.',
      tag: 'Comfortable Travel',
      theme: 'peach',
    },
  ],
  itineraries: [
    {
      id: '1n2d',
      title: '1N / 2D Hanuwantiya Waterfront Break',
      summary: 'A refreshing water-adventure and relaxation escape on the Indira Sagar reservoir.',
      days: [
        'Day 1: Arrive from Indore or Khandwa, check in at MPT Hanuwantiya Resort, afternoon boat cruise or water adventure, and sunset viewing over the lake.',
        'Day 2: Morning lakeside walk and photography, breakfast by the water, and onward journey.',
      ],
    },
    {
      id: '2n3d',
      title: '2N / 3D Hanuwantiya & Narmada Circuit',
      summary: 'Combine active water recreation with nearby heritage and sacred temples.',
      days: [
        'Day 1: Arrive at Hanuwantiya, check-in, leisure time by the reservoir, and lakeside dinner.',
        'Day 2: Day excursion to Omkareshwar Jyotirlinga or regional attractions; return to Hanuwantiya for evening relaxation.',
        'Day 3: Morning speedboat experience (subject to operation) and departure toward Indore.',
      ],
    },
  ],
};
