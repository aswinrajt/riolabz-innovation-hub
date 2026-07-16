import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Riolabz Technologies" },
      { name: "description", content: "Join a distributed engineering studio building software that lasts. Roles across India, the UK and the USA." },
      { property: "og:title", content: "Careers at Riolabz" },
      { property: "og:description", content: "Engineering, design and product roles at Riolabz." },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const roles = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Bengaluru · Remote" },
  { title: "Product Designer", team: "Design", location: "London · Remote" },
  { title: "Cloud Platform Engineer", team: "Infrastructure", location: "Remote (EU/IN)" },
  { title: "Mobile Engineer (React Native)", team: "Engineering", location: "Remote" },
  { title: "Engineering Manager", team: "Leadership", location: "New York · Hybrid" },
  { title: "Growth Marketing Lead", team: "Growth", location: "Remote" },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      <SiteHeader />
      <section className="relative pt-14 md:pt-20 lg:pt-28 pb-16 px-5 sm:px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">Careers</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            Build software that <span className="gradient-text-brand">outlasts you</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
            We're a distributed studio of engineers, designers and operators. If you care about craft,
            partnership and long-term thinking — we should talk.
          </p>
        </div>
      </section>
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-3">
          {roles.map((r) => (
            <div key={r.title} className="card-elevated card-elevated-hover rounded-2xl p-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 group">
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-2">{r.team}</div>
                <h2 className="font-display text-xl font-bold truncate">{r.title}</h2>
                <div className="mt-2 text-sm text-white/50 flex items-center gap-1.5"><MapPin className="size-3.5" /> {r.location}</div>
              </div>
              <Link to="/contact" className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full glass text-sm font-semibold hover:bg-cyber hover:text-white transition-colors">
                Apply <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
