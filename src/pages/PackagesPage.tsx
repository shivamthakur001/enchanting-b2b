import { useNavigate, useSearchParams } from "../router/Router";
import { packageCategoryLabels, packages } from "../data/packages";
import { offeringsNavigation } from "../data/navigation";
import { discoverThemes } from "../data/themes";
import { getDestination } from "../data/destinations";
import type { PackageCategory, TravelPackage } from "../types";
import {
  OfferingsPremiumView,
  type OfferingCardData,
  type OfferingCategoryLink,
} from "../components/offerings/OfferingsPremiumView";

const allFilters: OfferingCategoryLink[] = [
  { id: "all", label: "All Packages" },
  ...offeringsNavigation.flatMap((group) =>
    group.items.map((item) => ({ id: item.id, label: item.label }))
  ),
  ...discoverThemes.map((theme) => ({ id: theme.slug, label: theme.name })),
];

function getCategoryTone(pkg: TravelPackage): 'wildlife' | 'nature' | 'heritage' | 'spirituality' | 'inbound' {
  if (
    pkg.categories.includes("inbound") &&
    !pkg.categories.includes("wildlife") &&
    !pkg.categories.includes("nature") &&
    !pkg.categories.includes("heritage") &&
    !pkg.categories.includes("spirituality")
  ) {
    return "inbound";
  }
  const theme = pkg.themes[0];
  if (theme === "wildlife") return "wildlife";
  if (theme === "nature") return "nature";
  if (theme === "heritage") return "heritage";
  if (theme === "spirituality") return "spirituality";
  if (pkg.categories.includes("wildlife")) return "wildlife";
  if (pkg.categories.includes("nature")) return "nature";
  if (pkg.categories.includes("heritage")) return "heritage";
  if (pkg.categories.includes("spirituality")) return "spirituality";
  return "inbound";
}

function getCategoryLabel(pkg: TravelPackage): string {
  if (pkg.themes.length > 0) {
    const theme = discoverThemes.find((t) => t.slug === pkg.themes[0]);
    if (theme) return theme.name;
  }
  if (pkg.categories.length > 0) {
    const catLabel = packageCategoryLabels[pkg.categories[0]];
    if (catLabel) return catLabel;
  }
  return "Curated Tour";
}

function mapPackageToOfferingCardData(pkg: TravelPackage): OfferingCardData {
  const destinationsLabel = pkg.destinations
    .map((id) => getDestination(id)?.name ?? id)
    .filter(Boolean)
    .join(" · ");

  return {
    id: pkg.id,
    slug: pkg.slug,
    name: pkg.name,
    summary: pkg.summary,
    duration: pkg.duration,
    destinationsLabel,
    categoryLabel: getCategoryLabel(pkg),
    categoryTone: getCategoryTone(pkg),
    image: pkg.image,
    imageAlt: pkg.imageAlt,
    priceFrom: pkg.priceFrom,
    limitedOffer: pkg.limitedOffer,
    offerLabel: pkg.offerLabel,
    highlight: pkg.highlight,
  };
}

export function PackagesPage() {
  const params = useSearchParams();
  const navigate = useNavigate();
  const category = params.get("category") ?? "all";

  const filtered =
    category === "all"
      ? packages
      : packages.filter(
          (pkg) =>
            pkg.categories.includes(category as PackageCategory) ||
            pkg.themes.includes(category)
        );

  const cardData = filtered.map(mapPackageToOfferingCardData);

  return (
    <OfferingsPremiumView
      packages={cardData}
      categories={allFilters}
      activeCategory={category}
      onNavigate={navigate}
    />
  );
}
