import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { canonicalUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["/", "/guides", "/start-here", "/small-business", "/about"].map((path) => ({ url: canonicalUrl(path), changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.8 })); const guides = getAllArticles().map((article) => ({ url: canonicalUrl(`/guides/${article.slug}`), lastModified: new Date(`${article.updatedAt ?? article.publishedAt}T00:00:00Z`), changeFrequency: "monthly" as const, priority: 0.7 })); return [...pages, ...guides]; }
