import type { Destination } from "../types";
import { destinations } from "./destinations";

const topDestinationSlugs = [
  "orchha",
  "kanha",
  "ujjain",
  "bhedaghat",
  "khajuraho",
] as const;

const leadSlugs = new Set<string>(topDestinationSlugs);
const leadDestinations = topDestinationSlugs
  .map((slug) => destinations.find((destination) => destination.slug === slug))
  .filter((destination): destination is Destination => Boolean(destination));
const remainingDestinations = destinations.filter((destination) => !leadSlugs.has(destination.slug));

export const topDestinations: Destination[] = [...leadDestinations, ...remainingDestinations];
