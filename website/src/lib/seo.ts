import type { Article } from "@/types/content";

const siteUrl = "https://kapilshah.com.np";
export const canonicalUrl = (path: string) => {
  const url = new URL(path.startsWith("/") ? path : `/${path}`, siteUrl);
  return url.pathname === "/" && !url.search && !url.hash ? siteUrl : url.toString();
};
export function structuredData(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }
export const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Kapil Shah", url: siteUrl, description: "Practical cybersecurity guidance for small businesses without a security team." };
export const authorSchema = { "@context": "https://schema.org", "@type": "Person", name: "Kapil Shah", url: canonicalUrl("/about") };
export const profilePageSchema = { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: authorSchema };
export function articleSchema(article: Article) { const url = canonicalUrl(`/guides/${article.slug}`); const cover = article.coverImage; return { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, mainEntityOfPage: url, author: { "@type": "Person", name: article.author, url: canonicalUrl("/about") }, publisher: { "@type": "Person", name: "Kapil Shah", url: canonicalUrl("/about") }, ...(cover ? { image: { "@type": "ImageObject", url: canonicalUrl(cover.src), width: cover.width, height: cover.height, caption: cover.alt } } : {}) }; }
export function guideBreadcrumbs(article: Article) {
  const title = article.title?.trim() || article.slug?.replace(/-/g, " ").trim() || "Guide";
  return [
    { name: "Home", href: canonicalUrl("/") },
    { name: "Guides", href: canonicalUrl("/guides") },
    { name: title, href: canonicalUrl(`/guides/${article.slug}`) },
  ];
}
export function breadcrumbSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: guideBreadcrumbs(article).map(({ name, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: href,
    })),
  };
}
