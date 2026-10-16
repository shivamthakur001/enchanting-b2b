import { useEffect, useMemo, useRef, useState } from "react";
import { featuredAccommodations } from "../../data/featuredAccommodations";
import { footprintEvents } from "../../data/footprints";
import { media } from "../../data/media";
import { offerings } from "../../data/whatWeOffer";
import { topActivities } from "../../data/topActivities";
import { topDestinations } from "../../data/topDestinations";
import { topExperiences } from "../../data/topExperiences";
import { topJourneys } from "../../data/topJourneys";
import { upcomingGroupTours } from "../../data/upcomingGroups";
import { experientialStays } from "../../data/experientialStays";
import { cn } from "../../utils/cn";
import mpMap from "../../assets/mp-map.png";
import "./LivingMapDrawer.css";

const LIVING_MAP_DRAWER_CLOSE_DELAY = 280;

const LIVING_MAP_DRAWER_BRAND = {
  title: "Enchanting",
  subtitle: "MADHYA PRADESH",
} as const;

type SectionData = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  kicker: string;
};

const sections: SectionData[] = [
  {
    id: "know",
    label: "Know Madhya Pradesh",
    title: "Know Madhya Pradesh",
    description: "A concise orientation to the landscapes, culture and spirit of the heart of India.",
    image: mpMap,
    kicker: "Orientation",
  },
  {
    id: "top-destinations",
    label: "Top Destinations",
    title: "Top Destinations",
    description: "The places that give every Madhya Pradesh itinerary its sense of place.",
    image: topDestinations[0]?.image ?? media.orchhaTemple,
    kicker: "Places",
  },
  {
    id: "top-experiences",
    label: "Top Experiences",
    title: "Top Experiences",
    description: topExperiences[0]?.description ?? "Moments shaped by wilderness, heritage and quiet landscapes.",
    image: topExperiences[0]?.image.src ?? media.tigerKanhaRest,
    kicker: "Moments",
  },
  {
    id: "top-activities",
    label: "Top Activities",
    title: "Top Activities",
    description: "Curated field notes and immersive pursuits for discerning travellers.",
    image: topActivities[0]?.image ?? media.tigerKanhaWalk,
    kicker: "Pursuits",
  },
  {
    id: "featured-accommodations",
    label: "Featured Accommodations",
    title: "Featured Accommodations",
    description: "Trusted stays selected for agent-friendly service and quality across MP.",
    image: featuredAccommodations[0]?.image ?? media.heritageLobby,
    kicker: "Stays",
  },
  {
    id: "what-we-offer",
    label: "What We Offer in MP",
    title: "What We Offer in MP",
    description: offerings[0]?.description ?? "Planning, ground support and considered itineraries for your clients.",
    image: offerings[0]?.image ?? media.orchhaPalace,
    kicker: "Services",
  },
  {
    id: "top-journeys",
    label: "Top Journeys Across Madhya Pradesh",
    title: "Top Journeys Across Madhya Pradesh",
    description: "Scenic circuits connecting heritage, wildlife and sacred landscapes.",
    image: topJourneys[0]?.image ?? media.khajuraho,
    kicker: "Routes",
  },
  {
    id: "upcoming-groups",
    label: "Upcoming Groups & Fixed Tours",
    title: "Upcoming Groups & Fixed Tours",
    description: "Scheduled departures and curated group tours ready for your clients.",
    image: upcomingGroupTours[0]?.image ?? media.pachmarhi,
    kicker: "Calendar",
  },
  {
    id: "luxury",
    label: "Curated Luxury",
    title: "Curated Luxury",
    description: "Exceptional stays and private journeys shaped around place and pace.",
    image: experientialStays[0]?.image ?? media.heritageLobby,
    kicker: "Exclusive",
  },
  {
    id: "footprints",
    label: "Footprints of MP Around the World",
    title: "Footprints of MP Around the World",
    description: "The state's heritage and partnerships carried beyond its borders.",
    image: footprintEvents[0]?.image ?? media.maheshwar,
    kicker: "Legacy",
  },
  {
    id: "partner-voices",
    label: "Trusted Partner Voices",
    title: "Trusted Partner Voices",
    description: "Real experiences from travel professionals who work with us.",
    image: "/images/partners/travel-xpedia.png",
    kicker: "B2B Trust",
  },
];

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const destination = Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerHeight - 12);

  if (reducedMotion) {
    window.scrollTo({ top: destination, behavior: "auto" });
    return;
  }

  const start = window.scrollY;
  const distance = destination - start;
  const duration = 520;
  const startedAt = performance.now();
  const animate = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) window.requestAnimationFrame(animate);
  };
  window.requestAnimationFrame(animate);
}

