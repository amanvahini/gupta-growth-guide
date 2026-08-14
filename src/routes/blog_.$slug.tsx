import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar, User, Share2, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return {};
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Aman Gupta` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author || "Aman Gupta",
            },
            datePublished: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://growth.briwon.com/blog/${post.slug}`,
            },
          }),
        },
      ],
    };
  },
  component: BlogPostDetail,
});

function BlogPostDetail() {
  const { post } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Render article content with clean styling for headings, paragraphs, lists, and quotes
  const renderFormattedContent = (content: string) => {
    const blocks = content.trim().split("\n\n");

    return blocks.map((block, idx) => {
      const trimmed = block.trim();

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="font-display text-foreground mt-10 mb-4 text-2xl font-bold tracking-tight">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="font-display text-foreground mt-8 mb-3 text-xl font-semibold">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      if (trimmed.startsWith("---")) {
        return <hr key={idx} className="border-border my-10" />;
      }

      if (trimmed.startsWith("> ")) {
        return (
          <blockquote key={idx} className="border-gold/60 bg-muted/40 my-6 border-l-4 p-6 rounded-r-2xl italic text-foreground/90 font-medium">
            {trimmed.replace("> ", "").replace(/"/g, "")}
          </blockquote>
        );
      }

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").map((item) => item.replace(/^[-*]\s+/, ""));
        return (
          <ul key={idx} className="my-5 space-y-2.5 pl-6 list-disc text-muted-foreground leading-relaxed">
            {items.map((it, iIdx) => (
              <li key={iIdx}>
                {parseMarkdownInline(it)}
              </li>
            ))}
          </ul>
        );
      }

      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split("\n").map((item) => item.replace(/^\d+\.\s+/, ""));
        return (
          <ol key={idx} className="my-5 space-y-2.5 pl-6 list-decimal text-muted-foreground leading-relaxed">
            {items.map((it, iIdx) => (
              <li key={iIdx}>
                {parseMarkdownInline(it)}
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={idx} className="text-muted-foreground my-4 text-base leading-relaxed">
          {parseMarkdownInline(trimmed)}
        </p>
      );
    });
  };

  // Helper to parse **bold** and `code` inline markdown strings
  const parseMarkdownInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\`.*?\`|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={i} className="bg-muted text-gold font-mono rounded px-1.5 py-0.5 text-xs">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={i} className="italic text-foreground">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <>
      <Section className="pb-4">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="text-muted-foreground hover:text-gold inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </Section>

      <PageHero
        crumb={`Blog / ${post.category}`}
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
      />

      <Section className="py-4">
        <div className="border-border/60 mx-auto max-w-4xl border-y py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2 text-foreground font-medium">
                <User className="text-gold h-4 w-4" /> {post.author || "Aman Gupta"}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="border-border hover:border-gold hover:text-gold inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Share2 className="h-3.5 w-3.5" />}
              {copied ? "Link Copied" : "Share Article"}
            </button>
          </div>
        </div>
      </Section>

      <Section className="pt-8 pb-16">
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {renderFormattedContent(post.content)}
          </article>

          {/* Author Box */}
          <div className="border-border bg-muted/30 mt-16 rounded-3xl border p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="bg-primary/20 text-gold flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-xl font-bold">
                AG
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">Written by Aman Gupta</h4>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Business Growth Consultant, Keynote Speaker & Marketing Strategist. Advising leadership teams on marketing psychology, sustainable revenue systems, and AI adoption.
                </p>
                <div className="mt-4 flex gap-4 text-xs font-medium">
                  <Link to="/about" className="text-gold hover:underline">
                    About Aman &rarr;
                  </Link>
                  <Link to="/consulting" className="text-gold hover:underline">
                    Consulting Services &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <Section tone="muted">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="More Insights"
              title="Continue reading"
              intro="More practical notes on marketing, psychology, leadership, and business scale."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {otherPosts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.07}>
                  <Link
                    to="/blog_/$slug"
                    params={{ slug: p.slug }}
                    className="border-border bg-background lift flex h-full flex-col rounded-3xl border p-6 hover:border-gold/50 transition-colors"
                  >
                    <p className="eyebrow text-xs">{p.category}</p>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 flex-1 text-xs leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                    <span className="text-gold mt-4 inline-flex items-center gap-1 text-xs font-medium">
                      Read article &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Newsletter */}
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="One considered note each month."
            intro="No daily noise. One email with a single idea you can apply to your business."
            align="center"
          />
          <div className="mx-auto mt-6 max-w-sm">
            <Newsletter />
          </div>
        </div>
      </Section>
    </>
  );
}
