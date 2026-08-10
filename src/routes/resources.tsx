import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { resources } from "@/data/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resource Library — Speaker Profile & Corporate Brochure" },
      {
        name: "description",
        content:
          "Download the speaker profile, corporate training brochure, growth diagnostic worksheet, AI adoption checklist and other working templates.",
      },
      { property: "og:title", content: "Resource Library — Aman Gupta" },
      {
        property: "og:description",
        content: "Speaker profile, training brochure and free working templates.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

function Resources() {
  function request(title: string) {
    toast.success(`${title} requested`, {
      description: "Send your email through the contact page and the file arrives within minutes.",
    });
  }

  return (
    <>
      <PageHero
        crumb="Resources"
        eyebrow="Resource library"
        title="Everything an event team or L&D head asks for."
        intro="Profiles, brochures and the actual worksheets used inside consulting engagements."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.07}>
              <article className="border-border lift flex h-full flex-col rounded-3xl border p-8">
                <span className="bg-gold-soft text-gold flex h-11 w-11 items-center justify-center rounded-full">
                  <FileText className="h-5 w-5" />
                </span>
                <p className="eyebrow mt-6">{r.format}</p>
                <h2 className="mt-2 text-xl font-semibold">{r.title}</h2>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">{r.body}</p>
                <button
                  type="button"
                  onClick={() => request(r.title)}
                  className="border-border hover:border-gold mt-6 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  <Download className="h-4 w-4" /> Download
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Newsletter"
              title="New templates land in the monthly note."
              intro="Join business owners and marketing leaders who get one practical idea each month."
            />
          </div>
          <Reveal delay={0.1} className="max-w-sm lg:justify-self-end">
            <Newsletter tone="dark" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
