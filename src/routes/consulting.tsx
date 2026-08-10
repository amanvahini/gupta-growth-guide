import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { consultingServices, site } from "@/data/site";
import consulting1 from "@/assets/consulting-1.jpg";

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "Business Growth Consulting — Aman Gupta" },
      {
        name: "description",
        content:
          "Growth strategy, brand positioning, marketing consulting, AI adoption, leadership advisory and growth systems for founders and leadership teams.",
      },
      { property: "og:title", content: "Business Growth Consulting — Aman Gupta" },
      {
        property: "og:description",
        content: "Advisory engagements with written outcomes for founders and leadership teams.",
      },
      { property: "og:url", content: "/consulting" },
    ],
    links: [{ rel: "canonical", href: "/consulting" }],
  }),
  component: Consulting,
});

const process = [
  { step: "01", title: "Diagnostic", body: "Two to three weeks inside the numbers, the funnel and the team. No recommendations before evidence." },
  { step: "02", title: "Plan", body: "A written growth plan: the constraint, the sequence, the owners and the targets." },
  { step: "03", title: "Build", body: "Sprints to install what the plan calls for — positioning, campaigns, systems, hires." },
  { step: "04", title: "Review", body: "A monthly rhythm where numbers are read honestly and the plan is corrected." },
];

function Consulting() {
  return (
    <>
      <PageHero
        crumb="Consulting"
        eyebrow="Consulting"
        title="Growth advice that survives contact with your P&L."
        intro="Engagements for founders and leadership teams who want a plan they can execute, not a deck they will file."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {consultingServices.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <article className="border-border lift h-full rounded-3xl border p-8">
                <h2 className="text-xl font-semibold">{c.title}</h2>
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="eyebrow">Challenge</dt>
                    <dd className="text-muted-foreground mt-2 leading-relaxed">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Approach</dt>
                    <dd className="text-muted-foreground mt-2 leading-relaxed">{c.approach}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Outcome</dt>
                    <dd className="mt-2 leading-relaxed font-medium">{c.outcome}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="How it works" title="Four stages. No surprises." />
            <div className="mt-12 space-y-8">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.07}>
                  <div className="flex gap-6">
                    <span className="font-display text-gold text-sm tracking-widest">{p.step}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.12}>
            <img
              src={consulting1}
              alt="Consulting session with a leadership team"
              loading="lazy"
              width={1400}
              height={933}
              className="border-border shadow-elevated w-full rounded-[2rem] border object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Start with a diagnostic. Decide after you see the evidence.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed opacity-75">
              Most engagements begin with a paid diagnostic. If the findings do not justify further
              work, you keep the plan and we part on good terms.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            <CTA href={site.calendar} external variant="gold">
              Book a consultation
            </CTA>
            <CTA to="/contact" variant="outline" className="border-white/25 hover:border-gold">
              Send an enquiry
            </CTA>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
