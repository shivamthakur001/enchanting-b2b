import type { DestinationDetailContent, DestinationPackage } from './destinationDetailTypes';
export type { DestinationDetailContent, DestinationPackage } from './destinationDetailTypes';

const a = (name: string) => `/destination-assets/bhedaghat/${name}.webp`;

export const bhedaghatContent: DestinationDetailContent = {
  id: 'bhedaghat',
  themeLabel: 'Nature',
  heroEyebrow: 'Nature Destination - Madhya Pradesh',
  title: 'Bhedaghat',
  subtitle: 'Where marble meets the Narmada -- soaring white cliffs, moonlit boat rides and the roaring Dhuandhar Falls.',
  heroImage: a('bhedaghat-hero'),
  tags: ['Marble Rocks', 'Narmada', 'Boat Ride', 'Waterfall', 'Jabalpur'],
  overview: {
    heading: 'The Marble Gorge of the Narmada',
    description: "Bhedaghat is one of India's most dramatic natural spectacles -- sheer marble cliffs rising 100 feet above the sacred Narmada river. A mesmerising boat ride through the gorge, the thundering Dhuandhar Falls and ancient Chausath Yogini temple make it an unmissable stop in any Madhya Pradesh itinerary.",
    cards: [
      { icon: 'users', label: 'Best For', text: 'Couples, Families, Heritage Circuits, Nature Groups' },
      { icon: 'leaf', label: 'The Mood', text: 'Dramatic, Serene, Spiritual, Awe-inspiring' },
      { icon: 'calendar', label: 'Ideal Duration', text: '1N / 2D or as a Day Trip from Jabalpur' },
      { icon: 'compass', label: 'Trade Suitability', text: 'FIT, Couples, Family & Central India Circuits' },
    ],
  },
  story: {
    heading: 'A River Between Marble Walls',
    paragraphs: [
      "Bhedaghat, located about 25 km from Jabalpur, is home to one of India's most stunning natural wonders -- a gorge carved over millennia by the sacred Narmada river through glittering white marble. The cliffs, which change colour from ivory to gold and rose as the light shifts, create an experience unlike anywhere else in India.",
      'The Dhuandhar Falls, where the Narmada crashes through a narrow rocky bed sending up great clouds of mist, sits at the head of the gorge. The ancient Chausath Yogini temple perched on a hilltop completes a journey that is at once natural, historical and deeply spiritual.',
    ],
    image: a('bhedaghat-story'),
    imageAlt: 'Marble cliffs glowing golden at dusk over the Narmada river',
    quote: 'A gorge where ancient marble glows at dusk, and the Narmada moves through silence and mist.',
  },
  access: [
    { icon: 'plane', label: 'By Air', text: 'Jabalpur Airport (Dumna Airport) is the nearest, about 30 km from Bhedaghat.' },
    { icon: 'train', label: 'By Rail', text: 'Jabalpur is a major railhead on the Mumbai-Howrah and Delhi-Chennai routes.' },
    { icon: 'car', label: 'By Road', text: 'Bhedaghat is well connected to Jabalpur by road; transfers available from Bhopal and other MP cities.' },
    { icon: 'pin', label: 'Local Transfer', text: 'Boat rides on the Narmada are arranged through the local authority; timings vary by season.' },
  ],
  travellers: [
    { icon: 'heart', name: 'Couples' }, { icon: 'users', name: 'Families' },
    { icon: 'luggage', name: 'Leisure FIT' }, { icon: 'footprints', name: 'Senior Travellers' },
    { icon: 'camera', name: 'Photography Groups' }, { icon: 'leaf', name: 'Nature Lovers' },
  ],
  cta: {
    heading: 'Plan a Bhedaghat Journey for Your Clients',
    description: 'Customised FIT, couple, family and heritage itineraries available for the Marble Rocks of the Narmada.',
  },
  fullGuide: [
    {
      title: 'The Marble Gorge and Narmada Boat Ride',
      points: [
        'The boat ride through the marble gorge is the defining experience -- best enjoyed in the morning or at dusk when the cliffs glow in shifting light.',
        'Moonlit boat rides are available on full-moon nights and are extremely popular; advance booking is recommended for groups.',
        'The gorge extends roughly 2 km; both motorised and rowing boats are available, subject to water levels.',
        'The Narmada here is a UNESCO-listed site of natural heritage value; advise guests on responsible conduct.',
      ],
    },
    {
      title: 'Dhuandhar Falls, Temples and Ropeway',
      points: [
        'Dhuandhar ("smoke cascade") Falls is where the Narmada plunges through a narrow rocky channel -- the mist is visible from a distance.',
        'A ropeway (cable car) operates across the gorge near the falls, providing a dramatic aerial view; confirm operational status before quoting.',
        'Chausath Yogini Temple, a 10th-century Kalachuri-era circular temple, sits atop a hill with commanding views of the gorge and river.',
        'Madan Mahal Fort in Jabalpur is a popular add-on from Bhedaghat.',
      ],
    },
    {
      title: 'Experiences and travel planning',
      points: [
        'Bhedaghat works as a day excursion from Jabalpur or as an overnight stay for a more immersive experience.',
        'October to March is the ideal travel window; monsoon can be visually dramatic but boat operations may be restricted.',
        'Combine with Kanha, Bandhavgarh or Pench for extended Central India wildlife circuits.',
        'Photography, heritage walks and marble handicraft shopping are popular leisure additions.',
      ],
    },
  ],
  quickFacts: [
    { label: 'Region', value: 'Narmada, Jabalpur', icon: 'pin' },
    { label: 'Ideal Stay', value: '1-2 Nights', icon: 'calendar' },
    { label: 'Best Season', value: 'Oct - Mar', icon: 'sun' },
    { label: 'Gorge Length', value: 'Approx 2 km', icon: 'mountain' },
    { label: 'Best For', value: 'Nature, Couples, Heritage', icon: 'leaf' },
  ],
  highlights: [
    { id: 'marble-gorge', name: 'Marble Gorge', category: 'Natural Wonder', description: 'Soaring white marble cliffs rising 100 feet above the sacred Narmada.', image: a('bhedaghat-marble-gorge') },
    { id: 'dhuandhar', name: 'Dhuandhar Falls', category: 'Waterfall', description: 'The thundering "smoke cascade" where the Narmada crashes through narrow rock.', image: a('bhedaghat-dhuandhar') },
    { id: 'boat-ride', name: 'Narmada Boat Ride', category: 'Experience', description: 'A magical glide through marble walls, especially at dusk or on full-moon nights.', image: a('bhedaghat-boat-ride') },
    { id: 'yogini-temple', name: 'Chausath Yogini Temple', category: 'Heritage', description: 'A rare 10th-century circular temple perched on a hilltop above the gorge.', image: a('bhedaghat-yogini') },
    { id: 'ropeway', name: 'Gorge Ropeway', category: 'Experience', description: 'A scenic cable car crossing above the gorge near the Dhuandhar Falls.', image: a('bhedaghat-ropeway') },
    { id: 'moonlit-ride', name: 'Moonlit Boat Ride', category: 'Signature Experience', description: 'A full-moon boat journey through glowing marble cliffs -- a once-in-a-lifetime experience.', image: a('bhedaghat-moonlit') },
  ],
  themes: [
    { id: 'marble', title: 'Marble Gorge & River', icon: 'mountain', image: a('theme-marble'), sights: ['Marble Gorge', 'Narmada Boat Ride', 'Moonlit Ride', 'Dhuandhar Falls'], note: 'The shimmering marble cliffs and the sacred Narmada create an experience that is both natural and deeply meditative.' },
    { id: 'waterfall', title: 'Waterfalls & Viewpoints', icon: 'leaf', image: a('theme-waterfall'), sights: ['Dhuandhar Falls', 'Gorge Ropeway', 'Riverbank Walk'], note: 'Dramatic cascades and aerial views make Bhedaghat a standout destination for nature and photography enthusiasts.' },
    { id: 'heritage', title: 'Heritage & Temples', icon: 'temple', image: a('theme-heritage'), sights: ['Chausath Yogini Temple', 'Madan Mahal Fort', 'Marble Handicrafts'], note: 'Ancient temple architecture and medieval forts blend with the natural landscape in this storied Narmada town.' },
    { id: 'photography', title: 'Photography & Nature', icon: 'camera', image: a('theme-photography'), sights: ['Gorge at Golden Hour', 'Dusk Boat Ride', 'Moonlit Reflections', 'Marble Textures'], note: "Changing light on marble, dramatic water and ancient stone make Bhedaghat one of Central India's finest photography destinations." },
  ],
  seasons: [
    { name: 'Winter', months: 'Oct - Feb', icon: 'snowflake', description: 'Cool and clear -- perfect conditions for the boat ride and outdoor exploration.', tag: 'Best Season', theme: 'blue' },
    { name: 'Summer', months: 'Mar - May', icon: 'sun', description: 'Warm but manageable; the gorge provides natural shade during boat rides.', tag: 'Good for FIT', theme: 'green' },
    { name: 'Monsoon', months: 'Jun - Sep', icon: 'cloud', description: 'The river rises and Dhuandhar is spectacular; boat operations may be restricted.', tag: 'Scenic Landscapes', theme: 'sky' },
    { name: 'Full Moon Nights', months: 'Year-round', icon: 'users', description: 'Moonlit boat rides through the marble gorge are available on full-moon nights.', tag: 'Signature Experience', theme: 'peach' },
  ],
  itineraries: [
    { id: '1n2d', title: '1N / 2D', summary: 'An immersive overnight stay to experience the gorge at different light conditions.', days: ['Day 1: Arrive Jabalpur, transfer to Bhedaghat, evening boat ride and Dhuandhar Falls.', 'Day 2: Morning gorge walk, Yogini Temple, marble market, depart Jabalpur.'] },
    { id: 'day-trip', title: 'Day Trip from Jabalpur', summary: 'A perfectly paced half-day or full-day excursion.', days: ['Morning: Narmada boat ride and marble gorge.', 'Midday: Dhuandhar Falls and ropeway.', 'Afternoon: Chausath Yogini Temple and return.'] },
    { id: 'central-india', title: 'Central India Circuit', summary: 'Combine Bhedaghat with Kanha, Bandhavgarh or Pench for an extended journey.', days: ['Start with Bhedaghat as the cultural opener.', 'Move to Kanha or Bandhavgarh for wildlife.', 'Customise nights based on travel pace and guest preference.'] },
  ],
};

/** DEMO ONLY: sample visual cards for the standalone preview. NOT real packages. */
export const demonstrationPackages: DestinationPackage[] = [
  { id: 'demo-marble', title: 'Bhedaghat Marble Gorge Escape', image: a('package-1'), duration: '2 Days / 1 Night', category: 'Nature - Preview' },
  { id: 'demo-couple', title: 'Narmada Moonlit Journey', image: a('package-2'), duration: '2 Days / 1 Night', category: 'Couples - Preview' },
  { id: 'demo-central', title: 'Central India Heritage Circuit', image: a('package-3'), duration: '6 Days / 5 Nights', category: 'Heritage - Preview' },
  { id: 'demo-wildlife', title: 'Marble Rocks & Kanha Combo', image: a('package-4'), duration: '5 Days / 4 Nights', category: 'Nature + Wildlife - Preview' },
];