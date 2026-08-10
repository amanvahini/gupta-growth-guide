import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights on Marketing, AI & Business Growth — Aman Gupta" },
      {
        name: "description",
        content:
          "Articles on marketing, consumer psychology, AI adoption, leadership, SEO and building businesses that compound.",
      },
      { property: "og:title", content: "Insights on Marketing, AI & Business Growth" },
      {
        property: "og:description",
        content: "Notes on marketing psychology, AI adoption, leadership and growth.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Insights"
        title="Ideas worth the time they take to read."
        intro="Marketing, AI, business, leadership, consumer psychology and SEO — written plainly, from practice."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.07}>
              <article className="border-border lift flex h-full flex-col rounded-3xl border p-8">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{p.category}</p>
                  <time className="text-muted-foreground text-xs" dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-4 text-lg leading-snug font-semibold">{p.title}</h2>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                  {p.excerpt}
                </p>
                <p className="text-gold mt-6 text-sm font-medium">Full article coming soon</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="One considered note each month."
            intro="No daily noise. One email with a single idea you can apply to your business."
            align="center"
          />
          <div className="mx-auto mt-2 max-w-sm">
            <Newsletter />
          </div>
        </div>
      </Section>
    </>
  );
}
