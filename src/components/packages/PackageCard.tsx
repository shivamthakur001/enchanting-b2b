import { Link } from "../../router/Router";
import type { TravelPackage } from "../../types";
import { CalendarIcon } from "../icons/Icons";
import { getDestination } from "../../data/destinations";
import { PremiumTilt } from "../ui/PremiumTilt";

export function PackageCard({ pkg }: { pkg: TravelPackage }) {
  const names = pkg.destinations
    .map((id) => getDestination(id)?.name)
    .filter(Boolean)
    .join(" · ");

  return (
    <PremiumTilt strength="normal" className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-paper shadow-[var(--shadow-soft)] ring-1 ring-line transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
          />
          {pkg.limitedOffer && (
            <span className="absolute top-3 left-3 rounded-md bg-[#c17a38] px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-white uppercase">
              {pkg.offerLabel ?? "Limited offer"}
            </span>
          )}
          {pkg.highlight && !pkg.limitedOffer && (
            <span className="absolute top-3 left-3 rounded-md bg-forest/90 px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-ivory uppercase">
              {pkg.highlight}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="flex items-center gap-1.5 text-[12px] text-ink-soft">
            <CalendarIcon size={13} /> {pkg.duration}
            {names && <span className="text-line">·</span>}
            <span className="truncate">{names}</span>
          </p>
          <h3 className="mt-2 font-display text-[22px] leading-tight text-ink">{pkg.name}</h3>
          <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-ink-muted">{pkg.summary}</p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <p className="text-[12px] text-ink-soft">
              From <span className="text-[15px] font-semibold text-ink">{pkg.priceFrom}</span>
              <span className="block text-[11px]">per person, twin share</span>
            </p>
            <Link
              to={`/create-query?package=${pkg.slug}`}
              className="inline-flex h-9 items-center rounded-md bg-forest px-3 text-[12px] font-semibold text-ivory hover:bg-forest-deep"
            >
              Enquire
            </Link>
          </div>
        </div>
      </article>
    </PremiumTilt>
  );
}

export function ThemePackageSection({
  title,
  packages,
}: {
  title: string;
  packages: TravelPackage[];
}) {
  if (packages.length === 0) return null;
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">For the trade</p>
          <h2 className="mt-1 font-display text-3xl text-ink">{title}</h2>
        </div>
        <Link to="/packages" className="hidden text-[13px] font-semibold text-forest hover:text-forest-deep sm:inline">
          View all packages →
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
