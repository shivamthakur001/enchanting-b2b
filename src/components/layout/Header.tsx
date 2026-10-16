import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { usePathname } from "../../router/Router";
import { Logo } from "../logo/Logo";
import { UtilityBar } from "./UtilityBar";
import { MainNavigation, type MenuKey } from "../navigation/MainNavigation";
import { CreateQueryButton } from "../navigation/CreateQueryButton";
import { OffersButton } from "../navigation/OffersButton";
import { MobileNavigation } from "../navigation/MobileNavigation";
import { MenuIcon } from "../icons/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("header")) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[80] focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50">
        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
          )}
          aria-hidden={scrolled}
        >
          <UtilityBar />
        </div>
        <div
          className={cn(
            "nav-main-surface border-b transition-[height,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          )}
        >
          <div
            className={cn(
              "mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8",
              scrolled ? "h-16" : "h-[76px]",
            )}
          >
            <Logo compact={scrolled} />
            <MainNavigation compact={scrolled} openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div className="flex shrink-0 items-center gap-2">
              <div className={cn("hidden items-center gap-2", scrolled ? "lg:flex" : "lg:hidden")}>
                <CreateQueryButton variant="nav" />
              </div>
              <div className="hidden md:block">
                <OffersButton compact={scrolled} />
              </div>
              <button
                type="button"
                className="nav-text flex h-10 w-10 items-center justify-center rounded-full nav-hover-bg lg:hidden"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
