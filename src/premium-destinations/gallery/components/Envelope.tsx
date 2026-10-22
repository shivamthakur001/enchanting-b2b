import { forwardRef } from "react";
import type { GalleryState } from "../types/gallery";

interface EnvelopeProps {
  state: GalleryState;
  onOpen: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  canHover: boolean;
  peekImages: { src: string; alt: string }[];
  monogram: string;
  collectionName: string;
}

function Monogram() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="39"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle
        cx="50"
        cy="50"
        r="34.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.7"
      />
      <path
        d="M28 66 L50 30 L72 66"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M38 66 L50 46 L62 66"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinejoin="round"
      />
      <path
        d="M33 58 H67"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.7"
      />
    </svg>
  );
}

export const Envelope = forwardRef<HTMLDivElement, EnvelopeProps>(
  function Envelope(
    { state, onOpen, onHoverStart, onHoverEnd, canHover, peekImages, monogram, collectionName },
    ref
  ) {
    const sealBreaking =
      state === "opening" || state === "expanded" || state === "focused";
    const interactive = state === "closed" || state === "hoverOpen";

    return (
      <div
        className="envelope-cluster"
        onMouseEnter={() => {
          if (canHover && interactive) onHoverStart();
        }}
        onMouseLeave={() => {
          if (canHover) onHoverEnd();
        }}
        onClick={() => {
          if (interactive) onOpen();
        }}
      >
        <div
          ref={ref}
          role="button"
          tabIndex={interactive ? 0 : -1}
          className="envelope-scene"
          aria-label={`Open ${collectionName}`}
          aria-expanded={
            state === "expanded" || state === "focused" || state === "opening"
          }
          onFocus={() => {
            if (canHover && interactive) onHoverStart();
          }}
          onBlur={() => {
            if (canHover) onHoverEnd();
          }}
          onKeyDown={(event) => {
            if (!interactive) return;
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onOpen();
            }
          }}
        >
          <div className="envelope-lift">
            <div className="envelope-3d">
              <div className="env-back paper-texture" />
              <div className="env-lining" />
              <div className="env-glow" />

              <div className="env-peeks" aria-hidden="true">
                {peekImages.slice(0, 5).map((img, i) => (
                  <div key={img.src} className={`peek-print peek-${i}`}>
                    <img src={img.src} alt="" />
                  </div>
                ))}
              </div>

              <div className="env-pocket paper-texture" />

              <div className="env-flap">
                <div className="flap-face flap-front paper-texture">
                  <div className="monogram">
                    <Monogram />
                  </div>
                </div>
                <div className="flap-face flap-back" />
              </div>

              <div className="flap-fold-light" />
              <div className="env-body" />

              <div
                className={`wax-seal${sealBreaking ? " is-breaking" : ""}`}
                aria-hidden="true"
              >
                <div className="seal-blob" />
                <div className="seal-letter">{monogram.slice(0, 1).toUpperCase()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pedestal" aria-hidden="true" />
        <p className="invite-label">
          {canHover
            ? "Move Closer • Open the Collection"
            : "Tap to Open the Collection"}
        </p>
      </div>
    );
  }
);
