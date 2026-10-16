/**
 * UpcomingGroupsSection
 *
 * Departure Spotlight for Upcoming Groups & Fixed Tours.
 * Integrated into the MASTER Enchanting Madhya Pradesh B2B portal.
 *
 * Design decisions:
 * - Uses master EditorialSectionHeading ("Upcoming" in Pinyon Script / "Groups & Fixed Tours" in display serif)
 * - Uses PremiumTilt strength="featured" (~3.8deg, 1.01 scale) on the spotlight card ONLY
 * - Date cards, picker, and buttons are NOT tilted (they are interactive controls)
 * - Spotlight card has border-radius:24px via .ug-spotlight (matches master card-radius language)
 * - No Google Fonts @import — uses master --font-display (Cormorant Garamond) + --font-sans (Outfit)
 * - No min-height:100vh — natural content height
 * - No donor CSS variables — uses master color tokens throughout
 * - Placement: immediately below TopJourneysSection in HomePage
 * - Create Query → master /create-query SPA route via Link
 * - View Tour → omitted per data (no /tours/* route exists yet)
 * - Keyboard navigation: Arrow, Home, End on both tour selector and date picker
 * - Accessibility: aria-live, aria-checked, aria-labelledby, role=radiogroup
 * - prefers-reduced-motion respected by CSS; touch/coarse-pointer tilt disabled by usePremiumTilt
 */

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  DEPARTURE_STATUS_LABEL,
  getDefaultDepartureId,
  getUpcomingGroupTours,
  type TourDeparture,
  type UpcomingGroupTour,
} from "../../data/upcomingGroups";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { PremiumTilt } from "../ui/PremiumTilt";
import { Link } from "../../router/Router";
import "./UpcomingGroupsSection.css";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

function parseISODate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

function formatDepartureParts(iso: string): { day: string; month: string } {
  const date = parseISODate(iso);
  return {
    day: pad2(date.getDate()),
    month: date
      .toLocaleDateString("en-GB", { month: "short" })
      .toUpperCase(),
  };
}

