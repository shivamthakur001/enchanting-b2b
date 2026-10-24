import { useRef, useState, type CSSProperties, type ReactNode } from 'react';
import type { DestinationDetailContent, DestinationPackage } from './destinationDetailTypes';
import {
  destinationDesignVars,
  type DestinationDetailDesign,
} from './destinationDetailConfig';
export { destinationDetailConfig } from './destinationDetailConfig';
import './DestinationDetailPage.css';
import { lazy, Suspense } from 'react';
import { getGalleryRegistration, buildGalleryOverridesFromManager } from './gallery/galleryManager';
import { useGalleryContent } from './gallery/hooks/useGalleryContent';
import { getHeritageDestinationDesign } from './heritageDestinationConfig';

// Lazy-load the heavy gallery bundle — only fetched when destination has a registered gallery
const CinematicEnvelopeGallery = lazy(() => import('./gallery/components/CinematicEnvelopeGallery'));

/**
 * DestinationGallerySection
 * Wrapper that resolves the gallery registration for the current destination slug,
 * fetches its manifest, and renders the CinematicEnvelopeGallery.
 * Renders nothing if the destination has no active gallery registration.
 */
function DestinationGallerySection({ destinationId }: { destinationId: string }) {
  const registration = getGalleryRegistration(destinationId);
  // Hook always called — handles undefined registration internally
  const content = useGalleryContent(registration);
  const baseOverrides = buildGalleryOverridesFromManager();

  // Deep-merge destination-specific styleOverrides on top of manager defaults
  const mergedOverrides = registration?.styleOverrides
    ? {
        ...baseOverrides,
        ...registration.styleOverrides,
        colors: { ...baseOverrides.colors, ...registration.styleOverrides.colors },
        envelope: { ...baseOverrides.envelope, ...registration.styleOverrides.envelope },
        timing: { ...baseOverrides.timing, ...registration.styleOverrides.timing },
        gallery: { ...baseOverrides.gallery, ...registration.styleOverrides.gallery },
        section: { ...baseOverrides.section, ...registration.styleOverrides.section },
      }
    : baseOverrides;

  // No registered gallery for this destination, or manifest not loaded yet, or no photos
  if (!registration || !content || content.photos.length === 0) return null;

  return (
    <Suspense fallback={null}>
      <CinematicEnvelopeGallery content={content} settings={mergedOverrides} />
    </Suspense>
  );
}

/**
 * IMPORTANT MERGE RULE:
 * This component does not render a navbar or footer. Your existing B2B layout owns those.
 * All links/actions must be wired to your REAL React Router routes.
 * The page does not import global header/footer and does NOT include the future gallery.
 */
export interface DestinationDetailPageProps {
  content: DestinationDetailContent;
  packages?: DestinationPackage[];
  config?: Partial<DestinationDetailDesign>;
  onCreateQuery?: (destinationId: string, packageId?: string) => void;
  onViewPackage?: (pkg: DestinationPackage) => void;
  onViewAllPackages?: () => void;
  onTalkToTeam?: () => void;
  /** Preferred generic callback (Nature / Heritage / Wildlife / Spirituality). */
  onExploreThemePackages?: () => void;
  /** Backward compatibility for earlier Pachmarhi integration. */
  onExploreNaturePackages?: () => void;
  /** Preferred generic callback for the current theme landing page. */
  onBackToTheme?: () => void;
  /** Backward compatibility: older Pachmarhi integration uses this name. */
  onBackToNature?: () => void;
  /** True only for standalone mockup — never use sample package data in production. */
  isDemo?: boolean;
}

