import { Link } from "../../../router/Router";
import type { Destination } from "../../../types";
import { ArrowRightIcon } from "../../icons/Icons";
import { naturePageConfig } from "../../../config/naturePageConfig";

interface NatureDestinationsProps {
  destinations: Destination[];
}

export function NatureDestinations({ destinations }: NatureDestinationsProps) {
  // Identify featured and standard destinations for asymmetric layout
  const pachmarhi = destinations.find((d) => d.id === "pachmarhi") || destinations[0];
  const bhedaghat = destinations.find((d) => d.id === "bhedaghat") || destinations[1];
  const others = destinations.filter(
    (d) => d.id !== pachmarhi?.id && d.id !== bhedaghat?.id
  );

  return (
    <section
      id="nature-destinations"
      className="nature-destinations-section"
      aria-label="Nature Destinations in Madhya Pradesh"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="nature-hero__eyebrow">
              Sanctuaries of the Heartland
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--nature-ivory)]">
              Explore <br />
              <span className="italic text-[var(--nature-mist)]">Nature Destinations</span>
            </h2>
          </div>
          <p className="max-w-md text-[var(--nature-stone-light)] font-light text-[0.92rem] leading-relaxed">
            Trade-ready destinations with specialized accommodation, guided naturalists, and exceptional natural assets across Madhya Pradesh.
          </p>
        </div>

        {/* Asymmetric Editorial Mosaic Showcase */}
        <div className="nature-destinations-mosaic">
          {/* Featured Destination 1: Pachmarhi (Wide 7 cols) */}
          {pachmarhi && (
            <Link
              key={pachmarhi.id}
              to={`/destinations/${pachmarhi.slug}`}
              className="nature-dest-card nature-dest-card--featured group"
            >
              <img
                src={pachmarhi.image}
                alt={pachmarhi.imageAlt}
                className="nature-dest-card__media"
                loading="lazy"
              />
              <div className="nature-dest-card__overlay" />

              <div className="nature-dest-card__content">
                {naturePageConfig.destinations.showMetadata && (
                  <span className="nature-dest-card__region">
                    {pachmarhi.region || "Satpura Hills"} · Flagship Retreat
                  </span>
                )}

                <div className="nature-dest-card__title-row">
                  <h3 className="nature-dest-card__title">
                    {pachmarhi.name}
                  </h3>
                  <span className="nature-dest-card__arrow" aria-hidden="true">
                    <ArrowRightIcon size={14} />
                  </span>
                </div>

                {naturePageConfig.destinations.showDescription && (
                  <p className="nature-dest-card__summary max-w-xl">{pachmarhi.summary}</p>
                )}
              </div>
            </Link>
          )}

          {/* Featured Destination 2: Bhedaghat (5 cols) */}
          {bhedaghat && (
            <Link
              key={bhedaghat.id}
              to={`/destinations/${bhedaghat.slug}`}
              className="nature-dest-card nature-dest-card--secondary group"
            >
              <img
                src={bhedaghat.image}
                alt={bhedaghat.imageAlt}
                className="nature-dest-card__media"
                loading="lazy"
              />
              <div className="nature-dest-card__overlay" />

              <div className="nature-dest-card__content">
                {naturePageConfig.destinations.showMetadata && (
                  <span className="nature-dest-card__region">
                    {bhedaghat.region || "Narmada, Jabalpur"} · Marble Canyon
                  </span>
                )}

                <div className="nature-dest-card__title-row">
                  <h3 className="nature-dest-card__title">
                    {bhedaghat.name}
                  </h3>
                  <span className="nature-dest-card__arrow" aria-hidden="true">
                    <ArrowRightIcon size={14} />
                  </span>
                </div>

                {naturePageConfig.destinations.showDescription && (
                  <p className="nature-dest-card__summary">{bhedaghat.summary}</p>
                )}
              </div>
            </Link>
          )}

          {/* Supporting destinations */}
          {others.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.slug}`}
              className="nature-dest-card nature-dest-card--standard group"
            >
              <img
                src={dest.image}
                alt={dest.imageAlt}
                className="nature-dest-card__media"
                loading="lazy"
              />
              <div className="nature-dest-card__overlay" />

              <div className="nature-dest-card__content">
                {naturePageConfig.destinations.showMetadata && (
                  <span className="nature-dest-card__region">{dest.region}</span>
                )}

                <div className="nature-dest-card__title-row">
                  <h3 className="nature-dest-card__title">
                    {dest.name}
                  </h3>
                  <span className="nature-dest-card__arrow" aria-hidden="true">
                    <ArrowRightIcon size={14} />
                  </span>
                </div>

                {naturePageConfig.destinations.showDescription && (
                  <p className="nature-dest-card__summary">{dest.summary}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
