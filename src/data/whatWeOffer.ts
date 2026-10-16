const imgCustomFit = new URL("../../public/images/offer-custom-fit.jpg", import.meta.url).href;
const imgFamily = new URL("../../public/images/offer-family.jpg", import.meta.url).href;
const imgSeniorWomen = new URL("../../public/images/offer-senior-women.jpg", import.meta.url).href;
const imgFixedGroup = new URL("../../public/images/offer-fixed-group.jpg", import.meta.url).href;
const imgSic = new URL("../../public/images/offer-sic.jpg", import.meta.url).href;
const imgSpecialInterest = new URL("../../public/images/offer-special-interest.jpg", import.meta.url).href;
const imgSeasonal = new URL("../../public/images/offer-seasonal.jpg", import.meta.url).href;
const imgSchool = new URL("../../public/images/offer-school.jpg", import.meta.url).href;
const imgVip = new URL("../../public/images/offer-vip.jpg", import.meta.url).href;
const imgInbound = new URL("../../public/images/offer-inbound.jpg", import.meta.url).href;

export type OfferingId =
  | "customized-fit"
  | "family-special"
  | "senior-women"
  | "fixed-group"
  | "sic"
  | "special-interest"
  | "seasonal"
  | "school-college"
  | "vip"
  | "inbound"
  | "experiential";

export type ClientNeedId =
  | "custom-fit"
  | "group-departure"
  | "family"
  | "senior-women"
  | "education"
  | "special-interest"
  | "vip-inbound";

export interface Offering {
  id: OfferingId;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  suitableFor: string;
  notes: string[];
}

export interface ClientNeed {
  id: ClientNeedId;
  label: string;
  shortLabel: string;
  offeringIds: OfferingId[];
}

