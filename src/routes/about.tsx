import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { Counter, Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";
import { brands, site, stats, timeline } from "@/data/site";
import portrait from "@/assets/aman-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aman Gupta — Marketing Strategist & Entrepreneur" },
      {
        name: "description",
        content:
          "The story behind Aman Gupta: a technical start, a move into sales, a career in marketing psychology, and four businesses built from zero.",
      },
      { property: "og:title", content: "About Aman Gupta — Marketing Strategist & Entrepreneur" },
      {
        property: "og:description",
        content: "A technical start, a move into sales, and four businesses built from zero.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategy is easy. Execution is people."
        intro="I build brands, teams and growth systems — and I talk about how it actually works, without the theatre."
        crumb="About"
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="text-muted-foreground space-y-6 text-base leading-relaxed sm:text-lg">
              <p>
                I started out on the technical side. Systems made sense to me: define the input,
                trace the logic, get a predictable result. I assumed business worked the same way
                until I moved into sales and watched the better product lose, repeatedly, to the one
                that was easier to trust.
              </p>
              <p>
                That was the education. I stopped trying to argue people into decisions and started
                studying how decisions are actually made — what creates hesitation, what creates
                confidence, and why a familiar name beats a superior spec sheet almost every time.
                Marketing stopped being decoration and became the most interesting subject I had
                ever touched.
              </p>
              <p>
                I built <span className="text-foreground font-medium">Arena Infosolution</span> to
                test that thinking with real money at stake. It grew past a hundred people, and
                every one of those hires taught me something a case study could not: how standards
                spread, how culture decays quietly, and how a founder becomes the bottleneck without
                noticing.
              </p>
              <p>
                Arena Trainings, Arena Fincorp and Briwon Academy followed — each one a different
                market, a different customer psychology, the same underlying discipline. Somewhere
                in that decade, the stage found me. A single talk turned into a hundred sessions
                across boardrooms, conferences and campuses.
              </p>
              <p>
                Two beliefs run through all of it. Marketing is psychology, and it always was. And
                AI does not replace human capability — it amplifies whatever capability is already
                there. Sharp thinking gets sharper. Sloppy thinking scales its mistakes.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA href={site.calendar} external variant="gold">
                Work with Aman
              </CTA>
              <CTA to="/speaking" variant="outline">
                Speaking topics
              </CTA>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <img
              src={portrait}
              alt="Portrait of Aman Gupta"
              loading="lazy"
              width={1200}
              height={1504}
              className="border-border shadow-elevated w-full rounded-[2rem] border object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading eyebrow="By the numbers" title="A decade, counted honestly." align="center" />
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-gold text-5xl font-semibold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug opacity-70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Journey" title="How the work took shape." />
        <div className="border-border mt-14 border-l pl-8 sm:pl-12">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06}>
              <div className="relative pb-12 last:pb-0">
                <span className="bg-gold absolute top-2 -left-[2.6rem] h-2.5 w-2.5 rounded-full sm:-left-[3.6rem]" />
                <p className="font-display text-gold text-sm tracking-widest">{t.year}</p>
                <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Ventures" title="Four brands, built from zero." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={(i % 2) * 0.08}>
              <article className="border-border lift h-full rounded-3xl border p-8">
                <p className="eyebrow">{b.kind}</p>
                <h3 className="mt-3 text-2xl font-semibold">{b.name}</h3>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{b.story}</p>
                <p className="text-gold mt-5 text-sm font-medium">{b.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
