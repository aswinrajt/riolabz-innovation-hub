import { useEffect, useRef, type ReactNode } from "react";
import { useMotionEnabled } from "./motion";

/**
 * Wraps a section — a soft radial spotlight follows the pointer inside it.
 * Pure CSS var updates on rAF; skipped on touch/reduced-motion.
 */
export function Spotlight({
  children,
  className,
  color = "oklch(0.68 0.18 250)",
  size = 500,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useMotionEnabled();

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0;
    const tick = () => {
      raf = 0;
      el.style.setProperty("--sx", `${tx}px`);
      el.style.setProperty("--sy", `${ty}px`);
    };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      el.style.setProperty("--sopacity", "1");
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const leave = () => {
      el.style.setProperty("--sopacity", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return (
    <div ref={ref} className={"relative " + (className ?? "")}>
      {children}
      {enabled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: "var(--sopacity, 0)",
            background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, ${color} 18%, transparent), transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
