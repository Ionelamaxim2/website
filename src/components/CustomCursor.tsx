import { useEffect, useRef } from "react";

const isInteractive = (el: EventTarget | null): boolean => {
  if (!(el instanceof HTMLElement)) return false;
  return !!el.closest(
    "a, button, [role=button], input, textarea, select, summary"
  );
};

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isDesktop =
      window.matchMedia("(pointer:fine)").matches && window.innerWidth >= 768;
    if (!isDesktop) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;

    const handleMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      if (isInteractive(e.target)) {
        ring.classList.add("scale-125", "bg-primary/15", "border-primary/60");
      } else {
        ring.classList.remove(
          "scale-125",
          "bg-primary/15",
          "border-primary/60"
        );
      }
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = previousCursor;
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[60]">
      <div
        ref={ringRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/60 backdrop-blur-sm transition-transform duration-150 ease-out"
        style={{ boxShadow: "0 0 40px hsl(var(--primary)/0.25)" }}
      />
      <div
        ref={dotRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"
      />
    </div>
  );
};

export default CustomCursor;

// Note: for privacy/analytics compliance, add cookie consent before loading any
// third-party trackers. This component doesn't set cookies.
