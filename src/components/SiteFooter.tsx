import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-foreground px-6 md:px-10 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-6">
            <span className="font-display text-2xl font-bold lowercase" style={{ color: "oklch(0.68 0.18 250)", letterSpacing: "-0.04em" }}>riolabz</span>
          </Link>
          <p className="text-sm text-white/50 max-w-sm mb-6">
            A global software engineering studio building digital products for
            startups, SMEs and enterprises across India, the United Kingdom and the United States.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="size-9 rounded-full glass flex items-center justify-center hover:bg-cyber hover:text-white transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Explore</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2"><Mail className="size-4 text-cyber" /> hello@riolabz.com</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-cyber" /> +91 · +44 · +1</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-cyber" /> Bengaluru · London · New York</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <div>© {new Date().getFullYear()} Riolabz Technologies. All rights reserved.</div>
        <div className="flex gap-6"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Cookies</a></div>
        <div className="font-mono tracking-[0.22em] uppercase">India · UK · USA</div>
      </div>
    </footer>
  );
}
