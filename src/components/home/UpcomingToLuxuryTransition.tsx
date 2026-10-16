import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type UpcomingToLuxuryTransitionProps = {
  upcoming: ReactNode;
  luxury: ReactNode;
};

export function UpcomingToLuxuryTransition({
  upcoming,
  luxury,
}: UpcomingToLuxuryTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const transition = transitionRef.current;
    if (!transition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const upcomingSection = transition.querySelector<HTMLElement>(".ug-section");
    const luxurySection = transition.querySelector<HTMLElement>(".lx-root");
    if (!upcomingSection || !luxurySection) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: luxurySection,
          start: "top 90%",
          end: "top 35%",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(upcomingSection, { yPercent: 0 }, { yPercent: -8, ease: "none" }, 0)
        .fromTo(
          luxurySection,
          { y: 30, opacity: 0.92 },
          { y: 0, opacity: 1, ease: "none" },
          0,
        );
    }, transition);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={transitionRef}>
      {upcoming}
      {luxury}
    </div>
  );
}
