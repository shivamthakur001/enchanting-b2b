import { Link } from "../router/Router";
import { limitedOffers } from "../data/offers";
import { getLimitedOfferPackages } from "../data/packages";
import { PackageCard } from "../components/packages/PackageCard";
import { ClockIcon } from "../components/icons/Icons";
import { PremiumTilt } from "../components/ui/PremiumTilt";

export function OffersPage() {
  const offerPackages = getLimitedOfferPackages();

  return (
    <div>
      <section className="bg-gradient-to-br from-[#3a2716] to-[#1c1610] text-ivory">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#e0b07a] uppercase">
            <ClockIcon size={13} /> Limited time
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Offers currently on the desk</h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Seasonal tariffs, value-adds and early-bird holds — extended to credentialed partners,
            never shouted from the homepage banner.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {limitedOffers.map((offer) => (
            <PremiumTilt key={offer.id} strength="normal" className="h-full">
              <article className="h-full overflow-hidden rounded-2xl bg-paper ring-1 ring-line md:flex">
                <div className="md:w-44 md:shrink-0">
                  <img src={offer.image} alt="" className="h-40 w-full object-cover md:h-full" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-saffron-deep uppercase">
                    {offer.tag}
                  </p>
                  <h2 className="mt-1 font-display text-2xl leading-tight text-ink">{offer.title}</h2>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{offer.summary}</p>
                  <p className="mt-3 text-[12px] text-ink-soft">Valid until {offer.validUntil}</p>
                  <Link
                    to="/create-query"
                    className="mt-4 inline-flex h-9 items-center rounded-md bg-[#c17a38] px-3 text-[12px] font-semibold text-white hover:bg-[#b06c30]"
                  >
                    Request this offer
                  </Link>
                </div>
              </article>
            </PremiumTilt>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl text-ink">Programmes carrying an offer</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offerPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
