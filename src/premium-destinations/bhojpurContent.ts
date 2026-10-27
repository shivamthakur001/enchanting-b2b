import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/bhojpur/${name}.webp`;

export const bhojpurContent: DestinationDetailContent = {
  id: 'bhojpur',
  themeLabel: 'Spirituality',
  heroEyebrow: 'PARAMARA ARCHITECTURAL WONDER · BETWA RIVER',
  title: 'Bhojpur',
  subtitle: 'An Unfinished Temple. An Eternal Devotion.',
  heroImage: a('bhojpur-hero'),
  ctaBackgroundImage: a('bhojpur-hero'),
  tags: [
    'Raja Bhoj Paramara Monument',
    'Colossal Single-Stone Shiva Lingam',
    'Medieval Engineering & Stone Ramp',
    'UNESCO Tentative List Landmark',
    'Betwa River Heritage Landscape',
  ],
  quickFacts: [
    { label: 'Region', value: 'Raisen District, Central MP (28 km from Bhopal)', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Bhojeshwar Mahadev | Paramara Masterpiece', icon: 'temple' },
    { label: 'Ideal Stay', value: 'Half-Day Excursion (or Full-Day Bhopal Circuit)', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Cool Heritage Touring)', icon: 'sun' },
    { label: 'Best For', value: 'Bhojeshwar Temple · Colossal Lingam · Bhimbetka Link', icon: 'heart' },
  ],
  overview: {
    heading: 'Paramara Grandeur, Monumental Scale, and Ancient Engineering',
    description:
      'Rising with commanding majesty above the rocky sandstone banks of the sacred Betwa River, Bhojpur is celebrated for the extraordinary 11th-century Bhojeshwar Mahadev Temple. Conceived by the visionary polymath Paramara ruler Raja Bhoj of Dhar (reigned c. 1010–1055 CE), this monument houses one of the largest single-stone Shiva lingams in the world, carved from a single polished block of sandstone measuring over 7.5 feet in height, set upon an immense 20-foot tiered square yoni-patta. Though left mysteriously unfinished, the temple stands as an outdoor museum of medieval Indian civil engineering. The colossal stone blocks, engraved architectural line drawings etched directly into the surrounding quarry bedrock, and the massive earthen ramp behind the structure demonstrate the audacious logistics used to hoist stones weighing up to 70 tonnes without modern machinery. Currently inscribed on the UNESCO World Heritage Tentative List under "Monuments of Bhojpur", this ASI-protected monument is an indispensable pilgrimage and architectural stop seamlessly linked to Bhopal and the prehistoric rock shelters of Bhimbetka.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Architecture Connoisseurs, Civil Engineering Historians, Devout Shaivite Pilgrims, Heritage Travelers, and Day Excursions from Bhopal',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Standing before the 115-ft Temple Profile, Colossal Lingam Darshan, Deciphering Medieval Blueprint Quarry Rock Etchings & 11th-Century Construction Ramps',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: 'Half-Day Excursion (2–3 hours on-site) or full-day Golden Central MP heritage circuit combining Bhojpur with UNESCO World Heritage Bhimbetka and Bhopal',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Outstanding addition to Bhopal-based itineraries. Smooth 45-minute highway drive, ASI ticketing and protection, clean pathways, and certified heritage guides',
      },
    ],
  },
  highlights: [
    {
      id: 'bhojpur-bhojeshwar-mahadev-temple',
      name: 'Bhojeshwar Mahadev Temple',
      category: '11th-Century Paramara Stone Monument',
      description:
        'The monumental 11th-century sandstone temple perched atop a rocky hillock above the Betwa River. Designed on a grand square plan with exterior dimensions exceeding 66 feet on each side, the structure features soaring walls, a richly ornamented corbelled interior dome, and an imposing entrance gateway framing the inner sanctum.',
      image: a('bhojpur-bhojeshwar-mahadev-temple'),
    },
    {
      id: 'bhojpur-monumental-shiva-lingam',
      name: 'Monumental Shiva Lingam & Sanctum',
      category: 'Colossal Monolithic Stone Sanctum',
      description:
        'One of the largest and most awe-inspiring monolithic Shiva lingams ever carved, towering over 7.5 feet high and 17.8 feet in circumference. Carved from fine-grained golden sandstone, it is enshrined upon an immense 20-foot square tiered limestone base (yoni-patta), reached by modern ASI visitor stairs for close devotional viewing.',
      image: a('bhojpur-monumental-shiva-lingam'),
    },
    {
      id: 'bhojpur-monumental-pillars-carvings',
      name: 'Monumental Pillars & Temple Carvings',
      category: 'Massive Load-Bearing Monolithic Columns',
      description:
        'Four colossal monolithic pillars over 40 feet tall support the massive corbelled ceiling beams inside the sanctum. Tapering gracefully with octagonal and round carved segments, they showcase delicate floral bands, celestial musicians, and sculpted depictions of river goddesses Ganga and Yamuna adorning the temple threshold.',
      image: a('bhojpur-monumental-pillars-carvings'),
    },
    {
      id: 'bhojpur-unfinished-architecture-ramps',
      name: 'Unfinished Temple Architecture & Historic Construction Features',
      category: 'Medieval Engineering & Quarry Blueprint Heritage',
      description:
        'Behind the temple extends a monumental earthen and stone construction ramp, preserved intact, demonstrating how 11th-century masons hauled massive stone lintels weighing up to 70 tonnes onto the superstructure. Surrounding sandstone outcrops feature unique incised blueprints and elevation drawings carved directly into the rock.',
      image: a('bhojpur-unfinished-architecture-ramps'),
    },
    {
      id: 'bhojpur-ancient-dam-remains',
      name: 'Ancient Bhojpur Dam Remains',
      category: 'Historic Cyclopean Civil Engineering',
      description:
        'Remnants of the monumental 11th-century stone dams constructed under Raja Bhoj to divert the Betwa River and create an immense 250-square-mile artificial lake (Bhojtal). The colossal dry-stone masonry embankments demonstrate the sophisticated water management and hydraulic engineering of the Paramara dynasty.',
      image: a('bhojpur-ancient-dam-remains'),
    },
    {
      id: 'bhojpur-historic-jain-shrine',
      name: 'Nearby Historic Jain Shrine / Sacred Landscape',
      category: '11th-Century Contiguous Heritage Sanctuary',
      description:
        'Located approximately 1 km from the Bhojeshwar temple within the same sacred landscape, this ancient enclosure enshrines a colossal 20-foot standing sculpture of Jain Tirthankara Shantinatha, flanked by Parshvanatha and Suparshvanatha, bearing 11th-century inscriptions contemporary with Raja Bhoj.',
      image: a('bhojpur-historic-jain-shrine'),
    },
  ],
  themes: [
    {
      id: 'theme-bhojeshwar-mahadev-darshan',
      title: 'Bhojeshwar Mahadev Darshan',
      icon: 'temple',
      image: a('theme-bhojeshwar-mahadev-darshan'),
      sights: [
        'Venerated Monolithic Shiva Lingam & Tiered Platform',
        'Daily Morning & Evening Shaivite Devotional Prayers',
        'Maha Shivratri Annual Pilgrimage Gathering',
        'River Ganga & Yamuna Threshold Iconography',
        'Sacred Betwa River Consecrated Waters Below',
      ],
      note: 'The Bhojeshwar temple remains an active place of Shaivite worship under ASI custody. Modest attire is required; visitors remove footwear before ascending the entrance plinth into the sanctum. Maha Shivratri witnesses large pilgrim congregations.',
    },
    {
      id: 'theme-raja-bhoj-architectural-interpretation',
      title: 'Raja Bhoj Architectural Interpretation',
      icon: 'landmark',
      image: a('theme-raja-bhoj-architectural-interpretation'),
      sights: [
        'Analysis of Samarangana Sutradhara Architectural Principles',
        'Corbelled Dome Geometry and Massive Bracket Figures',
        'Unfinished Shikhara Roof & Structural Mysteries',
        'Quarry Floor Line Drawings & Elevation Blueprints',
        'Masons\' Marks & 11th-Century Tool Chisel Signatures',
      ],
      note: 'Bhojpur is widely considered by architectural historians as one of the most critical open-air laboratories of Indian temple architecture. Certified guides provide illuminating explanations of why construction halted and how medieval master masons designed complex stone joints.',
    },
    {
      id: 'theme-ancient-engineering-betwa-landscape',
      title: 'Ancient Engineering & Betwa Landscape',
      icon: 'compass',
      image: a('theme-ancient-engineering-betwa-landscape'),
      sights: [
        'Earthen Incline Ramp for Hauling 70-Tonne Stone Slabs',
        'Medieval Sandstone Extraction Pits & Quarry Scars',
        'Historic Cyclopean Dam Embankments on the Betwa',
        'Scenic Betwa River Bend & Rocky Sandstone Escarpment',
        'Panoramic Views of the Fertile Malwa-Bhopal Countryside',
      ],
      note: 'Exploring the earthen ramp and bedrock carvings involves walking on exposed rocky terrain around the temple perimeter. Flat walking shoes are advised. Fencing protects delicate line engravings on the quarry floor.',
    },
    {
      id: 'theme-bhojpur-bhimbetka-bhopal-circuit',
      title: 'Bhojpur–Bhimbetka–Bhopal Heritage Circuit',
      icon: 'mountain',
      image: a('theme-bhojpur-bhimbetka-bhopal-circuit'),
      sights: [
        'Bhojpur 11th-Century Paramara Monument in Morning Light',
        'Bhimbetka UNESCO World Heritage Cave Art (30 km South)',
        'Scenic Drives through the Ratapani Forest Wildlife Corridor',
        'Tribal Museum & State Museum Heritage in Bhopal',
        'Sunset Promenades along Bhopal’s Upper Lake (Bada Talab)',
      ],
      note: 'This day-circuit is one of the highest-rated cultural itineraries in Central India. Departing Bhopal around 8:30 AM allows 1.5 hours at Bhojpur, continuing to Bhimbetka for lunch and rock shelter exploration, returning to Bhopal by late afternoon.',
    },
  ],
  seasons: [
    {
      name: 'Mild Winter Touring',
      months: 'Oct – Mar',
      icon: 'snowflake',
      description:
        'The optimal period for visiting Bhojpur. Crisp, clear sunny weather with daytime temperatures between 12°C and 26°C, providing comfortable conditions for exploring the unshaded temple plinth, quarry drawings, and earthen ramp.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Spring & Maha Shivratri',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Pleasant spring weather coincides with the grand annual Maha Shivratri mela, when tens of thousands of devotees gather at Bhojpur for sacred darshan, vibrant folk bazaars, and devotional music on the Betwa riverbanks.',
      tag: 'Festive Mahashivratri',
      theme: 'gold',
    },
    {
      name: 'Summer Warmth',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Dry and hot weather (28°C to 42°C). Outdoor stone surfaces can become intensely warm under direct sunlight; visits should be scheduled during early morning hours (7:00 AM – 9:30 AM) or late afternoon near sunset.',
      tag: 'Early Morning Darshan',
      theme: 'gold',
    },
    {
      name: 'Monsoon Awakening',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Monsoon rains revitalize the Betwa River and cloak the surrounding sandstone hills in vibrant green. The temple’s imposing silhouette against dramatic monsoon skies is a favorite of photographers. Non-slip shoes advised on damp stones.',
      tag: 'Lush River Landscape',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport in Bhopal (BHO, approx. 35 km / 50 mins drive) is the closest commercial airport, offering multiple daily direct flights to New Delhi, Mumbai, Bengaluru, Hyderabad, and Ahmedabad.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Rani Kamlapati Railway Station (RKMP, approx. 25 km / 35 mins drive) and Bhopal Junction (BPL, approx. 28 km) are world-class railway hubs served by premier Vande Bharat, Shatabdi, and Rajdhani express trains connecting major Indian metros.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Smooth, paved 4-lane highways connect Bhojpur effortlessly to Bhopal city center (28 km), the UNESCO World Heritage site of Bhimbetka (30 km), Sanchi (75 km), and Indore (210 km via 4-lane expressway).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans, SUVs, and luxury tempo travellers operate seamlessly from Bhopal hotels. The monument complex is compact and pedestrian-friendly, with paved pathways connecting parking, ticketing, and the sanctum.',
    },
  ],
  cta: {
    heading: 'Integrate Bhojpur into Your Central India Heritage Circuits',
    description:
      'Partner with our B2B destination team for accredited ASI heritage guides, synchronized Bhimbetka–Bhopal day itineraries, premium transport logistics, and seamless client coordination across Madhya Pradesh.',
  },
};
