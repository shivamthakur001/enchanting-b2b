/**
 * Destination registry — add one imported content object per approved destination.
 * Do not change existing React layout, CSS, Navbar or footer.
 * Production routing opts into this registry only for slugs listed here.
 */
import type { DestinationDetailContent } from './destinationDetailTypes';
import { pachmarhiContent } from './pachmarhiContent';
import { bhedaghatContent } from './bhedaghatContent';

export const destinationRegistry: Record<string, DestinationDetailContent> = {
  pachmarhi: pachmarhiContent,
  bhedaghat: bhedaghatContent,
  // pench: penchContent,            // add after content + media are ready
  // kanha: kanhaContent,
  // khajuraho: khajurahoContent,
  // ujjain: ujjainContent,
};

export function getPremiumDestination(slug: string | undefined): DestinationDetailContent | undefined {
  if (!slug) return undefined;
  return destinationRegistry[slug.toLowerCase()];
}
