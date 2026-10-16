import { Link } from "../../../router/Router";
import type { TravelPackage } from "../../../types";
import { getDestination } from "../../../data/destinations";
import { CalendarIcon, ArrowRightIcon } from "../../icons/Icons";
import { naturePageConfig } from "../../../config/naturePageConfig";

interface NatureProgrammesProps {
  packages: TravelPackage[];
}

export function NatureProgrammes({ packages }: NatureProgrammesProps) {
  if (packages.length === 0) return null;

  return (
    <section className="nature-programmes-section" aria-label="Trade Nature Programmes">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="nature-hero__eyebrow">
              For the Trade
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--nature-ivory)]">
              Nature Programmes
            </h2>
          </div>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[var(--nature-sage)] hover:text-[var(--nature-ivory)] transition-colors uppercase"
          >
            <span>View All B2B Programmes</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Editorial Programmes Grid */}
        <div className="nature-programmes-grid">
          {packages.map((pkg) => {
            const destNames = pkg.destinations
              .map((id) => getDestination(id)?.name)
              .filter(Boolean)
              .join(" · ");

            return (
              <article key={pkg.id} className="nature-pkg-card">
                <div className="nature-pkg-card__media-wrap">
                  <img
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    className="nature-pkg-card__img"
                    loading="lazy"
                  />
                  {pkg.limitedOffer && (
                    <span className="nature-pkg-card__badge">
                      {pkg.offerLabel ?? "Trade Exclusive"}
                    </span>
                  )}
                  {pkg.highlight && !pkg.limitedOffer && (
                    <span className="nature-pkg-card__badge" style={{ backgroundColor: "var(--nature-forest)" }}>
                      {pkg.highlight}
                    </span>
                  )}
                </div>

                <div className="nature-pkg-card__body">
                  <div className="nature-pkg-card__meta">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon size={13} />
                      {pkg.duration}
                    </span>
                    {destNames && (
                      <>
                        <span className="opacity-40">·</span>
                        <span className="truncate">{destNames}</span>
                      </>
                    )}
                  </div>

                  <h3 className="nature-pkg-card__title">
                    {pkg.name}
                  </h3>

                  {naturePageConfig.programmes.showDescription && (
                    <p className="nature-pkg-card__summary">{pkg.summary}</p>
                  )}

                  <div className="nature-pkg-card__footer">
                    <div>
                      {naturePageConfig.programmes.showPrice && (
                        <>
                          <span className="nature-pkg-card__price-label block">From</span>
                          <span className="nature-pkg-card__price-amount">{pkg.priceFrom}</span>
                          <span className="block text-[10px] text-[#6c7870]">per person, twin share</span>
                        </>
                      )}
                    </div>

                    <Link
                      to={`/create-query?package=${pkg.slug}`}
                      className="nature-pkg-card__enquire-btn"
                    >
                      <span>Enquire</span>
                      <ArrowRightIcon size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
