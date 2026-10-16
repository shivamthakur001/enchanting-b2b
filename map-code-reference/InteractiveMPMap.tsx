import { useCallback, useRef, useState } from "react";
import { useNavigate } from "../../../router/Router";
import { cn } from "../../../utils/cn";
import indiaStatesGeojson from "../../../data/geography/india-states.json";
import {
  circuits,
  mapDestinations,
  neighborLabels,
  type MapDestination,
} from "../../../data/mapDestinations";
import DestinationPopup from "./DestinationPopup";

// ─── Coordinate system ──────────────────────────────────────────────────────
// Geographic extent displayed: 73.5°E–84.2°E × 17.5°N–27.5°N
// SVG viewBox: "0 0 1000 680"
// svgX = (lon  − 73.5) × 94.3
// svgY = (27.5 − lat)  × 68.0
// ────────────────────────────────────────────────────────────────────────────

const LON_MIN = 73.5;
const LAT_MAX = 27.5;
const SX = 94.3;
const SY = 68.0;

function project(lng: number, lat: number) {
  return {
    x: (lng - LON_MIN) * SX,
    y: (LAT_MAX - lat) * SY,
  };
}

function ringToPath(ring: number[][]): string {
  const pts = ring.map(([lng, lat]) => {
    const p = project(lng, lat);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  });
  const [start, ...rest] = pts;
  return `M ${start} ${rest.map((p) => `L ${p}`).join(" ")} Z`;
}

function geomToPath(geom: { type: string; coordinates: any[] } | undefined): string {
  if (!geom) return "";
  if (geom.type === "Polygon") {
    return geom.coordinates.map((ring: number[][]) => ringToPath(ring)).join(" ");
  }
  if (geom.type === "MultiPolygon") {
    return geom.coordinates
      .map((poly: number[][][]) => poly.map((ring) => ringToPath(ring)).join(" "))
      .join(" ");
  }
  return "";
}

const features =
  (indiaStatesGeojson as { features?: Array<{ properties?: { NAME_1?: string }; geometry?: { type: string; coordinates: any[] } }> }).features ?? [];
const lookup = Object.fromEntries(
  features
    .filter((f) => f.properties?.NAME_1)
    .map((f) => [f.properties!.NAME_1, f]),
);

const MP_PATH = geomToPath(lookup["Madhya Pradesh"]?.geometry);
const RAJ_PATH = geomToPath(lookup["Rajasthan"]?.geometry);
const GUJ_PATH = geomToPath(lookup["Gujarat"]?.geometry);
const MAH_PATH = geomToPath(lookup["Maharashtra"]?.geometry);
const CG_PATH = geomToPath(lookup["Chhattisgarh"]?.geometry);
const UP_PATH = geomToPath(lookup["Uttar Pradesh"]?.geometry);

// ── Narmada River ─────────────────────────────────────────────────────────
const N_PTS = [
  [81.75, 22.68], [80.90, 22.75], [80.20, 22.90], [79.85, 22.88],
  [79.55, 23.08], [79.25, 22.92], [78.95, 22.85], [78.65, 22.82],
  [78.30, 22.72], [77.95, 22.72], [77.60, 22.78], [77.25, 22.68],
  [76.90, 22.42], [76.50, 22.30], [76.18, 22.22], [75.80, 22.15],
  [75.45, 22.06], [74.95, 21.92], [74.55, 21.82], [74.15, 21.72],
  [73.80, 21.60],
] as [number, number][];

