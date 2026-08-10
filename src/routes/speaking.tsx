import { createFileRoute } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { clients, keynoteTopics, site, timeline, whyInvite } from "@/data/site";
import stage1 from "@/assets/stage-1.jpg";
import stage2 from "@/assets/stage-2.jpg";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Keynote Speaker — Invite Aman Gupta To Speak" },
      {
        name: "description",
        content:
          "Book Aman Gupta for conference keynotes, leadership sessions, college keynotes and entrepreneur events on marketing, consumer psychology, growth and AI.",
      },
      { property: "og:title", content: "Keynote Speaker — Invite Aman Gupta To Speak" },
      {
        property: "og:description",
        content: "Keynotes on marketing psychology, business growth, leadership and AI.",
      },
      { property: "og:url", content: "/speaking" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/speaking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Keynote by Aman Gupta",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          description:
            "Keynote sessions on marketing psychology, business growth, leadership and AI for business.",
          performer: { "@type": "Person", name: "Aman Gupta" },
          organizer: { "@type": "Person", name: "Aman Gupta" },
          location: { "@type": "Place", name: "Corporate venues and conferences across India" },
        }),
      },
    ],
  }),
  component: Speaking,
});

function Speaking() {
  return (
    <>
      <PageHero
        crumb="Speaking"
        eyebrow="Keynote speaking"
        title="A room that leaves with decisions, not just notes."
        intro="Over 100 sessions across conferences, boardrooms and campuses — the largest to an audience of more than 200."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <img
              src={stage1}
              alt="Keynote delivered to a full auditorium"
              loading="lazy"
              width={1400}
              height={933}
              className="border-border h-72 w-full rounded-3xl border object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={stage2}
              alt="Speaking with a microphone to a college audience"
              loading="lazy"
              width={933}
              height={1200}
              className="border-border h-72 w-full rounded-3xl border object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Sample keynotes"
          title="Six formats, matched to six kinds of room."
          intro="Every session is rewritten around the audience, the industry and the outcome the host wants."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keynoteTopics.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.07}>
              <article className="bg-background border-border lift flex h-full flex-col rounded-3xl border p-8">
                <p className="eyebrow">{t.audience}</p>
                <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">{t.body}</p>
                <p className="text-gold mt-6 flex items-center gap-2 text-xs tracking-widest uppercase">
                  <Mic className="h-3.5 w-3.5" /> {t.duration}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="How the speaking work grew." />
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

      <Section tone="ink">
        <SectionHeading
          eyebrow="Why organizations invite Aman"
          title="What event teams get, beyond a speaker."
        />
        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyInvite.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.06}>
              <h3 className="text-base font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{w.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-3">
          <CTA href={site.calendar} external variant="gold">
            Check availability
          </CTA>
          <CTA to="/resources" variant="outline" className="border-white/25 hover:border-gold">
            Download speaker profile
          </CTA>
        </Reveal>
        <p className="mt-10 text-xs tracking-widest uppercase opacity-50">
          Past audiences: {clients.join(" · ")}
        </p>
      </Section>
    </>
  );
}
