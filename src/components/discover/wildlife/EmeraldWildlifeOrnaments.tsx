type LeafProps = {
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
};

export function EngravedLeaf({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  opacity = 1,
}: LeafProps) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeWidth="1.15"
        d="M0,-52 C16,-36 22,-12 20,14 C18,36 9,50 0,56 C-9,50 -18,36 -20,14 C-22,-12 -16,-36 0,-52 Z"
      />
      <path strokeWidth="0.7" d="M0,-46 L0,50" />
      <path strokeWidth="0.45" d="M0,-28 Q14,-16 16,-2" />
      <path strokeWidth="0.45" d="M0,-28 Q-14,-16 -16,-2" />
      <path strokeWidth="0.45" d="M0,-8 Q12,4 13,18" />
      <path strokeWidth="0.45" d="M0,-8 Q-12,4 -13,18" />
      <path strokeWidth="0.45" d="M0,12 Q10,22 10,34" />
      <path strokeWidth="0.45" d="M0,12 Q-10,22 -10,34" />
    </g>
  );
}

function BroadLeaf({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  opacity = 1,
}: LeafProps) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeWidth="1.1"
        d="M0,58 C-10,52 -26,38 -32,18 C-40,8 -38,-18 -22,-34 C-12,-48 -4,-58 0,-62 C4,-58 12,-48 22,-34 C38,-18 40,8 32,18 C26,38 10,52 0,58 Z"
      />
      <path strokeWidth="0.65" d="M0,-54 L0,52" />
      <path strokeWidth="0.4" d="M0,-30 Q18,-18 22,0" />
      <path strokeWidth="0.4" d="M0,-30 Q-18,-18 -22,0" />
      <path strokeWidth="0.4" d="M0,-6 Q16,8 18,22" />
      <path strokeWidth="0.4" d="M0,-6 Q-16,8 -18,22" />
    </g>
  );
}

function MonsteraLeaf({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  opacity = 1,
}: LeafProps) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeWidth="1.15"
        d="M0,72 C-8,68 -20,54 -26,38 C-38,42 -50,30 -46,16 C-60,12 -64,-4 -54,-16 C-66,-24 -62,-44 -46,-50 C-50,-66 -34,-80 -18,-72 C-12,-86 0,-92 0,-92 C0,-92 12,-86 18,-72 C34,-80 50,-66 46,-50 C62,-44 66,-24 54,-16 C64,-4 60,12 46,16 C50,30 38,42 26,38 C20,54 8,68 0,72 Z"
      />
      <path strokeWidth="0.7" d="M0,-84 L0,66" />
      <ellipse cx="-16" cy="-28" rx="7" ry="11" strokeWidth="0.7" />
      <ellipse cx="17" cy="-22" rx="7" ry="12" strokeWidth="0.7" />
      <ellipse cx="-14" cy="8" rx="6" ry="10" strokeWidth="0.7" />
      <ellipse cx="15" cy="14" rx="6" ry="10" strokeWidth="0.7" />
      <path strokeWidth="0.45" d="M0,-50 Q-20,-36 -22,-18" />
      <path strokeWidth="0.45" d="M0,-40 Q22,-24 24,-4" />
    </g>
  );
}

function FernFrond({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  length = 180,
  opacity = 1,
}: LeafProps & { length?: number }) {
  const pairs = 15;
  const leaflets = Array.from({ length: pairs }, (_, i) => {
    const t = (i + 0.4) / pairs;
    const py = t * length;
    const w = Math.sin(t * Math.PI) * 26 * (1 - t * 0.22);
    const ang = 58 - t * 16;
    return (
      <g key={i}>
        <ellipse
          cx={w * 0.42}
          cy={py}
          rx={w}
          ry={Math.max(2.2, w * 0.28)}
          transform={`rotate(${ang} 0 ${py})`}
        />
        <ellipse
          cx={-w * 0.42}
          cy={py}
          rx={w}
          ry={Math.max(2.2, w * 0.28)}
          transform={`rotate(${-ang} 0 ${py})`}
        />
      </g>
    );
  });

  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeWidth="1.05"
        d={`M0,0 C 3,${length * 0.28} 1.5,${length * 0.62} 0,${length}`}
      />
      <g strokeWidth="0.7">{leaflets}</g>
    </g>
  );
}