function buildPath(pts: [number, number][]): string {
  return pts
    .map(([lng, lat], i) => {
      const { x, y } = project(lng, lat);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}
const NARMADA_PATH = buildPath(N_PTS);

// ── Theme colours ─────────────────────────────────────────────────────────
const MARKER_COLORS: Record<string, { fill: string; stroke: string }> = {
  heritage: { fill: "#f5e8d4", stroke: "#a07840" },
  wildlife: { fill: "#dceadc", stroke: "#4a7252" },
  nature: { fill: "#d8eadf", stroke: "#3d6650" },
  spirituality: { fill: "#f5ecda", stroke: "#9a6b2f" },
};

const HOVER_DELAY = 250;

export default function InteractiveMPMap() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [popupDest, setPopupDest] = useState<MapDestination | null>(null);
  const [popupAnchor, setPopupAnchor] = useState({ x: 0, y: 0 });

  const svgToContainer = useCallback((svgX: number, svgY: number) => {
    const svg = svgRef.current;
    const ct = containerRef.current;
    if (!svg || !ct) return { x: svgX, y: svgY };

    const sr = svg.getBoundingClientRect();
    const cr = ct.getBoundingClientRect();

    const scaleX = sr.width / 1000;
    const scaleY = sr.height / 680;
    const scale = Math.min(scaleX, scaleY);

    const offX = (sr.width - 1000 * scale) / 2;
    const offY = (sr.height - 680 * scale) / 2;

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

  const handleMouseEnter = useCallback(
    (dest: MapDestination) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => openPopup(dest), HOVER_DELAY);
    },
    [openPopup],
  );

  const handleMouseLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const handleMarkerClick = useCallback(
    (dest: MapDestination, e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation();
      if (popupDest?.id === dest.id) {
        navigate(`/destinations/${dest.slug}`);
        closePopup();
      } else {
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

  const cSize = {
    w: containerRef.current?.offsetWidth ?? 1000,
    h: containerRef.current?.offsetHeight ?? 680,
  };

  return (
    <div
      ref={containerRef}
      className="mp-map-container"
      aria-label="Interactive map of Madhya Pradesh"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1000 680"
        preserveAspectRatio="xMidYMid meet"
        className="mp-map-svg"
        role="img"
        aria-label="SVG map of Madhya Pradesh showing destinations"
      >
        <defs>
          {/* Soft parchment grain */}
          <filter id="pgrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" result="n" />
            <feColorMatrix type="saturate" values="0" in="n" result="g" />
            <feBlend in="SourceGraphic" in2="g" mode="multiply" result="b" />
            <feComposite in="b" in2="SourceGraphic" operator="in" />
          </filter>

          {/* MP soft drop shadow */}
          <filter id="mp-shadow" x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#2c1e08" floodOpacity="0.16" />
          </filter>

          {/* Active marker glow */}
          <filter id="mglow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <clipPath id="mp-clip">
            <path d={MP_PATH} />
          </clipPath>

          {/* Rich parchment fill for MP */}
          <linearGradient id="mp-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf8ee" />
            <stop offset="40%" stopColor="#f5ead6" />
            <stop offset="100%" stopColor="#ebe0c8" />
          </linearGradient>

          {/* Soft neighbor fill */}
          <linearGradient id="neighbor-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e4d9c4" />
            <stop offset="100%" stopColor="#ddd2bc" />
          </linearGradient>
        </defs>

        {/* ── 1. Base parchment background ──────────────────────────────── */}
        <rect x="-60" y="-60" width="1120" height="800" fill="#e6dbc8" />

        {/* Subtle paper texture over whole canvas */}
        <rect
          x="-60"
          y="-60"
          width="1120"
          height="800"
          fill="url(#pgrain)"
          opacity="0.07"
        />

        {/* ── 2. Neighbouring states — soft, reference-style ────────────── */}
        {/* Soft warm fills, low contrast, clean outlines */}
        <path d={RAJ_PATH} fill="#ddd4c0" stroke="#c4b89e" strokeWidth="0.7" opacity="0.72" />
        <path d={UP_PATH} fill="#d9d0bc" stroke="#c0b49a" strokeWidth="0.7" opacity="0.72" />
        <path d={CG_PATH} fill="#d6cdb9" stroke="#bdb194" strokeWidth="0.7" opacity="0.72" />
        <path d={MAH_PATH} fill="#dbd2be" stroke="#c2b69c" strokeWidth="0.7" opacity="0.72" />
        <path d={GUJ_PATH} fill="#ded5c1" stroke="#c5b9a0" strokeWidth="0.7" opacity="0.72" />

        {/* Soft outer boundary stroke for neighbors */}
        <path d={RAJ_PATH} fill="none" stroke="#a89878" strokeWidth="0.55" opacity="0.45" />
        <path d={UP_PATH} fill="none" stroke="#a89878" strokeWidth="0.55" opacity="0.45" />
        <path d={CG_PATH} fill="none" stroke="#a89878" strokeWidth="0.55" opacity="0.45" />
        <path d={MAH_PATH} fill="none" stroke="#a89878" strokeWidth="0.55" opacity="0.45" />
        <path d={GUJ_PATH} fill="none" stroke="#a89878" strokeWidth="0.55" opacity="0.45" />

        {/* ── 3. Madhya Pradesh — hero shape ─────────────────────────────── */}
        <path
          d={MP_PATH}
          fill="url(#mp-fill)"
          stroke="#9a7850"
          strokeWidth="2"
          strokeLinejoin="round"
          filter="url(#mp-shadow)"
        />

        {/* Subtle terrain grain clipped to MP */}
        <rect
          x="-50"
          y="-50"
          width="1100"
          height="780"
          fill="url(#pgrain)"
          clipPath="url(#mp-clip)"
          opacity="0.06"
        />

        {/* Soft inner highlight border */}
        <path
          d={MP_PATH}
          fill="none"
          stroke="#c8aa80"
          strokeWidth="0.7"
          strokeLinejoin="round"
          opacity="0.4"
        />

        {/* Faint cartographic label */}
        <text
          x="470"
          y="308"
          textAnchor="middle"
          fontFamily="Georgia, var(--font-display, serif)"
          fontSize="11"
          fontWeight="400"
          fill="#7a6040"
          letterSpacing="0.32em"
          opacity="0.32"
          style={{ textTransform: "uppercase", userSelect: "none", pointerEvents: "none" }}
        >
          MADHYA PRADESH
        </text>

        {/* ── 4. Circuit routes ───────────────────────────────────────────── */}
        {circuits.map((circuit) => {
          const pts = circuitPoints(circuit.stops);
          if (!pts) return null;
          return (
            <polyline
              key={circuit.id}
              points={pts}
              fill="none"
              stroke={circuit.color}
              strokeWidth="1.15"
              strokeDasharray={circuit.dashArray}
              opacity="0.36"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          );
        })}

        {/* ── 5. Narmada River ────────────────────────────────────────────── */}
        <path
          d={NARMADA_PATH}
          fill="none"
          stroke="#8ec8e8"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.16"
        />
        <path
          className="narmada-flow narmada-flow--lower"
          d={NARMADA_PATH}
          fill="none"
          stroke="#5aa0cc"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="200 55"
          opacity="0.45"
        />
        <path
          className="narmada-flow"
          d={NARMADA_PATH}
          fill="none"
          stroke="#2472a8"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeDasharray="200 55"
          opacity="0.78"
        />
        <path
          d={NARMADA_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.4"
          strokeDasharray="18 40"
        />

        {/* ── 6. Neighbouring state labels — soft & elegant ─────────────── */}
        {neighborLabels.map((n) => (
          <text
            key={n.name}
            x={n.x}
            y={n.y}
            textAnchor="middle"
            fontFamily="Georgia, var(--font-display, serif)"
            fontSize="9.5"
            fontStyle="normal"
            fill="#6e6250"
            letterSpacing="0.22em"
            opacity="0.62"
            style={{ textTransform: "uppercase", userSelect: "none", pointerEvents: "none" }}
          >
            {n.name}
          </text>
        ))}

        {/* ── 7. Destination markers ─────────────────────────────────────── */}
        {mapDestinations.map((dest) => {
          const theme = dest.themes[0] ?? "heritage";
          const colors = MARKER_COLORS[theme] ?? MARKER_COLORS.heritage;
          const active = activeId === dest.id;

          return (
            <g
              key={dest.id}
              transform={`translate(${dest.x},${dest.y})`}
              className={cn("mp-marker", active && "mp-marker--active")}
              role="button"
              tabIndex={0}
              aria-label={`${dest.name} — ${dest.region}`}
              onMouseEnter={() => handleMouseEnter(dest)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleMarkerClick(dest, e)}
              onKeyDown={(e) => handleMarkerKeyDown(dest, e)}
              style={{ cursor: "pointer" }}
            >
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
              <circle
                cx="0"
                cy="0"
                r={active ? 8 : 6.5}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={active ? 1.6 : 1.2}
                opacity={active ? 1 : 0.92}
                style={{ transition: "r 150ms ease, stroke-width 150ms ease" }}
              />
              <circle
                cx="0"
                cy="0"
                r={active ? 3.2 : 2.5}
                fill={colors.stroke}
                opacity={active ? 1 : 0.88}
                style={{ transition: "r 150ms ease" }}
              />

              {dest.major && (
                <text
                  x="0"
                  y="-12"
                  textAnchor="middle"
                  fontFamily="var(--font-sans, system-ui, sans-serif)"
                  fontSize="9"
                  fontWeight="500"
                  fill="#1e180e"
                  letterSpacing="0.02em"
                  opacity="0.9"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {dest.name}
                </text>
              )}
            </g>
          );
        })}

        {/* ── 8. Subtle corner marks ─────────────────────────────────────── */}
        {(
          [
            [18, 18, 1, 1],
            [982, 18, -1, 1],
            [18, 662, 1, -1],
            [982, 662, -1, -1],
          ] as [number, number, number, number][]
        ).map(([cx, cy, sx, sy], i) => (
          <g key={i} opacity="0.18" transform={`translate(${cx},${cy})`}>
            <line x1="0" y1="0" x2={sx * 20} y2="0" stroke="#8a7854" strokeWidth="0.75" />
            <line x1="0" y1="0" x2="0" y2={sy * 20} stroke="#8a7854" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="1.6" fill="#8a7854" />
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="mp-map-legend" aria-label="Map legend">
        {circuits.map((c) => (
          <div key={c.id} className="mp-map-legend-item">
            <svg width="22" height="10" aria-hidden="true">
              <line
                x1="0"
                y1="5"
                x2="22"
                y2="5"
                stroke={c.color}
                strokeWidth="1.8"
                strokeDasharray={c.dashArray}
                strokeLinecap="round"
              />
            </svg>
            <span>{c.label}</span>
          </div>
        ))}
        <div className="mp-map-legend-item">
          <svg width="22" height="10" aria-hidden="true">
            <line x1="0" y1="5" x2="22" y2="5" stroke="#2472a8" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span>Narmada</span>
        </div>
      </div>

      {/* Popup */}
      {popupDest && (
        <DestinationPopup
          destination={popupDest}
          anchorX={popupAnchor.x}
          anchorY={popupAnchor.y}
          containerWidth={cSize.w}
          containerHeight={cSize.h}
          onClose={closePopup}
        />
      )}
    </div>
  );
}
