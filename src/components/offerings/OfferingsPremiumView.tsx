import { type CSSProperties, type ReactNode } from 'react';
import { offeringsVisualConfig } from '../../config/offeringsVisualConfig';
import type { PublicPackage } from '../../features/package-detail/types';
import { getPackagePhotos } from '../../features/package-detail/photoMapping';
import './premiumOfferings.css';

/** A presentation model; the integration adapter maps the site's real TravelPackage here. */
export type OfferingCardData = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  duration: string;
  destinationsLabel: string;
  categoryLabel: string;
  categoryTone: 'wildlife' | 'nature' | 'heritage' | 'spirituality' | 'inbound';
  image: string;
  imageAlt: string;
  priceFrom: string;
  limitedOffer?: boolean;
  offerLabel?: string;
  highlight?: string;
};

export type OfferingCategoryLink = { id: string; label: string };

export type OfferingsPremiumViewProps = {
  packages: OfferingCardData[];
  categories: OfferingCategoryLink[];
  activeCategory: string;
  pilotPackages?: PublicPackage[];
  pilotLoading?: boolean;
  pilotError?: string | null;
  onRetryPilotPackages?: () => void;
  /** Links use the site's router if supplied; otherwise ordinary links in the demo. */
  onNavigate?: (href: string) => void;
};

function Icon({ name, size = 17 }: { name: 'search'|'calendar'|'pin'|'arrow'|'spark'|'map'|'handshake'|'sliders'|'info'; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  const parts: Record<string, ReactNode> = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></>,
    pin: <><path d="M20 10c0 5.1-8 11-8 11S4 15.1 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></>,
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
    spark: <><path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/></>,
    handshake: <><path d="m2 11 5-5 5 1 3-1 7 6-5 7-3-2-2 2-3-2-2 1-5-7Zm6-2 4 3 3-3"/></>,
    sliders: <><path d="M4 7h16M4 17h16M9 4v6m6 4v6"/></>,
    info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></>,
  };
  return <svg {...common}>{parts[name]}</svg>;
}

function UiLink({ to, children, className, onNavigate, ariaLabel, style }: { to: string; children: ReactNode; className?: string; onNavigate?: (to: string) => void; ariaLabel?: string; style?: CSSProperties }) {
  return <a href={to} className={className} style={style} aria-label={ariaLabel} onClick={(event) => {
    if (!onNavigate || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); onNavigate(to);
  }}>{children}</a>;
}

function PackageCard({ pkg, onNavigate }: { pkg: OfferingCardData; onNavigate?: (href: string) => void }) {
  const label = pkg.limitedOffer && pkg.offerLabel ? pkg.offerLabel : pkg.highlight ?? pkg.categoryLabel;
  return (
    <article className="op-package-card">
      <div className="op-package-image-wrap">
        <img className="op-package-image" src={pkg.image} alt={pkg.imageAlt} loading="lazy" />
        <span className={`op-package-badge op-package-badge--${pkg.categoryTone}`}>{label}</span>
      </div>
      <div className="op-package-body">
        <div className="op-package-meta"><span><Icon name="calendar" size={12}/>{pkg.duration}</span><span className="op-package-meta-dot">·</span><span className="op-destinations-text"><Icon name="pin" size={12}/>{pkg.destinationsLabel}</span></div>
        <h3>{pkg.name}</h3>
        <p className="op-package-summary">{pkg.summary}</p>
        <div className="op-package-bottom">
          <div className="op-package-price"><span>From</span><strong>{pkg.priceFrom}</strong><small>per person, twin share</small></div>
          <UiLink onNavigate={onNavigate} to={`/create-query?package=${encodeURIComponent(pkg.slug)}`} className="op-package-enquire">Enquire <Icon name="arrow" size={15}/></UiLink>
        </div>
      </div>
    </article>
  );
}