export const offerings: Offering[] = [
  {
    id: "customized-fit",
    title: "Customized FIT / Group Tours",
    category: "Private Travel",
    description:
      "Bespoke private itineraries for independent travellers and closed groups. Hotels, routing, and daily pacing are drawn from the client’s brief — heritage, wildlife, spiritual, or mixed circuits across Madhya Pradesh.",
    image: imgCustomFit,
    imageAlt:
      "Private travellers at the historic Narmada ghats in Maheshwar, Madhya Pradesh, at sunrise",
    suitableFor:
      "FIT clients, honeymooners, and private groups who need a closed, tailor-made programme.",
    notes: [
      "Itinerary, hotels, and vehicle built to brief — not a fixed departure.",
      "Private guiding and flexible pacing across heritage, wildlife, or spiritual circuits.",
      "Suitable for both independent travellers and closed custom groups.",
    ],
  },
  {
    id: "family-special",
    title: "Family Special Tours",
    category: "Family Travel",
    description:
      "Family programmes paced for mixed ages: connecting or family stays, a balance of wildlife and heritage, and ground logistics that keep children and elders equally considered.",
    image: imgFamily,
    imageAlt:
      "A multi-generational family walking through a sunlit palace courtyard in Orchha, Madhya Pradesh",
    suitableFor:
      "Multi-generational families and agents building shared-interest family holidays.",
    notes: [
      "Family rooms, connecting stays, and child-aware daily pacing.",
      "Wildlife and heritage balanced so younger and older travellers stay engaged.",
      "Ground handling planned around rest stops, meal timing, and rooming.",
    ],
  },
  {
    id: "senior-women",
    title: "Senior Citizen / Women Exclusive Fixed Groups",
    category: "Specialist Groups",
    description:
      "Comfort-first fixed groups for senior travellers and women-only departures. Slower pacing, accessible stays, medical-aware planning, and trusted senior- and women-sensitive ground support.",
    image: imgSeniorWomen,
    imageAlt:
      "An exclusive group of women travellers walking through a peaceful temple courtyard in Ujjain",
    suitableFor:
      "Senior citizen groups and women-exclusive fixed departures requiring extra care on the ground.",
    notes: [
      "Slower sightseeing, limited stair work, and rest built into the day.",
      "Accessible stay selection and medical-aware movement planning.",
      "Women-sensitive guiding and support on exclusive women’s groups.",
    ],
  },
  {
    id: "fixed-group",
    title: "Fixed Group Departures",
    category: "Group Travel",
    description:
      "Scheduled group departures with confirmed dates, set itineraries, and shared costing — built for agents who need sellable, departure-ready Madhya Pradesh programmes.",
    image: imgFixedGroup,
    imageAlt:
      "A guided group of travellers in the courtyard of Raja Mahal, Orchha, Madhya Pradesh",
    suitableFor:
      "Agents selling confirmed-date group programmes with shared costing.",
    notes: [
      "Published dates, set itinerary, and shared per-person costing.",
      "Departure-ready for retail and trade without custom planning.",
      "Group guiding, stays, and movement held as a single operation.",
    ],
  },
  {
    id: "sic",
    title: "SIC Departures",
    category: "Group Travel",
    description:
      "Seat-in-coach departures on popular Madhya Pradesh circuits. Shared vehicle, guide, and standardised inclusions for cost-efficient movement without a private charter.",
    image: imgSic,
    imageAlt:
      "Travellers boarding a shared tempo traveller beside a historic fort gateway in Madhya Pradesh",
    suitableFor:
      "Cost-sensitive FIT joiners and small parties who can travel on a shared vehicle.",
    notes: [
      "Seat-in-coach on established MP circuits — not a private vehicle.",
      "Shared guide and standardised inclusions to keep the cost lean.",
      "Useful when the client does not need a closed charter.",
    ],
  },
  {
    id: "special-interest",
    title: "Special Interest Tours",
    category: "Thematic Travel",
    description:
      "Theme-led programmes shaped around a defined interest — wildlife photography, architecture, tribal culture, textiles, cuisine, yoga, or pilgrimage — with specialist guiding where required.",
    image: imgSpecialInterest,
    imageAlt:
      "A Bengal tiger moving through sal forest at dawn in Kanha National Park, Madhya Pradesh",
    suitableFor:
      "Clients travelling for a single theme rather than a general sightseeing circuit.",
    notes: [
      "Programme built around one defined interest, not a mixed highlights tour.",
      "Specialist guiding arranged where the theme requires it.",
      "Wildlife, architecture, tribal, craft, cuisine, yoga, and pilgrimage briefs.",
    ],
  },
  {
    id: "seasonal",
    title: "Seasonal Tours",
    category: "Thematic Travel",
    description:
      "Time-bound programmes aligned to the Madhya Pradesh calendar: winter wildlife, monsoon hill retreats, festival circuits, and season-specific stay inventory.",
    image: imgSeasonal,
    imageAlt:
      "A monsoon waterfall in the misty green hills of Pachmarhi, Madhya Pradesh",
    suitableFor:
      "Clients whose travel window is driven by season, wildlife, or a festival date.",
    notes: [
      "Winter wildlife, monsoon hills, and festival-tied movements.",
      "Stay inventory and park logistics held to the travelling season.",
      "Not a year-round generic circuit — timing is the product.",
    ],
  },
  {
    id: "school-college",
    title: "School / College Tours",
    category: "Education Travel",
    description:
      "Educational group movements with curriculum-linked sightseeing, supervised transport, institutional billing, and campus-ready itineraries across heritage and wildlife sites.",
    image: imgSchool,
    imageAlt:
      "School and college students on an educational visit to the Great Stupa at Sanchi, Madhya Pradesh",
    suitableFor:
      "Schools, colleges, and institutions moving students as a supervised group.",
    notes: [
      "Curriculum-linked heritage and wildlife sightseeing.",
      "Supervised transport, rooming, and institutional billing.",
      "Itineraries paced for campus groups, not leisure FIT.",
    ],
  },
  {
    id: "vip",
    title: "VIP Guest Handling",
    category: "Premium Handling",
    description:
      "Discreet arrival-to-departure management for high-profile guests: private transfers, premium stay selection, and coordinated, low-visibility ground support.",
    image: imgVip,
    imageAlt:
      "A lantern-lit heritage palace courtyard prepared for a private guest arrival in Madhya Pradesh",
    suitableFor:
      "High-profile corporate and personal guests needing discreet, premium handling.",
    notes: [
      "Private transfers and low-visibility arrival and departure.",
      "Premium stay selection held to the guest’s profile.",
      "Coordinated ground support without a public group footprint.",
    ],
  },
  {
    id: "inbound",
    title: "Inbound FIT & GIT",
    category: "Inbound Operations",
    description:
      "Complete inbound handling for overseas FIT and GIT series — meet-and-greet, multilingual guiding, hotel contracting, and end-to-end ground operations in Madhya Pradesh.",
    image: imgInbound,
    imageAlt:
      "International travellers with a local guide at the temples of Khajuraho, Madhya Pradesh",
    suitableFor:
      "Overseas agents and operators sending FIT or GIT series into Madhya Pradesh.",
    notes: [
      "Meet-and-greet, multilingual guiding, and hotel contracting.",
      "FIT and GIT series handled as inbound ground operations.",
      "End-to-end movement across heritage and wildlife circuits.",
    ],
  },
  {
    id: "experiential",
    title: "Experiential travel solutions",
    category: "Thematic Travel",
    description:
      "Immersive, slower-paced encounters beyond standard sightseeing: village visits, craft workshops, cooking, wildlife walks, and living-heritage time on the ground.",
    image: imgSpecialInterest,
    imageAlt:
      "Chital deer on a sunlit forest path in Kanha National Park, suggesting a slower wildlife walk",
    suitableFor:
      "Clients who want immersion and making, not a packed sightseeing circuit.",
    notes: [
      "Village visits, craft, cooking, and wildlife walks over checklist tourism.",
      "Slower daily pacing with time left on the ground.",
      "Pairs with special-interest briefs when the theme is experiential.",
    ],
  },
];

export const clientNeeds: ClientNeed[] = [
  {
    id: "custom-fit",
    label: "Custom FIT",
    shortLabel: "Custom FIT",
    offeringIds: ["customized-fit"],
  },
  {
    id: "group-departure",
    label: "Group Departure",
    shortLabel: "Group",
    offeringIds: ["fixed-group", "sic"],
  },
  {
    id: "family",
    label: "Family",
    shortLabel: "Family",
    offeringIds: ["family-special"],
  },
  {
    id: "senior-women",
    label: "Senior / Women",
    shortLabel: "Senior",
    offeringIds: ["senior-women"],
  },
  {
    id: "education",
    label: "Education",
    shortLabel: "Education",
    offeringIds: ["school-college"],
  },
  {
    id: "special-interest",
    label: "Special Interest",
    shortLabel: "Interest",
    offeringIds: ["special-interest", "seasonal", "experiential"],
  },
  {
    id: "vip-inbound",
    label: "VIP / Inbound",
    shortLabel: "VIP",
    offeringIds: ["vip", "inbound"],
  },
];

export const offeringsById: Record<OfferingId, Offering> = offerings.reduce(
  (acc, offering) => {
    acc[offering.id] = offering;
    return acc;
  },
  {} as Record<OfferingId, Offering>,
);

export function getOfferingsForNeed(needId: ClientNeedId): Offering[] {
  const need = clientNeeds.find((item) => item.id === needId);
  if (!need) return [];
  return need.offeringIds.map((id) => offeringsById[id]);
}
