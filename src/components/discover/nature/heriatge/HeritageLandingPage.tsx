import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { heritageThemeConfig as defaultTheme, type HeritageThemeConfig } from './config/heritageThemeConfig';
import {
  heritagePageContent,
  heritageExpressions,
  heritageDestinations,
  type HeritageDestination,
  type HeritageProgramme,
} from './config/heritageContent';
import './heritageLanding.css';

/**
 * Safely scoped Heritage landing page. No navbar or footer is rendered here:
 * leave the application's existing global navbar, Living Map Drawer and footer.
 * The same Nature section flow is preserved:
 * Hero > Intro > Four Expressions > Destinations > Programmes > Pre-footer CTA.
 *
 * Connect real programmes/destination records via props in the parent route.
 * You can edit the visuals from ONE file: config/heritageThemeConfig.ts
 */
export interface HeritageLandingPageProps {
  theme?: HeritageThemeConfig;
  destinations?: readonly HeritageDestination[];
  programmes?: readonly HeritageProgramme[];
  /** Use the site's actual working query route. Default does not assume theme query support. */
  createQueryHref?: string;
  destinationUrl?: (slug: string) => string;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

function themeVariables(theme: HeritageThemeConfig): CSSProperties {
  return {
    '--hl-page': theme.colors.page,
    '--hl-soft': theme.colors.pageSoft,
    '--hl-intro-bg': theme.sections.intro.background,
    '--hl-expressions-bg': theme.sections.expressions.background,
    '--hl-destinations-bg': theme.sections.destinations.background,
    '--hl-programmes-bg': theme.sections.programmes.background,
    '--hl-card-columns': `${theme.layout.cardColumnsDesktop}`,
    '--hl-sandstone': theme.colors.sandstone,
    '--hl-burgundy': theme.colors.burgundy,
    '--hl-dark': theme.colors.burgundyDark,
    '--hl-gold': theme.colors.gold,
    '--hl-antique': theme.colors.antiqueGold,
    '--hl-ink': theme.colors.ink,
    '--hl-muted': theme.colors.muted,
    '--hl-cream': theme.colors.cream,
    '--hl-line': theme.colors.border,
    '--hl-font-display': theme.typography.displayFont,
    '--hl-font-body': theme.typography.bodyFont,
    '--hl-hero-size': `${theme.typography.heroMaxFontSize}px`,
    '--hl-heading-size': `${theme.typography.sectionMaxFontSize}px`,
    '--hl-letter-spacing': `${theme.typography.letterSpacingEm}em`,
    '--hl-max-content': `${theme.layout.maxContentWidth}px`,
    '--hl-section-space': `${theme.layout.desktopSectionGap}px`,
    '--hl-section-space-mobile': `${theme.layout.mobileSectionGap}px`,
    '--hl-card-radius': `${theme.layout.cardRadius}px`,
    '--hl-border-width': `${theme.boundary.desktopWidth}px`,
    '--hl-border-width-tablet': `${theme.boundary.tabletWidth}px`,
    '--hl-border-width-mobile': `${theme.boundary.mobileWidth}px`,
    '--hl-border-height': `${theme.boundary.desktopTopHeight}px`,
    '--hl-border-height-mobile': `${theme.boundary.mobileTopHeight}px`,
    '--hl-border-opacity': `${theme.boundary.opacity}`,
    '--hl-side-art': `url("${theme.boundary.sideAsset}")`,
    '--hl-top-art': `url("${theme.boundary.horizontalAsset}")`,
    '--hl-corner-art': `url("${theme.boundary.cornerAsset}")`,
    '--hl-border-tile-side': `${86 * theme.boundary.repeatScale}px`,
    '--hl-border-tile-top': `${240 * theme.boundary.repeatScale}px`,
    '--hl-hero-height': `${theme.hero.minHeightDesktop}px`,
    '--hl-hero-height-mobile': `${theme.hero.minHeightMobile}px`,
    '--hl-hero-image': `url("${theme.hero.archImage}")`,
    '--hl-parchment-image': `url("${theme.hero.backgroundImage}")`,
    '--hl-parchment-opacity': `${theme.hero.backgroundImageOpacity}`,
    '--hl-hero-overlay': `${theme.hero.imageOverlayOpacity}`,
    '--hl-arch-radius': `${theme.hero.archRadiusTop}px`,
    '--hl-stone-size': `${theme.hero.livingStoneSizeDesktop}px`,
    '--hl-stone-size-mobile': `${theme.hero.livingStoneSizeMobile}px`,
    '--hl-stone-travel': `${theme.hero.livingStoneFloatPx}px`,
    '--hl-stone-duration': `${theme.hero.livingStoneFloatDurationSeconds}s`,
    '--hl-stone-glow': `${theme.hero.livingStoneGlow}`,
    '--hl-expression-height': `${theme.expressions.panelHeightDesktop}px`,
    '--hl-expression-height-mobile': `${theme.expressions.panelHeightMobile}px`,
    '--hl-crossfade': `${theme.expressions.crossfadeMs}ms`,
    '--hl-destination-image-height': `${theme.destinationCards.imageHeight}px`,
    '--hl-destination-zoom': `${theme.destinationCards.zoomOnHover}`,
    '--hl-cta-bg': theme.finalCta.background,
    '--hl-cta-text': theme.finalCta.textColor,
    '--hl-cta-accent': theme.finalCta.accentColor,
    '--hl-button-bg': theme.finalCta.buttonBackground,
    '--hl-button-text': theme.finalCta.buttonTextColor,
    '--hl-reveal-time': `${theme.motion.revealMs}ms`,
  } as CSSProperties;
}

function heading(main: string, italic: string) {
  return <>{main} <em>{italic}</em></>;
}

export default function HeritageLandingPage({
  theme = defaultTheme,
  destinations = heritageDestinations,
  programmes = [],
  createQueryHref = '/create-query',
  destinationUrl = (slug) => `/destinations/${slug}`,
}: HeritageLandingPageProps) {
  const [activeExpression, setActiveExpression] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const stoneRef = useRef<HTMLDivElement>(null);
  const active = heritageExpressions[activeExpression];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('[data-hl-reveal]');
    if (!theme.motion.enabled || typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('hl-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hl-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [theme.motion.enabled]);

  useEffect(() => {
    const hero = heroRef.current;
    const stone = stoneRef.current;
    if (!hero || !stone || !theme.motion.enabled || !theme.motion.parallaxEnabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5;
      const y = (event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5;
      const tilt = theme.hero.livingStonePointerTiltDegrees;
      stone.style.setProperty('--hl-tilt-x', `${clamp(-y * tilt * 2, -tilt, tilt)}deg`);
      stone.style.setProperty('--hl-tilt-y', `${clamp(x * tilt * 2, -tilt, tilt)}deg`);
    };
    const onLeave = () => {
      stone.style.setProperty('--hl-tilt-x', '0deg');
      stone.style.setProperty('--hl-tilt-y', '0deg');
    };
    const onScroll = () => {
      const b = hero.getBoundingClientRect();
      const progress = clamp(-b.top / Math.max(b.height, 1), 0, 1);
      stone.style.setProperty('--hl-scroll-angle', `${progress * theme.hero.livingStoneScrollRotationDegrees}deg`);
    };
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [theme.hero.livingStonePointerTiltDegrees, theme.hero.livingStoneScrollRotationDegrees, theme.motion.enabled, theme.motion.parallaxEnabled]);

  const showBoundary = theme.boundary.enabled;
  return (
    <div ref={rootRef} className="hl-root" style={themeVariables(theme)} id="heritage-landing">
      {showBoundary && <div className="hl-ornaments" aria-hidden="true">
        {theme.boundary.showSides && <><span className="hl-ornament-side hl-left"/><span className="hl-ornament-side hl-right"/></>}
        {theme.boundary.showTop && <span className="hl-ornament-horizontal hl-top"/>}
        {theme.boundary.showBottom && <span className="hl-ornament-horizontal hl-bottom"/>}
        {theme.boundary.showCorners && <><span className="hl-ornament-corner hl-corner-tl"/><span className="hl-ornament-corner hl-corner-tr"/><span className="hl-ornament-corner hl-corner-bl"/><span className="hl-ornament-corner hl-corner-br"/></>}
      </div>}

      {theme.hero.enabled && <section className="hl-hero" ref={heroRef} aria-labelledby="hl-hero-heading">
        <div className="hl-wrap hl-hero-layout">
          <div className="hl-hero-copy" data-hl-reveal>
            <p className="hl-kicker"><span className="hl-flower">✥</span> {heritagePageContent.hero.eyebrow}</p>
            <h1 id="hl-hero-heading">{heading(heritagePageContent.hero.title, heritagePageContent.hero.italicTitle)}</h1>
            <p className="hl-hero-description">{heritagePageContent.hero.description}</p>
            <a className="hl-btn hl-btn-filled" href="#heritage-expressions">Explore Heritage <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hl-hero-visual" aria-hidden="true">
            <div className="hl-arched-photo"><div className="hl-arch-shadow" /></div>
            {theme.hero.showLivingStone && <div className="hl-living-stone" ref={stoneRef}>
              <img src={theme.hero.livingStoneImage} alt="" draggable={false} />
            </div>}
            <span className="hl-hero-seal">THE LIVING STONE</span>
          </div>
        </div>
        <div className="hl-wrap hl-hero-bottom"><span>THE LIVING MUSEUM × ROYAL CHRONICLE</span><a href="#heritage-intro">{heritagePageContent.hero.scrollLabel} ↓</a></div>
      </section>}

      {theme.sections.intro.enabled && <section className="hl-intro hl-section" id="heritage-intro" aria-labelledby="hl-intro-heading">
        <div className="hl-wrap hl-intro-layout">
          <div data-hl-reveal><p className="hl-kicker">{heritagePageContent.intro.eyebrow}</p><h2 id="hl-intro-heading">{heading(heritagePageContent.intro.title, heritagePageContent.intro.italicTitle)}</h2></div>
          <div className="hl-intro-description" data-hl-reveal><p>{heritagePageContent.intro.description}</p><div className="hl-rule" aria-hidden="true"/><span>STONE · STORIES · CIVILISATIONS</span></div>
        </div>
      </section>}

      {theme.expressions.enabled && <section className="hl-expressions hl-section" id="heritage-expressions" aria-labelledby="hl-expressions-heading">
        <div className="hl-wrap">
          <header className="hl-section-heading" data-hl-reveal><p className="hl-kicker">{heritagePageContent.expressions.eyebrow}</p><h2 id="hl-expressions-heading">{heading(heritagePageContent.expressions.title,heritagePageContent.expressions.italicTitle)}</h2><p>{heritagePageContent.expressions.description}</p></header>
          <div className="hl-expressions-layout" data-hl-reveal>
            <div className="hl-expression-image-panel">
              {heritageExpressions.map((expression,index) => <div className={`hl-expression-visual ${index === activeExpression ? 'hl-selected' : ''}`} key={expression.id} aria-hidden={index !== activeExpression}>
                <img src={expression.image} alt={expression.imageAlt} loading={index===0?'eager':'lazy'}/>
              </div>)}
              <div className="hl-expression-image-shade"/>
              <div className="hl-expression-copy" aria-live="polite">
                <p className="hl-kicker">{active.eyebrow}</p>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                <div className="hl-expression-tags">{active.highlights.map(tag=><span key={tag}>{tag}</span>)}</div>
              </div>
            </div>
            <div className="hl-expression-selector" role="group" aria-label="Choose a Heritage expression">
              {heritageExpressions.map((expression,index) => <button key={expression.id} type="button"
                className={`hl-expression-option ${index===activeExpression?'hl-active':''}`}
                aria-pressed={index===activeExpression}
                onPointerEnter={(event) => { if(event.pointerType==='mouse') setActiveExpression(index); }}
                onFocus={()=>setActiveExpression(index)}
                onClick={()=>setActiveExpression(index)}>
                  <span className="hl-expression-number">0{index+1}</span><span className="hl-option-copy"><strong>{expression.title}</strong><small>{expression.highlights.join(' · ')}</small></span><span className="hl-option-arrow" aria-hidden="true">↗</span>
                </button>)}
            </div>
          </div>
        </div>
      </section>}

      {theme.destinationCards.enabled && <section className="hl-destinations hl-section" id="heritage-destinations" aria-labelledby="hl-destinations-heading">
        <div className="hl-wrap">
          <header className="hl-grid-heading" data-hl-reveal><div><p className="hl-kicker">{heritagePageContent.destinations.eyebrow}</p><h2 id="hl-destinations-heading">{heading(heritagePageContent.destinations.title, heritagePageContent.destinations.italicTitle)}</h2></div><p>{heritagePageContent.destinations.description}</p></header>
          <div className="hl-destination-grid">
            {destinations.map((destination,index) => <a className={`hl-destination-card ${destination.image?'':'hl-card-fallback'}`} href={destinationUrl(destination.slug)} key={destination.slug} data-hl-reveal>
              {destination.image && <img src={destination.image} alt={`Illustrative scene representing ${destination.name}; replace with authentic photography`} loading="lazy" />}
              <div className="hl-destination-info">
                {theme.destinationCards.showIndex && <span className="hl-card-number">{String(index+1).padStart(2,'0')} / HERITAGE</span>}
                <h3>{destination.name}</h3><p>{destination.teaser}</p>
                <span className="hl-card-action" aria-hidden="true">↗</span>
              </div>
            </a>)}
          </div>
        </div>
      </section>}

      {theme.programmes.enabled && <section className="hl-programmes hl-section" id="heritage-programmes" aria-labelledby="hl-programmes-heading">
        <div className="hl-wrap">
          <header className="hl-grid-heading" data-hl-reveal><div><p className="hl-kicker">{heritagePageContent.programmes.eyebrow}</p><h2 id="hl-programmes-heading">{heading(heritagePageContent.programmes.title,heritagePageContent.programmes.italicTitle)}</h2></div><p>{heritagePageContent.programmes.description}</p></header>
          {programmes.length ? <div className="hl-programme-grid">{programmes.slice(0,theme.programmes.maxVisible).map((programme) => <a href={programme.href} className="hl-programme-card" key={programme.id} data-hl-reveal>
            <div className="hl-programme-image">{programme.image ? <img src={programme.image} alt={programme.title} loading="lazy"/> : <span aria-hidden="true">✥</span>}</div>
            <div className="hl-programme-copy"><span className="hl-programme-eyebrow">HERITAGE JOURNEY</span><h3>{programme.title}</h3>{programme.description&&<p>{programme.description}</p>}
              <div className="hl-programme-bottom">{theme.programmes.showDuration && programme.duration && <span>{programme.duration}</span>}{theme.programmes.showPrices && programme.priceLabel && <strong>{programme.priceLabel}</strong>}<span className="hl-programme-link">VIEW JOURNEY ↗</span></div>
            </div></a>)}</div> : <div className="hl-programme-empty" data-hl-reveal><div className="hl-empty-ornament" aria-hidden="true">✥</div><div><h3>{heritagePageContent.programmes.emptyHeading}</h3><p>{heritagePageContent.programmes.emptyDescription}</p></div><a href={createQueryHref} className="hl-btn hl-btn-outline">CREATE CUSTOM QUERY ↗</a></div>}
        </div>
      </section>}

      {theme.finalCta.enabled && <section className="hl-cta hl-section" id="heritage-build-journey" aria-labelledby="hl-cta-heading">
        {theme.finalCta.showWatermark && <img src={theme.hero.livingStoneImage} className="hl-cta-stone" alt="" aria-hidden="true" loading="lazy"/>}
        <div className="hl-wrap hl-cta-content" data-hl-reveal><p className="hl-kicker">{heritagePageContent.cta.eyebrow}</p><h2 id="hl-cta-heading">{heading(heritagePageContent.cta.title,heritagePageContent.cta.italicTitle)}</h2><p>{heritagePageContent.cta.description}</p><div className="hl-cta-buttons"><a href="#heritage-destinations" className="hl-btn hl-btn-cta-outline">{heritagePageContent.cta.destinationsButton}</a><a href={createQueryHref} className="hl-btn hl-btn-cta-filled">{heritagePageContent.cta.queryButton} ↗</a></div></div>
      </section>}
      {/* No footer: the EXISTING global footer follows this component in the parent app. */}
    </div>
  );
}
