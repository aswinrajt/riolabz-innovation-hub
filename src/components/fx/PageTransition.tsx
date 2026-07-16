import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Fades content on route change. Client-only. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(pathname);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (key === pathname) return;
    setShow(false);
    const t = setTimeout(() => {
      setKey(pathname);
      setShow(true);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 200);
    return () => clearTimeout(t);
  }, [pathname, key]);

  return (
    <div
      key={key}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}
