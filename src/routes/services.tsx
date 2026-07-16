import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Boxes,
  ShoppingBag,
  Search,
  Cloud,
  Users,
  Sparkles,
  ShieldCheck,
  Rocket,
  TrendingUp,
  HeartPulse,
  Landmark,
  GraduationCap,
  Factory,
  Plane,
  Compass,
  PenTool,
  Hammer,
  TestTube2,
  LifeBuoy,
  Plus,
  Minus,
  Zap,
  Layers,
  Clock,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Riolabz Technologies" },
      { name: "description", content: "Custom web, mobile, cloud, design and digital marketing services engineered for scale — for startups, SMEs and enterprises." },
      { property: "og:title", content: "Riolabz Services — Engineered for Scale" },
      { property: "og:description", content: "End-to-end software engineering: web, mobile, cloud, UI/UX, SEO and dedicated teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const categories = [
  { icon: Code2, label: "Engineering", count: "04" },
  { icon: Palette, label: "Design", count: "02" },
  { icon: Cloud, label: "Infrastructure", count: "02" },
  { icon: TrendingUp, label: "Growth", count: "02" },
];

const services = [
  { n: "01", icon: Code2, title: "Custom Web Development", tag: "Engineering",
    desc: "Scalable, secure, lightning-fast platforms built with React, Next.js and Node — engineered to survive traffic spikes and product pivots.",
    features: ["React · Next.js · TanStack", "Node · Go · Python", "Edge · Serverless · SSR"] },
  { n: "02", icon: Smartphone, title: "Mobile Application Development", tag: "Engineering",
    desc: "Native iOS, Android and cross-platform apps built for retention — designed with taste and shipped with rigor.",
    features: ["Swift · Kotlin", "React Native · Flutter", "App Store · Play launch"] },
  { n: "03", icon: Palette, title: "UI / UX Design", tag: "Design",
    desc: "Precision interfaces focused on conversion, accessibility and brand prestige — from discovery through pixel-perfect handoff.",
    features: ["Research · Wireframes", "Design Systems", "Prototyping · Handoff"] },
  { n: "04", icon: Boxes, title: "Custom Software Development", tag: "Engineering",
    desc: "Bespoke platforms, internal tools and ERP systems tailored to your workflows — not off-the-shelf compromises.",
    features: ["Enterprise SaaS", "Internal tooling", "Workflow automation"] },
  { n: "05", icon: ShoppingBag, title: "Ecommerce Development", tag: "Engineering",
    desc: "High-conversion storefronts on Shopify, WooCommerce or headless stacks — optimized for speed and revenue.",
    features: ["Shopify Plus · Headless", "Payments · Subscriptions", "Conversion optimization"] },
  { n: "06", icon: Search, title: "SEO & Digital Marketing", tag: "Growth",
    desc: "Technical SEO, content strategy and performance marketing that compounds visibility month over month.",
    features: ["Technical SEO audits", "Content · Link building", "Google · Meta ads"] },
  { n: "07", icon: Cloud, title: "Cloud & Hosting Solutions", tag: "Infrastructure",
    desc: "Resilient AWS, Azure and GCP architectures with automated CI/CD, observability and 99.9% uptime SLAs.",
    features: ["AWS · Azure · GCP", "Kubernetes · Terraform", "CI/CD · Monitoring"] },
  { n: "08", icon: Users, title: "Dedicated Remote Teams", tag: "Engineering",
    desc: "Senior engineering squads embedded directly into your product — under your roadmap, your rituals, your Slack.",
    features: ["Full-time engineers", "Time-zone overlap", "Long-term partnerships"] },
];

const stacks = [
  { group: "Frontend", items: ["React", "Next.js", "TanStack", "TypeScript", "Tailwind", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "GraphQL"] },
  { group: "Mobile", items: ["Swift", "Kotlin", "React Native", "Flutter", "Expo"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "GitHub Actions"] },
  { group: "AI & Data", items: ["OpenAI", "LangChain", "Pinecone", "dbt", "Snowflake"] },
  { group: "Design", items: ["Figma", "Framer", "Rive", "Lottie"] },
];

const industries = [
  { icon: Landmark, name: "Fintech" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingBag, name: "Retail & Commerce" },
  { icon: GraduationCap, name: "EdTech" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: Rocket, name: "SaaS & Startups" },
  { icon: Sparkles, name: "Media & Entertainment" },
];

const benefits = [
  { icon: Zap, title: "Ship 3× faster", desc: "Reusable systems, senior engineers, and disciplined sprints compress delivery timelines." },
  { icon: ShieldCheck, title: "Enterprise-grade security", desc: "SOC 2 ready practices, encrypted pipelines and code that passes independent audits." },
  { icon: Layers, title: "Scale without rewrites", desc: "Architectures designed for 10× growth from day one — no painful re-platforming later." },
  { icon: Clock, title: "24/7 delivery coverage", desc: "Teams across India, UK and USA — someone is always shipping." },
];

const workflow = [
  { n: "01", icon: Compass, title: "Discover", desc: "Deep-dive workshops to align on outcomes, constraints and success metrics." },
  { n: "02", icon: PenTool, title: "Design", desc: "Wireframes, prototypes and design systems that ship as production-ready components." },
  { n: "03", icon: Hammer, title: "Build", desc: "Two-week sprints with live demos, transparent boards and continuous integration." },
  { n: "04", icon: TestTube2, title: "Test", desc: "Automated test suites, load testing and independent security review before launch." },
  { n: "05", icon: Rocket, title: "Launch", desc: "Zero-downtime deployment with observability, analytics and go-to-market alignment." },
  { n: "06", icon: LifeBuoy, title: "Evolve", desc: "Ongoing support, iteration and roadmap partnership long after launch." },
];

