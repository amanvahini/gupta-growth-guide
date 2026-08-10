import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Newsletter({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setDone(true);
    setEmail("");
    toast.success("You're on the list. Thank you for subscribing.");
  }

  const field =
    tone === "dark"
      ? "border-white/20 bg-white/5 placeholder:text-white/40 text-inherit"
      : "border-border bg-background placeholder:text-muted-foreground";

  return (
    <form onSubmit={submit} className="mt-6 flex items-center gap-2">
      <label className="sr-only" htmlFor={`newsletter-${tone}`}>
        Email address
      </label>
      <input
        id={`newsletter-${tone}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={`focus:border-gold h-11 w-full rounded-full border px-5 text-sm transition-colors outline-none ${field}`}
      />
      <button
        type="submit"
        aria-label="Subscribe to the newsletter"
        className="bg-gold text-ink inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
      >
        {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
