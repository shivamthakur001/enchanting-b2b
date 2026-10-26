import { useState, type CSSProperties, type MouseEvent } from "react";
import type { Destination, DiscoverTheme, TravelPackage } from "../../../types";
import { Link } from "../../../router/Router";
import { getDestination } from "../../../data/destinations";
import {
  getDestinationCardImage,
  handleDestinationCardImageError,
} from "../../../lib/destinationCardImages";
import { wildlifeLandingConfig as cfg } from "../heritage/config/wildlifeLandingConfig";
import { CinematicThemeSwitcher } from "../shared/CinematicThemeSwitcher";
import { EmeraldWildlifeBackground } from "./EmeraldWildlifeBackground";
import { wildlifeEmeraldBackgroundConfig } from "../../../config/wildlifeEmeraldBackgroundConfig";
import "./wildlifeLanding.css";

interface WildlifeLandingPageProps {
  theme: DiscoverTheme;
  destinations: Destination[];
  packages: TravelPackage[];
}

type WildlifeIconName = "paw" | "calendar" | "camera";
function WildlifeMiniIcon({ icon }: { icon: WildlifeIconName }) {
  if (icon === "calendar") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18M8 15h4"/></svg>;
  if (icon === "camera") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="15" rx="5" ry="4"/><ellipse cx="4" cy="8" rx="2" ry="3"/><ellipse cx="9" cy="5" rx="2" ry="3"/><ellipse cx="15" cy="5" rx="2" ry="3"/><ellipse cx="20" cy="8" rx="2" ry="3"/></svg>;
}

function ArrowIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>; }

function jumpTo(id: string, event: MouseEvent<HTMLAnchorElement>) {
  const node = document.getElementById(id);
  if (node) { event.preventDefault(); node.scrollIntoView({ behavior: "smooth", block: "start" }); }
}

