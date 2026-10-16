import { Link } from "../../router/Router";
import type { Destination } from "../../types";
import { ArrowRightIcon } from "../icons/Icons";
import { PremiumTilt } from "../ui/PremiumTilt";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <PremiumTilt strength="normal" className="h-full">
      <Link
        to={`/destinations/${destination.slug}`}
        className="group block h-full overflow-hidden rounded-2xl bg-paper shadow-[var(--shadow-soft)] ring-1 ring-line transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-menu)] motion-reduce:transform-none"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 text-[11px] font-medium tracking-[0.12em] text-ivory/85 uppercase">
            {destination.region}
          </p>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-[22px] leading-tight text-ink">{destination.name}</h3>
            <ArrowRightIcon
              size={16}
              className="mt-1.5 text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-forest"
            />
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{destination.summary}</p>
        </div>
      </Link>
    </PremiumTilt>
  );
}

export function ThemeDestinationGrid({ destinations }: { destinations: Destination[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
