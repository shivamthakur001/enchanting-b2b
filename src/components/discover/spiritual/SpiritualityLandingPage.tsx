import { useState, type CSSProperties, type MouseEvent } from "react";
import type { Destination, DiscoverTheme, TravelPackage } from "../../../types";
import { Link } from "../../../router/Router";
import { getDestination } from "../../../data/destinations";
import {
  getDestinationCardImage,
  handleDestinationCardImageError,
} from "../../../lib/destinationCardImages";
import { spiritualityLandingConfig as cfg } from "./config/spiritualityLandingConfig";
import { spiritualityTempleBackgroundConfig as bgConfig } from "../../../config/spiritualityTempleBackgroundConfig";
import { CinematicThemeSwitcher } from "../shared/CinematicThemeSwitcher";
import { TempleIvorySpiritualBackground } from "./TempleIvorySpiritualBackground";
import "./spiritualityLanding.css";

interface SpiritualityLandingPageProps {
  theme: DiscoverTheme;
  destinations: Destination[];
  packages: TravelPackage[];
}

type SpiritualIconName = "temple" | "river" | "tradition";
function SpiritualMiniIcon({ icon }: { icon: SpiritualIconName }) {
  if (icon === "river") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 6c3-2 5 2 8 0s5-2 8 0 4 2 4 2M2 12c3-2 5 2 8 0s5-2 8 0 4 2 4 2M2 18c3-2 5 2 8 0s5-2 8 0 4 2 4 2" />
      </svg>
    );
  }
  if (icon === "tradition") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2c-2 4-4 6-4 9a4 4 0 0 0 8 0c0-3-2-5-4-9z" />
        <path d="M7 16h10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z" />
        <path d="M10 20v2M14 20v2" />
      </svg>
    );
  }
  /* default: temple */
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l2 4h4l-2 3v11H8V9L6 6h4l2-4z" />
      <path d="M4 22h16" />
      <path d="M10 16h4v6h-4z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

