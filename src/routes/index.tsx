import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-infrastructure.jpg";

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
    title: "Custom Web Development",
    desc: "Scalable, secure, and lightning-fast web platforms built with React, Next.js and Node.",
  },
  {
    n: "02",
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile products engineered for retention and performance.",
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "Precision-crafted interfaces focused on conversion, accessibility and brand prestige.",
  },
  {
    n: "04",
    title: "Custom Software Development",
    desc: "Bespoke platforms, ERPs and internal tools tailored to complex operational workflows.",
  },
  {
    n: "05",
    title: "Ecommerce Development",
    desc: "Headless and full-stack commerce built for high-volume retailers across regions.",
  },
  {
    n: "06",
    title: "SEO & Digital Marketing",
    desc: "Technical SEO, content strategy and data-driven growth that compounds over time.",
  },
  {
    n: "07",
    title: "Cloud & Hosting Solutions",
    desc: "Resilient AWS and Azure architectures with automated CI/CD and 99.9% uptime.",
  },
  {
    n: "08",
    title: "Dedicated Remote Teams",
    desc: "Senior engineering squads embedded directly into your existing product workflow.",
  },
];

const capabilities = [
  {
    title: "Innovation as a discipline",
    desc: "We treat R&D as a habit — evaluating emerging tools, patterns and platforms against real business outcomes.",
  },
  {
    title: "Scalable by architecture",
    desc: "Systems designed to absorb 10× growth without rewrites. Clean domains, boring infrastructure, measurable performance.",
  },
  {
    title: "Quality is measurable",
    desc: "Type-safe codebases, automated pipelines, review discipline and observability from day one — not sprint 12.",
  },
  {
    title: "Partnerships over projects",
    desc: "Multi-year engagements with product, engineering and growth teams that stay with you across cycles.",
  },
];

const process = [
  { n: "01", label: "Discover", desc: "Technical audit and roadmap." },
  { n: "02", label: "Design", desc: "Architecture and experience flows." },
  { n: "03", label: "Build", desc: "Sprint-based delivery with CI/CD." },
  { n: "04", label: "Scale", desc: "Observability, optimization, growth." },
];

function Index() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="size-8 bg-cyber rounded-sm" aria-hidden />
          <span className="font-display text-xl font-bold tracking-tight uppercase">
            Riolabz
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#capabilities" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            Methodology
          </a>
          <a href="#regions" className="hover:text-white transition-colors">
            Global
          </a>
        </div>
        <a
          href="#contact"
          className="px-5 py-2.5 bg-white text-obsidian text-sm font-semibold rounded-full hover:bg-cyber hover:text-white transition-all"
        >
          Start a Project
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className="pt-20 md:pt-24 pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyber mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber" />
            </span>
            Global Digital Engineering
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-10">
            WE BUILD THE
            <br />
            <span className="text-white/40">INFRASTRUCTURE</span>
            <br />
            OF INNOVATION.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
            <p className="md:col-span-5 text-lg md:text-xl text-white/60 leading-relaxed">
              Riolabz Technologies is a global software collective engineering
              scalable digital products for high-growth startups and enterprises
              across India, the United Kingdom and the United States.
            </p>
            <div className="md:col-span-7">
              <img
                src={heroImage}
                alt="Isometric visualization of Riolabz cloud, data and application infrastructure"
                width={1600}
                height={912}
                className="w-full aspect-[21/9] object-cover rounded-2xl outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Regions / trust strip */}
      <section
        id="regions"
        className="py-10 border-y border-border bg-white/[0.02]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap items-center justify-between gap-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            Engineering across three continents
          </span>
          <div className="flex flex-wrap gap-x-10 gap-y-3 font-display font-bold text-lg">
            <span>
              <span className="text-cyber mr-2">·</span>Bengaluru, India
            </span>
            <span>
              <span className="text-cyber mr-2">·</span>London, United Kingdom
            </span>
            <span>
              <span className="text-cyber mr-2">·</span>New York, USA
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              CORE CAPABILITIES
            </h2>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest">
              Eight disciplines, one integrated engineering practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-obsidian p-8 lg:p-10 hover:bg-surface transition-colors group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="size-11 rounded-xl bg-cyber/10 border border-cyber/20 grid place-items-center group-hover:bg-cyber transition-all">
                    <span className="font-mono text-xs text-cyber group-hover:text-white transition-colors">
                      {s.n}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">{s.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Why us */}
      <section
        id="capabilities"
        className="py-24 md:py-32 px-6 md:px-8 border-t border-border bg-white/[0.015]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.2em]">
              (02) Why Riolabz
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 leading-[1.05]">
              Engineering that <span className="text-white/40">compounds</span>.
            </h2>
            <p className="text-white/50 mt-6 leading-relaxed">
              We're built for teams that plan in years, not sprints. Every
              decision optimizes for the version of your product that ships
              three releases from now.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-obsidian p-8">
                <h3 className="text-lg font-bold mb-3">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.2em]">
                (03) Engagement Lifecycle
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4">
                A structured path from idea to scale.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.n} className="flex flex-col gap-4">
                <div className="text-xs font-mono text-white/40">
                  {p.n} / {p.label.toUpperCase()}
                </div>
                <div className="h-px bg-white/10 w-full" />
                <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-cyber rounded-[2rem] p-12 md:p-24 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05]">
                Ready to build something
                <br />
                truly exceptional?
              </h2>
              <p className="text-white/80 max-w-xl mb-10 text-lg">
                Tell us about your product, your timeline and your ambition.
                We'll respond within one business day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@riolabz.com"
                  className="px-8 py-4 bg-white text-cyber font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  hello@riolabz.com
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-obsidian text-white font-bold rounded-xl border border-white/10 transition-all hover:bg-surface"
                >
                  Explore services
                </a>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 size-96 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t border-border text-white/40 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Riolabz Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest">
            India · UK · USA
          </p>
        </div>
      </footer>
    </div>
  );
}
