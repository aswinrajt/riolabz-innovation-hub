import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-infrastructure.jpg";
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
  Layers,
  ShieldCheck,
  Infinity as InfinityIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
});

const services = [
  {
    n: "01",
    icon: Code2,
    title: "Custom Web Development",
    desc: "Scalable, secure, lightning-fast web platforms built with React, Next.js and Node.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile products engineered for retention and performance.",
  },
  {
    n: "03",
    icon: Palette,
    title: "UI / UX Design",
    desc: "Precision-crafted interfaces focused on conversion, accessibility and brand prestige.",
  },
  {
    n: "04",
    icon: Boxes,
    title: "Custom Software",
    desc: "Bespoke platforms, ERPs and internal tools tailored to complex operational workflows.",
  },
  {
    n: "05",
    icon: ShoppingBag,
    title: "Ecommerce Development",
    desc: "Headless and full-stack commerce built for high-volume retailers across regions.",
  },
  {
    n: "06",
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Technical SEO, content strategy and data-driven growth that compounds over time.",
  },
  {
    n: "07",
    icon: Cloud,
    title: "Cloud & Hosting",
    desc: "Resilient AWS and Azure architectures with automated CI/CD and 99.9% uptime.",
  },
  {
    n: "08",
    icon: Users,
    title: "Dedicated Remote Teams",
    desc: "Senior engineering squads embedded directly into your existing product workflow.",
  },
];

const capabilities = [
  {
    icon: Sparkles,
    title: "Innovation as a discipline",
    desc: "We evaluate emerging tools and patterns against real business outcomes — not hype cycles.",
  },
  {
    icon: Layers,
    title: "Scalable by architecture",
    desc: "Systems designed to absorb 10× growth without rewrites. Clean domains, measurable performance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality is measurable",
    desc: "Type-safe codebases, automated pipelines and observability from day one — not sprint twelve.",
  },
  {
    icon: InfinityIcon,
    title: "Partnerships over projects",
    desc: "Multi-year engagements with product, engineering and growth teams that stay across cycles.",
  },
];

const process = [
  { n: "01", label: "Discover", desc: "Technical audit, discovery workshops, and a roadmap grounded in outcomes." },
  { n: "02", label: "Design", desc: "System architecture and product experience prototyped before a line of code." },
  { n: "03", label: "Build", desc: "Sprint-based delivery with CI/CD, code review, and automated quality gates." },
  { n: "04", label: "Scale", desc: "Observability, optimization and continuous evolution as your product grows." },
];

const regions = [
  { city: "Bengaluru", country: "India", tz: "IST" },
  { city: "London", country: "United Kingdom", tz: "GMT" },
  { city: "New York", country: "USA", tz: "EST" },
];

