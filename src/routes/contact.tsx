import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Linkedin, Mail, MessageCircle, Mic, Presentation } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { faqs, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aman Gupta — Speaking, Training & Consulting Enquiries" },
      {
        name: "description",
        content:
          "Enquire about keynote speaking, corporate training or growth consulting. Book a consultation, message on WhatsApp or send an email.",
      },
      { property: "og:title", content: "Contact Aman Gupta" },
      {
        property: "og:description",
        content: "Speaking, corporate training and consulting enquiries.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Contact,
});

const intents = ["Keynote speaking", "Corporate training", "Consulting", "Podcast / media"];

function Contact() {
  const [intent, setIntent] = useState(intents[0]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Enquiry noted", {
      description: "Thank you. You'll receive a reply within two working days.",
    });
    e.currentTarget.reset();
  }

  const field =
    "border-border bg-background focus:border-gold h-12 w-full rounded-xl border px-4 text-sm outline-none transition-colors";

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title="Let's Build Something Meaningful Together."
        intro="Tell me about the room, the team or the problem. Every enquiry gets a considered, personal reply."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input id="name" name="name" required className={`${field} mt-3`} />
                </div>
                <div>
                  <label htmlFor="org" className="eyebrow">
                    Organization
                  </label>
                  <input id="org" name="org" className={`${field} mt-3`} />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`${field} mt-3`}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow">
                    Phone
                  </label>
                  <input id="phone" name="phone" className={`${field} mt-3`} />
                </div>
              </div>

              <fieldset>
                <legend className="eyebrow">What is this about?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {intents.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIntent(i)}
                      aria-pressed={intent === i}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        intent === i
                          ? "border-gold bg-gold-soft text-foreground"
                          : "border-border hover:border-gold"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Audience, dates, city, outcome you want."
                  className="border-border bg-background focus:border-gold mt-3 w-full rounded-2xl border p-4 text-sm outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="bg-gold text-ink shadow-soft inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Send enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-border rounded-3xl border p-8">
              <p className="eyebrow">Faster routes</p>
              <div className="mt-6 grid gap-3">
                <a
                  href={site.calendar}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-primary text-primary-foreground inline-flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium"
                >
                  <CalendarCheck className="h-4 w-4" /> Book a consultation
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-border hover:border-gold inline-flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-medium transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="border-border hover:border-gold inline-flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-medium transition-colors"
                >
                  <Mail className="h-4 w-4" /> {site.email}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-border hover:border-gold inline-flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-medium transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <div className="border-border mt-8 border-t pt-6">
                <p className="eyebrow">Also available for</p>
                <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Mic className="text-gold h-4 w-4" /> Keynotes and conference panels
                  </li>
                  <li className="flex items-center gap-3">
                    <Presentation className="text-gold h-4 w-4" /> Corporate and campus workshops
                  </li>
                </ul>
                <p className="text-muted-foreground mt-6 text-xs">{site.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
