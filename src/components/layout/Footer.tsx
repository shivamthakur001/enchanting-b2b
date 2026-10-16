import { Link } from "../../router/Router";
import { discoverThemes } from "../../data/themes";
import { aboutNavigation } from "../../data/navigation";
import { Logo } from "../logo/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-4 text-[13px] leading-relaxed text-ivory/65">
            A specialist destination management company for travel agents working Madhya Pradesh —
            parks, palaces, pilgrimages and the road between.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ivory/45 uppercase">Discover</p>
          <ul className="mt-3 space-y-2">
            {discoverThemes.map((theme) => (
              <li key={theme.slug}>
                <Link to={`/discover/${theme.slug}`} className="text-[13px] text-ivory/80 hover:text-ivory">
                  {theme.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ivory/45 uppercase">Trade</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/packages" className="text-[13px] text-ivory/80 hover:text-ivory">
                Our Offerings
              </Link>
            </li>
            <li>
              <Link to="/marketing-support" className="text-[13px] text-ivory/80 hover:text-ivory">
                Marketing Support
              </Link>
            </li>
            <li>
              <Link to="/offers" className="text-[13px] text-ivory/80 hover:text-ivory">
                Limited Time Offers
              </Link>
            </li>
            <li>
              <Link to="/create-query" className="text-[13px] text-ivory/80 hover:text-ivory">
                Create Query
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ivory/45 uppercase">Company</p>
          <ul className="mt-3 space-y-2">
            {aboutNavigation.map((item) => (
              <li key={item.id}>
                <Link to={item.href} className="text-[13px] text-ivory/80 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-4 text-[12px] text-ivory/45 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Enchanting Madhya Pradesh. For travel trade partners only.</p>
          <p>Heart of India · Exclusive B2B portal</p>
        </div>
      </div>
    </footer>
  );
}
