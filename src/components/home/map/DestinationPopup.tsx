import { useEffect, useRef, useState } from "react";
import { useNavigate } from "../../../router/Router";
import { cn } from "../../../utils/cn";
import type { MapDestination } from "../../../data/mapDestinations";

const THEME_LABELS: Record<string, string> = {
  heritage: "Heritage",
  wildlife: "Wildlife",
  nature: "Nature",
  spirituality: "Spiritual",
};

const THEME_COLORS: Record<string, string> = {
  heritage: "#8c6840",
  wildlife: "#4a7252",
  nature: "#42ce88",
  spirituality: "#9a6b2f",
};

interface DestinationPopupProps {
  destination: MapDestination;
  /** Position relative to the SVG container (pixels from left/top of wrapper) */
  anchorX: number;
  anchorY: number;
  containerWidth: number;
  containerHeight: number;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function DestinationPopup({
  destination,
  anchorX,
  anchorY,
  containerWidth,
  containerHeight,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: DestinationPopupProps) {
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const primaryTheme = destination.themes[0] ?? "heritage";
  const themeLabel = THEME_LABELS[primaryTheme] ?? "Destination";
  const themeColor = THEME_COLORS[primaryTheme] ?? "#8c6840";

  const images = destination.images.length > 0 ? destination.images : [];
  const hasMultiple = images.length > 1;

  // Smart positioning: keep popup within map container
  const POPUP_W = 280;
  const POPUP_H = 280;
  const OFFSET_Y = 16;

  let left = anchorX - POPUP_W / 2;
  let top = anchorY - POPUP_H - OFFSET_Y;

  // Prefer opening toward the side with more room.
  if (anchorX > containerWidth * 0.72) {
    left = anchorX - POPUP_W - 18;
  } else if (anchorX < containerWidth * 0.28) {
    left = anchorX + 18;
  }

  // Clamp horizontal
  left = Math.max(8, Math.min(left, containerWidth - POPUP_W - 8));
  // Flip below if too close to top
  if (top < 8) top = anchorY + 24;
  // Clamp vertical
  top = Math.max(8, Math.min(top, containerHeight - POPUP_H - 8));

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  function handleNavigate() {
    if (destination.route) navigate(destination.route);
    onClose();
  }

  return (
    <div
      ref={popupRef}
      role="dialog"
      aria-label={`${destination.name} details`}
      className="map-popup"
      style={{ left, top, width: POPUP_W, cursor: destination.route ? "pointer" : "default" }}
      onClick={destination.route ? handleNavigate : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image carousel */}
      <div className="map-popup-img-wrap">
        {images.length > 0 ? (
          <>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={destination.imageAlts[i] ?? destination.name}
                className={cn(
                  "map-popup-img",
                  i === imageIndex ? "map-popup-img--active" : "map-popup-img--hidden",
                )}
                loading="lazy"
                draggable={false}
              />
            ))}
            {hasMultiple && (
              <div className="map-popup-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Image ${i + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageIndex(i);
                    }}
                    className={cn(
                      "map-popup-dot",
                      i === imageIndex && "map-popup-dot--active",
                    )}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="map-popup-placeholder">
            <span>{destination.name[0]}</span>
          </div>
        )}

        {/* Category badge */}
        <span className="map-popup-badge" style={{ background: themeColor }}>
          {themeLabel}
        </span>

        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="map-popup-close"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="map-popup-body">
        <p className="map-popup-region">{destination.region}</p>
        <h3 className="map-popup-name">{destination.name}</h3>
        <p className="map-popup-summary">{destination.summary}</p>
        <span className="map-popup-cta">
          Explore →
        </span>
      </div>
    </div>
  );
}
