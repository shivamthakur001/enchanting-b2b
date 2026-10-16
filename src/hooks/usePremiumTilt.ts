import { useCallback, useEffect, useRef } from "react";

export type TiltStrength = "normal" | "featured" | "compact" | "subtle";

export interface PremiumTiltOptions {
  /**
   * Preset strength level:
   * - "normal": ~5deg, scale 1.015 (standard visual cards)
   * - "featured": ~3.8deg, scale 1.01 (large hero / mosaic / showcase cards)
   * - "compact": ~5.5deg, scale 1.015 (small / compact cards)
   * - "subtle": ~3deg, scale 1.008 (micro-tilt)
   * Default: "normal"
   */
  strength?: TiltStrength;
  /**
   * Symmetrical max rotation in degrees.
   * If provided, overrides both maxRotateX and maxRotateY.
   */
  maxRotate?: number;
  /**
   * Maximum rotation around the X-axis in degrees (pitch).
   * Positive pointer movement down tilts downward/forward.
   */
  maxRotateX?: number;
  /**
   * Maximum rotation around the Y-axis in degrees (yaw).
   * Positive pointer movement right tilts right.
   */
  maxRotateY?: number;
  /**
   * Maximum card scale factor when hovered.
   * Default: 1.015 for normal/compact, 1.01 for featured.
   */
  scale?: number;
  /**
   * 3D perspective distance in pixels.
   * Default: 1000px
   */
  perspective?: number;
  /**
   * Smooth return transition duration in milliseconds.
   * Default: 450–480ms
   */
  returnDurationMs?: number;
  /**
   * Easing function used for returning to neutral level.
   * Default: "cubic-bezier(0.22, 1, 0.36, 1)"
   */
  easing?: string;
  /**
   * Disable tilt completely.
   * Default: false
   */
  disabled?: boolean;
}

const PRESETS: Record<
  TiltStrength,
  {
    maxRotateX: number;
    maxRotateY: number;
    scale: number;
    perspective: number;
    returnDurationMs: number;
  }
> = {
  normal: {
    maxRotateX: 5,
    maxRotateY: 5,
    scale: 1.015,
    perspective: 1000,
    returnDurationMs: 450,
  },
  featured: {
    maxRotateX: 3.8,
    maxRotateY: 3.8,
    scale: 1.01,
    perspective: 1000,
    returnDurationMs: 480,
  },
  compact: {
    maxRotateX: 5.5,
    maxRotateY: 5.5,
    scale: 1.015,
    perspective: 950,
    returnDurationMs: 420,
  },
  subtle: {
    maxRotateX: 3,
    maxRotateY: 3,
    scale: 1.008,
    perspective: 1100,
    returnDurationMs: 400,
  },
};

/**
 * usePremiumTilt
 *
 * Universal, high-performance hook for mouse-follow 3D card tilt.
 * - Zero React re-renders on pointer movement (direct style updates via rAF)
 * - Automatically disabled on touch / coarse-pointer / mobile devices
 * - Respects prefers-reduced-motion: reduce
 * - Clean smooth return transition on pointer leave (400–500ms)
 * - Elevates active card (z-index: 10) during tilt so it never clips under neighbors
 * - Keyboard navigation / focus does not produce any 3D tilt
 */