function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatReadableDate(iso: string): string {
  return parseISODate(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function seatsCopy(departure: TourDeparture): string | null {
  if (departure.status === "sold-out") {
    return "This departure is sold out. Raise a query for waitlist or the next date.";
  }
  if (departure.status === "on-request") {
    return "On request — confirm availability with the operations desk before selling.";
  }
  if (typeof departure.availableSeats === "number") {
    const n = departure.availableSeats;
    return n === 1
      ? "1 seat remaining on this departure."
      : `${n} seats remaining on this departure.`;
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function UpcomingGroupsSection() {
  const tours = getUpcomingGroupTours();

  const headingId = useId();
  const spotlightId = useId();
  const datesLabelId = useId();
  const pickerLabelId = useId();

  const [selectedTourId, setSelectedTourId] = useState(tours[0]?.id ?? "");
  const selectedTour =
    tours.find((tour) => tour.id === selectedTourId) ?? tours[0];

  const [selectedDepartureId, setSelectedDepartureId] = useState(
    selectedTour ? getDefaultDepartureId(selectedTour) : "",
  );

  const tourBtnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dateBtnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Reset departure when tour changes (keep the default sellable departure)
  useEffect(() => {
    if (!selectedTour) return;
    const stillValid = selectedTour.departures.some(
      (departure) => departure.id === selectedDepartureId,
    );
    if (!stillValid) {
      setSelectedDepartureId(getDefaultDepartureId(selectedTour));
    }
  }, [selectedTour, selectedDepartureId]);

  if (!selectedTour) return null;

  const selectedDeparture =
    selectedTour.departures.find((d) => d.id === selectedDepartureId) ??
    selectedTour.departures[0];

  const selectedIndex = tours.findIndex((tour) => tour.id === selectedTour.id);

  // Accessible live region message
  const liveMessage = selectedDeparture
    ? `${selectedTour.title}. ${formatReadableDate(selectedDeparture.date)}, ${DEPARTURE_STATUS_LABEL[selectedDeparture.status]}.`
    : selectedTour.title;

  /* ── Tour selection ───────────────────────────────────────── */

  const selectTour = (tour: UpcomingGroupTour, focus = false) => {
    setSelectedTourId(tour.id);
    setSelectedDepartureId(getDefaultDepartureId(tour));
    if (focus) {
      const index = tours.findIndex((item) => item.id === tour.id);
      requestAnimationFrame(() => tourBtnRefs.current[index]?.focus());
    }
  };

  const onTourKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = tours.length - 1;
    let next = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      event.preventDefault();
      next = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      next = last;
    } else {
      return;
    }

    const target = tours[next];
    if (target) selectTour(target, true);
  };

  /* ── Departure selection ──────────────────────────────────── */

  const selectDeparture = (departure: TourDeparture, focus = false) => {
    setSelectedDepartureId(departure.id);
    if (focus) {
      const index = selectedTour.departures.findIndex(
        (item) => item.id === departure.id,
      );
      requestAnimationFrame(() => dateBtnRefs.current[index]?.focus());
    }
  };

  const onDateKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const dates = selectedTour.departures;
    const last = dates.length - 1;
    let next = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      event.preventDefault();
      next = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      next = last;
    } else {
      return;
    }

    const target = dates[next];
    if (target) selectDeparture(target, true);
  };

  const seatNote = selectedDeparture ? seatsCopy(selectedDeparture) : null;

  /* ── Query URL: pass tour code as search param if present ─── */
  const queryHref = selectedTour.queryUrl ?? "/create-query";

  return (
    <section
      id="upcoming-groups"
      className="ug-section"
      aria-labelledby={headingId}
    >
      <div className="ug-inner">
        {/*
          Section heading reuses the master EditorialSectionHeading —
          the same component used by Top Destinations, Top Journeys, etc.
          "Upcoming" renders in Pinyon Script (the master script word).
          "Groups & Fixed Tours" renders in Cormorant Garamond display serif.
        */}
        <EditorialSectionHeading
          eyebrow="GUARANTEED & FIXED DEPARTURES"
          scriptWord="Upcoming"
          title="Groups & Fixed Tours"
          intro="Guaranteed departures. Clear dates. Ready to sell — share directly with your clients."
        />

        {/* Accessible live region for tour/departure changes */}
        <p className="ug-sr" aria-live="polite" aria-atomic="true">
          {liveMessage}
        </p>

        {/*
          PremiumTilt wraps only the visual spotlight card.
          strength="featured" → ~3.8deg, scale 1.01 (large showcase card preset).
          Date controls, CTA buttons, tour picker are NOT inside PremiumTilt.
        */}
        <PremiumTilt
          strength="featured"
          className="ug-spotlight-tilt"
          id={spotlightId}
          style={{ marginTop: "clamp(2rem, 3.5vw, 3rem)" }}
        >
          <div className="ug-spotlight">
            {/* ── Image pane ──────────────────────────────────── */}
            <div className="ug-media">
              {tours.map((tour) => {
                const isActive = tour.id === selectedTour.id;
                return (
                  <img
                    key={tour.id}
                    className={`ug-media__img${isActive ? " is-active" : ""}`}
                    src={tour.image}
                    alt={isActive ? tour.imageAlt : ""}
                    aria-hidden={isActive ? undefined : true}
                    loading="lazy"
                  />
                );
              })}
              <p className="ug-media__index" aria-hidden="true">
                {pad2(selectedIndex + 1)} / {pad2(tours.length)}
              </p>
            </div>

            {/* ── Content panel ────────────────────────────────── */}
            <div className="ug-panel">
              <div className="ug-panel__body" key={selectedTour.id}>
                {/* Tour number + departure kind badge */}
                <div className="ug-panel__top">
                  <p className="ug-badge">{selectedTour.departureKind}</p>
                  <span className="ug-panel__count" aria-hidden="true">
                    {pad2(selectedIndex + 1)} / {pad2(tours.length)}
                  </span>
                </div>

                {/* Tour code */}
                <p className="ug-code">{selectedTour.tourCode}</p>

                {/* Tour title */}
                <h3 className="ug-tour-title" id={headingId}>
                  {selectedTour.title}
                </h3>

                {/* Duration + group type */}
                <div className="ug-meta">
                  <p className="ug-meta__item">
                    {pad2(selectedTour.days)} Days
                    <span className="ug-meta__dot" aria-hidden="true">
                      •
                    </span>
                    {pad2(selectedTour.nights)} Nights
                  </p>
                  <span className="ug-meta__dot" aria-hidden="true">
                    •
                  </span>
                  <p className="ug-meta__item">{selectedTour.groupType}</p>
                </div>

                {/* Route */}
                <p className="ug-route" aria-label={`Route: ${selectedTour.route.join(" to ")}`}>
                  {selectedTour.route.map((stop, index) => (
                    <span key={`${selectedTour.id}-${stop}`}>
                      {stop}
                      {index < selectedTour.route.length - 1 ? (
                        <span className="ug-route__sep" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </span>
                  ))}
                </p>

                {/* Summary */}
                <p className="ug-summary">{selectedTour.summary}</p>

                {/* Starting price */}
                {typeof selectedTour.startingPrice === "number" ? (
                  <p className="ug-price">
                    <span className="ug-price__from">Starting from</span>
                    <span className="ug-price__value">
                      {formatPrice(
                        selectedTour.startingPrice,
                        selectedTour.currency,
                      )}
                    </span>
                    <span className="ug-price__note">per person</span>
                  </p>
                ) : null}

                {/* ── Departure dates ─────────────────────────── */}
                <div className="ug-departures">
                  <p
                    className="ug-departures__label"
                    id={datesLabelId}
                  >
                    Upcoming Departures
                  </p>
                  <div
                    className="ug-dates"
                    role="radiogroup"
                    aria-labelledby={datesLabelId}
                  >
                    {selectedTour.departures.map((departure, index) => {
                      const parts = formatDepartureParts(departure.date);
                      const isSelected =
                        departure.id === selectedDeparture?.id;
                      const statusLabel =
                        DEPARTURE_STATUS_LABEL[departure.status];

                      return (
                        <button
                          key={departure.id}
                          type="button"
                          className={[
                            "ug-date",
                            isSelected ? "is-selected" : "",
                            departure.status === "sold-out" ? "is-sold" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          data-status={departure.status}
                          role="radio"
                          aria-checked={isSelected}
                          aria-label={`${formatReadableDate(departure.date)}, ${statusLabel}`}
                          ref={(node) => {
                            dateBtnRefs.current[index] = node;
                          }}
                          tabIndex={isSelected ? 0 : -1}
                          onClick={() => selectDeparture(departure)}
                          onKeyDown={(event) => onDateKeyDown(event, index)}
                        >
                          <span>
                            <span className="ug-date__day">{parts.day}</span>
                            <span className="ug-date__month">
                              {parts.month}
                            </span>
                          </span>
                          <span className="ug-date__status">
                            {statusLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Seat info / sold-out note */}
                  {seatNote ? (
                    <p className="ug-seats">{seatNote}</p>
                  ) : (
                    <p className="ug-seats" aria-hidden="true" />
                  )}
                </div>

                {/* ── CTAs ────────────────────────────────────── */}
                <div className="ug-actions">
                  {/*
                    View Tour: only rendered when tourUrl is present.
                    No /tours/* route exists in the master project yet,
                    so this is omitted from the data — no 404 risk.
                  */}
                  {selectedTour.tourUrl ? (
                    <Link
                      className="ug-btn ug-btn--ghost"
                      to={selectedTour.tourUrl}
                    >
                      View Tour
                      <span className="ug-btn__arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ) : null}

                  {/*
                    Create Query → master /create-query SPA route.
                    Uses Link (SPA router) not plain <a> to prevent
                    full-page reload.
                  */}
                  <Link
                    className="ug-btn ug-btn--primary"
                    to={queryHref}
                  >
                    Create Query
                    <span className="ug-btn__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PremiumTilt>

        {/* ── Other Fixed Tours picker ─────────────────────────── */}
        {/*
          NOT inside PremiumTilt — these are selector controls, not cards.
          Compact editorial list, keyboard navigable.
        */}
        <nav className="ug-picker" aria-labelledby={pickerLabelId}>
          <p className="ug-picker__label" id={pickerLabelId}>
            Other Fixed Tours
          </p>
          <div
            className="ug-picker__list"
            role="listbox"
            aria-label="Fixed tours"
            aria-orientation="horizontal"
          >
            {tours.map((tour, index) => {
              const isSelected = tour.id === selectedTour.id;
              return (
                <button
                  key={tour.id}
                  type="button"
                  className={`ug-pick${isSelected ? " is-selected" : ""}`}
                  role="option"
                  aria-selected={isSelected}
                  aria-controls={spotlightId}
                  ref={(node) => {
                    tourBtnRefs.current[index] = node;
                  }}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectTour(tour)}
                  onKeyDown={(event) => onTourKeyDown(event, index)}
                >
                  <span className="ug-pick__num">{pad2(index + 1)}</span>
                  <span className="ug-pick__name">{tour.title}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default UpcomingGroupsSection;
