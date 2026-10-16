import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { usePremiumTilt, type PremiumTiltOptions } from "../../hooks/usePremiumTilt";

export interface PremiumTiltProps extends HTMLAttributes<HTMLDivElement>, PremiumTiltOptions {
  children: ReactNode;
}

/**
 * PremiumTilt
 *
 * Reusable wrapper component providing mouse-follow 3D card tilt.
 * Powered by usePremiumTilt with zero React re-renders on pointer movement.
 *
 * Supports presets:
 * - strength="normal" (default): ~5deg, scale 1.015 (standard cards)
 * - strength="featured": ~3.8deg, scale 1.01 (large hero / mosaic / showcase cards)
 * - strength="compact": ~5.5deg, scale 1.015 (compact cards)
 * - strength="subtle": ~3deg, scale 1.008 (micro-tilt)
 */
export const PremiumTilt = forwardRef<HTMLDivElement, PremiumTiltProps>(function PremiumTilt(
  {
    children,
    className = "",
    strength = "normal",
    maxRotate,
    maxRotateX,
    maxRotateY,
    scale,
    perspective,
    returnDurationMs,
    easing,
    disabled = false,
    style,
    ...props
  },
  forwardedRef,
) {
  const tilt = usePremiumTilt<HTMLDivElement>({
    strength,
    maxRotate,
    maxRotateX,
    maxRotateY,
    scale,
    perspective,
    returnDurationMs,
    easing,
    disabled,
  });

  return (
    <div
      ref={(node) => {
        tilt.ref(node);
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      }}
      className={`premium-tilt ${className}`.trim()}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        ...style,
      }}
      onPointerEnter={tilt.onPointerEnter}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      onBlur={tilt.onBlur}
      {...props}
    >
      {children}
    </div>
  );
});
