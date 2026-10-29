import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";
import { createPortal } from "react-dom";
import { getGalleryConfig } from "../config/galleryConfig";
import type { GalleryOverrides } from "../config/galleryConfig";
import { pachmarhiGallery } from "../data/galleryContent";
import type { GalleryContent } from "../data/galleryContent";
import { useMediaFlags } from "../hooks/useMediaFlags";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { GalleryState } from "../types/gallery";
import { computePhotoLayout, layoutToStyle, mosaicRect } from "../utils/photoLayout";
import { Atmosphere } from "./Atmosphere";
import { Envelope } from "./Envelope";
import { PhotoPrint } from "./PhotoPrint";
import { getGalleryTheme } from "../galleryThemeConfig";
import type { GalleryThemeConfig } from "../galleryThemeConfig";
import "./CinematicEnvelopeGallery.css";

/**
 * Reusable gallery for ALL premium destinations.
 * Only `content` (text/images) and optional `settings` change per destination.
 * Standalone source adapted to a section: NEVER lock scroll on ordinary page load.
 */
export interface CinematicEnvelopeGalleryProps {
  content?: GalleryContent;
  settings?: GalleryOverrides;
  themeConfig?: GalleryThemeConfig;
  themeLabel?: string;
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      {dir === "prev" ? <path d="M15 5 L8 12 L15 19" /> : <path d="M9 5 L16 12 L9 19" />}
    </svg>
  );
}

