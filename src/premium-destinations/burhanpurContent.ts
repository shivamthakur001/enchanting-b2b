import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/burhanpur/${name}.webp`;

export const burhanpurContent: DestinationDetailContent = {
  id: 'burhanpur',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Burhanpur',
  subtitle: 'Where Mughal Grandeur Meets the Banks of the Tapti.',
  heroImage: a('burhanpur-hero'),
  tags: [
    'Farooqi Dynasty',
    'Mughal Legacy',
    'Shahi Qila',
    'Asirgarh Fort',
    'Kundi Bhandara',
  ],
  quickFacts: [
    { label: 'Region', value: 'Burhanpur District, Nimar', icon: 'pin' },
    { label: 'Heritage', value: 'Farooqi & Mughal Legacy', icon: 'landmark' },
    { label: 'Ideal Stay', value: 'Suggested 1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Forts, Palaces, Tombs & Tapti River', icon: 'temple' },
  ],
  overview: {
    heading: 'The Imperial Threshold to the Deccan',
    description:
      'Perched along the meandering northern bank of the sacred Tapti River, Burhanpur holds a storied place in Indian history as the celebrated "Dakkan Ka Darwaza", or Gateway to the Deccan. Founded in 1400 CE by Nasir Khan of the Farooqi dynasty and named in honor of the Sufi saint Burhanuddin Gharib, the city rose to imperial grandeur under the Great Mughals. Serving as the strategic viceregal capital for Akbar, Jahangir, and Shah Jahan, Burhanpur witnessed court pageantry, military campaigns, and poignant royal romance. Today, the town preserves an astonishing density of living heritage: riverside palaces with Persian frescoed baths, colossal medieval mosques with Sanskrit-Arabic inscriptions, ingenious subterranean water-engineering networks, and the formidable Satpura bastion of Asirgarh.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Mughal History & Architecture Scholars, Offbeat Cultural Travellers & Textile Enthusiasts',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Deccan Gateway Fortress, Imperial Persian Baths, Underground Qanats & Tapti Ghat Sunset Panoramas',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: 'Suggested 1–2 Nights (or Seamless Extension from Indore, Maheshwar & Khandwa)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'High-Value Specialized Heritage Circuit, Authentic Uncrowded Monuments & Trade Exclusivity',
      },
    ],
  },
  highlights: [
    {
      id: 'burhanpur-shahi-qila',
      name: 'Shahi Qila & Shahi Hamam',
      category: 'Riverside Royal Palace',
      description:
        'A historic royal palace complex built by the Farooqis and expanded by Shah Jahan overlooking the Tapti River, housing the famous Shahi Hamam with intricate Persian fresco ceiling murals.',
      image: a('burhanpur-shahi-qila'),
    },
    {
      id: 'burhanpur-asirgarh-fort',
      name: 'Asirgarh Fort',
      category: 'Satpura Hill Fortress',
      description:
        'Known as the "Key to the Deccan", this colossal fortress crowns an isolated 260-metre-high Satpura peak, featuring layered ramparts, ancient reservoirs, and a hilltop Shiva shrine.',
      image: a('burhanpur-asirgarh-fort'),
    },
    {
      id: 'burhanpur-jama-masjid',
      name: 'Jama Masjid',
      category: 'Farooqi Congregational Mosque',
      description:
        'Completed in 1590 CE by Raja Ali Khan, this monumental black-stone mosque features a grand open courtyard, symmetrical multi-arched facades, and rare bilingual Arabic and Sanskrit stone inscriptions.',
      image: a('burhanpur-jama-masjid'),
    },
    {
      id: 'burhanpur-kundi-bhandara',
      name: 'Kundi Bhandara',
      category: 'Medieval Underground Aqueduct',
      description:
        'A remarkable 17th-century subterranean qanat water network engineered under Abdur Rahim Khan-i-Khanan, utilizing gravity to transport Satpura spring water through underground tunnels and vertical shafts.',
      image: a('burhanpur-kundi-bhandara'),
    },
    {
      id: 'burhanpur-black-taj',
      name: 'Shah Nawaz Khan’s Tomb (Black Taj)',
      category: 'Mughal Basalt Mausoleum',
      description:
        'A handsome hexagonal mausoleum built from local black basalt stone honoring the Mughal general Shah Nawaz Khan, featuring arched niches, floral carvings, and a landscaped garden setting.',
      image: a('burhanpur-black-taj'),
    },
    {
      id: 'burhanpur-ahukhana',
      name: 'Ahukhana',
      category: 'Mughal Garden & Pavilion',
      description:
        'A historic walled royal deer park and pavilion across the Tapti River where Empress Mumtaz Mahal was temporarily laid to rest for six months in 1631 before being escorted to Agra.',
      image: a('burhanpur-ahukhana'),
    },
  ],
  themes: [
    {
      id: 'mughal-heritage',
      title: 'Mughal Royal Heritage Walk',
      icon: 'landmark',
      image: a('theme-mughal-heritage'),
      sights: [
        'Shahi Qila Ramparts',
        'Shahi Hamam Fresco Chambers',
        'Zenana Mahal Terraces',
        'Tapti Riverfront Ghats',
      ],
      note: 'A guided journey through Burhanpur’s imperial palace complex, discovering royal residential apartments, natural Persian mineral frescoes, and the architectural patronage of Shah Jahan.',
    },
    {
      id: 'asirgarh-trail',
      title: 'Asirgarh Fort & Satpura Heritage Trail',
      icon: 'compass',
      image: a('theme-asirgarh-trail'),
      sights: [
        'Asirgarh Lower Fort Gates',
        'Kamargarh & Malaygarh Ramparts',
        'Ancient Hilltop Gupteshwar Temple',
        'Satpura Range Viewpoints',
      ],
      note: 'Explore the legendary hilltop stronghold that guarded the imperial threshold between Northern India and the Deccan, marveling at formidable bastions, rock-cut reservoirs, and panoramic forest vistas.',
    },
    {
      id: 'water-engineering',
      title: 'Water Engineering & Mughal Monuments Trail',
      icon: 'sparkles',
      image: a('theme-water-engineering'),
      sights: [
        'Kundi Bhandara Surface Shafts',
        'Jama Masjid Bilingual Inscriptions',
        'Black Taj (Shah Nawaz Khan’s Tomb)',
        'Mughal Water Distribution Siphons',
      ],
      note: 'Examine the extraordinary civic infrastructure of 17th-century Burhanpur, from gravitational subterranean spring conduits to refined stone architecture and monumental congregational halls.',
    },
    {
      id: 'sacred-culture',
      title: 'Sacred Heritage & Living Culture Discovery',
      icon: 'temple',
      image: a('theme-sacred-culture'),
      sights: [
        'Gurudwara Badi Sangat',
        'Dargah-e-Hakimi Complex',
        'Traditional Handloom Weaving Units',
        'Historic City Spice Bazaars',
      ],
      note: 'Discover Burhanpur’s harmonious multi-faith spiritual traditions and living artisan culture, connecting with centuries-old Sikh history, Dawoodi Bohra pilgrimage sites, and local textile weavers.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp, pleasant days and cool dry evenings with temperatures ranging between 12°C and 28°C. The ideal season for climbing Asirgarh Fort, walking along the Tapti riverfront, and exploring old-city monuments.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Warm, dry days with clear sunny skies and temperatures between 18°C and 32°C. Excellent for unhurried morning monument visits, countryside excursions, and heritage photography in soft natural light.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'High daytime temperatures ranging from 28°C to 43°C across the Nimar valley. Suited for early morning fort exploration, shaded architectural tours, and attractive off-season hotel pricing.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Monsoon showers rejuvenate the Tapti River and carpet the surrounding Satpura hills in lush greenery. The scenery around Asirgarh Fort becomes especially dramatic with mist-draped bastions.',
      tag: 'Scenic & Lush',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilya Bai Holkar Airport, Indore (IDR, ~190 km / 4–4.5 hrs) is the primary air gateway with extensive non-stop domestic connectivity; Jalgaon Airport (JLG, ~90 km) offers regional connections.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Burhanpur Railway Station (BAU) is a key mainline station on the Central Railway Mumbai–Delhi / Mumbai–Kolkata route; Bhusawal Junction (70 km) provides extensive nationwide railway connections.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well-connected via smooth state highways to Indore (190 km via Khandwa), Khandwa (70 km), Bhusawal (70 km), Jalgaon (90 km), and Maheshwar (170 km), forming an organic Malwa–Nimar extension.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured cars for city monuments and the 20 km excursion to Asirgarh Fort; walking through the compact old-city bazaars, river ghats, and artisan workshops.',
    },
  ],
  cta: {
    heading: 'Plan a Burhanpur Heritage Journey for Your Clients',
    description:
      'Connect your travellers with the imperial Gateway to the Deccan, medieval water engineering, royal Mughal palaces, and the scenic Satpura heights of Asirgarh in a tailored Central India itinerary.',
  },
  story: {
    heading: 'The Imperial Gate to the Deccan on the River Tapti',
    paragraphs: [
      'Guarding the strategic corridor where the Satpura range opens southward into the Deccan plateau, Burhanpur was once one of the grandest urban centers of the Mughal Empire. Generals, princes, and emperors camped along the banks of the Tapti, transforming the frontier outpost into a lavish provincial capital of gardens, hammams, and mosques.',
      'It was here in Burhanpur that Shah Jahan lived while governing the Deccan, and here in the Ahukhana gardens across the river that his beloved empress Mumtaz Mahal was first entombed before her final journey to Agra. Today, the town remains an unhurried treasure house of Indo-Islamic art, timeless water channels, and living trade traditions.',
    ],
    image: a('burhanpur-hero'),
    imageAlt: 'Panoramic view of Shahi Qila and the Tapti River in Burhanpur',
    quote: 'Where Mughal emperors governed the south, and medieval water channels and riverside palaces keep watch over the Tapti.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Tour Groups' },
    { icon: 'landmark', name: 'Mughal History Connoisseurs' },
    { icon: 'graduation', name: 'Architectural Historians' },
    { icon: 'compass', name: 'Heritage Photographers' },
    { icon: 'footprints', name: 'Offbeat Circuit FITs' },
    { icon: 'heart', name: 'Special-Interest Explorers' },
  ],
  fullGuide: [
    {
      title: 'Mughal Palaces & Riverside Heritage',
      points: [
        'Shahi Qila: riverside palace complex with remnants of multi-storeyed royal apartments overlooking the Tapti.',
        'Shahi Hamam: royal bathhouse with ornate domed ceilings decorated in exquisite Persian floral paintings.',
        'Ahukhana: walled Mughal deer park and pavilion across the river where Mumtaz Mahal was temporarily laid to rest.',
        'Zenana Mahal: royal women’s apartments featuring carved stone brackets and river-facing jharokhas.',
      ],
    },
    {
      title: 'Asirgarh Fort & Satpura Stronghold',
      points: [
        'Strategic Bastion: 260-metre-high natural fortress commanding the historic pass between Northern India and the Deccan.',
        'Three-Tier Fortification: complex consisting of Asirgarh, Kamargarh, and Malaygarh with defensive bastions.',
        'Asha Devi & Gupteshwar Temple: ancient hilltop shrine steeped in Mahabharata folklore and medieval history.',
      ],
    },
    {
      title: 'Medieval Water Architecture & Mosques',
      points: [
        'Kundi Bhandara: sophisticated gravitational water network bringing Satpura spring water into the city through underground tunnels.',
        'Jama Masjid: monumental Farooqi mosque with symmetrical arches and bilingual Sanskrit-Arabic inscriptions.',
        'Black Taj: hexagonal black basalt tomb of Shah Nawaz Khan set inside a tranquil walled garden enclosure.',
      ],
    },
  ],
};