function jumpTo(id: string, event: MouseEvent<HTMLAnchorElement>) {
  const node = document.getElementById(id);
  if (node) {
    event.preventDefault();
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SpiritualityLandingPage({ theme, destinations, packages }: SpiritualityLandingPageProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapters = cfg.expressions.chapters;
  const chapter = chapters[activeChapter];

  const orderedDestinations = [...destinations].sort((a, b) => {
    const rank = (id: string) => {
      const result = cfg.destinations.priorityIds.indexOf(id as (typeof cfg.destinations.priorityIds)[number]);
      return result < 0 ? 100 : result;
    };
    return rank(a.id) - rank(b.id);
  });

  const colors = {
    "--spirituality-bg": cfg.colors.background,
    "--spirituality-surface": cfg.colors.surface,
    "--spirituality-surface-dark": cfg.colors.surfaceDark,
    "--spirituality-gold": cfg.colors.gold,
    "--spirituality-gold-light": cfg.colors.goldLight,
    "--spirituality-ivory": cfg.colors.ivory,
    "--spirituality-text": cfg.colors.textDark,
    "--spirituality-muted": cfg.colors.muted,
    "--spirituality-muted-light": cfg.colors.mutedLight,
    "--spirituality-border": cfg.colors.border,
  } as CSSProperties;

  const borderStyle = {
    "--stb-border-gold": bgConfig.borders.color,
    "--stb-border-soft": bgConfig.borders.softColor,
    "--stb-border-opacity": bgConfig.borders.opacity,
    "--stb-border-width": bgConfig.borders.width,
    "--stb-border-left": bgConfig.borders.position.left,
    "--stb-border-right": bgConfig.borders.position.right,
    "--stb-border-double-gap": bgConfig.borders.doubleRuleGap,
    "--stb-border-mobile-display": bgConfig.borders.mobile.show ? "block" : "none",
    "--stb-border-mobile-opacity": bgConfig.borders.mobile.opacity,
    "--stb-border-mobile-width": bgConfig.borders.mobile.width,
    "--stb-border-mobile-left": bgConfig.borders.mobile.position.left,
    "--stb-border-mobile-right": bgConfig.borders.mobile.position.right,
  } as CSSProperties;

  return (
    <div className="spirituality-page" data-theme="spirituality" style={colors}>
      {/* Decorative background behind all content */}
      <TempleIvorySpiritualBackground />

      {/* SECTION 1: CINEMATIC HERO */}
      <section className="spirituality-hero" aria-labelledby="spirituality-hero-title">
        <img
          className="spirituality-hero__image"
          src={cfg.hero.image || theme.heroImage}
          alt={cfg.hero.imageAlt}
          loading="eager"
          fetchPriority="high"
        />
        <div className="spirituality-hero__shade" aria-hidden="true" />
        <div className="spirituality-shell spirituality-hero__inner">
          <div className="spirituality-hero__copy">
            <p className="spirituality-eyebrow">{cfg.hero.eyebrow}</p>
            <h1 id="spirituality-hero-title" className="spirituality-hero__title">
              {cfg.hero.titleTop}
              <span>{cfg.hero.titleAccent}</span>
            </h1>
            <p className="spirituality-hero__lead">{cfg.hero.description}</p>
            <div className="spirituality-hero__buttons">
              <a
                className="spirituality-button spirituality-button--gold"
                href="#spirituality-destinations"
                onClick={(event) => jumpTo("spirituality-destinations", event)}
              >
                {cfg.hero.primaryText}
                <ArrowIcon />
              </a>
              <Link className="spirituality-button spirituality-button--outline" to="/create-query?theme=spirituality">
                {cfg.hero.secondaryText}
                <ArrowIcon />
              </Link>
            </div>
            <div className="spirituality-hero__facts" aria-label="Spiritual journey highlights">
              {cfg.hero.quickFacts.map((item) => (
                <div className="spirituality-hero__fact" key={item.label}>
                  <span className="spirituality-hero__fact-icon">
                    <SpiritualMiniIcon icon={item.icon as SpiritualIconName} />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          className="spirituality-hero__scroll"
          href="#spirituality-intro"
          onClick={(event) => jumpTo("spirituality-intro", event)}
        >
          <span className="spirituality-hero__scroll-mark" />
          Scroll to explore
        </a>
      </section>

      {/* SECTION 2: CINEMATIC THEME SWITCHER */}
      <CinematicThemeSwitcher activeSlug="spirituality" />

      {/* MIDDLE CONTENT REGION (Continuous Antique-Gold Side Borders) */}
      <div className="spirituality-middle-region" style={borderStyle}>
        {bgConfig.borders.show && (
          <div
            className={`spirituality-gold-frame${bgConfig.borders.doubleRule ? " spirituality-gold-frame--double" : ""}`}
            aria-hidden="true"
          >
            <div className="spirituality-gold-frame__side spirituality-gold-frame__side--left">
              <span className="spirituality-gold-frame__cap spirituality-gold-frame__cap--top" />
              <span className="spirituality-gold-frame__cap spirituality-gold-frame__cap--bottom" />
            </div>
            <div className="spirituality-gold-frame__side spirituality-gold-frame__side--right">
              <span className="spirituality-gold-frame__cap spirituality-gold-frame__cap--top" />
              <span className="spirituality-gold-frame__cap spirituality-gold-frame__cap--bottom" />
            </div>
          </div>
        )}

        {/* SECTION 3: EDITORIAL INTRO */}
      <section
        id="spirituality-intro"
        className="spirituality-intro spirituality-section"
        aria-labelledby="spirituality-intro-title"
      >
        <div className="spirituality-shell spirituality-intro__grid">
          <div>
            <p className="spirituality-eyebrow">{cfg.intro.eyebrow}</p>
            <h2 id="spirituality-intro-title" className="spirituality-heading spirituality-intro__statement">
              {cfg.intro.heading}
            </h2>
          </div>
          <div className="spirituality-intro__narrative">
            <p>{cfg.intro.paragraphOne}</p>
            <p>{cfg.intro.paragraphTwo}</p>
            <div className="spirituality-intro__tags" aria-label="Spiritual interests">
              {cfg.intro.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUR SPIRITUAL EXPRESSIONS */}
      <section
        className="spirituality-expressions spirituality-section"
        id="spirituality-expressions"
        aria-labelledby="spirituality-expressions-title"
      >
        <div className="spirituality-shell">
          <header className="spirituality-section-heading">
            <p className="spirituality-eyebrow">{cfg.expressions.eyebrow}</p>
            <h2 id="spirituality-expressions-title" className="spirituality-heading">
              {cfg.expressions.heading}
            </h2>
            <p>{cfg.expressions.description}</p>
          </header>
          <div className="spirituality-expressions__layout">
            <div
              className="spirituality-expressions__showcase"
              id="spirituality-chapter-panel"
              role="tabpanel"
              aria-labelledby={`spirituality-tab-${chapter.id}`}
            >
              <img key={chapter.id} src={chapter.image} alt={chapter.imageAlt} loading="lazy" />
              <div className="spirituality-expressions__showcase-shade" />
              <div className="spirituality-expressions__showcase-copy">
                <span className="spirituality-label">
                  {chapter.number} — {chapter.tag}
                </span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <div className="spirituality-expressions__meta">
                  <span>
                    <small>Key Destinations</small>
                    <strong>{chapter.locations}</strong>
                  </span>
                  <span>
                    <small>Experience Character</small>
                    <strong>{chapter.characteristic}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="spirituality-expressions__tabs" role="tablist" aria-label="Choose a spiritual expression">
              {chapters.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  id={`spirituality-tab-${item.id}`}
                  key={item.id}
                  className={`spirituality-expressions__tab${index === activeChapter ? " is-active" : ""}`}
                  aria-selected={index === activeChapter}
                  aria-controls="spirituality-chapter-panel"
                  onClick={() => setActiveChapter(index)}
                  onMouseEnter={() => setActiveChapter(index)}
                >
                  <span className="spirituality-label">
                    Chapter {item.number} · {item.tag}
                  </span>
                  <strong>{item.title}</strong>
                  <small>{item.blurb}</small>
                  <img src={item.image} alt="" loading="lazy" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DESTINATIONS GRID */}
      <section
        id="spirituality-destinations"
        className="spirituality-destinations spirituality-section"
        aria-labelledby="spirituality-destinations-title"
      >
        <div className="spirituality-shell">
          <header className="spirituality-section-heading spirituality-section-heading--split">
            <div>
              <p className="spirituality-eyebrow">{cfg.destinations.eyebrow}</p>
              <h2 id="spirituality-destinations-title" className="spirituality-heading">
                Explore
                <br />
                <em>Spiritual Destinations</em>
              </h2>
            </div>
            <p>{cfg.destinations.description}</p>
          </header>
          {orderedDestinations.length ? (
            <div className="spirituality-destinations__grid">
              {orderedDestinations.map((destination) => (
                <Link
                  key={destination.id}
                  to={`/destinations/${destination.slug}`}
                  className="spirituality-destination-card"
                >
                  <img
                    src={getDestinationCardImage(destination)}
                    alt={destination.imageAlt}
                    loading="lazy"
                    onError={(event) => handleDestinationCardImageError(event, destination)}
                  />
                  <span className="spirituality-destination-card__shade" />
                  <span className="spirituality-destination-card__copy">
                    <small>{destination.region}</small>
                    <strong>{destination.name}</strong>
                    <span>{destination.summary}</span>
                  </span>
                  <span className="spirituality-destination-card__arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="spirituality-empty">Spiritual destinations will appear here as they are published.</p>
          )}
        </div>
      </section>

      {/* SECTION 6: PROGRAMMES */}
      <section
        id="spirituality-programmes"
        className="spirituality-programmes spirituality-section"
        aria-labelledby="spirituality-programmes-title"
      >
        <div className="spirituality-shell">
          <header className="spirituality-section-heading spirituality-section-heading--with-link">
            <div>
              <p className="spirituality-eyebrow">{cfg.programmes.eyebrow}</p>
              <h2 className="spirituality-heading" id="spirituality-programmes-title">
                {cfg.programmes.heading}
              </h2>
            </div>
            <Link to="/packages" className="spirituality-text-link">
              View All B2B Programmes <ArrowIcon />
            </Link>
          </header>
          {packages.length ? (
            <div className="spirituality-programmes__grid">
              {packages.map((pkg) => (
                <article key={pkg.id} className="spirituality-programme-card">
                  <div className="spirituality-programme-card__photo">
                    <img src={pkg.image} alt={pkg.imageAlt} loading="lazy" />
                    {(pkg.limitedOffer || pkg.highlight) && (
                      <span className="spirituality-programme-card__tag">
                        {pkg.limitedOffer ? pkg.offerLabel || "Trade exclusive" : pkg.highlight}
                      </span>
                    )}
                  </div>
                  <div className="spirituality-programme-card__body">
                    <span className="spirituality-programme-card__meta">
                      {pkg.duration} · {pkg.destinations.map((id) => getDestination(id)?.name).filter(Boolean).join(" · ")}
                    </span>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.summary}</p>
                    <div className="spirituality-programme-card__bottom">
                      <div>
                        <small>From</small>
                        <strong>{pkg.priceFrom}</strong>
                        <small>per person, subject to package terms</small>
                      </div>
                      <Link
                        to={`/create-query?package=${encodeURIComponent(pkg.slug)}`}
                        className="spirituality-programme-card__enquire"
                      >
                        Enquire <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="spirituality-empty">
              Contact our trade team to curate a spiritual programme for your clients.{" "}
              <Link to="/create-query?theme=spirituality">Create a Query</Link>
            </p>
          )}
        </div>
      </section>
      </div>

      {/* SECTION 7: FINAL CINEMATIC CTA */}
      <section className="spirituality-cta" aria-labelledby="spirituality-cta-title">
        <img src={cfg.closingCTA.image} alt={cfg.closingCTA.imageAlt} loading="lazy" />
        <div className="spirituality-cta__shade" aria-hidden="true" />
        <div className="spirituality-shell spirituality-cta__inner">
          <div className="spirituality-cta__copy">
            <p className="spirituality-eyebrow">{cfg.closingCTA.eyebrow}</p>
            <h2 id="spirituality-cta-title" className="spirituality-heading">
              {cfg.closingCTA.heading}
              <em>{cfg.closingCTA.accent}</em>
            </h2>
            <p>{cfg.closingCTA.description}</p>
            <div className="spirituality-hero__buttons">
              <Link
                className="spirituality-button spirituality-button--gold"
                to="/create-query?theme=spirituality"
              >
                {cfg.closingCTA.primaryText} <ArrowIcon />
              </Link>
              <Link
                className="spirituality-button spirituality-button--outline"
                to="/create-query?theme=spirituality"
              >
                {cfg.closingCTA.secondaryText} <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
