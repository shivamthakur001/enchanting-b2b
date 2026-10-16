export type ThemeSlug = string;

export type Destination = {
  id: string;
  slug: string;
  name: string;
  region: string;
  summary: string;
  image: string;
  imageAlt: string;
  themes: ThemeSlug[];
  featured?: boolean;
};

export type ThemeVisual = {
  accent: string;
  accentSoft: string;
  overlay: string;
  background: string;
  eyebrow: string;
};

export type DiscoverTheme = {
  slug: ThemeSlug;
  name: string;
  shortDescription: string;
  microcopy: string;
  previewCaption: string;
  previewImage: string;
  previewImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  featuredDestinationIds: string[];
  packageCategory: string;
  visual: ThemeVisual;
  seoTitle: string;
  seoDescription: string;
};

export type PackageCategory =
  | "inbound"
  | "fit"
  | "special-interest"
  | "group"
  | "school"
  | "college"
  | "wildlife"
  | "heritage"
  | "nature"
  | "spirituality";

export type TravelPackage = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  duration: string;
  destinations: string[];
  categories: PackageCategory[];
  themes: ThemeSlug[];
  image: string;
  imageAlt: string;
  priceFrom: string;
  highlight?: string;
  limitedOffer?: boolean;
  offerLabel?: string;
};

export type NavLinkItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type OfferingGroup = {
  id: string;
  label: string;
  items: NavLinkItem[];
};

export type MarketingCategory = "pictures" | "reels" | "destination-flyers" | "package-flyers";

export type MarketingAsset = {
  id: string;
  title: string;
  category: MarketingCategory;
  destination?: string;
  typeLabel: string;
  image: string;
  updated: string;
};

export type LimitedOffer = {
  id: string;
  title: string;
  summary: string;
  validUntil: string;
  packageId?: string;
  image: string;
  tag: string;
  active?: boolean;
  destinationLabel?: string;
};
