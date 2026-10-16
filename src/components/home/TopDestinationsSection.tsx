import { useMemo, useState } from "react";
import "./TopDestinationsSection.css";

import { topDestinations } from "../../data/topDestinations";
import { Link } from "../../router/Router";
import type { Destination } from "../../types";
import { ArrowRightIcon } from "../icons/Icons";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { TopDestinationCard } from "./TopDestinationCard";
import { TopDestinationsMobileRail } from "./TopDestinationsMobileRail";

const PER_PAGE = 5;

type DestinationFilter = "all" | "heritage" | "wildlife" | "nature" | "spirituality";

const FILTERS: ReadonlyArray<{ value: DestinationFilter; label: string }> = [
  { value: "all", label: "All Places" },
  { value: "heritage", label: "Heritage" },
  { value: "wildlife", label: "Wildlife" },
  { value: "nature", label: "Nature" },
  { value: "spirituality", label: "Spirituality" },
];

function matchesFilter(destination: Destination, filter: DestinationFilter): boolean {
  return filter === "all" || destination.themes.includes(filter);
}

export function TopDestinationsSection() {
  const [activeFilter, setActiveFilter] = useState<DestinationFilter>("all");
  const [page, setPage] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredDestinations = useMemo(() => {
    return topDestinations.filter((destination) => matchesFilter(destination, activeFilter));
  }, [activeFilter]);

  const total = filteredDestinations.length;
  const pageCount = Math.max(1, Math.ceil(total / PER_PAGE));
  const currentPage = Math.min(page, pageCount - 1);
  const startIndex = currentPage * PER_PAGE;
  const visible = filteredDestinations.slice(startIndex, startIndex + PER_PAGE);
  const endIndex = startIndex + visible.length;

  const canPrev = currentPage > 0;
  const canNext = currentPage < pageCount - 1;

  const resultText = total
    ? `Showing ${startIndex + 1}–${endIndex} of ${total} destinations`
    : "Showing 0 of 0 destinations";

  const rangeText = total
    ? `${startIndex + 1}–${endIndex} / ${total}`
    : "0 / 0";

  function handleFilterChange(filter: DestinationFilter) {
    setActiveFilter(filter);
    setPage(0);
    setHoveredId(null);
  }

  function handlePrev() {
    if (!canPrev) return;
    setPage((prev) => Math.max(0, prev - 1));
    setHoveredId(null);
  }

  function handleNext() {
    if (!canNext) return;
    setPage((prev) => Math.min(pageCount - 1, prev + 1));
    setHoveredId(null);
  }

  return (
    <section className="td-section" id="top-destinations" aria-label="Top Destinations">
      <div className="td-shell">
        {/* Approved Master Heading — Untouched typography and animation */}
        <EditorialSectionHeading
          eyebrow="THE MADHYA PRADESH EDIT"
          scriptWord="Top"
          title="Destinations"
          intro="Remarkable places. Thoughtfully curated for your next client journey."
        />

        {/* Filters Toolbar */}
        <div className="td-toolbar">
          <div className="td-filters" role="group" aria-label="Filter destinations by theme">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className="td-filter"
                data-active={activeFilter === filter.value ? "true" : "false"}
                aria-pressed={activeFilter === filter.value}
                onClick={() => handleFilterChange(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <p className="td-result-count" role="status" aria-live="polite" aria-atomic="true">
            {resultText}
          </p>
        </div>

        {/* Main Card Presentation Area */}
        <div className="td-cards-container">
          {visible.length > 0 ? (
            <>
              {/* Desktop: 5-card flex row with Option B cinematic hover expansion */}
              <div
                className="hidden lg:flex td-desktop-row"
                style={visible.length < PER_PAGE ? { justifyContent: "flex-start" } : undefined}
              >
                {visible.map((destination, index) => (
                  <div
                    key={destination.id}
                    className="td-desktop-card-slot"
                    style={
                      visible.length === PER_PAGE
                        ? {
                            flexGrow: hoveredId === destination.id ? 1.65 : hoveredId !== null ? 0.82 : 1,
                            flexBasis: 0,
                            minWidth: 0,
                            transition: "flex-grow 650ms cubic-bezier(0.22, 1, 0.36, 1)",
                          }
                        : {
                            flex: "0 0 280px",
                            maxWidth: "320px",
                          }
                    }
                  >
                    <TopDestinationCard
                      destination={destination}
                      position={startIndex + index + 1}
                      isHovered={hoveredId === destination.id}
                      isDimmed={hoveredId !== null && hoveredId !== destination.id}
                      variant="desktop"
                      onHoverStart={() => setHoveredId(destination.id)}
                      onHoverEnd={() => setHoveredId(null)}
                    />
                  </div>
                ))}
              </div>

              {/* Tablet & Mobile: Horizontal Snap Rail (All 5 items accessible, center autoplay) */}
              <div className="lg:hidden">
                <TopDestinationsMobileRail
                  destinations={visible}
                  startIndex={startIndex}
                />
              </div>
            </>
          ) : (
            <p className="td-empty">No destinations match this theme.</p>
          )}
        </div>

        {/* Master Bottom Navigation Bar */}
        <div className="td-bottom-bar">
          <p className="td-editorial-note">Different places. Endless possibilities.</p>

          <nav className="td-pagination" aria-label="Destination pages">
            <button
              type="button"
              className="td-page-button td-page-button--previous"
              aria-label="Previous destinations"
              disabled={!canPrev}
              onClick={handlePrev}
            >
              <ArrowRightIcon size={18} />
            </button>
            <span
              className="td-page-position"
              aria-label={`Destination range ${startIndex + 1} to ${endIndex} of ${total}`}
            >
              {rangeText}
            </span>
            <button
              type="button"
              className="td-page-button"
              aria-label="Next destinations"
              disabled={!canNext}
              onClick={handleNext}
            >
              <ArrowRightIcon size={18} />
            </button>
          </nav>

          <Link className="td-all-link" to="/discover">
            Explore by theme
          </Link>
        </div>
      </div>
    </section>
  );
}
