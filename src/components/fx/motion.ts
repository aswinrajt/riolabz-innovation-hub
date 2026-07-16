import { useEffect, useRef, useState } from "react";

/**
 * Client-only prefers-reduced-motion + touch detection.
 * Returns true when we should ENABLE fancy motion effects.
 */
export function useMotionEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const update = () => setEnabled(!mq.matches && !isTouch);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return enabled;
}

/** Throttled rAF pointer tracker */
export function usePointer(target?: React.RefObject<HTMLElement | null>) {
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  useEffect(() => {
    const el = target?.current ?? window;
    let raf = 0;
    const onMove = (e: Event) => {
      const me = e as MouseEvent;
      if (target?.current) {
        const r = target.current.getBoundingClientRect();
        pos.current.tx = me.clientX - r.left;
        pos.current.ty = me.clientY - r.top;
      } else {
        pos.current.tx = me.clientX;
        pos.current.ty = me.clientY;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      raf = 0;
      pos.current.x = pos.current.tx;
      pos.current.y = pos.current.ty;
    };
    (el as HTMLElement).addEventListener("mousemove", onMove);
    return () => {
      (el as HTMLElement).removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [target]);
  return pos;
}
