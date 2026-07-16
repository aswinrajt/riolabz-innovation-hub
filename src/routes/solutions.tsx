import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Rocket, Building2, Users, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Solutions — Riolabz Technologies" },
      { name: "description", content: "Tailored engineering solutions for startups, enterprises and product teams looking for dedicated remote talent." },
      { property: "og:title", content: "Solutions — Riolabz Technologies" },
      { property: "og:description", content: "Startup MVPs, enterprise modernization, and dedicated remote teams." },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
});

const solutions = [
  { icon: Rocket, title: "For Startups", desc: "MVPs shipped in 8–12 weeks. Product strategy, design and engineering under one roof — ready for your first thousand users and your Series A pitch.",
    points: ["MVP in 8–12 weeks", "Design-led product thinking", "Investor-ready architecture"] },
  { icon: Building2, title: "For Enterprises", desc: "Modernization, digital transformation and platform re-architecture for organizations that need to move faster without breaking what works.",
    points: ["Legacy modernization", "Enterprise integrations", "Compliance & audit readiness"] },
  { icon: Users, title: "Dedicated Teams", desc: "Senior engineers embedded directly into your product organization — under your rituals, your roadmap and your Slack workspace.",
    points: ["2–20 engineer squads", "Time-zone overlap", "Long-term partnerships"] },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      <SiteHeader />
      <section className="relative pt-14 md:pt-20 lg:pt-28 pb-16 px-5 sm:px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">Solutions</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            Engineering models built for <span className="gradient-text-brand">your stage</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
            Three ways to work with Riolabz — matched to where your product is today and where it
            needs to be next.
          </p>
        </div>
      </section>
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="card-elevated card-elevated-hover rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 size-64 rounded-full bg-cyber/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="size-14 rounded-2xl flex items-center justify-center mb-8 relative" style={{ background: "var(--gradient-brand)" }}>
                <s.icon className="size-6 text-white" strokeWidth={1.75} />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4 relative">{s.title}</h2>
              <p className="text-white/60 leading-relaxed mb-6 relative">{s.desc}</p>
              <ul className="space-y-2 mb-8 relative">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-white/70 flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyber" />{p}</li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyber hover:text-white transition-colors relative">
                Talk to us <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
