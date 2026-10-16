import { Link, useParams } from "../router/Router";
import { getDestination, getDestinationsByTheme } from "../data/destinations";
import { getTheme } from "../data/themes";
import { packages } from "../data/packages";
import { PackageCard } from "../components/packages/PackageCard";
import { MapPinIcon } from "../components/icons/Icons";

export function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestination(slug);

  if (!destination) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Destination not found</h1>
        <Link to="/" className="mt-6 inline-block text-forest">
          Return home
        </Link>
      </div>
    );
  }

  const related = packages.filter((pkg) => pkg.destinations.includes(destination.id));
  const theme = getTheme(destination.themes[0]);
  const nearby = getDestinationsByTheme(destination.themes[0])
    .filter((d) => d.id !== destination.id)
    .slice(0, 3);

  return (
    <div>
      <section className="relative min-h-[48vh] overflow-hidden">
        <img src={destination.image} alt={destination.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-[1440px] flex-col justify-end px-4 py-12 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ivory/75">
            <MapPinIcon size={14} /> {destination.region}
          </p>
          <h1 className="mt-2 font-display text-5xl text-ivory sm:text-6xl">{destination.name}</h1>
          <p className="mt-3 max-w-xl text-[16px] text-ivory/85">{destination.summary}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {destination.themes.map((t) => (
            <Link
              key={t}
              to={`/discover/${t}`}
              className="rounded-full bg-ivory px-3 py-1 text-[12px] font-medium capitalize text-forest ring-1 ring-line"
            >
              {t}
            </Link>
          ))}
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-3xl text-ink">Programmes including {destination.name}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </section>
        )}

        {nearby.length > 0 && theme && (
          <section className="mt-16">
            <h2 className="font-display text-3xl text-ink">More in {theme.name}</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {nearby.map((item) => (
                <li key={item.id}>
                  <Link to={`/destinations/${item.slug}`} className="flex items-center justify-between py-4 hover:text-forest">
                    <span>
                      <span className="block font-medium">{item.name}</span>
                      <span className="text-[13px] text-ink-soft">{item.region}</span>
                    </span>
                    <span className="text-[13px] text-ink-soft">View →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 rounded-2xl bg-forest-deep px-6 py-8 text-ivory sm:flex sm:items-center sm:justify-between">
          <p className="font-display text-2xl">Planning {destination.name} for a client?</p>
          <Link
            to={`/create-query?destination=${destination.slug}`}
            className="mt-4 inline-flex h-11 items-center rounded-md bg-ivory px-5 text-[13px] font-semibold text-forest-deep hover:bg-white sm:mt-0"
          >
            Create Query
          </Link>
        </div>
      </div>
    </div>
  );
}
