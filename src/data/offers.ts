import type { LimitedOffer } from "../types";
import { media } from "./media";

export const limitedOffers: LimitedOffer[] = [
  {
    id: "shoulder-wildlife",
    title: "Shoulder-season lodge rates — Kanha & Bandhavgarh",
    summary: "Preferred-partner tariffs on selected jungle lodges for April–June arrivals.",
    validUntil: "30 Nov 2026",
    packageId: "kanha-bandhavgarh-circuit",
    image: media.tigerKanhaRest,
    tag: "Wildlife",
    active: true,
    destinationLabel: "Kanha & Bandhavgarh",
  },
  {
    id: "pachmarhi-stay",
    title: "Stay 3, pay 2 — Pachmarhi hill lodges",
    summary: "A quiet hill-station value add for FIT and small groups, midweek stays.",
    validUntil: "15 Dec 2026",
    packageId: "pachmarhi-retreat",
    image: media.pachmarhi,
    tag: "Nature",
    active: true,
    destinationLabel: "Pachmarhi",
  },
  {
    id: "panna-guide",
    title: "Complimentary temple scholar — Panna & Khajuraho",
    summary: "Private interpretation at the western group of temples with every 4-night pairing.",
    validUntil: "31 Jan 2027",
    packageId: "panna-khajuraho",
    image: media.khajuraho,
    tag: "Heritage",
    active: true,
    destinationLabel: "Panna & Khajuraho",
  },
  {
    id: "grand-tour-early",
    title: "Early-bird 2026 — Heartland Grand Tour",
    summary: "Locked 2025 rates for groups confirmed ninety days before arrival.",
    validUntil: "31 Mar 2027",
    packageId: "inbound-grand",
    image: media.heritageLobby,
    tag: "Inbound",
    active: true,
    destinationLabel: "Heartland Grand Tour",
  },
];

/**
 * Validates whether an offer is currently active.
 * Checks the active boolean flag (if present) and evaluates validity date.
 */
export function isOfferActive(offer: LimitedOffer): boolean {
  if (offer.active === false) return false;
  if (!offer.validUntil) return true;
  const expiry = Date.parse(offer.validUntil);
  if (isNaN(expiry)) return true;
  return expiry >= Date.now();
}

/**
 * Returns only currently active and unexpired limited time offers.
 */
export function getActiveOffers(): LimitedOffer[] {
  return limitedOffers.filter(isOfferActive);
}
