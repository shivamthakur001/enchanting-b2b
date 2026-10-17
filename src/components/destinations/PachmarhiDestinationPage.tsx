/**
 * PachmarhiDestinationPage.tsx
 *
 * Pachmarhi Destination Detail Page — premium editorial layout.
 * Route: /destinations/pachmarhi (existing route, DestinationPage.tsx
 * detects slug === "pachmarhi" and renders this component instead).
 *
 * Architecture:
 *   - Centralized design system via destinationDetailConfig → buildDDCSSVars()
 *   - All visual tokens via --dd-* CSS custom properties (DestinationDetailPage.css)
 *   - Data sourced from src/data/pachmarhi.ts (no invented content)
 *   - Related packages from src/data/packages.ts (existing real data)
 *   - Related activities from src/data/topActivities.ts
 *   - Reuses PackageCard, Link, PremiumTilt, useReveal hook
 *   - Full keyboard accessibility, lazy images, reduced-motion support
 */

import { useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "../../router/Router";
import { PackageCard } from "../packages/PackageCard";
import { PremiumTilt } from "../ui/PremiumTilt";
import { useReveal } from "../../hooks/useReveal";
import { buildDDCSSVars, destinationDetailConfig } from "../../config/destinationDetailConfig";
import {
  pachmarhiQuickFacts,
  pachmarhiTags,
  pachmarhiWhyCards,
  pachmarhiIconicExperiences,
  pachmarhiStory,
  pachmarhiThemes,
  pachmarhiSeasons,
  pachmarhiConnectivity,
  pachmarhiTravellerProfiles,
  pachmarhiItineraries,
  pachmarhiRelatedPackages,
  type SampleItinerary,
} from "../../data/pachmarhi";
import { topActivities } from "../../data/topActivities";
import "./DestinationDetailPage.css";

// Pre-compute CSS vars from config (static at runtime)
const DD_CSS_VARS = buildDDCSSVars(destinationDetailConfig) as CSSProperties;

// ── Icon helpers (inline SVGs so we stay dependency-free) ─────────────────

function IconAltitude() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 18L12 4l4 14" />
      <path d="M5 18h14" />
    </svg>
  );
}

function IconTemperature() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0z" />
    </svg>
  );
}

function IconDiversity() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
    </svg>
  );
}

function IconAccessibility() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12h18M3 6l4 6-4 6M21 6l-4 6 4 6" />
    </svg>
  );
}

function IconAir() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2 5 5 0 0 1 5-5h12" />
      <path d="M17 5l3 3-3 3" />
      <path d="M7 11V5a2 2 0 0 1 4 0v3" />
    </svg>
  );
}

function IconTrain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="14" rx="3" />
      <path d="M4 11h16" />
      <path d="M9 17l-2 4M15 17l2 4" />
      <circle cx="9" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconRoad() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 21L12 4l7 17" />
      <path d="M12 4v17" />
    </svg>
  );
}

function IconLocal() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21c-4.4-4.4-7-8.2-7-11a7 7 0 1 1 14 0c0 2.8-2.6 6.6-7 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

const connectivityIcons = {
  air: <IconAir />,
  rail: <IconTrain />,
  road: <IconRoad />,
  local: <IconLocal />,
} as const;

const whyIcons = {
  altitude: <IconAltitude />,
  temperature: <IconTemperature />,
  diversity: <IconDiversity />,
  accessibility: <IconAccessibility />,
} as const;

// Traveller profile emoji icons (accessible, dependency-free)
const travellerIcons: Record<string, string> = {
  couple: "💑",
  family: "👨‍👩‍👧‍👦",
  fit: "🧳",
  senior: "🌿",
  school: "🎒",
  nature: "🔭",
};

// ═══════════════════════════════════════════════════════════════════════════
//  REVEAL WRAPPER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`dd-reveal${visible ? " dd-reveal--visible" : ""}${delay ? ` dd-reveal--delay-${delay}` : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  ITINERARY TABS (internal state)
// ═══════════════════════════════════════════════════════════════════════════

