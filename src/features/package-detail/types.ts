export interface JourneyDay {
  dayLabel: string;
  title: string;
  body: string;
}

export interface JourneyFact {
  title: string;
  description: string;
}

export interface JourneyMedia {
  hero: string | null;
  banner?: PackageBanner;
  highlights: string[];
  itinerary: string[];
}

export interface PackageBanner {
  url?: string;
  bucket?: string;
  path?: string;
  alt?: string;
  focalPosition?: string;
  version?: string;
}

export interface PackageSourceInfo {
  workbook: string;
  revision: number;
  importMode: string;
}

export interface PublicPackage {
  schemaVersion: number;
  code: string;
  slug: string;
  title: string;
  durationDays: number;
  durationNights: number;
  nightsDerived: boolean;
  routeRaw: string;
  highlights: string[];
  itineraries: JourneyDay[];
  inclusions: string[];
  exclusions: string[];
  facts: JourneyFact[];
  publicNotes: string[];
  media: JourneyMedia;
  status: string;
  source: PackageSourceInfo;
  reviewFlags: string[];
}

export interface ResolvedPhoto {
  src: string;
  alt: string;
  isDemo?: boolean;
  source?: 'backend' | 'local-demo' | 'placeholder' | 'local-destination';
  focalPosition?: string;
  version?: string;
}

export interface PackagePhotoConfig {
  hero: ResolvedPhoto;
  heroPosition: string;
  highlights: ResolvedPhoto[];
  itinerary: ResolvedPhoto[];
}

/**
 * Dedicated contract for future backend-supplied day-wise itinerary photographs.
 * Accepts real image src, alt text, optional caption and stable day ID.
 * Strictly decoupled from local destination-gallery photos.
 */
export interface PackageDayPhoto {
  id?: string;
  src: string;
  alt: string;
  caption?: string;
}

export type PackageDayPhotoMap = Record<string, PackageDayPhoto[]>;
