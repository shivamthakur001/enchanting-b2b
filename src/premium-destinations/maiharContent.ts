import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/maihar/${name}.webp`;

export const maiharContent: DestinationDetailContent = {
  id: 'maihar',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED SHAKTI PILGRIMAGE · TRIKUTA HILL',
  title: 'Maihar',
  subtitle: 'Where Devotion Rises Above the Vindhyan Plains.',
  heroImage: a('maihar-hero'),
  ctaBackgroundImage: a('maihar-hero'),
  tags: [
    'Maa Sharda Devi Hilltop Shrine',
    'Trikuta Hill Sacred Ascent',
    'Legendary Alha-Udal Folklore',
    'Maihar Classical Music Gharana',
    '10th-Century Golamath Shiva Temple',
  ],
  quickFacts: [
    { label: 'Region', value: 'Maihar District (Satna Region), Northern MP', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Maa Sharda Devi Shrine | Shakti Peeth Tradition', icon: 'temple' },
    { label: 'Ideal Stay', value: '1 to 2 Nights (or Circuit with Khajuraho/Bandhavgarh)', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Hilltop Weather & Navratri)', icon: 'sun' },
    { label: 'Best For', value: 'Maa Sharda Darshan · Ropeway · Classical Music Heritage', icon: 'heart' },
  ],
  overview: {
    heading: 'Sacred Hilltop Devotion, Warrior Legends, and Classical Music Heritage',
    description:
      'Surrounded by the open plains and forested ridges of the Vindhya region, Maihar rises with unmistakable spiritual presence around the dramatic isolated pyramid of Trikuta Hill. Crowned at its 600-foot summit stands the historic temple of Maa Sharda Devi (Saraswati), one of Central India’s most venerated Shakti pilgrimage shrines. Regional belief draws the name "Maihar" from "Mai-ka-Har" (the necklace of the Mother), linking the hilltop to the sacred Shaktipeeth tradition where the divine necklace of Sati is held to have fallen. Immortalized in Bundelkhandi oral folklore, the legendary 12th-century warrior brothers Alha and Udal are believed by folk tradition to have been ardent devotees granted immortality by the goddess, with folklore recounting that Alha performs the mystical first morning puja in the locked sanctum before human dawn. Complementing its sacred aura, Maihar holds an exalted place in world culture as the cradle of the Maihar Gharana of Hindustani classical music, founded by the revered master Baba Ustad Allauddin Khan — guru to global icons Pandit Ravi Shankar, Ustad Ali Akbar Khan, and Annapurna Devi. With a modern operational passenger ropeway alongside traditional stone steps, 10th-century Kalachuri archaeological monuments like Golamath, and mainline railway connectivity, Maihar is a rich and evocative destination for pilgrimage and cultural tourism.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Shakti Devotees, Senior-Citizen Pilgrims (facilitated by passenger ropeway), Hindustani Music Enthusiasts, Folklore Travelers & Central MP Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Maa Sharda Hilltop Darshan via Aerial Ropeway or 1,063 Stone Steps, Panoramic Vindhyan Views, Alha Akhara Trail, Madina Bhavan & Golamath Temple',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1 to 2 Nights (Permitting relaxed early morning darshan, unhurried cultural touring of music landmarks and ancient temples, and smooth onwards travel)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Mainline Railway Access (MYR on Mumbai-Howrah line), Clean Vegetarian Hotels & MP Tourism properties, Operational Cable Car, and Smooth Highway Transit',
      },
    ],
  },
  highlights: [
    {
      id: 'maihar-sharda-devi-temple',
      name: 'Maa Sharda Devi Temple',
      category: 'Revered Hilltop Shakti Sanctum',
      description:
        'Crowning the summit of Trikuta Hill, this ancient sanctuary enshrines the stone idol of Maa Sharda (Saraswati), seated on a lion, worshipped for centuries as the divine bestower of wisdom, learning, arts, and spiritual grace. Devotees gather for elaborate morning and evening aartis echoing across the valley.',
      image: a('maihar-sharda-devi-temple'),
    },
    {
      id: 'maihar-trikuta-hill-ascent',
      name: 'Trikuta Hill & Pilgrimage Ascent',
      category: 'Panoramic Aerial Ropeway & Stone Steps',
      description:
        'Rising 600 feet above the surrounding Vindhyan landscape, Trikuta Hill is climbed via a traditional staircase of 1,063 stone steps or reached effortlessly via a modern, certified passenger ropeway cable car that whisks visitors to the temple crest in under five minutes with sweeping 360-degree aerial views.',
      image: a('maihar-trikuta-hill-ascent'),
    },
    {
      id: 'maihar-alha-udal-akhara',
      name: 'Alha–Udal Akhara & Sacred Folklore',
      category: '12th-Century Warrior Devotional Site',
      description:
        'Tucked in a serene wooded valley behind Trikuta Hill, this ancient training arena (akhara) and sacred water reservoir (Alha Talab) commemorate the legendary 12th-century warrior heroes Alha and Udal. Revered in Bundeli folklore, the brothers are said to have offered their swords here in devotion to the goddess.',
      image: a('maihar-alha-udal-akhara'),
    },
    {
      id: 'maihar-golamath-shiva-temple',
      name: 'Golamath Shiva Temple',
      category: '10th-Century ASI Kalachuri Heritage Site',
      description:
        'An Archaeological Survey of India (ASI) protected 10th-century sandstone temple located in the heart of town. Built during the Kalachuri period, it features a unique circular-styled nagara shikhara, finely chiseled plinth moldings, and ancient Shaivite carvings that reflect Central India’s high medieval craftsmanship.',
      image: a('maihar-golamath-shiva-temple'),
    },
    {
      id: 'maihar-gharana-allauddin-khan',
      name: 'Maihar Gharana & Ustad Allauddin Khan Heritage',
      category: 'World-Renowned Classical Music Ashram',
      description:
        'Madina Bhavan, the historic residence and ashram of the venerated maestro Baba Ustad Allauddin Khan (1862–1972). Preserved as a living memorial, it showcases his musical instruments, handwritten notations, and the enduring legacy of the Maihar Band, having trained legends like Pt. Ravi Shankar and Ustad Ali Akbar Khan.',
      image: a('maihar-gharana-allauddin-khan'),
    },
    {
      id: 'maihar-fort-heritage',
      name: 'Maihar Fort & Regional Heritage',
      category: 'Princely Rajput Architectural Landmark',
      description:
        'The historic citadel of the former princely state of Maihar, situated near the banks of the Tamas River. Reflecting Baghel Rajput architectural heritage with carved stone gateways, courtyards, and reservoirs, the fort tells the story of regional rulers who nurtured sacred pilgrimage and the classical performing arts.',
      image: a('maihar-fort-heritage'),
    },
  ],
  themes: [
    {
      id: 'theme-sharda-devi-darshan',
      title: 'Maa Sharda Devi Darshan',
      icon: 'temple',
      image: a('theme-sharda-devi-darshan'),
      sights: [
        'Venerated Inner Sanctum of Maa Sharda Devi',
        'Dawn Mangala Aarti & Sacred Chanted Offerings',
        'Consecrated Coconut, Red Chunri & Sindoor Offerings',
        'Courtyard Shrines of Lord Ganesha, Hanuman & Shiva',
        'Panoramic Summit Terraces overlooking Vindhyan Plains',
      ],
      note: 'The temple is open from early morning (around 5:00 AM) until late evening. Footwear is deposited at secure stands near the entrance gate. Photography is prohibited within the inner sanctum. Modest traditional attire is recommended for all visitors.',
    },
    {
      id: 'theme-trikuta-hill-pilgrimage-experience',
      title: 'Trikuta Hill Pilgrimage Experience',
      icon: 'mountain',
      image: a('theme-trikuta-hill-pilgrimage-experience'),
      sights: [
        'Scenic Passenger Ropeway Glide over Valley Canopies',
        '1,063 Shaded Stone Steps with Pilgrim Rest Pavilions',
        'Vibrant Hillside Stalls selling Devotional Paraphernalia',
        'Breathtaking Sunrise and Sunset Aerial Horizons',
        'Melodious Jai-Mata-Di Chants of Devout Ascending Pilgrims',
      ],
      note: 'The operational passenger ropeway is equipped with enclosed cabins and operates throughout the day (subject to wind and maintenance). For walking pilgrims, the staircase features covered sections, water points, and handrails. Comfortable walking shoes are advised.',
    },
    {
      id: 'theme-alha-udal-sacred-trail',
      title: 'Alha–Udal Sacred Heritage Trail',
      icon: 'compass',
      image: a('theme-alha-udal-sacred-trail'),
      sights: [
        'Historic Alha Dev Akhara in the Forest Valley',
        'Sacred Alha Talab Natural Water Reservoir',
        'Ancient Natural Caverns & Hillside Hermitages',
        'Traditional Bundelkhandi Ballad & Folklore Recitals',
        'Forested Scenic Trails around the Base of Trikuta Hill',
      ],
      note: 'The Alha Akhara is located approximately 2 km behind Trikuta Hill along a paved countryside road. A visit provides rich cultural context into the regional Bundeli and Bagheli warrior epics passed down across eight centuries of oral tradition.',
    },
    {
      id: 'theme-maihar-classical-music-heritage',
      title: 'Maihar Classical Music & Cultural Heritage',
      icon: 'landmark',
      image: a('theme-maihar-classical-music-heritage'),
      sights: [
        'Madina Bhavan Memorial & Ustad Allauddin Khan Sanctuary',
        'Historical Instruments, Sarod Archives & Rare Photos',
        'Maihar Band Rehearsal Hall & Unique Orchestral Roots',
        'Centuries-Old Banyan Tree under which Maestri Practiced',
        'ASI Golamath 10th-Century Sandstone Temple Heritage Walk',
      ],
      note: 'Madina Bhavan welcomes respectful music enthusiasts and cultural researchers. Prior coordination through our travel desk ensures informative local guidance highlighting the historic genesis of the world-famous Maihar Gharana.',
    },
  ],
  seasons: [
    {
      name: 'Pleasant Winter Pilgrimage',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'The premier travel and pilgrimage season. Refreshing, crisp days (12°C–26°C) and cool evenings provide ideal conditions for ascending Trikuta Hill, exploring heritage sites, and taking panoramic photographs without heat fatigue.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Navratri Festive Grandeur',
      months: 'Mar/Apr & Sep/Oct',
      icon: 'calendar',
      description:
        'Chaitra and Sharad Navratri represent the spiritual zenith of Maihar. Hundreds of thousands of devotees assemble for elaborate ceremonies, colorful melas, and round-the-clock darshan. High crowd density requires advance planning for B2B itineraries.',
      tag: 'Navratri High Devotion',
      theme: 'gold',
    },
    {
      name: 'Summer Devotion',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Warm to hot dry weather (28°C–42°C). The passenger ropeway operates smoothly and provides quick hilltop access. Darshan is best scheduled during the cooler dawn hours (5:00 AM – 8:30 AM) or pleasant post-sunset aarti.',
      tag: 'Morning & Dusk Darshan',
      theme: 'gold',
    },
    {
      name: 'Monsoon Greenery',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Regular monsoon rains transform the rugged Vindhyan foothills and Trikuta Hill into a verdant emerald landscape. Passing rain mists around the temple shikhara create a mystical backdrop. Ropeway remains operational except during high winds.',
      tag: 'Verdant Hill Vistas',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Khajuraho Airport (HJR, approx. 135 km / 3 hrs drive) and Jabalpur Airport (JLR, approx. 160 km / 3.5 hrs drive) are the primary air gateways, offering direct flights to New Delhi, Mumbai, Hyderabad, and Indore.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Maihar Railway Station (MYR) is an A-grade mainline railway station situated just 3 km from the temple base, directly served by major express trains on the Mumbai–Jabalpur–Howrah route. Satna Junction (STA, approx. 40 km / 45 mins) and Katni Junction (KTE, approx. 65 km / 1 hr 15 mins) provide extensive nationwide connections.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Paved, smooth 4-lane national highways (NH-30) link Maihar seamlessly to Satna (40 km), Katni (65 km), Bandhavgarh National Park (130 km), Khajuraho (135 km), Chitrakoot (115 km), and Jabalpur (160 km).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans and SUVs provide door-to-door transit between railway stations, hotels, and the ropeway base station. Clean local battery e-rickshaws and auto-rickshaws are abundant throughout town.',
    },
  ],
  cta: {
    heading: 'Curate a Revered Pilgrimage & Cultural Journey to Maihar',
    description:
      'Partner with our Central India destination specialists for seamless hilltop ropeway coordination, certified heritage guides, clean vegetarian hotel bookings, and tailored circuits linking Maihar with Chitrakoot, Bandhavgarh, and Khajuraho.',
  },
};
