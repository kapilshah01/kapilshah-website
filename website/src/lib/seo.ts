import type { Article } from "@/types/content";

const siteUrl = "https://kapilshah.com.np";
export const canonicalUrl = (path: string) => new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
export function structuredData(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }
export const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Kapil Shah", url: siteUrl, description: "Practical cybersecurity guidance for small businesses without a security team." };
export const authorSchema = { "@context": "https://schema.org", "@type": "Person", name: "Kapil Shah", url: canonicalUrl("/about") };
export const profilePageSchema = { "@context": "https://schema.org", "@type": "ProfilePage", dateCreated: "2026-09-27", dateModified: "2026-09-27", mainEntity: authorSchema };
export function articleSchema(article: Article) { const url = canonicalUrl(`/guides/${article.slug}`); return { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, mainEntityOfPage: url, author: { "@type": "Person", name: article.author, url: canonicalUrl("/about") }, publisher: { "@type": "Person", name: "Kapil Shah", url: canonicalUrl("/about") }, ...(article.coverImage ? { image: canonicalUrl(article.coverImage) } : {}) }; }
export function breadcrumbSchema(article: Article) { return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: article.category }, { "@type": "ListItem", position: 4, name: article.title, item: canonicalUrl(`/guides/${article.slug}`) }] }; }
