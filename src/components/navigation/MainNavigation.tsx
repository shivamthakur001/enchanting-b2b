import { useEffect, useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { NavLink, usePathname } from "../../router/Router";
import { ChevronDownIcon } from "../icons/Icons";
import { DiscoverMegaMenu } from "./DiscoverMegaMenu";
import { OfferingsMenu } from "./OfferingsMenu";
import { AboutMenu } from "./AboutMenu";
import { MarketingSupportMenu } from "./MarketingSupportMenu";
import { MENU_CLOSE_DELAY_MS } from "../../data/navigation";

export type MenuKey = "discover" | "offerings" | "about" | "marketing";

type MainNavigationProps = {
  compact: boolean;
  openMenu: MenuKey | null;
  setOpenMenu: (menu: MenuKey | null) => void;
};

const items: { key: MenuKey; label: string; match: (path: string) => boolean }[] = [
  { key: "discover", label: "Discover", match: (p) => p.startsWith("/discover") || p.startsWith("/destinations") },
  { key: "offerings", label: "Our Offerings", match: (p) => p.startsWith("/packages") },
  { key: "about", label: "About Us", match: (p) => p.startsWith("/about") },
  { key: "marketing", label: "Marketing Support", match: (p) => p.startsWith("/marketing-support") },
];

export function MainNavigation({ compact, openMenu, setOpenMenu }: MainNavigationProps) {
  const pathname = usePathname();
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), MENU_CLOSE_DELAY_MS);
  };

  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname, setOpenMenu]);

  return (
    <nav aria-label="Primary" className="hidden lg:flex lg:items-center">
      <ul className={cn("flex items-center", compact ? "gap-0.5" : "gap-1")}>
        <li>
          <NavLink
            to="/"
            exact
            className={(active) =>
              cn(
                "nav-underline inline-flex h-10 items-center px-2.5 text-[14px] font-medium tracking-[0.01em] nav-text-muted transition-colors duration-150 nav-text-hover xl:px-3 xl:text-[14.5px]",
                active && "nav-text-active",
              )
            }
            data-active={pathname === "/" ? "true" : "false"}
          >
            Home
          </NavLink>
        </li>
        {items.map((item) => (
          <DropdownItem
            key={item.key}
            itemKey={item.key}
            label={item.label}
            active={item.match(pathname)}
            open={openMenu === item.key}
            compact={compact}
            onOpen={() => {
              cancelClose();
              setOpenMenu(item.key);
            }}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMenu(null)}
          >
            {item.key === "discover" && (
              <DiscoverMegaMenu id="discover-megamenu" open={openMenu === "discover"} onNavigate={() => setOpenMenu(null)} />
            )}
            {item.key === "offerings" && (
              <OfferingsMenu id="offerings-megamenu" onNavigate={() => setOpenMenu(null)} />
            )}
            {item.key === "about" && <AboutMenu id="about-megamenu" onNavigate={() => setOpenMenu(null)} />}
            {item.key === "marketing" && (
              <MarketingSupportMenu id="marketing-megamenu" onNavigate={() => setOpenMenu(null)} />
            )}
          </DropdownItem>
        ))}
      </ul>
    </nav>
  );
}

function DropdownItem({
  itemKey,
  label,
  active,
  open,
  compact,
  onOpen,
  onScheduleClose,
  onClose,
  children,
}: {
  itemKey: MenuKey;
  label: string;
  active: boolean;
  open: boolean;
  compact: boolean;
  onOpen: () => void;
  onScheduleClose: () => void;
  onClose: () => void;
  children: ReactNode;
}) {
  const buttonId = useId();
  const menuId = `${itemKey}-megamenu`;
  const isDiscover = itemKey === "discover";

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      onClose();
      (event.currentTarget as HTMLButtonElement).focus();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      onOpen();
      requestAnimationFrame(() => {
        const firstLink = document.querySelector<HTMLElement>(`#${menuId} a, #${menuId} button`);
        firstLink?.focus();
      });
    }
  };

  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onScheduleClose}>
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => (open ? onClose() : onOpen())}
        onFocus={onOpen}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          "nav-underline inline-flex h-10 items-center gap-1 px-2.5 text-[14px] font-medium tracking-[0.01em] transition-colors duration-150 xl:px-3 xl:text-[14.5px]",
          open || active ? "nav-text-active" : "nav-text-muted nav-text-hover",
        )}
        data-active={open || active ? "true" : "false"}
      >
        {label}
        <ChevronDownIcon
          size={13}
          className={cn(
            "text-current opacity-60 transition-transform duration-200 motion-reduce:transition-none",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "z-50 pt-3 transition-opacity duration-200 motion-reduce:transition-none",
          isDiscover
            ? "fixed left-1/2 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2"
            : "absolute left-0 top-11",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        style={isDiscover ? { top: compact ? 52 : 100 } : undefined}
        aria-hidden={!open}
      >
        {children}
      </div>
    </li>
  );
}