function PalmFrond({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  length = 210,
  opacity = 1,
}: LeafProps & { length?: number }) {
  const pairs = 18;
  const leaflets = Array.from({ length: pairs }, (_, i) => {
    const t = (i + 0.15) / pairs;
    const py = 8 + t * length;
    const w = 38 * (1 - t * 0.55) + 10;
    return (
      <g key={i}>
        <path
          d={`M0,${py} Q${w * 0.55},${py - 6} ${w},${py + 4}`}
          strokeWidth="0.7"
        />
        <path
          d={`M0,${py} Q${-w * 0.55},${py - 6} ${-w},${py + 4}`}
          strokeWidth="0.7"
        />
      </g>
    );
  });

  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <path
        strokeWidth="1.05"
        d={`M0,0 C 6,${length * 0.3} -2,${length * 0.65} 0,${length + 8}`}
      />
      {leaflets}
    </g>
  );
}

function Fiddlehead({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  opacity = 1,
}: LeafProps) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <path
        strokeWidth="1.15"
        d="M0,48 C0,20 18,8 32,16 C44,24 42,44 28,50 C16,55 8,44 12,34 C16,26 28,28 30,36"
      />
      <circle cx="30" cy="38" r="2.2" strokeWidth="0.8" />
    </g>
  );
}

function VineRunner({
  d,
  leaves,
  opacity = 1,
}: {
  d: string;
  leaves: Array<{ x: number; y: number; r: number; s: number }>;
  opacity?: number;
}) {
  return (
    <g opacity={opacity} fill="none" stroke="currentColor" strokeLinecap="round">
      <path d={d} strokeWidth="1.05" />
      {leaves.map((leaf, i) => (
        <EngravedLeaf
          key={i}
          x={leaf.x}
          y={leaf.y}
          rotate={leaf.r}
          scale={leaf.s * 0.42}
        />
      ))}
    </g>
  );
}

