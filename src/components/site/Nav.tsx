import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { CTA } from "./CTA";

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("ag-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("ag-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="border-border hover:border-gold inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
    >
      {mounted && dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 border-border border-b backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex h-18 items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="bg-gold text-ink font-display flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold">
            AG
          </span>
          <span className="font-display text-base leading-none font-semibold tracking-tight">
            {site.name}
            <span className="text-muted-foreground mt-1 block text-[0.62rem] font-normal tracking-[0.18em] uppercase">
              Growth · Speaking
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {nav.slice(1, 7).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground hover:text-foreground data-[status=active]:text-foreground relative text-sm transition-colors data-[status=active]:font-medium"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CTA to="/contact" variant="ink" className="hidden px-5 py-2.5 sm:inline-flex">
            Book a Consultation
          </CTA>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="border-border inline-flex h-10 w-10 items-center justify-center rounded-full border xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="bg-background/97 border-border border-t backdrop-blur-xl xl:hidden">
          <div className="container-editorial grid gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="hover:text-gold border-border/60 border-b py-3 text-lg font-medium transition-colors last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
