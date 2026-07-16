import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; desc?: string }[];
};

const items: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Company", to: "/about", desc: "Our story, mission and values" },
      { label: "Leadership", to: "/about", desc: "The team behind Riolabz" },
      { label: "Global Presence", to: "/about", desc: "India · UK · USA" },
    ],
  },
  {
    label: "Our Services",
    to: "/services",
    children: [
      { label: "Web Development", to: "/services" },
      { label: "Mobile Applications", to: "/services" },
      { label: "UI / UX Design", to: "/services" },
      { label: "Cloud & DevOps", to: "/services" },
      { label: "SEO & Growth", to: "/services" },
    ],
  },
  {
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "For Startups", to: "/solutions" },
      { label: "For Enterprises", to: "/solutions" },
      { label: "Dedicated Teams", to: "/solutions" },
    ],
  },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blogs", to: "/blogs" },
  { label: "Careers", to: "/careers" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5 text-slate-900">
      <div className="flex items-stretch h-16 md:h-[72px] pl-5 md:pl-10">
        {/* Logo wordmark */}
        <Link to="/" className="flex items-center shrink-0 mr-6 md:mr-10">
          <span
            className="font-display text-3xl font-bold tracking-tight lowercase"
            style={{ color: "oklch(0.62 0.19 250)", letterSpacing: "-0.04em" }}
          >
            riolabz
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 flex-1 justify-center text-[15px] font-medium text-slate-800">
          {items.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 py-2 hover:text-[oklch(0.62_0.19_250)] transition-colors [&.active]:text-[oklch(0.62_0.19_250)]"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="size-4 text-slate-400 group-hover:text-[oklch(0.62_0.19_250)]" strokeWidth={2} />}
              </Link>
              {item.children && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64">
                  <div className="bg-white border border-black/5 rounded-2xl shadow-xl p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 group/item"
                      >
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-[oklch(0.62_0.19_250)]">{c.label}</div>
                        {c.desc && <div className="text-xs text-slate-500 mt-0.5">{c.desc}</div>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto mr-4 self-center size-10 rounded-full grid place-items-center text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Contact CTA — flush right, full-height blue block */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-8 xl:px-10 font-semibold text-white text-base transition-colors hover:brightness-110"
          style={{ background: "oklch(0.62 0.19 250)" }}
        >
          Contact Us
          <ArrowUpRight className="size-4" strokeWidth={2.25} />
        </Link>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white px-5 py-4 space-y-1">
          {items.map((i) => (
            <Link
              key={i.label}
              to={i.to}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium"
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center px-4 py-3 rounded-lg text-white font-semibold"
            style={{ background: "oklch(0.62 0.19 250)" }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
