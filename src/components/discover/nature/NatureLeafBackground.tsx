import { useEffect, useRef } from "react";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

function createRandom(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function createLeafDefinition() {
  let veins = "";

  for (let y = 34; y < 505; y += 13) {
    const left = `M100 ${y} Q40 ${y - 4} -70 ${y - 46}`;
    const right = `M100 ${y} Q160 ${y - 4} 270 ${y - 46}`;

    if (((y - 34) / 13) % 2 === 0) {
      veins += `<path d="${left}" class="nature-leaf-light-vein" transform="translate(0 7)"/>`;
      veins += `<path d="${right}" class="nature-leaf-light-vein" transform="translate(0 7)"/>`;
    }

    veins += `<path d="${left}" class="nature-leaf-dark-vein"/>`;
    veins += `<path d="${right}" class="nature-leaf-dark-vein"/>`;
  }

  return `<g id="nature-leaf-shape">
    <clipPath id="nature-leaf-clip">
      <path d="M100 0C165 80 205 260 100 520C-5 260 35 80 100 0Z"/>
    </clipPath>
    <path d="M100 0C165 80 205 260 100 520C-5 260 35 80 100 0Z" class="nature-leaf-body"/>
    <g clip-path="url(#nature-leaf-clip)" fill="none">${veins}</g>
    <path d="M100 0C165 80 205 260 100 520C-5 260 35 80 100 0Z" class="nature-leaf-outline"/>
    <path d="M100 0Q96 260 100 520" class="nature-leaf-midrib"/>
  </g>`;
}

function createFernDefinition() {
  let leaves = '<path d="M0 0Q8 -70 0 -150" class="nature-fern-stem"/>';

  for (let index = 1; index < 12; index += 1) {
    const y = -index * 12;
    const scale = 1 - index / 14;
    leaves += `<ellipse cx="-9" cy="${y}" rx="${3 * scale + 1}" ry="${11 * scale + 3}" transform="rotate(-50 -9 ${y})" class="nature-fern-leaf"/>`;
    leaves += `<ellipse cx="9" cy="${y}" rx="${3 * scale + 1}" ry="${11 * scale + 3}" transform="rotate(50 9 ${y})" class="nature-fern-leaf"/>`;
  }

  return `<g id="nature-fern-shape">${leaves}</g>`;
}

type LeafPalette = {
  base: "dark" | "mid" | "bright";
  light: "dark" | "mid" | "bright";
  dark: "dark" | "mid" | "bright";
};

const foregroundPalettes: LeafPalette[] = [
  { base: "mid", light: "bright", dark: "dark" },
  { base: "bright", light: "bright", dark: "dark" },
  { base: "mid", light: "bright", dark: "dark" },
];

const backgroundPalettes: LeafPalette[] = [
  { base: "dark", light: "mid", dark: "dark" },
  { base: "dark", light: "mid", dark: "dark" },
];

function renderPlacedShape(
  id: "nature-leaf-shape" | "nature-fern-shape",
  x: number,
  y: number,
  rotation: number,
  scale: number,
  palette: LeafPalette,
  duration: number,
  random: () => number,
) {
  const delay = (-random() * duration).toFixed(2);
  const offset = id === "nature-leaf-shape" ? "translate(-100 -520)" : "";

  return `<g transform="translate(${x} ${y}) rotate(${rotation}) scale(${scale})"
      style="--nature-leaf-base:var(--nature-leaf-${palette.base});--nature-leaf-light:var(--nature-leaf-${palette.light});--nature-leaf-dark:var(--nature-leaf-${palette.dark});--nature-fern-fill:var(--nature-fern-color)">
    <g class="nature-leaf-sway" style="animation-duration:${duration}s;animation-delay:${delay}s">
      <g transform="${offset}"><use href="#${id}"/></g>
    </g>
  </g>`;
}

function createLeafScene(width: number, height: number) {
  const random = createRandom(7);
  const pick = <T,>(items: T[]) => items[Math.floor(random() * items.length)];
  let scene = `<svg xmlns="${SVG_NAMESPACE}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice">
    <defs>${createLeafDefinition()}${createFernDefinition()}</defs>`;

  const backgroundGridX = 200;
  const backgroundGridY = 330;
  for (let row = -1; row * backgroundGridY < height + 300; row += 1) {
    for (let column = -1; column * backgroundGridX < width + 300; column += 1) {
      const x = column * backgroundGridX + (row % 2 ? backgroundGridX / 2 : 0) + random() * 20;
      const y = row * backgroundGridY + 520 * 0.9 + random() * 20;
      scene += renderPlacedShape(
        "nature-leaf-shape",
        x,
        y,
        (random() - 0.5) * 20,
        0.95 + random() * 0.2,
        pick(backgroundPalettes),
        9 + random() * 4,
        random,
      );
    }
  }

  for (let row = 0; row * 300 < height + 200; row += 1) {
    for (let column = 0; column * 320 < width + 200; column += 1) {
      scene += renderPlacedShape(
        "nature-fern-shape",
        column * 320 + 120 + random() * 80,
        row * 300 + 220 + random() * 60,
        (random() - 0.5) * 30,
        0.9 + random() * 0.4,
        { base: "mid", light: "mid", dark: "mid" },
        6 + random() * 3,
        random,
      );
    }
  }

  const foregroundGridX = 270;
  const foregroundGridY = 400;
  for (let row = -1; row * foregroundGridY < height + 400; row += 1) {
    for (let column = -1; column * foregroundGridX < width + 300; column += 1) {
      const x = column * foregroundGridX + (row % 2 ? foregroundGridX / 2 : 0) + random() * 30;
      const y = row * foregroundGridY + 520 + random() * 30;
      scene += renderPlacedShape(
        "nature-leaf-shape",
        x,
        y,
        (random() - 0.5) * 24,
        1 + random() * 0.25,
        pick(foregroundPalettes),
        7 + random() * 4,
        random,
      );
    }
  }

  return `${scene}</svg>`;
}

export function NatureLeafBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let resizeTimer: number | undefined;
    const build = () => {
      host.innerHTML = createLeafScene(window.innerWidth, window.innerHeight);
    };
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 200);
    };

    build();
    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      host.replaceChildren();
    };
  }, []);

  return <div ref={hostRef} className="nature-leaf-background" aria-hidden="true" />;
}
