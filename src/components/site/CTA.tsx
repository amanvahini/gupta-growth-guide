import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "gold" | "ink" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:brightness-105 hover:-translate-y-0.5 shadow-soft",
  ink: "bg-primary text-primary-foreground hover:-translate-y-0.5 shadow-soft",
  outline: "border border-border hover:border-gold hover:-translate-y-0.5",
  ghost: "hover:text-gold",
};

export function CTA({
  to,
  href,
  variant = "gold",
  children,
  className = "",
  external,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}
