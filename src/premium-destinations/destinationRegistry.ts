/**
 * Destination registry — add one imported content object per approved destination.
 * Do not change existing React layout, CSS, Navbar or footer.
 * Production routing opts into this registry only for slugs listed here.
 */
import type { DestinationDetailContent } from './destinationDetailTypes';
import { pachmarhiContent } from './pachmarhiContent';
import { bhedaghatContent } from './bhedaghatContent';
import { tawaContent } from './tawaContent';
import { tamiaContent } from './tamiaContent';
import { sailaniIslandContent } from './sailaniIslandContent';
import { hanuwantiyaContent } from './hanuwantiyaContent';
import { rewaContent } from './rewaContent';
import { patalkotContent } from './patalkotContent';
import { ranehFallsContent } from './ranehFallsContent';
import { alirajpurContent } from './alirajpurContent';
import { gulawatContent } from './gulawatContent';
import { janapavContent } from './janapavContent';
import { khajurahoContent } from './khajurahoContent';
import { indoreContent } from './indoreContent';
import { sanchiContent } from './sanchiContent';
import { chanderiContent } from './chanderiContent';
import { bhimbetkaContent } from './bhimbetkaContent';
import { orchhaContent } from './orchhaContent';
import { gwaliorContent } from './gwaliorContent';
import { manduContent } from './manduContent';
import { bhopalContent } from './bhopalContent';
import { burhanpurContent } from './burhanpurContent';
import { shivpuriContent } from './shivpuriContent';
import { morenaContent } from './morenaContent';

export const destinationRegistry: Record<string, DestinationDetailContent> = {
  pachmarhi: pachmarhiContent,
  bhedaghat: bhedaghatContent,
  tawa: tawaContent,
  tamia: tamiaContent,
  'sailani-island': sailaniIslandContent,
  hanuwantiya: hanuwantiyaContent,
  rewa: rewaContent,
  patalkot: patalkotContent,
  'raneh-falls': ranehFallsContent,
  alirajpur: alirajpurContent,
  gulawat: gulawatContent,
  janapav: janapavContent,
  khajuraho: khajurahoContent,
  indore: indoreContent,
  sanchi: sanchiContent,
  chanderi: chanderiContent,
  bhimbetka: bhimbetkaContent,
  orchha: orchhaContent,
  gwalior: gwaliorContent,
  mandu: manduContent,
  bhopal: bhopalContent,
  burhanpur: burhanpurContent,
  shivpuri: shivpuriContent,
  morena: morenaContent,
  // pench: penchContent,            // add after content + media are ready
  // kanha: kanhaContent,
  // ujjain: ujjainContent,
};

export function getPremiumDestination(slug: string | undefined): DestinationDetailContent | undefined {
  if (!slug) return undefined;
  return destinationRegistry[slug.toLowerCase()];
}
