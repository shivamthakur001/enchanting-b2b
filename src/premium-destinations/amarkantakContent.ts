import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/amarkantak/${name}.webp`;

export const amarkantakContent: DestinationDetailContent = {
  id: 'amarkantak',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED SOURCE OF THE NARMADA · MAIKAL HILLS',
  title: 'Amarkantak',
  subtitle: 'Where Sacred Rivers Begin Their Timeless Journey.',
  heroImage: a('amarkantak-hero'),
  ctaBackgroundImage: a('amarkantak-hero'),
  tags: [
    'Origin of Holy Narmada & Son Rivers',
    '10th-Century Kalachuri Temples',
    'Maikal Highland Sacred Sanctuary',
    'Kapildhara & Dugdh Dhara Cascades',
    'Narmada Parikrama Teerthraj',
  ],
  quickFacts: [
    { label: 'Region', value: 'Anuppur District, Maikal Hills (MP)', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Source of Narmada & Son | Teerthraj', icon: 'temple' },
    { label: 'Ideal Stay', value: '2 Nights / 3 Days', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Highland Climate)', icon: 'sun' },
    { label: 'Best For', value: 'Udgam Kund · Kalachuri Shrines · Waterfalls', icon: 'heart' },
  ],
  overview: {
    heading: 'The Sacred Mountain Source of Holy Rivers and Ancient Shrines',
    description:
      'Crowned high upon the sacred crest where the Vindhyan and Satpura ranges converge within the Maikal Hills, Amarkantak reigns as the venerable Teerthraj — the King of Pilgrimages. Revered for millennia as the mystical birthplace of the sacred River Narmada and the mighty River Son, this tranquil highland sanctuary at 1,065 metres elevation weaves together consecrated waters, 10th-century Kalachuri stone temples, cascading forest waterfalls, and ancient meditative groves. For devout pilgrims, Amarkantak marks the sacred origin and ultimate fulfillment of the arduous 3,000-kilometre Narmada Parikrama, while heritage travelers and nature lovers discover an unspoiled retreat surrounded by dense sal and teak woodlands.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Narmada Parikrama Pilgrims, Shaivite Devotees, Kalachuri Architecture Connoisseurs, Nature & Eco-Tourists, and Peaceful Highland Retreat Seekers',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Narmada Udgam Kund Morning Aarti, 10th-Century Kalachuri Nagara Temple Walks, Kapildhara 100-ft Waterfall Gorge, and Panoramic Sunset Vistas at Sonmuda',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D (Permits serene early morning darshan, unhurried heritage study of ASI Kalachuri monuments, scenic waterfall forest walks, and tranquil retreat)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Reliable MP Tourism Holiday Homes, Private Eco-Resorts, Smooth Road Transit from Jabalpur (225 km) or Bilaspur (120 km), and Seamless Pairing with Bhedaghat & Kanha',
      },
    ],
  },
  highlights: [
    {
      id: 'amarkantak-narmada-udgam-kund',
      name: 'Narmada Udgam Temple & Kund',
      category: 'Consecrated River Source Sanctuary',
      description:
        'The spiritual heart of Amarkantak, where the sacred River Narmada emerges from a subterranean spring into a pristine consecrated stone tank surrounded by whitewashed shrines. Devotees gather for dawn prayers, holy snan rituals, and the uplifting evening aarti honoring the holy mother river of Central India.',
      image: a('amarkantak-narmada-udgam-kund'),
    },
    {
      id: 'amarkantak-kalachuri-temples',
      name: 'Kalachuri Group of Ancient Temples',
      category: '10th–11th Century ASI Heritage Site',
      description:
        'A magnificent cluster of ancient sandstone temples protected by the Archaeological Survey of India, commissioned by Kalachuri rulers of Tripuri. Features the commanding Pataleshwar Mahadev, Machhendranath, and Karna temples showcasing exquisite nagara spires, stepped shikhara profiles, and intricately molded plinths.',
      image: a('amarkantak-kalachuri-temples'),
    },
    {
      id: 'amarkantak-kapildhara-waterfall',
      name: 'Kapildhara Waterfall',
      category: '100-Foot Natural Basalt Cataract',
      description:
        'Located approximately 6 km downstream from the source, the nascent Narmada plunges dramatically 100 feet over a sheer basalt precipice into a deep forested gorge. Traditionally associated with the meditative penance of the sage Kapila, the cascade offers sweeping panoramas across the rugged Maikal rift valley.',
      image: a('amarkantak-kapildhara-waterfall'),
    },
    {
      id: 'amarkantak-dugdh-dhara-waterfall',
      name: 'Dugdh Dhara Waterfall',
      category: 'Stepped Forest Stream Cascade',
      description:
        'Situated approximately 1 km further downstream through dense sal and teak woodlands, the river cascades over stepped rock shelves with such velocity that its churning water resembles frothy, foaming milk — giving the falls its name. A tranquil natural sanctuary frequented by meditating ascetics.',
      image: a('amarkantak-dugdh-dhara-waterfall'),
    },
    {
      id: 'amarkantak-mai-ki-bagiya',
      name: 'Mai Ki Bagiya',
      category: 'Venerated Forest Flora Grove',
      description:
        'A serene natural garden grove dedicated to Goddess Narmada, situated in a quiet forest depression about 1 km from the main temple. Enclosed by ancient mango, banana, and gulbakavli medicinal plants, folklore reveres it as the sacred orchard where the divine river maiden plucked fresh wild blossoms.',
      image: a('amarkantak-mai-ki-bagiya'),
    },
    {
      id: 'amarkantak-sonmuda-viewpoint',
      name: 'Sonmuda / Son River Origin Landscape',
      category: 'Dramatic Plateau Ridge Precipice',
      description:
        'Perched on the extreme southeastern edge of the Maikal plateau, Sonmuda marks the geographical source of the sacred River Son. Here, a slender stream cascades over towering 100-metre cliffs into deep forested ravines, accompanied by breathtaking panoramic sunset vistas overlooking the vast plains below.',
      image: a('amarkantak-sonmuda-viewpoint'),
    },
  ],
  themes: [
    {
      id: 'theme-narmada-udgam-sacred-traditions',
      title: 'Narmada Udgam Darshan & Sacred River Traditions',
      icon: 'temple',
      image: a('theme-narmada-udgam-sacred-traditions'),
      sights: [
        'Narmada Udgam Kund Morning Darshan & Pujan',
        'Venerable Shri Narmada Mandir & Inner Sanctum',
        'Parikramavasi Pilgrims Concluding Circumambulations',
        'Evening Deep Daan & Chanted River Aarti Ceremony',
        'Surrounding Shrines of Annapurna, Shiva & Kartikeya',
      ],
      note: 'The Narmada Udgam complex is open from dawn to late evening. Modest pilgrimage attire is customary. Devotees may arrange traditional pujas through accredited local temple priests at standardized trust donation counters.',
    },
    {
      id: 'theme-kalachuri-temple-heritage-walk',
      title: 'Ancient Temple Heritage Walk',
      icon: 'landmark',
      image: a('theme-kalachuri-temple-heritage-walk'),
      sights: [
        'Karna Mandir with Triple-Shrine Layout & Intricate Moldings',
        'Pataleshwar Mahadev Temple with Sunken Subterranean Sanctum',
        'Machhendranath Temple honoring the Great Nath Tradition',
        'ASI Landscaped Archaeological Gardens & Epigraph Traces',
        'Ancient Stepped Well and Sacred Paved Courtyards',
      ],
      note: 'The Kalachuri monuments are under the Archaeological Survey of India (ASI) protection. Walking through the manicured lawns and stone plinths takes approximately 1.5 hours and is best undertaken during early morning or late afternoon light for photography.',
    },
    {
      id: 'theme-kapildhara-dugdh-dhara-trail',
      title: 'Kapildhara–Dugdh Dhara Nature Experience',
      icon: 'mountain',
      image: a('theme-kapildhara-dugdh-dhara-trail'),
      sights: [
        'Kapildhara 100-ft Basalt Plunge & Canyon Lookout',
        'Forest Trail through Fragrant Sal & Teak Woods',
        'Ancient Sage Hermitage Caves along the Ravine Edge',
        'Dugdh Dhara Frothing Cascades & Natural Pools',
        'Highland Birdlife, Butterflies & Native Medicinal Flora',
      ],
      note: 'Access to Kapildhara and Dugdh Dhara involves navigating outdoor stone staircases and natural woodland paths. While paved and well-trodden, sturdy walking shoes with reliable grip are strongly recommended, especially in damp conditions.',
    },
    {
      id: 'theme-kabir-forest-reflection',
      title: 'Kabir Heritage & Forest Reflection',
      icon: 'compass',
      image: a('theme-kabir-forest-reflection'),
      sights: [
        'Historic Kabir Chabutra Meditative Platform',
        'Quiet Forest Ashrams and Natural Springs',
        'Johila Waterfall (Jwaleshwar Mahadev Source)',
        'Ancient Banyan and Sal Tree Canopies',
        'Sonmuda Ridge Crest Sunset Observation Point',
      ],
      note: 'Kabir Chabutra is celebrated as a serene meeting and meditation spot of the mystic poet Kabir. The surrounding forested hills offer exceptional tranquility for visitors seeking quiet contemplative walks, reading, or meditation.',
    },
  ],
  seasons: [
    {
      name: 'Crisp Highland Winter',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'The premier travel and pilgrimage window. Cool, invigorating mountain air with temperatures ranging from 8°C to 24°C, crystal-clear skies, and comfortable walking weather for temple visits, forest trails, and photography. Night temperatures can dip to 5°C in December and January.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Moderate Highland Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Thanks to its 1,065-metre elevation, Amarkantak remains notably cooler than the surrounding plains (22°C to 36°C). Mornings and evenings are pleasant for temple darshan and garden strolls, while afternoons invite leisurely relaxation in shaded retreat verandas.',
      tag: 'Cooler Plateau Climate',
      theme: 'gold',
    },
    {
      name: 'Lush Monsoon Roar',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Heavy monsoon showers (over 1,200 mm) carpet the Maikal range in vibrant emerald foliage. Kapildhara and Dugdh Dhara surge with magnificent torrents. An exhilarating season for nature enthusiasts, though walking paths can be damp and slippery.',
      tag: 'Thundering Waterfalls',
      theme: 'green',
    },
    {
      name: 'Post-Monsoon & Navratri',
      months: 'Sep – Nov',
      icon: 'calendar',
      description:
        'A magnificent shoulder season characterized by lush post-rain forests, active waterfalls, and moderate temperatures. The temple town observes Navratri and Sharad Purnima with deep spiritual fervor, offering an authentic, unhurried pilgrim atmosphere.',
      tag: 'Festive River Traditions',
      theme: 'gold',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Bilaspur Airport (PBF, approx. 120 km / 3 hrs drive) provides regional commercial air connections. Jabalpur Airport (JLR, approx. 225 km / 4.5 hrs drive) is the primary gateway offering daily direct flights to New Delhi, Mumbai, Hyderabad, and Indore. Raipur Airport (RPR, approx. 230 km / 5 hrs) provides additional connectivity.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Pendra Road Railway Station (PND, approx. 35 km / 45 mins drive) is the closest railhead on the Bilaspur–Katni mainline, served by major express trains including the Amarkantak Express and Narmada Express. Anuppur Junction (APR, approx. 70 km / 1.5 hrs) is a larger junction with extensive nationwide services.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well-maintained, picturesque ghat highways link Amarkantak to Jabalpur (225 km via Dindori), Bilaspur (120 km), Shahdol (100 km), and Kanha National Park (215 km). The winding ascent through the Maikal forested slopes offers scenic valley views.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans and SUVs provide door-to-door transit between railheads and local sights. Within the sacred town, major attractions lie within a 2 to 8 km radius; comfortable walking shoes are advised for the stone steps leading down to waterfalls.',
    },
  ],
  cta: {
    heading: 'Curate a Sacred Pilgrimage to Amarkantak & the Narmada Source',
    description:
      'Partner with our B2B travel specialists for tailored pilgrimage itineraries, verified heritage interpretation, eco-resort bookings, and seamless circuit combinations connecting Amarkantak with Bhedaghat, Bandhavgarh, and Kanha.',
  },
};
