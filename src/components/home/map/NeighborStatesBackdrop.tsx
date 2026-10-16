import { neighborStates } from "../../../data/neighborStates";

/**
 * NeighborStatesBackdrop
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders full neighboring-state outlines + labels behind Madhya Pradesh.
 *
 * Each state gets its own CSS class for manual tuning:
 *   .neighbor-state--rajasthan
 *   .neighbor-state--gujarat
 *   .neighbor-state--uttar-pradesh
 *   .neighbor-state--chhattisgarh
 *   .neighbor-state--maharashtra
 *
 * Labels get:
 *   .neighbor-label--rajasthan   (etc.)
 *
 * Pointer-events are disabled on everything.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function NeighborStatesBackdrop() {
  return (
    <svg
      viewBox="0 0 800 529"
      preserveAspectRatio="xMidYMid meet"
      className="mp-neighbor-svg"
      aria-hidden="true"
    >
      <g className="mp-neighbor-backdrop" pointerEvents="none">
        {neighborStates.map((state) => {
          const slug = state.name
            .toLowerCase()
            .replace(/\s+/g, "-"); // e.g. "uttar-pradesh"

          return [
            <g
              key={`${state.name}-outline`}
              className={`mp-neighbor-state neighbor-state--${slug}`}
            >
              <path
                d={state.path}
                className={`mp-neighbor-outline neighbor-outline--${slug}`}
              />
            </g>,
            <text
              key={`${state.name}-label`}
              x={state.labelX}
              y={state.labelY}
              textAnchor="middle"
              className={`mp-neighbor-label neighbor-label--${slug}`}
            >
              {state.name}
            </text>,
          ];
        })}
      </g>
    </svg>
  );
}