function PilotPackageCard({ pkg, onNavigate }: { pkg: PublicPackage; onNavigate?: (href: string) => void }) {
  const photos = getPackagePhotos(pkg);
  const routeStops = pkg.routeRaw.split(/\s+-\s+/).map((s) => s.trim()).filter(Boolean);
  const destinationsLabel = routeStops.slice(0, 4).join(" · ");
  const tone = pkg.slug === 'exbhp03' ? 'wildlife' : pkg.slug === 'exbhp02' ? 'nature' : 'heritage';

  return (
    <article className="op-package-card">
      <div className="op-package-image-wrap">
        <img className="op-package-image" src={photos.hero.src} alt={photos.hero.alt} loading="lazy" />
        <span className={`op-package-badge op-package-badge--${tone}`}>{pkg.code} · Detailed Itinerary</span>
      </div>
      <div className="op-package-body">
        <div className="op-package-meta">
          <span><Icon name="calendar" size={12}/>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
          <span className="op-package-meta-dot">·</span>
          <span className="op-destinations-text"><Icon name="pin" size={12}/>{destinationsLabel}</span>
        </div>
        <h3>
          <UiLink onNavigate={onNavigate} to={`/packages/${pkg.slug}`}>{pkg.title}</UiLink>
        </h3>
        <p className="op-package-summary">
          {pkg.highlights[0] ?? `A comprehensive ${pkg.durationDays}-day trade-ready journey with complete day-by-day programme.`}
        </p>
        <div className="op-package-bottom" style={{ alignItems: 'center' }}>
          <UiLink onNavigate={onNavigate} to={`/packages/${pkg.slug}`} style={{ fontWeight: 700, fontSize: '12px', color: 'var(--op-forest, #285C41)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            View Programme Itinerary <Icon name="arrow" size={13}/>
          </UiLink>
          <UiLink onNavigate={onNavigate} to={`/create-query?package=${encodeURIComponent(pkg.slug)}`} className="op-package-enquire">
            Enquire <Icon name="arrow" size={15}/>
          </UiLink>
        </div>
      </div>
    </article>
  );
}

export function OfferingsPremiumView({
  packages: items,
  categories,
  activeCategory,
  pilotPackages,
  pilotLoading = false,
  pilotError,
  onRetryPilotPackages,
  onNavigate,
}: OfferingsPremiumViewProps) {
  const config = offeringsVisualConfig;
  const visualStyles = {
    '--op-page': config.palette.page,
    '--op-surface': config.palette.surface,
    '--op-parchment': config.palette.parchment,
    '--op-ink': config.palette.ink,
    '--op-muted': config.palette.inkMuted,
    '--op-forest': config.palette.forest,
    '--op-forest-hover': config.palette.forestHover,
    '--op-gold': config.palette.antiqueGold,
    '--op-line': config.palette.border,
    '--op-copper': config.palette.accentTerracotta,
    '--op-shadow': config.palette.shadow,
    '--op-max-width': config.layout.maxWidth,
    '--op-hero-height': config.hero.height,
    '--op-hero-image': `url("${config.hero.image}")`,
    '--op-hero-position': config.hero.imagePosition,
    '--op-hero-tint': config.hero.tintOpacity,
    '--op-section-gap': config.layout.sectionGap,
    '--op-card-image-height': config.layout.cardImageHeight,
    '--op-card-radius': config.layout.cardRadius,
    '--op-cards-gap': config.layout.cardsGap,
  } as CSSProperties;
  // This is only visual grouping for the approved page design, NOT a filtering algorithm.
  const primaryCount = (config.layout as { primaryCollectionCount?: number }).primaryCollectionCount ?? 12;
  const showMore = (config.features as { showMoreJourneysCollection?: boolean }).showMoreJourneysCollection ?? true;
  const firstCollection = showMore ? items.slice(0, primaryCount) : items;
  const remainingCollection = showMore ? items.slice(primaryCount) : [];
  const isAll = activeCategory === 'all';
  return (
    <div className="op-page" style={visualStyles}>
      <header className="op-hero">
        <div className="op-hero-art" role="img" aria-label="Madhya Pradesh wildlife, rivers and heritage landscape"/>
        <div className="op-hero-content op-shell">
          <div className="op-hero-copy">
            <p className="op-eyebrow">Our Offerings</p>
            <h1>Journeys Crafted<br/>for Every Kind<br/>of <em>Traveller.</em></h1>
            <p className="op-hero-intro">Curated travel programmes across Madhya Pradesh — designed for trade partners, inspired by timeless heritage, rare wildlife, vibrant culture and extraordinary landscapes.</p>
            <div className="op-hero-points"><span><Icon name="spark"/> Iconic destinations</span><span><Icon name="map"/> Curated experiences</span><span><Icon name="calendar"/> Trade-ready itineraries</span></div>
          </div>
        </div>
        <div className="op-hero-ornament" aria-hidden="true">❋</div>
      </header>

      <div className="op-content op-shell">
        <section className="op-discovery" aria-labelledby="op-discovery-heading">
          <div className="op-discovery-head">
            <div><p className="op-overline">Discover</p><h2 id="op-discovery-heading">Our Programmes</h2></div>
            <p>Find the perfect journey for your clients. Explore the collection today; advanced search and filters will be added after requirements are finalized.</p>
            <button className="op-filter-future" type="button" disabled title="Advanced filters will be added in the next project phase"><Icon name="sliders"/> Filter Journeys <span>· Soon</span></button>
          </div>
          <div className="op-search-row">
            <div className="op-search-placeholder"><Icon name="search" size={18}/><span>Search packages, destinations or experiences…</span><small>Coming soon</small></div>
            <div className="op-sort-placeholder">Sort by <strong>Meeting pending</strong><span>⌄</span></div>
          </div>
          <nav className="op-category-chips" aria-label="Existing package category links">
            {categories.map((cat) => <UiLink onNavigate={onNavigate} key={cat.id} to={cat.id === 'all' ? '/packages' : `/packages?category=${encodeURIComponent(cat.id)}`} className={`op-chip ${activeCategory === cat.id ? 'op-chip--active' : ''}`}>{cat.label}</UiLink>)}
          </nav>
          <div className="op-discovery-corner" aria-hidden="true">❀</div>
        </section>

        {isAll && (pilotLoading || pilotError || pilotPackages) && (
          <section className="op-pilot-collection" aria-labelledby="op-pilot-heading" style={{ marginBottom: '56px' }}>
            <div className="op-section-heading">
              <div>
                <p className="op-eyebrow">Verified Programme Itineraries</p>
                <h2 id="op-pilot-heading">Featured <em>Immersive Journeys</em></h2>
              </div>
              <span className="op-section-heading-aside">Full Excel-derived day-by-day programme pages</span>
            </div>
            {pilotLoading && <p role="status">Loading published journeys...</p>}
            {pilotError && (
              <div role="alert">
                <p>{pilotError}</p>
                {onRetryPilotPackages && <button type="button" onClick={onRetryPilotPackages}>Retry</button>}
              </div>
            )}
            {!pilotLoading && !pilotError && pilotPackages && pilotPackages.length === 0 && (
              <p>No published journeys are available yet.</p>
            )}
            {!pilotLoading && !pilotError && pilotPackages && pilotPackages.length > 0 && (
              <div className="op-package-grid">
                {pilotPackages.map((p) => (
                  <PilotPackageCard key={p.code} pkg={p} onNavigate={onNavigate} />
                ))}
              </div>
            )}
          </section>
        )}

        <section className="op-main-collection" aria-labelledby="op-results-heading">
          <div className="op-results-bar"><div><span className="op-results-number">{items.length}</span> {items.length === 1 ? 'programme' : 'programmes'} found <span className="op-results-sub">· real existing collection</span></div><div className="op-results-right">{!isAll && <span className="op-current-filter">Selected: {categories.find(c=>c.id === activeCategory)?.label ?? activeCategory}</span>}<span className="op-results-sorting">Advanced sorting arrives with filters</span></div></div>
          {config.features.showOptionalCollectionHeading && (
            <div className="op-section-heading"><div><p className="op-eyebrow">Curated for the travel trade</p><h2 id="op-results-heading">Explore Our <em>Journeys</em></h2></div><span className="op-section-heading-aside">Handpicked routes across the heart of India</span></div>
          )}
          {items.length ? <div className="op-package-grid">{firstCollection.map(p=><PackageCard key={p.id} pkg={p} onNavigate={onNavigate}/>)}</div> : <div className="op-empty">No programmes in this category yet. <UiLink to="/packages" onNavigate={onNavigate}>View all journeys</UiLink></div>}
        </section>

        {config.features.showCustomJourneyBand && isAll && <section className="op-custom-band" aria-label="Custom itineraries"><div className="op-custom-art" aria-hidden="true"><svg viewBox="0 0 290 170" fill="none"><g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"><path d="M14 143H272M35 138V67l21-31 20 31v71M41 67h30M51 138V85h10v53M34 89h44M99 138V49l33-34 35 34v89M106 50h54M115 138V74h37v64M117 69h37M128 34h10M179 138V74l26-29 26 29v64M185 75h40M197 138V94h14v44M241 138V99l14-20 14 20v39M7 151h278M69 141q25-20 36 4M168 149q25-29 50 0"/></g></svg></div><div className="op-custom-copy"><p className="op-eyebrow">For Our Trade Partners</p><h2>Custom Itineraries for<br/><em>Unique Traveller Needs</em></h2></div><div className="op-custom-action"><p>Looking for a customised itinerary, group departure or a special interest programme? Our team can craft the perfect Madhya Pradesh experience for your clients.</p><UiLink to="/create-query" onNavigate={onNavigate} className="op-custom-link">Discuss a Custom Journey <Icon name="arrow" size={16}/></UiLink></div></section>}

        {remainingCollection.length > 0 && <section className="op-more-collection" aria-labelledby="op-more-heading"><div className="op-section-heading op-more-head"><div><p className="op-eyebrow">Featured Collections</p><h2 id="op-more-heading">More Journeys <em>to Explore</em></h2></div><p>From wildlife and living heritage to spiritual trails and special-interest programmes — explore more of our trade-ready collection.</p></div><div className="op-package-grid">{remainingCollection.map(p=><PackageCard key={p.id} pkg={p} onNavigate={onNavigate}/>)}</div></section>}
      </div>
    </div>
  );
}
