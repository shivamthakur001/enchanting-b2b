import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { discoverThemes } from "../../data/themes";
import { getDestinationsByIds } from "../../data/destinations";
import { getDestinationGalleryImages, THEME_EYEBROWS } from "../../data/discoverGallery";
import { Link, useNavigate, usePathname } from "../../router/Router";
import { ArrowRightIcon, ChevronRightIcon } from "../icons/Icons";
import type { Destination, DiscoverTheme } from "../../types";

type DiscoverMegaMenuProps = {
  id: string;
  onNavigate: () => void;
  open: boolean;
};

export function DiscoverMegaMenu({ id, onNavigate, open }: DiscoverMegaMenuProps) {
  const navigate = useNavigate();
  const pathname = usePathname();
  const [activeThemeSlug, setActiveThemeSlug] = useState(discoverThemes[0].slug);

  const activeTheme = useMemo(
    () => discoverThemes.find((theme) => theme.slug === activeThemeSlug) ?? discoverThemes[0],
    [activeThemeSlug],
  );

  const currentPlaces = useMemo(
    () => getDestinationsByIds(activeTheme.featuredDestinationIds).slice(0, 5),
    [activeTheme],
  );

  const [activePlaceSlug, setActivePlaceSlug] = useState<string>(
    () => currentPlaces[0]?.slug ?? "pachmarhi",
  );

  // Sync active theme and default first destination when mega-menu opens
  useEffect(() => {
    if (open) {
      const defaultTheme = discoverThemes[0];
      setActiveThemeSlug(defaultTheme.slug);
      const defaultPlaces = getDestinationsByIds(defaultTheme.featuredDestinationIds).slice(0, 5);
      if (defaultPlaces[0]) {
        setActivePlaceSlug(defaultPlaces[0].slug);
      }
    }
  }, [open]);

  // Ensure activePlace is valid within current theme places
  const activePlace = useMemo(() => {
    return currentPlaces.find((p) => p.slug === activePlaceSlug) ?? currentPlaces[0];
  }, [currentPlaces, activePlaceSlug]);

  const handleThemeActivate = (themeSlug: string) => {
    if (themeSlug === activeThemeSlug) return;
    setActiveThemeSlug(themeSlug);
    const targetTheme = discoverThemes.find((t) => t.slug === themeSlug);
    if (targetTheme) {
      const targetPlaces = getDestinationsByIds(targetTheme.featuredDestinationIds).slice(0, 5);
      if (targetPlaces[0]) {
        setActivePlaceSlug(targetPlaces[0].slug);
      }
    }
  };

  const handlePlaceHover = (slug: string) => {
    if (slug === activePlaceSlug) return;
    setActivePlaceSlug(slug);
  };

  const scrollToSection = (sectionId: string) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  const handleSectionNavigate = (sectionId: string) => {
    if (pathname === "/") {
      navigate(`/#${sectionId}`);
      requestAnimationFrame(() => scrollToSection(sectionId));
      return;
    }

    navigate("/");
    window.setTimeout(() => scrollToSection(sectionId), 120);
  };

  return (
    <div
      id={id}
      role="region"
      aria-label="Discover Madhya Pradesh"
      className="nav-menu-surface overflow-hidden rounded-[18px] border"
    >
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-[170px_185px_225px_minmax(0,1fr)]">
        {/* Column 1: Discover Primary Hierarchy */}
        <div className="border-b border-line p-4 lg:border-b-0 lg:border-r">
          <p className="px-2 pb-2 text-[11px] font-semibold tracking-[0.18em] text-ink-soft uppercase">
            Discover
          </p>
          <button
            type="button"
            onClick={() => handleThemeActivate(discoverThemes[0].slug)}
            className="group flex w-full items-center justify-between rounded-lg bg-ivory px-2 py-2 text-left text-[14px] font-semibold text-ink"
            aria-current="true"
          >
            Top Destinations
            <ChevronRightIcon size={14} className="text-forest" />
          </button>
          <SectionLink
            label="Top Experiences"
            onClick={() => {
              handleSectionNavigate("top-experiences");
              onNavigate();
            }}
          />
          <SectionLink
            label="Top Activities"
            onClick={() => {
              handleSectionNavigate("top-activities");
              onNavigate();
            }}
          />
        </div>

        {/* Column 2: Top Destinations Themes */}
        <div className="border-b border-line p-4 md:border-r lg:border-b-0">
          <p className="px-2 pb-2 text-[11px] font-semibold tracking-[0.18em] text-ink-soft uppercase">
            Top Destinations
          </p>
          <div className="space-y-1">
            {discoverThemes.map((theme) => (
              <ThemeOption
                key={theme.slug}
                theme={theme}
                active={theme.slug === activeTheme.slug}
                onActivate={() => handleThemeActivate(theme.slug)}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        {/* Column 3: Destination Places (4-5 items + View More) */}
        <div className="border-b border-line p-4 md:border-b-0 md:border-r">
          <p className="px-2 pb-2 text-[11px] font-semibold tracking-[0.18em] text-ink-soft uppercase">
            {activeTheme.name} Places
          </p>
          <ul className="space-y-1">
            {currentPlaces.map((destination) => {
              const isActive = destination.slug === activePlace?.slug;
              return (
                <li key={destination.id}>
                  <Link
                    to={`/destinations/${destination.slug}`}
                    onClick={onNavigate}
                    onMouseEnter={() => handlePlaceHover(destination.slug)}
                    onFocus={() => handlePlaceHover(destination.slug)}
                    className={cn(
                      "group flex items-center justify-between rounded-md px-2.5 py-1.5 text-[14px] transition-colors duration-150",
                      isActive
                        ? "bg-ivory font-semibold text-forest shadow-xs"
                        : "text-ink hover:bg-ivory hover:text-forest",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span>{destination.name}</span>
                    <ChevronRightIcon
                      size={13}
                      className={cn(
                        "transition-all duration-150",
                        isActive
                          ? "translate-x-0 text-forest opacity-100"
                          : "text-ink-soft opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            to={`/discover/${activeTheme.slug}`}
            onClick={onNavigate}
            className="mt-3 inline-flex items-center gap-1.5 px-2.5 text-[13px] font-semibold text-forest hover:text-forest-deep"
          >
            View More {activeTheme.name} <ArrowRightIcon size={13} />
          </Link>
        </div>

        {/* Column 4: Wide Destination Preview Zone with Carousel & Thumbnails */}
        {activePlace && (
          <PlacePreviewCarousel
            activePlace={activePlace}
            activeTheme={activeTheme}
            onNavigate={onNavigate}
          />
        )}
      </div>
    </div>
  );
}

function SectionLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-[14px] text-ink hover:bg-ivory"
    >
      {label}
      <ArrowRightIcon size={13} className="text-ink-soft transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function ThemeOption({
  theme,
  active,
  onActivate,
  onNavigate,
}: {
  theme: DiscoverTheme;
  active: boolean;
  onActivate: () => void;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={`/discover/${theme.slug}`}
      onClick={() => {
        onActivate();
        onNavigate();
      }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        "group flex items-center justify-between rounded-lg px-2 py-2 text-left",
        active ? "bg-ivory text-ink" : "text-ink-muted hover:bg-ivory hover:text-ink",
      )}
      aria-current={active ? "true" : undefined}
    >
      <span>
        <span className="block text-[14px] font-semibold">{theme.name}</span>
        <span className="mt-0.5 block text-[11px] text-ink-soft">{theme.microcopy}</span>
      </span>
      <ChevronRightIcon
        size={14}
        className={cn("text-ink-soft transition-transform", active && "translate-x-0.5 text-forest")}
      />
    </Link>
  );
}

interface PlacePreviewCarouselProps {
  activePlace: Destination;
  activeTheme: DiscoverTheme;
  onNavigate: () => void;
}

function PlacePreviewCarousel({
  activePlace,
  activeTheme,
  onNavigate,
}: PlacePreviewCarouselProps) {
  const images = useMemo(
    () => getDestinationGalleryImages(activePlace),
    [activePlace],
  );

  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);

  // Reset slide index immediately whenever active place changes
  useEffect(() => {
    setSlideIndex(0);
  }, [activePlace.slug]);

  // Autoplay carousel timer: 3000ms interval (2.8s-3.2s)
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timerId = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [activePlace.slug, isPaused, images.length]);

  // Clear any scheduled resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handleThumbnailClick = (idx: number) => {
    setSlideIndex(idx);
    setIsPaused(true);
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    // Resume autoplay gracefully after 1500ms
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  const eyebrow = THEME_EYEBROWS[activeTheme.slug] ?? activeTheme.name;

  return (
    <div
      className="flex flex-col justify-between bg-ivory/50 p-4"
      aria-label={`${activePlace.name} preview`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Main Large Landscape Preview Card */}
      <Link
        to={`/destinations/${activePlace.slug}`}
        onClick={onNavigate}
        className="group relative block h-[260px] w-full overflow-hidden rounded-[14px] bg-[#1e2722] focus-visible:outline-2 focus-visible:outline-forest lg:h-[275px]"
        aria-label={`Explore ${activePlace.name}`}
      >
        {images.map((imgSrc, idx) => {
          const isActive = idx === slideIndex;
          return (
            <img
              key={`${activePlace.slug}-${idx}`}
              src={imgSrc}
              alt={isActive ? `${activePlace.name} preview ${idx + 1}` : ""}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all ease-out",
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-[1.02] pointer-events-none",
                "motion-reduce:transition-none motion-reduce:transform-none",
              )}
              style={{ transitionDuration: "320ms" }}
            />
          );
        })}

        {/* Subtle bottom gradient overlay for clear typography */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Image Counter Badge: 01 — 03 */}
        {images.length > 1 && (
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/60 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-paper/95 backdrop-blur-xs select-none"
            aria-hidden="true"
          >
            <span>{String(slideIndex + 1).padStart(2, "0")}</span>
            <span className="opacity-40">—</span>
            <span>{String(images.length).padStart(2, "0")}</span>
          </div>
        )}

        {/* Text Overlay: Category / Eyebrow, Destination Name, Short Description */}
        <div className="absolute inset-x-0 bottom-0 p-4 text-paper sm:p-5">
          <span className="text-[10px] font-bold tracking-[0.18em] text-saffron uppercase">
            {eyebrow}
          </span>
          <h3 className="mt-0.5 font-display text-[26px] font-semibold leading-tight text-white transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[30px]">
            {activePlace.name}
          </h3>
          <p className="mt-1 line-clamp-1 max-w-[44ch] text-[12px] leading-relaxed text-paper/85">
            {activePlace.summary}
          </p>
        </div>
      </Link>

      {/* 3 Compact Image Thumbnails Below */}
      {images.length > 1 && (
        <div
          className="mt-3 grid gap-2"
          style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
          role="group"
          aria-label={`${activePlace.name} image carousel controls`}
        >
          {images.map((imgSrc, idx) => {
            const isActive = idx === slideIndex;
            return (
              <button
                key={`${activePlace.slug}-thumb-${idx}`}
                type="button"
                aria-label={`Show ${activePlace.name} photo ${idx + 1}`}
                aria-pressed={isActive}
                onClick={() => handleThumbnailClick(idx)}
                className={cn(
                  "group relative h-[56px] w-full overflow-hidden rounded-[8px] border transition-all duration-200",
                  "focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2",
                  isActive
                    ? "border-saffron opacity-100 shadow-xs"
                    : "border-transparent opacity-60 hover:opacity-90",
                )}
              >
                <img
                  src={imgSrc}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                />
                {isActive && (
                  <span
                    key={`${activePlace.slug}-${idx}-${isPaused ? "paused" : "running"}`}
                    className={cn(
                      "dmc-thumb-progress",
                      !isPaused && "is-active",
                    )}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
