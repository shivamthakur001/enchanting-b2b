import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/chitrakoot/${name}.webp`;

export const chitrakootContent: DestinationDetailContent = {
  id: 'chitrakoot',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED RAMAYANA HERITAGE · MADHYA PRADESH',
  title: 'Chitrakoot',
  subtitle: 'Where the Ramayana Lives Along the Mandakini.',
  heroImage: a('chitrakoot-hero'),
  ctaBackgroundImage: a('chitrakoot-hero'),
  tags: [
    "Forest of Lord Rama's Exile",
    'Sacred Mandakini River & Ram Ghat',
    'Holy Kamadgiri Hill Circumambulation',
    'Limestone Caverns of Gupt Godavari',
    'Tulsidas & Saintly Hermitage Tradition',
  ],
  quickFacts: [
    { label: 'Region', value: 'Satna District, MP (& Chitrakoot, UP Border)', icon: 'pin' },
    { label: 'Sacred Identity', value: "Epic Ramayana Exile & Sati Anusuya Seat", icon: 'temple' },
    { label: 'Ideal Stay', value: '2 Nights / 3 Days', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Cool Days & Pleasant River Breeze)', icon: 'sun' },
    { label: 'Best For', value: 'Ram Ghat Aarti · Kamadgiri Parikrama · Caves', icon: 'heart' },
  ],
  overview: {
    heading: 'The Sacred Forest of Exile, Devotion & the Mandakini Waters',
    description:
      'Sheltered along the northern forested ridges of the Vindhya Range where the peaceful Mandakini River carves its timeless path, Chitrakoot ("the Hill of Many Wonders") is celebrated as one of India’s most revered epic landscapes. According to the Ramayana, Lord Rama, Mata Sita, and Lakshmana spent eleven and a half years of their fourteen-year forest exile in these serene groves, sanctifying the rocks, caverns, and waters. It was here at Bharat Milap that Prince Bharat came to entreat Rama to return to Ayodhya, and where the revered 16th-century saint-poet Goswami Tulsidas was blessed with a divine vision of the divine brothers while composing his immortal verses. Uniquely situated across the state border between Satna district in Madhya Pradesh and Chitrakoot district in Uttar Pradesh, the destination blends riverbank devotion, living ashram culture, limestone cave geology, and unhurried pilgrimage rituals.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Faith Pilgrims, Ramayana Scholars, Senior-Citizen Delegations, Inbound Cultural Travellers & Vindhya-Bundelkhand Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Ram Ghat Evening Aarti, 5-km Kamadgiri Parikrama, Gupt Godavari Cave Stream Wading, Sati Anusuya Forest Hermitage & Riverboat Pacing',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D (Permitting relaxed morning parikrama, afternoon excursions to outlying forest shrines, dusk riverfront aarti, and smooth cross-border touring)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Clean Vegetarian Hotels & MP Tourism Resorts, Paved Pilgrim Corridors, Direct Road Links from Satna (75 km) & Khajuraho Circuit Pairings',
      },
    ],
  },
  highlights: [
    {
      id: 'chitrakoot-ram-ghat-mandakini',
      name: 'Ram Ghat & Mandakini River',
      category: 'Venerated Riverfront & Aarti Platform',
      description:
        'The spiritual heart of Chitrakoot, Ram Ghat lines the banks of the placid Mandakini River where Lord Rama is traditionally believed to have bathed. Colonnaded pavilions, colorful wooden rowboats, and steps lined with holy men form the backdrop for morning snan rituals and a mesmerizing dusk aarti accompanied by brass bells and floating leaf lamps.',
      image: a('chitrakoot-ram-ghat-mandakini'),
    },
    {
      id: 'chitrakoot-kamadgiri-kamtanath',
      name: 'Kamadgiri Parvat & Kamtanath Temple',
      category: 'Sacred Hill of Divine Blessing',
      description:
        'The forested, bow-shaped hill of Kamadgiri is revered as the original embodiment of Lord Rama itself. Pilgrims perform the traditional 5-kilometre paved circumambulation (parikrama) around the hill, paying homage at ancient Kamtanath shrines whose courtyards are shaded by mature peepal, banyan, and kadamba canopies.',
      image: a('chitrakoot-kamadgiri-kamtanath'),
    },
    {
      id: 'chitrakoot-janaki-kund',
      name: 'Janaki Kund',
      category: 'Secluded Forest River Sanctuary',
      description:
        'Situated approximately two kilometres upstream along the Mandakini amid tranquil groves, Janaki Kund is the traditional bathing spot of Mata Sita during the exile period. The emerald-green river forms a quiet pool bordered by smooth volcanic rocks that bear fossilized impressions revered by devout pilgrims.',
      image: a('chitrakoot-janaki-kund'),
    },
    {
      id: 'chitrakoot-sati-anusuya-ashram',
      name: 'Sati Anusuya Ashram',
      category: 'Ancient Forest Hermitage',
      description:
        'Nestled deep inside the lush sal and teak forests of the Madhya Pradesh sector, about 16 km upstream from town, this tranquil hermitage commemorates Maharishi Atri and his pious consort Sati Anusuya. The hermitage overlooks the nascent bubbling streams that feed the Mandakini amid pristine natural silence.',
      image: a('chitrakoot-sati-anusuya-ashram'),
    },
    {
      id: 'chitrakoot-hanuman-dhara',
      name: 'Hanuman Dhara',
      category: 'Hillside Spring & Clifftop Vista',
      description:
        'Perched dramatically upon a sheer rock cliff in the Uttar Pradesh sector, a natural cold-water mountain spring flows continuously over a stone deity of Lord Hanuman. Reached by an ascent of 360 stone steps (or a passenger ropeway), the summit rewards visitors with panoramic vistas across the entire Chitrakoot valley.',
      image: a('chitrakoot-hanuman-dhara'),
    },
    {
      id: 'chitrakoot-gupt-godavari-caves',
      name: 'Gupt Godavari Caves',
      category: 'Subterranean Limestone Caverns',
      description:
        'Located 18 km from town within the Madhya Pradesh jurisdiction, these dual natural limestone caves house an extraordinary subterranean watercourse. Visitors traverse the narrow, illuminated cavern while wading through knee-deep crystalline waters that flow silently from a concealed mountain spring before disappearing beneath the rock floor.',
      image: a('chitrakoot-gupt-godavari-caves'),
    },
  ],
  themes: [
    {
      id: 'theme-mandakini-ghats-evening-aarti',
      title: 'Mandakini Ghats & Evening Aarti',
      icon: 'compass',
      image: a('theme-mandakini-ghats-evening-aarti'),
      sights: [
        'Ram Ghat Golden Hour Twilight & Evening Lamp Ceremony',
        'Traditional Wooden Paddle-Boat Riverfront Cruises',
        'Tulsidas Chabutara & Historic Ramcharitmanas Spots',
        'Raghav Prayag Ghat & Mandakini River Bathing Steps',
        'Devotional Incense, Brass Bell Chimes & Floating Diyas',
      ],
      note: 'The Mandakini evening aarti takes place at dusk along Ram Ghat. Accessible to all respectful visitors; private hand-rowed wooden boats can be chartered to observe the illuminated ceremony from the calm river waters.',
    },
    {
      id: 'theme-kamadgiri-parikrama-pilgrimage',
      title: 'Kamadgiri Parikrama & Pilgrimage Interpretation',
      icon: 'footprints',
      image: a('theme-kamadgiri-parikrama-pilgrimage'),
      sights: [
        'Paved 5-km Circumambulation of the Sacred Bow Hill',
        'Pratham Mukh & Char Mukh Kamtanath Temples',
        'Bharat Milap Temple marking the Epic Reunion Site',
        'Pilgrim Offerings of Milk, Flowers and Dhana Dal',
        'Ancient Banyan Canopy Rest Points and Clean Waystops',
      ],
      note: 'The Kamadgiri Parikrama is an approx. 5-kilometre level, stone-paved walking circuit. Early morning hours (6:00 AM – 9:00 AM) offer cool breezes and pleasant walking conditions. Wheelchair assistance and battery-operated carts are available locally for elderly travellers.',
    },
    {
      id: 'theme-ramayana-sacred-heritage-circuit',
      title: 'Ramayana Sacred Heritage Circuit',
      icon: 'landmark',
      image: a('theme-ramayana-sacred-heritage-circuit'),
      sights: [
        'Sphatik Shila with Revere Footprint Imprints in MP',
        'Janaki Kund Forest Bathing Reaches',
        'Sati Anusuya Ashram River Confluences in MP',
        'Bharat Koop (Sacred Well of All Holy Waters)',
        'Valmiki Ashram & Ancient Forest Hermitages',
      ],
      note: 'Chitrakoot’s heritage landmarks span both sides of the MP–UP state boundary. While crossing is seamless on local paved roads without border checkpoints, itineraries should be structured geographically to group Madhya Pradesh forest shrines (Gupt Godavari, Sati Anusuya, Sphatik Shila) together efficiently.',
    },
    {
      id: 'theme-forest-caves-contemplative-landscapes',
      title: 'Forest, Caves & Contemplative Landscapes',
      icon: 'mountain',
      image: a('theme-forest-caves-contemplative-landscapes'),
      sights: [
        'Gupt Godavari Twin Cave Geological Formations',
        'Subterranean Stream Wading & Natural Rock Carvings',
        'Dense Vindhyan Sal & Teak Forest Scenic Drives',
        'Panoramic Valley Overlooks from Hanuman Dhara Cliffs',
        'Ayurvedic Herb Gardens & Quiet Ashram Retreats',
      ],
      note: 'Exploring Gupt Godavari involves walking through knee-deep cool stream water on smooth river stones; non-slip footwear is strongly recommended. Hanuman Dhara features an ascent of 360 steps, with ropeway services operating subject to local weather and maintenance schedules.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Festive Onset',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Pleasant post-monsoon conditions (18°C–30°C) with crystal-clear Mandakini river flow. The auspicious festivals of Sharad Purnima and Deepawali bring thousands of flickering earthen lamps to the ghats of Ram Ghat and Kamadgiri.',
      tag: 'Diwali & Sharad Season',
      theme: 'gold',
    },
    {
      name: 'Crisp Winter Pilgrimage',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'The premier travel period for Chitrakoot. Cool, refreshing mornings (8°C–14°C) give way to mild, golden sunny afternoons (20°C–24°C), offering ideal conditions for the 5-km Kamadgiri walk and forest cave explorations.',
      tag: 'Peak Visiting Window',
      theme: 'blue',
    },
    {
      name: 'Summer Fervor & Ram Navami',
      months: 'Mar – May',
      icon: 'sun',
      description:
        'Warm to hot dry weather (28°C–42°C). Chaitra Ram Navami (March–April) is celebrated with intense devotional fervor. Pilgrim touring is best scheduled during morning and late evening hours, resting during midday heat.',
      tag: 'Ram Navami Celebrations',
      theme: 'gold',
    },
    {
      name: 'Monsoon Greenery & Shravan',
      months: 'Jun – Sep',
      icon: 'cloud',
      description:
        'Lush monsoon rains carpet the rugged Vindhya slopes in deep green foliage. The Mandakini River swells gracefully and waterfalls like Hanuman Dhara flow vigorously. Cave water levels in Gupt Godavari rise accordingly.',
      tag: 'Vibrant Green Landscapes',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Prayagraj Airport (IXD, approx. 125 km / 3 hrs drive) and Khajuraho Airport (HJR, approx. 175 km / 3.5–4 hrs drive) are the most convenient commercial airports. Jabalpur Airport (JLR, approx. 235 km) offers additional southern access with regular flights to Delhi, Mumbai and Bengaluru.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Chitrakootdham Karwi Railway Station (CKTD, approx. 10 km) connects to Delhi, Kanpur, and Lucknow. Satna Junction (STA, approx. 75 km / 1.5 hrs drive) is a major A1-grade railway junction on the Mumbai-Howrah line served by frequent superfast express trains.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Well-paved state and national highways link Chitrakoot smoothly to Satna (75 km), Khajuraho (175 km via NH-39/Panna), Prayagraj (125 km), Rewa (130 km), and Varanasi (255 km), making it an easy multi-day circuit addition.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private chauffeured AC sedans and SUVs provide seamless door-to-door transit between town ghats and outlying forest sanctuaries. Local cycle rickshaws and authorized wooden boats operate along the river.',
    },
  ],
  cta: {
    heading: 'Curate an Authentic Ramayana Pilgrimage to Chitrakoot',
    description:
      'Partner with our B2B travel specialists for certified spiritual guides, verified vegetarian hotel and resort reservations, seamless cross-border coordination, and custom circuit combinations with Khajuraho, Maihar and Prayagraj.',
  },
};