function Berry({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r="1.6" fill="currentColor" stroke="none" opacity="0.7" />;
}

export function CornerEngraving() {
  return (
    <svg
      viewBox="0 0 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <VineRunner
        d="M8,28 C90,18 170,38 250,26 C310,18 370,30 430,22"
        leaves={[
          { x: 70, y: 18, r: 110, s: 0.9 },
          { x: 130, y: 32, r: 70, s: 0.75 },
          { x: 190, y: 22, r: 115, s: 0.85 },
          { x: 250, y: 30, r: 65, s: 0.7 },
          { x: 310, y: 20, r: 118, s: 0.8 },
          { x: 370, y: 28, r: 72, s: 0.65 },
        ]}
      />
      <VineRunner
        d="M28,8 C18,90 38,170 26,250 C18,310 30,370 22,430"
        leaves={[
          { x: 18, y: 70, r: 20, s: 0.9 },
          { x: 32, y: 130, r: -20, s: 0.75 },
          { x: 22, y: 190, r: 25, s: 0.85 },
          { x: 30, y: 250, r: -18, s: 0.7 },
          { x: 20, y: 310, r: 22, s: 0.8 },
          { x: 28, y: 370, r: -16, s: 0.65 },
        ]}
      />

      <PalmFrond x={36} y={8} rotate={78} scale={0.72} length={220} opacity={0.85} />
      <FernFrond x={18} y={42} rotate={8} scale={1} length={250} opacity={0.95} />
      <FernFrond x={48} y={28} rotate={38} scale={0.92} length={210} opacity={0.9} />
      <FernFrond x={72} y={18} rotate={58} scale={0.78} length={170} opacity={0.8} />
      <FernFrond x={24} y={90} rotate={-6} scale={0.7} length={150} opacity={0.75} />

      <Fiddlehead x={86} y={78} rotate={-18} scale={1.15} />
      <Fiddlehead x={58} y={118} rotate={12} scale={0.85} opacity={0.85} />

      <MonsteraLeaf x={128} y={64} rotate={32} scale={0.72} opacity={0.9} />
      <BroadLeaf x={96} y={148} rotate={-12} scale={0.8} opacity={0.85} />
      <EngravedLeaf x={168} y={42} rotate={78} scale={0.7} opacity={0.8} />
      <EngravedLeaf x={54} y={176} rotate={8} scale={0.68} opacity={0.8} />
      <EngravedLeaf x={150} y={110} rotate={48} scale={0.55} opacity={0.75} />
      <EngravedLeaf x={110} y={188} rotate={-28} scale={0.5} opacity={0.7} />
      <BroadLeaf x={200} y={70} rotate={96} scale={0.48} opacity={0.65} />

      <Berry x={44} y={44} />
      <Berry x={62} y={58} />
      <Berry x={38} y={72} />
      <Berry x={84} y={46} />
      <Berry x={102} y={92} />
      <Berry x={70} y={104} />
    </svg>
  );
}

export function BotanicalPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="botanical-damask"
          width="240"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="1"
          >
            <g transform="translate(120 118)">
              <path
                strokeWidth="0.8"
                d="M0,-34 C10,-24 14,-8 12,8 C10,22 5,30 0,34 C-5,30 -10,22 -12,8 C-14,-8 -10,-24 0,-34 Z"
              />
              <path strokeWidth="0.5" d="M0,-30 L0,30" />
              <path strokeWidth="0.35" d="M0,-16 Q8,-8 9,2" />
              <path strokeWidth="0.35" d="M0,-16 Q-8,-8 -9,2" />
            </g>
            <g transform="translate(120 118) rotate(180)">
              <path
                strokeWidth="0.8"
                d="M0,-34 C10,-24 14,-8 12,8 C10,22 5,30 0,34 C-5,30 -10,22 -12,8 C-14,-8 -10,-24 0,-34 Z"
              />
              <path strokeWidth="0.5" d="M0,-30 L0,30" />
            </g>
            <g transform="translate(48 48) rotate(35) scale(0.45)">
              <path
                strokeWidth="1.2"
                d="M0,-34 C10,-24 14,-8 12,8 C10,22 5,30 0,34 C-5,30 -10,22 -12,8 C-14,-8 -10,-24 0,-34 Z"
              />
              <path strokeWidth="0.7" d="M0,-28 L0,28" />
            </g>
            <g transform="translate(192 48) rotate(-35) scale(0.45)">
              <path
                strokeWidth="1.2"
                d="M0,-34 C10,-24 14,-8 12,8 C10,22 5,30 0,34 C-5,30 -10,22 -12,8 C-14,-8 -10,-24 0,-34 Z"
              />
              <path strokeWidth="0.7" d="M0,-28 L0,28" />
            </g>
            <g transform="translate(48 192) rotate(145) scale(0.45)">
              <path
                strokeWidth="1.2"
                d="M0,-34 C10,-24 14,-8 12,8 C10,22 5,30 0,34 C-5,30 -10,22 -12,8 C-14,-8 -10,-24 0,-34 Z"
              />
              <path strokeWidth="0.7" d="M0,-28 L0,28" />
            </g>
            <g transform="translate(192 192) rotate(-145) scale(0.45)">
              <path
                strokeWidth="1.2"
                d="M0,-34 C10,-24 14,-8 12,8 C10,22 5,30 0,34 C-5,30 -10,22 -12,8 C-14,-8 -10,-24 0,-34 Z"
              />
              <path strokeWidth="0.7" d="M0,-28 L0,28" />
            </g>
            <circle cx="120" cy="118" r="2" fill="currentColor" stroke="none" />
            <path
              strokeWidth="0.45"
              d="M120,84 C128,96 128,108 120,118 C112,108 112,96 120,84"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#botanical-damask)" />
    </svg>
  );
}

function SilhouetteLeaf({
  x,
  y,
  rotate,
  scale,
  variant = "tropical",
}: {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  variant?: "tropical" | "palm" | "fern" | "heart";
}) {
  const paths: Record<string, string> = {
    tropical:
      "M0,90 C-18,78 -48,48 -56,10 C-72,-8 -64,-50 -32,-70 C-16,-92 0,-100 0,-100 C0,-100 16,-92 32,-70 C64,-50 72,-8 56,10 C48,48 18,78 0,90 Z",
    palm: "M0,0 C8,40 6,90 0,140 C40,90 70,40 96,8 C60,18 28,14 0,0 C-28,14 -60,18 -96,8 C-70,40 -40,90 0,140 Z",
    fern: "M0,0 C4,50 2,110 0,160 C28,120 40,70 36,20 C18,40 8,20 0,0 C-8,20 -18,40 -36,20 C-40,70 -28,120 0,160 Z",
    heart:
      "M0,80 C-30,50 -52,18 -40,-16 C-30,-40 -10,-46 0,-28 C10,-46 30,-40 40,-16 C52,18 30,50 0,80 Z",
  };

  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} fill="currentColor">
      <path d={paths[variant]} />
    </g>
  );
}

