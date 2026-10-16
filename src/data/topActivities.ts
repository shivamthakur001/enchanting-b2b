import { media } from "./media";

export type ActivityMark = "wildlife" | "heritage" | "water" | "nature" | "river";

export interface TopActivity {
  id: string;
  title: string;
  destination: string;
  destinationSlug: string;
  location: string;
  duration: string;
  category: string;
  mark: ActivityMark;
  summary: string;
  image: string;
  imageAlt: string;
}

function cardImage(source: string) {
  return source.replace(/([?&]w=)\d+/, (_match, prefix: string) => `${prefix}960`);
}

export const topActivities: TopActivity[] = [
  {
    id: "kanha-wildlife-drive",
    title: "Kanha wildlife drive",
    destination: "Kanha",
    destinationSlug: "kanha",
    location: "Kanha · Mandla–Balaghat",
    duration: "Approx. 3–4 hours",
    category: "Wildlife",
    mark: "wildlife",
    summary: "A patient forest drive through sal and meadow country, with room for the landscape to set the pace.",
    image: cardImage(media.tigerKanhaWalk),
    imageAlt: "Bengal tiger moving through forest in Kanha",
  },
  {
    id: "orchha-heritage-walk",
    title: "Orchha heritage walk",
    destination: "Orchha",
    destinationSlug: "orchha",
    location: "Orchha · Bundelkhand",
    duration: "Approx. 2–3 hours",
    category: "Heritage",
    mark: "heritage",
    summary: "Palaces, temples and river-facing stories unfold at an unhurried walking pace.",
    image: cardImage(media.orchhaPalace),
    imageAlt: "Historic palace architecture in Orchha",
  },
  {
    id: "bhedaghat-boat-ride",
    title: "Bhedaghat boat ride",
    destination: "Bhedaghat",
    destinationSlug: "bhedaghat",
    location: "Bhedaghat · Narmada",
    duration: "Approx. 1–2 hours",
    category: "Water & river",
    mark: "water",
    summary: "Glide between marble cliffs and let the Narmada become the day's quiet centre.",
    image: cardImage(media.narmadaBoats),
    imageAlt: "Boats on the Narmada between the marble rocks of Bhedaghat",
  },
  {
    id: "pachmarhi-nature-trail",
    title: "Pachmarhi nature trail",
    destination: "Pachmarhi",
    destinationSlug: "pachmarhi",
    location: "Pachmarhi · Satpura Hills",
    duration: "Approx. 2–3 hours",
    category: "Nature",
    mark: "nature",
    summary: "Forest paths, highland air and open viewpoints make space for a slower kind of morning.",
    image: cardImage(media.pachmarhi),
    imageAlt: "Verdant hills and forest landscape around Pachmarhi",
  },
  {
    id: "maheshwar-riverside-stroll",
    title: "Maheshwar riverside stroll",
    destination: "Maheshwar",
    destinationSlug: "maheshwar",
    location: "Maheshwar · Narmada",
    duration: "Approx. 1–2 hours",
    category: "Riverside",
    mark: "river",
    summary: "Walk the ghats, watch the river change colour and linger with the town's handloom rhythm.",
    image: cardImage(media.maheshwar),
    imageAlt: "Colourful boats and the riverside townscape of Maheshwar",
  },
  {
    id: "sanchi-heritage-visit",
    title: "Sanchi heritage visit",
    destination: "Sanchi",
    destinationSlug: "sanchi",
    location: "Sanchi · Raisen",
    duration: "Approx. 2–3 hours",
    category: "Heritage",
    mark: "heritage",
    summary: "Stone gateways and a quiet hilltop setting invite a thoughtful visit shaped by deep time.",
    image: cardImage(media.sanchiStupa),
    imageAlt: "The Great Stupa at Sanchi beneath a clear sky",
  },
];
