import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EditorialSectionHeading } from "./EditorialSectionHeading";
import { Link } from "../../router/Router";
import { PremiumTilt } from "../ui/PremiumTilt";
import {
  featuredAccommodations,
  getAccommodationDestinations,
  type FeaturedAccommodation,
} from "../../data/featuredAccommodations";
import "./FeaturedAccommodationsSection.css";

const AUTO_PLAY_MS = 6000;
const SHOWN_AMENITIES = 4;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function DestinationSelector({
  destinations,
  current,
  onChange,
}: {
  destinations: string[];
  current: string;
  onChange: (destination: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const currentIndex = Math.max(destinations.indexOf(current), 0);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const move = (offset: number) => {
    const nextIndex = Math.min(
      Math.max(currentIndex + offset, 0),
      destinations.length - 1,
    );
    onChange(destinations[nextIndex]);
    setOpen(true);
  };

  return (
    <div className="fa-selector" ref={rootRef}>
      <span className="fa-selector-label" id="fa-staying-in">
        Staying in
      </span>
      <button
        type="button"
        className="fa-selector-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="fa-staying-in"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            move(1);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            move(-1);
          } else if (event.key === "Home") {
            event.preventDefault();
            onChange(destinations[0]);
            setOpen(true);
          } else if (event.key === "End") {
            event.preventDefault();
            onChange(destinations[destinations.length - 1]);
            setOpen(true);
          }
        }}
      >
        <span>{current}</span>
        <svg className="fa-chevron" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M4 6.5 9 11.5 14 6.5" />
        </svg>
      </button>
      <ul className="fa-menu" role="listbox" hidden={!open} aria-label="Destinations">
        {destinations.map((destination) => (
          <li key={destination} role="none">
            <button
              type="button"
              role="option"
              aria-selected={destination === current}
              className={`fa-menu-item${destination === current ? " is-current" : ""}`}
              onClick={() => {
                onChange(destination);
                setOpen(false);
              }}
            >
              {destination}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PropertyPanel({ property }: { property: FeaturedAccommodation }) {
  const amenities = property.amenities.slice(0, SHOWN_AMENITIES);
  const extra = Math.max(property.amenities.length - amenities.length, 0);

  return (
    <aside className="fa-panel" aria-live="polite">
      <div className="fa-panel-inner" key={property.id}>
        <p className="fa-meta">
          {property.propertyType} <span>·</span> {property.destination}
        </p>
        <h3 className="fa-name">{property.name}</h3>
        <p className="fa-desc">{property.summary}</p>
        <div className="fa-amenities" aria-label="Key amenities">
          <div className="fa-amenity-row">
            {amenities.map((amenity) => (
              <span key={amenity}>{amenity}</span>
            ))}
          </div>
          {extra > 0 ? <span className="fa-more">+{extra} more</span> : null}
        </div>
        <div className="fa-actions">
          <Link to={property.route} className="fa-view">
            View Property <span aria-hidden="true">→</span>
          </Link>
          <Link to={property.queryUrl} className="fa-query">
            Add to Query
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function FeaturedAccommodationsSection() {
  const destinations = useMemo(() => getAccommodationDestinations(), []);
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0] ?? "",
  );
  const [propertyIndex, setPropertyIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const properties = useMemo(
    () =>
      featuredAccommodations.filter(
        (property) => property.destination === selectedDestination,
      ),
    [selectedDestination],
  );
  const activeProperty = properties[propertyIndex] ?? properties[0];
  const canBrowse = properties.length > 1;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setPropertyIndex(0);
  }, [selectedDestination]);

  useEffect(() => {
    if (!canBrowse || paused || reducedMotion) return;
    const timer = window.setTimeout(() => {
      setPropertyIndex((current) => (current + 1) % properties.length);
    }, AUTO_PLAY_MS);
    return () => window.clearTimeout(timer);
  }, [canBrowse, paused, properties.length, propertyIndex, reducedMotion]);

  const go = useCallback(
    (direction: -1 | 1) => {
      if (!canBrowse) return;
      setPropertyIndex(
        (current) => (current + direction + properties.length) % properties.length,
      );
    },
    [canBrowse, properties.length],
  );

  useEffect(() => {
    const onVisibilityChange = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  if (!activeProperty) return null;

  return (
    <section
      className="fa-section"
      id="featured-accommodations"
      aria-label="Featured Accommodations"
    >
      <div className="fa-shell">
        <header className="fa-header">
          <EditorialSectionHeading
            eyebrow="STAYS BY DESTINATION"
            scriptWord="Featured"
            title="Accommodations"
            intro="Our trusted network of hotels across MP, chosen for agent-friendly service and quality stays."
          />
          <DestinationSelector
            destinations={destinations}
            current={selectedDestination}
            onChange={(destination) => {
              setSelectedDestination(destination);
              setPropertyIndex(0);
            }}
          />
        </header>

        <div
          className="fa-stage"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
        >
          <PremiumTilt
            strength="subtle"
            className="fa-visual-wrap"
            aria-label={`${activeProperty.name} visual`}
          >
            <div className="fa-visual">
              <img
                key={activeProperty.id}
                className="fa-slide is-active"
                src={activeProperty.image}
                alt={`${activeProperty.name} in ${activeProperty.destination}`}
              />
              <div className="fa-visual-shade" aria-hidden="true" />
            </div>
          </PremiumTilt>
          <PropertyPanel property={activeProperty} />
        </div>

        <nav
          className="fa-nav"
          aria-label="Property navigation"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
        >
          <button
            type="button"
            className="fa-arrow"
            onClick={() => go(-1)}
            disabled={!canBrowse}
            aria-label="Previous property"
          >
            ←
          </button>
          <div className="fa-counter" aria-live="polite">
            <span>{pad(propertyIndex + 1)}</span>
            <span className="fa-counter-sep">/</span>
            <span>{pad(properties.length)}</span>
          </div>
          <button
            type="button"
            className="fa-arrow"
            onClick={() => go(1)}
            disabled={!canBrowse}
            aria-label="Next property"
          >
            →
          </button>
        </nav>
      </div>
    </section>
  );
}
