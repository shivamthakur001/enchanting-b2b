import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/bhopal/${name}.webp`;

export const bhopalContent: DestinationDetailContent = {
  id: 'bhopal',
  themeLabel: 'Heritage',
  heroEyebrow: 'HERITAGE DESTINATION · MADHYA PRADESH',
  title: 'Bhopal',
  subtitle: 'Where the Legacy of the Begums Meets the City of Lakes.',
  heroImage: a('bhopal-hero'),
  tags: [
    'Begums of Bhopal',
    'Taj-ul-Masajid',
    'Indo-European Palaces',
    'City of Lakes',
    'MP Tribal Museum',
  ],
  quickFacts: [
    { label: 'Region', value: 'Central Madhya Pradesh', icon: 'pin' },
    { label: 'Heritage', value: 'Begums of Bhopal Dynasty', icon: 'landmark' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Aug – Feb (Heritage: Oct – Feb)', icon: 'sun' },
    { label: 'Character', value: 'Mosques, Palaces, Museums & Lakes', icon: 'temple' },
  ],
  overview: {
    heading: 'The Sovereign Splendour of the Begums and Lakes',
    description:
      'Spreading gracefully across picturesque hills encircling the vast, tranquil expanse of Bhojtal, Bhopal is a city of singular historical distinction in Central India. For over a century between 1819 and 1926, Bhopal was ruled consecutively by four visionary Muslim queens—the legendary Begums of Bhopal—who championed progressive statecraft, social reform, urban planning, and monumental architectural commissions. Today, Bhopal presents a fascinating juxtaposition: the historic northern quarter resonates with regal Islamic courtyards, towering minarets, and European-influenced palaces, while the modern southern ridge hosts world-renowned cultural institutions, tribal art museums, and serene lakeside promenades.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Heritage Connoisseurs, Architecture Enthusiasts, Museum Lovers & Central India Circuit Travellers',
      },
      {
        icon: 'temple',
        label: 'The Experience',
        text: 'Colossal Begum Mosques, Indo-European Royal Palaces, World-Class Tribal Arts & Lake Sunsets',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1–2 Nights (or Prime Base for Sanchi, Bhimbetka, Bhojpur & Islamnagar Day Circuits)',
      },
      {
        icon: 'compass',
        label: 'Trade Suitability',
        text: 'Central MP Hub, Superior 5-Star & Heritage Stays, High Year-Round B2B Volume & MICE Infrastructure',
      },
    ],
  },
  highlights: [
    {
      id: 'bhopal-taj-ul-masajid',
      name: 'Taj-ul-Masajid',
      category: 'Monumental Begum Mosque',
      description:
        'One of the largest mosques in Asia, initiated by Nawab Shah Jahan Begum, featuring a grand pink sandstone facade, octagonal 18-storey minarets, and three gleaming white marble domes.',
      image: a('bhopal-taj-ul-masajid'),
    },
    {
      id: 'bhopal-gauhar-mahal',
      name: 'Gauhar Mahal',
      category: 'Lakeside Royal Palace',
      description:
        'Built in 1820 by Qudsia Begum (Gauhar Begum), the first female ruler of Bhopal, this historic palace stands along the Upper Lake, beautifully blending Mughal and Rajput architectural elements.',
      image: a('bhopal-gauhar-mahal'),
    },
    {
      id: 'bhopal-shaukat-mahal',
      name: 'Shaukat Mahal',
      category: 'Indo-European Palace',
      description:
        'An eccentric architectural masterpiece designed by a Frenchman of Bourbon descent, uniting Gothic arches, Post-Renaissance triangular pediments, and traditional Islamic filigree.',
      image: a('bhopal-shaukat-mahal'),
    },
    {
      id: 'bhopal-sadar-manzil',
      name: 'Sadar Manzil',
      category: 'Royal Ceremonial Court',
      description:
        'The former hall of public audience and royal administrative headquarters adjoining Shaukat Mahal, distinguished by red sandstone arcades, a central courtyard, and formal royal chambers.',
      image: a('bhopal-sadar-manzil'),
    },
    {
      id: 'bhopal-moti-masjid',
      name: 'Moti Masjid',
      category: 'Historic Pearl Mosque',
      description:
        'Erected in 1860 by the dynamic reformist ruler Sikandar Jahan Begum, this gem of Islamic architecture features dark-red sandstone minarets crowned with gold finials and white marble domes.',
      image: a('bhopal-moti-masjid'),
    },
    {
      id: 'bhopal-tribal-museum',
      name: 'Madhya Pradesh Tribal Museum',
      category: 'Indigenous Arts & Culture',
      description:
        'A world-class contemporary museum celebrating the vibrant mythologies, spiritual habitats, musical traditions, and artistic expressions of Central India’s indigenous tribal communities.',
      image: a('bhopal-tribal-museum'),
    },
  ],
  themes: [
    {
      id: 'begums-heritage',
      title: 'Begums of Bhopal Heritage Walk',
      icon: 'landmark',
      image: a('theme-begums-heritage'),
      sights: [
        'Gauhar Mahal Lakeside Palace',
        'Shaukat Mahal Indo-Gothic Façade',
        'Sadar Manzil Public Audience Court',
        'Historic Chowk & Royal Gates',
      ],
      note: 'A captivating guided walking trail through the walled city heart, narrating the remarkable century-long succession of Bhopal’s female sovereigns, royal rivalries, and distinctive civic architecture.',
    },
    {
      id: 'historic-mosques',
      title: 'Historic Mosques & Architecture Trail',
      icon: 'temple',
      image: a('theme-historic-mosques'),
      sights: [
        'Taj-ul-Masajid Great Courtyard',
        'Moti Masjid (Pearl Mosque)',
        'Taj Mahal Palace Complex Ruins',
        'Dhai Seedi Ki Masjid',
      ],
      note: 'Examine the majestic progression of 19th-century royal Islamic architecture, from India’s smallest historic mosque to the colossal domes and reflecting tanks of Taj-ul-Masajid.',
    },
    {
      id: 'museums-culture',
      title: 'Museums & Living Culture Discovery',
      icon: 'graduation',
      image: a('theme-museums-culture'),
      sights: [
        'Madhya Pradesh Tribal Museum',
        'Bharat Bhavan Multi-Arts Centre',
        'Manav Sangrahalaya (Museum of Mankind)',
        'State Archaeological Museum',
      ],
      note: 'Explore Bhopal’s status as Central India’s cultural vanguard, discovering immersive tribal village installations, contemporary indigenous art galleries, and open-air prehistoric exhibits.',
    },
    {
      id: 'upper-lake',
      title: 'Upper Lake & Cultural Heritage Trail',
      icon: 'compass',
      image: a('theme-upper-lake'),
      sights: [
        'Bhojtal (Upper Lake) Sunset Cruises',
        'Kamla Park & Raja Bhoj Bastion',
        'VIP Road Lakeside Promenade',
        'Shyamla Hills Viewpoints',
      ],
      note: 'Experience the romantic lakeside identity of Bhopal on the waters of the 11th-century Bhojtal, complemented by tranquil hillside vistas and vibrant evening lakefront culinary culture.',
    },
  ],
  seasons: [
    {
      name: 'Winter',
      months: 'Oct – Feb',
      icon: 'snowflake',
      description:
        'Crisp, pleasant days and cool evenings with temperatures between 10°C and 26°C. The premier season for walking heritage trails through old-city quarters, visiting open-air museums, and enjoying sunset boat cruises.',
      tag: 'Best Season',
      theme: 'blue',
    },
    {
      name: 'Spring',
      months: 'Feb – Mar',
      icon: 'sun',
      description:
        'Mild sunny weather and blossoming city gardens with daytime temperatures between 15°C and 30°C. Ideal for cultural touring, visiting Bharat Bhavan arts programs, and unhurried day excursions.',
      tag: 'Pleasant',
      theme: 'sky',
    },
    {
      name: 'Summer',
      months: 'Apr – Jun',
      icon: 'sun',
      description:
        'Daytime temperatures range from 26°C to 42°C with dry central heat. Early morning heritage walks and air-conditioned afternoon museum tours are recommended, followed by cooling evening breezes along the lake.',
      tag: 'Warm Season',
      theme: 'peach',
    },
    {
      name: 'Monsoon',
      months: 'Jul – Sep',
      icon: 'cloud',
      description:
        'Revitalising southwest monsoon rains bring scenic drama to the city. The lakes swell to capacity, Shyamla Hills turn lush emerald green, and refreshing cool breezes sweep across Upper Lake.',
      tag: 'Scenic & Lush',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Raja Bhoj Airport, Bhopal (BHO, ~15 km / 25–30 mins from city centre) offers regular scheduled non-stop domestic flights connecting Delhi, Mumbai, Bengaluru, Hyderabad, and major regional hubs.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Bhopal Junction (BPL) and the world-class redeveloped Rani Kamlapati (RKMP) terminal are premier railway hubs on the North–South and East–West mainline, served by high-speed Vande Bharat, Shatabdi, and Rajdhani expresses.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Excellent multi-lane state and national highways link Bhopal to Indore (190 km / 3.5 hrs), Sanchi (48 km / 1 hr), Bhimbetka (45 km / 1 hr), Bhojpur (28 km / 45 mins), and Pachmarhi (200 km / 4.5 hrs).',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured cars for regional excursions; app-based cabs and tourist taxis for urban transit; delightful guided walking tours through the compact old-city bazaars and lakeside promenades.',
    },
  ],
  cta: {
    heading: 'Plan a Bhopal Heritage Journey for Your Clients',
    description:
      'Connect your travellers with the royal legacy of the Begums, monumental Islamic architecture, acclaimed tribal arts, and tranquil lakeside heritage in a tailored Central India itinerary.',
  },
  story: {
    heading: 'Where Four Queens Built an Empire of Culture',
    paragraphs: [
      'In the male-dominated tapestry of 19th-century princely India, the state of Bhopal carved an extraordinary historic path. Beginning with Qudsia Begum in 1819 and continuing through Sikandar Jahan, Shah Jahan, and Sultan Jahan Begum, four successive female rulers governed with progressive wisdom, commissioning monumental mosques, palatial civic halls, clean water works, and schools.',
      'Gazing out from the tranquil banks of Bhojtal toward the majestic rose-stone minarets of Taj-ul-Masajid, Bhopal reflects this unique legacy: a capital of refined courtliness, enduring tolerance, and magnificent architectural daring set against a landscape of gentle hills and shimmering water.',
    ],
    image: a('bhopal-hero'),
    imageAlt: 'Panoramic view of Bhopal Upper Lake and royal heritage monuments at dusk',
    quote: 'Where the regal visions of four great Begums remain etched in pink sandstone, marble domes, and the peaceful waters of the lake.',
  },
  travellers: [
    { icon: 'users', name: 'Cultural Tour Groups' },
    { icon: 'landmark', name: 'Heritage & History Scholars' },
    { icon: 'graduation', name: 'Museum & Tribal Art Seekers' },
    { icon: 'compass', name: 'Urban Photographers' },
    { icon: 'footprints', name: 'Independent FIT Explorers' },
    { icon: 'heart', name: 'Luxury Leisure Travellers' },
  ],
  fullGuide: [
    {
      title: 'Old Bhopal Begum Heritage Quarter',
      points: [
        'Taj-ul-Masajid: monumental 19th-century mosque with vast prayer courtyard, three white marble domes, and towering minarets.',
        'Gauhar Mahal: 1820 lakeside palace of Qudsia Begum featuring carved timber columns, courtyards, and lake-view balconies.',
        'Shaukat Mahal: unique fusion of Gothic, Renaissance, and Islamic architectural idioms designed by a European architect.',
        'Sadar Manzil: elegant red sandstone public audience hall used for royal ceremonial receptions and durbars.',
      ],
    },
    {
      title: 'Museums & Cultural Enclaves',
      points: [
        'Madhya Pradesh Tribal Museum: award-winning installations interpreting the spiritual, domestic, and festive lifeways of regional tribes.',
        'Bharat Bhavan: multi-arts centre designed by Charles Correa, featuring tribal and contemporary art galleries, poetry library, and amphitheatre.',
        'National Museum of Mankind (IGRMS): sprawling 200-acre open-air anthropology museum displaying authentic tribal dwellings from across India.',
      ],
    },
    {
      title: 'Lakes & Regional Day Circuits',
      points: [
        'Bhojtal (Upper Lake): 11th-century lake created by Raja Bhoj, offering sunset cruises, watersports, and tranquil park views.',
        'UNESCO Heritage Excursions: ideal hub for half-day excursions to Sanchi Buddhist stupas (48 km) and Bhimbetka rock shelters (45 km).',
      ],
    },
  ],
};