function Index() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="glass-strong sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="size-7 rounded-md" style={{ background: "var(--gradient-brand)" }} aria-hidden />
          <span className="font-display text-lg font-bold tracking-tight">
            Riolabz
          </span>
        </a>
        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-white/60">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#process" className="hover:text-white transition-colors">Methodology</a>
          <a href="#regions" className="hover:text-white transition-colors">Global</a>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 px-4 py-2 bg-white text-obsidian text-sm font-semibold rounded-full hover:bg-cyber hover:text-white transition-all duration-300"
        >
          Start a project
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>

      {/* Hero */}
      <header
        id="top"
        className="relative pt-24 md:pt-32 pb-28 md:pb-40 px-6 md:px-10 overflow-hidden"
      >
        {/* Ambient background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-radial-hero)" }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />

        <div className="max-w-7xl mx-auto">
          <div
            className="glass inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-xs font-medium text-white/80 mb-8 animate-fade-up"
          >
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-cyber" />
            </span>
            Global digital engineering
            <span className="text-white/30">·</span>
            <span className="text-white/50">India · UK · USA</span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.92] tracking-tighter max-w-5xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <span className="gradient-text">We build the </span>
            <span className="gradient-text-brand">infrastructure</span>
            <span className="gradient-text"> of modern software.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end mt-12">
            <div className="md:col-span-6 animate-fade-up" style={{ animationDelay: "160ms" }}>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
                Riolabz Technologies is a global software collective engineering
                scalable digital products for high-growth startups and enterprises —
                from prototype to planetary scale.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-brand)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  Start a project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  className="glass inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white/90 hover:text-white transition-colors"
                >
                  Explore services
                </a>
              </div>
            </div>

            <div
              className="md:col-span-6 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div
                className="relative rounded-3xl overflow-hidden card-elevated"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={heroImage}
                  alt="Visualization of Riolabz cloud, data and application infrastructure"
                  width={1600}
                  height={912}
                  className="w-full aspect-[21/12] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/60">
                  <span>System · online</span>
                  <span>uptime 99.98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Regions */}
      <section id="regions" className="px-6 md:px-10 -mt-6 md:-mt-10 relative z-10">
        <div className="max-w-7xl mx-auto glass rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
            Engineering nodes
          </span>
          {regions.map((r) => (
            <div key={r.city} className="flex flex-col gap-1">
              <span className="text-sm text-white/50">{r.country}</span>
              <span className="font-display text-xl font-bold tracking-tight">
                {r.city}
                <span className="ml-2 text-xs font-mono text-cyber align-middle">{r.tz}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">
                / 01 Capabilities
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
                Eight disciplines. <br />
                One engineering practice.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed">
              End-to-end product engineering — from a first sketch to a system
              serving millions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="card-elevated card-elevated-hover group relative rounded-2xl p-7 overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-7">
                      <div className="size-11 rounded-xl grid place-items-center glass">
                        <Icon className="size-5 text-cyber" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-[11px] text-white/30">{s.n}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2.5 leading-snug tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-cyber transition-colors">
                      Learn more
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="relative py-28 md:py-36 px-6 md:px-10 border-y border-border overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 10% 50%, color-mix(in oklab, var(--cyber) 12%, transparent) 0%, transparent 70%), radial-gradient(50% 50% at 90% 50%, color-mix(in oklab, var(--violet) 12%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">
              / 02 Why Riolabz
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.02]">
              <span className="gradient-text">Engineering that </span>
              <span className="gradient-text-brand">compounds.</span>
            </h2>
            <p className="text-white/55 mt-6 leading-relaxed max-w-md">
              We're built for teams that plan in years, not sprints. Every
              decision optimizes for the version of your product that ships
              three releases from now.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="card-elevated card-elevated-hover rounded-2xl p-7"
                >
                  <div className="size-10 rounded-lg grid place-items-center glass mb-6">
                    <Icon className="size-4.5 text-cyber" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold mb-2 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">
              / 03 Methodology
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
              A structured path <br />
              from idea to scale.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div
                key={p.n}
                className="card-elevated card-elevated-hover rounded-2xl p-7 relative"
              >
                <div className="font-mono text-xs text-white/35 mb-8">{p.n}</div>
                <div className="h-px w-full mb-6" style={{ background: i === 0 ? "var(--gradient-brand)" : "color-mix(in oklab, white 8%, transparent)" }} />
                <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">
                  {p.label}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="pb-28 md:pb-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[2rem] p-12 md:p-20 overflow-hidden card-elevated"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-90"
              style={{
                background:
                  "radial-gradient(60% 100% at 20% 0%, color-mix(in oklab, var(--cyber) 30%, transparent) 0%, transparent 70%), radial-gradient(50% 100% at 100% 100%, color-mix(in oklab, var(--violet) 30%, transparent) 0%, transparent 70%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden />

            <div className="relative max-w-3xl">
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">
                / 04 Let's build
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-[1.02] tracking-tight">
                <span className="gradient-text">Ready to build something </span>
                <span className="gradient-text-brand">exceptional?</span>
              </h2>
              <p className="text-white/65 max-w-xl mb-10 text-base md:text-lg leading-relaxed">
                Tell us about your product, your timeline and your ambition.
                We reply within one business day, in your timezone.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@riolabz.com"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-brand)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  hello@riolabz.com
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#services"
                  className="glass inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white/90 hover:text-white transition-colors"
                >
                  See what we build
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <div className="flex items-center gap-2.5">
            <div className="size-5 rounded" style={{ background: "var(--gradient-brand)" }} aria-hidden />
            <span>© {new Date().getFullYear()} Riolabz Technologies</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em]">
            India · UK · USA
          </p>
        </div>
      </footer>
    </div>
  );
}
