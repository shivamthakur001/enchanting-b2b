import { useEffect, useRef, useState } from "react";
import type { Destination } from "../../types";
import { TopDestinationCard } from "./TopDestinationCard";

interface TopDestinationsMobileRailProps {
  destinations: Destination[];
  startIndex: number;
}

export function TopDestinationsMobileRail({
  destinations,
  startIndex,
}: TopDestinationsMobileRailProps) {
  const [activeId, setActiveId] = useState<string | null>(
    destinations[0]?.id ?? null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Reset to first card of new group when pagination or filter updates
  useEffect(() => {
    setActiveId(destinations[0]?.id ?? null);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [destinations, startIndex]);

  // IntersectionObserver to detect the most visible / center card
  useEffect(() => {
    const container = containerRef.current;
    if (!container || destinations.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestId: string | null = null;
        let bestRatio = 0;

        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.id;
          if (!id) continue;
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestId = id;
          }
        }

        if (bestId && bestRatio > 0.5) {
          setActiveId(bestId);
        }
      },
      {
        root: container,
        threshold: [0.3, 0.5, 0.7, 0.9],
      }
    );

    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [destinations]);

  return (
    <div
      ref={containerRef}
      className="td-mobile-rail -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 sm:-mx-6 sm:px-6 scrollbar-none"
    >
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          data-id={destination.id}
          ref={(el) => {
            if (el) itemRefs.current.set(destination.id, el);
            else itemRefs.current.delete(destination.id);
          }}
          className="h-[460px] shrink-0 sm:h-[500px]"
        >
          <TopDestinationCard
            destination={destination}
            position={startIndex + index + 1}
            isHovered={false}
            isDimmed={false}
            isMobileActive={activeId === destination.id}
            variant="mobile"
            onHoverStart={() => setActiveId(destination.id)}
            onHoverEnd={() => {}}
          />
        </div>
      ))}
    </div>
  );
}
