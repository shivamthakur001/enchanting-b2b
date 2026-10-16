import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { madhyaPradeshHighlights } from "../../data/highlights";
import { cn } from "../../utils/cn";
import MadhyaPradeshHighlightSlide from "./MadhyaPradeshHighlightSlide";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ---------------------------------------------------------------------------
// Arrow icon
// ---------------------------------------------------------------------------

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "prev" ? (
        <path d="M15 5.5 8.5 12 15 18.5" />
      ) : (
        <path d="M9 5.5 15.5 12 9 18.5" />
      )}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const AUTOPLAY_INTERVAL = 4000; // ms — advance one slide every 4 seconds

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function MadhyaPradeshHighlightsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Stable interval handle — never recreated, avoids React Strict Mode double-firing
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [inView, setInView] = useState(false);

  // Runtime flags stored in refs so they are readable inside the interval
  // callback without stale closure issues.
  const isInViewport = useRef(false);
  const isPageVisible = useRef(true);
  const isTouching = useRef(false); // true only during an active touch gesture

  // ---------------------------------------------------------------------------
  // Core navigation — reads DOM directly so it never goes stale
  // ---------------------------------------------------------------------------

  const goNextSlide = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
    if (!slides.length) return;

    const totalSlides = slides.length;
    const trackScrollLeft = el.scrollLeft;

    // Find the index of the slide whose left edge is closest to the current
    // scroll position (i.e. the "current" leftmost visible slide).
    let currentIndex = 0;
    let minDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - trackScrollLeft);
      if (dist < minDist) {
        minDist = dist;
        currentIndex = i;
      }
    });

    const nextIndex = (currentIndex + 1) % totalSlides;
    const targetLeft = slides[nextIndex].offsetLeft;

    el.scrollTo({
      left: targetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, []);

  const goPrevSlide = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
    if (!slides.length) return;

    const totalSlides = slides.length;
    const trackScrollLeft = el.scrollLeft;

    let currentIndex = 0;
    let minDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - trackScrollLeft);
      if (dist < minDist) {
        minDist = dist;
        currentIndex = i;
      }
    });

    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const targetLeft = slides[prevIndex].offsetLeft;

    el.scrollTo({
      left: targetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, []);

  // ---------------------------------------------------------------------------
  // Arrow state (canPrev / canNext)
  // ---------------------------------------------------------------------------

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 10);
    setCanNext(el.scrollLeft < max - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    const resizeObs = new ResizeObserver(updateArrows);
    resizeObs.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      resizeObs.disconnect();
    };
  }, [updateArrows]);

  // ---------------------------------------------------------------------------
  // Stable autoplay engine
  //
  // A single setInterval is started/stopped based on:
  //   • whether the section is in the viewport (≥20%)
  //   • whether the browser tab is visible
  //   • whether the user is actively touching / dragging
  //   • whether prefers-reduced-motion is set
  //
  // NOTE: Hover does NOT pause autoplay (per requirements).
  //
  // The interval callback reads goNextSlide via a stable ref so there is zero
  // stale-closure risk even after React re-renders.
  // ---------------------------------------------------------------------------

  // Keep a fresh ref to goNextSlide so the interval callback always calls the
  // latest version without needing to be recreated.
  const goNextRef = useRef(goNextSlide);
  useEffect(() => {
    goNextRef.current = goNextSlide;
  }, [goNextSlide]);

  const startInterval = useCallback(() => {
    if (prefersReducedMotion()) return;
    if (intervalRef.current !== null) return; // already running — don't double-start
    intervalRef.current = setInterval(() => {
      if (!isInViewport.current || !isPageVisible.current || isTouching.current) {
        return; // skip this tick but keep the interval alive
      }
      goNextRef.current();
    }, AUTOPLAY_INTERVAL);
  }, []);

  const stopInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Reset: stop + restart gives a fresh 4-second window after manual interaction
  const resetInterval = useCallback(() => {
    if (prefersReducedMotion()) return;
    stopInterval();
    startInterval();
  }, [stopInterval, startInterval]);

  // ---------------------------------------------------------------------------
  // IntersectionObserver — scroll-entry reveal + viewport-aware autoplay
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // one-shot: triggers CSS fade-up reveal
        }
        isInViewport.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startInterval(); // carousel entered viewport — start autoplay
        } else {
          stopInterval(); // carousel left viewport — stop autoplay
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      stopInterval();
    };
  // startInterval and stopInterval are stable (no deps that change)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------------------------------------------------------------------------
  // Page / tab visibility
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const handleVisibility = () => {
      isPageVisible.current = document.visibilityState === "visible";
      // The interval continues running; its callback skips ticks when hidden.
      // When the tab comes back, the next tick will fire naturally.
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // ---------------------------------------------------------------------------
  // Touch — pause during active gesture, resume with fresh timer after
  // ---------------------------------------------------------------------------

  const handleTouchStart = useCallback(() => {
    isTouching.current = true;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isTouching.current = false;
    // Give scroll-snap time to settle before the next autoplay tick
    resetInterval();
  }, [resetInterval]);

  // ---------------------------------------------------------------------------
  // Keyboard navigation
  // ---------------------------------------------------------------------------

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevSlide();
      resetInterval();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNextSlide();
      resetInterval();
    }
  };

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <section
      ref={sectionRef}
      aria-labelledby="mp-highlights-heading"
      className="mp-highlights-section relative overflow-x-clip"
    >
      {/* Header row: section label + navigation arrows */}
      <div
        className={cn(
          "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12",
          inView && "mp-hl-enter",
        )}
      >
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div className="max-w-xl">
            <h2
              id="mp-highlights-heading"
              className="font-sans text-[length:var(--section-eyebrow-size)] font-medium uppercase tracking-[0.34em] text-saffron"
            >
              The Many Moods of MP
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              aria-label="Previous highlight"
              onClick={() => {
                goPrevSlide();
                resetInterval();
              }}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-cream text-ink shadow-[0_6px_18px_rgba(23,20,17,0.07)] transition-all duration-300",
                "hover:border-ink/20 hover:bg-white hover:shadow-[0_8px_22px_rgba(23,20,17,0.1)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                !canPrev && "cursor-not-allowed opacity-35 shadow-none hover:bg-cream",
                "md:h-12 md:w-12",
              )}
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              aria-label="Next highlight"
              onClick={() => {
                goNextSlide();
                resetInterval();
              }}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-cream text-ink shadow-[0_6px_18px_rgba(23,20,17,0.07)] transition-all duration-300",
                "hover:border-ink/20 hover:bg-white hover:shadow-[0_8px_22px_rgba(23,20,17,0.1)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                !canNext && "cursor-not-allowed opacity-35 shadow-none hover:bg-cream",
                "md:h-12 md:w-12",
              )}
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Stories of Madhya Pradesh"
        className={cn(
          "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12",
          inView && "mp-hl-enter",
        )}
        style={{ animationDelay: inView ? "80ms" : undefined }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          ref={trackRef}
          className="mp-hl-track no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-px-1 pb-2 pt-1 touch-pan-x md:gap-8 lg:gap-10 xl:gap-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {madhyaPradeshHighlights.map((item, index) => (
            <MadhyaPradeshHighlightSlide
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
