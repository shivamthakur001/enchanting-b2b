import { marketingSupportNavigation } from "../../data/navigation";
import { Link } from "../../router/Router";
import { marketingIcons } from "../icons/Icons";

type MarketingSupportMenuProps = {
  id: string;
  onNavigate: () => void;
};

export function MarketingSupportMenu({ id, onNavigate }: MarketingSupportMenuProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Marketing support"
      className="nav-menu-surface w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-[18px] border py-3"
    >
      <p className="px-5 pb-1 text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
        Resource gallery
      </p>
      <ul>
        {marketingSupportNavigation.map((item) => {
          const Icon = marketingIcons[item.icon];
          return (
            <li key={item.id}>
              <Link
                to={item.href}
                onClick={onNavigate}
                className="mx-2 flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-ivory"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-cream text-forest">
                  <Icon size={15} />
                </span>
                <span>
                  <span className="block text-[14px] font-medium text-ink">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 block text-[12px] leading-snug text-ink-soft">
                      {item.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
