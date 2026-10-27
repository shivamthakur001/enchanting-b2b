import type { DestinationDetailContent } from './destinationDetailTypes';
export type { DestinationDetailContent } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/omkareshwar/${name}.webp`;

export const omkareshwarContent: DestinationDetailContent = {
  id: 'omkareshwar',
  themeLabel: 'Spirituality',
  heroEyebrow: 'SACRED ISLAND JYOTIRLINGA · MADHYA PRADESH',
  title: 'Omkareshwar',
  subtitle: 'An Island of Faith Upon the Sacred Narmada.',
  heroImage: a('omkareshwar-hero'),
  ctaBackgroundImage: a('omkareshwar-hero'),
  tags: [
    'One of the 12 Sacred Jyotirlingas',
    'Natural Om-Shaped Mandhata Island',
    'Holy Narmada & Kaveri Confluence',
    'Seat of Adi Shankaracharya Heritage',
    'Monumental Ekatma Dham Sanctum',
  ],
  quickFacts: [
    { label: 'Region', value: 'Nimar / Khandwa District, MP', icon: 'pin' },
    { label: 'Sacred Identity', value: 'Om-Shaped Island Jyotirlinga', icon: 'temple' },
    { label: 'Ideal Stay', value: '1–2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct – Mar (Pleasant Weather & Calm Waters)', icon: 'sun' },
    { label: 'Best For', value: 'Jyotirlinga Darshan · Narmada Snan · Parikrama', icon: 'heart' },
  ],
  overview: {
    heading: 'The Sacred Island of Om Upon the Eternal Currents of Ma Narmada',
    description:
      'Cradled in the tranquil valley where the sacred Narmada River parts to embrace the island of Mandhata (also known as Shivapuri), Omkareshwar is celebrated as one of the most spiritually charged geographies in Central India. Viewed from above, the natural topography of the island and surrounding waterways form the sacred Devanagari syllable "Om" (ॐ). As the revered seat of one of the twelve divine Jyotirlingas, the pilgrimage here traditionally unites two ancient sanctums: Shri Omkareshwar on Mandhata Island and the equally venerable Shri Mamleshwar (Amareshwar) on the southern mainland bank. Deeply entwined with the monastic tradition of Adi Shankaracharya, who met his Guru Govinda Bhagavatpada in the riverside caves here, Omkareshwar blends profound antiquity, dramatic river bluffs, and vibrant temple ghats with the majestic new spiritual monument of Ekatma Dham (Statue of Oneness).',
    cards: [
      {
        icon: 'users',
        label: 'Best For',
        text: 'Faith Pilgrims, Vedanta Enthusiasts, Senior Citizen Travellers, Cultural Inbound Guests & Holistic Spiritual Circuits',
      },
      {
        icon: 'compass',
        label: 'The Experience',
        text: 'Dual Jyotirlinga Darshan (Omkareshwar & Mamleshwar), Scenic Riverboat Crossings, Nagar Ghat Aartis & Mandhata Island Parikrama',
      },
      {
        icon: 'calendar',
        label: 'Ideal Duration',
        text: '1N / 2D or 2N / 3D (Permitting relaxed temple darshans, both morning and evening river ceremonies, and the complete island trail)',
      },
      {
        icon: 'landmark',
        label: 'Trade Suitability',
        text: 'Clean Vegetarian Lodges & MP Tourism Resorts, Suspension Bridge Foot Access, Regulated Boat Transfers & Direct Indore Connections',
      },
    ],
  },
  highlights: [
    {
      id: 'omkareshwar-jyotirlinga-shrine',
      name: 'Shri Omkareshwar Jyotirlinga',
      category: 'Revered Island Sanctum',
      description:
        'Perched majestically upon the sandstone cliffs of Mandhata Island, the multi-storeyed Omkareshwar temple enshrines the natural rock Jyotirlinga, continually blessed by the surrounding waters of the Narmada. Its multi-tiered shikhara, carved pillared mandapas, and ornate balconied gateways reflect generations of devotion and architectural patronage.',
      image: a('omkareshwar-jyotirlinga-shrine'),
    },
    {
      id: 'omkareshwar-mamleshwar-temple',
      name: 'Mamleshwar Temple',
      category: 'Ancient Mainland Sanctuary',
      description:
        'Situated directly opposite Mandhata Island on the southern bank of the Narmada, Mamleshwar (historically Amareshwar) is an exquisite 10th-to-11th-century stone temple protected by the Archaeological Survey of India. Its finely carved shikhara and ancient Mahimna Stotra inscriptions on stone slabs embody pure classical temple architecture.',
      image: a('omkareshwar-mamleshwar-temple'),
    },
    {
      id: 'omkareshwar-mandhata-island',
      name: 'Mandhata Island & Sacred River Landscape',
      category: 'Sacred Island Geography',
      description:
        'The sacred island measures approximately two kilometres in length and is divided from the mainland by deep river gorges. The tranquil northern arm of the river is known locally as the Kaveri, creating sacred sangam points and dramatic rock ridges crowned with ancient shrines, hermitages, and panoramic river vistas.',
      image: a('omkareshwar-mandhata-island'),
    },
    {
      id: 'omkareshwar-siddhanath-temple',
      name: 'Siddhanath Temple',
      category: 'Early Medieval Stone Heritage',
      description:
        'Standing atop a prominent plateau on Mandhata Island, this magnificent 10th-century Parmara-era shrine rests upon an elevated stone plinth adorned with a majestic frieze of sculpted elephants. The remaining carved stone pillars and open courtyards offer commanding views across the Narmada valley.',
      image: a('omkareshwar-siddhanath-temple'),
    },
    {
      id: 'omkareshwar-narmada-ghats',
      name: 'Narmada Ghats & Riverfront',
      category: 'Sacred Bathing & Ritual Ghats',
      description:
        'Steep stone steps lead down to the emerald river at Nagar Ghat, Abhay Ghat, and Gaumukh Ghat. Pilgrims gather here for the purifying Narmada snan (holy bath), morning prayers, and dusk aarti where traditional brass lamps illuminate the tranquil waters.',
      image: a('omkareshwar-narmada-ghats'),
    },
    {
      id: 'omkareshwar-ekatma-dham-statue',
      name: 'Ekatma Dham / Statue of Oneness',
      category: 'Monumental Philosophical Landmark',
      description:
        'Rising 108 feet above the Mandhata hills, this breathtaking bronze statue commemorates the great 8th-century philosopher Adi Shankaracharya as a 12-year-old child monk, marking the sacred land where he received deeksha. The surrounding cultural complex celebrates the universal philosophy of Advaita Vedanta.',
      image: a('omkareshwar-ekatma-dham-statue'),
    },
  ],
  themes: [
    {
      id: 'theme-jyotirlinga-darshan-heritage',
      title: 'Jyotirlinga Darshan & Temple Heritage',
      icon: 'temple',
      image: a('theme-jyotirlinga-darshan-heritage'),
      sights: [
        'Shri Omkareshwar Inner Sanctum Darshan',
        'Mamleshwar (Amareshwar) Temple Heritage Walk',
        'Historic Jhula Pul & Suspension Bridges',
        'Ancient Inscribed Stone Mandapas',
        'Shri Krishna & Annapurna Courtyard Shrines',
      ],
      note: 'Visiting both Omkareshwar on the island and Mamleshwar on the mainland completes the sacred pilgrimage as per long-standing tradition. Access to the island is facilitated by pedestrian suspension bridges (Jhula Pul, Mamleshwar Setu) and modern boat services. Temple darshan guidelines follow standard trust norms.',
    },
    {
      id: 'theme-sacred-narmada-ghat-rituals',
      title: 'Sacred Narmada Ghats & Ritual Traditions',
      icon: 'compass',
      image: a('theme-sacred-narmada-ghat-rituals'),
      sights: [
        'Pavitra Narmada Snan at Nagar Ghat',
        'Authorized Riverboat Cruise around Mandhata',
        'Evening Deep Daan & Riverfront Aarti',
        'Confluence Point of Narmada and Kaveri',
        'Purohit Blessings and Traditional Sankalp',
      ],
      note: 'All boating on the Narmada is strictly regulated by local district administration; boats operate only during permitted daytime hours with mandatory life jackets. During monsoon surges or upstream dam discharge, boat services may be temporarily paused for visitor safety.',
    },
    {
      id: 'theme-island-parikrama-pilgrimage',
      title: 'Island Parikrama & Pilgrimage Interpretation',
      icon: 'footprints',
      image: a('theme-island-parikrama-pilgrimage'),
      sights: [
        'Mandhata Island Traditional 7-km Circulatory Trail',
        'Ancient Parmara-Era Siddhanath Temple Ruins',
        'Panoramic River Valley Ridge Overlooks',
        'Gauri Somnath Temple & Colossal Shivalinga',
        'Tranquil Riverside Monasteries & Hermitages',
      ],
      note: 'The Mandhata Parikrama is an approx. 7-kilometre stone-paved walking circuit around the island. Recommended for travellers in good physical condition during early morning hours; shaded rest points and scenic river viewpoints line the entire trail.',
    },
    {
      id: 'theme-shankaracharya-philosophy',
      title: 'Adi Shankaracharya Heritage & Spiritual Philosophy',
      icon: 'landmark',
      image: a('theme-shankaracharya-philosophy'),
      sights: [
        'Govinda Bhagavatpada Guha (Underground Cave)',
        'Ekatma Dham (Statue of Oneness Plaza)',
        'Advaita Vedanta Cultural Exhibition & Center',
        'Mandhata Hilltop Forest Sanctuaries',
        'Scholarly Interpretation of Non-Dual Philosophy',
      ],
      note: 'Adi Shankaracharya walked from Kalady in Kerala to Omkareshwar in the 8th century to attain mastery under Guru Govinda Bhagavatpada. This pivotal spiritual event makes Omkareshwar one of the prime centers of Indian philosophical pilgrimage.',
    },
  ],
  seasons: [
    {
      name: 'Autumn Festive Awakening',
      months: 'Oct – Nov',
      icon: 'calendar',
      description:
        'Pleasant post-monsoon conditions (20°C–31°C) with full, clean river levels. The sacred Kartika Purnima fair draws devout pilgrims for holy river bathing, illuminated boat parades, and vibrant temple ceremonies.',
      tag: 'Kartika Fair Season',
      theme: 'gold',
    },
    {
      name: 'Crisp Island Winter',
      months: 'Dec – Feb',
      icon: 'snowflake',
      description:
        'The finest travel window of the year. Cool morning breezes over the Narmada (10°C–15°C) and temperate sunny afternoons (22°C–26°C) provide idyllic conditions for the 7-km island parikrama and unhurried boat excursions.',
      tag: 'Ideal Weather Window',
      theme: 'blue',
    },
    {
      name: 'Summer Fervor & Shivratri',
      months: 'Mar – May',
      icon: 'sun',
      description:
        'Warm to hot dry weather (30°C–42°C). Maha Shivratri is celebrated with monumental devotion. River levels recede, exposing broad sandy banks; visits are ideally scheduled during early mornings and golden dusk hours.',
      tag: 'Maha Shivratri Celebrations',
      theme: 'gold',
    },
    {
      name: 'Monsoon Greenery & Shravan',
      months: 'Jun – Sep',
      icon: 'cloud',
      description:
        'Monsoon rains envelop the rugged hills of Mandhata in lush green foliage. The holy month of Shravan witnesses joyful chants of "Har Har Narmade". Riverboat safaris are paused during peak water surges for safety.',
      tag: 'Shravan Pilgrimage Season',
      theme: 'green',
    },
  ],
  access: [
    {
      icon: 'plane',
      label: 'By Air',
      text: 'Devi Ahilyabai Holkar International Airport in Indore (IDR, approx. 77–80 km / 2–2.5 hrs drive) is the closest commercial airport, offering frequent daily flights to Delhi, Mumbai, Bengaluru, Hyderabad, and major metros.',
    },
    {
      icon: 'train',
      label: 'By Rail',
      text: 'Khandwa Junction (KNW, approx. 70 km) is the principal broad-gauge railway junction connecting Mumbai, Delhi, Bengaluru, and Southern India. Indore Junction (approx. 78 km) offers extensive superfast rail links. Omkareshwar Road (approx. 12 km) serves regional passenger routes.',
    },
    {
      icon: 'car',
      label: 'By Road',
      text: 'Smooth state highways connect Omkareshwar to Indore (77 km via Barwah/Sanawad), Maheshwar (65 km), Ujjain (135 km), and Khandwa (70 km), making it an effortless component of any Central India itinerary.',
    },
    {
      icon: 'pin',
      label: 'Local Transfers',
      text: 'Private AC sedans and SUVs provide smooth road transit to riverbanks. On foot, two suspension bridges (Jhula Pul, Mamleshwar Setu) and authorized motorboats provide seamless connection between the mainland and Mandhata Island.',
    },
  ],
  cta: {
    heading: 'Plan a Sacred Journey to Omkareshwar & the Holy Narmada',
    description:
      'Partner with our B2B travel team for verified temple darshan pacing, pre-booked authorized boat services, premium vegetarian riverfront lodges, and seamless circuit combinations with Ujjain, Maheshwar and Indore.',
  },
};
