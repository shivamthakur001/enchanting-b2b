import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "../../../router/Router";
import { cn } from "../../../utils/cn";
import {
  circuits,
  mapDestinations,
  projectPoint,
  type MapDestination,
} from "../../../data/mapDestinations";
import DestinationPopup from "./DestinationPopup";

// ─── Madhya Pradesh SVG outline (Donor Asset) ──────────────────────────────
// Exact boundary path from map-donor-ref/madhya-pradesh.svg
// Native coordinate system: viewBox "0 0 800 529"
export const MP_PATH =
  "M 249.5 480.1 249.7 488.8 234.9 500.8 235.1 514.2 223 513.5 213.1 524.1 193.5 523.9 192.8 507.8 187 497.2 177.1 497.4 142.6 495.5 122 496.5 97 488.9 91.9 479.4 74.7 473.2 71 475.4 49.1 470.5 42.1 464.9 43.8 448 35.5 437.2 21.7 445.9 9.7 441.1 7.2 420.6 1 412.8 20.4 403 9.8 392.4 20.1 381.3 30.6 382.1 38.4 365.5 25.4 345.1 31.2 338.7 42.1 341.1 62.9 328.7 44.4 319.6 48.2 310.5 73.3 298.5 81.8 279.1 78.3 269.3 84.8 254.1 78.8 238.4 64.8 235.6 74 219 61.6 211.5 67.7 204.3 86.5 194.5 83.4 179.5 97.8 177.7 101.1 163.6 114.1 163 117.8 170.9 104 189.5 128.7 195.7 137.3 193.6 142.7 195.6 156.2 188.3 171 209.4 169.2 217.4 158.8 216.4 154.4 227.2 161.4 235.4 155.6 244.6 163.4 252.5 151.1 260.7 134.7 255.4 129.3 265.2 140.4 276.4 150 280.7 159.5 269.8 172.6 267.1 182.1 251.7 189.9 249.7 189 240 197.7 238.6 207.6 235.3 224.3 239.2 236.9 233.2 239.9 240.3 251.4 247.1 258.6 245.8 262.4 238.4 254.1 225.1 256.8 207.6 267.4 215.7 275.7 206.9 272.6 193.1 251.6 184.1 264.8 178.5 256.8 170.1 258.1 162.8 277.2 161.6 285.3 156.4 298 159.2 305.2 155.7 306.9 146.2 302.9 129.2 277 135.9 264.4 140.7 247.7 137.4 232.8 130.8 225.4 118.5 225.7 94.4 236.8 83.8 250.1 80.6 260.4 67 280.3 55.9 294.1 51.1 300.3 43.8 309.9 42.5 337.3 26.4 344.5 25.3 351.7 15.4 368.7 13.9 370.7 3 396.5 1 410.2 5.9 426.4 2.9 440 11.9 452.3 14.3 450.7 22.7 460.7 34.2 464.2 44.6 451.1 57.5 452.7 67.9 441.2 83.4 430.1 101 434.4 110 420.5 115.5 401.7 114.4 398.8 118.2 398.5 123.2 396.5 126.1 392.9 125.4 391.5 127.1 391.5 128.7 396.1 147.8 394.6 157.6 391.3 158.8 391.1 160.3 392 165.5 377.8 181.1 385.7 197.3 384.9 216.7 394.2 223.5 413.9 225.5 424.6 237 434 241.3 449.1 226 450.8 219.7 450.3 217.5 441 199.2 431.7 193.4 430.7 179.4 418.1 170.4 418.8 160.1 407.2 141.4 427.2 124.9 441.1 119.6 440.7 131.4 448 135.1 440.7 152.2 457.4 146.4 463.6 156.6 481.1 153 477.5 149 483.7 136.5 491.4 143.4 488.6 156.9 496.4 159.3 503.5 150.9 513 155.6 529.6 148.9 545.8 135.4 554.7 136.1 571.5 131.1 571.1 140.5 582 150.6 574.8 155.3 569.3 161.2 566.7 164.3 580.7 159.9 586.2 168.7 588.4 162.8 619.7 149.5 629 169.6 644.8 175.4 657.9 161.7 659.2 151.4 673.8 154.7 686 149.1 694.7 161 715.1 167.6 719.8 180.6 726.5 180.6 747.4 189.9 752 202.5 774.3 198.7 786.2 194.2 797.7 205.1 792.8 242.6 785.5 246.1 799 261.2 785.3 266.1 775.2 276.8 755.5 275.7 744.1 271.1 732.4 274.4 717.8 269.4 707.7 275.2 688.9 268.2 697.3 283.1 689.9 288.4 689.6 302.1 703 298.7 717.8 300.2 723.7 311.1 734.4 312.5 743.2 320.2 736.2 339.4 719.7 341.6 720.5 350.4 712.4 358.9 700.6 378.3 690.5 390.9 672.9 396.2 663.8 392 651.5 395.2 644 400.2 644.7 413.4 638 418 634.2 434.6 625.5 429.9 618.7 449.4 617.2 461.6 607.9 470.8 610 487.9 599.4 501.8 581.2 490.9 567.1 474.8 553.8 475.4 548.8 480.6 532.8 483.8 519 476.1 504.5 481.7 498.1 476.7 496.9 469.6 473 465.6 472.1 471.9 444 477.2 442.5 485.4 413.9 486.7 400.5 483.9 391.8 477.4 380.9 480.7 363.2 492.7 350 496 342.4 493.7 313.8 496.9 310.8 480.6 321.8 483.1 319 466.9 313.1 460.9 295 461.9 288.6 468.2 275.1 466.2 273.1 467.5 271.6 468.3 270 469.2 269.3 468 260.6 476.6 249.5 480.1 Z";