const faqs = [
  { q: "How quickly can we start a project?", a: "Discovery calls happen within 48 hours. Most projects kick off within 1–2 weeks of the first conversation, depending on scope." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We partner with early-stage founders through Series B, and with global enterprises modernizing their stack." },
  { q: "What is your pricing model?", a: "Fixed-scope for defined MVPs, retainer-based for dedicated teams, and time & materials for evolving roadmaps. We recommend the model during discovery." },
  { q: "Do you sign NDAs?", a: "Always — before the first working session. Your product ideas and IP stay yours." },
  { q: "Who owns the code?", a: "You do. Full IP ownership is transferred on delivery, with clean repositories and complete documentation." },
  { q: "Do you provide long-term support?", a: "Yes. Most clients continue with a support retainer or a dedicated squad after launch — over 99% of them stay past year one." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-14 md:pt-20 lg:pt-28 pb-16 md:pb-24 lg:pb-32 px-5 sm:px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="glass inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-xs font-medium text-white/80 mb-8 animate-fade-up">
            <span className="size-2 rounded-full bg-cyber" />
            What we do
          </div>
          <h1 className="font-display text-4xl sm:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] max-w-5xl animate-fade-up">
            Services engineered for <span className="gradient-text-brand">ambitious teams</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-white/60 leading-relaxed animate-fade-up" style={{ animationDelay: "150ms" }}>
            Eight disciplines. One integrated studio. From first prototype to production-scale
            platform — Riolabz partners with you across the entire product lifecycle.
          </p>
          <div className="mt-12 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-obsidian font-semibold rounded-full hover:bg-cyber hover:text-white transition-all">
              Start a Project <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              Browse Services
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-5 sm:px-6 md:px-10 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <div key={c.label} className="glass rounded-2xl p-6 flex items-center justify-between group hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-10 rounded-lg glass-strong flex items-center justify-center shrink-0">
                  <c.icon className="size-4 text-cyber" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-white/40 font-mono">{c.count} services</div>
                  <div className="font-display font-bold truncate">{c.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICE CARDS */}
      <section id="services" className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">01 — Services</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
              Eight ways we <span className="gradient-text">ship product</span> with you.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.n} className="card-elevated card-elevated-hover rounded-3xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 size-64 rounded-full bg-cyber/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between mb-8 relative">
                  <div className="size-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                       style={{ background: "var(--gradient-brand)" }}>
                    <s.icon className="size-6 text-white relative" strokeWidth={1.75} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/30 font-mono">{s.n}</div>
                    <div className="text-[10px] uppercase tracking-widest text-cyber font-medium mt-1">{s.tag}</div>
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 relative">{s.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6 relative">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8 relative">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs font-medium text-white/70 px-3 py-1.5 rounded-full glass">{f}</span>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyber hover:text-white transition-colors relative">
                  Discuss this service <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">02 — Technology Stack</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
                Built on <span className="gradient-text-brand">modern foundations</span>.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm">
              We pick the right tool for the job — not the trendiest. Battle-tested, well-supported,
              and boring where boring wins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stacks.map((s) => (
              <div key={s.group} className="card-elevated card-elevated-hover rounded-2xl p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-5">{s.group}</div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="text-sm font-medium px-3.5 py-2 rounded-full glass text-white/80 hover:bg-cyber/20 hover:text-white transition-colors">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">03 — Industries</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
              Industry expertise, <span className="gradient-text">delivered globally</span>.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((i) => (
              <div key={i.name} className="card-elevated card-elevated-hover rounded-2xl p-8 text-center group">
                <div className="size-14 rounded-2xl mx-auto mb-5 flex items-center justify-center glass group-hover:bg-cyber/20 transition-colors">
                  <i.icon className="size-6 text-cyber" strokeWidth={1.5} />
                </div>
                <div className="font-display font-bold">{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">04 — Benefits</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
              Why teams pick <span className="gradient-text-brand">Riolabz</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="card-elevated card-elevated-hover rounded-2xl p-8">
                <b.icon className="size-8 text-cyber mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold mb-3">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">05 — Development Workflow</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
              Six phases, <span className="gradient-text">zero surprises</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflow.map((w) => (
              <div key={w.n} className="card-elevated card-elevated-hover rounded-2xl p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-xl glass flex items-center justify-center">
                    <w.icon className="size-5 text-cyber" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/10">{w.n}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{w.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">06 — FAQ</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
              Common <span className="gradient-text-brand">questions</span>.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-20 card-elevated"
               style={{ background: "var(--gradient-brand)" }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-32 -right-32 size-96 rounded-full bg-cyber/40 blur-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.02] text-white">
                  Ready to build something remarkable?
                </h2>
                <p className="mt-6 text-lg text-white/80 max-w-xl">
                  Tell us about your product. We'll respond within 24 hours with an honest read on
                  scope, timeline and next steps.
                </p>
              </div>
              <Link to="/contact" className="group shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-white text-obsidian font-semibold rounded-full hover:bg-obsidian hover:text-white transition-all">
                Start a Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-elevated rounded-2xl overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
        <span className="font-display text-lg font-bold">{q}</span>
        <span className="size-8 rounded-full glass grid place-items-center shrink-0">
          {open ? <Minus className="size-4 text-cyber" /> : <Plus className="size-4 text-cyber" />}
        </span>
      </button>
      {open && <div className="px-6 pb-6 text-white/60 leading-relaxed">{a}</div>}
    </div>
  );
}
