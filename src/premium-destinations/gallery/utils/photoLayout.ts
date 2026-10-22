import type { CSSProperties } from "react";
import type { GalleryConfig } from "../config/galleryConfig";
import type { GalleryState, PhotoLayout } from "../types/gallery";

interface Origin {
  x: number;
  y: number;
}

interface Viewport {
  w: number;
  h: number;
}

export interface MosaicRectResult {
  x: number;
  y: number;
  width: number;
  height: number;
  totalContentHeight: number;
}

export function mosaicRect(
  index: number,
  vp: Viewport,
  isMobile: boolean,
  galleryConfig: GalleryConfig,
  total: number,
  scrollY: number = 0
): MosaicRectResult {
  const curated = isMobile ? galleryConfig.mosaicMobile : galleryConfig.mosaicDesktop;
  const useCurated = total === 9 && curated.length === 9;

  const padX =
    vp.w *
    (isMobile
      ? galleryConfig.gallery.mobilePadXVw
      : galleryConfig.gallery.padXVw) *
    0.01;
  const padY =
    vp.h *
    (isMobile
      ? galleryConfig.gallery.mobilePadYVh
      : galleryConfig.gallery.padYVh) *
    0.01;
  const gapX = vp.w * galleryConfig.gallery.gridGapVw * 0.01;
  const gapY = vp.h * galleryConfig.gallery.gridGapVh * 0.01;
  const gridW = Math.max(100, vp.w - padX * 2);
  const gridH = Math.max(100, vp.h - padY * 2);

  // Exact 9-photo curated editorial mosaic
  if (useCurated && curated[index]) {
    const layout = curated[index];
    const cols = isMobile ? galleryConfig.gallery.mobileCols : galleryConfig.gallery.gridCols;
    const rows = isMobile ? galleryConfig.gallery.mobileRows : galleryConfig.gallery.gridRows;
    const cellW = gridW / cols;
    const cellH = gridH / rows;
    const left = padX + layout.col * cellW + gapX / 2;
    const top = padY + layout.row * cellH + gapY / 2;
    const width = layout.w * cellW - gapX;
    const height = layout.h * cellH - gapY;
    return {
      x: left + width / 2,
      y: top + height / 2 - scrollY,
      width,
      height,
      totalContentHeight: vp.h,
    };
  }

  // Single photo: centered hero presentation
  if (total <= 1) {
    const width = isMobile ? gridW : Math.min(gridW * 0.72, 880);
    const height = isMobile ? gridH * 0.72 : Math.min(gridH * 0.78, 580);
    return {
      x: vp.w / 2,
      y: vp.h / 2 - scrollY,
      width,
      height,
      totalContentHeight: vp.h,
    };
  }

  // Variable photo counts: 2, 4, 6, 8, 12, 14, 20+
  let cols: number;
  if (isMobile) {
    cols = 2;
  } else {
    if (total <= 3) cols = total;
    else if (total <= 4) cols = 2;
    else if (total <= 8) cols = Math.min(4, Math.ceil(total / 2));
    else if (total <= 16) cols = 4;
    else cols = Math.min(5, Math.ceil(Math.sqrt(total * 1.5)));
  }

  const rows = Math.ceil(total / cols);
  const row = Math.floor(index / cols);
  const col = index % cols;

  const totalGapsX = Math.max(0, (cols - 1) * gapX);
  const cellW = (gridW - totalGapsX) / cols;

  // Single screen vs multi-row scrolling
  const maxRowsFitScreen = isMobile ? 3 : 3;
  let cellH: number;
  let totalContentH: number;

  if (rows <= maxRowsFitScreen) {
    const totalGapsY = Math.max(0, (rows - 1) * gapY);
    cellH = (gridH - totalGapsY) / rows;
    cellH = Math.min(cellH, cellW * 1.15);
    totalContentH = vp.h;
  } else {
    // Large galleries: maintain balanced photographic ratio (4:3 / 16:10)
    const idealH = isMobile ? cellW * 0.85 : cellW * 0.68;
    cellH = Math.max(160, Math.min(320, idealH));
    totalContentH = padY * 2 + rows * cellH + (rows - 1) * gapY + 48;
  }

  // Vertically center grid when total grid height is less than viewport grid area
  let gridTop = padY;
  const actualGridH = rows * cellH + (rows - 1) * gapY;
  if (actualGridH < gridH) {
    gridTop = padY + (gridH - actualGridH) / 2;
  }

  // Center incomplete final row
  const itemsInThisRow = Math.min(cols, total - row * cols);
  const thisRowW = itemsInThisRow * cellW + Math.max(0, (itemsInThisRow - 1) * gapX);
  const rowStartX = padX + (gridW - thisRowW) / 2;

  const left = rowStartX + col * (cellW + gapX);
  const top = gridTop + row * (cellH + gapY) - scrollY;

  return {
    x: left + cellW / 2,
    y: top + cellH / 2,
    width: cellW,
    height: cellH,
    totalContentHeight: totalContentH,
  };
}

