import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from '../../router/Router';
import {
  getPublicPackageBySlug,
  getPublishedPackageBySlug,
  getRelatedPublishedPackages,
} from './packageService';
import { resolvePackageMedia } from './mediaResolver';
import type { PublicPackage, JourneyDay } from './types';
import { NotFoundPage } from '../../pages/NotFoundPage';
import './PackageDetailPage.css';

function routeStops(route: string): string[] {
  return route
    .split(/\s+-\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function routeUnique(route: string): string[] {
  return routeStops(route).filter((s, i, a) => i === 0 || s.toLowerCase() !== a[i - 1].toLowerCase());
}

function summaryLead(p: PublicPackage): string {
  const unique = routeUnique(p.routeRaw);
  const stops = unique.slice(0, 5).join(', ');
  const more = unique.length > 5 ? ' and beyond' : '';
  return `A ${p.durationDays}-day journey through ${stops}${more} — with a complete day-by-day programme.`;
}

function titleForHighlight(raw: string, index: number): string {
  const colon = raw.indexOf(':');
  if (colon > 0 && colon < 42) return raw.slice(0, colon).trim();
  const lower = raw.toLowerCase();
  if (lower.includes('bharat bhavan')) return 'Bharat Bhavan';
  if (lower.includes('bhimbetka')) return 'Bhimbetka';
  if (lower.includes('bhojpur') || lower.includes('bhojeshwar')) return 'Bhojpur';
  if (lower.includes('sanchi')) return 'Sanchi';
  if (lower.includes('pachmarhi')) return 'Pachmarhi';
  if (lower.includes('tawa')) return 'Tawa Reservoir';
  if (lower.includes('safari') || lower.includes('tiger')) return 'Wildlife Safari';
  return `Journey highlight ${String(index + 1).padStart(2, '0')}`;
}

function editorialLead(p: PublicPackage): string {
  const first = titleForHighlight(p.highlights[0] || 'the first stop', 0);
  const second = titleForHighlight(p.highlights[Math.min(1, p.highlights.length - 1)] || 'the next chapter', 1);
  return `From ${first} to ${second}, this itinerary brings together the destinations and experiences detailed in the original programme.`;
}

function cleanDay(dayLabel: string, index: number): string {
  return dayLabel || `Day ${String(index + 1).padStart(2, '0')}`;
}

function factIcon(title: string): string {
  const k = title.toLowerCase();
  if (k.includes('airport')) return '✈';
  if (k.includes('rail') || k.includes('station')) return '▤';
  if (k.includes('weather')) return '☀';
  if (k.includes('accommodation') || k.includes('hotel')) return '⌂';
  if (k.includes('transport')) return '⇄';
  return '◈';
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Renders body text preserving paragraph structure and line breaks without truncation.
 */
function FormattedParagraphs({ text }: { text: string }) {
  const paragraphs = text.split(/\n\s*\n/g).filter(Boolean);
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i}>
          {para.split('\n').map((line, j) => (
            <span key={j}>
              {line}
              {j < para.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

function PackageHero({ pkg }: { pkg: PublicPackage }) {
  const photos = useMemo(() => resolvePackageMedia(pkg, import.meta.env.PROD), [pkg]);
  const stops = useMemo(() => routeStops(pkg.routeRaw), [pkg.routeRaw]);

  return (
    <section
      className="hero"
      id="top"
      aria-label="Package introduction"
      style={{ '--hero-pos': photos.heroPosition } as React.CSSProperties}
    >
      <div className="hero-art" aria-hidden="true">
        <img
          src={photos.hero.src}
          alt={photos.hero.alt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-sheen" aria-hidden="true" />
      <div className="hero-inner container">
        <div className="eyebrow eyebrow-bright">
          <span className="eyebrow-line" /> THE HEART OF INDIA · CURATED JOURNEYS
        </div>
        <div className="hero-content">
          <div className="tiny-gold">
            THE JOURNEY COLLECTION <span className="dot">✦</span> {pkg.code}
          </div>
          <h1>{pkg.title}</h1>
          <p className="hero-description">{summaryLead(pkg)}</p>
          <div className="hero-meta">
            <span>
              <b className="meta-icon">◷</b>
              {pkg.durationDays} days / {pkg.durationNights} nights <small>†</small>
            </span>
            <span>
              <b className="meta-icon">⌁</b>
              {stops[0] || 'Madhya Pradesh'}
            </span>
            <span>
              <b className="meta-icon">◇</b>
              {pkg.code}
            </span>
          </div>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => scrollToSection('itinerary')}
            >
              Explore the itinerary <span aria-hidden="true">↗</span>
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => scrollToSection('story')}
            >
              Discover this journey <span aria-hidden="true">↓</span>
            </button>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 · SAMPLE PACKAGE COLLECTION</span>
          <span className="subtle-small">
            SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function PackageStickyNav({ currentCode }: { currentCode: string }) {
  return (
    <nav className="page-sections" id="page-nav" aria-label="Package sections">
      <div className="container section-inner">
        <div className="section-links">
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('story');
            }}
          >
            The journey
          </a>
          <a
            href="#highlights"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('highlights');
            }}
          >
            Highlights
          </a>
          <a
            href="#itinerary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('itinerary');
            }}
          >
            Itinerary
          </a>
          <a
            href="#included"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('included');
            }}
          >
            Included &amp; excluded
          </a>
          <a
            href="#facts"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('facts');
            }}
          >
            Trip facts
          </a>
          <a
            href="#notes"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('notes');
            }}
          >
            Travel notes
          </a>
        </div>
        <a
          className="small-package-code"
          href="#collection"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('collection');
          }}
          aria-label={`View other sample packages. Current: ${currentCode}`}
        >
          VIEW OTHER PACKAGES ↗
        </a>
      </div>
    </nav>
  );
}

