/** Shared data contract — same UI for Nature, Heritage, Wildlife, Spirituality.
 * Create one content file per destination; do not copy the JSX or CSS. */
import type { DestinationDetailDesign } from './destinationDetailConfig';
/** All content and images are replaceable without changing layout/components. */
export interface DestinationHighlight {
  id: string; name: string; category: string; description: string; image: string;
}
export interface DestinationTheme {
  id: string; title: string; icon: string; image: string; sights: string[]; note: string;
}
export interface DestinationSeason {
  name: string; months: string; icon: string; description: string; tag: string; theme: string;
}
export interface DestinationItinerary {
  id: string; title: string; summary: string; days: string[];
}
export interface DestinationPackage {
  /** Use real package ID from project's packages.ts */
  id: string;
  title: string;
  image: string;
  duration?: string;
  category?: string;
  /** Optional real route. Only provided by the host B2B app. */
  href?: string;
}
export interface DestinationDetailContent {
  id: string; title: string; subtitle: string; heroImage: string;
  /** Label used in breadcrumb and hero, e.g. Nature, Heritage, Wildlife. */
  themeLabel?: string;
  /** Optional override for hero eyebrow, e.g. Nature Destination · Madhya Pradesh. */
  heroEyebrow?: string;
  /** Defaults to heroImage; can be independent for final CTA. */
  ctaBackgroundImage?: string;
  tags: string[];
  quickFacts: { label: string; value: string; icon: string }[];
  highlights: DestinationHighlight[];
  themes: DestinationTheme[];
  seasons: DestinationSeason[];
  /** Archived layout content; not rendered in the approved template. */
  itineraries?: DestinationItinerary[];
  overview: {
    heading: string; description: string;
    cards: Array<{ icon: string; label: string; text: string }>;
  };
  /** Archived story content; the editorial story section has been removed. */
  story?: { heading: string; paragraphs: string[]; image: string; imageAlt: string; quote: string };
  access: Array<{ icon: string; label: string; text: string }>;
  /** Archived traveller cards; not rendered in the approved template. */
  travellers?: Array<{ icon: string; name: string }>;
  cta: { heading: string; description: string };
  fullGuide?: Array<{ title: string; points: string[] }>;
  /** Optional destination-specific visual overrides (e.g. heroImagePosition, accent colors). */
  customDesign?: Partial<DestinationDetailDesign>;
}
