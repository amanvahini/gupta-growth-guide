import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mic,
  Play,
  Quote,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CTA } from "@/components/site/CTA";
import { Counter, Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  brands,
  clients,
  consultingServices,
  expertise,
  faqs,
  keynoteTopics,
  posts,
  site,
  stats,
  testimonials,
  whyInvite,
} from "@/data/site";
import heroImg from "@/assets/aman-hero.jpg";
import stage1 from "@/assets/stage-1.jpg";
import stage2 from "@/assets/stage-2.jpg";
import workshop1 from "@/assets/workshop-1.jpg";
import networking1 from "@/assets/networking-1.jpg";
import consulting1 from "@/assets/consulting-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Gupta — Keynote Speaker & Business Growth Consultant" },
      {
        name: "description",
        content:
          "Helping businesses build brands that people trust. Keynote speaking, corporate training and growth consulting in marketing, consumer psychology, leadership and AI.",
      },
      {
        property: "og:title",
        content: "Aman Gupta — Keynote Speaker & Business Growth Consultant",
      },
      {
        property: "og:description",
        content:
          "Business growth consultant, keynote speaker and marketing strategist helping organizations accelerate growth.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
  component: Home,
});

const galleryImages = [
  { src: stage1, alt: "Keynote address to a full auditorium", span: "lg:col-span-2" },
  { src: workshop1, alt: "Corporate marketing workshop in a boardroom", span: "" },
  { src: stage2, alt: "Speaking with a microphone at a college keynote", span: "" },
  { src: networking1, alt: "Networking after a corporate event", span: "" },
  { src: consulting1, alt: "Advisory session with a leadership team", span: "lg:col-span-2" },
];

