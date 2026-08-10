import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { expertise, site } from "@/data/site";
import workshop1 from "@/assets/workshop-1.jpg";

export const Route = createFileRoute("/corporate-training")({
  head: () => ({
    meta: [
      { title: "Corporate Training Programmes — Aman Gupta" },
      {
        name: "description",
        content:
          "Corporate training in marketing, sales psychology, leadership and AI at work. Half-day workshops to multi-day programmes, customised to your team and market.",
      },
      { property: "og:title", content: "Corporate Training Programmes — Aman Gupta" },
      {
        property: "og:description",
        content: "Marketing, sales psychology, leadership and AI training for corporate teams.",
      },
      { property: "og:url", content: "/corporate-training" },
    ],
    links: [{ rel: "canonical", href: "/corporate-training" }],
  }),
  component: Training,
});

const programmes = [
  {
    title: "Marketing That Converts",
    duration: "1 day",
    who: "Marketing teams",
    modules: ["Customer research", "Positioning", "Message house", "Channel economics"],
  },
  {
    title: "Sales Psychology",
    duration: "1 day",
    who: "Sales and BD teams",
    modules: ["Qualification", "Objection handling", "Trust signals", "Pipeline discipline"],
  },
  {
    title: "AI At Work",
    duration: "1–2 days",
    who: "Cross-functional teams",
    modules: ["Use case mapping", "Prompt systems", "Guardrails", "Workflow rollout"],
  },
  {
    title: "Leaders Who Build Leaders",
    duration: "Half day",
    who: "Managers and heads",
    modules: ["Delegation", "Standards", "Feedback", "Performance rhythm"],
  },
  {
    title: "Hiring & Team Building",
    duration: "Half day",
    who: "HR and L&D",
    modules: ["Scorecards", "Behavioural interviews", "Onboarding", "Retention"],
  },
  {
    title: "Brand Storytelling",
    duration: "Half day",
    who: "Founders and comms",
    modules: ["Narrative", "Proof", "Presentation", "Public speaking"],
  },
];

function Training() {
  return (
    <>
      <PageHero
        crumb="Corporate Training"
        eyebrow="Corporate training"
        title="Training your team will still be using next quarter."
        intro="Programmes rebuilt around your products, your market and your numbers — with exercises, templates and a written 90-day plan."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <article className="border-border lift flex h-full flex-col rounded-3xl border p-8">
                <p className="eyebrow">{p.who}</p>
                <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.modules.map((m) => (
                    <li key={m} className="text-muted-foreground flex items-center gap-2 text-sm">
                      <Check className="text-gold h-3.5 w-3.5 shrink-0" /> {m}
                    </li>
                  ))}
                </ul>
                <p className="text-gold mt-6 text-xs tracking-widest uppercase">{p.duration}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={workshop1}
              alt="Corporate training workshop in progress"
              loading="lazy"
              width={1400}
              height={933}
              className="border-border shadow-elevated w-full rounded-[2rem] border object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Delivery"
              title="Built for HR and L&D teams who are measured on outcomes."
              intro="Every programme includes a pre-session discovery call, customised material, in-room exercises and a post-session action plan you can audit."
            />
            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
              <CTA href={site.calendar} external variant="gold">
                Request a proposal
              </CTA>
              <CTA to="/resources" variant="outline">
                Download brochure
              </CTA>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Subjects covered" title="Ten topics available in every format." />
        <div className="mt-12 flex flex-wrap gap-3">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.03}>
              <span className="border-border hover:border-gold rounded-full border px-5 py-2.5 text-sm transition-colors">
                {e.title}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
