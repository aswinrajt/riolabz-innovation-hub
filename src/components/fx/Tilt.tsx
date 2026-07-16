import { useEffect, useRef, type ReactNode } from "react";
import { useMotionEnabled } from "./motion";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number; // degrees
  glare?: boolean;
};

/** 3D tilt-on-hover wrapper with an optional gradient glare. */
export function Tilt({ children, className, max = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useMotionEnabled();

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let rx = 0, ry = 0, tx = 0, ty = 0, gx = 50, gy = 50;

    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      if (glare) el.style.setProperty("--glare-x", `${gx}%`);
      if (glare) el.style.setProperty("--glare-y", `${gy}%`);
      if (Math.abs(tx - rx) > 0.01 || Math.abs(ty - ry) > 0.01) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      ty = (px - 0.5) * max * 2;
      tx = -(py - 0.5) * max * 2;
      gx = px * 100;
      gy = py * 100;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const reset = () => {
      tx = 0; ty = 0; gx = 50; gy = 50;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [enabled, max, glare]);

  return (
    <div
      ref={ref}
      className={"relative transition-transform duration-300 ease-out " + (className ?? "")}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
      {glare && enabled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(400px circle at var(--glare-x, 50%) var(--glare-y, 50%), color-mix(in oklab, oklch(0.78 0.16 240) 25%, transparent), transparent 45%)",
          }}
        />
      )}
    </div>
  );
}
