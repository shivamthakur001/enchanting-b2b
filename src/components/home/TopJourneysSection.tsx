/**
 * TopJourneysSection
 *
 * Immersive editorial journey section integrated into the master homepage.
 * Placement: immediately below FeaturedAccommodationsSection.
 *
 * Layout:
 * - Approved donor composition: Wide Left Spotlight (~66%) + Compact Right Navigator (~34%)
 * - Scoped styles (tj-* namespace) using master design tokens and typography
 * - Reuses the shared master EditorialSectionHeading ("Top" in Pinyon Script, display serif title)
 * - Uses master Router Link for SPA navigation (no page reload)
 * - Autoplay timer: ~5.5s with pause on hover/focus and resume on leave/blur
 * - Manual item click or keyboard selection resets timer
 * - Right navigator rows: compact thumbnails (size from topJourneysConfig), number, title, duration, route
 * - Reuses shared PremiumTilt with subtle maxRotate (2.2deg) exclusively on the spotlight
 * - Responsive: becomes full-width spotlight + horizontal compact rail on mobile
 *
 * CENTRALIZED DESIGN CONTROL
 * All visual properties are set in src/config/topJourneysConfig.ts.
 * buildTJCSSVars() converts the config to inline CSS custom properties on
 * the <section> element, which are consumed by TopJourneysSection.css.
 */

import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { topJourneys, type TopJourney } from "../../data/topJourneys";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { Link } from "../../router/Router";
import { PremiumTilt } from "../ui/PremiumTilt";
import { buildTJCSSVars, topJourneysConfig } from "../../config/topJourneysConfig";
import "./TopJourneysSection.css";

const AUTOPLAY_DELAY = 5500;

/** Pre-compute the CSS vars object once (config is static at runtime). */
const TJ_CSS_VARS = buildTJCSSVars(topJourneysConfig) as CSSProperties;

export interface TopJourneysSectionProps {
  journeys?: TopJourney[];
}

export function TopJourneysSection({
  journeys = topJourneys,
}: TopJourneysSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = journeys.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((prev) => (prev + 1) % total);
      }
    }, AUTOPLAY_DELAY);
  }, [clearTimer, total]);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [startTimer, clearTimer]);

  const handleSelect = (index: number) => {
    const next = ((index % total) + total) % total;
    setActiveIndex(next);
    startTimer();
  };

  const handlePause = () => {
    isPausedRef.current = true;
  };

  const handleResume = () => {
    isPausedRef.current = false;
    startTimer();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let targetIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        targetIndex = (index + 1) % total;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        targetIndex = (index - 1 + total) % total;
        break;
      case "Home":
        targetIndex = 0;
        break;
      case "End":
        targetIndex = total - 1;
        break;
      default:
        break;
    }

    if (targetIndex !== null) {
      event.preventDefault();
      handleSelect(targetIndex);
      itemRefs.current[targetIndex]?.focus();
    }
  };

  const indexLabel = (n: number) => String(n + 1).padStart(2, "0");
  const active = journeys[activeIndex] ?? journeys[0];

  if (!active) return null;

  const viewHref = active.routeUrl ?? "/packages";
  const queryHref = active.queryUrl ?? "/create-query";

  return (
    <section
      id="top-journeys"
      className="tj-section"
      aria-label="Top Journeys Across Madhya Pradesh"
      style={TJ_CSS_VARS}
    >
      <div className="tj-container">
        {/*
          Preserves the master EditorialSectionHeading typography system:
          "Top" in Pinyon Script with underline stroke,
          "Journeys Across Madhya Pradesh" in Cormorant Garamond display serif.
        */}
        <EditorialSectionHeading
          eyebrow="THE MADHYA PRADESH EDIT"
          scriptWord="Top"
          title="Journeys Across Madhya Pradesh"
          intro="Top-selling tours, already loved by thousands — easy to pitch, easier to sell."
        />

        <div
          className="tj-layout"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onFocus={handlePause}
          onBlur={handleResume}
        >
          {/* LEFT: Featured Cinematic Spotlight (~66%) */}
          <div className="tj-spotlight-col">
            <PremiumTilt
              strength="subtle"
              maxRotate={2.2}
              scale={1.005}
              className="tj-spotlight-tilt"
            >
              <div className="tj-spotlight">
                {/* Crossfade Image Stack */}
                <div className="tj-image-stack">
                  {journeys.map((journey, index) => (
                    <img
                      key={journey.id}
                      src={journey.image}
                      alt={index === activeIndex ? journey.imageAlt : ""}
                      aria-hidden={index !== activeIndex}
                      className={`tj-image ${index === activeIndex ? "is-active" : ""}`}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ))}
                  <div className="tj-image-overlay" />
                </div>

                {/* Integrated Spotlight Editorial Content */}
                <div className="tj-spotlight-content" key={active.id}>
                  <div className="tj-spotlight-badge">
                    <span className="tj-code">
                      {indexLabel(activeIndex)} / {indexLabel(total)}
                    </span>
                    <span className="tj-badge-sep" aria-hidden="true">•</span>
                    <span className="tj-category">{active.category}</span>
                  </div>

                  <h3 className="tj-journey-title">{active.title}</h3>

                  <div className="tj-meta">
                    <span className="tj-duration">{active.duration} • {active.nights}</span>
                    <span className="tj-dot" aria-hidden="true">•</span>
                    <span className="tj-route">{active.route.join(" — ")}</span>
                  </div>

                  <p className="tj-desc">{active.summary}</p>

                  <div className="tj-cta-row">
                    <Link className="tj-btn tj-btn-primary" to={viewHref}>
                      <span>View Journey</span>
                      <span className="tj-btn-arrow" aria-hidden="true">→</span>
                    </Link>
                    <Link className="tj-btn tj-btn-secondary" to={queryHref}>
                      <span>Create Query</span>
                      <span className="tj-btn-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </PremiumTilt>
          </div>

          {/* RIGHT: Compact Journey Navigator (~34%) */}
          <nav
            className="tj-list"
            aria-label="Journey selector"
          >
            {journeys.map((journey, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  key={journey.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`tj-list-item ${isActive ? "is-active" : ""}`}
                  onClick={() => handleSelect(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-pressed={isActive}
                  aria-label={`${journey.title}, ${journey.duration}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <span className="tj-list-number" aria-hidden="true">
                    {indexLabel(index)}
                  </span>
                  <div className="tj-list-thumb">
                    <img
                      src={journey.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="tj-list-text">
                    <span className="tj-list-title">{journey.title}</span>
                    <span className="tj-list-duration">
                      {journey.duration} • {journey.nights}
                    </span>
                    <span className="tj-list-route">
                      {journey.route.join(" — ")}
                    </span>
                  </div>
                  <span className="tj-list-indicator" aria-hidden="true" />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default TopJourneysSection;
