import { cn } from "../../utils/cn";
import InteractiveMPMap from "./map/InteractiveMPMap";
import NeighborStatesBackdrop from "./map/NeighborStatesBackdrop";
import { useReveal } from "../../hooks/useReveal";

export function MapSection() {
  const { ref, visible } = useReveal<HTMLElement>(0.12);

  return (
    <section
      ref={ref}
      id="map-the-heart"
      aria-labelledby="map-section-heading"
      className={cn("mp-map-section", visible && "mp-map-section--visible")}
    >
      <div className="mp-map-rule" aria-hidden="true" />

      <div className="mp-map-inner">
        {/* Section header */}
        <header className={cn("mp-map-header", visible && "mp-map-header--visible")}>
          <p className="mp-map-eyebrow">An Atlas of Experiences</p>
          <h2 id="map-section-heading" className="mp-map-heading">
            Map the Heart of India
          </h2>
          <p className="mp-map-subtitle">
            Trace Madhya Pradesh through heritage, wilderness, faith and living culture.
          </p>
        </header>

        {/* ── Map stage with parchment backdrop ── */}
        <div className={cn("mp-map-stage", visible && "mp-map-stage--visible")}>
          {/* Hidden SVG filter: authentic paper torn-edge displacement from parchment-page.html */}
          <svg
            width="0"
            height="0"
            style={{ position: "absolute", pointerEvents: "none" }}
            aria-hidden="true"
            focusable="false"
          >
            <filter
              id="parchment-torn-edge"
              x="-6%"
              y="-6%"
              width="112%"
              height="112%"
              colorInterpolationFilters="sRGB"
            >
              {/* coarse irregular torn boundary */}
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.035"
                numOctaves={4}
                seed={3}
                result="coarse"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="coarse"
                scale={22}
                xChannelSelector="R"
                yChannelSelector="G"
                result="step1"
              />
              {/* fine fibrous fraying on edges */}
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.25"
                numOctaves={3}
                seed={11}
                result="fine"
              />
              <feDisplacementMap
                in="step1"
                in2="fine"
                scale={7}
                xChannelSelector="G"
                yChannelSelector="R"
              />
            </filter>
          </svg>

          {/* Parchment background layer (behind map, pointer-events none) */}
          <div className="mp-map-parchment" aria-hidden="true">
            <div className="mp-map-parchment__paper" />
          </div>

          {/* Decorative neighboring states sit behind the interactive map. */}
          <NeighborStatesBackdrop />

          {/* Interactive map content */}
          <div className="mp-map-content">
            <InteractiveMPMap />
          </div>
        </div>

        {/* Hover hint (desktop only) */}
        <p className="mp-map-hint" aria-hidden="true">
          Hover a marker to preview — click to explore the destination
        </p>
      </div>

      <div className="mp-map-rule" aria-hidden="true" />
    </section>
  );
}
