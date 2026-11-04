/**
 * View-only normalization for the compact package page.
 * Does not load data, infer prices, produce new trip facts, or read local image folders.
 * Source-of-truth remains the existing public-safe package repository / Supabase adapter.
 */
export type CompactPhoto = {
  src: string;
  alt: string;
  id?: string;
  caption?: string;
};

export type CompactFact = { title: string; description: string };
export type CompactDay = {
  id: string;
  label: string;
  title: string;
  body: string;
  photos: CompactPhoto[];
};

export type CompactPackage = {
  code: string;
  slug: string;
  title: string;
  route: string;
  durationDays: number | null;
  durationNights: number | null;
  overview: string | null;
  hero: CompactPhoto | null;
  facts: CompactFact[];
  highlights: string[];
  days: CompactDay[];
  inclusions: string[];
  exclusions: string[];
  publicNotes: string[];
};

export type CompactMediaOverrides = {
  /** Explicitly approved banner image, normally Supabase Storage URL. */
  banner?: CompactPhoto | null;
  /** Photos keyed by stable day ID, backend day label (e.g. Day 01), or 1-based day number. */
  dayPhotos?: Record<string, CompactPhoto[]>;
};

type Bag = Record<string, unknown>;
const obj = (v: unknown): Bag =>
  typeof v === 'object' && v !== null && !Array.isArray(v) ? (v as Bag) : {};
const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');
const integer = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) && Number.isInteger(v) && v >= 0 ? v : null;
const strList = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(str).filter(Boolean) : [];
const readPhoto = (v: unknown): CompactPhoto | null => {
  if (typeof v === 'string') {
    const value = str(v);
    return value ? { src: value, alt: '' } : null;
  }
  const data = obj(v);
  const src = str(data.src) || str(data.url);
  if (!src || !/^(https?:\/\/|\/)/i.test(src)) return null;
  return { src, alt: str(data.alt), id: str(data.id) || undefined, caption: str(data.caption) || undefined };
};
const readPhotos = (v: unknown): CompactPhoto[] =>
  Array.isArray(v) ? v.map(readPhoto).filter((p): p is CompactPhoto => p !== null) : [];

/**
 * Converts the project's public package content into a stable view-only contract.
 * Internal Supabase table names, authentication and private quote data are intentionally absent.
 */
export function adaptCompactPackage(input: unknown, media: CompactMediaOverrides = {}): CompactPackage {
  const data = obj(input);
  // A package's public legacy media.hero might still point to a local photo fallback.
  // Require a deliberately resolved backend banner (or explicitly approved pilot demo)
  // from the wrapper, so production never silently reuses a destination image.
  const hero = media.banner ? readPhoto(media.banner) : null;
  const rawDays = Array.isArray(data.itineraries) ? data.itineraries : [];
  const days: CompactDay[] = rawDays.map((entry, index) => {
    const day = obj(entry);
    const label = str(day.dayLabel) || `Day ${String(index + 1).padStart(2, '0')}`;
    const id = str(day.id) || label;
    const override = media.dayPhotos?.[id] ?? media.dayPhotos?.[label] ?? media.dayPhotos?.[String(index + 1)];
    return {
      id,
      label,
      title: str(day.title),
      body: str(day.body),
      // Only explicitly provided day media; NO destination-gallery or local-photo guessing.
      photos: override !== undefined ? readPhotos(override) : readPhotos(day.photos),
    };
  });
  const rawFacts = Array.isArray(data.facts) ? data.facts : [];
  const facts = rawFacts
    .map((f): CompactFact => {
      const fact = obj(f);
      return { title: str(fact.title), description: str(fact.description) };
    })
    .filter((f) => f.title || f.description);
  return {
    code: str(data.code),
    slug: str(data.slug),
    title: str(data.title),
    route: str(data.routeRaw) || str(data.route),
    durationDays: integer(data.durationDays),
    durationNights: integer(data.durationNights),
    // No overview fabricated from route; show only if supplied by the backend/source.
    overview: str(data.overview) || str(data.summary) || null,
    hero,
    facts,
    highlights: strList(data.highlights),
    days,
    inclusions: strList(data.inclusions),
    exclusions: strList(data.exclusions),
    // Only public-safe note list. Do NOT use raw 'pleaseNote' private workbook rows.
    publicNotes: strList(data.publicNotes),
  };
}
