import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/mandsaur/${name}.webp`;

export const mandsaurContent: DestinationDetailContent = {
  id: 'mandsaur',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED ASHTAMUKHI SHIVA SHRINE · MALWA',
  title: 'Mandsaur',
  subtitle: 'Where the Shivna Flows Beneath Lord Pashupatinath.',
  heroImage: a('mandsaur-hero'),
  ctaBackgroundImage: a('mandsaur-hero'),
  tags: [
    'Ashtamukhi Eight-Faced Pashupatinath Lingam',
    'Sacred Shivna Riverfront Snan & Aarti',
    'Ancient Dashpur Capital & Aulikara Empire',
    '8th-Century Dharmrajeshwar Rock-Cut Temple',
    'Yashodharman Victory Pillars at Sondani',
  ],
  quickFacts: [
    { label: 'Region', value: 'Mandsaur District, Malwa Plateau (Western MP)', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Shri Pashupatinath Mahadev | Unique Ashtamukhi Lingam', icon: 'temple' },
    { label: 'Ideal Stay', value: '1 to 2 Nights (or Circuit with Ujjain & Udaipur)', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Malwa Winter Weather)', icon: 'sun' },
    { label: 'Best For', value: 'Pashupatinath Darshan · Shivna Aarti · Rock-Cut Temple', icon: 'heart' },
  ],
  overview: {
    heading: 'Eight-Faced Shaivite Mysticism, Sacred River Waters, and Classical Malwa Antiquity',
    description:
      'Sheltered along the gentle, sacred currents of the holy River Shivna in the historic Malwa plateau, Mandsaur — celebrated in antiquity as Dashpur — is one of Central India’s most profound centers of Shaivite spirituality and classical heritage. At its heart rises the venerable Shri Pashupatinath Mahadev Temple, enshrining a world-renowned monolithic eight-faced (Ashtamukhi) Shivalinga standing over eight feet tall. Retrieved from the depths of the Shivna in 1940 and consecrated upon its banks, each of the eight sculpted faces represents a cosmic aspect of Lord Shiva with extraordinary iconographic subtlety. Beyond the sacred riverfront where pilgrims gather for dawn snan and evening floating lamp ceremonies, the surrounding district preserves rare archaeological wonders, including the 8th-century monolithic rock-cut cave temple of Dharmrajeshwar and the 6th-century victory pillars of King Yashodharman at Sondani, weaving timeless faith with classical Indian history.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Devout Shaivite Pilgrims, Classical Iconography Scholars, Ancient Malwa Historians, Rock-Cut Architecture Enthusiasts, and Western MP–Rajasthan Circuit Travelers',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Contemplating the 8-ft Ashtamukhi Shivalinga, Shivna River Evening Aarti & Lamp Floating, Excursion to 8th-Century Dharmrajeshwar Monolith & Ancient Dashpur Ruins',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1 to 2 Nights (Permits peaceful early morning and evening Pashupatinath darshans, a scenic day excursion to Dharmrajeshwar rock-cut temples, and regional touring)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Major highway gateway connecting Malwa (Ujjain/Indore) with Southern Rajasthan (Chittorgarh/Udaipur). Paved 4-lane roads, mainline rail links via Ratlam, and quality hotels',
      },
    ],
  },
  highlights: [
    {
      id: 'mandsaur-pashupatinath-temple',
      name: 'Shri Pashupatinath Temple',
      category: 'Revered Shivna Riverfront Sanctum',
      description:
        'The paramount spiritual sanctuary of Mandsaur, situated on the sacred banks of the River Shivna. Modern colonnaded pavilions and landscaped gardens enclose the soaring stone sanctum, where thousands of devotees gather for daily abhishek, chanted prayers, and festive seasonal melas.',
      image: a('mandsaur-pashupatinath-temple'),
    },
    {
      id: 'mandsaur-ashtamukhi-shiva-lingam',
      name: 'Ashtamukhi / Eight-Faced Shiva Iconography',
      category: 'Colossal Monolithic Classical Masterpiece',
      description:
        'A magnificent monolithic Shivalinga standing over 8 feet tall, carved in two tiers with eight exquisitely sculpted faces. Each face depicts a distinct cosmic manifestation of Shiva from the Vedic Rudra Sukta — including Sharva, Bhava, Rudra, Ugra, Bhima, Pashupati, Ishana, and Mahadeva — showcasing remarkable classical artistry.',
      image: a('mandsaur-ashtamukhi-shiva-lingam'),
    },
    {
      id: 'mandsaur-shivna-riverfront',
      name: 'Sacred Shivna Riverfront',
      category: 'Purifying Ghats & Evening Aarti Promenade',
      description:
        'The stone-paved ghats bordering the temple where pilgrims perform holy snan (bathing) before offering prayers. At dusk, the riverfront comes alive during the grand evening Maha Aarti, when brass bells resonate and hundreds of glowing earthen lamps drift upon the tranquil water.',
      image: a('mandsaur-shivna-riverfront'),
    },
    {
      id: 'mandsaur-dharmrajeshwar-temple',
      name: 'Dharmrajeshwar Rock-Cut Temple',
      category: '8th-Century Monolithic Architectural Wonder',
      description:
        'Located approximately 100 km from Mandsaur in Garoth tehsil, this extraordinary 8th-century monolithic Hindu temple complex is carved top-down entirely from solid living laterite rock. Featuring an intact north-Indian shikhara, a central shrine dedicated to Shiva, and seven surrounding rock-cut chapels.',
      image: a('mandsaur-dharmrajeshwar-temple'),
    },
    {
      id: 'mandsaur-yashodharman-heritage',
      name: 'Yashodharman Archaeological Heritage & Museum',
      category: '6th-Century Classical Epigraphic Monoliths',
      description:
        'Situated 4 km from town at Sondani, two colossal monolithic stone victory pillars (vijayastambhas) stand in an open park. Inscribed with classical Sanskrit verses, they celebrate the 6th-century King Yashodharman of the Aulikara dynasty who defeated the formidable Huna ruler Mihirakula.',
      image: a('mandsaur-yashodharman-heritage'),
    },
    {
      id: 'mandsaur-malwa-cultural-landscape',
      name: 'Mandsaur Historic Temple & Malwa Cultural Landscape',
      category: 'Ancient Dashpur Fort & Regional Heritage',
      description:
        'The wider cultural landscape encompassing the historic Mandsaur Fort overlooking the Shivna, ancient Baolis (stepwells), and the District Archaeological Museum housing remarkable Gupta, Pratihara, and Paramara sculptures salvaged across the Dashpur archaeological corridor.',
      image: a('mandsaur-malwa-cultural-landscape'),
    },
  ],
  themes: [
    {
      id: 'theme-pashupatinath-darshan',
      title: 'Pashupatinath Mahadev Darshan',
      icon: 'temple',
      image: a('theme-pashupatinath-darshan'),
      sights: [
        'Venerated 8-ft Monolithic Ashtamukhi Shivalinga',
        'Morning Panchamrit Abhishek with Sacred Shivna Waters',
        'Delicate Floral Alankaram (Decoration) Rituals',
        'Four Open Entrance Doors framing the Four Cardinal Faces',
        'Traditional Chanted Vedic Hymns & Mantras by Trust Priests',
      ],
      note: 'The temple is open from early morning (around 5:30 AM) to late evening. Footwear is deposited at secure stands outside. Traditional modest attire is required for entering the main sabha mandap. Devotional offerings can be arranged at trust counters.',
    },
    {
      id: 'theme-shivna-river-experience',
      title: 'Shivna River Sacred Heritage Experience',
      icon: 'compass',
      image: a('theme-shivna-river-experience'),
      sights: [
        'Evening Shivna River Aarti Ceremony with Brass Lamps',
        'Traditional Deep Daan (Floating Leaf Lamps on River Currents)',
        'Purifying Morning Snan on the Paved Stone Ghats',
        'Quiet Wooden Boat Rides across the Reflective Waters',
        'Sunset Promenades overlooking the Illuminated Temple Complex',
      ],
      note: 'The evening aarti takes place at twilight on the main ghat platform. Respectful visitors of all backgrounds are welcome to attend; photographers should capture the illuminated floating lamps from designated riverfront vantage points.',
    },
    {
      id: 'theme-dharmrajeshwar-excursion',
      title: 'Dharmrajeshwar Rock-Cut Temple Excursion',
      icon: 'mountain',
      image: a('theme-dharmrajeshwar-excursion'),
      sights: [
        'Monolithic Top-Down Rock-Cut Architecture carved into Living Stone',
        'Main Shivalinga Sanctum with Intact North-Indian Shikhara Spire',
        'Seven Surrounding Rock-Hewn Subsidiary Shrines',
        'Deep Subterranean Sunken Courtyard excavated 50 feet into the Hill',
        'Scenic Drive through the Rural Malwa Countryside and Plateaus',
      ],
      note: 'Located approx. 100 km from Mandsaur (approx. 2.5 hours each way by paved road). Exploring the rock-hewn courtyard involves descending stone stairs into the excavation pit; flat walking shoes and sun protection are strongly recommended.',
    },
    {
      id: 'theme-dashpur-malwa-heritage-trail',
      title: 'Ancient Dashpur & Malwa Cultural Heritage Trail',
      icon: 'landmark',
      image: a('theme-dashpur-malwa-heritage-trail'),
      sights: [
        'Yashodharman Monolithic Victory Pillars at Sondani',
        'Ancient Gupta-Era Sanskrit Inscriptions celebrating Huna Defeat',
        'Historic Mandsaur Fort & Riverfront Ramparts',
        'District Archaeological Museum with Rare Classical Sculptures',
        'Ancient Malwa Silk Weavers Guild Epigraphic Traces',
      ],
      note: 'Exploring Sondani and the local archaeological museum takes approximately 2 hours. A local historian or certified regional guide provides enriching insights into ancient Dashpur’s pivotal role as a silk-trading hub and imperial capital.',
    },
  ],
  seasons: [
    {
      name: 'Mild Winter Touring',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'The premier travel period for Mandsaur. Crisp, pleasant days (11°C–26°C) and cool evenings provide ideal conditions for temple visits, riverfront walks, and outdoor day excursions to Dharmrajeshwar and Sondani.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Shravan & Maha Shivratri',
      months: 'Jul/Aug & Feb/Mar',
      icon: 'calendar',
      description:
        'During the holy month of Shravan and Maha Shivratri, Mandsaur witnesses an extraordinary surge of Shaivite devotion. Devotees carry holy waters from the Shivna in grand Kanwar processions for special temple abhishek.',
      tag: 'High Devotional Period',
      theme: 'gold',
    },
    {
      name: 'Summer Warmth',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Dry and hot Malwa summer (30°C–43°C). Darshan is most comfortably scheduled during early mornings (6:00 AM – 9:00 AM) or after 6:30 PM. The long excursion to Dharmrajeshwar should be avoided during the peak midday sun.',
      tag: 'Early Morning Darshan',
      theme: 'gold',
    },
    {
      name: 'Monsoon Shivna Awakening',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Monsoon rains revitalize the River Shivna, often swelling gracefully to touch the lower temple steps in an auspicious natural phenomenon celebrated locally as "Jal Abhishek". The surrounding countryside turns vibrant green.',
      tag: 'River Swell & Lush Nature',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Maharana Pratap Airport in Udaipur (UDR, approx. 180 km / 3.5 hrs drive) and Devi Ahilyabai Holkar Airport in Indore (IDR, approx. 210 km / 4 hrs drive) are the primary air gateways, offering frequent non-stop flights to all major Indian cities.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Mandsaur Railway Station (MDS) is well connected on the Ajmer–Chittorgarh–Ratlam line. Ratlam Junction (approx. 85 km / 1.5 hrs drive) is a premier A1-class junction on the main Delhi–Mumbai Rajdhani route with round-the-clock nationwide train connections.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Smooth 4-lane state and national highways link Mandsaur seamlessly to Neemuch (50 km), Ratlam (85 km), Chittorgarh (110 km), Ujjain (150 km), Udaipur (180 km), and Indore (210 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans and SUVs provide door-to-door transit between railway stations, hotels, the temple complex, and excursion sites like Dharmrajeshwar (100 km) and Sondani (4 km).',
    },
  ],
  cta: {
    heading: 'Curate a Sacred Pilgrimage to Mandsaur & the Ancient Malwa Shrines',
    description:
      'Partner with our Central India destination specialists for verified temple darshan pacing, curated Dharmrajeshwar rock-cut excursions, private AC vehicle logistics, and seamless circuit combinations connecting Mandsaur with Ujjain, Ratlam, and Southern Rajasthan.',
  },
};
