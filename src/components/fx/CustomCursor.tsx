import { useEffect, useRef, useState } from "react";
import { useMotionEnabled } from "./motion";

export function CustomCursor() {
  const enabled = useMotionEnabled();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!visible) setVisible(true);
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      dx += (tx - dx) * 0.9;
      dy += (ty - dy) * 0.9;
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor='hover']"));
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [enabled, hovering, visible]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] size-8 rounded-full border transition-[transform,background-color,border-color] duration-200 ease-out mix-blend-difference"
        style={{
          borderColor: hovering ? "oklch(0.78 0.16 240)" : "rgba(255,255,255,0.6)",
          background: hovering ? "color-mix(in oklab, oklch(0.68 0.18 250) 20%, transparent)" : "transparent",
          opacity: visible ? 1 : 0,
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] size-1.5 rounded-full bg-white mix-blend-difference"
        style={{ opacity: visible ? 1 : 0, willChange: "transform" }}
      />
    </>
  );
}
