import { offeringsNavigation } from "../../data/navigation";
import { Link } from "../../router/Router";
import { ArrowRightIcon, ChevronRightIcon } from "../icons/Icons";

type OfferingsMenuProps = {
  id: string;
  onNavigate: () => void;
};

export function OfferingsMenu({ id, onNavigate }: OfferingsMenuProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Our offerings"
      className="nav-menu-surface w-[min(640px,calc(100vw-2rem))] overflow-hidden rounded-[18px] border"
    >
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
        {offeringsNavigation.map((group, index) => (
          <div
            key={group.id}
            className={`p-5 xl:p-6 ${index === 0 ? "sm:border-r sm:border-line" : ""}`}
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
              {group.label}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    onClick={onNavigate}
                    className="group flex items-start justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors duration-150 hover:bg-ivory"
                  >
                    <span>
                      <span className="block text-[14px] font-medium text-ink">{item.label}</span>
                      {item.description && (
                        <span className="mt-0.5 block text-[12px] leading-snug text-ink-soft">
                          {item.description}
                        </span>
                      )}
                    </span>
                    <ChevronRightIcon
                      size={14}
                      className="mt-1 shrink-0 text-ink-soft opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-5 py-3.5 xl:px-6">
        <Link
          to="/packages"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest hover:text-forest-deep"
        >
          View All Packages
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
