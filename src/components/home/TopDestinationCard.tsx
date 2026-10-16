import { useEffect, useRef, useState } from "react";
import { Link } from "../../router/Router";
import type { Destination } from "../../types";
import { getDestinationVideo } from "../../data/destinationVideos";
import { MapPinIcon } from "../icons/Icons";
import { cn } from "../../utils/cn";

const THEME_LABELS: Record<string, string> = {
  heritage: "Heritage",
  wildlife: "Wildlife",
  nature: "Nature",
  spirituality: "Spirituality",
};

function getCategoryLabel(destination: Destination): string {
  const primaryTheme = destination.themes[0];
  return THEME_LABELS[primaryTheme] ?? primaryTheme ?? "Destination";
}

interface TopDestinationCardProps {
  destination: Destination;
  position: number;
  isHovered: boolean;
  isDimmed: boolean;
  isMobileActive?: boolean;
  variant?: "desktop" | "mobile";
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function TopDestinationCard({
  destination,
  position,
  isHovered,
  isDimmed,
  isMobileActive = false,
  variant = "desktop",
  onHoverStart,
  onHoverEnd,
}: TopDestinationCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasLoadedVideo, setHasLoadedVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const active = variant === "desktop" ? isHovered : isMobileActive;
  const videoSrc = getDestinationVideo(destination.slug);
  const positionLabel = String(position).padStart(2, "0");
  const categoryLabel = getCategoryLabel(destination);

  useEffect(() => {
    if (active && videoSrc && !videoError) {
      setHasLoadedVideo(true);
      const video = videoRef.current;
      if (video) {
        try {
          video.currentTime = 0;
        } catch {
          /* no-op */
        }
        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch(() => {
            /* ignore autoplay restriction / abort errors */
          });
        }
      }
    } else {
      const video = videoRef.current;
      if (video) {
        video.pause();
      }
      setIsVideoReady(false);
    }
  }, [active, videoSrc, videoError]);

  return (
    <Link
      to={`/destinations/${destination.slug}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      aria-label={`Explore ${destination.name}, ${destination.region}`}
      className={cn(
        "td-card group relative block h-full min-w-0 shrink-0 cursor-pointer overflow-hidden rounded-[22px] bg-forest-deep text-ivory no-underline select-none",
        "shadow-[0_18px_45px_-18px_rgba(20,15,10,0.5)] ring-1 ring-ivory/15",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep",
        variant === "mobile" && "w-[76vw] max-w-[320px] min-w-[270px] snap-center sm:w-[38vw] sm:max-w-[340px] sm:min-w-[280px]",
        variant === "desktop" && "w-full"
      )}
      style={
        variant === "desktop"
          ? {
              flexGrow: isHovered ? 1.65 : isDimmed ? 0.82 : 1,
              flexBasis: 0,
              transition: "flex-grow 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }
          : undefined
      }
    >
      {/* Poster image (master asset) */}
      <img
        src={destination.image}
        alt={destination.imageAlt}
        loading="lazy"
        decoding="async"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
          active && isVideoReady && !videoError ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Hover / active video preview */}
      {hasLoadedVideo && videoSrc && !videoError ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => {
            setVideoError(true);
            setIsVideoReady(false);
          }}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
            active && isVideoReady ? "opacity-100" : "opacity-0"
          )}
        />
      ) : null}

      {/* Top subtle vignette for chip & index readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      

      {/* Deepened gradient layer that intensifies on active state for CTA legibility */}
      
      {/* Topline: Category chip (left) + Index numeral (right) */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 sm:p-5">
        <span className="inline-flex items-center rounded-full border border-ivory/30 bg-forest-deep/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory/90 backdrop-blur-md">
          {categoryLabel}
        </span>
        <span className="font-display italic text-sm tracking-[0.18em] text-ivory/70">
          {positionLabel}
        </span>
      </div>

      {/* Bottom card content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
        <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/80">
          <MapPinIcon size={12} className="shrink-0 text-saffron" />
          <span className="truncate">{destination.region}</span>
        </p>

        <h3 className="mt-1 font-display font-semibold text-2xl sm:text-[1.75rem] lg:text-[1.85rem] xl:text-[2.1rem] leading-[1.05] tracking-tight text-ivory">
          {destination.name}
        </h3>

        {/* Hover / Active action reveal */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-out",
            active ? "mt-3 max-h-12 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-saffron group-hover:text-amber-300">
            Explore {destination.name}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </div>

      {/* Subtle hairline depth ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-ivory/15 transition-all duration-500 group-hover:ring-ivory/30" />
    </Link>
  );
}
