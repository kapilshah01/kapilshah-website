import type { ComponentType } from "react";

export const contentPillars = [
  { value: "account-identity", label: "Account & Identity Security", description: "Accounts, passwords, access, and multi-factor authentication." },
  { value: "email-phishing", label: "Email, Phishing & Social Engineering", description: "Safer communication and protection against deceptive requests." },
  { value: "website-device", label: "Website, Software & Device Security", description: "The systems, software, and devices your business relies on." },
  { value: "data-recovery", label: "Data, Backups & Recovery", description: "Protecting important data and preparing to recover it." },
  { value: "incident-response", label: "Incident Response", description: "Clear actions for handling a security incident." },
  { value: "security-management", label: "Small Business Security Management", description: "Practical security planning and repeatable habits." },
] as const;
export type ArticleCategory = (typeof contentPillars)[number]["value"];
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type BusinessRelevance = "essential" | "high" | "supporting";
export type ArticleMetadata = { title: string; description: string; slug: string; category: ArticleCategory; tags: string[]; author: string; publishedAt: string; updatedAt?: string; readingTime: number; featured: boolean; draft: boolean; coverImage?: string; canonicalUrl?: string; difficulty: Difficulty; businessRelevance: BusinessRelevance; beginnerFriendly: boolean; relatedSlugs?: string[]; };
export type Article = ArticleMetadata & { Content: ComponentType };