// ── Narmada River (projected into 800 × 529 coordinate system) ───────────────
const N_PTS = [
  [81.75, 22.68], [80.90, 22.75], [80.20, 22.90], [79.85, 22.88],
  [79.55, 23.08], [79.25, 22.92], [78.95, 22.85], [78.65, 22.82],
  [78.30, 22.72], [77.95, 22.72], [77.60, 22.78], [77.25, 22.68],
  [76.90, 22.42], [76.50, 22.30], [76.18, 22.22], [75.80, 22.15],
  [75.45, 22.06], [74.95, 21.92], [74.55, 21.82], [74.15, 21.72],
  [73.80, 21.60],
] as [number, number][];

function buildNarmadaPath(pts: [number, number][]): string {
  return pts
    .map(([lng, lat], i) => {
      const { x, y } = projectPoint(lng, lat);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}
const NARMADA_PATH = buildNarmadaPath(N_PTS);

// ── Theme colours ─────────────────────────────────────────────────────────
const MARKER_COLORS: Record<string, { fill: string; stroke: string }> = {
  heritage:     { fill: "#f5e8d4", stroke: "#a07840" },
  wildlife:     { fill: "#dceadc", stroke: "#4a7252" },
  nature:       { fill: "#d8eadf", stroke: "#3d6650" },
  spirituality: { fill: "#f5ecda", stroke: "#9a6b2f" },
};

const VB_WIDTH = 800;
const VB_HEIGHT = 529;
const HOVER_DELAY = 220;
const CLOSE_DELAY = 260;

// ── Component ─────────────────────────────────────────────────────────────
export default function InteractiveMPMap() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [popupDest, setPopupDest] = useState<MapDestination | null>(null);
  const [popupAnchor, setPopupAnchor] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ w: 800, h: 529 });

  // Dynamically observe container size to inform popup bounding
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Convert SVG user-space coords (0 0 800 529) to container px with preserveAspectRatio "xMidYMid meet"
  const svgToContainer = useCallback((svgX: number, svgY: number) => {
    const svg = svgRef.current;
    const ct = containerRef.current;
    if (!svg || !ct) return { x: svgX, y: svgY };

    const sr = svg.getBoundingClientRect();
    const cr = ct.getBoundingClientRect();

    const scaleX = sr.width / VB_WIDTH;
    const scaleY = sr.height / VB_HEIGHT;
    const scale = Math.min(scaleX, scaleY);

    const offX = (sr.width - VB_WIDTH * scale) / 2;
    const offY = (sr.height - VB_HEIGHT * scale) / 2;

    return {
      x: svgX * scale + offX + (sr.left - cr.left),
      y: svgY * scale + offY + (sr.top - cr.top),
    };
  }, []);

  const openPopup = useCallback(
    (dest: MapDestination) => {
      const { x, y } = svgToContainer(dest.x, dest.y);
      setPopupDest(dest);
      setPopupAnchor({ x, y });
      setActiveId(dest.id);
    },
    [svgToContainer],
  );

  const closePopup = useCallback(() => {
    setPopupDest(null);
    setActiveId(null);
  }, []);

  const handleMarkerMouseEnter = useCallback(
    (dest: MapDestination) => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => openPopup(dest), HOVER_DELAY);
    },
    [openPopup],
  );

  const handleMarkerMouseLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    closeTimerRef.current = setTimeout(() => {
      closePopup();
    }, CLOSE_DELAY);
  }, [closePopup]);

  const handlePopupMouseEnter = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  const handlePopupMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      closePopup();
    }, CLOSE_DELAY);
  }, [closePopup]);

  const handleMarkerClick = useCallback(
    (dest: MapDestination, e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation();
      if (popupDest?.id === dest.id) {
        if (dest.route) {
          navigate(dest.route);
          closePopup();
        }
      } else {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        if (timerRef.current) clearTimeout(timerRef.current);
        openPopup(dest);
      }
    },
    [popupDest, openPopup, closePopup, navigate],
  );

  const handleMarkerKeyDown = useCallback(
    (dest: MapDestination, e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleMarkerClick(dest, e);
      }
    },
    [handleMarkerClick],
  );

  function circuitPoints(stops: string[]) {
    return stops
      .map((id) => mapDestinations.find((d) => d.id === id))
      .filter(Boolean)
      .map((d) => `${d!.x},${d!.y}`)
      .join(" ");
  }

  return (
    <div
      ref={containerRef}
      className="mp-map-container"
      aria-label="Interactive map of Madhya Pradesh"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 800 529"
        preserveAspectRatio="xMidYMid meet"
        className="mp-map-svg"
        role="img"
        aria-label="SVG map of Madhya Pradesh showing destinations"
      >
        <defs>
          {/* Parchment grain */}
          <filter id="pgrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.62"
              numOctaves="4"
              stitchTiles="stitch"
              result="n"
            />
            <feColorMatrix type="saturate" values="0" in="n" result="g" />
            <feBlend in="SourceGraphic" in2="g" mode="multiply" result="b" />
            <feComposite in="b" in2="SourceGraphic" operator="in" />
          </filter>

          {/* MP drop shadow */}
          <filter id="mp-shadow" x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="7"
              floodColor="#2c1e08"
              floodOpacity="0.18"
            />
          </filter>

          {/* Active marker glow */}
          <filter id="mglow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* MP clip for textures & river confinement */}
          <clipPath id="mp-clip">
            <path d={MP_PATH} />
          </clipPath>

          {/* MP gradient fill */}
          <linearGradient id="mp-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf8ee" />
            <stop offset="42%" stopColor="#f6ecda" />
            <stop offset="100%" stopColor="#ebe1cb" />
          </linearGradient>

          {/* Narmada glow gradient */}
          <linearGradient id="narm-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6ab4d8" stopOpacity="0" />
            <stop offset="20%" stopColor="#6ab4d8" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#128bd1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4a90b8" stopOpacity="0" />
          </linearGradient>


        </defs>

        {/* ── 2. Madhya Pradesh hero shape (Donor MP outline) ──────────────── */}
        <path
          d={MP_PATH}
          fill="url(#mp-fill)"
          stroke="#9a7850"
          strokeWidth="1.8"
          strokeLinejoin="round"
          filter="url(#mp-shadow)"
        />

        {/* Subtle terrain grain clipped to MP */}
        <rect
          x="-40"
          y="-30"
          width="880"
          height="589"
          fill="url(#pgrain)"
          clipPath="url(#mp-clip)"
          opacity="0.06"
        />

        {/* Inner inset border for depth */}
        <path
          d={MP_PATH}
          fill="none"
          stroke="#c8aa80"
          strokeWidth="0.6"
          strokeLinejoin="round"
          opacity="0.38"
        />

        {/* Cartographic watermark inside state */}
        <text
          x="400"
          y="268"
          textAnchor="middle"
          fontFamily="Georgia, var(--font-display, serif)"
          fontSize="11"
          fontWeight="400"
          fill="#7a6040"
          letterSpacing="0.32em"
          opacity="0.30"
          style={{
            textTransform: "uppercase",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          MADHYA PRADESH
        </text>

        {/* ── 3. Circuit routes ────────────────────────────────────────────── */}
        {circuits.map((circuit) => {
          const pts = circuitPoints(circuit.stops);
          if (!pts) return null;
          return (
            <polyline
              key={circuit.id}
              points={pts}
              fill="none"
              stroke={circuit.color}
              strokeWidth="1.2"
              strokeDasharray={circuit.dashArray}
              opacity="0.38"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          );
        })}

        {/* ── 4. Narmada River — master flowing visual treatment ───────────── */}
        <g clipPath="url(#mp-clip)">
          {/* Outer soft halo */}
          <path
            d={NARMADA_PATH}
            fill="none"
            stroke="#8ec8e8"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.16"
          />
          {/* Wide lower line — animated */}
          <path
            className="narmada-flow narmada-flow--lower"
            d={NARMADA_PATH}
            fill="none"
            stroke="#3584b6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="200 55"
            opacity="0.48"
          />
          {/* Narrow upper line — animated */}
          <path
            className="narmada-flow"
            d={NARMADA_PATH}
            fill="none"
            stroke="#61a4d3"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeDasharray="200 55"
            opacity="0.78"
          />
          {/* Highlight shimmer */}
          <path
            d={NARMADA_PATH}
            fill="none"
            stroke="rgba(230, 176, 176, 0.55)"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.4"
            strokeDasharray="18 40"
          />
        </g>

        {/* ── 5. Destination markers ───────────────────────────────────────── */}
        {mapDestinations.map((dest) => {
          const theme = dest.themes[0] ?? "heritage";
          const colors = MARKER_COLORS[theme] ?? MARKER_COLORS.heritage;
          const active = activeId === dest.id;

          const labelDx = dest.labelOffset?.dx ?? 0;
          const labelDy = dest.labelOffset?.dy ?? -12;
          const labelAnchor = dest.labelOffset?.anchor ?? "middle";

          return (
            <g
              key={dest.id}
              transform={`translate(${dest.x},${dest.y})`}
              className={cn("mp-marker", active && "mp-marker--active")}
              role="button"
              tabIndex={0}
              aria-label={`${dest.name} — ${dest.region}`}
              onMouseEnter={() => handleMarkerMouseEnter(dest)}
              onMouseLeave={handleMarkerMouseLeave}
              onFocus={() => openPopup(dest)}
              onClick={(e) => handleMarkerClick(dest, e)}
              onKeyDown={(e) => handleMarkerKeyDown(dest, e)}
              style={{ cursor: "pointer" }}
            >
              {/* Pulse ring (active only) */}
              {active && (
                <circle
                  cx="0"
                  cy="0"
                  r="13"
                  fill="none"
                  stroke={colors.stroke}
                  strokeWidth="1.2"
                  opacity="0.38"
                  filter="url(#mglow)"
                />
              )}
              {/* Outer marker ring */}
              <circle
                cx="0"
                cy="0"
                r={active ? 8 : dest.major ? 6.5 : 5.3}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={active ? 1.6 : dest.major ? 1.2 : 1}
                opacity={active ? 1 : 0.92}
                style={{ transition: "r 150ms ease, stroke-width 150ms ease" }}
              />
              {/* Centre dot */}
              <circle
                cx="0"
                cy="0"
                r={active ? 3.2 : dest.major ? 2.5 : 2}
                fill={colors.stroke}
                opacity={active ? 1 : 0.88}
                style={{ transition: "r 150ms ease" }}
              />

              {/* Permanent label for major destinations */}
              {(dest.major || active) && (
                <text
                  x={labelDx}
                  y={labelDy}
                  textAnchor={labelAnchor}
                  fontFamily="var(--font-sans, system-ui, sans-serif)"
                  fontSize="9.5"
                  fontWeight="500"
                  fill="#1e180e"
                  letterSpacing="0.02em"
                  opacity="0.92"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {dest.name}
                </text>
              )}
            </g>
          );
        })}

        {/* ── 6. Cartographic corner marks ─────────────────────────────────── */}
        {([
          [16, 16, 1, 1],
          [784, 16, -1, 1],
          [16, 513, 1, -1],
          [784, 513, -1, -1],
        ] as [number, number, number, number][]).map(([cx, cy, sx, sy], i) => (
          <g key={i} opacity="0.18" transform={`translate(${cx},${cy})`}>
            <line
              x1="0"
              y1="0"
              x2={sx * 18}
              y2="0"
              stroke="#8a7854"
              strokeWidth="0.75"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={sy * 18}
              stroke="#8a7854"
              strokeWidth="0.75"
            />
            <circle cx="0" cy="0" r="1.5" fill="#8a7854" />
          </g>
        ))}
      </svg>

      {/* ── Legend ────────────────────────────────────────────────────────── */}
 
      {/* ── Destination popup ─────────────────────────────────────────────── */}
      {popupDest && (
        <DestinationPopup
          destination={popupDest}
          anchorX={popupAnchor.x}
          anchorY={popupAnchor.y}
          containerWidth={containerSize.w}
          containerHeight={containerSize.h}
          onClose={closePopup}
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
        />
      )}
    </div>
  );
}
