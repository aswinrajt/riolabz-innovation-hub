import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: "Insights & Blog — Riolabz Technologies" },
      { name: "description", content: "Engineering essays, product playbooks and lessons from shipping software at global scale." },
      { property: "og:title", content: "Riolabz Insights" },
      { property: "og:description", content: "Engineering essays and product playbooks from the Riolabz studio." },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

const posts = [
  { tag: "Engineering", read: "8 min", title: "Designing systems that survive 10× growth", excerpt: "A pragmatic guide to writing software today that won't need to be rewritten tomorrow." },
  { tag: "Design", read: "6 min", title: "Interfaces that feel inevitable", excerpt: "What separates memorable product design from forgettable UI." },
  { tag: "Cloud", read: "10 min", title: "The economics of serverless in 2026", excerpt: "When serverless is a superpower — and when it silently drains your runway." },
  { tag: "Playbook", read: "5 min", title: "Shipping an MVP in 8 weeks (and not lying about it)", excerpt: "A realistic breakdown of what makes early product velocity actually possible." },
  { tag: "Leadership", read: "7 min", title: "How we run remote engineering across three continents", excerpt: "The rituals, tools and boundaries that make follow-the-sun teams work." },
  { tag: "AI", read: "9 min", title: "Building AI features that don't break in production", excerpt: "Evaluation, guardrails and rollout patterns for LLM-powered product features." },
];

function BlogsPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      <SiteHeader />
      <section className="relative pt-14 md:pt-20 lg:pt-28 pb-16 px-5 sm:px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">Insights</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            Notes from the <span className="gradient-text-brand">engineering room</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
            Essays, playbooks and lessons from a decade of shipping software.
          </p>
        </div>
      </section>
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.title} href="#" className="card-elevated card-elevated-hover rounded-2xl p-8 group flex flex-col">
              <div className="flex items-center justify-between mb-6 text-xs">
                <span className="uppercase tracking-[0.2em] text-cyber font-medium">{p.tag}</span>
                <span className="flex items-center gap-1.5 text-white/40"><Clock className="size-3" /> {p.read}</span>
              </div>
              <h2 className="font-display text-xl font-bold mb-3 flex-1">{p.title}</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{p.excerpt}</p>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyber group-hover:text-white transition-colors">
                Read essay <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
