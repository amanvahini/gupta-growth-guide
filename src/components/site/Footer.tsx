import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { nav, site } from "@/data/site";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-editorial py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Let&rsquo;s build something
              <span className="text-gold"> meaningful</span> together.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-70">{site.role}</p>
            <div className="mt-8 space-y-3 text-sm opacity-80">
              <p className="flex items-center gap-3">
                <MapPin className="text-gold h-4 w-4" /> {site.location}
              </p>
              <a href={`mailto:${site.email}`} className="hover:text-gold flex items-center gap-3">
                <Mail className="text-gold h-4 w-4" /> {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-gold flex items-center gap-3"
              >
                <Linkedin className="text-gold h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-ink-foreground/60">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-gold opacity-80 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink-foreground/60">Newsletter</p>
            <p className="mt-6 text-sm leading-relaxed opacity-75">
              One considered note each month on marketing, AI and building durable businesses.
            </p>
            <Newsletter tone="dark" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Keynote Speaker · Business Growth Consultant · Corporate Trainer</p>
        </div>
      </div>
    </footer>
  );
}
