import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { adaptCompactPackage } from './compactPackageAdapter';
import type { CompactDay, CompactMediaOverrides, CompactPackage } from './compactPackageAdapter';
import {
  LuxuryTradeDeskPricing,
  type AgentProfile,
  type ExactQuoteDetails,
  type PricingEstimate,
  type PricingOptions,
  type PricingSelection,
} from './LuxuryTradeDeskPricing';
import './CompactPackageDetailView.css';

const SECTION_IDS = ['highlights', 'itinerary', 'included', 'excluded', 'notes', 'pricing'] as const;
type SectionId = (typeof SECTION_IDS)[number];
type NavSectionId = 'highlights' | 'itinerary' | 'inclusions' | 'notes' | 'pricing';

export type CompactPackageDetailViewProps = {
  /** Existing public-safe record already loaded by packageService (NOT confidential pricing). */
  packageData: unknown;
  /** Explicit banner/day-photo URLs from the verified media resolver or Supabase adapter. */
  media?: CompactMediaOverrides;
  /** Only for three existing pilot packages, if intentionally retaining current demo banner. */
  isDemoBanner?: boolean;
  /** Existing agent-login action; no UI-only fake authentication. */
  onAgentLogin?: () => void;
  /** Server-authorized pricing UI supplied by the separate future pricing integration. */
  agentAuthorized?: boolean;
  previewMode?: boolean;
  pricingOptions?: PricingOptions;
  pricingEstimate?: PricingEstimate;
  agentProfile?: AgentProfile;
  onRequestPricingEstimate?: (selection: PricingSelection) => void | Promise<void>;
  onSubmitExactQuote?: (details: ExactQuoteDetails) => void | Promise<void>;
};

function Accordion({
  id,
  title,
  symbol,
  isOpen,
  onToggle,
  children,
}: {
  id: SectionId;
  title: string;
  symbol: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children: ReactNode;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const isControlled = typeof isOpen === 'boolean';
  const open = isControlled ? isOpen : localOpen;
  const toggle = isControlled ? onToggle : () => setLocalOpen((value) => !value);

  return (
    <section id={`cpd-${id}`} className="cpd-card cpd-section">
      <button
        type="button"
        className="cpd-accordion-head"
        aria-expanded={open}
        aria-controls={`cpd-${id}-panel`}
        onClick={toggle}
      >
        <span className="cpd-head-title">
          <span className="cpd-head-symbol" aria-hidden="true">{symbol}</span>
          {title}
        </span>
        <span className="cpd-plus" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div id={`cpd-${id}-panel`} className="cpd-accordion-body">{children}</div>}
    </section>
  );
}

