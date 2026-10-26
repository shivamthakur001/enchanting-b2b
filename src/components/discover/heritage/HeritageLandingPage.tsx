import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Link } from "../../../router/Router";
import type { Destination, TravelPackage } from "../../../types";
import { ArrowRightIcon, CalendarIcon } from "../../icons/Icons";
import { getDestination } from "../../../data/destinations";
import { CinematicThemeSwitcher } from "../shared/CinematicThemeSwitcher";
import { heritageLandingConfig } from "./config/heritageLandingConfig";
import { getDestinationCardImage, handleDestinationCardImageError } from "../../../lib/destinationCardImages";
import "./heritageLanding.css";

// ─── CSS VARIABLE MAP ─────────────────────────────────────────────────────────
function themeVariables(cfg: typeof heritageLandingConfig): CSSProperties {
  const { colors, boundary, hero, themeSwitcher, expressions, destinations, programmes, closingCTA, animations, backgrounds } = cfg;
  return {
    // Colors
    "--heritage-page": colors.page,
    "--heritage-page-soft": colors.pageSoft,
    "--heritage-ivory": colors.ivory,
    "--heritage-sandstone": colors.sandstone,
    "--heritage-burgundy": colors.burgundy,
    "--heritage-gold": colors.gold,
    "--heritage-ink": colors.ink,
    "--heritage-muted": colors.muted,
    "--heritage-divider": colors.divider,
    // Boundary
    "--heritage-boundary-opacity": String(boundary.opacity),
    "--heritage-boundary-width": `${boundary.desktopWidth}px`,
    "--heritage-boundary-width-tablet": `${boundary.tabletWidth}px`,
    "--heritage-boundary-width-mobile": `${boundary.mobileWidth}px`,
    "--heritage-boundary-height": `${boundary.desktopHeight}px`,
    "--heritage-boundary-height-mobile": `${boundary.mobileHeight}px`,
    "--heritage-boundary-gap": `${boundary.contentGap}px`,
    "--heritage-corner-size": `${boundary.cornerSize}px`,
    "--heritage-side-asset": `url("${boundary.sideAsset}")`,
    "--heritage-horizontal-asset": `url("${boundary.horizontalAsset}")`,
    "--heritage-corner-asset": `url("${boundary.cornerAsset}")`,
    // Hero
    "--heritage-hero-image": `url("${hero.image}")`,
    "--heritage-hero-overlay": hero.overlay,
    "--heritage-hero-overlay-opacity": String(hero.overlayOpacity),
    "--heritage-hero-position": hero.backgroundPosition,
    "--heritage-hero-height": hero.desktopHeight,
    "--heritage-hero-height-mobile": hero.mobileHeight,
    // Theme Switcher
    "--heritage-switcher-bg": themeSwitcher.background,
    "--heritage-switcher-label": themeSwitcher.labelColor,
    "--heritage-switcher-active": themeSwitcher.activeColor,
    "--heritage-switcher-inactive": themeSwitcher.inactiveColor,
    "--heritage-switcher-badge": themeSwitcher.badgeColor,
    "--heritage-switcher-badge-bg": themeSwitcher.badgeBackground,
    "--heritage-switcher-badge-border": themeSwitcher.badgeBorder,
    "--heritage-switcher-underline": themeSwitcher.underlineColor,
    "--heritage-switcher-item-px": themeSwitcher.itemPaddingX,
    "--heritage-switcher-item-py": themeSwitcher.itemPaddingY,
    "--heritage-switcher-font-size": themeSwitcher.itemFontSize,
    // Expressions
    "--heritage-expressions-bg": expressions.background,
    "--heritage-expression-height": expressions.panelHeight,
    "--heritage-crossfade": `${animations.imageCrossfadeMs}ms`,
    // Destinations
    "--heritage-destinations-bg": destinations.background,
    "--heritage-card-height": destinations.cardHeight,
    "--heritage-card-radius": `${destinations.cardRadius}px`,
    "--heritage-card-hover-scale": String(destinations.hoverScale),
    "--heritage-card-shadow": programmes.cardShadow,
    "--heritage-card-gap": destinations.gridGap,
    // Programmes
    "--heritage-programmes-bg": programmes.background,
    "--heritage-programme-card-bg": programmes.cardBackground,
    "--heritage-programme-card-title": programmes.cardTitle,
    "--heritage-programme-card-description": programmes.cardDescription,
    "--heritage-programme-card-border": programmes.cardBorder,
    "--heritage-programme-badge-bg": programmes.badgeBackground,
    "--heritage-programme-badge-text": programmes.badgeText,
    "--heritage-programme-price": programmes.priceColor,
    "--heritage-programme-button-bg": programmes.buttonBackground,
    "--heritage-programme-button-text": programmes.buttonText,
    "--heritage-programme-button-hover": programmes.buttonHover,
    "--heritage-programme-card-radius": `${programmes.cardRadius}px`,
    "--heritage-programme-card-shadow": programmes.cardShadow,
    "--heritage-programme-columns": String(cfg.responsive.desktop.programmeColumns),
    "--heritage-programme-columns-tablet": String(cfg.responsive.tablet.programmeColumns),
    "--heritage-programme-columns-mobile": String(cfg.responsive.mobile.programmeColumns),
    // CTA
    "--heritage-cta-bg": closingCTA.background,
    "--heritage-cta-accent": closingCTA.accent,
    "--heritage-cta-button-bg": closingCTA.buttonBackground,
    "--heritage-cta-button-text": closingCTA.buttonText,
    "--heritage-cta-button-hover": closingCTA.buttonHover,
    "--heritage-cta-max-width": closingCTA.contentMaxWidth,
    "--heritage-cta-script-font": closingCTA.headingScriptFontFamily,
    "--heritage-cta-script-size": closingCTA.headingScriptSize,
    "--heritage-cta-script-size-mobile": closingCTA.headingScriptSizeMobile,
    "--heritage-cta-script-weight": String(closingCTA.headingScriptWeight),
    "--heritage-cta-script-lh": closingCTA.headingScriptLineHeight,
    "--heritage-cta-script-ls": closingCTA.headingScriptLetterSpacing,
    "--heritage-cta-script-mt": closingCTA.headingScriptMarginTop,
    // Motion
    "--heritage-reveal-ms": `${animations.revealMs}ms`,
    "--heritage-reveal-easing": animations.revealEasing,
    // Backgrounds
    "--heritage-texture-opacity": String(backgrounds.opacity),
    "--heritage-texture-size": backgrounds.backgroundSize,
  } as CSSProperties;
}