export function usePremiumTilt<T extends HTMLElement = HTMLElement>(
  options: PremiumTiltOptions = {},
) {
  const {
    strength = "normal",
    maxRotate,
    maxRotateX: customRotateX,
    maxRotateY: customRotateY,
    scale: customScale,
    perspective: customPerspective,
    returnDurationMs: customReturnDuration,
    easing = "cubic-bezier(0.22, 1, 0.36, 1)",
    disabled = false,
  } = options;

  const preset = PRESETS[strength] ?? PRESETS.normal;
  const maxRotateX = maxRotate ?? customRotateX ?? preset.maxRotateX;
  const maxRotateY = maxRotate ?? customRotateY ?? preset.maxRotateY;
  const scale = customScale ?? preset.scale;
  const perspective = customPerspective ?? preset.perspective;
  const returnDurationMs = customReturnDuration ?? preset.returnDurationMs;

  const elementRef = useRef<T | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const boundsRef = useRef<DOMRect | null>(null);

  // Check whether device and user preferences allow 3D pointer tilt
  const canTilt = useCallback(() => {
    if (disabled) return false;
    if (typeof window === "undefined") return false;
    // Disable on reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    // Only enable on desktop fine-pointer devices with true hover capability
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return false;
    return true;
  }, [disabled]);

  const clearPendingAnimation = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  const resetCard = useCallback(
    (el: HTMLElement) => {
      clearPendingAnimation();
      isHoveredRef.current = false;
      boundsRef.current = null;

      // Smooth premium return transition
      el.style.transition = `transform ${returnDurationMs}ms ${easing}`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

      // Clean up inline styles once return transition completes so no residual styles linger
      resetTimerRef.current = window.setTimeout(() => {
        if (!isHoveredRef.current) {
          el.style.transition = "";
          el.style.transform = "";
          el.style.willChange = "";
          el.style.zIndex = "";
        }
      }, returnDurationMs);
    },
    [clearPendingAnimation, easing, perspective, returnDurationMs],
  );

  const handlePointerEnter = useCallback(
    (event: React.PointerEvent<T>) => {
      // Ignore touch / stylus pointer types entirely
      if (event.pointerType === "touch" || !canTilt()) return;
      const el = event.currentTarget;
      elementRef.current = el;

      clearPendingAnimation();
      isHoveredRef.current = true;
      boundsRef.current = el.getBoundingClientRect();

      el.style.willChange = "transform";
      el.style.zIndex = "10";
      // Gentle initial tracking transition to avoid instantaneous snapping
      el.style.transition = `transform 100ms ease-out`;
    },
    [canTilt, clearPendingAnimation],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<T>) => {
      if (event.pointerType === "touch" || !isHoveredRef.current || !canTilt()) return;
      const el = event.currentTarget;
      elementRef.current = el;

      const clientX = event.clientX;
      const clientY = event.clientY;

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        if (!isHoveredRef.current) return;
        const rect = boundsRef.current ?? el.getBoundingClientRect();
        boundsRef.current = rect;

        if (rect.width === 0 || rect.height === 0) return;

        // Normalized offsets from center (-1 to +1)
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const nx = Math.max(-1, Math.min(1, (x / rect.width - 0.5) * 2));
        const ny = Math.max(-1, Math.min(1, (y / rect.height - 0.5) * 2));

        // Top pointer (ny < 0) -> upward/backward tilt (positive rotateX)
        // Bottom pointer (ny > 0) -> downward/forward tilt (negative rotateX)
        const rotateX = -ny * maxRotateX;
        // Right pointer (nx > 0) -> tilt right (positive rotateY)
        // Left pointer (nx < 0) -> tilt left (negative rotateY)
        const rotateY = nx * maxRotateY;

        // Responsive tracking while pointer moves
        el.style.transition = "transform 60ms ease-out";
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`;
      });
    },
    [canTilt, maxRotateX, maxRotateY, perspective, scale],
  );

  const handlePointerLeave = useCallback(
    (event: React.PointerEvent<T>) => {
      if (!isHoveredRef.current) return;
      resetCard(event.currentTarget);
    },
    [resetCard],
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<T>) => {
      resetCard(event.currentTarget);
    },
    [resetCard],
  );

  // Callback ref support
  const refCallback = useCallback(
    (node: T | null) => {
      if (elementRef.current && elementRef.current !== node) {
        resetCard(elementRef.current);
      }
      elementRef.current = node;
    },
    [resetCard],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearPendingAnimation();
      if (elementRef.current) {
        elementRef.current.style.transition = "";
        elementRef.current.style.transform = "";
        elementRef.current.style.willChange = "";
        elementRef.current.style.zIndex = "";
      }
    };
  }, [clearPendingAnimation]);

  return {
    ref: refCallback,
    onPointerEnter: handlePointerEnter,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    onBlur: handleBlur,
  };
}
