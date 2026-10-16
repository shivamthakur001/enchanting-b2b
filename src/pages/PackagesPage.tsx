import { Link, useSearchParams } from "../router/Router";
import { packageCategoryLabels, packages } from "../data/packages";
import { offeringsNavigation } from "../data/navigation";
import { PackageCard } from "../components/packages/PackageCard";
import type { PackageCategory } from "../types";
import { cn } from "../utils/cn";
import { discoverThemes } from "../data/themes";

const allFilters: { id: string; label: string }[] = [
  { id: "all", label: "All packages" },
  ...offeringsNavigation.flatMap((group) => group.items.map((item) => ({ id: item.id, label: item.label }))),
  ...discoverThemes.map((theme) => ({ id: theme.slug, label: theme.name })),
];

export function PackagesPage() {
  const params = useSearchParams();
  const category = params.get("category") ?? "all";

  const filtered =
    category === "all"
      ? packages
      : packages.filter((pkg) => pkg.categories.includes(category as PackageCategory) || pkg.themes.includes(category));

  const heading =
    category === "all"
      ? "All packages"
      : (packageCategoryLabels[category as PackageCategory] ??
        discoverThemes.find((t) => t.slug === category)?.name ??
        "Packages");

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">Our offerings</p>
      <h1 className="mt-2 font-display text-5xl text-ink">{heading}</h1>
      <p className="mt-3 max-w-2xl text-[15px] text-ink-muted">
        Programmes designed for inbound, FIT, special interest and group desks — filter by the way
        you sell.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {allFilters.map((filter) => (
          <Link
            key={filter.id}
            to={filter.id === "all" ? "/packages" : `/packages?category=${filter.id}`}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-[12.5px] font-medium ring-1 transition-colors",
              category === filter.id
                ? "bg-forest text-ivory ring-forest"
                : "bg-paper text-ink-muted ring-line hover:text-ink",
            )}
          >
            {filter.label}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-16 text-center text-ink-muted">No programmes in this category yet.</p>
      )}
    </div>
  );
}