export function WildlifeLandingPage({ theme, destinations, packages }: WildlifeLandingPageProps) {
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
    "--wildlife-bg": cfg.colors.background,
    "--wildlife-surface": cfg.colors.surface,
    "--wildlife-surface-light": cfg.colors.surfaceLight,
    "--wildlife-gold": cfg.colors.gold,
    "--wildlife-ivory": cfg.colors.ivory,
    "--wildlife-muted": cfg.colors.muted,
    "--wildlife-border": cfg.colors.border,
    "--wildlife-emerald-hero": wildlifeEmeraldBackgroundConfig.sections.hero,
    "--wildlife-emerald-intro": wildlifeEmeraldBackgroundConfig.sections.intro,
    "--wildlife-emerald-expressions": wildlifeEmeraldBackgroundConfig.sections.expressions,
    "--wildlife-emerald-destinations": wildlifeEmeraldBackgroundConfig.sections.destinations,
    "--wildlife-emerald-programmes": wildlifeEmeraldBackgroundConfig.sections.programmes,
    "--wildlife-emerald-cta": wildlifeEmeraldBackgroundConfig.sections.cta,
  } as CSSProperties;

  return (
    <div className="wildlife-page" data-theme="wildlife" style={colors}>
      <EmeraldWildlifeBackground />
      {/* Keep the real site navbar and global footer supplied by Layout.tsx. */}
      <section className="wildlife-hero" data-emerald-section="hero" aria-labelledby="wildlife-hero-title">
        <img className="wildlife-hero__image" src={cfg.hero.image || theme.heroImage} alt={cfg.hero.imageAlt} loading="eager" fetchPriority="high" />
        <div className="wildlife-hero__shade" aria-hidden="true" />
        <div className="wildlife-shell wildlife-hero__inner">
          <div className="wildlife-hero__copy">
            <p className="wildlife-eyebrow">{cfg.hero.eyebrow}</p>
            <h1 id="wildlife-hero-title" className="wildlife-hero__title">{cfg.hero.titleTop}<span>{cfg.hero.titleAccent}</span></h1>
            <p className="wildlife-hero__lead">{cfg.hero.description}</p>
            <div className="wildlife-hero__buttons">
              <a className="wildlife-button wildlife-button--gold" href="#wildlife-destinations" onClick={(event) => jumpTo("wildlife-destinations", event)}>{cfg.hero.primaryText}<ArrowIcon/></a>
              <Link className="wildlife-button wildlife-button--outline" to="/create-query?theme=wildlife">{cfg.hero.secondaryText}<ArrowIcon/></Link>
            </div>
            <div className="wildlife-hero__facts" aria-label="Wildlife journey highlights">
              {cfg.hero.quickFacts.map((item) => (
                <div className="wildlife-hero__fact" key={item.label}>
                  <span className="wildlife-hero__fact-icon"><WildlifeMiniIcon icon={item.icon as WildlifeIconName}/></span>
                  <span><strong>{item.label}</strong><small>{item.detail}</small></span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a className="wildlife-hero__scroll" href="#wildlife-intro" onClick={(event) => jumpTo("wildlife-intro", event)}><span className="wildlife-hero__scroll-mark"/>Scroll to explore</a>
      </section>

      <CinematicThemeSwitcher activeSlug="wildlife" />

      <section id="wildlife-intro" data-emerald-section="intro" className="wildlife-intro wildlife-section" aria-labelledby="wildlife-intro-title">
        <div className="wildlife-shell wildlife-intro__grid">
          <div>
            <p className="wildlife-eyebrow">{cfg.intro.eyebrow}</p>
            <h2 id="wildlife-intro-title" className="wildlife-heading wildlife-intro__statement">{cfg.intro.heading}</h2>
          </div>
          <div className="wildlife-intro__narrative">
            <p>{cfg.intro.paragraphOne}</p><p>{cfg.intro.paragraphTwo}</p>
            <div className="wildlife-intro__tags" aria-label="Wildlife interests">
              {cfg.intro.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-expressions wildlife-section" data-emerald-section="expressions" id="wildlife-expressions" aria-labelledby="wildlife-expressions-title">
        <div className="wildlife-shell">
          <header className="wildlife-section-heading">
            <p className="wildlife-eyebrow">{cfg.expressions.eyebrow}</p>
            <h2 id="wildlife-expressions-title" className="wildlife-heading">{cfg.expressions.heading}</h2>
            <p>{cfg.expressions.description}</p>
          </header>
          <div className="wildlife-expressions__layout">
            <div className="wildlife-expressions__showcase" id="wildlife-chapter-panel" role="tabpanel" aria-labelledby={`wildlife-tab-${chapter.id}`}>
              <img key={chapter.id} src={chapter.image} alt={chapter.imageAlt} loading="lazy" />
              <div className="wildlife-expressions__showcase-shade"/>
              <div className="wildlife-expressions__showcase-copy">
                <span className="wildlife-label">{chapter.number} — {chapter.tag}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <div className="wildlife-expressions__meta">
                  <span><small>Key Destinations</small><strong>{chapter.locations}</strong></span>
                  <span><small>Experience Character</small><strong>{chapter.characteristic}</strong></span>
                </div>
              </div>
            </div>
            <div className="wildlife-expressions__tabs" role="tablist" aria-label="Choose a wildlife expression">
              {chapters.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  id={`wildlife-tab-${item.id}`}
                  key={item.id}
                  className={`wildlife-expressions__tab${index === activeChapter ? " is-active" : ""}`}
                  aria-selected={index === activeChapter}
                  aria-controls="wildlife-chapter-panel"
                  onClick={() => setActiveChapter(index)}
                  onMouseEnter={() => setActiveChapter(index)}
                >
                  <span className="wildlife-label">Chapter {item.number} · {item.tag}</span>
                  <strong>{item.title}</strong>
                  <small>{item.blurb}</small>
                  <img src={item.image} alt="" loading="lazy" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wildlife-destinations" data-emerald-section="destinations" className="wildlife-destinations wildlife-section" aria-labelledby="wildlife-destinations-title">
        <div className="wildlife-shell">
          <header className="wildlife-section-heading wildlife-section-heading--split">
            <div><p className="wildlife-eyebrow">{cfg.destinations.eyebrow}</p><h2 id="wildlife-destinations-title" className="wildlife-heading">Explore<br/><em>Wildlife Destinations</em></h2></div>
            <p>{cfg.destinations.description}</p>
          </header>
          {orderedDestinations.length ? (
            <div className="wildlife-destinations__grid">
              {orderedDestinations.map((destination) => (
                <Link key={destination.id} to={`/destinations/${destination.slug}`} className="wildlife-destination-card">
                  <img
                    src={getDestinationCardImage(destination)}
                    alt={destination.imageAlt}
                    loading="lazy"
                    onError={(event) => handleDestinationCardImageError(event, destination)}
                  />
                  <span className="wildlife-destination-card__shade" />
                  <span className="wildlife-destination-card__copy">
                    <small>{destination.region}</small>
                    <strong>{destination.name}</strong>
                    <span>{destination.summary}</span>
                  </span>
                  <span className="wildlife-destination-card__arrow" aria-hidden="true"><ArrowIcon/></span>
                </Link>
              ))}
            </div>
          ) : <p className="wildlife-empty">Wildlife destinations will appear here as they are published.</p>}
        </div>
      </section>

      <section id="wildlife-programmes" data-emerald-section="programmes" className="wildlife-programmes wildlife-section" aria-labelledby="wildlife-programmes-title">
        <div className="wildlife-shell">
          <header className="wildlife-section-heading wildlife-section-heading--with-link">
            <div><p className="wildlife-eyebrow">{cfg.programmes.eyebrow}</p><h2 className="wildlife-heading" id="wildlife-programmes-title">{cfg.programmes.heading}</h2></div>
            <Link to="/packages" className="wildlife-text-link">View All B2B Programmes <ArrowIcon/></Link>
          </header>
          {packages.length ? (
            <div className="wildlife-programmes__grid">
              {packages.map((pkg) => (
                <article key={pkg.id} className="wildlife-programme-card">
                  <div className="wildlife-programme-card__photo">
                    <img src={pkg.image} alt={pkg.imageAlt} loading="lazy" />
                    {(pkg.limitedOffer || pkg.highlight) && <span className="wildlife-programme-card__tag">{pkg.limitedOffer ? (pkg.offerLabel || "Trade exclusive") : pkg.highlight}</span>}
                  </div>
                  <div className="wildlife-programme-card__body">
                    <span className="wildlife-programme-card__meta">{pkg.duration} · {pkg.destinations.map((id) => getDestination(id)?.name).filter(Boolean).join(" · ")}</span>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.summary}</p>
                    <div className="wildlife-programme-card__bottom">
                      <div><small>From</small><strong>{pkg.priceFrom}</strong><small>per person, subject to package terms</small></div>
                      <Link to={`/create-query?package=${encodeURIComponent(pkg.slug)}`} className="wildlife-programme-card__enquire">Enquire <ArrowIcon/></Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : <p className="wildlife-empty">Contact our trade team to curate a wildlife programme for your clients. <Link to="/create-query?theme=wildlife">Create a Query</Link></p>}
        </div>
      </section>

      <section className="wildlife-cta" data-emerald-section="cta" aria-labelledby="wildlife-cta-title">
        <img src={cfg.closingCTA.image} alt="Tiger in a Madhya Pradesh wilderness setting" loading="lazy"/>
        <div className="wildlife-cta__shade" aria-hidden="true" />
        <div className="wildlife-shell wildlife-cta__inner">
          <div className="wildlife-cta__copy">
            <p className="wildlife-eyebrow">{cfg.closingCTA.eyebrow}</p>
            <h2 id="wildlife-cta-title" className="wildlife-heading">{cfg.closingCTA.heading}<em>{cfg.closingCTA.accent}</em></h2>
            <p>{cfg.closingCTA.description}</p>
            <div className="wildlife-hero__buttons">
              <Link className="wildlife-button wildlife-button--gold" to="/create-query?theme=wildlife">Plan a Wildlife Journey <ArrowIcon/></Link>
              <Link className="wildlife-button wildlife-button--outline" to="/create-query?theme=wildlife">Talk to Our Team <ArrowIcon/></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
