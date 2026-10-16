export interface PremiumPackage {
  id: string;
  title: string;
  category: string;
  duration: string;
  nights: number;
  route: string[];
  shortDescription: string;
  signatureCues: string[];
  image: string;
  imageAlt: string;
  journeyDesignUrl?: string;
  proposalUrl?: string;
  featured?: boolean;
}

export const premiumPackages: PremiumPackage[] = [
  {
    id: "royal-river-fort-retreat",
    title: "Royal River & Fort Retreat",
    category: "Royal & Riverside",
    duration: "6 Days / 5 Nights",
    nights: 5,
    route: ["Maheshwar", "Mandu", "Ujjain"],
    shortDescription:
      "Private heritage stays, river moments and slow architectural immersion through the royal courts of Malwa.",
    signatureCues: [
      "Private Fort Stays",
      "Narmada River Evenings",
      "Heritage Walks",
      "Slow Pacing",
    ],
    image: "/images/luxury/pkg-royal-river.jpg",
    imageAlt: "Royal heritage fort and ghats beside a calm river at golden hour",
    featured: true,
  },
  {
    id: "wilderness-lodge-escape",
    title: "Wilderness & Lodge Escape",
    category: "Wild & Secluded",
    duration: "5 Days / 4 Nights",
    nights: 4,
    route: ["Pench", "Satpura"],
    shortDescription:
      "Two private forest lodges, unhurried safaris and long, quiet evenings beneath an untouched canopy.",
    signatureCues: [
      "Private Safaris",
      "Forest Lodges",
      "Naturalist Led",
      "Barefoot Luxury",
    ],
    image: "/images/luxury/pkg-wilderness-lodge.jpg",
    imageAlt: "Misty dense jungle landscape at dawn",
  },
  {
    id: "sacred-mp-prive",
    title: "Sacred Madhya Pradesh Privé",
    category: "Sacred & Still",
    duration: "5 Days / 4 Nights",
    nights: 4,
    route: ["Ujjain", "Omkareshwar", "Maheshwar"],
    shortDescription:
      "A private passage through temple towns and riverside shrines, paced for reflection rather than sightseeing.",
    signatureCues: [
      "Private Darshan",
      "River Rituals",
      "Temple Towns",
      "Quiet Mornings",
    ],
    image: "/images/luxury/pkg-sacred-mp.jpg",
    imageAlt: "Ancient sacred temple spires at golden hour",
  },
  {
    id: "grand-curated-mp",
    title: "Grand Curated Madhya Pradesh",
    category: "The Complete Chapter",
    duration: "10 Days / 9 Nights",
    nights: 9,
    route: ["Bhopal", "Maheshwar", "Mandu", "Pench", "Bandhavgarh"],
    shortDescription:
      "Our most complete private itinerary — royal residences, riverside forts and two wilderness lodges woven into one slow journey.",
    signatureCues: [
      "Royal Residences",
      "Two Wilderness Lodges",
      "Private Transfers",
      "End-to-End Design",
    ],
    image: "/images/luxury/pkg-grand-curated.jpg",
    imageAlt: "Rolling hills, a heritage fort silhouette and a soft river at golden hour",
  },
];
