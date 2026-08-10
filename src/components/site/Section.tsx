import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <span className={`gold-rule mt-4 ${align === "center" ? "mx-auto" : ""}`} />
      <h2 className="mt-6 text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  tone = "default",
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "default" | "muted" | "ink";
  className?: string;
}) {
  const tones = {
    default: "bg-background",
    muted: "bg-secondary",
    ink: "bg-ink text-ink-foreground",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="container-editorial">{children}</div>
    </section>
  );
}