function Entries({ items, kind }: { items: string[]; kind: 'highlight' | 'included' | 'excluded' | 'note' }) {
  if (!items.length) return <p className="cpd-empty">No {kind} information has been published for this package.</p>;
  return (
    <ul className={`cpd-entries ${kind === 'highlight' ? 'cpd-entries-highlights' : ''}`}>
      {items.map((item, i) => (
        <li key={`${kind}-${i}`}>
          <span className={`cpd-entry-mark cpd-${kind}-mark`} aria-hidden="true">
            {kind === 'excluded' ? '×' : kind === 'note' ? '•' : '✓'}
          </span>
          <span className="cpd-multiline">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DayPhotoCarousel({ day, dayIndex }: { day: CompactDay; dayIndex: number }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [broken, setBroken] = useState(false);
  const photos = day.photos;

  useEffect(() => {
    setCurrentPhoto(0);
    setBroken(false);
  }, [dayIndex, day.id]);

  const move = (by: number) => {
    setCurrentPhoto((prev) => (prev + by + photos.length) % photos.length);
    setBroken(false);
  };
  const select = (index: number) => {
    setCurrentPhoto(index);
    setBroken(false);
  };

  const photo = photos[currentPhoto];
  if (!photos.length) {
    return (
      <div className="cpd-photo-placeholder" role="status">
        <span aria-hidden="true">▧</span>
        <strong>Itinerary images not available yet</strong>
        <small>Day-wise photographs will be supplied by the package dashboard.</small>
      </div>
    );
  }

  return (
    <div className="cpd-carousel" aria-label={`${day.label} photo carousel`}>
      <div className="cpd-main-photo">
        {!broken && photo ? (
          <img
            key={`${day.id}-${currentPhoto}`}
            src={photo.src}
            alt={photo.alt || `${day.label} photograph ${currentPhoto + 1}`}
            loading="lazy"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="cpd-photo-error">Photo could not be loaded</div>
        )}
        <span className="cpd-photo-count">
          {String(currentPhoto + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </span>
        {photos.length > 1 && (
          <div className="cpd-carousel-arrows">
            <button type="button" aria-label={`Previous photo for ${day.label}`} onClick={() => move(-1)}>‹</button>
            <button type="button" aria-label={`Next photo for ${day.label}`} onClick={() => move(1)}>›</button>
          </div>
        )}
      </div>
      {photos.length > 1 && (
        <div className="cpd-photo-thumbs" aria-label={`${day.label} photo thumbnails`}>
          {photos.map((item, i) => (
            <button
              key={item.id ?? `${day.id}-${i}`}
              type="button"
              className={i === currentPhoto ? 'is-active' : ''}
              aria-label={`Show photo ${i + 1} for ${day.label}`}
              aria-pressed={i === currentPhoto}
              onClick={() => select(i)}
            >
              <img
                src={item.src}
                alt=""
                loading="lazy"
                onError={(e: { currentTarget: HTMLImageElement }) => {
                  e.currentTarget.style.opacity = '0.2';
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Itinerary({ days, packageCode }: { days: CompactDay[]; packageCode: string }) {
  const [selected, setSelected] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(0);
  }, [packageCode]);

  if (!days.length) {
    return <p className="cpd-empty cpd-itinerary-empty">No day-wise itinerary has been published for this package.</p>;
  }

  const index = Math.min(selected, days.length - 1);
  const day = days[index];
  const pick = (value: number) => {
    setSelected(value);
    const el = navRef.current?.querySelector<HTMLElement>(`[data-day-index="${value}"]`);
    el?.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
  };

  return (
    <div className="cpd-itinerary-workspace">
      <div className="cpd-day-nav" ref={navRef} role="group" aria-label="Choose itinerary day">
        {days.map((item, i) => (
          <button
            key={`${item.id}-${i}`}
            type="button"
            data-day-index={i}
            className={`cpd-day-selector ${i === index ? 'is-active' : ''}`}
            aria-pressed={i === index}
            onClick={() => pick(i)}
          >
            <strong>{item.label}</strong>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div className="cpd-day-panel" key={`${packageCode}-${day.id}-${index}`}>
        <div className="cpd-day-columns">
          <div className="cpd-day-text">
            <div className="cpd-day-kicker">{day.label} · {index + 1} / {days.length}</div>
            {day.title && <h3>{day.title}</h3>}
            <div className="cpd-day-description">{day.body || 'Itinerary description is not available.'}</div>
          </div>
          <DayPhotoCarousel day={day} dayIndex={index} />
        </div>
        <div className="cpd-day-actions">
          <button type="button" onClick={() => pick(index - 1)} disabled={index === 0}>← Previous Day</button>
          <button type="button" className="cpd-next-day" onClick={() => pick(index + 1)} disabled={index === days.length - 1}>Next Day →</button>
        </div>
      </div>
    </div>
  );
}

function FactCards({ facts }: { facts: CompactPackage['facts'] }) {
  if (!facts.length) return null;
  return (
    <div className="cpd-facts" aria-label="Trip facts">
      {facts.map((f, i) => (
        <div className="cpd-fact" key={`${f.title}-${i}`}>
          <span className="cpd-fact-ornament" aria-hidden="true">✧</span>
          <div>
            <strong>{f.title}</strong>
            <span className="cpd-multiline">{f.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Page BODY only. Navbar and footer must be provided by the existing website shell. */
export function CompactPackageDetailView({
  packageData,
  media,
  isDemoBanner = false,
  onAgentLogin,
  agentAuthorized = false,
  previewMode = false,
  pricingOptions,
  pricingEstimate,
  agentProfile,
  onRequestPricingEstimate,
  onSubmitExactQuote,
}: CompactPackageDetailViewProps) {
  const pkg = adaptCompactPackage(packageData, media);
  const [activeSection, setActiveSection] = useState<NavSectionId>('highlights');

  // Accordion open states
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [inclusionsOpen, setInclusionsOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  const ignoreScrollUntilRef = useRef<number>(0);
  const navRef = useRef<HTMLElement>(null);

  const sections: Array<{ id: NavSectionId; label: string }> = [
    { id: 'highlights', label: 'Highlights' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: 'Inclusions / Exclusion' },
    { id: 'notes', label: 'Please Notes' },
    { id: 'pricing', label: 'Trade Pricing' },
  ];

  // Stable scroll-spy: calculates active section accounting for global header + sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      // Prevent scroll-spy from overriding active tab during smooth scroll
      if (Date.now() < ignoreScrollUntilRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Handle bottom of page
      if (viewportHeight + scrollY >= docHeight - 35) {
        setActiveSection('pricing');
        return;
      }

      // Sticky offset: scrolled header (65px) + sticky nav (~55px) + clearance buffer = 160px
      const offsetTop = 160;

      // Sections ordered from bottom to top
      const sectionConfigs: Array<{
        id: string;
        getSection: () => NavSectionId;
      }> = [
        {
          id: 'cpd-pricing',
          getSection: () => 'pricing',
        },
        {
          id: 'cpd-notes',
          getSection: () => 'notes',
        },
        {
          id: 'cpd-inclusions-row',
          getSection: () => 'inclusions',
        },
        {
          id: 'cpd-itinerary',
          getSection: () => 'itinerary',
        },
        {
          id: 'cpd-highlights',
          getSection: () => 'highlights',
        },
      ];

      for (const cfg of sectionConfigs) {
        const el = document.getElementById(cfg.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetTop) {
            const nextSection = cfg.getSection();
            setActiveSection(nextSection);
            return;
          }
        }
      }

      // Above highlights (in hero or intro): default to highlights
      setActiveSection('highlights');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pkg.code]);

  // Keep active button visible in horizontal scroll on mobile
  useEffect(() => {
    const btn = navRef.current?.querySelector<HTMLElement>(`[data-section="${activeSection}"]`);
    btn?.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
  }, [activeSection]);

  const navigate = (section: NavSectionId) => {
    // Automatically expand target accordion if navigating to it, without closing other sections
    if (section === 'highlights') {
      setHighlightsOpen(true);
    } else if (section === 'inclusions') {
      setInclusionsOpen(true);
    } else if (section === 'notes') {
      setNotesOpen(true);
    }

    setActiveSection(section);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    ignoreScrollUntilRef.current = Date.now() + (prefersReducedMotion ? 50 : 1200);

    // Cancel programmatic scroll lock early if browser fires scrollend
    if (!prefersReducedMotion && 'onscrollend' in window) {
      const onScrollEnd = () => {
        ignoreScrollUntilRef.current = 0;
        window.removeEventListener('scrollend', onScrollEnd);
      };
      window.addEventListener('scrollend', onScrollEnd, { once: true });
    }

    // Delay ensures React has committed the expanded accordion DOM and reflow has completed
    setTimeout(() => {
      requestAnimationFrame(() => {
        let targetId: string = `cpd-${section}`;
        if (section === 'inclusions') {
          targetId = 'cpd-inclusions-row';
        }

        const element = document.getElementById(targetId) || document.getElementById(`cpd-${section}`);
        if (element) {
          element.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start',
          });
        }
      });
    }, 0);
  };

  const duration =
    pkg.durationDays !== null
      ? `${pkg.durationDays} Days${pkg.durationNights !== null ? ` / ${pkg.durationNights} Nights` : ''}`
      : '';

  return (
    <main className="cpd" aria-label="Package details">
      <section
        className={`cpd-hero ${pkg.hero ? 'has-image' : 'no-image'}`}
        style={
          pkg.hero
            ? {
                backgroundImage: `linear-gradient(90deg,rgba(2,31,22,.92),rgba(3,28,22,.18)),linear-gradient(0deg,rgba(2,25,19,.82),transparent 40%),url(${JSON.stringify(pkg.hero.src)})`,
              }
            : undefined
        }
      >
        <div className="cpd-container cpd-hero-inner">
          <div className="cpd-hero-breadcrumb">
            <span>Packages</span>
            <span aria-hidden="true">›</span>
            <strong>{pkg.title}</strong>
          </div>
          <div className="cpd-hero-copy">
            <span className="cpd-eyebrow">Package Detail</span>
            <h1>{pkg.title}</h1>
            {pkg.overview && <p>{pkg.overview}</p>}
            {isDemoBanner && <span className="cpd-demo-label">Demo banner · awaiting backend image</span>}
          </div>
          <FactCards facts={pkg.facts} />
        </div>
      </section>

      <div className="cpd-container cpd-main">
        <section className="cpd-intro" aria-label="Package introduction">
          {pkg.overview && <p className="cpd-overview">{pkg.overview}</p>}
          <dl className="cpd-metadata">
            {pkg.code && (
              <div>
                <dt>Package Code</dt>
                <dd>{pkg.code}</dd>
              </div>
            )}
            {duration && (
              <div>
                <dt>Duration</dt>
                <dd>{duration}</dd>
              </div>
            )}
            {pkg.route && (
              <div className="cpd-route">
                <dt>Package Route</dt>
                <dd>{pkg.route}</dd>
              </div>
            )}
          </dl>
        </section>

        <nav className="cpd-nav" ref={navRef} aria-label="Package sections">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className={s.id === 'pricing' ? 'cpd-nav-trade' : undefined}
              data-section={s.id}
              aria-current={activeSection === s.id ? 'true' : undefined}
              onClick={() => navigate(s.id)}
            >
              {s.id === 'pricing' && (
                <>
                  <span className="cpd-nav-trade-icon" aria-hidden="true">₹</span>{' '}
                </>
              )}
              {s.label}
            </button>
          ))}
        </nav>

        <Accordion
          id="highlights"
          title="Highlights of the Tour"
          symbol="☷"
          isOpen={highlightsOpen}
          onToggle={() => setHighlightsOpen((prev) => !prev)}
        >
          <Entries items={pkg.highlights} kind="highlight" />
        </Accordion>

        <section className="cpd-card cpd-section" id="cpd-itinerary">
          <div className="cpd-panel-heading">
            <h2>Itinerary</h2>
            {duration && <span>{duration}</span>}
          </div>
          <Itinerary days={pkg.days} packageCode={pkg.code || pkg.slug} />
        </section>

        <div className="cpd-inclusion-grid" id="cpd-inclusions-row">
          <Accordion
            id="included"
            title="Included"
            symbol="✓"
            isOpen={inclusionsOpen}
            onToggle={() => setInclusionsOpen((value) => !value)}
          >
            <Entries items={pkg.inclusions} kind="included" />
          </Accordion>
          <Accordion
            id="excluded"
            title="Excluded"
            symbol="×"
            isOpen={inclusionsOpen}
            onToggle={() => setInclusionsOpen((value) => !value)}
          >
            <Entries items={pkg.exclusions} kind="excluded" />
          </Accordion>
        </div>

        <Accordion
          id="notes"
          title="Please Notes"
          symbol="▤"
          isOpen={notesOpen}
          onToggle={() => setNotesOpen((prev) => !prev)}
        >
          <Entries items={pkg.publicNotes} kind="note" />
        </Accordion>

        <section className="cpd-card cpd-section cpd-pricing" id="cpd-pricing">
          <div className="cpd-panel-heading"><h2>Pricing</h2></div>
          {agentAuthorized ? (
            <LuxuryTradeDeskPricing
              packageTitle={pkg.title}
              duration={duration}
              previewMode={previewMode}
              options={pricingOptions}
              estimate={pricingEstimate}
              agentProfile={agentProfile}
              onRequestEstimate={onRequestPricingEstimate}
              onSubmitExactQuote={onSubmitExactQuote}
            />
          ) : (
            <div className="cpd-pricing-gate">
              <span aria-hidden="true" className="cpd-pricing-lock">🔒</span>
              <div>
                <h3>Authorized B2B Agents Only</h3>
                <p>Pricing and the calculator require authorized agent access.</p>
              </div>
              {onAgentLogin && !agentAuthorized && <button type="button" onClick={onAgentLogin}>Agent Login →</button>}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default CompactPackageDetailView;
