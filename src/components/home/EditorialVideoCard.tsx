import { useEffect, useRef, useState } from "react";
import { Link } from "../../router/Router";
import { getDestinationVideo } from "../../data/destinationVideos";
import { cn } from "../../utils/cn";
import { PremiumTilt } from "../ui/PremiumTilt";
import "./EditorialVideoCard.css";

export interface EditorialVideoCardData {
  id: string;
  title: string;
  category: string;
  location: string;
  poster: string;
  posterAlt: string;
  route: string;
  ctaLabel: string;
  video?: string;
}

interface EditorialVideoCardProps {
  item: EditorialVideoCardData;
  position: number;
  isHovered: boolean;
  isDimmed: boolean;
  isMobileActive?: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function EditorialVideoCard({
  item,
  position,
  isHovered,
  isDimmed,
  isMobileActive = false,
  onHoverStart,
  onHoverEnd,
}: EditorialVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const videoSrc = item.video ?? getDestinationVideo(item.id);
  const active = isHovered || isMobileActive || mobileActive;

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const card = cardRef.current;
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (!card || !coarsePointer.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setMobileActive(entry.isIntersecting),
      { threshold: 0.55, rootMargin: "-8% 0px -8% 0px" },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!active || !videoSrc || failed) {
      video?.pause();
      setReady(false);
      return;
    }

    setMounted(true);
    if (video) {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    }
  }, [active, failed, videoSrc]);

  return (
    <div
      ref={cardRef}
      className="editorial-video-card-slot"
      style={{
        flexGrow: isHovered ? 1.65 : isDimmed ? 0.82 : 1,
        flexBasis: 0,
      }}
    >
      <PremiumTilt strength={isHovered ? "normal" : "normal"} className="h-full w-full">
        <Link
          to={item.route}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onFocus={onHoverStart}
          onBlur={onHoverEnd}
          aria-label={`${item.ctaLabel} ${item.title} in ${item.location}`}
          className="editorial-video-card group relative block h-full min-w-0 overflow-hidden rounded-[22px] bg-forest-deep text-ivory no-underline select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
        >
          <img
            src={item.poster}
            alt={item.posterAlt}
            loading={position <= 5 ? "lazy" : "lazy"}
            decoding="async"
            className={cn(
              "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
              active && ready ? "opacity-0" : "opacity-100",
            )}
          />
          {mounted && videoSrc && !failed && (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
              onCanPlay={() => setReady(true)}
              onError={() => {
                setFailed(true);
                setReady(false);
              }}
              className={cn(
                "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
                active && ready ? "opacity-100" : "opacity-0",
              )}
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
            <span className="inline-flex rounded-full border border-ivory/30 bg-forest-deep/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory/90 backdrop-blur-md">
              {item.category}
            </span>
            <span className="font-display italic text-sm tracking-[0.18em] text-ivory/70">
              {String(position).padStart(2, "0")}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/80">{item.location}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold leading-[1.05] tracking-tight text-ivory sm:text-[1.85rem]">
              {item.title}
            </h3>
            <div className={cn("overflow-hidden transition-all duration-500", active ? "mt-3 max-h-12 opacity-100" : "max-h-0 opacity-0")}>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron">
                {item.ctaLabel} {item.title} <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-ivory/15" />
        </Link>
      </PremiumTilt>
    </div>
  );
}
