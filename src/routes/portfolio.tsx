import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";
import healthcare from "@/assets/portfolio-healthcare.jpg";
import ecommerce from "@/assets/portfolio-ecommerce.jpg";
import business from "@/assets/portfolio-business.jpg";
import entertainment from "@/assets/portfolio-entertainment.jpg";
import saas from "@/assets/portfolio-saas.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Riolabz Technologies" },
      { name: "description", content: "Selected products Riolabz has designed, engineered and launched across healthcare, ecommerce, SaaS, entertainment and enterprise." },
      { property: "og:title", content: "Riolabz Portfolio" },
      { property: "og:description", content: "Products we've built for founders and enterprises worldwide." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const items = [
  { img: healthcare, tag: "Healthcare", title: "Continuum Care Platform", desc: "Patient records, telemedicine and billing unified into one modern EMR." },
  { img: ecommerce, tag: "Ecommerce", title: "Aurelia Commerce", desc: "Headless Shopify storefront driving 3.2× conversion for a European brand." },
  { img: saas, tag: "SaaS", title: "Orbit Analytics", desc: "Real-time analytics workspace for a Series B fintech." },
  { img: business, tag: "Enterprise", title: "Meridian Ops Cloud", desc: "Internal operations platform for a Fortune 500 logistics company." },
  { img: entertainment, tag: "Media", title: "Cadence Streaming", desc: "Personalized live-music streaming with sub-second latency." },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      <SiteHeader />
      <section className="relative pt-20 md:pt-28 pb-16 px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">Portfolio</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            Products we've <span className="gradient-text-brand">shipped</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
            A selected set of work across healthcare, commerce, SaaS and enterprise — each launched,
            live and serving real users today.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((i) => (
            <article key={i.title} className="card-elevated card-elevated-hover rounded-3xl overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={i.img} alt={i.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-2">{i.tag}</div>
                <h2 className="font-display text-2xl font-bold mb-3">{i.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6">{i.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyber hover:text-white transition-colors">
                  View case study <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
