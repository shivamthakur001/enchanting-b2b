import { aboutNavigation } from "../../data/navigation";
import { Link } from "../../router/Router";
import { ChevronRightIcon } from "../icons/Icons";

type AboutMenuProps = {
  id: string;
  onNavigate: () => void;
};

export function AboutMenu({ id, onNavigate }: AboutMenuProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="About us"
      className="nav-menu-surface w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-[18px] border py-3"
    >
      <ul>
        {aboutNavigation.map((item) => (
          <li key={item.id}>
            <Link
              to={item.href}
              onClick={onNavigate}
              className="group mx-2 flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-ivory"
            >
              <span>
                <span className="block text-[14px] font-medium text-ink">{item.label}</span>
                {item.description && (
                  <span className="mt-0.5 block text-[12px] text-ink-soft">{item.description}</span>
                )}
              </span>
              <ChevronRightIcon
                size={14}
                className="text-ink-soft opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
