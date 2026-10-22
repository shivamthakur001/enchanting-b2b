import { useEffect, useState } from "react";

export function useMediaFlags() {
  const [isMobile, setIsMobile] = useState(false);
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const widthMq = window.matchMedia("(max-width: 768px)");
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      setIsMobile(widthMq.matches);
      setCanHover(hoverMq.matches);
    };

    update();
    widthMq.addEventListener("change", update);
    hoverMq.addEventListener("change", update);
    return () => {
      widthMq.removeEventListener("change", update);
      hoverMq.removeEventListener("change", update);
    };
  }, []);

  return { isMobile, canHover };
}
