import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/salkanpur/${name}.webp`;

export const salkanpurContent: DestinationDetailContent = {
  id: 'salkanpur',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED HILLTOP SHAKTI SHRINE · SEHORE',
  title: 'Salkanpur',
  subtitle: 'Where Devotion Rises Above the Sacred Hills.',
  heroImage: a('salkanpur-hero'),
  ctaBackgroundImage: a('salkanpur-hero'),
  tags: [
    'Maa Vijayasan Bijasan Devi Sanctum',
    'Sacred Hilltop Shakti Peeth Tradition',
    'Panoramic Vindhyan & Narmada Vistas',
    '1,000+ Stone Pilgrimage Stairway',
    'Grand Chaitra & Sharad Navratri Mela',
  ],
  quickFacts: [
    { label: 'Region', value: 'Sehore District, Vindhyan Range (near Rehti, 70 km from Bhopal)', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Maa Vijayasan Devi Shrine | Revered Shakti Tradition', icon: 'temple' },
    { label: 'Ideal Stay', value: 'Half-Day Excursion (or Full-Day Bhopal Circuit)', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Hilltop Weather & Navratri)', icon: 'sun' },
    { label: 'Best For', value: 'Hilltop Shakti Darshan · Passenger Ropeway · Vistas', icon: 'heart' },
  ],
  overview: {
    heading: 'Sacred Hilltop Shakti Worship, Forest Vistas, and Living Pilgrimage Traditions',
    description:
      'Perched dramatically atop an 800-foot forested ridge in the Vindhyan range near Rehti in Sehore district, Salkanpur is one of Central India’s most revered Shakti pilgrimage sanctuaries. At its summit stands the historic temple of Maa Vijayasan (also revered as Vindhyavasini Bijasan Devi), an auspicious incarnation of Goddess Durga seated upon a lion, venerated for centuries as the divine protector who bestows victory, spiritual peace, and worldly well-being upon her devotees. The pilgrimage experience harmonizes natural tranquility with deep devotional energy, offering visitors the choice of ascending the sacred hill via a modern passenger ropeway cable car, a scenic paved vehicular ghat road, or an invigorating foot climb of over 1,000 stone steps. Surrounded by dense teak forests and commanding panoramic views toward the fertile Narmada valley, Salkanpur is an exceptional day excursion from Bhopal that combines sacred temple rituals with breathtaking highland landscapes.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Devout Shakti Pilgrims, Senior-Citizen Travelers (facilitated by passenger ropeway and hill road), Cultural & Heritage Day-Excursionists from Bhopal, and Navratri Tour Groups',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Ascending 800 Feet via Passenger Ropeway or 1,000+ Stone Steps, Morning Aarti before Maa Vijayasan, 360-Degree Vindhyan Vistas & Traditional Pilgrimage Bazaars',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: 'Half-Day Excursion (3–4 hours on-site including ascent, darshan, and circumambulation) or full-day regional spiritual itinerary connecting Salkanpur with Bhojpur and Bhimbetka',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Reliable pilgrim infrastructure, operational passenger ropeway, paved vehicular access road to hilltop parking, MP Tourism facilities, and direct 1.5-hour highway links from Bhopal',
      },
    ],
  },
  highlights: [
    {
      id: 'salkanpur-vijayasan-temple',
      name: 'Maa Vijayasan Bijasan Devi Temple',
      category: 'Revered Hilltop Shakti Sanctum',
      description:
        'The sacred sanctum crowning the summit of the hill, enshrining the self-manifested stone idol of Goddess Vijayasan seated upon a lion, flanked by shrines dedicated to Lord Ganesha and Lord Shiva. Devotees gather for elaborate morning and evening aartis, offering red chunris, coconuts, and flowers in reverence.',
      image: a('salkanpur-vijayasan-temple'),
    },
    {
      id: 'salkanpur-hilltop-temple-complex',
      name: 'Sacred Hilltop Temple Complex',
      category: 'Panoramic Summit Courtyards & Shrines',
      description:
        'The expanded summit complex features shaded circumambulation corridors, sacred brass bell galleries, modern waiting halls, and prayer terraces that command breathtaking vistas of the surrounding Vindhyan wilderness and mist-covered valleys.',
      image: a('salkanpur-hilltop-temple-complex'),
    },
    {
      id: 'salkanpur-pilgrimage-stairway',
      name: 'Traditional Pilgrimage Stairway',
      category: '1,000+ Shaded Stone Step Foot Trail',
      description:
        'A steep, continuous staircase of over 1,000 stone steps ascending through the shaded forest canopy. Lined with resting gazebos, drinking water points, and devotional stalls, the stairway is traversed by thousands of pilgrims chanting devotional hymns on their ascent.',
      image: a('salkanpur-pilgrimage-stairway'),
    },
    {
      id: 'salkanpur-hilltop-views-landscape',
      name: 'Hilltop Views and Surrounding Landscapes',
      category: '360-Degree Vindhyan Ridge Observation Terrace',
      description:
        'From the summit observation terraces at 800 feet elevation, visitors enjoy sweeping panoramic horizons overlooking dense teak forest canopies, undulating Vindhyan hills, and the distant fertile agricultural plains stretching toward the Narmada River basin.',
      image: a('salkanpur-hilltop-views-landscape'),
    },
    {
      id: 'salkanpur-navratri-devotion',
      name: 'Navratri Devotional Traditions',
      category: 'Grand Biannual Temple Fair & Celebrations',
      description:
        'During Chaitra and Sharad Navratri, Salkanpur transforms into an immense center of devotional celebration. Hundreds of thousands of devotees arrive from across Central India for round-the-clock darshan, traditional sacred havan rituals, and vibrant folk fairs.',
      image: a('salkanpur-navratri-devotion'),
    },
    {
      id: 'salkanpur-devi-lok-development',
      name: 'Salkanpur Devi Lok and Temple Development Heritage',
      category: 'Phased Sacred Corridor Masterplan',
      description:
        'Part of the comprehensive "Devi Lok" masterplan initiative led by the state government, designed to introduce structured pilgrimage plazas, mythological art installations depicting the forms of the Goddess, and expanded visitor convenience facilities currently under phased development.',
      image: a('salkanpur-devi-lok-development'),
    },
  ],
  themes: [
    {
      id: 'theme-vijayasan-devi-darshan',
      title: 'Maa Vijayasan Devi Darshan',
      icon: 'temple',
      image: a('theme-vijayasan-devi-darshan'),
      sights: [
        'Venerated Inner Sanctum of Maa Vijayasan Devi',
        'Morning Mangala Aarti and Chanted Chandi Path Hymns',
        'Consecrated Coconut, Vermillion & Floral Offerings',
        'Courtyard Shrines of Lord Ganesha, Hanuman & Shiva',
        'Sacred Akhand Jyoti Flame burning continuously on the Hill',
      ],
      note: 'The sanctum is open from early morning (around 5:30 AM) to late evening. Footwear is deposited at secure counters near the temple gate. Modest attire is required. Photography is prohibited within the inner sanctum.',
    },
    {
      id: 'theme-sacred-hill-ascent',
      title: 'Sacred Hill Ascent and Pilgrimage Traditions',
      icon: 'mountain',
      image: a('theme-sacred-hill-ascent'),
      sights: [
        'Modern Passenger Ropeway Cable Car Ascent over Forest Canopies',
        'Scenic Winding Vehicular Ghat Road to Hilltop Parking',
        'Traditional 1,000-Step Forested Pilgrimage Stairway',
        'Hillside Pilgrim Stalls offering Traditional Prasaad',
        'Panoramic Summit Terraces overlooking Vindhyan Horizons',
      ],
      note: 'The passenger ropeway operates throughout the day subject to regular technical maintenance and wind conditions. For walking pilgrims, the staircase features covered sections, rest points, and railings. Comfortable walking shoes are advised.',
    },
    {
      id: 'theme-navratri-shakti-worship',
      title: 'Navratri and Living Shakti Worship',
      icon: 'compass',
      image: a('theme-navratri-shakti-worship'),
      sights: [
        'Nine Nights of Auspicious Devi Mahatmya Chanting',
        'Sacred Havan & Purnahuti Ceremonies on the Hilltop',
        'Vibrant Regional Folk Bazaars at the Foot of the Hill',
        'Continuous Streams of Devout Pilgrims with Colorful Flags',
        'Illuminated Temple Shikhara glowing against Night Skies',
      ],
      note: 'Navratri mela periods witness extraordinarily high pilgrim footfall. For trade itineraries, VIP pass protocols or scheduling darshan during early morning hours outside festival peak days is recommended for a relaxed experience.',
    },
    {
      id: 'theme-temple-architecture-interpretation',
      title: 'Temple Architecture and Hilltop Interpretation',
      icon: 'landmark',
      image: a('theme-temple-architecture-interpretation'),
      sights: [
        'Hilltop Sandstone Sanctum & Carved Marble Courtyards',
        'Traditional Nagara Shikhara with Golden Kalash Spire',
        'Ancient Hill Springs and Water Harvesting Cisterns',
        'Dense Teak & Palas Forest Ecosystem of Sehore District',
        'Panoramic Views toward the Narmada River Plains',
      ],
      note: 'Exploring the summit terraces and perimeter pathways takes approximately 1 to 1.5 hours. Local temple trust guides can provide informative context on the historic growth of the shrine and surrounding natural geography.',
    },
  ],
  seasons: [
    {
      name: 'Mild Winter Pilgrimage',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'The optimal season to visit Salkanpur. Pleasant daytime temperatures between 12°C and 27°C, clear sunny skies, and refreshing mountain breezes provide comfortable conditions for walking up the hill steps and exploring summit terraces.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Navratri Festive Windows',
      months: 'Mar/Apr & Sep/Oct',
      icon: 'calendar',
      description:
        'Chaitra and Sharad Navratri mark the spiritual zenith of Salkanpur. Hundreds of thousands of devotees assemble for round-the-clock darshan, vibrant melas, and elaborate pujas. Meticulous advance planning is essential for trade clients.',
      tag: 'Navratri High Devotion',
      theme: 'gold',
    },
    {
      name: 'Summer Mornings & Evenings',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Warm to hot dry weather (28°C–42°C). The passenger ropeway provides effortless summit access; visits should be scheduled during the cooler dawn hours (6:00 AM – 9:00 AM) or pleasant post-sunset hours.',
      tag: 'Early Morning Darshan',
      theme: 'gold',
    },
    {
      name: 'Monsoon Greenery',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Monsoon showers carpet the Vindhyan hills in lush emerald foliage. The summit is often enveloped in dramatic passing mists. Ropeway operates smoothly except during severe storms; non-slip footwear advised on wet stone steps.',
      tag: 'Lush Hill Vistas',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport in Bhopal (BHO, approx. 85 km / 1 hr 45 mins drive) is the closest commercial airport, offering frequent daily non-stop flights to New Delhi, Mumbai, Bengaluru, Hyderabad, and Ahmedabad.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Rani Kamlapati Railway Station in Bhopal (RKMP, approx. 70 km / 1.5 hrs drive) and Hoshangabad / Narmadapuram Station (NDPM, approx. 35 km / 45 mins) are major railheads. Budni Station (approx. 25 km) is the closest local junction on the Bhopal-Itarsi line.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well-paved state highways connect Salkanpur seamlessly to Bhopal (70 km via Kolar/Rehti), Hoshangabad (35 km), Sehore (80 km), and Indore (200 km). A smooth 2.5-km paved ghat road leads directly to hilltop parking.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans and SUVs provide door-to-door transit from Bhopal or Hoshangabad. At the base, visitors can choose between the passenger ropeway, vehicle ascent, or traditional stone stairs.',
    },
  ],
  cta: {
    heading: 'Plan an Uplifting Shakti Pilgrimage to Salkanpur',
    description:
      'Partner with our Central India destination specialists for verified hilltop ropeway coordination, comfortable day itineraries from Bhopal, clean vegetarian dining arrangements, and bespoke circuit extensions connecting Salkanpur with Bhojpur and Bhimbetka.',
  },
};
