import { useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Link, NavLink, useNavigate, usePathname } from "../../router/Router";
import { discoverThemes } from "../../data/themes";
import { getDestinationsByIds } from "../../data/destinations";
import { aboutNavigation, marketingSupportNavigation, offeringsNavigation } from "../../data/navigation";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, marketingIcons } from "../icons/Icons";
import { CreateQueryButton } from "./CreateQueryButton";
import { OffersButton } from "./OffersButton";
import { Logo } from "../logo/Logo";
import { currentAgent } from "./AccountMenu";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  const handleSectionLink = (sectionId: string) => {
    if (pathname === "/") {
      navigate(`/#${sectionId}`);
      requestAnimationFrame(() => scrollToSection(sectionId));
      return;
    }

    navigate("/");
    window.setTimeout(() => scrollToSection(sectionId), 120);
    onClose();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/40 transition-opacity duration-200 motion-reduce:transition-none",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "nav-menu-surface absolute inset-y-0 right-0 flex w-[min(100%,400px)] flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <Logo compact />
          <button
            type="button"
            onClick={onClose}
            className="nav-text flex h-10 w-10 items-center justify-center rounded-full nav-hover-bg"
            aria-label="Close menu"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          <NavLink
            to="/"
            exact
            onClick={onClose}
            className={(active) =>
              cn(
                "flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium",
                active ? "bg-ivory text-forest-deep" : "text-ink hover:bg-cream",
              )
            }
          >
            Home
          </NavLink>

          <Accordion title="Discover" defaultOpen={pathname.startsWith("/discover") || pathname.startsWith("/destinations")}>
            <div className="pb-2">
              <TopDestinationsAccordion onClose={onClose} />
            </div>
            <QuickLink label="Top Experiences" onSelect={() => handleSectionLink("top-experiences")} />
            <QuickLink label="Top Activities" onSelect={() => handleSectionLink("top-activities")} />
          </Accordion>

          <Accordion title="Our Offerings" defaultOpen={pathname.startsWith("/packages")}>
            {offeringsNavigation.map((group) => (
              <div key={group.id} className="px-1 pb-2">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={onClose}
                    className="flex min-h-11 items-center rounded-lg px-3 text-[14px] text-ink hover:bg-ivory"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/packages"
              onClick={onClose}
              className="mx-3 mb-2 inline-flex min-h-11 items-center gap-1.5 text-[13px] font-semibold text-forest"
            >
              View All Packages <ArrowRightIcon size={14} />
            </Link>
          </Accordion>

          <Accordion title="About Us" defaultOpen={pathname.startsWith("/about")}>
            {aboutNavigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={onClose}
                className="flex min-h-11 flex-col justify-center rounded-lg px-3 hover:bg-ivory"
              >
                <span className="text-[14px] font-medium text-ink">{item.label}</span>
                {item.description && (
                  <span className="text-[12px] text-ink-soft">{item.description}</span>
                )}
              </Link>
            ))}
          </Accordion>

          <Accordion title="Marketing Support" defaultOpen={pathname.startsWith("/marketing-support")}>
            {marketingSupportNavigation.map((item) => {
              const Icon = marketingIcons[item.icon];
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={onClose}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-3 hover:bg-ivory"
                >
                  <Icon size={16} className="text-forest" />
                  <span className="text-[14px] font-medium text-ink">{item.label}</span>
                </Link>
              );
            })}
          </Accordion>
        </div>

        <div className="space-y-2 border-t border-line p-4">
          <CreateQueryButton variant="mobile" onClick={onClose} />
          <OffersButton className="h-11 w-full justify-center" onClick={onClose} />
          <div className="flex items-center gap-2 pt-1 text-[12px] text-ink-muted">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-[10px] font-semibold text-ivory">
              {currentAgent.initials}
            </span>
            <span>
              <span className="block font-medium text-ink">{currentAgent.name}</span>
              {currentAgent.agency}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `mobile-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border-b border-line/80">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-12 w-full items-center justify-between px-3 text-[15px] font-medium text-ink"
      >
        {title}
        <ChevronDownIcon
          size={16}
          className={cn("text-ink-soft transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div id={panelId} hidden={!open} className="pb-2">
        {children}
      </div>
    </div>
  );
}

function TopDestinationsAccordion({
  onClose,
}: {
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-line bg-cream/50">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-top-destinations-panel"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-11 w-full items-center justify-between px-3 text-[14px] font-medium text-ink"
      >
        <span>Top Destinations</span>
        <ChevronDownIcon size={15} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      <div id="mobile-top-destinations-panel" hidden={!open} className="border-t border-line px-2 py-2">
        {discoverThemes.map((theme) => (
          <ThemeMobileAccordion key={theme.slug} theme={theme} onClose={onClose} />
        ))}
      </div>
    </div>
  );
}

function ThemeMobileAccordion({ theme, onClose }: { theme: (typeof discoverThemes)[number]; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const destinations = getDestinationsByIds(theme.featuredDestinationIds).slice(0, 5);

  return (
    <div className="mb-2 rounded-lg border border-line/80 bg-paper">
      <div className="flex items-center gap-2 px-2 py-2">
        <Link
          to={`/discover/${theme.slug}`}
          onClick={onClose}
          className="flex flex-1 items-center px-1 text-[14px] font-medium text-ink hover:text-forest"
        >
          {theme.name}
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${theme.name} destinations`}
          onClick={() => setExpanded((value) => !value)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted hover:bg-ivory"
        >
          <ChevronDownIcon size={15} className={cn("transition-transform duration-200", expanded && "rotate-180")} />
        </button>
      </div>

      {expanded && (
        <div className="border-t border-line bg-cream/40 px-2 py-2">
          <ul className="space-y-1.5 pb-2">
            {destinations.map((destination) => (
              <li key={destination.id}>
                <Link
                  to={`/destinations/${destination.slug}`}
                  onClick={onClose}
                  className="flex min-h-8 items-center rounded-md px-2 text-[13px] text-ink-muted hover:bg-ivory hover:text-ink"
                >
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={`/discover/${theme.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-forest"
          >
            View More <ArrowRightIcon size={12} />
          </Link>
        </div>
      )}
    </div>
  );
}

function QuickLink({ label, onSelect }: { label: string; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-left text-[14px] font-medium text-ink hover:bg-ivory"
    >
      {label}
      <ArrowRightIcon size={14} className="text-ink-soft" />
    </button>
  );
}
