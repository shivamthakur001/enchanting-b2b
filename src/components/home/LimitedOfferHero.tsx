import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "../../router/Router";
import {
  heroOffers,
  type HeroOffer,
} from "../../data/heroOffers";

import {
  ArrowRightIcon,
  PlayIcon,
} from "../icons/Icons";

import { cn } from "../../utils/cn";


/* =========================================================
   HERO — EASY LAYOUT CONTROL
   =========================================================

   Future me mainly yahi values change karna.

   heroHeight:
   Full desktop banner height.

   minHeight:
   Chhoti desktop screens par minimum height.

   buttonsBottomGap:
   Buttons aur Featured Offer Desk ke beech gap.
   Value chhoti = buttons aur neeche.
   Value badi = buttons aur upar.

   contentBottomPadding:
   Featured Offer Desk ka bottom spacing.
   ========================================================= */

const HERO_LAYOUT = {
  heroHeight: "calc(100dvh - 100px)",

  minHeight: 680,

  buttonsBottomGap: 30,

  contentBottomPadding: 35,

  mobileHeroHeight: "calc(100dvh - 85px)",

  mobileMinHeight: 620,
};


const AUTOPLAY_MS = 6000;


/* =========================================================
   MAIN HERO
   ========================================================= */

export function LimitedOfferHero() {
  if (heroOffers.length === 0) {
    return null;
  }

  return (
    <OfferDeckHero
      offers={heroOffers}
    />
  );
}


/* =========================================================
   OFFER DECK
   ========================================================= */