export function computePhotoLayout(
  index: number,
  total: number,
  state: GalleryState,
  focusedIndex: number | null,
  origin: Origin,
  vp: Viewport,
  isMobile: boolean,
  reducedMotion: boolean,
  galleryConfig: GalleryConfig,
  scrollY: number = 0
): PhotoLayout {
  const envW = isMobile
    ? galleryConfig.envelope.widthMobile
    : galleryConfig.envelope.width;
  const envH = isMobile
    ? galleryConfig.envelope.heightMobile
    : galleryConfig.envelope.height;
  const printW = envW * 0.62;
  const printH = envH * 0.58;
  const stagger = galleryConfig.timing.photoStaggerMs;

  if (reducedMotion && (state === "expanded" || state === "opening")) {
    const rect = mosaicRect(index, vp, isMobile, galleryConfig, total, scrollY);
    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      rotate: 0,
      scale: 1,
      opacity: 1,
      zIndex: 20 + index,
      blur: 0,
      brightness: 1,
      saturate: 1,
      delay: 0,
    };
  }

  if (state === "closed" || state === "closing") {
    const stack = galleryConfig.closedStack[index % galleryConfig.closedStack.length];
    return {
      x: origin.x + stack.dx,
      y: origin.y + stack.dy + 8,
      width: printW,
      height: printH,
      rotate: stack.r,
      scale: 0.72,
      opacity: 0,
      zIndex: 4 + index,
      blur: 0,
      brightness: 0.9,
      saturate: 0.85,
      delay:
        state === "closing" ? (total - 1 - index) * (stagger * 0.55) : 0,
    };
  }

  if (state === "hoverOpen") {
    const peek = galleryConfig.peek[index % galleryConfig.peek.length];
    return {
      x: origin.x + peek.dx,
      y: origin.y + peek.dy - 6,
      width: printW,
      height: printH,
      rotate: peek.r,
      scale: 0.8,
      opacity: 0,
      zIndex: 5 + index,
      blur: 0,
      brightness: 1,
      saturate: 1,
      delay: index * 28,
    };
  }

  if (state === "opening") {
    const fan = galleryConfig.fan[index % galleryConfig.fan.length];
    const mobileScale = isMobile ? 0.55 : 1;
    return {
      x: origin.x + fan.dx * mobileScale,
      y: origin.y + fan.dy * mobileScale,
      width: isMobile ? 150 : 210,
      height: isMobile ? 200 : 280,
      rotate: fan.r,
      scale: fan.s,
      opacity: 1,
      zIndex: 24 + index,
      blur: 0,
      brightness: 1,
      saturate: 1,
      delay: index * stagger,
    };
  }

  const rect = mosaicRect(index, vp, isMobile, galleryConfig, total, scrollY);

  if (state === "focused" && focusedIndex !== null) {
    if (index === focusedIndex) {
      const hasMetadata = Boolean(
        galleryConfig.visibility?.showPhotoTitles ||
        galleryConfig.visibility?.showPhotoCaptions ||
        galleryConfig.visibility?.showPhotoCategories
      );
      const maxW = Math.min(
        vp.w * (galleryConfig.gallery.selectedMaxWidthVw * 0.01),
        galleryConfig.gallery.selectedMaxWidthPx
      );
      const maxH = vp.h * (galleryConfig.gallery.selectedMaxHeightVh * 0.01);
      return {
        x: vp.w / 2,
        y: hasMetadata ? vp.h * 0.46 : vp.h * 0.49,
        width: maxW,
        height: maxH,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 48,
        blur: 0,
        brightness: 1,
        saturate: 1.05,
        delay: 0,
      };
    }

    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      rotate: 0,
      scale: 0.985,
      opacity: 1 - galleryConfig.gallery.overlayDarkness * 0.78,
      zIndex: 41,
      blur: galleryConfig.gallery.blurPx,
      brightness: 1 - galleryConfig.gallery.overlayDarkness,
      saturate: 0.42,
      delay: 0,
    };
  }

  return {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 22 + index,
    blur: 0,
    brightness: 1,
    saturate: 1,
    delay: state === "expanded" ? index * (stagger * 0.35) : 0,
  };
}

export function layoutToStyle(
  layout: PhotoLayout,
  duration: number,
  easing: string
): CSSProperties {
  return {
    left: layout.x,
    top: layout.y,
    width: layout.width,
    height: layout.height,
    opacity: layout.opacity,
    zIndex: layout.zIndex,
    transform: `translate(-50%, -50%) rotate(${layout.rotate}deg) scale(${layout.scale})`,
    filter: `blur(${layout.blur}px) brightness(${layout.brightness}) saturate(${layout.saturate})`,
    transition: `left ${duration}ms ${easing}, top ${duration}ms ${easing}, width ${duration}ms ${easing}, height ${duration}ms ${easing}, transform ${duration}ms ${easing}, opacity ${Math.min(duration, 420)}ms ${easing}, filter ${Math.min(duration, 700)}ms ${easing}`,
    transitionDelay: `${layout.delay}ms`,
  };
}
