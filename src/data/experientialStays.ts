export interface ExperientialStay {
  id: string;
  name: string;
  location: string;
  stayType: string;
  shortDescription: string;
  experienceCues: string[];
  image: string;
  imageAlt: string;
  detailUrl?: string;
}

export const experientialStays: ExperientialStay[] = [
  {
    id: "ahilya-fort",
    name: "Ahilya Fort",
    location: "Maheshwar",
    stayType: "Riverside Heritage Retreat",
    shortDescription:
      "A living fort above the Narmada, where courtyards, candlelight and slow river mornings replace the ordinary idea of a hotel.",
    experienceCues: [
      "Heritage Character",
      "Riverside Calm",
      "Private Dining",
      "Slow Travel",
    ],
    image: "/images/luxury/stay-ahilya-fort.jpg",
    imageAlt: "Heritage fort terrace overlooking the Narmada river at golden hour",
  },
  {
    id: "jehan-numa-palace",
    name: "Jehan Numa Palace",
    location: "Bhopal",
    stayType: "Royal City Residence",
    shortDescription:
      "A nineteenth-century royal residence set within quiet gardens, carrying the unhurried grace of old Bhopal.",
    experienceCues: [
      "Royal Heritage",
      "Garden Courtyards",
      "Old-World Service",
      "City Calm",
    ],
    image: "/images/luxury/stay-jehan-numa.jpg",
    imageAlt: "Grand colonial-era heritage palace facade with manicured gardens",
  },
  {
    id: "reni-pani-jungle-lodge",
    name: "Reni Pani Jungle Lodge",
    location: "Satpura",
    stayType: "Wilderness Forest Lodge",
    shortDescription:
      "An intimate forest lodge on the fringes of Satpura, built for walking, listening and watching the wild at an unhurried pace.",
    experienceCues: [
      "Untamed Wilderness",
      "Walking Safaris",
      "Forest Silence",
      "Barefoot Luxury",
    ],
    image: "/images/luxury/stay-reni-pani.jpg",
    imageAlt: "Secluded wooden jungle lodge cottage in misty forest at dawn",
  },
  {
    id: "jamtara-wilderness-camp",
    name: "Jamtara Wilderness Camp",
    location: "Pench",
    stayType: "Tented Forest Camp",
    shortDescription:
      "Canvas, lantern light and the hush of the Pench forest — a camp designed around nightfall as much as the morning safari.",
    experienceCues: [
      "Tented Luxury",
      "Lantern Evenings",
      "Dawn Safaris",
      "Quiet Nights",
    ],
    image: "/images/luxury/stay-jamtara.jpg",
    imageAlt: "Luxury tented safari camp glowing with warm light at dusk",
  },
  {
    id: "samode-safari-lodge",
    name: "Samode Safari Lodge",
    location: "Bandhavgarh",
    stayType: "Private Safari Lodge",
    shortDescription:
      "A refined lodge on the edge of Bandhavgarh, pairing understated interiors with uninterrupted views of the forest beyond.",
    experienceCues: [
      "Private Verandas",
      "Tiger Territory",
      "Refined Interiors",
      "Golden-Hour Views",
    ],
    image: "/images/luxury/stay-samode.jpg",
    imageAlt: "Luxury safari lodge veranda overlooking dry forest landscape",
  },
];