function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-gold-soft pointer-events-none absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full blur-3xl" />
        <div className="container-editorial relative grid items-center gap-14 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Keynote Speaker · Growth Consultant · Corporate Trainer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[2.6rem] leading-[1.03] font-semibold text-balance sm:text-6xl lg:text-[4.1rem]"
            >
              Helping Businesses Build Brands That{" "}
              <span className="relative inline-block">
                People Trust
                <span className="bg-gold absolute inset-x-0 -bottom-1 h-[3px] origin-left" />
              </span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
            >
              Business Growth Consultant, Keynote Speaker and Marketing Strategist helping
              organizations accelerate growth using marketing, consumer psychology, leadership and
              AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <CTA href={site.calendar} external variant="gold">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </CTA>
              <CTA to="/speaking" variant="outline">
                Invite Me To Speak
              </CTA>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14"
            >
              <p className="eyebrow">Trusted by teams at</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
                {clients.map((c) => (
                  <span
                    key={c}
                    className="font-display text-muted-foreground hover:text-foreground text-sm font-medium tracking-tight transition-colors sm:text-base"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="border-border shadow-elevated relative overflow-hidden rounded-[2rem] border">
              <img
                src={heroImg}
                alt="Aman Gupta, business growth consultant and keynote speaker"
                width={1200}
                height={1504}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-card border-border shadow-elevated absolute -bottom-6 -left-4 rounded-2xl border p-5 sm:-left-8">
              <p className="font-display text-3xl font-semibold">
                <Counter value={100} suffix="+" />
              </p>
              <p className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                Sessions delivered
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Social proof marquee ───────────────────────────── */}
      <section className="bg-ink text-ink-foreground overflow-hidden py-8">
        <div className="flex w-max marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {clients.concat(clients).map((c, i) => (
                <span key={`${dup}-${c}-${i}`} className="flex items-center">
                  <span className="font-display px-8 text-lg font-medium opacity-80">{c}</span>
                  <span className="bg-gold h-1.5 w-1.5 rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── About story ────────────────────────────────────── */}
      <Section id="about">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="The story" title="From writing code to reading people." />
            <Reveal delay={0.1} className="mt-10">
              <img
                src={consulting1}
                alt="Aman Gupta advising a leadership team"
                loading="lazy"
                width={1400}
                height={933}
                className="border-border h-64 w-full rounded-3xl border object-cover"
              />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="text-muted-foreground space-y-6 text-base leading-relaxed sm:text-lg">
              <p>
                My first job was technical. I liked systems, logic and the comfort of a problem that
                had one correct answer. Then I moved into sales, and everything I believed about
                logic stopped working. People did not buy the better product. They bought the one
                they understood and trusted.
              </p>
              <p>
                That contradiction became the work of my life. I went deep into marketing, not the
                posters and posts version, but the part that studies why a person hesitates, why
                they compare, and what finally makes them decide. Marketing, I realised, is applied
                psychology with a budget attached.
              </p>
              <p>
                I built <span className="text-foreground font-medium">Arena Infosolution</span> to
                practise that belief with real money on the line. It grew into a team of more than a
                hundred people, and out of it came Arena Trainings, Arena Fincorp and Briwon
                Academy. Building companies taught me what no course could: strategy is easy,
                execution is people.
              </p>
              <p>
                Today I split my time between the stage, the boardroom and the training room. And I
                use AI in almost everything I do, not as a replacement for judgement, but as an
                amplifier of it. The businesses that will win the next decade are the ones that keep
                the human insight and let the machine carry the weight.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA to="/about" variant="outline">
                Read the full story <ArrowUpRight className="h-4 w-4" />
              </CTA>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Numbers ────────────────────────────────────────── */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="By the numbers"
          title="Experience measured in rooms, teams and results."
          align="center"
        />
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-gold text-5xl font-semibold sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug opacity-70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Expertise ──────────────────────────────────────── */}
      <Section tone="muted" id="expertise">
        <SectionHeading
          eyebrow="Areas of expertise"
          title="Ten subjects. One connected way of thinking about growth."
          intro="Every topic below is delivered as a keynote, a workshop or an advisory engagement — rebuilt each time around your market, your team and your numbers."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.06}>
              <div className="bg-background border-border group h-full border p-8 transition-colors duration-500 hover:bg-card">
                <span className="text-gold font-display text-xs tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{e.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Why invite ─────────────────────────────────────── */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Why organizations invite Aman"
            title="Sessions that change what happens on Monday morning."
            intro="Decision-makers do not need another motivational hour. They need clarity their teams can act on."
          />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyInvite.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="flex gap-4">
                  <span className="bg-gold-soft text-gold mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{w.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Speaking ───────────────────────────────────────── */}
      <Section tone="muted" id="speaking">
        <SectionHeading
          eyebrow="Speaking"
          title="Keynotes built for the room they are delivered in."
          intro="Corporate workshops, leadership sessions, business conferences, college keynotes and entrepreneur events — each with its own structure and outcome."
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
        <Reveal delay={0.1} className="mt-12">
          <CTA to="/speaking" variant="ink">
            See the speaking timeline <ArrowRight className="h-4 w-4" />
          </CTA>
        </Reveal>
      </Section>

      {/* ── Consulting ─────────────────────────────────────── */}
      <Section id="consulting">
        <SectionHeading
          eyebrow="Consulting"
          title="Advisory work with a written outcome attached."
          intro="Six engagements, each starting from a real business problem rather than a service menu."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {consultingServices.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <article className="border-border lift h-full rounded-3xl border p-8">
                <h3 className="text-xl font-semibold">{c.title}</h3>
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
                    <dd className="text-foreground mt-2 leading-relaxed font-medium">{c.outcome}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Brands created ─────────────────────────────────── */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Brands created"
          title="Advice built on companies actually operated."
          intro="Four ventures, each started from zero, each teaching a different lesson about growth."
        />
        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.06}>
              <div className="grid gap-6 py-10 lg:grid-cols-[0.4fr_1fr_0.5fr] lg:items-start">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{b.name}</h3>
                  <p className="text-gold mt-2 text-xs tracking-widest uppercase">{b.kind}</p>
                </div>
                <p className="text-sm leading-relaxed opacity-75 sm:text-base">{b.story}</p>
                <p className="text-sm font-medium">{b.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Testimonials"
          title="What the room says afterwards."
          align="center"
        />
        <Reveal delay={0.1} className="mt-14">
          <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.quote} className="md:basis-1/2">
                  <figure className="bg-background border-border flex h-full flex-col rounded-3xl border p-8">
                    <Quote className="text-gold h-6 w-6" />
                    <blockquote className="mt-5 flex-1 text-base leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="border-border mt-7 flex items-center gap-3 border-t pt-5">
                      <span className="bg-gold-soft text-gold flex h-10 w-10 items-center justify-center rounded-full">
                        {t.type === "Video" ? (
                          <Play className="h-4 w-4" />
                        ) : (
                          <Quote className="h-4 w-4" />
                        )}
                      </span>
                      <span>
                        <span className="block text-sm font-medium">{t.name}</span>
                        <span className="text-muted-foreground block text-xs">{t.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>
      </Section>

      {/* ── Gallery ────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="Stages, boardrooms and the moments in between."
        />
        <div className="mt-14 grid auto-rows-[14rem] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((g, i) => (
            <Reveal key={g.alt} delay={(i % 3) * 0.06} className={g.span}>
              <div className="group border-border h-full overflow-hidden rounded-3xl border">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Blog ───────────────────────────────────────────── */}
      <Section tone="muted" id="insights">
        <SectionHeading
          eyebrow="Insights"
          title="Notes on marketing, AI and building durable businesses."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link
                to="/blog"
                className="bg-background border-border lift flex h-full flex-col rounded-3xl border p-8"
              >
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-4 text-lg leading-snug font-semibold">{p.title}</h3>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                  {p.excerpt}
                </p>
                <span className="text-gold mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Read <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-12">
          <CTA to="/blog" variant="outline">
            All articles
          </CTA>
        </Reveal>
      </Section>

      {/* ── Podcast ────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <div className="border-border relative overflow-hidden rounded-[2rem] border p-10 lg:p-16">
            <div className="bg-gold-soft pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Sparkles className="text-gold h-4 w-4" /> Coming soon
              </p>
              <h2 className="mt-6 text-3xl font-semibold text-balance sm:text-4xl">
                A podcast about the unglamorous side of growth.
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Long conversations with founders and operators about what actually moved their
                numbers — the decisions, the mistakes and the systems nobody posts about. Launching
                soon. Join the list to hear the first episode.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/resources" variant="ink">
                  Join the waitlist
                </CTA>
                <CTA to="/contact" variant="outline">
                  Invite Aman as a guest
                </CTA>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <Section tone="muted" id="faq">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Practical answers before you write in." />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Section>

      {/* ── Contact CTA ────────────────────────────────────── */}
      <Section tone="ink" id="contact">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow text-ink-foreground/60">Contact</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
              Let&rsquo;s Build Something Meaningful Together.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed opacity-75">
              Tell me about the room, the team or the problem. You will get a considered reply
              within two working days — not a template.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-wrap gap-3">
            <CTA href={site.calendar} external variant="gold">
              Book Consultation
            </CTA>
            <CTA to="/speaking" variant="outline" className="border-white/25 hover:border-gold">
              Invite for Speaking
            </CTA>
            <CTA
              to="/corporate-training"
              variant="outline"
              className="border-white/25 hover:border-gold"
            >
              Corporate Training
            </CTA>
            <CTA
              href={site.whatsapp}
              external
              variant="outline"
              className="border-white/25 hover:border-gold"
            >
              WhatsApp
            </CTA>
            <CTA
              href={site.linkedin}
              external
              variant="outline"
              className="border-white/25 hover:border-gold"
            >
              LinkedIn
            </CTA>
            <CTA
              href={`mailto:${site.email}`}
              variant="outline"
              className="border-white/25 hover:border-gold"
            >
              Email
            </CTA>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
