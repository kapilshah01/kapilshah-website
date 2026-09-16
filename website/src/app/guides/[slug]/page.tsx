import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/content/article-body";
import { ArticleHeader } from "@/components/content/article-header";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { CommentsSection } from "@/components/content/comments-section";
import { RelatedArticles } from "@/components/content/related-articles";
import { TableOfContents } from "@/components/content/table-of-contents";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getAllArticles, getArticleBySlug, getPillar, getRelatedArticles } from "@/lib/content";
import { articleSchema, breadcrumbSchema, structuredData } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() { return getAllArticles().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const article = getArticleBySlug(slug); if (!article) return {}; const canonical = article.canonicalUrl ?? `/guides/${article.slug}`; return { title: article.title, description: article.description, alternates: { canonical }, openGraph: { type: "article", title: article.title, description: article.description, url: canonical, publishedTime: article.publishedAt, modifiedTime: article.updatedAt ?? article.publishedAt } }; }
export default async function GuidePage({ params }: Props) { const { slug } = await params; const article = getArticleBySlug(slug); if (!article) notFound(); const { Content } = article; return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData(articleSchema(article)) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData(breadcrumbSchema(article)) }} /><Section><Container className="max-w-4xl"><Breadcrumbs current={article.title} category={getPillar(article.category).label} /><div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12"><article><ArticleHeader article={article} /><ArticleBody><Content /></ArticleBody><RelatedArticles articles={getRelatedArticles(article)} /><CommentsSection articleSlug={article.slug} /></article><div className="mt-10 lg:mt-0"><TableOfContents /></div></div></Container></Section></main>; }