export function JungleCornerMotif() {
  return (
    <svg
      viewBox="0 0 520 640"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <SilhouetteLeaf x={40} y={30} rotate={18} scale={1.15} variant="tropical" />
      <SilhouetteLeaf x={120} y={10} rotate={55} scale={0.85} variant="heart" />
      <SilhouetteLeaf x={20} y={140} rotate={-12} scale={1.05} variant="tropical" />
      <SilhouetteLeaf x={90} y={90} rotate={32} scale={0.7} variant="fern" />
      <SilhouetteLeaf x={10} y={260} rotate={8} scale={0.9} variant="heart" />
      <SilhouetteLeaf x={150} y={40} rotate={78} scale={0.6} variant="palm" />
      <SilhouetteLeaf x={70} y={200} rotate={-24} scale={0.75} variant="tropical" />
      <SilhouetteLeaf x={30} y={360} rotate={14} scale={0.65} variant="fern" />
      <SilhouetteLeaf x={180} y={110} rotate={102} scale={0.55} variant="heart" />
    </svg>
  );
}

export function HangingVineMotif() {
  return (
    <svg
      viewBox="0 0 180 560"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeWidth="1.1"
        d="M90,0 C110,80 60,140 88,210 C116,280 70,340 96,420 C112,470 86,510 90,560"
      />
      <path
        strokeWidth="0.8"
        opacity="0.75"
        d="M90,40 C70,90 48,120 30,150"
      />
      <path
        strokeWidth="0.8"
        opacity="0.75"
        d="M92,180 C120,220 140,250 158,290"
      />
      <EngravedLeaf x={88} y={70} rotate={18} scale={0.7} />
      <EngravedLeaf x={70} y={130} rotate={-28} scale={0.62} />
      <EngravedLeaf x={102} y={190} rotate={22} scale={0.68} />
      <EngravedLeaf x={78} y={250} rotate={-16} scale={0.58} />
      <EngravedLeaf x={108} y={310} rotate={30} scale={0.64} />
      <EngravedLeaf x={82} y={370} rotate={-22} scale={0.55} />
      <EngravedLeaf x={100} y={430} rotate={16} scale={0.5} />
      <EngravedLeaf x={86} y={490} rotate={-12} scale={0.46} />
      <BroadLeaf x={36} y={148} rotate={-48} scale={0.55} opacity={0.85} />
      <BroadLeaf x={150} y={278} rotate={48} scale={0.5} opacity={0.8} />
    </svg>
  );
}

export function SectionVine() {
  return (
    <svg
      viewBox="0 0 800 60"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <path
        strokeWidth="1"
        d="M0,30 C60,18 110,42 160,30 C210,18 250,36 300,30"
      />
      <path
        strokeWidth="1"
        d="M500,30 C550,18 590,42 640,30 C690,18 740,36 800,30"
      />
      <path strokeWidth="0.6" d="M300,30 C330,26 350,26 380,30" opacity="0.5" />
      <path strokeWidth="0.6" d="M420,30 C450,26 470,26 500,30" opacity="0.5" />
      <EngravedLeaf x={80} y={24} rotate={70} scale={0.38} />
      <EngravedLeaf x={160} y={36} rotate={110} scale={0.34} />
      <EngravedLeaf x={240} y={22} rotate={64} scale={0.36} />
      <EngravedLeaf x={560} y={24} rotate={110} scale={0.38} />
      <EngravedLeaf x={640} y={36} rotate={70} scale={0.34} />
      <EngravedLeaf x={720} y={22} rotate={116} scale={0.36} />
    </svg>
  );
}

export function EdgeFernBank() {
  return (
    <svg
      viewBox="0 0 220 900"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <FernFrond x={40} y={20} rotate={12} scale={1.1} length={240} opacity={0.9} />
      <FernFrond x={70} y={80} rotate={28} scale={0.9} length={200} opacity={0.75} />
      <FernFrond x={30} y={260} rotate={8} scale={1} length={220} opacity={0.85} />
      <FernFrond x={80} y={320} rotate={34} scale={0.8} length={180} opacity={0.7} />
      <FernFrond x={36} y={500} rotate={14} scale={1.05} length={230} opacity={0.88} />
      <FernFrond x={74} y={560} rotate={30} scale={0.85} length={190} opacity={0.72} />
      <PalmFrond x={50} y={140} rotate={18} scale={0.7} length={180} opacity={0.55} />
      <PalmFrond x={46} y={620} rotate={16} scale={0.65} length={170} opacity={0.5} />
    </svg>
  );
}
