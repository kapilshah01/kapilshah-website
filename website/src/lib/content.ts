import Checklist from "@/content/guides/small-business-cybersecurity-checklist.mdx";
import MFA from "@/content/guides/mfa-for-small-businesses.mdx";
import Phishing from "@/content/guides/small-business-phishing-protection.mdx";
import { contentPillars, type Article, type ArticleCategory } from "@/types/content";

const articles: Article[] = [
  { title: "Small Business Cybersecurity Checklist: 25 Things to Secure Your Business", description: "A practical 25-point checklist to help small businesses protect accounts, email, devices, data, backups, and incident response.", slug: "small-business-cybersecurity-checklist", category: "security-management", tags: ["small-business", "cybersecurity-checklist", "security-basics", "risk-management", "backups", "phishing"], author: "Kapil Shah", publishedAt: "2026-08-15", readingTime: 14, featured: true, draft: false, difficulty: "beginner", businessRelevance: "high", beginnerFriendly: true, relatedSlugs: ["mfa-for-small-businesses", "small-business-phishing-protection"], Content: Checklist },
  { title: "MFA for Small Businesses", description: "A clear introduction to multi-factor authentication and the accounts to protect first.", slug: "mfa-for-small-businesses", category: "account-identity", tags: ["mfa", "accounts", "security-basics"], author: "Kapil Shah", publishedAt: "2026-08-15", readingTime: 3, featured: true, draft: false, difficulty: "beginner", businessRelevance: "essential", beginnerFriendly: true, relatedSlugs: ["small-business-cybersecurity-checklist"], Content: MFA },
  { title: "Small Business Phishing Protection", description: "Practical ways to help your team identify and report suspicious messages.", slug: "small-business-phishing-protection", category: "email-phishing", tags: ["phishing", "email-security", "small-business"], author: "Kapil Shah", publishedAt: "2026-08-15", readingTime: 3, featured: true, draft: false, difficulty: "beginner", businessRelevance: "high", beginnerFriendly: true, relatedSlugs: ["small-business-cybersecurity-checklist"], Content: Phishing },
];

export function getAllArticles() { return articles.filter((article) => !article.draft); }
export function getArticleBySlug(slug: string) { return getAllArticles().find((article) => article.slug === slug); }
export function getArticlesByCategory(category: ArticleCategory) { return getAllArticles().filter((article) => article.category === category); }
export function getArticlesByTag(tag: string) { return getAllArticles().filter((article) => article.tags.includes(tag)); }
export function getFeaturedArticles() { return getAllArticles().filter((article) => article.featured); }
export function getPillar(category: ArticleCategory) { return contentPillars.find((pillar) => pillar.value === category)!; }
export function getRelatedArticles(article: Article, limit = 3) { const published = getAllArticles().filter((candidate) => candidate.slug !== article.slug); const explicit = (article.relatedSlugs ?? []).map((slug) => published.find((candidate) => candidate.slug === slug)).filter((candidate): candidate is Article => Boolean(candidate)); const remaining = published.filter((candidate) => !explicit.some(({ slug }) => slug === candidate.slug)).map((candidate) => ({ candidate, score: (candidate.category === article.category ? 2 : 0) + candidate.tags.filter((tag) => article.tags.includes(tag)).length })).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).map(({ candidate }) => candidate); return [...explicit, ...remaining].slice(0, limit); }
