/** All Heritage LANDING-page copy and ordering in one editable file.
 * NOT the canonical destination database: the main site's canonical slugs and
 * destination categories remain authoritative after merging.
 */
export interface HeritageDestination {
  slug: string;
  name: string;
  teaser: string;
  image?: string; // production: map to licensed/original destination imagery
}
export interface HeritageExpression {
  id: string; eyebrow: string; title: string; description: string;
  highlights: readonly string[]; image: string; imageAlt: string;
}
export interface HeritageProgramme {
  id: string; title: string; href: string; image?: string;
  duration?: string; priceLabel?: string; description?: string;
}

export const heritagePageContent = {
  hero: {
    eyebrow: 'DISCOVER THE HEART OF INDIA / HERITAGE',
    title: 'Where History',
    italicTitle: 'Still Breathes.',
    description: 'Between ancient stone and royal imagination, discover the extraordinary living legacy of Madhya Pradesh.',
    scrollLabel: 'SCROLL TO DISCOVER',
  },
  intro: {
    eyebrow: 'A LIVING MUSEUM',
    title: 'Every Stone Holds', italicTitle: 'a Story.',
    description: 'From the earliest paintings on rock to elaborate temples, royal courts and living craft traditions, the region is a magnificent archive of human expression.',
  },
  expressions: {
    eyebrow: 'FOUR HERITAGE EXPRESSIONS',
    title: 'Four Ways to Experience', italicTitle: 'Centuries of Wonder',
    description: 'One heritage, many voices. Choose a chapter to discover the traditions, artistry and architecture that shape Madhya Pradesh.',
  },
  destinations: {
    eyebrow: 'THE HERITAGE COLLECTION',
    title: 'Explore Heritage', italicTitle: 'Destinations',
    description: 'Twelve distinct places, from celebrated UNESCO sites to historic cities and extraordinary lesser-known legacies.',
  },
  programmes: {
    eyebrow: 'DESIGNED FOR THE TRAVEL TRADE',
    title: 'Heritage', italicTitle: 'Programmes',
    description: 'Authentic curated journeys from your existing live package collection. No invented itineraries or prices.',
    emptyHeading: 'Craft a journey around their curiosity.',
    emptyDescription: 'Your verified Heritage packages will appear here once connected. Meanwhile, create a tailor-made query.',
  },
  cta: {
    eyebrow: 'MAKE THE NEXT STORY THEIR OWN',
    title: 'Build a Heritage Journey',
    italicTitle: 'into the Heart of India',
    description: 'From ancient artistic masterpieces to timeless royal cities, let us shape a remarkable journey for your clients.',
    destinationsButton: 'EXPLORE HERITAGE DESTINATIONS',
    queryButton: 'CREATE QUERY',
  },
} as const;

/** Chapters share the SAME large image + four selectable tabs flow as Nature. */
export const heritageExpressions: readonly HeritageExpression[] = [
  {
    id: 'origins', eyebrow: 'EXPRESSION 01', title: 'Prehistoric Expressions',
    description: 'Begin where human stories were first painted into the earth. The rock shelters of Bhimbetka preserve striking traces of early imagination and expression.',
    highlights: ['Rock Shelters', 'Ancient Art', 'Human Origins'],
    image: '/heritage-assets/bhimbetka-concept.webp', imageAlt: 'Illustrative concept of ancient rock shelter paintings',
  },
  {
    id: 'sacred', eyebrow: 'EXPRESSION 02', title: 'Sacred Architecture',
    description: 'Explore the quiet majesty of Buddhist stupas and the intricate carvings of temple traditions—from Sanchi to Khajuraho.',
    highlights: ['Sanchi', 'Khajuraho', 'Stone Carvings'],
    image: '/heritage-assets/sanchi-concept.webp', imageAlt: 'Illustrative concept of Sanchi Stupa and its gateways',
  },
  {
    id: 'royal', eyebrow: 'EXPRESSION 03', title: 'Royal Forts & Palaces',
    description: 'Pass through the gates of history into soaring forts, graceful palaces and the royal silhouettes of Orchha, Mandu and Gwalior.',
    highlights: ['Gwalior', 'Orchha', 'Mandu'],
    image: '/heritage-assets/orchha-concept.webp', imageAlt: 'Illustrative concept of Orchha royal architecture',
  },
  {
    id: 'living', eyebrow: 'EXPRESSION 04', title: 'Living Arts & Heritage',
    description: 'Heritage is still made by hand. Witness the living craft traditions of historic towns, where creative knowledge passes across generations.',
    highlights: ['Chanderi Textiles', 'Artisan Stories', 'Historic Towns'],
    image: '/heritage-assets/carved-legacy.webp', imageAlt: 'Illustrative carved stone heritage artwork',
  },
];

/** The 12 approved primary-category Heritage entries. Images are CONCEPT ART. */
export const heritageDestinations: readonly HeritageDestination[] = [
  {slug:'khajuraho',name:'Khajuraho',teaser:'An extraordinary language of sculpture and temple artistry.',image:'/heritage-assets/khajuraho-concept.webp'},
  {slug:'orchha',name:'Orchha',teaser:'Riverside royal monuments and Bundela architecture.',image:'/heritage-assets/orchha-concept.webp'},
  {slug:'gwalior',name:'Gwalior',teaser:'A hilltop fortress and centuries of royal history.',image:'/heritage-assets/gwalior-concept.webp'},
  {slug:'mandu',name:'Mandu',teaser:'Palaces and historic landscapes upon the Malwa plateau.',image:'/heritage-assets/mandu-concept.webp'},
  {slug:'bhimbetka',name:'Bhimbetka',teaser:'Rock shelters and remarkable traces of early expression.',image:'/heritage-assets/bhimbetka-concept.webp'},
  {slug:'sanchi',name:'Sanchi',teaser:'An enduring masterpiece of Buddhist monumentality.',image:'/heritage-assets/sanchi-concept.webp'},
  {slug:'bhopal',name:'Bhopal',teaser:'Layered history and historic urban landscapes.'},
  {slug:'indore',name:'Indore',teaser:'Historic residences, markets and Maratha legacies.'},
  {slug:'chanderi',name:'Chanderi',teaser:'Fortifications, monuments and exquisite weaving.'},
  {slug:'burhanpur',name:'Burhanpur',teaser:'A rich legacy of architecture on the Tapti.'},
  {slug:'shivpuri',name:'Shivpuri',teaser:'Royal monuments and historic landscapes.'},
  {slug:'morena',name:'Morena',teaser:'Temples and architectural treasures of the Chambal region.'},
];
