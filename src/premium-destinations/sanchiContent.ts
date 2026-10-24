import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/sanchi/${name}.webp`;

export const sanchiContent: DestinationDetailContent = {
  id: 'sanchi',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Sanchi',
  subtitle: 'Where Ancient Wisdom Lives in Stone.',
  heroImage: a('sanchi-hero'),
  tags: [
    'UNESCO World Heritage',
    'Buddhist Stupas',
    'Mauryan Legacy',
    'Torana Sculpture',
    'Ancient Monasteries',
  ],
  quickFacts: [
    { label: 'Region', value: 'Raisen District, Vidisha', icon: 'pin' },
    { label: 'Heritage', value: 'UNESCO World Heritage', icon: 'landmark' },
    { label: 'Ideal Stay', value: 'Half-Day to 1 Night', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar', icon: 'sun' },
    { label: 'Character', value: 'Stupas & Ancient Art', icon: 'temple' },
  ],
  overview: {
    heading: 'The Sanctity of Ancient Stone',
    description:
      "Crowning a serene hilltop in the Betwa river basin, Sanchi preserves India's most complete and profound Buddhist architectural sanctuary. Founded by the Mauryan Emperor Ashoka in the 3rd century BCE and sanctified across subsequent Shunga, Satavahana, and Gupta epochs, this UNESCO World Heritage Site offers trade travellers an extraordinary encounter with the origins of monument design, narrative relief sculpture, and ancient contemplative landscapes.",
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Pilgrimage & Cultural Groups, Historians and Architecture Scholars',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Monumental Stupas, Carved Torana Gateways, Ancient Monastic Viharas and Sacred Solitude',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: 'Half-Day Excursion from Bhopal or 1N / 2D Relaxed Stay',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Cultural FITs, Inbound Buddhist Pilgrimage, Academic Tours & Central MP Circuits',
      },
    ],
  },
  highlights: [
    {
      id: 'sanchi-great-stupa',
      name: 'The Great Stupa (Stupa 1)',
      category: 'Buddhist Monument',
      description:
        'The crowning architectural masterpiece of Sanchi, featuring a massive hemispherical stone dome, elevated circumambulatory path, and crowning harmika.',
      image: a('sanchi-great-stupa'),
    },
    {
      id: 'sanchi-torana',
      name: 'The Four Torana Gateways',
      category: 'Sculptural Heritage',
      description:
        "Intricately carved ceremonial archways depicting Jataka tales, episodes from Buddha's life, celestial beings, and rich Mauryan and Satavahana symbolism.",
      image: a('sanchi-torana'),
    },
    {
      id: 'sanchi-stupa-2',
      name: 'Sanchi Stupa 2',
      category: 'Ancient Stupa',
      description:
        'Set on a lower western terrace, celebrated for its ancient stone vedika railing adorned with early Buddhist motifs, mythical animals, and floral medallions.',
      image: a('sanchi-stupa-2'),
    },
    {
      id: 'sanchi-stupa-3',
      name: 'Sanchi Stupa 3',
      category: 'Relic Monument',
      description:
        "Positioned near the Great Stupa, historically dedicated to enshrining the sacred relics of the Buddha's foremost disciples, Sariputta and Mahamoggallana.",
      image: a('sanchi-stupa-3'),
    },
    {
      id: 'sanchi-ashokan-pillar',
      name: 'Ashokan Pillar',
      category: 'Mauryan Legacy',
      description:
        'Erected in the 3rd century BCE beside the Southern Gateway, celebrated for its finely polished Chunar sandstone shaft and historic royal edicts.',
      image: a('sanchi-ashokan-pillar'),
    },
    {
      id: 'sanchi-gupta-temple',
      name: 'Gupta Temple 17',
      category: 'Ancient Architecture',
      description:
        "A pristine 5th-century CE flat-roofed stone temple with a pillared portico, revered as one of India's earliest prototypes of classical Hindu temple architecture.",
      image: a('sanchi-gupta-temple'),
    },
  ],
  themes: [
    {
      id: 'stupa-walk',
      title: 'Guided Great Stupa Heritage Walk',
      icon: 'temple',
      image: a('theme-stupa-walk'),
      sights: [
        'The Great Stupa (Stupa 1)',
        'Upper Pradakshinapatha',
        'Harmika & Chhatravali',
        'Relic Chambers',
      ],
      note: 'In-depth architectural exploration of Sanchi’s principal stupa with authorized heritage scholars, unlocking Buddhist cosmological symbolism and ancient stone engineering.',
    },
    {
      id: 'buddhist-art',
      title: 'Buddhist Art & Torana Interpretation',
      icon: 'landmark',
      image: a('theme-buddhist-art'),
      sights: [
        'Northern Gateway Friezes',
        'Eastern Torana Salabhanjika',
        'Southern Gateway Edicts',
        'Western Gateway Jatakas',
      ],
      note: 'Detailed aesthetic examination of early Indian stone sculpture, narrative reliefs, aniconic representations of the Buddha, and classical motifs on the four ceremonial gateways.',
    },
    {
      id: 'museum-monasteries',
      title: 'Archaeological Museum & Monastic Discovery',
      icon: 'graduation',
      image: a('theme-museum-monasteries'),
      sights: [
        'ASI Sanchi Archaeological Museum',
        'Monastery 51 Complex',
        'Temple 18 Chaitya Hall',
        'Ancient Monastic Cells',
      ],
      note: 'Contextual exploration of archaeological excavations at the ASI site museum, combined with a tranquil walking route through the hillside residential monasteries and stone meditation cells.',
    },
    {
      id: 'vidisha-udayagiri',
      title: 'Vidisha–Udayagiri Heritage Excursion',
      icon: 'footprints',
      image: a('theme-vidisha-udayagiri'),
      sights: [
        'Udayagiri Rock-Cut Caves (12 km)',
        'Varaha Relief Panel',
        'Heliodorus Pillar at Vidisha (10 km)',
        'Besnagar Archaeological Ruins',
      ],
      note: 'A rich regional heritage excursion beyond the Sanchi monument complex, connecting ancient Vidisha’s trade history with the monumental Gupta-era rock sanctuaries of Udayagiri.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp sunny days and pleasant morning breezes make winter the optimal season for exploring the open hilltop complex.',
      tag: 'Peak Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Clear skies and moderate temperatures, suitable for morning and late afternoon architectural photography across the stupas.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Warm central Indian temperatures; early morning visits and shaded museum tours are recommended for client itineraries.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Lush green hillside lawns contrast dramatically with rain-cleansed sandstone stupas; atmospheric and uncrowded.',
      tag: 'Atmospheric',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport in Bhopal (55 km) is the closest domestic airport, offering direct scheduled flights to Delhi, Mumbai, and major metros.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Sanchi has a local railway station for passenger trains; major junction connectivity is available at Vidisha (10 km) and Bhopal Junction (48 km).',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'A smooth four-lane highway connects Bhopal to Sanchi (approx. 1 hour drive); easy road access from Vidisha, Bhimbetka, and Gwalior.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Chauffeur-driven air-conditioned touring cars, pre-arranged heritage coaches, and walking access throughout the pedestrianized hill complex.',
    },
  ],
  cta: {
    heading: 'Plan a Sanchi Heritage Journey for Your Clients',
    description:
      'Immerse your travellers in the stillness of ancient stupas, Ashokan heritage, and world-renowned Buddhist art through curated Central India circuits.',
  },
  story: {
    heading: 'A Hilltop Sanctuary of Faith and Art',
    paragraphs: [
      'Overlooking the fertile plains of Raisen, the Buddhist complex at Sanchi stands as one of the most remarkable historical ensembles in Asia. Originating under Emperor Ashoka in the third century BCE, the hill was chosen not for a major urban center, but for quiet contemplative sanctity beside the bustling trade routes of ancient Vidisha.',
      'Over thirteen centuries of continuous devotion, dynasties added monumental sandstone stupas, grand stone railings, monolithic pillars, and four breathtaking gateways whose carvings remain unmatched in narrative beauty. Rediscovered in 1818 and preserved with meticulous care, Sanchi today offers an unhurried encounter with India’s ancient spiritual philosophy in living stone.',
    ],
    image: a('sanchi-hero'),
    imageAlt: 'The Great Stupa at Sanchi standing against clear sky',
    quote: 'Where early Buddhist art, royal Mauryan edicts and centuries of monastic calm endure in timeless sandstone.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Groups' },
    { icon: 'landmark', name: 'Heritage Travellers' },
    { icon: 'luggage', name: 'Buddhist Pilgrims' },
    { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'graduation', name: 'Academic Tours' },
    { icon: 'temple', name: 'Architecture Enthusiasts' },
  ],
  fullGuide: [
    {
      title: 'The Great Stupa and Gateways',
      points: [
        'Great Stupa (Stupa 1): massive hemispherical dome encasing Ashokan core with subsequent Shunga stone facing and balustrades.',
        'Four Toranas: erected around the 1st century BCE, facing the four cardinal directions with elaborate high-relief Jataka narrative carvings.',
        'Circumambulation Paths: upper and lower stone pradakshinapathas providing distinct perspectives of the monument and valley.',
      ],
    },
    {
      title: 'Secondary Stupas and Monastic Ruins',
      points: [
        'Stupa 2: located on a lower terrace, famous for its ancient vedika with some of the earliest stone carvings at the site.',
        'Stupa 3: celebrated for holding the sacred relics of Sariputta and Mahamoggallana, prominent disciples of Lord Buddha.',
        'Monasteries 45 & 51: expansive monastic foundations revealing courtyard arrangements, cells, and monastic administration.',
      ],
    },
    {
      title: 'Regional Circuit Extensions',
      points: [
        'Vidisha (10 km): historic trade capital, Heliodorus pillar and ancient Besnagar archaeological discoveries.',
        'Udayagiri Caves (12 km): rock-cut caves from the Gupta era featuring the celebrated monumental Varaha panel.',
        'Bhopal & Bhimbetka: easy combining with Bhopal’s lakes and museums, and the UNESCO prehistoric rock shelters of Bhimbetka.',
      ],
    },
  ],
};
