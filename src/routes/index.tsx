import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-infrastructure.jpg";
import portfolioHealthcare from "@/assets/portfolio-healthcare.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioBusiness from "@/assets/portfolio-business.jpg";
import portfolioEntertainment from "@/assets/portfolio-entertainment.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Boxes,
  Search,
  Cloud,
  Users,
  Sparkles,
  Layers,
  ShieldCheck,
  Infinity as InfinityIcon,
  Globe2,
  MessageSquare,
  Compass,
  PenTool,
  Hammer,
  TestTube2,
  Rocket,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
});

const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { end: 12, suffix: "+", label: "Years of engineering" },
  { end: 500, suffix: "+", label: "Products delivered" },
  { end: 300, suffix: "+", label: "Global clients" },
  { end: 99, suffix: "%", label: "Client satisfaction" },
];

const services = [
  { n: "01", icon: Code2, title: "Web Development", desc: "Scalable, secure, lightning-fast web platforms built with React, Next.js and Node." },
  { n: "02", icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile products engineered for retention and performance." },
  { n: "03", icon: Palette, title: "UI / UX Design", desc: "Precision interfaces focused on conversion, accessibility and brand prestige." },
  { n: "04", icon: Boxes, title: "Custom Software", desc: "Bespoke platforms, ERPs and internal tools tailored to complex workflows." },
  { n: "05", icon: Search, title: "SEO & Growth", desc: "Technical SEO and content strategy that compounds visibility over time." },
  { n: "06", icon: Cloud, title: "Cloud Solutions", desc: "Resilient AWS and Azure architectures with automated CI/CD and 99.9% uptime." },
  { n: "07", icon: Users, title: "Dedicated Teams", desc: "Senior engineering squads embedded directly into your existing product workflow." },
];

const strengths = [
  { icon: Layers, title: "Scalable solutions", desc: "Systems designed to absorb 10× growth without rewrites or downtime." },
  { icon: Sparkles, title: "Experienced engineers", desc: "Senior product engineers with 8+ years across web, mobile and cloud." },
  { icon: Globe2, title: "Global delivery", desc: "Time-zone overlap across India, UK and USA — always someone shipping." },
  { icon: MessageSquare, title: "Transparent communication", desc: "Live roadmaps, weekly demos and direct Slack access to your team." },
  { icon: InfinityIcon, title: "Long-term support", desc: "Multi-year partnerships that evolve with your product and market." },
];

const portfolio = [
  { image: portfolioHealthcare, category: "Healthcare", title: "Vital — patient care platform", desc: "A HIPAA-ready platform connecting clinicians, patients and payers." },
  { image: portfolioEcommerce, category: "Ecommerce", title: "Nordform — headless commerce", desc: "Global headless commerce serving 40+ regions and 12M annual orders." },
  { image: portfolioBusiness, category: "Business", title: "Ledgerly — operations OS", desc: "An internal OS for a Fortune 500 replacing 14 legacy tools." },
  { image: portfolioEntertainment, category: "Entertainment", title: "Loop — streaming studio", desc: "Realtime creator studio powering live streams across three continents." },
  { image: portfolioSaas, category: "SaaS", title: "Northlight — analytics SaaS", desc: "A product analytics SaaS processing 4B events per month with sub-second dashboards." },
];

const process = [
  { icon: Compass, label: "Discovery", desc: "Audit, workshops and roadmap." },
  { icon: PenTool, label: "Design", desc: "Architecture and product flows." },
  { icon: Hammer, label: "Development", desc: "Sprint-based delivery with CI/CD." },
  { icon: TestTube2, label: "Testing", desc: "Automated QA and observability." },
  { icon: Rocket, label: "Launch", desc: "Zero-downtime rollout and DevOps." },
  { icon: LifeBuoy, label: "Support", desc: "Continuous evolution and SLAs." },
];

const testimonials = [
  { name: "Ananya Rao", role: "CTO", company: "Vital Health", initials: "AR", quote: "Riolabz rebuilt our patient platform end-to-end. Six months in, we're serving 3× the load at half the infra cost." },
  { name: "James Whitfield", role: "Founder", company: "Nordform", initials: "JW", quote: "The team ships like a co-founder would. Weekly demos, honest trade-offs, and code we've been proud to inherit." },
  { name: "Priya Menon", role: "VP Product", company: "Northlight", initials: "PM", quote: "The most technically rigorous partner we've worked with. Our sub-second analytics dashboard is entirely their design." },
];

const insights = [
  { tag: "Engineering", date: "Mar 12", title: "Designing systems that absorb 10× growth without a rewrite", desc: "The architectural bets we make early — and the ones we defer on purpose." },
  { tag: "Design", date: "Feb 28", title: "The economics of UI craft in high-conversion products", desc: "Why senior interface work returns 4–6× within a single quarter." },
  { tag: "Cloud", date: "Feb 09", title: "A pragmatic guide to multi-region AWS in 2026", desc: "Latency, cost and failure modes — what we actually deploy for enterprise clients." },
];

const footerServices = ["Web Development", "Mobile Apps", "UI / UX", "Custom Software", "Cloud", "SEO"];
const footerLinks = ["Home", "Portfolio", "About", "Careers", "Insights", "Contact"];

function Index() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      {/* NAV */}
      <nav className="glass-strong sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <div className="size-7 rounded-md" style={{ background: "var(--gradient-brand)" }} aria-hidden />
          <span className="font-display text-lg font-bold tracking-tight">Riolabz</span>
        </a>
        <div className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/60">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 px-4 py-2 bg-white text-obsidian text-sm font-semibold rounded-full hover:bg-cyber hover:text-white transition-all duration-300"
        >
          Start Your Project
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>

      {/* HERO */}
      <header id="top" className="relative pt-20 md:pt-28 pb-24 md:pb-32 px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="glass inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-xs font-medium text-white/80 mb-8 animate-fade-up">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-cyber" />
              </span>
              Global digital engineering
              <span className="text-white/30">·</span>
              <span className="text-white/50">India · UK · USA</span>
            </div>
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tighter animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <span className="gradient-text">Digital products for </span>
              <span className="gradient-text-brand">modern businesses.</span>
            </h1>
            <p
              className="text-lg text-white/60 leading-relaxed max-w-xl mt-8 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Riolabz Technologies designs and engineers scalable web, mobile
              and cloud products for ambitious teams — from a first prototype
              to a system serving millions.
            </p>
            <div
              className="flex flex-wrap gap-3 mt-10 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
              >
                Start Your Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="glass inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white/90 hover:text-white transition-colors"
              >
                View our work
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-6 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <div
              className="relative rounded-3xl overflow-hidden card-elevated"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={heroImage}
                alt="Futuristic visualization of Riolabz cloud, data and application infrastructure"
                width={1600}
                height={912}
                className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/70">
                <span>System · online</span>
                <span>uptime 99.98%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="px-6 md:px-10 -mt-4 md:-mt-8 relative z-10">
        <div className="max-w-7xl mx-auto glass rounded-3xl p-6 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="min-w-0">
              <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tight gradient-text-brand">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-white/55 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 01 Services</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
                Seven disciplines. <br />
                One engineering practice.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed">
              End-to-end product engineering — from a first sketch to a system
              serving millions of users worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <h3 className="text-lg font-semibold mb-2.5 leading-snug tracking-tight">{s.title}</h3>
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

      {/* WHY CHOOSE — ABOUT */}
      <section
        id="about"
        className="relative py-24 md:py-32 px-6 md:px-10 border-y border-border overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 10% 50%, color-mix(in oklab, var(--cyber) 14%, transparent) 0%, transparent 70%), radial-gradient(50% 50% at 90% 50%, color-mix(in oklab, var(--violet) 14%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 02 Why Riolabz</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.02]">
              <span className="gradient-text">Engineering that </span>
              <span className="gradient-text-brand">compounds.</span>
            </h2>
            <p className="text-white/55 mt-6 leading-relaxed max-w-md">
              Five reasons the world's most ambitious teams — from seed-stage
              startups to Fortune 500 companies — choose us as their long-term
              engineering partner.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card-elevated card-elevated-hover rounded-2xl p-7">
                  <div className="size-10 rounded-lg grid place-items-center glass mb-6">
                    <Icon className="size-4.5 text-cyber" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold mb-2 tracking-tight">{c.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 03 Portfolio</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
                Products we're <br />
                proud to have shipped.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed">
              A selection of work across healthcare, commerce, business, entertainment and SaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {portfolio.map((p, i) => (
              <a
                key={p.title}
                href="#contact"
                className={`group relative rounded-3xl overflow-hidden card-elevated card-elevated-hover ${
                  i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : i === 2 ? "lg:col-span-2" : i === 3 ? "lg:col-span-2" : "lg:col-span-2"
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="glass inline-flex px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/80">
                      {p.category}
                    </span>
                    <ArrowUpRight className="size-4 text-white/60 group-hover:text-cyber transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-2 max-w-md">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20 max-w-2xl">
            <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 04 Process</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
              A structured path <br /> from idea to launch.
            </h2>
          </div>

          <div className="relative">
            {/* timeline line */}
            <div
              className="hidden lg:block absolute top-6 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, color-mix(in oklab, var(--cyber) 40%, transparent) 15%, color-mix(in oklab, var(--violet) 40%, transparent) 85%, transparent 100%)",
              }}
              aria-hidden
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className="relative flex flex-col items-start">
                    <div
                      className="size-12 rounded-full grid place-items-center relative z-10"
                      style={{
                        background: "var(--obsidian)",
                        border: "1px solid color-mix(in oklab, var(--cyber) 40%, transparent)",
                        boxShadow: "0 0 24px -6px color-mix(in oklab, var(--cyber) 50%, transparent)",
                      }}
                    >
                      <Icon className="size-5 text-cyber" strokeWidth={1.5} />
                    </div>
                    <div className="mt-5 text-[10px] font-mono uppercase tracking-widest text-white/40">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-tight">{p.label}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20 max-w-2xl">
            <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 05 Voices</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
              Trusted by teams <br /> that ship at scale.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="glass rounded-2xl p-8 relative overflow-hidden">
                <Quote className="absolute top-6 right-6 size-8 text-white/10" strokeWidth={1.5} />
                <blockquote className="text-white/85 leading-relaxed text-base">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <div
                    className="size-11 rounded-full grid place-items-center font-display font-bold text-sm text-white shrink-0"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{t.name}</div>
                    <div className="text-xs text-white/50 truncate">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 06 Insights</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 gradient-text">
                Notes from the <br /> engineering floor.
              </h2>
            </div>
            <a href="#" className="text-sm text-white/60 hover:text-white inline-flex items-center gap-1">
              All articles <ArrowRight className="size-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((post, i) => (
              <a
                key={post.title}
                href="#"
                className="card-elevated card-elevated-hover group rounded-2xl overflow-hidden flex flex-col"
              >
                <div
                  className="aspect-[16/10] relative overflow-hidden"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, oklch(0.28 0.15 260), oklch(0.22 0.12 220))"
                        : i === 1
                          ? "linear-gradient(135deg, oklch(0.28 0.16 300), oklch(0.22 0.13 260))"
                          : "linear-gradient(135deg, oklch(0.26 0.14 200), oklch(0.20 0.10 260))",
                  }}
                >
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-6xl font-extrabold text-white/25 tracking-tighter">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col grow">
                  <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-white/45">
                    <span className="text-cyber">{post.tag}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight mt-4 leading-snug">{post.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mt-3">{post.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-white/50 group-hover:text-cyber transition-colors">
                    Read article <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
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
              <span className="text-cyber font-mono text-[11px] uppercase tracking-[0.24em]">/ 07 Let's build</span>
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
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                >
                  Book a Consultation
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

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 md:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Company */}
            <div className="lg:col-span-4">
              <a href="#top" className="flex items-center gap-2.5">
                <div className="size-8 rounded-md" style={{ background: "var(--gradient-brand)" }} aria-hidden />
                <span className="font-display text-xl font-bold tracking-tight">Riolabz</span>
              </a>
              <p className="text-white/50 text-sm leading-relaxed mt-5 max-w-sm">
                A global software collective engineering scalable digital
                products for startups, SMEs and enterprises across India, the
                United Kingdom and the United States.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="glass size-9 rounded-full grid place-items-center text-white/70 hover:text-white hover:border-cyber/40 transition-colors"
                    aria-label="Social link"
                  >
                    <Icon className="size-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Services</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                {footerServices.map((s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                {footerLinks.map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">Contact</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 text-cyber shrink-0" strokeWidth={1.5} />
                  <a href="mailto:hello@riolabz.com" className="hover:text-white transition-colors">hello@riolabz.com</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 text-cyber shrink-0" strokeWidth={1.5} />
                  +91 · +44 · +1
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-cyber shrink-0" strokeWidth={1.5} />
                  Bengaluru · London · New York
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Newsletter</h4>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="glass rounded-full flex items-center p-1 pl-4 gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="bg-transparent text-sm text-white placeholder:text-white/40 flex-1 outline-none min-w-0 py-1.5"
                  />
                  <button
                    type="submit"
                    className="shrink-0 inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-full text-white transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    Subscribe <ArrowRight className="size-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Riolabz Technologies. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]">India · UK · USA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
