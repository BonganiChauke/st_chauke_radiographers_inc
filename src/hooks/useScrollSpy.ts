import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view (for active nav state)
 * and whether the page has been scrolled (for navbar elevation).
 */
export function useScrollSpy(sectionIds: string[], offset = 130) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const evaluate = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 24);
      setShowTop(scrollPos > 640);

      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= scrollPos) {
          current = id;
        }
      }
      // Snap to last section at bottom of page
      if (window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(evaluate);
      }
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offset]);

  return { activeId, scrolled, showTop };
}
