import { useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import type { DestinationPhoto, GalleryState } from "../types/gallery";

interface PhotoPrintProps {
  photo: DestinationPhoto;
  index: number;
  state: GalleryState;
  layoutStyle: CSSProperties;
  isSelected: boolean;
  onSelect: (index: number) => void;
  showTitles?: boolean;
}

export function PhotoPrint({
  photo,
  index,
  state,
  layoutStyle,
  isSelected,
  onSelect,
  showTitles = false,
}: PhotoPrintProps) {
  const [failed, setFailed] = useState(false);
  const interactive = state === "expanded" || (state === "focused" && !isSelected);
  const showChrome = state === "expanded" && showTitles;
  const number = String(index + 1).padStart(2, "0");

  const handleKey = (event: KeyboardEvent<HTMLElement>) => {
    if (!interactive) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(index);
    }
  };

  return (
    <figure
      className={[
        "photo-print",
        interactive ? "is-interactive" : "",
        state === "focused" && isSelected ? "is-focused-active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={layoutStyle}
      onClick={() => {
        if (interactive) onSelect(index);
      }}
      onKeyDown={handleKey}
      tabIndex={interactive ? 0 : -1}
      role={interactive ? "button" : "img"}
      aria-label={photo.alt || `Photograph ${number}`}
    >
      <div className="photo-frame">
        {failed ? (
          <div className="photo-fallback" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8 opacity-40">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
        ) : (
          <img
            src={photo.image}
            alt={photo.alt || `Photograph ${number}`}
            style={{ objectPosition: photo.focal }}
            onError={() => setFailed(true)}
            draggable={false}
          />
        )}
        {showChrome && <span className="photo-index-mark">{number}</span>}
        {showChrome && (
          <div className="photo-meta">
            <span className="photo-num">{number}</span>
            <span className="photo-title">{photo.title}</span>
          </div>
        )}
      </div>
    </figure>
  );
}
