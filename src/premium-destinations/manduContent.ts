import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/mandu/${name}.webp`;

export const manduContent: DestinationDetailContent = {
  id: 'mandu',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Mandu',
  subtitle: 'Where Royal Romance Meets Timeless Architecture.',
  heroImage: a('mandu-hero'),
  tags: [
    'Malwa Sultanate',
    'Jahaz Mahal',
    'Rani Roopmati',
    'Baz Bahadur',
    'Indo-Islamic Architecture',
  ],
  quickFacts: [
    { label: 'Region', value: 'Dhar District, Malwa', icon: 'pin' },
    { label: 'Heritage', value: 'Malwa Sultanate Architecture', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Jul – Mar (Monsoon Highlight)', icon: 'sun' },
    { label: 'Character', value: 'Palaces, Monuments & Valleys', icon: 'temple' },
  ],
  overview: {
    heading: 'The City of Joy and Immortal Legends',
    description:
      'Perched dramatically upon a rugged plateau of the Vindhyan ranges at an elevation of 600 metres, Mandu—historically christened Shadiabad, or "The City of Joy"—is one of India’s most poetic medieval fortress citadels. Embraced by deep ravines, scenic reservoirs, and defensive stone ramparts stretching over 37 kilometres, Mandu flourished as the glamorous capital of the Malwa Sultanate in the 15th and 16th centuries. Here, Afghan stone masonry evolved into an expressive architectural language of immense pointed arches, floating pavilions, and domed water palaces, forever entwined with the legendary romance of Sultan Baz Bahadur and the musical queen Rani Roopmati.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Travellers, Architecture Connoisseurs, Monsoon Seekers, Romantic Couples & Photography FITs',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Floating Ship Palace, Sloping Fortress Halls, Cliffside Vistas over Narmada & Misty Monsoon Valleys',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1–2 Nights (or High-Value Malwa Circuit with Indore, Maheshwar & Ujjain)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'High-Converting Monsoon & Winter Tours, Boutique Heritage Stays & Inbound Architectural Circuits',
      },
    ],
  },
  highlights: [
    {
      id: 'mandu-jahaz-mahal',
      name: 'Jahaz Mahal',
      category: 'Water Palace & Royal Enclave',
      description:
        'A magnificent 15th-century two-storey palace built between the twin artificial lakes Kapur Talao and Munj Talao, resembling a colossal ship anchored in serene waters.',
      image: a('mandu-jahaz-mahal'),
    },
    {
      id: 'mandu-hindola-mahal',
      name: 'Hindola Mahal',
      category: 'Sultanate Royal Audience Hall',
      description:
        'Famed as the "Swing Palace" due to its 77-degree sloping exterior buttresses, featuring a soaring vaulted transverse arch hall exemplary of robust Malwa Afghan architecture.',
      image: a('mandu-hindola-mahal'),
    },
    {
      id: 'mandu-roopmati-pavilion',
      name: 'Rani Roopmati Pavilion',
      category: 'Hilltop Romance & Viewpoint',
      description:
        'Perched dramatically on the southern cliff edge of the plateau, where Queen Roopmati gazed across the Nimar plains to pay homage to the sacred, distant Narmada River.',
      image: a('mandu-roopmati-pavilion'),
    },
    {
      id: 'mandu-baz-bahadur',
      name: 'Baz Bahadur Palace',
      category: 'Royal Palace & Music Court',
      description:
        'The early 16th-century palace of the last independent Sultan of Malwa, featuring spacious open courtyards, ringed colonnades, garden pavilions, and acoustic singing terraces.',
      image: a('mandu-baz-bahadur'),
    },
    {
      id: 'mandu-hoshang-shah',
      name: 'Hoshang Shah’s Tomb',
      category: 'Afghan Marble Mausoleum',
      description:
        'India’s earliest monumental marble tomb, celebrated for its refined Afghan dome, lattice marble jali work, and historic role as an inspiration for the Taj Mahal.',
      image: a('mandu-hoshang-shah'),
    },
    {
      id: 'mandu-jami-masjid',
      name: 'Jami Masjid',
      category: 'Monumental Medieval Mosque',
      description:
        'A colossal 15th-century congregational mosque modelled after the Great Umayyad Mosque of Damascus, distinguished by an expansive courtyard, arched colonnades, and three grand domes.',
      image: a('mandu-jami-masjid'),
    },
  ],
  themes: [
    {
      id: 'royal-enclave',
      title: 'Royal Enclave Heritage Walk',
      icon: 'landmark',
      image: a('theme-royal-enclave'),
      sights: [
        'Jahaz Mahal (Ship Palace)',
        'Hindola Mahal (Swinging Hall)',
        'Champa Baoli & Hammam Vaults',
        'Jal Mahal & Taweli Mahal',
      ],
      note: 'A comprehensive guided walking tour through the royal heart of Mandu, exploring clever water-cooling systems, subterranean baths, pleasure pavilions, and palace reservoirs.',
    },
    {
      id: 'roopmati-baz-bahadur',
      title: 'Roopmati & Baz Bahadur Heritage Trail',
      icon: 'sparkles',
      image: a('theme-roopmati-baz-bahadur'),
      sights: [
        'Rani Roopmati Pavilion Viewpoint',
        'Baz Bahadur Palace Courtyard',
        'Rewa Kund Sacred Reservoir',
        'Cliffside Nimar Valley Terraces',
      ],
      note: 'Trace the poetic chronicle of Sultan Baz Bahadur and Queen Roopmati, exploring romantic cliffside pavilions, acoustic singing chambers, and sweeping panoramas of the Narmada basin.',
    },
    {
      id: 'afghan-architecture',
      title: 'Afghan Architecture & Monument Discovery',
      icon: 'temple',
      image: a('theme-afghan-architecture'),
      sights: [
        'Hoshang Shah’s Marble Tomb',
        'Jami Masjid Great Courtyard',
        'Ashrafi Mahal & Victory Tower Base',
        'Darya Khan’s Tomb Complex',
      ],
      note: 'Examine the bold masonry and structural innovations of the Malwa Sultanate, from majestic pointed arches and acoustic domes to intricate marble screens that inspired imperial Mughal masters.',
    },
    {
      id: 'monsoon-heritage',
      title: 'Monsoon Landscapes & Heritage Photography',
      icon: 'compass',
      image: a('theme-monsoon-heritage'),
      sights: [
        'Munj Talao & Kapur Talao Reflections',
        'Echo Point Ravine Acoustics',
        'Tarapur Gate & Fort Ramparts',
        'Century-Old African Baobab Trees',
      ],
      note: 'Capture Mandu at its most evocative when swirling monsoon mists envelope centuries-old stone gateways, waterfalls cascade into emerald gorges, and moss clings to medieval dome contours.',
    },
  ],
  seasons: [
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Mandu’s signature travel season. Rains carpet the plateau in vibrant emerald greens, fill ancient stepwells and lakes, and drape palace ruins in romantic swirling mists. Temperatures range between 22°C and 30°C.',
      tag: 'Signature Season',
      theme: 'green',
    },
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp, sunny days and cool pleasant evenings with temperatures ranging between 10°C and 25°C. Perfect for walking the expansive fort plateau, cycling between monument complexes, and unhurried photography.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Warm, dry days with daytime temperatures from 16°C to 30°C. Blooming flame-of-the-forest (Palash) trees add brilliant orange splashes across the Malwa plateau, offering excellent photography light.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Daytime temperatures range from 28°C to 42°C with dry Malwa heat. Early morning monument visits are highly advised, complemented by leisurely afternoons and attractive off-season hotel contracting rates.',
      tag: 'Warm Season',
      theme: 'peach',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilya Bai Holkar Airport, Indore (IDR, ~95 km / 2–2.5 hrs) is the primary air gateway, offering daily non-stop domestic flights connecting Delhi, Mumbai, Bengaluru, Hyderabad, and major hubs.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Indore Junction (95 km) and Ratlam Junction (125 km) on the Western Railway mainline provide premier rail access, served by multiple superfast, Vande Bharat, and Rajdhani express trains.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Excellent state highway connectivity: Indore (95 km via Dhar / Manpur), Dhar (35 km), Maheshwar (45 km), Ujjain (150 km), and Omkareshwar (110 km), making Mandu a key anchor on Malwa circuits.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured cars are recommended to navigate the expansive 45 sq km plateau between monument clusters; walking and cycling are delightful within individual heritage enclaves.',
    },
  ],
  cta: {
    heading: 'Plan a Mandu Heritage Journey for Your Clients',
    description:
      'Weave together floating water palaces, cliffside romantic pavilions, robust Afghan architecture, and magical monsoon landscapes in a tailor-made Central India itinerary.',
  },
  story: {
    heading: 'The Fortress of Romance and the City of Joy',
    paragraphs: [
      'Standing high above the Malwa plateau on a colossal tableland isolated by plunging ravines, Mandu has captivated travellers, poets, and conquerors for over a thousand years. Here, the Sultans of Malwa celebrated a unique court culture where pleasure, architecture, and water engineering merged into an astonishing artistic flowering.',
      'From Jahaz Mahal floating between calm lakes like an anchored galleon to the windswept arches of Roopmati’s pavilion watching over the Narmada plains, Mandu remains an enchanted sanctuary where medieval stone structures continue to whisper tales of royal devotion and artistic daring.',
    ],
    image: a('mandu-hero'),
    imageAlt: 'Jahaz Mahal floating between Munj Talao and Kapur Talao in Mandu',
    quote: 'Where medieval Afghan stone rises above emerald valleys and immortal love songs echo through misty palace arches.',
  },
  travellers: [
    { icon: 'users', name: 'Monsoon Tour Groups' },
    { icon: 'landmark', name: 'Architectural Historians' },
    { icon: 'graduation', name: 'Art & Heritage Scholars' },
    { icon: 'compass', name: 'Landscape Photographers' },
    { icon: 'footprints', name: 'Couples & Romantic FITs' },
    { icon: 'heart', name: 'Malwa Circuit Explorers' },
  ],
  fullGuide: [
    {
      title: 'The Royal Enclave Complex',
      points: [
        'Jahaz Mahal: iconic two-storey 15th-century pleasure palace built by Ghiyas-ud-din Khilji between two artificial lakes.',
        'Hindola Mahal: T-shaped audience hall with sloping walls resembling a swing, featuring majestic transverse stone arches.',
        'Champa Baoli: subterranean stepwell featuring cool subterranean rooms (Tahasukhana) designed for hot Malwa summers.',
        'Jal Mahal: water retreat palace built inside the reservoir with steps leading down to the water edge.',
      ],
    },
    {
      title: 'Roopmati & Baz Bahadur Group',
      points: [
        'Rani Roopmati Pavilion: military observation post turned romantic terrace commanding 300-metre drops to the Nimar plains.',
        'Baz Bahadur Palace: 16th-century palace blending Rajasthani and Mughal architectural motifs around a central courtyard.',
        'Rewa Kund: sacred masonry tank built by Baz Bahadur to supply holy Narmada water to Roopmati’s palace.',
      ],
    },
    {
      title: 'Village & Monumental Group',
      points: [
        'Hoshang Shah’s Tomb: magnificent white marble mausoleum with porticoed courtyard, completed in the mid-15th century.',
        'Jami Masjid: grand Friday mosque with a massive central courtyard enclosed by colonnades of 158 small domes.',
        'Ashrafi Mahal: madrasa and victory tower built by Mahmud Khilji across the square from Jami Masjid.',
      ],
    },
  ],
};