// ─── COMPONENT PROPS ──────────────────────────────────────────────────────────
type HeritageLandingPageProps = {
  destinations: Destination[];
  packages: TravelPackage[];
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function HeritageLandingPage({ destinations, packages }: HeritageLandingPageProps) {
  const cfg = heritageLandingConfig;
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeExpression, setActiveExpression] = useState(0);

  const activeChapter = cfg.expressions.chapters[activeExpression];

  // Scroll reveal
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-heritage-reveal]");
    if (
      !cfg.animations.revealEnabled ||
      typeof IntersectionObserver === "undefined" ||
      (cfg.animations.respectReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      targets.forEach((t) => t.classList.add("heritage-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("heritage-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [cfg.animations.revealEnabled, cfg.animations.respectReducedMotion]);

  // Auto-rotate expressions
  useEffect(() => {
    if (!cfg.expressions.autoRotate) return;
    const timer = window.setInterval(() => {
      setActiveExpression((i) => (i + 1) % cfg.expressions.chapters.length);
    }, cfg.expressions.autoRotateMs);
    return () => window.clearInterval(timer);
  }, [cfg.expressions.autoRotate, cfg.expressions.autoRotateMs, cfg.expressions.chapters.length]);

  const scrollTo = (id: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Filter packages: featured list or all heritage packages
  const displayPackages =
    cfg.programmes.featuredPackageIds.length > 0
      ? packages.filter((p) => cfg.programmes.featuredPackageIds.includes(p.id))
      : packages;

  return (
    <div ref={rootRef} className="heritage-page" style={themeVariables(cfg)}>

      {/* ── ORNAMENTAL BOUNDARY ─────────────────────────────────────────── */}
      {cfg.boundary.enabled && cfg.boundary.sideAsset && (
        <div className="heritage-boundary" aria-hidden="true">
          <span className="heritage-boundary__side heritage-boundary__side--left" />
          <span className="heritage-boundary__side heritage-boundary__side--right" />
          {cfg.boundary.horizontalAsset && <span className="heritage-boundary__horizontal heritage-boundary__horizontal--top" />}
          {cfg.boundary.horizontalAsset && <span className="heritage-boundary__horizontal heritage-boundary__horizontal--bottom" />}
          {cfg.boundary.cornerAsset && <span className="heritage-boundary__corner heritage-boundary__corner--tl" />}
          {cfg.boundary.cornerAsset && <span className="heritage-boundary__corner heritage-boundary__corner--tr" />}
          {cfg.boundary.cornerAsset && <span className="heritage-boundary__corner heritage-boundary__corner--bl" />}
          {cfg.boundary.cornerAsset && <span className="heritage-boundary__corner heritage-boundary__corner--br" />}
        </div>
      )}

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="heritage-hero" aria-labelledby="heritage-hero-title">
        <div className="heritage-hero__image" aria-hidden="true" />
        <div className="heritage-hero__overlay" aria-hidden="true" />

        <div className="heritage-shell heritage-hero__content" data-heritage-reveal>
          <p className="heritage-eyebrow">{cfg.hero.eyebrow}</p>
          <h1 id="heritage-hero-title">{cfg.hero.title}</h1>
          <p className="heritage-hero__subtitle">{cfg.hero.subtitle}</p>
          <p className="heritage-hero__description">{cfg.hero.description}</p>

          {/* TWO CTA BUTTONS — matching Nature hero's button layout */}
          <div className="heritage-hero__actions">
            <a
              href="#heritage-destinations"
              className="heritage-btn heritage-btn--primary"
              onClick={(e) => scrollTo("heritage-destinations", e)}
            >
              {cfg.hero.primaryButton}
              <ArrowRightIcon size={14} />
            </a>
            <Link to="/create-query?theme=heritage" className="heritage-btn heritage-btn--secondary">
              {cfg.hero.secondaryButton}
            </Link>
          </div>
        </div>

        {cfg.hero.showScrollCue && (
          <div className="heritage-hero__scroll" aria-hidden="true">
            <span className="heritage-hero__scroll-line" />
            <span>{cfg.hero.scrollCueText}</span>
          </div>
        )}
      </section>

      {/* ── THEME SWITCHER ───────────────────────────────────────────────── */}
      <CinematicThemeSwitcher activeSlug="heritage" />

      {/* ── INTRODUCTION ─────────────────────────────────────────────────── */}
      <section
        id="heritage-intro"
        className={`heritage-intro${cfg.backgrounds.enabled && cfg.backgrounds.showOnIntro ? " heritage-has-texture" : ""}`}
        aria-labelledby="heritage-intro-title"
      >
        <div className="heritage-shell heritage-intro__grid">
          <div data-heritage-reveal>
            <p className="heritage-eyebrow">{cfg.introduction.eyebrow}</p>
            <h2 id="heritage-intro-title">{cfg.introduction.title}</h2>
          </div>
          <div className="heritage-intro__copy" data-heritage-reveal>
            <p>{cfg.introduction.description}</p>
            <div className="heritage-tags">
              {cfg.introduction.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR HERITAGE EXPRESSIONS ────────────────────────────────────── */}
      <section id="heritage-expressions" className="heritage-expressions" aria-labelledby="heritage-expressions-title">
        <div className="heritage-shell">
          <header className="heritage-section-heading" data-heritage-reveal>
            <p className="heritage-eyebrow">{cfg.expressions.eyebrow}</p>
            <h2 id="heritage-expressions-title">{cfg.expressions.title}</h2>
            <p>{cfg.expressions.description}</p>
          </header>

          <div className="heritage-expressions__layout" data-heritage-reveal>
            {/* Large Active Cinematic Panel */}
            <div className="heritage-expression-panel">
              {cfg.expressions.chapters.map((chapter, index) => (
                <img
                  key={chapter.id}
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  className={index === activeExpression ? "is-active" : ""}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="heritage-expression-panel__shade" />

              {/* Bottom content strip — matching Nature's meta-row */}
              <div className="heritage-expression-panel__copy" aria-live="polite">
                <span className="heritage-expression-panel__chapter-label">
                  {activeChapter.chapterLabel}
                </span>
                <h3 className="heritage-expression-panel__title">
                  {activeChapter.title}
                </h3>
                <p className="heritage-expression-panel__desc">
                  {activeChapter.description}
                </p>
                <div className="heritage-expression-panel__meta-row">
                  <div className="heritage-expression-meta-item">
                    <span className="heritage-meta-label">Key Destination</span>
                    <span className="heritage-meta-val">{activeChapter.keyDestination}</span>
                  </div>
                  <div className="heritage-expression-meta-item">
                    <span className="heritage-meta-label">Heritage Character</span>
                    <span className="heritage-meta-val">{activeChapter.heritageCharacter}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right-side Chapter Selectors — matching Nature's chapter-nav */}
            <div className="heritage-expression-tabs" role="tablist" aria-label="Choose a Heritage expression">
              {cfg.expressions.chapters.map((chapter, index) => {
                const isActive = index === activeExpression;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveExpression(index)}
                    onMouseEnter={() => setActiveExpression(index)}
                    className={`heritage-chapter-btn${isActive ? " heritage-chapter-btn--active" : ""}`}
                  >
                    <div className="heritage-chapter-header">
                      <span className="heritage-chapter-num">Chapter {chapter.number}</span>
                      <span className="heritage-chapter-tag">{chapter.id === "prehistoric" ? "Early Expression" : chapter.id === "sacred" ? "Sacred Stone" : chapter.id === "royal" ? "Royal Courts" : "Living Craft"}</span>
                    </div>
                    <h4 className="heritage-chapter-name">{chapter.title}</h4>
                    <p className="heritage-chapter-blurb">{chapter.blurb}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── HERITAGE DESTINATIONS ────────────────────────────────────────── */}
      <section
        id="heritage-destinations"
        className={`heritage-destinations${cfg.backgrounds.enabled && cfg.backgrounds.showOnDestinations ? " heritage-has-texture" : ""}`}
        aria-labelledby="heritage-destinations-title"
      >
        <div className="heritage-shell">
          <header className="heritage-section-heading heritage-section-heading--split" data-heritage-reveal>
            <div>
              <p className="heritage-eyebrow">{cfg.destinations.eyebrow}</p>
              <h2 id="heritage-destinations-title">
                Explore <br />
                <span className="heritage-destinations-title-italic">Heritage Destinations</span>
              </h2>
            </div>
            <p className="heritage-destinations-desc">{cfg.destinations.description}</p>
          </header>

          {/* Full-photo overlay destination grid — matching Nature's card design */}
          <div className="heritage-destination-mosaic">
            {destinations.map((destination, index) => {
              const imageUrl = getDestinationCardImage(destination);
              return (
                <Link
                  key={destination.id}
                  to={`/destinations/${destination.slug}`}
                  className="heritage-dest-card group"
                  data-heritage-reveal
                >
                  <img
                    src={imageUrl}
                    alt={destination.imageAlt}
                    onError={(event) => handleDestinationCardImageError(event, destination)}
                    className="heritage-dest-card__media"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="heritage-dest-card__overlay" />
                  <div className="heritage-dest-card__content">
                    {cfg.destinations.showRegionLabel && (
                      <span className="heritage-dest-card__region">
                        {destination.region}
                      </span>
                    )}
                    <div className="heritage-dest-card__title-row">
                      <h3 className="heritage-dest-card__title">{destination.name}</h3>
                      <span className="heritage-dest-card__arrow" aria-hidden="true">
                        <ArrowRightIcon size={14} />
                      </span>
                    </div>
                    {cfg.destinations.showDescription && (
                      <p className="heritage-dest-card__summary">{destination.summary}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HERITAGE PROGRAMMES ──────────────────────────────────────────── */}
      {displayPackages.length > 0 && (
        <section className="heritage-programmes" aria-labelledby="heritage-programmes-title">
          <div className="heritage-shell">
            <header className="heritage-section-heading heritage-section-heading--split" data-heritage-reveal>
              <div>
                <p className="heritage-eyebrow">{cfg.programmes.eyebrow}</p>
                <h2 id="heritage-programmes-title">{cfg.programmes.title}</h2>
              </div>
              <div>
                <p className="heritage-programmes-desc">{cfg.programmes.description}</p>
                <Link to="/packages" className="heritage-text-link">
                  View all programmes <ArrowRightIcon size={14} />
                </Link>
              </div>
            </header>

            {/* Four-column responsive grid — matching Nature's programme layout */}
            <div className="heritage-package-grid">
              {displayPackages.map((pkg) => {
                const destinationNames = pkg.destinations
                  .map((id) => getDestination(id)?.name)
                  .filter(Boolean)
                  .join(" · ");

                const imageUrl = cfg.programmes.imageOverrides[pkg.id] ?? pkg.image;

                return (
                  <article key={pkg.id} className="heritage-package-card" data-heritage-reveal>
                    <div className="heritage-package-card__media-wrap">
                      <img src={imageUrl} alt={pkg.imageAlt} loading="lazy" />
                      {pkg.limitedOffer && (
                        <span className="heritage-package-card__badge">{pkg.offerLabel ?? "Trade Exclusive"}</span>
                      )}
                      {pkg.highlight && !pkg.limitedOffer && (
                        <span className="heritage-package-card__badge">{pkg.highlight}</span>
                      )}
                    </div>
                    <div className="heritage-package-card__body">
                      <div className="heritage-package-card__meta">
                        <span>
                          <CalendarIcon size={13} /> {pkg.duration}
                        </span>
                        {destinationNames && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="heritage-package-card__meta-dest">{destinationNames}</span>
                          </>
                        )}
                      </div>
                      <h3>{pkg.name}</h3>
                      <p>{pkg.summary}</p>
                      <div className="heritage-package-card__footer">
                        <div>
                          <span className="heritage-package-card__price-label">From</span>
                          <strong>{pkg.priceFrom}</strong>
                          <small>per person, twin share</small>
                        </div>
                        <Link to={`/create-query?package=${pkg.slug}`} className="heritage-package-card__enquire">
                          <span>Enquire</span>
                          <ArrowRightIcon size={12} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="heritage-cta" aria-labelledby="heritage-cta-title">
        <div className="heritage-shell heritage-cta__content" data-heritage-reveal>
          <p className="heritage-eyebrow heritage-cta__eyebrow">{cfg.closingCTA.eyebrow}</p>
          <h2 id="heritage-cta-title" className="heritage-cta__title">
            {cfg.closingCTA.heading}
            <span className="heritage-cta__title-script">
              {cfg.closingCTA.headingItalic}
            </span>
          </h2>
          <p className="heritage-cta__copy">{cfg.closingCTA.description}</p>
          <div className="heritage-cta__actions">
            <a
              href="#heritage-destinations"
              className="heritage-btn heritage-btn--outline"
              onClick={(e) => scrollTo("heritage-destinations", e)}
            >
              {cfg.closingCTA.primaryButton}
            </a>
            <Link to="/create-query?theme=heritage" className="heritage-btn heritage-btn--primary">
              <span>{cfg.closingCTA.secondaryButton}</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