function ItineraryTabs({ itineraries }: { itineraries: SampleItinerary[] }) {
  const [activeId, setActiveId] = useState(itineraries[0].id);
  const active = itineraries.find((i) => i.id === activeId) ?? itineraries[0];

  return (
    <div>
      {/* Tab bar */}
      <div className="dd-itinerary__tabs" role="tablist" aria-label="Select itinerary">
        {itineraries.map((itin) => (
          <button
            key={itin.id}
            role="tab"
            aria-selected={itin.id === activeId}
            aria-controls={`dd-itinerary-panel-${itin.id}`}
            id={`dd-itinerary-tab-${itin.id}`}
            className={`dd-itinerary__tab${itin.id === activeId ? " dd-itinerary__tab--active" : ""}`}
            onClick={() => setActiveId(itin.id)}
          >
            {itin.duration} — {itin.title}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        id={`dd-itinerary-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`dd-itinerary-tab-${active.id}`}
        className="dd-itinerary__panel"
      >
        {/* Sticky meta sidebar */}
        <aside className="dd-itinerary__meta">
          <p className="dd-itinerary__meta-theme">{active.theme}</p>
          <h3 className="dd-itinerary__meta-title">{active.title}</h3>
          <div className="dd-itinerary__meta-stats">
            <div className="dd-itinerary__meta-stat">
              <span className="dd-itinerary__meta-stat-label">Duration</span>
              <span className="dd-itinerary__meta-stat-value">{active.duration}</span>
            </div>
            <div className="dd-itinerary__meta-stat">
              <span className="dd-itinerary__meta-stat-label">Nights</span>
              <span className="dd-itinerary__meta-stat-value">{active.nights}</span>
            </div>
          </div>
          <p className="dd-itinerary__meta-summary">{active.summary}</p>
          {active.note && <p className="dd-itinerary__meta-note">💡 {active.note}</p>}
          <div style={{ marginTop: "1.1rem" }}>
            <Link
              to={`/create-query?destination=pachmarhi&itinerary=${active.id}`}
              className="dd-cta__btn-primary"
              style={{ fontSize: "0.82rem", padding: "0.65rem 1.25rem", display: "inline-flex" }}
            >
              Enquire →
            </Link>
          </div>
        </aside>

        {/* Day-by-day timeline */}
        <div className="dd-itinerary__days">
          {active.days.map((day, i) => (
            <div className="dd-itinerary__day" key={i}>
              <div className="dd-itinerary__day-line" aria-hidden="true" />
              <div className="dd-itinerary__day-number">
                <span className="dd-itinerary__day-dot" />
                <span className="dd-itinerary__day-label">{day.day}</span>
              </div>
              <div className="dd-itinerary__day-content">
                <h4 className="dd-itinerary__day-title">{day.title}</h4>
                <ul className="dd-itinerary__day-activities">
                  {day.activities.map((act, j) => (
                    <li key={j} className="dd-itinerary__activity">{act}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function PachmarhiDestinationPage() {
  // Filter related activities from topActivities data
  const relatedActivities = topActivities.filter(
    (a) => a.destinationSlug === "pachmarhi" || a.mark === "nature",
  );

  return (
    <main
      className="dd-page"
      style={DD_CSS_VARS}
      id="pachmarhi-destination-page"
      aria-label="Pachmarhi destination guide"
    >
      {/* ═══════════════════════════════════════════════════════════════════
          1. CINEMATIC HERO
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-hero" aria-label="Pachmarhi hero">
        <img
          src="https://images.pexels.com/photos/36664317/pexels-photo-36664317.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Verdant Pachmarhi valley unfolding across layered Satpura forested hills"
          className="dd-hero__image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="dd-hero__top-vignette" aria-hidden="true" />
        <div className="dd-hero__gradient" aria-hidden="true" />

        <div className="dd-hero__content">
          {/* Eyebrow */}
          <p className="dd-hero__eyebrow">
            <span className="dd-hero__eyebrow-dot" aria-hidden="true" />
            Nature · Satpura Hills
            <span className="dd-hero__eyebrow-dot" aria-hidden="true" />
            Madhya Pradesh
          </p>

          {/* Title */}
          <h1 className="dd-hero__title">Pachmarhi</h1>

          {/* Description */}
          <p className="dd-hero__desc">
            Queen of the Satpuras — India's highest hill station in Madhya Pradesh, where colonial
            calm meets forested gorges, sacred caves and a cool climate that defies the plains.
          </p>

          {/* Destination tags */}
          <div className="dd-hero__tags" role="list" aria-label="Destination themes">
            {pachmarhiTags.map((tag) => (
              <span key={tag} className="dd-hero__tag" role="listitem">{tag}</span>
            ))}
          </div>

          {/* Quick facts strip */}
          <div className="dd-hero__facts" aria-label="Quick facts">
            {pachmarhiQuickFacts.map((fact) => (
              <div key={fact.label} className="dd-hero__fact">
                <span className="dd-hero__fact-label">{fact.label}</span>
                <span className="dd-hero__fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="dd-hero__scroll" aria-hidden="true">
          <div className="dd-hero__scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. WHY PACHMARHI WORKS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--green" aria-labelledby="dd-why-title">
        <div className="dd-container">
          <div className="dd-why__header">
            <Reveal>
              <p className="dd-why__eyebrow">Why this destination</p>
              <h2 className="dd-why__title" id="dd-why-title">Why Pachmarhi Works</h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="dd-why__intro">
                MP's only hill station combines a genuine cool-climate escape, sacred tribal
                geography, colonial character and forest wildlife — a rare quartet that sells
                effortlessly across every client profile your agency handles.
              </p>
            </Reveal>
          </div>

          <div className="dd-why__cards" role="list">
            {pachmarhiWhyCards.map((card, i) => (
              <Reveal key={card.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="dd-why-card" role="listitem">
                  <div className="dd-why-card__icon" aria-hidden="true">
                    {whyIcons[card.icon]}
                  </div>
                  <h3 className="dd-why-card__heading">{card.heading}</h3>
                  <p className="dd-why-card__body">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. ICONIC EXPERIENCES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--cream" aria-labelledby="dd-exp-title">
        <div className="dd-container">
          <Reveal className="dd-section-header">
            <span className="dd-section-eyebrow">Must-see attractions</span>
            <h2 className="dd-section-title" id="dd-exp-title">Iconic Experiences in Pachmarhi</h2>
            <p className="dd-section-intro">
              Waterfalls, gorges, cave temples, colonial lanes and forest wildlife — each site
              distinct, all within the same compact hill station.
            </p>
          </Reveal>

          <div className="dd-exp__grid" role="list">
            {pachmarhiIconicExperiences.map((exp, i) => (
              <Reveal key={exp.id} delay={Math.min((i % 3) + 1, 3) as 1 | 2 | 3}>
                <PremiumTilt strength="compact" className="h-full">
                  <article className="dd-exp-card" role="listitem" tabIndex={0}>
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      className="dd-exp-card__img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="dd-exp-card__overlay" aria-hidden="true" />
                    <div className="dd-exp-card__content">
                      <div className="dd-exp-card__top">
                        <span className="dd-exp-card__number">{exp.number}</span>
                        <span className="dd-exp-card__tag">{exp.tag}</span>
                      </div>
                      <h3 className="dd-exp-card__title">{exp.title}</h3>
                      <p className="dd-exp-card__subtitle">{exp.subtitle}</p>
                      <p className="dd-exp-card__desc">{exp.description}</p>
                    </div>
                  </article>
                </PremiumTilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. DESTINATION STORY
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--ivory" aria-labelledby="dd-story-title">
        <div className="dd-container">
          <div className="dd-story">
            {/* Text column */}
            <Reveal>
              <div>
                <span className="dd-section-eyebrow">{pachmarhiStory.eyebrow}</span>
                <h2 className="dd-section-title" id="dd-story-title">{pachmarhiStory.title}</h2>
                <div className="dd-story__body">
                  {pachmarhiStory.paragraphs.map((para, i) => (
                    <p key={i} className="dd-story__para">{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Image column */}
            <Reveal delay={2}>
              <div className="dd-story__image-wrap">
                <img
                  src={pachmarhiStory.image}
                  alt={pachmarhiStory.imageAlt}
                  className="dd-story__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. THEMES & EXPERIENCES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--green" aria-labelledby="dd-themes-title">
        <div className="dd-container">
          <Reveal className="dd-section-header">
            <span className="dd-section-eyebrow">Four distinct experiences</span>
            <h2 className="dd-section-title" id="dd-themes-title">Themes &amp; Experiences</h2>
            <p className="dd-section-intro">
              Pachmarhi offers four complementary visitor experiences within a single destination
              — each distinct enough to justify a separate pitch.
            </p>
          </Reveal>

          <div className="dd-themes__grid" role="list">
            {pachmarhiThemes.map((theme, i) => (
              <Reveal key={theme.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <article className="dd-theme-card" role="listitem" tabIndex={0} aria-label={theme.title}>
                  <img
                    src={theme.image}
                    alt={theme.imageAlt}
                    className="dd-theme-card__img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="dd-theme-card__overlay" aria-hidden="true" />
                  <div className="dd-theme-card__content">
                    <span className="dd-theme-card__label">{theme.subtitle}</span>
                    <h3 className="dd-theme-card__title">{theme.title}</h3>
                    <p className="dd-theme-card__subtitle">{theme.description}</p>
                    <ul className="dd-theme-card__items" aria-label={`${theme.title} highlights`}>
                      {theme.items.map((item) => (
                        <li key={item} className="dd-theme-card__item">{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. A DESTINATION FOR EVERY SEASON
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--cream" aria-labelledby="dd-seasons-title">
        <div className="dd-container">
          <Reveal className="dd-section-header">
            <span className="dd-section-eyebrow">Seasonal planning</span>
            <h2 className="dd-section-title" id="dd-seasons-title">A Destination for Every Season</h2>
            <p className="dd-section-intro">
              Pachmarhi operates year-round with different appeals. Match the right season to
              each client profile for a confident recommendation.
            </p>
          </Reveal>

          <div className="dd-seasons__grid" role="list">
            {pachmarhiSeasons.map((season, i) => (
              <Reveal key={season.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <article className="dd-season-card" role="listitem">
                  {season.badge && (
                    <span className="dd-season-card__badge">{season.badge}</span>
                  )}
                  <h3 className="dd-season-card__season">{season.season}</h3>
                  <p className="dd-season-card__months">{season.months}</p>
                  <p className="dd-season-card__temp">🌡️ {season.temperature}</p>
                  <p className="dd-season-card__character">{season.character}</p>
                  <ul className="dd-season-card__highlights" aria-label="Season highlights">
                    {season.highlights.map((h) => (
                      <li key={h} className="dd-season-card__highlight">{h}</li>
                    ))}
                  </ul>
                  <p className="dd-season-card__suitability">Best for: {season.suitability}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. EASY ACCESS TO PACHMARHI
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--green" aria-labelledby="dd-connect-title">
        <div className="dd-container">
          <Reveal className="dd-section-header">
            <span className="dd-section-eyebrow">Getting here</span>
            <h2 className="dd-section-title" id="dd-connect-title">Easy Access to Pachmarhi</h2>
            <p className="dd-section-intro">
              Well connected by rail and air via Bhopal and Pipariya, with reliable road transfers
              through scenic Satpura foothills.
            </p>
          </Reveal>

          <div className="dd-connect__grid" role="list">
            {pachmarhiConnectivity.map((item, i) => (
              <Reveal key={item.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="dd-connect-card" role="listitem">
                  <div className="dd-connect-card__icon" aria-hidden="true">
                    {connectivityIcons[item.mode]}
                  </div>
                  <div className="dd-connect-card__body">
                    <p className="dd-connect-card__mode">{item.mode}</p>
                    <h3 className="dd-connect-card__title">{item.title}</h3>
                    <p className="dd-connect-card__detail">{item.detail}</p>
                    {(item.distance || item.duration) && (
                      <div className="dd-connect-card__meta">
                        {item.distance && (
                          <div className="dd-connect-card__meta-item">
                            <span className="dd-connect-card__meta-label">Distance</span>
                            <span className="dd-connect-card__meta-value">{item.distance}</span>
                          </div>
                        )}
                        {item.duration && (
                          <div className="dd-connect-card__meta-item">
                            <span className="dd-connect-card__meta-label">Travel time</span>
                            <span className="dd-connect-card__meta-value">{item.duration}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. TRAVELLER MATCH
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--ivory" aria-labelledby="dd-traveller-title">
        <div className="dd-container">
          <Reveal className="dd-section-header">
            <span className="dd-section-eyebrow">Client profiling</span>
            <h2 className="dd-section-title" id="dd-traveller-title">Traveller Match</h2>
            <p className="dd-section-intro">
              Pachmarhi works across a wider range of client profiles than most single destinations.
              Here's how to position it for each.
            </p>
          </Reveal>

          <div className="dd-traveller__grid" role="list">
            {pachmarhiTravellerProfiles.map((profile, i) => (
              <Reveal key={profile.id} delay={Math.min((i % 3) + 1, 3) as 1 | 2 | 3}>
                <article className="dd-traveller-card" role="listitem">
                  <div className="dd-traveller-card__header">
                    <div className="dd-traveller-card__icon" aria-hidden="true" role="img" aria-label={profile.profile}>
                      {travellerIcons[profile.icon]}
                    </div>
                    <div>
                      <h3 className="dd-traveller-card__profile">{profile.profile}</h3>
                      <span className={`dd-traveller-card__badge dd-traveller-card__badge--${profile.suitability}`}>
                        {profile.suitability === "ideal" ? "✦ Ideal" : profile.suitability === "good" ? "Good fit" : "Limited"}
                      </span>
                    </div>
                  </div>
                  <p className="dd-traveller-card__reason">{profile.reason}</p>
                  <ul className="dd-traveller-card__tips" aria-label="Tips">
                    {profile.tips.map((tip) => (
                      <li key={tip} className="dd-traveller-card__tip">{tip}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          9. SAMPLE ITINERARIES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-section dd-section--ivory-deep" aria-labelledby="dd-itinerary-title">
        <div className="dd-container">
          <Reveal className="dd-section-header">
            <span className="dd-section-eyebrow">Suggested programmes</span>
            <h2 className="dd-section-title" id="dd-itinerary-title">Sample Itineraries</h2>
            <p className="dd-section-intro">
              Three template itineraries — 2N, 3N and extended 5N circuit — ready to adapt
              for any client brief.
            </p>
          </Reveal>

          <Reveal>
            <ItineraryTabs itineraries={pachmarhiItineraries} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          10. CURATED PACKAGES FEATURING PACHMARHI
          ═══════════════════════════════════════════════════════════════════ */}
      {pachmarhiRelatedPackages.length > 0 && (
        <section className="dd-section dd-section--cream" aria-labelledby="dd-packages-title">
          <div className="dd-container">
            <Reveal className="dd-section-header">
              <span className="dd-section-eyebrow">For the trade</span>
              <h2 className="dd-section-title" id="dd-packages-title">
                Curated Packages Featuring Pachmarhi
              </h2>
              <p className="dd-section-intro">
                Programmes sourced from our active portfolio — ready to quote, customise and book.
              </p>
            </Reveal>

            <div className="dd-packages__grid">
              {pachmarhiRelatedPackages.slice(0, 6).map((pkg) => (
                <Reveal key={pkg.id}>
                  <PackageCard pkg={pkg} />
                </Reveal>
              ))}
            </div>

            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Link
                to="/packages"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--dd-green, #2a4536)",
                  textDecoration: "none",
                  padding: "0.6rem 1.25rem",
                  border: "1.5px solid var(--dd-green, #2a4536)",
                  borderRadius: "999px",
                }}
              >
                View all nature programmes →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          11. RELATED EXPERIENCES & ACTIVITIES
          ═══════════════════════════════════════════════════════════════════ */}
      {relatedActivities.length > 0 && (
        <section className="dd-section dd-section--ivory" aria-labelledby="dd-related-title">
          <div className="dd-container">
            <Reveal className="dd-section-header">
              <span className="dd-section-eyebrow">Experiences &amp; activities</span>
              <h2 className="dd-section-title" id="dd-related-title">
                Related Experiences &amp; Activities
              </h2>
              <p className="dd-section-intro">
                On-ground experiences available to incorporate into any Pachmarhi programme.
              </p>
            </Reveal>

            <div className="dd-related-exp" role="list">
              {relatedActivities.slice(0, 6).map((act, i) => (
                <Reveal key={act.id} delay={Math.min((i % 3) + 1, 3) as 1 | 2 | 3}>
                  <article className="dd-related-exp-card" role="listitem">
                    <div className="dd-related-exp-card__img-wrap">
                      <img
                        src={act.image}
                        alt={act.imageAlt}
                        className="dd-related-exp-card__img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="dd-related-exp-card__content">
                      <span className="dd-related-exp-card__category">{act.category}</span>
                      <h3 className="dd-related-exp-card__title">{act.title}</h3>
                      <p className="dd-related-exp-card__desc">{act.summary}</p>
                      <div className="dd-related-exp-card__meta">
                        <span>📍 {act.location}</span>
                        <span>⏱ {act.duration}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          12. FINAL B2B CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="dd-cta" aria-labelledby="dd-cta-title">
        <div className="dd-cta__inner">
          <Reveal>
            <div className="dd-cta__text">
              <p className="dd-cta__eyebrow">B2B Enquiry</p>
              <h2 className="dd-cta__title" id="dd-cta-title">
                Plan a Pachmarhi Journey<br />for Your Clients
              </h2>
              <p className="dd-cta__desc">
                Our Pachmarhi specialists will tailor any of these itineraries to your client's
                brief — from a 2-night family escape to an extended Satpura nature circuit.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="dd-cta__actions">
              <Link
                to="/create-query?destination=pachmarhi"
                className="dd-cta__btn-primary"
                id="pachmarhi-cta-query"
              >
                Create Query
              </Link>
              <Link
                to="/packages?theme=nature"
                className="dd-cta__btn-outline"
                id="pachmarhi-cta-packages"
              >
                View Programmes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
