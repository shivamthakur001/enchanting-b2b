import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/maheshwar/${name}.webp`;

export const maheshwarContent: DestinationDetailContent = {
  id: 'maheshwar',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED RIVER HERITAGE · MADHYA PRADESH',
  title: 'Maheshwar',
  subtitle: 'Where the Narmada Carries Centuries of Devotion.',
  heroImage: a('maheshwar-hero'),
  ctaBackgroundImage: a('maheshwar-hero'),
  tags: [
    'Historic Seat of Rani Ahilyabai Holkar',
    'Monumental Ahilya Ghat & Narmada Riverfront',
    'Exquisite Maratha Chhatri Architecture',
    'Living Maheshwari Handloom Heritage',
    'Sacred Island Temple of Baneshwar',
  ],
  quickFacts: [
    { label: 'Region', value: 'Khargone / Nimar, MP', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Holkar Royal Seat & Narmada Riverfront', icon: 'landmark' },
    { label: 'Ideal Stay', value: '2 Nights / 3 Days', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Mild Days & Golden River Twilight)', icon: 'sun' },
    { label: 'Best For', value: 'Narmada Aarti · Ahilya Fort · Handloom Weaving', icon: 'heart' },
  ],
  overview: {
    heading: 'The Sacred River Citadel of Rani Ahilyabai & Living Devotion',
    description:
      'Gently cascading down to the shimmering expanse of the holy Narmada River, Maheshwar — revered in classical antiquity as Mahishmati, the historic capital of the legendary Haihaya King Kartavirya Arjuna — is one of the most culturally sublime destinations in Central India. In 1767, the saintly and visionary Maratha queen, Rajmata Ahilyabai Holkar, transferred her royal court from Indore to this riverside sanctuary. Revered across the Indian subcontinent for her piety, justice, and historic reconstruction of sacred temples from Kashi to Somnath, Ahilyabai adorned Maheshwar with monumental stone fortifications, elevated river bastions, and intricately carved temple cenotaphs (chhatris). Here, the daily rhythm of life flows seamlessly around the sacred river: morning snan on stone steps, gentle wooden boat rides to the mid-river Baneshwar shrine, twilight aartis with drifting lamps, and the rhythmic clack of wooden handlooms weaving the world-renowned Maheshwari sarees.',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Inbound Heritage Connoisseurs, Boutique FIT Travellers, Spiritual Seekers, Textile Artisans & Paced Malwa Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Ahilya Fort Citadel Promenade, Intricately Carved Stone Cenotaphs, Sunset Riverboat Sail, Ahilya Ghat Evening Aarti & Live Handloom Workshops',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '2N / 3D (Recommended for unhurried morning and dusk riverfront sessions, master weaver studio visits, and day trips to Mandu or Omkareshwar)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'World-Class Boutique Heritage Hotels (Ahilya Fort & Narmada Retreat), Pedestrianized Riverside Pacing & Rapid Indore Highway Connectivity',
      },
    ],
  },
  highlights: [
    {
      id: 'maheshwar-ahilya-fort-architecture',
      name: 'Ahilya Fort & Sacred Riverside Architecture',
      category: '18th-Century Holkar Citadel',
      description:
        'Crowning an elevated sandstone ridge above the Narmada, Ahilya Fort is a triumph of Maratha and Malwa defensive architecture. The fortress houses the modest royal residence of Rani Ahilyabai, her personal prayer chamber with sacred Shiva lingams, open-air courtyards, and ornate jharokha balconies commanding expansive river views.',
      image: a('maheshwar-ahilya-fort-architecture'),
    },
    {
      id: 'maheshwar-ahilya-ghat-riverfront',
      name: 'Ahilya Ghat and the Narmada Riverfront',
      category: 'Monumental Riverfront Staircase',
      description:
        'Regarded as one of the most visually captivating riverbanks in Asia, Ahilya Ghat features monumental stone staircases, arched pavilions, and multi-tiered riverside platforms where bathers, temple priests, and visitors mingle beneath towering fortress bastions.',
      image: a('maheshwar-ahilya-ghat-riverfront'),
    },
    {
      id: 'maheshwar-rajarajeshwar-temple',
      name: 'Rajarajeshwar Temple',
      category: 'Sacred Eternal Lamp Shrine',
      description:
        'Dedicated to Lord Shiva, this historic temple near Ahilya Ghat is renowned for housing eleven akhand deepas (eternal brass oil lamps) that have burned continuously for centuries, cared for by generations of temple caretakers. The sanctum exudes an atmosphere of profound serenity and timeless devotion.',
      image: a('maheshwar-rajarajeshwar-temple'),
    },
    {
      id: 'maheshwar-ahilyeshwar-temple',
      name: 'Ahilyeshwar Temple & Holkar Heritage',
      category: 'Masterpiece Maratha Cenotaph',
      description:
        'The monumental chhatri built in memory of Rani Ahilyabai Holkar stands as an architectural marvel. Its towering stone shikhara is adorned with exquisite stone friezes depicting musicians, dancers, elephants, and scenes from Hindu epics, set around a tranquil colonnaded courtyard.',
      image: a('maheshwar-ahilyeshwar-temple'),
    },
    {
      id: 'maheshwar-baneshwar-temple',
      name: 'Baneshwar Temple & River Setting',
      category: 'Ancient Island Sanctuary',
      description:
        'Situated upon a tiny rocky outcrop in the middle of the flowing Narmada, this 9th-to-10th-century stone shrine is according to ancient astrological belief aligned with the cosmic center connecting the Earth to the heavens. Reached via traditional wooden boats, it offers spectacular views of the fort ramparts.',
      image: a('maheshwar-baneshwar-temple'),
    },
    {
      id: 'maheshwar-handloom-weaving',
      name: 'Maheshwari Handloom Heritage',
      category: 'Living Textile Craftsmanship',
      description:
        'Established by Rani Ahilyabai in the late 18th century to provide dignified livelihoods for regional artisans, Maheshwari handloom weaving is famous for its lightweight cotton-silk textiles, distinctive geometric borders inspired by fort carvings, and fine zari detailing preserved by organizations like the Rehwa Society.',
      image: a('maheshwar-handloom-weaving'),
    },
  ],
  themes: [
    {
      id: 'theme-narmada-ghats-evening-aarti',
      title: 'Sacred Narmada Ghats & Evening Aarti',
      icon: 'compass',
      image: a('theme-narmada-ghats-evening-aarti'),
      sights: [
        'Ahilya Ghat Multi-Tiered Stone Platforms',
        'Traditional Evening Brass Deepa Aarti by River Priests',
        'Floating Earthen Leaf Diyas on the Narmada Currents',
        'Private Wooden Boat Sunset Cruises',
        'Peaceful Pre-Dawn Chanting and Holy Snan',
      ],
      note: 'The evening Narmada aarti is a dignified and unhurried devotional ritual open to all respectful visitors. Private hand-rowed wooden boat excursions along the ghats offer sublime photographic perspectives of the illuminated stone fortress.',
    },
    {
      id: 'theme-riverside-temple-heritage-walk',
      title: 'Riverside Temple & Heritage Walk',
      icon: 'landmark',
      image: a('theme-riverside-temple-heritage-walk'),
      sights: [
        'Rajarajeshwar Akhand Deepa Sanctum',
        'Ahilyeshwar Chhatri Stone Sculptural Friezes',
        'Vithoji Rao Holkar Cenotaph Architecture',
        'Baneshwar Island Shrine Boat Excursion',
        'Labhgarh and Nimar Riverside Viewpoints',
      ],
      note: 'Walking through the connected courtyards of the chhatris reveals some of the finest stone relief work in Western Madhya Pradesh, seamlessly combining Maratha military bastion engineering with delicate temple ornamentation.',
    },
    {
      id: 'theme-maheshwari-weaving-traditions',
      title: 'Maheshwari Weaving & Living Traditions',
      icon: 'heart',
      image: a('theme-maheshwari-weaving-traditions'),
      sights: [
        'Historic Rehwa Society Weaving Workshops in the Fort',
        'Traditional Pit Looms & Jacquard Border Mechanisms',
        'Natural Dyeing, Warp Preparation & Zari Winding',
        'Direct Interaction with Master Handloom Weavers',
        'Authenticated Artisan Textile Bazaars',
      ],
      note: 'The handloom workshops located within the Ahilya Fort premises permit educational visits for guests interested in sustainable textile heritage. Every purchase directly benefits local weaver families and community welfare initiatives.',
    },
    {
      id: 'theme-narmada-cultural-interpretation',
      title: 'Narmada Landscape & Cultural Interpretation',
      icon: 'leaf',
      image: a('theme-narmada-cultural-interpretation'),
      sights: [
        'Rani Ahilyabai Life & Governance Exhibits',
        'Stories of the Narmada Parikrama Pilgrims',
        'Sahastradhara Riverbed Rock Formations (nearby)',
        'Traditional Nimar Organic Cuisine & Bafla Thali',
        'Boutique Riverside Sunset Hospitality',
      ],
      note: 'Maheshwar is an essential halt for pilgrims undertaking the legendary 2,600-km Narmada Parikrama. The town provides an atmosphere of unhurried contemplation, where travel trade partners can offer clients meaningful respite from high-density tourist circuits.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Festive Onset',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Pleasant post-monsoon climate (20°C–32°C). The Narmada flows clean and wide. The ghats are illuminated during Dussehra and Diwali, with thousand of tiny oil lamps reflecting upon the tranquil river surface.',
      tag: 'Ghat Illuminations',
      theme: 'gold',
    },
    {
      name: 'Crisp Riverside Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'The most enchanting period to experience Maheshwar. Misty river mornings (10°C–14°C) transition into glorious golden afternoons (22°C–26°C), perfect for relaxed walking on the ghats and peaceful boat rides.',
      tag: 'Prime Travel Season',
      theme: 'blue',
    },
    {
      name: 'Warm Summer & Narmada Jayanti',
      months: 'Mar – May',
      icon: 'sun',
      description:
        'Warm to hot dry days (30°C–42°C) cooled by evening river breezes. The festival of Narmada Jayanti brings thousands of earthen lamps. Morning and evening hours remain profoundly rewarding for heritage photography.',
      tag: 'Cultural Festivities',
      theme: 'gold',
    },
    {
      name: 'Monsoon High Waters',
      months: 'Jun – Sep',
      icon: 'cloud',
      description:
        'Monsoon rains cause the Narmada to rise impressively against the stone ramparts. The surrounding landscape turns deeply green. Riverboat activities are paused during heavy river discharge for visitor safety.',
      tag: 'Dramatic River Swell',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar International Airport in Indore (IDR, approx. 91 km / 2–2.5 hrs drive via smooth 4-lane NH-52 / Dhamnod) is the primary airport, with frequent daily nonstop flights to major Indian metro cities.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Barwaha Railway Station (approx. 45 km) offers regional rail links. Indore Junction (approx. 90 km) and Khandwa Junction (approx. 110 km) serve as the principal broad-gauge railway junctions on major national routes.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Paved state highways connect Maheshwar effortlessly to Dhamnod on NH-52 (14 km), Mandu (45 km), Omkareshwar (65 km via Barwah), Indore (91 km), and Ujjain (145 km), making it an ideal component of any Central India itinerary.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Chauffeured private AC sedans and SUVs provide seamless transit. The entire historical citadel and riverfront ghat area is completely pedestrian-friendly, complemented by authorized wooden rowboats on the river.',
    },
  ],
  cta: {
    heading: 'Curate a Serene River Journey to Maheshwar & the Holkar Heritage',
    description:
      'Partner with our B2B travel specialists for boutique heritage hotel reservations, private sunrise wooden boat cruises, verified handloom studio interactions, and seamless Malwa-Narmada itinerary curation.',
  },
};
