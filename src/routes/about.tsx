import { createFileRoute, Link } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";
import aboutGlobe from "@/assets/about-globe.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Telescope,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Zap,
  Users,
  Globe2,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  MapPin,
  Award,
  TrendingUp,
  Lock,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Riolabz — Engineering the Future of Digital" },
      {
        name: "description",
        content:
          "Riolabz Technologies is a global software engineering studio building scalable digital products for startups, SMEs and enterprises across India, the UK and the USA.",
      },
      { property: "og:title", content: "About Riolabz Technologies" },
      {
        property: "og:description",
        content:
          "A global engineering studio committed to innovation, quality and long-term partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/" as const, hash: "services" },
  { label: "Portfolio", to: "/" as const, hash: "portfolio" },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/" as const, hash: "contact" },
];

const values = [
  { icon: Sparkles, title: "Innovation", desc: "We ship ideas that don't exist yet — pragmatic experimentation over hype." },
  { icon: ShieldCheck, title: "Quality Engineering", desc: "Every line of code is reviewed, tested and built to survive scale." },
  { icon: HeartHandshake, title: "Partnership", desc: "We invest in your outcomes — not just deliverables. Long horizons, honest work." },
  { icon: Zap, title: "Velocity", desc: "Rapid iteration cycles with production-grade discipline. Ship weekly, not yearly." },
  { icon: Lock, title: "Trust", desc: "Transparent process, secure architecture, and total ownership of what we build." },
  { icon: Globe2, title: "Global Craft", desc: "World-class standards delivered across time zones, cultures and industries." },
];

const timeline = [
  { year: "2013", title: "The beginning", desc: "Founded in Bengaluru with a small team of engineers obsessed with product craft." },
  { year: "2016", title: "First global client", desc: "Shipped our first international product for a London-based fintech startup." },
  { year: "2018", title: "UK presence", desc: "Established a client-facing hub in London — deepening our European footprint." },
  { year: "2020", title: "Remote-first, global-scale", desc: "Grew to 60+ engineers delivering across 4 continents through the pandemic." },
  { year: "2022", title: "US expansion", desc: "Opened a New York office and partnered with Fortune 500 innovation teams." },
  { year: "2025", title: "300+ products shipped", desc: "Cross a milestone: 300+ live products powering real businesses worldwide." },
];

const leaders = [
  { name: "Arjun Mehta", role: "Founder & CEO", initials: "AM", bio: "Product engineer turned entrepreneur. 15+ years shaping technology strategy." },
  { name: "Priya Nair", role: "Chief Technology Officer", initials: "PN", bio: "Cloud architect. Builds systems that scale from zero to millions." },
  { name: "Daniel Whitmore", role: "Head of Design", initials: "DW", bio: "London-based designer. Obsessed with interfaces that feel inevitable." },
  { name: "Sara Ahluwalia", role: "VP, Client Success", initials: "SA", bio: "Bridges engineering and business — turning ambition into shipped outcomes." },
];

const regions = [
  { city: "Bengaluru", country: "India", role: "Engineering HQ", tz: "GMT +5:30" },
  { city: "London", country: "United Kingdom", role: "European Hub", tz: "GMT +0:00" },
  { city: "New York", country: "USA", role: "Americas Office", tz: "GMT −5:00" },
];

const trust = [
  { icon: Award, title: "12+ years of engineering", desc: "Over a decade of shipping software that lasts." },
  { icon: Users, title: "300+ global clients", desc: "Trusted by founders, CTOs and Fortune 500 innovation teams." },
  { icon: TrendingUp, title: "99% client retention", desc: "Long-term partnerships are our proof of quality." },
  { icon: Clock, title: "24/7 delivery coverage", desc: "Follow-the-sun teams across three continents." },
];

const footerLinks = ["Home", "Portfolio", "About", "Careers", "Insights", "Contact"];

function AboutPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      {/* NAV */}
      <nav className="glass-strong sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 h-16">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="size-7 rounded-md" style={{ background: "var(--gradient-brand)" }} aria-hidden />
          <span className="font-display text-lg font-bold tracking-tight">Riolabz</span>
        </Link>
        <div className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/60">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className="hover:text-white transition-colors [&.active]:text-white"
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <Link
          to="/"
          hash="contact"
          className="group inline-flex items-center gap-1.5 px-4 py-2 bg-white text-obsidian text-sm font-semibold rounded-full hover:bg-cyber hover:text-white transition-all duration-300"
        >
          Start Your Project
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </nav>

      {/* HERO */}
      <header className="relative pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="glass inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-xs font-medium text-white/80 mb-8">
              <span className="size-2 rounded-full bg-cyber" />
              About Riolabz Technologies
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
              We engineer the <span className="gradient-text-brand">infrastructure</span> behind ambitious ideas.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed">
              Riolabz is a global software engineering studio. For over a decade we've partnered with
              startups, SMEs and enterprises across India, the UK and the USA — building digital
              products that scale, endure and win.
            </p>
          </div>
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="card-elevated rounded-3xl overflow-hidden aspect-square">
              <img src={aboutHero} alt="Global engineering network" className="w-full h-full object-cover" width={1600} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-4">
              <div className="text-3xl font-display font-bold gradient-text-brand">12+</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">Years engineering</div>
            </div>
          </div>
        </div>
      </header>

      {/* COMPANY STORY */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">01 — Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              A studio built by <span className="gradient-text">engineers</span>, for founders.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              Riolabz began in 2013 with a small team of engineers who believed software agencies had
              lost their soul — trading craft for spreadsheets, and product intuition for process.
            </p>
            <p>
              A decade later we've shipped over 300 products across fintech, healthcare, commerce and
              SaaS. But the ambition hasn't changed: build with the care of a founder, the discipline
              of an engineer, and the taste of a designer.
            </p>
            <p className="text-white/50">
              Today we operate across three continents — but every project is still touched by the
              same principle: <span className="text-white">the work should outlast us</span>.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-elevated card-elevated-hover rounded-3xl p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 size-64 rounded-full bg-cyber/20 blur-3xl group-hover:bg-cyber/30 transition-colors" />
            <Compass className="size-10 text-cyber mb-8 relative" strokeWidth={1.5} />
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3 relative">Mission</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6 relative">
              Empower every business to build software that moves the world forward.
            </h3>
            <p className="text-white/60 leading-relaxed relative">
              We exist to make world-class engineering accessible — so that a founder in Berlin, a CTO
              in Boston and a product lead in Bengaluru can all ship with the same quality.
            </p>
          </div>
          <div className="card-elevated card-elevated-hover rounded-3xl p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 size-64 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-colors" />
            <Telescope className="size-10 text-white mb-8 relative" strokeWidth={1.5} />
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3 relative">Vision</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6 relative">
              To be the most trusted engineering partner for the next generation of digital businesses.
            </h3>
            <p className="text-white/60 leading-relaxed relative">
              Not the biggest. Not the loudest. The most trusted — the studio founders call first when
              they're serious about shipping something that matters.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">02 — Core Values</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Six principles that <span className="gradient-text-brand">shape everything</span> we ship.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-elevated card-elevated-hover rounded-2xl p-8 group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="size-12 rounded-xl glass flex items-center justify-center group-hover:bg-cyber/20 transition-colors">
                    <v.icon className="size-5 text-cyber" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs text-white/30 font-mono">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">03 — Our Timeline</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Twelve years of <span className="gradient-text">quietly shipping</span>.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-4 rounded-full bg-cyber shadow-[0_0_20px_var(--cyber-glow)] relative z-10" />
                    <div className="font-display text-2xl font-bold gradient-text-brand">{t.year}</div>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
                  <div className="text-xs text-white/25 font-mono mt-4">0{i + 1} / 0{timeline.length}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">04 — Leadership</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
                The people behind the <span className="gradient-text-brand">craft</span>.
              </h2>
            </div>
            <p className="text-white/50 max-w-sm text-sm">
              A senior team of engineers, designers and operators who've built at global scale — and
              still care about the details.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((l) => (
              <div key={l.name} className="card-elevated card-elevated-hover rounded-2xl p-6 group">
                <div className="aspect-[4/5] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center"
                     style={{ background: "var(--gradient-brand)" }}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <span className="relative font-display text-6xl font-bold text-white/90 tracking-tighter">{l.initials}</span>
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-obsidian/80 to-transparent" />
                </div>
                <h3 className="font-display text-lg font-bold">{l.name}</h3>
                <div className="text-xs text-cyber font-medium mb-3">{l.role}</div>
                <p className="text-sm text-white/50 leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">05 — Global Presence</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-8">
              Three continents. <span className="gradient-text">One team.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              A follow-the-sun engineering model — when your team logs off, ours logs on. Continuous
              momentum, always in your timezone.
            </p>
            <div className="space-y-3">
              {regions.map((r) => (
                <div key={r.city} className="glass rounded-2xl p-5 flex items-center justify-between group hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg glass-strong flex items-center justify-center">
                      <MapPin className="size-4 text-cyber" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="font-display font-bold">{r.city}, <span className="text-white/60 font-medium">{r.country}</span></div>
                      <div className="text-xs text-white/40">{r.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-white/50">{r.tz}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="card-elevated rounded-3xl overflow-hidden aspect-square">
              <img src={aboutGlobe} alt="Global operations across India, UK and USA" loading="lazy" className="w-full h-full object-cover" width={1400} height={1200} />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS TRUST US */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">06 — Why Clients Trust Us</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              The proof isn't in <span className="gradient-text-brand">the pitch</span>. It's in the ship.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trust.map((t) => (
              <div key={t.title} className="card-elevated card-elevated-hover rounded-2xl p-8">
                <t.icon className="size-8 text-cyber mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold mb-3">{t.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center card-elevated"
               style={{ background: "var(--gradient-brand)" }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-32 -left-32 size-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-cyber/40 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02] max-w-4xl mx-auto text-white">
                Let's build something that outlasts us.
              </h2>
              <p className="mt-8 text-lg text-white/80 max-w-xl mx-auto">
                Book a 30-minute consultation with our engineering leadership. No decks. No sales.
                Just an honest conversation about your product.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  hash="contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-obsidian font-semibold rounded-full hover:bg-obsidian hover:text-white transition-all"
                >
                  Book a Consultation
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="mailto:hello@riolabz.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  <Mail className="size-4" />
                  hello@riolabz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="size-7 rounded-md" style={{ background: "var(--gradient-brand)" }} aria-hidden />
              <span className="font-display text-lg font-bold">Riolabz</span>
            </Link>
            <p className="text-sm text-white/50 max-w-sm mb-6">
              Global software engineering studio — India · United Kingdom · United States.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="size-9 rounded-full glass flex items-center justify-center hover:bg-cyber hover:text-white transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-white/60">
              {footerLinks.map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li>hello@riolabz.com</li>
              <li>Bengaluru · London · New York</li>
              <li>+91 · +44 · +1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Riolabz Technologies. All rights reserved.</div>
          <div>Crafted across India · UK · USA</div>
        </div>
      </footer>
    </div>
  );
}
