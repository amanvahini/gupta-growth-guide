import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumb: string;
}) {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="bg-gold-soft pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="container-editorial relative py-20 lg:py-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-muted-foreground flex items-center gap-2 text-xs">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{crumb}</span>
          </nav>
          <p className="eyebrow mt-8">{eyebrow}</p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
