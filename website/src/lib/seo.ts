import type { Article } from "@/types/content";

const siteUrl = "https://kapilshah.com.np";
export function structuredData(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }
export const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Kapil Shah", url: siteUrl, description: "Practical cybersecurity guidance for small businesses without a security team." };
export function articleSchema(article: Article) { const url = `${siteUrl}/guides/${article.slug}`; return { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, mainEntityOfPage: url, author: { "@type": "Person", name: article.author }, publisher: { "@type": "Person", name: "Kapil Shah", url: siteUrl } }; }
export function breadcrumbSchema(article: Article) { return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/guides` }, { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}/guides/${article.slug}` }] }; }