export default function CinematicEnvelopeGallery({
  content = pachmarhiGallery,
  settings,
  themeConfig,
  themeLabel,
}: CinematicEnvelopeGalleryProps) {
  const activeTheme = useMemo(() => {
    if (themeConfig) return themeConfig;
    if (themeLabel) return getGalleryTheme(themeLabel);
    return getGalleryTheme("nature");
  }, [themeConfig, themeLabel]);

  const cfg = useMemo(() => getGalleryConfig(settings), [settings]);
  const photos = content.photos;
  const total = photos.length;
  const [state, setState] = useState<GalleryState>("closed");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ w: 1280, h: 800 });
  const [ready, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({});

  const handleRatio = useCallback((imageSrc: string, ratio: number) => {
    if (!imageSrc || !ratio || !isFinite(ratio) || ratio <= 0) return;
    setAspectRatios((prev) => {
      if (prev[imageSrc] && Math.abs(prev[imageSrc] - ratio) < 0.002) return prev;
      return { ...prev, [imageSrc]: ratio };
    });
  }, []);

  // Pre-fetch natural aspect ratios of all photos in collection
  useEffect(() => {
    if (!photos || photos.length === 0) return;
    photos.forEach((photo) => {
      const src = photo.image;
      if (!src) return;
      const img = new Image();
      img.src = src;
      if (img.complete && img.naturalWidth && img.naturalHeight) {
        handleRatio(src, img.naturalWidth / img.naturalHeight);
      } else {
        img.onload = () => {
          if (img.naturalWidth && img.naturalHeight) {
            handleRatio(src, img.naturalWidth / img.naturalHeight);
          }
        };
      }
    });
  }, [photos, handleRatio]);

  const reducedMotion = usePrefersReducedMotion();
  const { isMobile, canHover } = useMediaFlags();
  const envelopeRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const touchX = useRef<number | null>(null);
  const touchY = useRef<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);
  const galleryLayerRef = useRef<HTMLDivElement>(null);

  const isGallery = state === "opening" || state === "expanded" || state === "focused" || state === "closing";
  const isLeavingIntro = state === "opening" || state === "expanded" || state === "focused";

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const later = useCallback((fn: () => void, delay: number) => {
    timers.current.push(window.setTimeout(fn, delay));
  }, []);

  const measure = useCallback(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight });
    const rect = envelopeRef.current?.getBoundingClientRect();
    if (rect) setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  }, []);

  useLayoutEffect(() => {
    measure();
    setReady(true);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  // Lock body scrolling ONLY while fullscreen gallery is open
  useEffect(() => {
    if (!isGallery) return;
    const oldBody = document.body.style.overflow;
    const oldHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldBody;
      document.documentElement.style.overflow = oldHtml;
    };
  }, [isGallery]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // Calculate maximum vertical scroll distance if large gallery exceeds viewport
  const maxScroll = useMemo(() => {
    if (total <= 0) return 0;
    const sample = mosaicRect(0, viewport, isMobile, cfg, total, 0);
    return Math.max(0, sample.totalContentHeight - viewport.h);
  }, [total, viewport, isMobile, cfg]);

  // Reset scroll on close or initial opening
  useEffect(() => {
    if (state === "closed" || state === "opening" || state === "closing") {
      setScrollY(0);
    }
  }, [state]);

  const onWheel = useCallback((e: React.WheelEvent) => {
    if (state !== "expanded" || maxScroll <= 0) return;
    setScrollY((curr) => Math.max(0, Math.min(maxScroll, curr + e.deltaY)));
  }, [state, maxScroll]);

  const flapAngle = state === "hoverOpen" ? cfg.envelope.flapHover : isLeavingIntro ? cfg.envelope.flapOpen : 0;
  const duration = reducedMotion ? 1 : state === "focused" ? cfg.timing.focusMs : state === "closing" ? cfg.timing.closingMs : cfg.timing.photoFlyMs;

  const openCollection = useCallback(() => {
    if (total === 0 || (state !== "closed" && state !== "hoverOpen")) return;
    clearTimers();
    measure();
    setScrollY(0);
    if (reducedMotion) {
      setState("expanded");
      later(() => closeBtnRef.current?.focus(), 40);
      return;
    }
    setState("opening");
    later(() => {
      setState("expanded");
      later(() => closeBtnRef.current?.focus(), 50);
    }, cfg.timing.openingHoldMs);
  }, [state, total, clearTimers, measure, reducedMotion, cfg.timing.openingHoldMs, later]);

  const closeCollection = useCallback(() => {
    if (state !== "expanded" && state !== "focused") return;
    clearTimers();
    setFocusedIndex(null);
    setScrollY(0);
    if (reducedMotion) {
      setState("closed");
      later(() => envelopeRef.current?.focus(), 35);
      return;
    }
    setState("closing");
    later(() => {
      setState("closed");
      later(() => envelopeRef.current?.focus(), 35);
    }, cfg.timing.closingMs);
  }, [state, clearTimers, reducedMotion, cfg.timing.closingMs, later]);

  const focusPhoto = useCallback((index: number) => {
    if (state !== "expanded" && state !== "focused") return;
    setFocusedIndex(index);
    setState("focused");
    later(() => backBtnRef.current?.focus(), 35);
  }, [state, later]);

  const returnToMosaic = useCallback(() => {
    if (state !== "focused") return;
    setFocusedIndex(null);
    setState("expanded");
    later(() => closeBtnRef.current?.focus(), 35);
  }, [state, later]);

  const stepFocus = useCallback((dir: -1 | 1) => {
    if (state !== "focused" || focusedIndex === null || total === 0) return;
    setFocusedIndex((focusedIndex + dir + total) % total);
  }, [state, focusedIndex, total]);

  // Keyboard navigation: Escape, Arrows, Focus-trap
  useEffect(() => {
    if (!isGallery) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (state === "focused") { event.preventDefault(); returnToMosaic(); }
        else if (state === "expanded") { event.preventDefault(); closeCollection(); }
      } else if (state === "focused" && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
        event.preventDefault(); stepFocus(event.key === "ArrowRight" ? 1 : -1);
      } else if (state === "expanded" && maxScroll > 0 && (event.key === "ArrowDown" || event.key === "PageDown")) {
        event.preventDefault();
        setScrollY((curr) => Math.min(maxScroll, curr + (event.key === "PageDown" ? 300 : 80)));
      } else if (state === "expanded" && maxScroll > 0 && (event.key === "ArrowUp" || event.key === "PageUp")) {
        event.preventDefault();
        setScrollY((curr) => Math.max(0, curr - (event.key === "PageUp" ? 300 : 80)));
      } else if (event.key === "Tab") {
        const buttons = [...(galleryLayerRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])') ?? [])]
          .filter((b) => b.offsetParent !== null);
        if (!buttons.length) return;
        const first = buttons[0], last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isGallery, state, returnToMosaic, closeCollection, stepFocus, maxScroll]);

  const onTouchStart = (event: TouchEvent) => {
    if (state === "focused") {
      touchX.current = event.touches[0]?.clientX ?? null;
    } else if (state === "expanded" && maxScroll > 0) {
      touchY.current = event.touches[0]?.clientY ?? null;
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    if (state === "expanded" && maxScroll > 0 && touchY.current !== null) {
      const currentY = event.touches[0]?.clientY ?? null;
      if (currentY !== null) {
        const dy = touchY.current - currentY;
        touchY.current = currentY;
        setScrollY((curr) => Math.max(0, Math.min(maxScroll, curr + dy)));
      }
    }
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (state === "focused" && touchX.current !== null) {
      const dx = event.changedTouches[0]?.clientX - touchX.current;
      touchX.current = null;
      if (dx > 56) stepFocus(-1);
      else if (dx < -56) stepFocus(1);
    }
    touchY.current = null;
  };

  const cssVars = {
    // Centralized theme color & background controls
    "--gallery-bg": activeTheme.galleryBg,
    "--gallery-fullscreen-bg": activeTheme.galleryFullscreenBg,
    "--gallery-bg-mode": activeTheme.galleryBackgroundMode,
    "--gallery-gradient": activeTheme.galleryGradient,
    "--gallery-wash-gradient": activeTheme.galleryGradient,
    "--gallery-overlay-opacity": activeTheme.galleryOverlayOpacity,
    "--gallery-texture-opacity": activeTheme.galleryTextureOpacity,
    "--gallery-text": activeTheme.galleryTextColor,
    "--gallery-muted": activeTheme.galleryMutedColor,
    "--gallery-accent": activeTheme.galleryAccentColor,
    "--gallery-border": activeTheme.galleryBorderColor,

    // Envelope surfaces
    "--env-body": activeTheme.envelopeBodyColor,
    "--env-front": activeTheme.envelopeFrontColor,
    "--env-back": activeTheme.envelopeBackColor,
    "--env-flap": activeTheme.envelopeFlapColor,
    "--env-lining": activeTheme.envelopeLiningColor,
    "--env-border": activeTheme.envelopeBorderColor,
    "--env-border-bright": activeTheme.envelopeBorderBrightColor,
    "--env-shadow-color": activeTheme.envelopeShadowColor,
    "--env-shadow-intensity": activeTheme.envelopeShadowIntensity,
    "--env-texture-opacity": activeTheme.envelopeTextureOpacity,

    // Wax seal & Monogram
    "--env-seal": activeTheme.waxSealColor,
    "--env-seal-mid": activeTheme.waxSealMid,
    "--env-seal-hi": activeTheme.waxSealHighlight,
    "--env-seal-text": activeTheme.sealTextColor,
    "--env-monogram": activeTheme.monogramColor,

    // Accents & glow
    "--env-accent": activeTheme.envelopeAccentColor,
    "--env-accent-bright": activeTheme.envelopeAccentBrightColor,

    // Photo frame & navigation chrome
    "--gallery-frame-border": activeTheme.photoFrameBorder,
    "--gallery-print-border": activeTheme.printBorderColor,
    "--gallery-nav-bg": activeTheme.navButtonBg,
    "--gallery-nav-border": activeTheme.navButtonBorder,
    "--gallery-nav-color": activeTheme.navButtonColor,

    // Dimensions, timings & typography
    "--forest": cfg.colors.forest ?? activeTheme.galleryBg,
    "--forest-deep": cfg.colors.forestDeep ?? activeTheme.galleryFullscreenBg,
    "--moss": cfg.colors.moss,
    "--copper": cfg.colors.copper ?? activeTheme.galleryAccentColor,
    "--copper-bright": cfg.colors.copperBright ?? activeTheme.envelopeAccentBrightColor,
    "--ivory": cfg.colors.ivory ?? activeTheme.galleryTextColor,
    "--ivory-muted": cfg.colors.ivoryMuted ?? activeTheme.galleryMutedColor,
    "--wax": cfg.colors.wax ?? activeTheme.waxSealColor,
    "--wax-highlight": cfg.colors.waxHighlight ?? activeTheme.waxSealHighlight,
    "--wax-mid": cfg.colors.waxMid ?? activeTheme.waxSealMid,
    "--paper": cfg.colors.paper ?? activeTheme.envelopeFrontColor,
    "--paper-light": cfg.colors.paperLight ?? activeTheme.envelopeBackColor,
    "--lining": cfg.colors.lining ?? activeTheme.envelopeLiningColor,
    "--envelope-width": `${isMobile ? cfg.envelope.widthMobile : cfg.envelope.width}px`,
    "--envelope-height": `${isMobile ? cfg.envelope.heightMobile : cfg.envelope.height}px`,
    "--envelope-perspective": `${cfg.envelope.perspective}px`,
    "--flap-angle": `${flapAngle}deg`,
    "--envelope-rise": `${state === "hoverOpen" ? cfg.envelope.riseHover : 0}px`,
    "--hover-ms": `${cfg.timing.hoverMs}ms`,
    "--flap-ms": `${cfg.timing.flapMs}ms`,
    "--easing": cfg.timing.easing,
    "--easing-flap": cfg.timing.easingFlap,
    "--font-eyebrow": cfg.typography.eyebrow,
    "--font-heading": cfg.typography.heading,
    "--font-body": cfg.typography.body,
    "--image-radius": `${cfg.gallery.imageRadius}px`,
    "--gallery-section-min-height": isMobile ? cfg.section.mobileMinHeight : cfg.section.minHeight,
    "--gallery-padding-y": cfg.section.paddingY,
    "--gallery-heading-size": cfg.section.headingSize,
    "--gallery-mobile-heading-size": cfg.section.mobileHeadingSize,
    "--gallery-short-screen-heading-size": cfg.section.shortScreenHeadingSize,
    "--gallery-mobile-description-size": cfg.section.mobileDescriptionSize,
    "--gallery-eyebrow-size": cfg.section.eyebrowSize,
    "--gallery-description-size": cfg.section.descriptionSize,
    "--gallery-layer-z": cfg.section.zIndex,
    "--gallery-hover-zoom": cfg.gallery.hoverZoom,
    "--gallery-dim": cfg.gallery.overlayDarkness,
    "--gallery-atmosphere-opacity": String(activeTheme.galleryOverlayOpacity ?? cfg.section.atmosphereOpacity),
  } as CSSProperties;

  const focused = focusedIndex !== null ? photos[focusedIndex] : null;

  return (
    <>
      <section
        className={`satpura satpura-section ${isLeavingIntro ? "is-leaving-intro" : ""} ${activeTheme.galleryBackgroundMode === "solid" ? "is-solid-mode" : ""}`}
        data-state={state}
        data-bg-mode={activeTheme.galleryBackgroundMode}
        style={cssVars}
        aria-label={`${content.collectionName} gallery`}
      >
        <Atmosphere />
        <div className="intro">
          <div className="intro-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <div className="rule" />
            <h2 className="headline">{content.heading}</h2>
            <p className="tagline">{content.tagline}</p>
            <p className="description">{content.description}</p>
          </div>
          <Envelope
            ref={envelopeRef}
            state={state}
            canHover={canHover}
            onOpen={openCollection}
            onHoverStart={() => { if (state === "closed" && total) setState("hoverOpen"); }}
            onHoverEnd={() => { if (state === "hoverOpen") setState("closed"); }}
            peekImages={photos.map((photo) => ({ src: photo.image, alt: photo.alt }))}
            monogram={content.envelopeMonogram}
            collectionName={content.collectionName}
          />
        </div>
      </section>

      {isGallery && ready && createPortal(
        <div
          ref={galleryLayerRef}
          className={`satpura satpura-overlay is-gallery ${activeTheme.galleryBackgroundMode === "solid" ? "is-solid-mode" : ""}`}
          data-state={state}
          data-bg-mode={activeTheme.galleryBackgroundMode}
          style={cssVars}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-label={content.collectionName}
        >
          <Atmosphere />
          {photos.map((photo, index) => {
            const ratio =
              aspectRatios[photo.image] ||
              (photo.aspect === "portrait"
                ? 0.75
                : photo.aspect === "wide"
                ? 1.7778
                : photo.aspect === "square"
                ? 1.0
                : undefined);
            const layout = computePhotoLayout(
              index,
              total,
              state,
              focusedIndex,
              origin,
              viewport,
              isMobile,
              reducedMotion,
              cfg,
              scrollY,
              ratio
            );
            return (
              <PhotoPrint
                key={photo.id}
                photo={photo}
                index={index}
                state={state}
                isSelected={focusedIndex === index}
                showTitles={cfg.visibility?.showPhotoTitles ?? false}
                layoutStyle={layoutToStyle(layout, duration, cfg.timing.easing)}
                onSelect={focusPhoto}
                onRatio={handleRatio}
              />
            );
          })}

          {state === "focused" && (
            <div className="focus-scrim" onClick={returnToMosaic} aria-hidden="true" />
          )}

          {state === "expanded" && maxScroll > 0 && (
            <div
              className="gallery-scroll-indicator"
              style={{
                position: "fixed",
                right: "12px",
                top: "20%",
                height: "60%",
                width: "3px",
                borderRadius: "2px",
                background: "var(--env-border, rgba(196, 165, 116, 0.15))",
                pointerEvents: "none",
                zIndex: 52,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: `${(scrollY / maxScroll) * 75}%`,
                  height: "25%",
                  width: "100%",
                  borderRadius: "2px",
                  background: "var(--gallery-accent, var(--copper, #c4a574))",
                  boxShadow: "0 0 8px var(--env-border-bright, rgba(196, 165, 116, 0.5))",
                  transition: "top 120ms ease-out",
                }}
              />
            </div>
          )}

          {(state === "expanded" || state === "focused") && (
            <div
              className="gallery-chrome chrome-enter"
              role="dialog"
              aria-modal="true"
              aria-label={content.collectionName}
            >
              {state === "focused" && focused && focusedIndex !== null && (
                <>
                  <div className="counter">
                    {String(focusedIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </div>
                  <button
                    ref={backBtnRef}
                    type="button"
                    className="back-mosaic"
                    onClick={returnToMosaic}
                  >
                    Back to Collection
                  </button>
                  <button
                    type="button"
                    className="focus-nav prev"
                    aria-label="Previous photograph"
                    onClick={() => stepFocus(-1)}
                  >
                    <Chevron dir="prev" />
                  </button>
                  <button
                    type="button"
                    className="focus-nav next"
                    aria-label="Next photograph"
                    onClick={() => stepFocus(1)}
                  >
                    <Chevron dir="next" />
                  </button>
                  {Boolean(cfg.visibility?.showPhotoCategories || cfg.visibility?.showPhotoTitles || cfg.visibility?.showPhotoCaptions) && (
                    <div className="focus-panel">
                      {cfg.visibility?.showPhotoCategories && focused.category && (
                        <p className="focus-kicker">{focused.category}</p>
                      )}
                      {cfg.visibility?.showPhotoTitles && focused.title && (
                        <h2 className="focus-title">{focused.title}</h2>
                      )}
                      {cfg.visibility?.showPhotoCaptions && focused.caption && (
                        <p className="focus-caption">{focused.caption}</p>
                      )}
                    </div>
                  )}
                </>
              )}
              <button
                ref={closeBtnRef}
                type="button"
                className="close-collection"
                onClick={closeCollection}
              >
                Close Collection{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path d="M6 6 L18 18" />
                  <path d="M18 6 L6 18" />
                </svg>
              </button>
              {state === "expanded" && (
                <p className="hint">
                  Select a frame{maxScroll > 0 ? " · Scroll to view all" : ""} · Esc to close
                </p>
              )}
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