type IconName = 'pin' | 'calendar' | 'sun' | 'mountain' | 'leaf' | 'users' | 'heart' |
  'compass' | 'temple' | 'landmark' | 'footprints' | 'snowflake' | 'cloud' | 'car' |
  'train' | 'plane' | 'arrow' | 'chevron' | 'clock' | 'graduation' | 'luggage' | 'check';

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const icons: Record<IconName, ReactNode> = {
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    mountain: <><path d="m2 20 7-14 4 7 2-4 7 11Z"/><path d="m7.2 10 1.8 1.2 2.1-1"/></>,
    leaf: <><path d="M20 4C10 3 4 9 4 16c0 3 2 4 5 4 7 0 12-6 11-16Z"/><path d="M4 20c2-6 6-9 12-12"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2c0-3 3-5 6-5s6 2 6 5v2M16 5c2 0 3 1 3 3s-1 3-3 3m1 3c3 0 5 2 5 5v1"/></>,
    heart: <path d="M20 5a5 5 0 0 0-7 0l-1 1-1-1a5 5 0 0 0-7 7l8 8 8-8a5 5 0 0 0 0-7Z"/>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/></>,
    temple: <><path d="M3 10h18M5 10l7-6 7 6M6 21V11m12 10V11M3 21h18m-11-1v-6h4v6"/></>,
    landmark: <><path d="m2 9 10-6 10 6M4 10h16M5 20V11m5 9v-9m4 9v-9m5 9v-9M2 21h20"/></>,
    footprints: <><ellipse cx="7" cy="7" rx="2" ry="3" transform="rotate(-20 7 7)"/><path d="M3 12c3-1 6 0 6 3v5H4c-2-2-3-5-1-8Zm14-3c-2 1-3 3-3 6v5h5c3-2 3-5 2-8"/><ellipse cx="17" cy="5" rx="2" ry="3" transform="rotate(20 17 5)"/></>,
    snowflake: <><path d="M12 2v20M4 6l16 12M20 6 4 18M9 4l3 3 3-3M9 20l3-3 3 3"/></>,
    cloud: <path d="M7 18h12a4 4 0 0 0 0-8h-1a7 7 0 0 0-13-1A4.5 4.5 0 0 0 7 18Z"/>,
    car: <><path d="M3 11 5 5h14l2 6v8H3v-8Zm0 0h18M7 15h2m6 0h2M6 19v2m12-2v2"/></>,
    train: <><rect x="5" y="2" width="14" height="17" rx="3"/><path d="M5 11h14M8 22l3-3m5 0 3 3M8 6h8m-8 9h2m4 0h2"/></>,
    plane: <><path d="m22 2-8 20-3-9-9-3 20-8Z"/><path d="m11 13 6-6"/></>,
    arrow: <><path d="M4 12h16m-7-7 7 7-7 7"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5M22 9v8"/></>,
    luggage: <><rect x="5" y="7" width="14" height="14" rx="2"/><path d="M9 7V4h6v3M9 11v6m6-6v6"/></>,
    check: <path d="m5 12 5 5L20 7"/>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icons[name as IconName] ?? icons.leaf}</svg>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`empd-eyebrow${light ? ' empd-eyebrow--light' : ''}`}>{children}</div>;
}
function SectionHeading({ label, title, copy, light = false }: {
  label: string; title: string; copy?: string; light?: boolean;
}) {
  return <div className="empd-section-heading">
    <Eyebrow light={light}>{label}</Eyebrow>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}
