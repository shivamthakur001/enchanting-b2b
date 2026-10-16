import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import {
  footprintEvents,
  footprintYears,
  getEventsByYear,
  type FootprintEvent,
} from "../../data/footprints";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { PremiumTilt } from "../ui/PremiumTilt";
import { Link } from "../../router/Router";
import "./FootprintsSection.css";

const DEFAULT_EVENT_ID = "itb-berlin-2026";
const FADE_MS = 240;

function padIndex(value: number): string {
  return String(value).padStart(2, "0");
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FootprintsSection() {
  const defaultEvent =
    footprintEvents.find((event) => event.id === DEFAULT_EVENT_ID) ??
    footprintEvents[footprintEvents.length - 1] ??
    footprintEvents[0];

  const [selectedYear, setSelectedYear] = useState(defaultEvent.year);
  const [selectedId, setSelectedId] = useState(defaultEvent.id);
  const [displayed, setDisplayed] = useState<FootprintEvent>(defaultEvent);
  const [isFading, setIsFading] = useState(false);

  const yearButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const chapterButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const fadeTimer = useRef<number | null>(null);

  const yearEvents = useMemo(() => getEventsByYear(selectedYear), [selectedYear]);

  const selectedEvent = useMemo(() => {
    return (
      footprintEvents.find((event) => event.id === selectedId) ?? defaultEvent
    );
  }, [selectedId, defaultEvent]);

  const selectedIndex = footprintEvents.findIndex(
    (event) => event.id === displayed.id,
  );
  const yearIndex = footprintYears.indexOf(selectedYear);
  const progress =
    footprintYears.length <= 1
      ? 0
      : (Math.max(yearIndex, 0) / (footprintYears.length - 1)) * 100;

  useEffect(() => {
    footprintEvents.forEach((event) => {
      const image = new Image();
      image.src = event.image;
    });
  }, []);

  useEffect(() => {
    if (displayed.id === selectedEvent.id) return;

    if (prefersReducedMotion()) {
      setDisplayed(selectedEvent);
      setIsFading(false);
      return;
    }

    setIsFading(true);
    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => {
      setDisplayed(selectedEvent);
      setIsFading(false);
    }, FADE_MS);

    return () => {
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, [selectedEvent, displayed.id]);

  const selectYear = useCallback((year: number) => {
    const events = getEventsByYear(year);
    if (!events.length) return;
    setSelectedYear(year);
    setSelectedId((currentId) => {
      const stillInYear = events.some((event) => event.id === currentId);
      return stillInYear ? currentId : events[0].id;
    });
  }, []);

  const selectEvent = useCallback((event: FootprintEvent) => {
    setSelectedYear(event.year);
    setSelectedId(event.id);
  }, []);

  const onYearKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = footprintYears.length - 1;
    let next = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    } else {
      return;
    }

    event.preventDefault();
    selectYear(footprintYears[next]);
    yearButtonRefs.current[next]?.focus();
  };

  const onChapterKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = yearEvents.length - 1;
    let next = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    } else {
      return;
    }

    event.preventDefault();
    selectEvent(yearEvents[next]);
    chapterButtonRefs.current[next]?.focus();
  };

  const placeLabel = `${displayed.city} · ${displayed.country}`;

  return (
    <section id="footprints" className="fp-section" aria-label="Footprints of MP Around the World">
      <div className="fp-inner">
        {/*
          Master EditorialSectionHeading:
          "Footprints" in Pinyon Script with animated stroke underline
          "of MP Around the World" in Cormorant Garamond display serif
        */}
        <EditorialSectionHeading
          eyebrow="DESTINATION PRESENCE"
          scriptWord="Footprints"
          title="of MP Around the World"
          intro="From trade floors in Berlin to destination showcases in Singapore, Madhya Pradesh continues to meet the world — one conversation, one partnership, one journey at a time."
        />

        {/* ── Year timeline rail ─────────────────────────── */}
        <div className="fp-timeline-wrap">
          <div
            className="fp-timeline"
            style={
              {
                "--year-count": footprintYears.length,
                "--fp-progress": `${progress}%`,
              } as CSSProperties
            }
            role="tablist"
            aria-label="Event years"
          >
            <div className="fp-track" aria-hidden="true">
              <span className="fp-track-fill" />
            </div>
            {footprintYears.map((year, index) => {
              const isSelected = year === selectedYear;
              const isMulti = getEventsByYear(year).length > 1;
              return (
                <button
                  key={year}
                  ref={(node) => {
                    yearButtonRefs.current[index] = node;
                  }}
                  type="button"
                  className={`fp-year${isMulti ? " is-multi" : ""}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="fp-event-panel"
                  id={`fp-year-${year}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectYear(year)}
                  onKeyDown={(event) => onYearKeyDown(event, index)}
                >
                  <span className="fp-year-label">{year}</span>
                  <span className="fp-year-node">
                    <span className="fp-year-ring" />
                    <span className="fp-year-dot" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Event chapters selector (multi-event years) ───── */}
        <ul
          className="fp-chapters"
          data-visible={yearEvents.length > 1 ? "true" : "false"}
          role="tablist"
          aria-label={`${selectedYear} events`}
          aria-hidden={yearEvents.length > 1 ? undefined : true}
          {...(yearEvents.length > 1 ? {} : { inert: true })}
        >
          {yearEvents.map((event, index) => {
            const isSelected = event.id === selectedId;
            return (
              <li key={event.id} className="fp-chapter">
                <button
                  ref={(node) => {
                    chapterButtonRefs.current[index] = node;
                  }}
                  type="button"
                  className="fp-chapter-btn"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="fp-event-panel"
                  id={`fp-event-${event.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectEvent(event)}
                  onKeyDown={(keyboardEvent) =>
                    onChapterKeyDown(keyboardEvent, index)
                  }
                >
                  <span className="fp-chapter-name">{event.eventName}</span>
                  <span className="fp-chapter-rule" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>

        {/* ── Event stage ──────────────────────────────────── */}
        <div
          className={`fp-stage${isFading ? " is-fading" : ""}`}
          id="fp-event-panel"
          role="tabpanel"
          aria-labelledby={`fp-year-${displayed.year}`}
        >
          {/*
            Main selected event visual wrapped in master PremiumTilt:
            strength="featured" preset (~3.8deg, scale 1.01).
            Inner image has independent slow hover zoom.
          */}
          <div className="fp-visual">
            <PremiumTilt strength="featured" className="fp-visual-tilt">
              <div className="fp-visual-frame">
                <img
                  className="fp-image"
                  src={displayed.image}
                  alt={displayed.imageAlt}
                  width={1600}
                  height={1200}
                />
                <p className="fp-image-caption">{placeLabel}</p>
              </div>
            </PremiumTilt>
          </div>

          <div className="fp-details" data-year={displayed.year}>
            <span className="fp-year-ghost" aria-hidden="true">
              {displayed.year}
            </span>
            <div className="fp-copy">
              <p className="fp-index">
                <span>{padIndex(selectedIndex + 1)}</span>
                <span className="fp-index-rule" aria-hidden="true" />
                <span>{padIndex(footprintEvents.length)}</span>
              </p>
              <p className="fp-place">
                {displayed.city} · {displayed.country}
              </p>
              <h3 className="fp-event-name">{displayed.eventName}</h3>
              <p className="fp-event-year">{displayed.year}</p>
              <p className="fp-story">{displayed.shortDescription}</p>
              <Link
                className="fp-cta"
                to={`/create-query?notes=${encodeURIComponent(`Inquiry regarding ${displayed.eventName} (${displayed.city}, ${displayed.country} - ${displayed.year})`)}`}
                aria-label={`Inquire about ${displayed.eventName}`}
              >
                View Story
                <span className="fp-cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <p className="fp-sr-only" aria-live="polite">
          {displayed.eventName}, {displayed.city}, {displayed.country},{" "}
          {displayed.year}
        </p>
      </div>
    </section>
  );
}

export default FootprintsSection;
