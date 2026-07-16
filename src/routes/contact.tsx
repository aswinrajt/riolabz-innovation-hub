import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Riolabz Technologies" },
      { name: "description", content: "Book a consultation with Riolabz. We respond within 24 hours." },
      { property: "og:title", content: "Contact Riolabz" },
      { property: "og:description", content: "Start a conversation with our engineering leadership." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const offices = [
  { city: "Bengaluru", country: "India", tz: "GMT +5:30" },
  { city: "London", country: "United Kingdom", tz: "GMT +0:00" },
  { city: "New York", country: "USA", tz: "GMT −5:00" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans overflow-x-hidden">
      <SiteHeader />
      <section className="relative pt-20 md:pt-28 pb-16 px-6 md:px-10 overflow-hidden animated-gradient">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            Let's talk about <span className="gradient-text-brand">your product</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
            Share what you're building. We'll respond within 24 hours with an honest read on scope,
            timeline and next steps.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12">
          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="card-elevated rounded-3xl p-8 md:p-12 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full name" placeholder="Alex Rivera" />
              <Field label="Work email" placeholder="alex@company.com" type="email" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Company" placeholder="Acme Inc." />
              <Field label="Budget" placeholder="$25k — $100k" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">Tell us about your project</label>
              <textarea rows={5} placeholder="What are you building? Where are you today?" className="mt-2 w-full rounded-xl glass bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyber transition-colors" />
            </div>
            <button className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-obsidian font-semibold rounded-full hover:bg-cyber hover:text-white transition-all">
              Send message
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="card-elevated rounded-2xl p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-5">Direct</div>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><Mail className="size-4 text-cyber" /> hello@riolabz.com</li>
                <li className="flex items-center gap-3"><Phone className="size-4 text-cyber" /> +91 · +44 · +1</li>
              </ul>
            </div>
            <div className="card-elevated rounded-2xl p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-cyber font-medium mb-5">Offices</div>
              <ul className="space-y-4">
                {offices.map((o) => (
                  <li key={o.city} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-3"><MapPin className="size-4 text-cyber" /><span className="font-display font-bold">{o.city}, <span className="text-white/60 font-medium">{o.country}</span></span></span>
                    <span className="font-mono text-white/40 text-xs">{o.tz}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">{label}</label>
      <input {...props} className="mt-2 w-full rounded-xl glass bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyber transition-colors" />
    </div>
  );
}