function Picture({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="empd-picture-fallback"
        aria-label={alt}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '100%',
          background: 'linear-gradient(135deg, rgba(23, 56, 42, 0.9) 0%, rgba(6, 30, 21, 0.96) 100%)',
        }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function Hero({ content, onBackToTheme }: { content: DestinationDetailContent; onBackToTheme?: () => void }) {
  return <header className="empd-hero" aria-label={`${content.title} introduction`}>
    <div className="empd-hero__photo"><Picture src={content.heroImage} alt={`Scenic landscape and a viewpoint in ${content.title}`} eager /></div>
    <div className="empd-hero__shade"/>
    <div className="empd-container empd-hero__inner">
      <nav className="empd-breadcrumb" aria-label="Breadcrumb">
        <span>Discover</span><Icon name="chevron" size={12}/>
        <button type="button" onClick={onBackToTheme} disabled={!onBackToTheme}>{content.themeLabel ?? 'Nature'}</button>
        <Icon name="chevron" size={12}/><strong>{content.title}</strong>
      </nav>
      <div className="empd-hero__copy">
        <Eyebrow light>{content.heroEyebrow ?? `${content.themeLabel ?? 'Nature'} Destination · Madhya Pradesh`}</Eyebrow>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
        <div className="empd-hero__tags">{content.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <div className="empd-fact-bar" aria-label="Destination quick facts">
        {content.quickFacts.map((fact) => <div className="empd-fact" key={fact.label}>
          <div className="empd-fact__icon"><Icon name={fact.icon} size={23}/></div>
          <div><span>{fact.label}</span><strong>{fact.value}</strong></div>
        </div>)}
      </div>
    </div>
  </header>;
}

function Overview({ content }: { content: DestinationDetailContent }) {
  return <section className="empd-overview empd-section--narrow">
    <div className="empd-container empd-overview__layout">
      <div className="empd-overview__intro">
        <Eyebrow>Why {content.title} Works</Eyebrow>
        <h2>{content.overview.heading}</h2>
        <p>{content.overview.description}</p>
      </div>
      <div className="empd-overview__cards">{content.overview.cards.map((item) => <article className="empd-overview-card" key={item.label}>
        <div className="empd-round-icon"><Icon name={item.icon} size={25}/></div>
        <strong>{item.label}</strong><p>{item.text}</p>
      </article>)}</div>
    </div>
  </section>;
}

function Highlights({ content }: { content: DestinationDetailContent }) {
  const slider = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => slider.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  return <section className="empd-highlights empd-section">
    <div className="empd-container">
      <div className="empd-heading-row">
        <SectionHeading light label="Signature Highlights" title={`Iconic Experiences in ${content.title}`} />
        <div className="empd-gallery-controls"><button type="button" aria-label="Scroll highlights left" onClick={() => scroll(-1)}>‹</button><button type="button" aria-label="Scroll highlights right" onClick={() => scroll(1)}>›</button></div>
      </div>
      <div className="empd-highlights__rail" ref={slider} tabIndex={0} aria-label={`${content.title} attraction highlights`}>
        {content.highlights.map((item) => <article className="empd-highlight" key={item.id}>
          <Picture src={item.image} alt={`${item.name} in ${content.title}`} />
          <div className="empd-highlight__fade"/>
          <div className="empd-highlight__body"><h3>{item.name}</h3><p>{item.description}</p><span>{item.category}</span></div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Themes({ content }: { content: DestinationDetailContent }) {
  const [selected, setSelected] = useState<string | null>(null);
  const active = content.themes.find((theme) => theme.id === selected);
  return <section className="empd-themes empd-section--narrow">
    <div className="empd-container">
      <SectionHeading label="What To Explore" title="Activities & Experiences"/>
      <div className="empd-themes__grid">
        {content.themes.map((theme) => <button type="button" className={`empd-theme-card${selected === theme.id ? ' is-active' : ''}`} key={theme.id} onClick={() => setSelected(selected === theme.id ? null : theme.id)} aria-expanded={selected === theme.id}>
          <div className="empd-theme-card__image"><Picture src={theme.image} alt={theme.title}/></div>
          <div className="empd-theme-card__content"><div className="empd-theme-card__head"><span className="empd-theme-card__icon"><Icon name={theme.icon} size={20}/></span><h3>{theme.title}</h3></div>
            <ul>{theme.sights.map((sight) => <li key={sight}>{sight}</li>)}</ul>
            <span className="empd-theme-card__arrow"><Icon name="arrow" size={20}/></span>
          </div>
        </button>)}
      </div>
      {active && <div className="empd-theme-detail" role="status"><strong>{active.title}</strong><p>{active.note}</p><button type="button" onClick={() => setSelected(null)}>Close ×</button></div>}
    </div>
  </section>;
}

function SeasonsAndAccess({ content }: { content: DestinationDetailContent }) {
  return <section className="empd-seasons empd-section--narrow">
    <div className="empd-container empd-seasons__layout">
      <div className="empd-seasons__left">
        <SectionHeading label="Best Time To Visit" title="A Destination for Every Season" />
        <div className="empd-seasons__grid">{content.seasons.map((season) => <article className={`empd-season empd-season--${season.theme}`} key={season.name}>
          <div className="empd-season__heading"><Icon name={season.icon} size={26}/><div><h3>{season.name}</h3><small>{season.months}</small></div></div>
          <p>{season.description}</p><span>{season.tag}</span>
        </article>)}</div>
      </div>
      <div className="empd-access">
        <SectionHeading label="Getting There" title={`Easy Access to ${content.title}`}/>
        <div className="empd-access__list">{content.access.map((item) => <div className="empd-access__item" key={item.label}><Icon name={item.icon} size={23}/><div><strong>{item.label}</strong><p>{item.text}</p></div></div>)}</div>
      </div>
    </div>
  </section>;
}

function Packages({ destinationId, destinationTitle, packages, onViewPackage, onCreateQuery, onViewAllPackages, isDemo }: {
  destinationId: string; destinationTitle: string; packages: DestinationPackage[]; onViewPackage?: (pkg: DestinationPackage) => void;
  onCreateQuery?: (destinationId: string, packageId?: string) => void;
  onViewAllPackages?: () => void; isDemo?: boolean;
}) {
  return <section className="empd-packages empd-section--narrow">
    <div className="empd-container">
      <div className="empd-heading-row"><SectionHeading label={`Curated Packages Featuring ${destinationTitle}`} title="Recommended Packages"/>
        {onViewAllPackages && <button className="empd-link-arrow" type="button" onClick={onViewAllPackages}>View All Packages <Icon name="arrow" size={17}/></button>}</div>
      {packages.length ? <div className="empd-packages__grid">{packages.map((pkg) => <article className="empd-package" key={pkg.id}>
        <div className="empd-package__photo"><Picture src={pkg.image} alt={`${pkg.title} package`}/>{isDemo && <span className="empd-demo-tag">Layout Sample</span>}</div>
        <div className="empd-package__info"><div className="empd-package__category">{pkg.category ?? 'Customizable journey'}</div><h3>{pkg.title}</h3><span className="empd-package__duration"><Icon name="calendar" size={15}/>{pkg.duration ?? 'Ask for itinerary'}</span>
          <div className="empd-package__actions"><button type="button" onClick={() => onViewPackage?.(pkg)} disabled={!onViewPackage}>View Package</button><button type="button" onClick={() => onCreateQuery?.(destinationId, pkg.id)} disabled={!onCreateQuery}>Create Query</button></div>
        </div>
      </article>)}</div> : <div className="empd-package-empty"><div className="empd-round-icon"><Icon name="compass" size={26}/></div><h3>Curated journeys are being connected</h3><p>Connect the existing B2B package records to this destination. No sample package is published as a real B2B offer.</p>{onCreateQuery && <button type="button" className="empd-btn empd-btn--forest" onClick={() => onCreateQuery(destinationId)}>Create a Custom Query <Icon name="arrow" size={16}/></button>}</div>}
      {isDemo && <p className="empd-demo-disclaimer">Preview cards are illustrative layouts only. Replace them with real package records and routes when merging.</p>}
    </div>
  </section>;
}

function FinalCTA({ content, onCreateQuery, onTalkToTeam, onExploreThemePackages }: {
  content: DestinationDetailContent; onCreateQuery?: (id: string) => void; onTalkToTeam?: () => void; onExploreThemePackages?: () => void;
}) {
  return <section className="empd-cta">
    <div className="empd-container empd-cta__inner"><div className="empd-cta__icon"><Icon name="leaf" size={29}/></div>
      <div className="empd-cta__text"><Eyebrow light>Plan With Enchanting Madhya Pradesh</Eyebrow><h2>{content.cta.heading}</h2><p>{content.cta.description}</p></div>
      <div className="empd-cta__actions"><button type="button" className="empd-btn empd-btn--gold" disabled={!onCreateQuery} onClick={() => onCreateQuery?.(content.id)}>Create Query <Icon name="arrow" size={17}/></button><button type="button" className="empd-btn empd-btn--outline" disabled={!onTalkToTeam} onClick={onTalkToTeam}>Talk to Our Team</button><button type="button" className="empd-btn empd-btn--outline" disabled={!onExploreThemePackages} onClick={onExploreThemePackages}>Explore {content.themeLabel ?? 'Destination'} Packages</button></div>
    </div>
  </section>;
}

export default function DestinationDetailPage({
  content,
  packages = [],
  config,
  onCreateQuery,
  onViewPackage,
  onViewAllPackages,
  onTalkToTeam,
  onExploreThemePackages,
  onExploreNaturePackages,
  onBackToTheme,
  onBackToNature,
  isDemo = false,
}: DestinationDetailPageProps) {
  const isHeritage = content.themeLabel?.toLowerCase() === 'heritage';
  const effectiveDesign = isHeritage
    ? getHeritageDestinationDesign(content.id, content.customDesign)
    : content.customDesign;
  const activeConfig = config ? { ...effectiveDesign, ...config } : effectiveDesign;
  const style = {
    ...destinationDesignVars(activeConfig),
    // CTA background is destination data — never hardcode Pachmarhi in shared CSS.
    '--empd-cta-image': `url(${JSON.stringify(content.ctaBackgroundImage ?? content.heroImage)})`,
  } as CSSProperties;
  return <div className="empd-page" style={style}>
    <Hero content={content} onBackToTheme={onBackToTheme ?? onBackToNature}/>
    <Overview content={content}/>
    <Highlights content={content}/>
    <Themes content={content}/>
    <SeasonsAndAccess content={content}/>
    <Packages destinationId={content.id} destinationTitle={content.title} packages={packages} onViewPackage={onViewPackage} onCreateQuery={onCreateQuery} onViewAllPackages={onViewAllPackages} isDemo={isDemo}/>
    <FinalCTA content={content} onCreateQuery={onCreateQuery} onTalkToTeam={onTalkToTeam} onExploreThemePackages={onExploreThemePackages ?? onExploreNaturePackages}/>
    {/* CINEMATIC ENVELOPE GALLERY — renders after Final CTA, before the shared app footer.
        Active only for destinations registered in gallery/galleryManager.ts.
        To enable: add destination slug to destinationGalleryRegistry with active: true. */}
    <DestinationGallerySection destinationId={content.id} />
  </div>;
}