function OfferDeckHero({
  offers,
}: {
  offers: HeroOffer[];
}) {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    progress,
    setProgress,
  ] = useState(0);

  const [
    isPaused,
    setIsPaused,
  ] = useState(false);

  const [
    isInteracting,
    setIsInteracting,
  ] = useState(false);

  const progressRef =
    useRef(0);

  const offer =
    offers[activeIndex] ??
    offers[0];


  /* =====================================================
     SELECT OFFER
     ===================================================== */

  const selectOffer =
    useCallback(
      (index: number) => {
        progressRef.current = 0;

        setProgress(0);

        setActiveIndex(index);
      },
      [],
    );


  /* =====================================================
     PRELOAD CURRENT + NEXT POSTER
     ===================================================== */

  useEffect(() => {
    if (!offer) {
      return;
    }

    const currentImg =
      new Image();

    currentImg.src =
      offer.poster;

    if (offers.length > 1) {
      const nextImg =
        new Image();

      nextImg.src =
        offers[
          (activeIndex + 1) %
            offers.length
        ].poster;
    }
  }, [
    activeIndex,
    offer.poster,
    offers,
  ]);


  /* =====================================================
     AUTOPLAY
     ===================================================== */

  useEffect(() => {
    if (
      isPaused ||
      isInteracting ||
      offers.length <= 1
    ) {
      return;
    }

    let last =
      performance.now();

    let rafId = 0;

    const loop = (
      now: number,
    ) => {
      const dt =
        now - last;

      last = now;

      progressRef.current =
        Math.min(
          100,

          progressRef.current +
            (dt / AUTOPLAY_MS) *
              100,
        );

      setProgress(
        progressRef.current,
      );

      if (
        progressRef.current >=
        100
      ) {
        progressRef.current = 0;

        setProgress(0);

        setActiveIndex(
          (index) =>
            (index + 1) %
            offers.length,
        );

        return;
      }

      rafId =
        requestAnimationFrame(
          loop,
        );
    };

    rafId =
      requestAnimationFrame(
        loop,
      );

    return () =>
      cancelAnimationFrame(
        rafId,
      );
  }, [
    activeIndex,
    isPaused,
    isInteracting,
    offers.length,
  ]);


  /* =====================================================
     KEYBOARD
     ===================================================== */

  const handleKeyDown = (
    event: React.KeyboardEvent,
  ) => {
    if (
      offers.length <= 1
    ) {
      return;
    }

    if (
      event.key ===
      "ArrowRight"
    ) {
      event.preventDefault();

      selectOffer(
        (activeIndex + 1) %
          offers.length,
      );
    } else if (
      event.key ===
      "ArrowLeft"
    ) {
      event.preventDefault();

      selectOffer(
        (activeIndex -
          1 +
          offers.length) %
          offers.length,
      );
    }
  };


  if (!offer) {
    return null;
  }


  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <>
      {/* =================================================
          HERO RESPONSIVE SIZE CONTROL
         ================================================= */}

      <style>
        {`
          #hero-offers {
            height: ${HERO_LAYOUT.heroHeight};
            min-height: ${HERO_LAYOUT.minHeight}px;
          }

          @media (max-width: 767px) {
            #hero-offers {
              height: ${HERO_LAYOUT.mobileHeroHeight};
              min-height: ${HERO_LAYOUT.mobileMinHeight}px;
            }
          }
        `}
      </style>


      <section
        id="hero-offers"
        tabIndex={0}
        onKeyDown={
          handleKeyDown
        }
        aria-label="Featured travel offers"
        aria-roledescription="carousel"

        className="relative flex w-full flex-col justify-between overflow-hidden bg-forest-deep text-ivory outline-none focus-visible:ring-2 focus-visible:ring-saffron"
      >

        {/* =================================================
            POSTERS
           ================================================= */}

        {offers.map(
          (
            item,
            index,
          ) => {
            const isActive =
              index ===
              activeIndex;

            return (
              <div
                key={
                  item.id
                }

                className="absolute inset-0 overflow-hidden"

                style={{
                  opacity:
                    isActive
                      ? 1
                      : 0,

                  transition:
                    "opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)",

                  zIndex:
                    isActive
                      ? 1
                      : 0,

                  pointerEvents:
                    "none",
                }}

                aria-hidden={
                  !isActive
                }
              >
                <img
                  src={
                    item.poster
                  }

                  alt={
                    isActive
                      ? item.alt
                      : ""
                  }

                  className={cn(
                    "h-full w-full object-cover",

                    isActive &&
                      "hero-kenburns",
                  )}

                  style={{
                    objectPosition:
                      item.objectPosition ??
                      "center",
                  }}
                />
              </div>
            );
          },
        )}


        {/* =================================================
            BOTTOM READABILITY GRADIENT
           ================================================= */}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%]"

          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.48), rgba(0,0,0,0.16) 48%, rgba(0,0,0,0))",
          }}
        />


        {/* =================================================
            CONTENT
           ================================================= */}

        <div
          className="relative z-[3] flex flex-1 flex-col justify-end px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12"

          style={{
            paddingBottom:
              `${HERO_LAYOUT.contentBottomPadding}px`,
          }}
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end">


            {/* =============================================
                ACTION BUTTONS
               ============================================= */}

            <div
              className="flex flex-wrap items-center gap-3 self-start rounded-lg bg-black/15 p-2 backdrop-blur-xs"

              style={{
                marginBottom:
                  `${HERO_LAYOUT.buttonsBottomGap}px`,
              }}

              onMouseEnter={() =>
                setIsInteracting(
                  true,
                )
              }

              onMouseLeave={() =>
                setIsInteracting(
                  false,
                )
              }

              onFocus={() =>
                setIsInteracting(
                  true,
                )
              }

              onBlur={() =>
                setIsInteracting(
                  false,
                )
              }
            >
              <Link
                to={
                  offer.exploreUrl
                }

                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-saffron px-6 text-[13px] font-semibold tracking-[0.14em] uppercase text-white shadow-sm transition hover:bg-saffron-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>
                  Explore Offer
                </span>

                <ArrowRightIcon
                  size={14}
                />
              </Link>


              <Link
                to={
                  offer.queryUrl
                }

                className="inline-flex h-12 items-center justify-center rounded-md border border-ivory/35 bg-ink/30 px-6 text-[13px] font-semibold tracking-[0.14em] uppercase text-ivory backdrop-blur-xs transition hover:border-ivory/70 hover:bg-ivory/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Create Query
              </Link>
            </div>


            {/* =============================================
                FEATURED OFFER DESK
               ============================================= */}

            <div
              className="w-full"

              onMouseEnter={() =>
                setIsInteracting(
                  true,
                )
              }

              onMouseLeave={() =>
                setIsInteracting(
                  false,
                )
              }

              onFocus={() =>
                setIsInteracting(
                  true,
                )
              }

              onBlur={() =>
                setIsInteracting(
                  false,
                )
              }
            >

              {/* Desk title + controls */}

              <div className="flex items-center justify-between border-b border-ivory/15 pb-2.5">

                <span className="text-[10px] font-semibold tracking-[0.26em] text-ivory/70 uppercase">
                  Featured Offer
                  Desk
                </span>


                <div className="flex items-center gap-4">

                  {offers.length >
                    1 && (
                    <button
                      type="button"

                      onClick={() =>
                        setIsPaused(
                          (
                            paused,
                          ) =>
                            !paused,
                        )
                      }

                      className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.18em] text-ivory/70 uppercase transition hover:text-saffron focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron"

                      aria-label={
                        isPaused
                          ? "Resume offer rotation"
                          : "Pause offer rotation"
                      }
                    >
                      {isPaused ? (
                        <>
                          <PlayIcon
                            size={
                              13
                            }
                          />

                          <span>
                            Play
                          </span>
                        </>
                      ) : (
                        <>
                          <PauseIcon
                            size={
                              13
                            }
                          />

                          <span>
                            Pause
                          </span>
                        </>
                      )}
                    </button>
                  )}


                  {offers.length >
                    1 && (
                    <span className="text-[11px] tabular-nums tracking-[0.16em] text-ivory/70">
                      {String(
                        activeIndex +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                      {" / "}
                      {String(
                        offers.length,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  )}

                </div>
              </div>


              {/* =============================================
                  MOBILE DESK
                 ============================================= */}

              <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 sm:hidden">

                {offers.map(
                  (
                    item,
                    index,
                  ) => (
                    <DeskItem
                      key={
                        item.id
                      }

                      offer={
                        item
                      }

                      index={
                        index
                      }

                      active={
                        index ===
                        activeIndex
                      }

                      progress={
                        progress
                      }

                      onSelect={() =>
                        selectOffer(
                          index,
                        )
                      }

                      compact
                    />
                  ),
                )}

              </div>


              {/* =============================================
                  DESKTOP DESK
                 ============================================= */}

              <div
                className={cn(
                  "mt-2 hidden gap-2.5 sm:grid",

                  offers.length ===
                    1 &&
                    "grid-cols-1",

                  offers.length ===
                    2 &&
                    "grid-cols-2",

                  offers.length ===
                    3 &&
                    "grid-cols-3",

                  offers.length >=
                    4 &&
                    "grid-cols-2 lg:grid-cols-4",
                )}
              >

                {offers.map(
                  (
                    item,
                    index,
                  ) => (
                    <DeskItem
                      key={
                        item.id
                      }

                      offer={
                        item
                      }

                      index={
                        index
                      }

                      active={
                        index ===
                        activeIndex
                      }

                      progress={
                        progress
                      }

                      onSelect={() =>
                        selectOffer(
                          index,
                        )
                      }
                    />
                  ),
                )}

              </div>

            </div>
          </div>
        </div>


        {/* =================================================
            GLOBAL AUTOPLAY PROGRESS
           ================================================= */}

        {offers.length >
          1 && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-0.5 bg-saffron transition-[width] duration-100"

            style={{
              width:
                `${progress}%`,
            }}
          />
        )}

      </section>
    </>
  );
}


/* =========================================================
   FEATURED OFFER DESK ITEM
   ========================================================= */

function DeskItem({
  offer,
  index,
  active,
  progress,
  onSelect,
  compact = false,
}: {
  offer: HeroOffer;

  index: number;

  active: boolean;

  progress: number;

  onSelect: () => void;

  compact?: boolean;
}) {
  return (
    <button
      type="button"

      onClick={
        onSelect
      }

      className={cn(
        "group relative min-w-0 rounded-md p-3.5 text-left transition",

        compact &&
          "min-w-[170px] flex-1 px-3 py-2.5",

        active
          ? "bg-white/10 text-ivory ring-1 ring-white/15"
          : "bg-white/[0.03] text-ivory/70 hover:bg-white/[0.08] hover:text-ivory",
      )}
    >
      <div className="flex items-baseline justify-between gap-2">

        <span
          className={cn(
            "font-display text-lg font-medium leading-none",

            active
              ? "text-saffron"
              : "text-ivory/60 group-hover:text-ivory/85",
          )}
        >
          {String(
            index + 1,
          ).padStart(
            2,
            "0",
          )}
        </span>


        <span className="truncate text-[10px] font-semibold tracking-[0.18em] text-ivory/60 uppercase">
          {
            offer.deskLabel
          }
        </span>

      </div>


      <span
        className="absolute bottom-0 left-0 h-[2.5px] rounded-b bg-saffron"

        style={{
          width:
            active
              ? `${progress}%`
              : "0%",

          transition:
            active
              ? "none"
              : "width 0.3s ease",
        }}
      />

    </button>
  );
}


/* =========================================================
   PAUSE ICON
   ========================================================= */

function PauseIcon({
  size = 14,
}: {
  size?: number;
}) {
  return (
    <svg
      width={
        size
      }

      height={
        size
      }

      viewBox="0 0 24 24"

      fill="none"

      aria-hidden="true"
    >
      <rect
        x="6"
        y="5"
        width="4"
        height="14"
        rx="1"
        fill="currentColor"
      />

      <rect
        x="14"
        y="5"
        width="4"
        height="14"
        rx="1"
        fill="currentColor"
      />
    </svg>
  );
}