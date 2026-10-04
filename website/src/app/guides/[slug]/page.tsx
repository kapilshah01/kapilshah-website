import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckSquare } from "lucide-react";
import { ArticleBody } from "@/components/content/article-body";
import { ArticleHeader } from "@/components/content/article-header";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { CommentsSection } from "@/components/content/comments-section";
import { RelatedArticles } from "@/components/content/related-articles";
import { TableOfContents } from "@/components/content/table-of-contents";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { searchIndex } from "@/data/search-index";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/content";
import { articleSchema, breadcrumbSchema, canonicalUrl, structuredData } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonical = canonicalUrl(`/guides/${article.slug}`);
  const title = article.seoTitle ?? article.title;
  const cover = article.coverImage;

  return {
    title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description: article.description,
      url: canonical,
      siteName: "Kapil Shah",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      ...(cover
        ? {
            images: [
              {
                url: canonicalUrl(cover.src),
                alt: cover.alt,
                width: cover.width,
                height: cover.height,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: cover ? "summary_large_image" : "summary",
      title,
      description: article.description,
      ...(cover ? { images: [canonicalUrl(cover.src)] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { Content } = article;

  const searchItem = searchIndex.find((item) => item.slug === slug);
  const headings = searchItem?.headings ?? [];

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(articleSchema(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(breadcrumbSchema(article)) }}
      />
      <Section className="py-8 sm:py-12">
        <Container className="max-w-5xl">
          <Breadcrumbs article={article} />

          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
            <article className="min-w-0">
              <ArticleHeader article={article} />

              <ArticleBody>
                <Content />
              </ArticleBody>

              {/* Actionable Toolkit CTA callout */}
              <div className="mt-12 rounded-xl border border-primary/25 bg-primary/5 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <CheckSquare className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-foreground sm:text-lg">
                      Ready to verify your small-business security baseline?
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      Track your progress across 25 foundational controls with our interactive, browser-saved checklist. Designed specifically for operations leads and small teams without an IT security department.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="/checklist"
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Launch Interactive Checklist &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <RelatedArticles articles={getRelatedArticles(article)} />

              <CommentsSection articleSlug={article.slug} />
            </article>

            <div className="mt-10 lg:mt-0">
              <TableOfContents headings={headings} />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