function PackageStory({ pkg }: { pkg: PublicPackage }) {
  const photos = useMemo(() => resolvePackageMedia(pkg, import.meta.env.PROD), [pkg]);
  const route = useMemo(() => routeStops(pkg.routeRaw), [pkg.routeRaw]);
  const asidePhoto = photos.highlights[0] || photos.hero;

  return (
    <section className="story-section" id="story">
      <div className="container story-grid">
        <div className="story-main">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            01 / THE STORY OF THE JOURNEY
          </div>
          <h2>
            Where every destination
            <br />
            <em>becomes a story.</em>
          </h2>
          <div className="story-intro">
            <p>{editorialLead(pkg)}</p>
            <p className="story-source">
              Journey route and programme details are taken from the original package workbook. †
              Nights are derived as days − 1 and should be verified before publication.
            </p>
          </div>
          <div className="route-display">
            <span className="route-label">THE ROUTE</span>
            <div className="route-chips">
              {route.map((r, i) => (
                <span className="route-chip" key={i}>
                  {i > 0 && <i aria-hidden="true">→</i>}
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
        <aside className="story-aside" aria-label="Quick tour facts">
          <div className="aside-image">
            <img
              src={asidePhoto.src}
              alt={asidePhoto.alt}
              loading="lazy"
              decoding="async"
            />
            {asidePhoto.isDemo && (
              <div className="aside-photocredit">PREVIEW IMAGE · REPLACE WITH YOUR ASSETS</div>
            )}
          </div>
          <div className="aside-facts">
            <div className="asidetitle">
              A journey at a glance <span>✦</span>
            </div>
            <div className="facts-line">
              <span>Duration</span>
              <strong>
                {pkg.durationDays} days / {pkg.durationNights} nights †
              </strong>
            </div>
            <div className="facts-line">
              <span>Starts / ends</span>
              <strong>
                {route[0] || '—'} / {route[route.length - 1] || '—'}
              </strong>
            </div>
            <div className="facts-line">
              <span>Itinerary days</span>
              <strong>{pkg.itineraries.length} chapters</strong>
            </div>
            <div className="facts-line">
              <span>Journey code</span>
              <strong>{pkg.code}</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function PackageHighlights({ pkg }: { pkg: PublicPackage }) {
  const photos = useMemo(() => resolvePackageMedia(pkg, import.meta.env.PROD), [pkg]);

  return (
    <section className="highlight-section" id="highlights">
      <div className="container">
        <div className="eyebrow eyebrow-bright">
          <span className="eyebrow-line" />
          02 / HIGHLIGHTS &amp; EXPERIENCES
        </div>
        <div className="section-head-light">
          <h2>
            Experiences that reveal
            <br />
            <em>the heart of the journey.</em>
          </h2>
          <p>{pkg.highlights.length} original highlights from the package workbook</p>
        </div>
        <div className="highlight-grid">
          {pkg.highlights.map((raw, i) => {
            const photo = photos.highlights[i % photos.highlights.length] || photos.hero;
            const title = titleForHighlight(raw, i);
            return (
              <article className="highlight-card" key={i}>
                <div className="highlight-photo">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  {photo.isDemo && (
                    <span className="photo-label">DEMO IMAGE {String(i + 1).padStart(2, '0')}</span>
                  )}
                </div>
                <div className="highlight-content">
                  <span className="highlight-num">
                    {String(i + 1).padStart(2, '0')} / {String(pkg.highlights.length).padStart(2, '0')}
                  </span>
                  <h3>{title}</h3>
                  <p>{raw}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="photo-disclaimer">
          Photography shown is demonstrative or matched to verified destination photography from the Enchanting B2B asset library.
        </p>
      </div>
    </section>
  );
}

function PackageItinerary({ pkg }: { pkg: PublicPackage }) {
  const photos = useMemo(() => resolvePackageMedia(pkg, import.meta.env.PROD), [pkg]);
  // Open Day 0 by default, matching standalone design
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 0: true });

  const toggleDay = (index: number) => {
    setOpenDays((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    pkg.itineraries.forEach((_, i) => {
      all[i] = true;
    });
    setOpenDays(all);
  };

  const collapseAll = () => {
    setOpenDays({});
  };

  return (
    <section className="itinerary-section" id="itinerary">
      <div className="container">
        <div className="itinerary-heading">
          <div>
            <div className="eyebrow eyebrow-bright">
              <span className="eyebrow-line" />
              03 / THE JOURNEY UNFOLDS
            </div>
            <h2>
              Your {pkg.durationDays}-day
              <br />
              <em>story, day by day.</em>
            </h2>
            <p>Every day, every detail — exactly as described in the source itinerary.</p>
          </div>
          <div className="itinerary-controls">
            <button
              className="micro-button"
              id="expand-days"
              type="button"
              onClick={expandAll}
            >
              Expand all days <span>＋</span>
            </button>
            <button
              className="micro-button"
              id="collapse-days"
              type="button"
              onClick={collapseAll}
            >
              Collapse all <span>−</span>
            </button>
          </div>
        </div>

        <div className="timeline">
          {pkg.itineraries.map((day: JourneyDay, i: number) => {
            const isOpen = !!openDays[i];
            const photo = photos.itinerary[i % photos.itinerary.length] || photos.hero;
            return (
              <div className="timeline-row" key={i}>
                <span className="timeline-node" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <details
                  className={`day-panel${isOpen ? ' is-open' : ''}`}
                  open={isOpen}
                  onClick={(e) => {
                    // Prevent default <details> toggle to keep React state in full sync
                    e.preventDefault();
                    toggleDay(i);
                  }}
                >
                  <summary className="day-panel-summary">
                    <div className="day-inline">
                      <span className="day-pill">{cleanDay(day.dayLabel, i)}</span>
                      <h3>{day.title}</h3>
                    </div>
                    <span className="day-toggle" aria-hidden="true">
                      {isOpen ? '−' : '＋'}
                    </span>
                  </summary>
                  {isOpen && (
                    <div className="day-expanded">
                      <div className="day-body">
                        <FormattedParagraphs text={day.body} />
                      </div>
                      <div className="day-illustration">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                        />
                        {photo.isDemo && <span>DEMO IMAGE · REPLACE BEFORE PUBLISH</span>}
                      </div>
                    </div>
                  )}
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackageIncluded({ pkg }: { pkg: PublicPackage }) {
  return (
    <section className="included-section" id="included">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          04 / THE DETAILS THAT MATTER
        </div>
        <h2>
          Everything you need,
          <br />
          <em>clearly outlined.</em>
        </h2>
        <div className="included-grid">
          <div className="terms-card yes-card">
            <div className="terms-title">
              <span className="round-icon">✓</span>
              <h3>What's included</h3>
              <small>{pkg.inclusions.length} items</small>
            </div>
            {pkg.inclusions.length ? (
              <ul>
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-detail">No public inclusion details are available for this package yet.</p>
            )}
          </div>
          <div className="terms-card no-card">
            <div className="terms-title">
              <span className="round-icon">−</span>
              <h3>What's not included</h3>
              <small>
                {pkg.exclusions.length} item{pkg.exclusions.length === 1 ? '' : 's'}
              </small>
            </div>
            {pkg.exclusions.length ? (
              <ul>
                {pkg.exclusions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-detail">No public exclusion details are available for this package yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageFactsAndNotes({ pkg }: { pkg: PublicPackage }) {
  return (
    <>
      <section className="facts-section" id="facts">
        <div className="container">
          <div className="section-head-facts">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                05 / ESSENTIAL INFORMATION
              </div>
              <h2>
                Know before
                <br />
                <em>you go.</em>
              </h2>
            </div>
            <p>Helpful travel details taken directly from this journey's workbook.</p>
          </div>
          <div className="facts-grid">
            {pkg.facts.length ? (
              pkg.facts.map((fact, idx) => (
                <article className="fact-card" key={idx}>
                  <span className="fact-symbol" aria-hidden="true">
                    {factIcon(fact.title)}
                  </span>
                  <div>
                    <h3>{fact.title}</h3>
                    <p>{fact.description}</p>
                  </div>
                </article>
              ))
            ) : (
              <p className="empty-detail">Public trip facts will be added after review.</p>
            )}
          </div>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="container notes-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              06 / A FEW IMPORTANT THINGS
            </div>
            <h2>
              Practical notes
              <br />
              <em>for smoother journeys.</em>
            </h2>
            <p className="notes-intro">
              Operational notes have been separated from private pricing and commission terms.
            </p>
          </div>
          <div className="notes-list">
            {pkg.publicNotes.length ? (
              pkg.publicNotes.map((note, i) => (
                <div className="note" key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{note}</p>
                </div>
              ))
            ) : (
              <p>Public travel notes will be added after review.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function PackageTradeSection() {
  return (
    <section className="trade-section" aria-label="Future secure rates section">
      <div className="container">
        <div className="trade-box">
          <div className="trade-emblem">♜</div>
          <div>
            <div className="eyebrow eyebrow-bright">FUTURE AGENT SERVICES</div>
            <h2>Trade rates &amp; quotations</h2>
            <p>
              Pricing is restricted to authorized B2B agents. Rates, hotel supplements and the
              pricing calculator will be integrated in a later phase behind proper agent
              authentication. No confidential pricing is shipped in this public preview.
            </p>
          </div>
          <span className="locked-state">⌑ &nbsp; NOT CONNECTED YET</span>
        </div>
      </div>
    </section>
  );
}

function PackageMoreCollection({ currentSlug }: { currentSlug: string }) {
  const [others, setOthers] = useState<PublicPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [request, setRequest] = useState(0);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setError(null);
    setOthers([]);

    void getRelatedPublishedPackages(currentSlug)
      .then((result) => {
        if (active) setOthers(result.filter((pkg) => pkg.slug !== currentSlug));
      })
      .catch((loadError) => {
        if (active) {
          console.error('[PackageMoreCollection] Failed to load related packages', loadError);
          setError('Related journeys are temporarily unavailable.');
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [currentSlug, request]);

  return (
    <section className="collection-section" id="collection">
      <div className="container">
        <div className="more-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              CONTINUE EXPLORING
            </div>
            <h2>
              More journeys <em>from the heartland.</em>
            </h2>
          </div>
          <span className="collection-count">{others.length} RELATED JOURNEYS</span>
        </div>
        {isLoading && <p role="status">Loading related journeys...</p>}
        {error && (
          <div role="alert">
            <p>{error}</p>
            <button type="button" onClick={() => setRequest((value) => value + 1)}>Retry</button>
          </div>
        )}
        {!isLoading && !error && others.length === 0 && <p>No related journeys are available yet.</p>}
        {!isLoading && !error && others.length > 0 && <div className="more-grid">
          {others.map((p) => {
            const photos = resolvePackageMedia(p, import.meta.env.PROD);
            return (
              <Link
                key={p.slug}
                to={`/packages/${p.slug}`}
                className="more-card"
              >
                <div className="more-photo">
                  <img
                    src={photos.hero.src}
                    alt={photos.hero.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="more-content">
                  <span>
                    {p.code} · {p.durationDays} DAYS
                  </span>
                  <h3>{p.title}</h3>
                  <span className="more-link">
                    EXPLORE JOURNEY <b aria-hidden="true">↗</b>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>}
      </div>
    </section>
  );
}

export function PackageDetailPage({ slugOverride }: { slugOverride?: string }) {
  const params = useParams<{ slug?: string }>();
  const slug = (slugOverride ?? params.slug)?.toLowerCase();
  const [pkg, setPackage] = useState<PublicPackage | undefined>(() => getPublicPackageBySlug(slug));
  const [isLoading, setIsLoading] = useState(Boolean(slug));
  const [loadError, setLoadError] = useState<string | null>(null);
  const [request, setRequest] = useState(0);

  useEffect(() => {
    let active = true;
    if (!slug) {
      setPackage(undefined);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setPackage(undefined);
    setLoadError(null);
    setIsLoading(true);
    void getPublishedPackageBySlug(slug)
      .then((nextPackage) => {
        if (active) setPackage(nextPackage);
      })
      .catch((error) => {
        if (active) {
          console.error('[PackageDetailPage] Failed to load package', error);
          setPackage(undefined);
          setLoadError('This journey could not be loaded. Please try again.');
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [request, slug]);

  useEffect(() => {
    if (pkg && pkg.slug.toLowerCase() === slug) {
      document.title = `${pkg.title} (${pkg.code}) | Enchanting Madhya Pradesh`;
    }
  }, [pkg, slug]);

  const currentPackage = pkg?.slug.toLowerCase() === slug;

  if (isLoading && (!pkg || !currentPackage)) {
    return <main aria-busy="true" className="package-detail-root">Loading journey...</main>;
  }

  if (loadError) {
    return (
      <main className="package-detail-root" role="alert">
        <p>{loadError}</p>
        <button type="button" onClick={() => setRequest((value) => value + 1)}>Retry</button>
      </main>
    );
  }

  if (!pkg || !currentPackage) {
    return <NotFoundPage />;
  }

  return (
    <div className="package-detail-root">
      <PackageHero pkg={pkg} />
      <PackageStickyNav currentCode={pkg.code} />
      <PackageStory pkg={pkg} />
      <PackageHighlights pkg={pkg} />
      <PackageItinerary pkg={pkg} />
      <PackageIncluded pkg={pkg} />
      <PackageFactsAndNotes pkg={pkg} />
      <PackageTradeSection />
      <PackageMoreCollection currentSlug={pkg.slug} />
    </div>
  );
}

export default PackageDetailPage;