function Monogram() {
  return (
    <span className="living-map-drawer__monogram" aria-hidden="true">
      <img src={mpMap} alt="" />
      <b>EM</b>
    </span>
  );
}

export function LivingMapDrawer() {
  const ids = useMemo(() => sections.map((section) => section.id), []);
  const activeId = useActiveSection(ids);
  const [headerBottom, setHeaderBottom] = useState(() => {
    if (typeof document === "undefined") return 0;
    return document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  });
  const [expanded, setExpanded] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const preview = sections.find((section) => section.id === hoveredId);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const updateHeaderBottom = () => setHeaderBottom(header.getBoundingClientRect().bottom);
    const observer = new ResizeObserver(updateHeaderBottom);
    observer.observe(header);
    updateHeaderBottom();
    window.addEventListener("scroll", updateHeaderBottom, { passive: true });
    window.addEventListener("resize", updateHeaderBottom);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeaderBottom);
      window.removeEventListener("resize", updateHeaderBottom);
    };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setExpanded(false);
      setHoveredId(null);
      closeTimer.current = null;
    }, LIVING_MAP_DRAWER_CLOSE_DELAY);
  };

  const selectSection = (id: string, isMobile = false) => {
    scrollToSection(id);
    if (isMobile) setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <aside
        className="living-map-drawer living-map-drawer--desktop"
        aria-label="Homepage sections"
        style={
          {
            "--lmd-header-bottom": `${headerBottom}px`,
          } as React.CSSProperties
        }
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div
          className={cn("living-map-drawer__panel", expanded && "is-expanded")}
          onMouseEnter={() => {
            cancelClose();
            setExpanded(true);
          }}
        >
          <div className="living-map-drawer__brand">
            <Monogram />
            <div className="living-map-drawer__brand-copy" aria-hidden={!expanded}>
              <strong>{LIVING_MAP_DRAWER_BRAND.title}</strong>
              <span>{LIVING_MAP_DRAWER_BRAND.subtitle}</span>
            </div>
          </div>
          {!expanded && <span className="living-map-drawer__collapsed-label">Explore the Homepage</span>}
          {expanded && (
            <>
              <div className="living-map-drawer__divider" />
              <nav className="living-map-drawer__list">
                {sections.map((section) => (
                  <button
                    type="button"
                    key={section.id}
                    className={cn("living-map-drawer__item", activeId === section.id && "is-active", hoveredId === section.id && "is-hovered")}
                    onMouseEnter={() => setHoveredId(section.id)}
                    onFocus={() => setHoveredId(section.id)}
                    onClick={() => selectSection(section.id)}
                  >
                    <span className="living-map-drawer__dot" />
                    <span>{section.label}</span>
                  </button>
                ))}
              </nav>
              <p className="living-map-drawer__footer">A guide for trade partners</p>
            </>
          )}
        </div>
        {expanded && preview && (
          <button type="button" className="living-map-drawer__preview" onClick={() => selectSection(preview.id)}>
            <div className="living-map-drawer__preview-image">
              <img src={preview.image} alt="" loading="lazy" />
              <span>{preview.kicker}</span>
            </div>
            <div className="living-map-drawer__preview-copy">
              <h2>{preview.title}</h2>
              <p>{preview.description}</p>
              <span>Go to section <b aria-hidden="true">-&gt;</b></span>
            </div>
          </button>
        )}
      </aside>

      <div className="living-map-drawer__mobile">
        <button type="button" className="living-map-drawer__mobile-trigger" onClick={() => setMobileOpen(true)} aria-expanded={mobileOpen}>
          <span aria-hidden="true">☰</span> Sections
        </button>
        {mobileOpen && (
          <div className="living-map-drawer__mobile-overlay" role="presentation" onClick={() => setMobileOpen(false)}>
            <section className="living-map-drawer__mobile-sheet" aria-label="Homepage sections" onClick={(event) => event.stopPropagation()}>
              <header>
                <div>
                  <Monogram />
                  <span>
                    <strong>{LIVING_MAP_DRAWER_BRAND.title}</strong>
                    <small>Homepage sections</small>
                  </span>
                </div>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close sections">×</button>
              </header>
              <nav>
                {sections.map((section) => (
                  <button type="button" key={section.id} onClick={() => selectSection(section.id, true)}>
                    <img src={section.image} alt="" loading="lazy" />
                    <span className={cn(activeId === section.id && "is-active")}>{section.label}</span>
                    <i className={cn(activeId === section.id && "is-active")} aria-hidden="true" />
                  </button>
                ))}
              </nav>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
