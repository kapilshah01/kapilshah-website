# Content Architecture

## Purpose

The content system will use MDX for long-form technical writing, project writeups, resources, and learning notes. Phase 2 defines the model and flow only. It does not add real articles.

## Collections

Planned content collections:

```text
src/content/
|-- blog/
|-- projects/
|-- resources/
`-- learning/
```

Add each collection only when the related feature is implemented.

## Article Metadata

Blog MDX files should expose typed metadata with this shape:

```ts
export type ArticleMetadata = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    url?: string;
    image?: string;
  };
  category: string;
  tags: string[];
  featuredImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  readingTime?: {
    minutes: number;
    words: number;
  };
  seo?: {
    title?: string;
    description?: string;
    canonicalPath?: string;
    noIndex?: boolean;
    ogImage?: string;
  };
};
```

## Content Flow

```text
MDX file
-> exported metadata
-> typed registry
-> route params
-> article page
-> Metadata API
-> table of contents
-> related articles
-> sitemap
-> RSS
```

## Metadata Rules

- `title`, `description`, `slug`, `publishedAt`, `author`, `category`, and `tags` are required.
- `updatedAt` should be present when a published article materially changes.
- `featuredImage.alt` is required whenever an image is present.
- SEO overrides should be optional because good content metadata should produce good defaults.
- Slugs must be lowercase, stable, and descriptive.

## Table of Contents

The table of contents should be generated from article headings during build or content indexing. It should not require runtime filesystem access in the deployed Worker.

## Related Articles

Related articles should initially be based on shared tags and category. Future versions may use search indexes or embeddings, but those are out of scope for Phase 2.

## Reading Time

Reading time can be calculated at build time from MDX content. Store calculated values in the content registry rather than recalculating on every request.

## Cloudflare Compatibility

- Avoid runtime filesystem reads in Worker-executed request paths.
- Prefer build-time content indexes as the archive grows.
- Keep content utilities compatible with Web Platform APIs.
- Do not introduce a CMS, database, or remote content backend in Phase 2.

## Comment Association

Dynamic comments reference the canonical article slug. The comments API verifies that a slug exists in the static content registry before accepting a submission, preventing orphaned comment records. New comments remain pending until a moderator approves them in Supabase; only approved, email-free comment fields are rendered publicly.

## Final Taxonomy and Linking

Published guides use six stable pillar values: `account-identity`, `email-phishing`, `website-device`, `data-recovery`, `incident-response`, and `security-management`. The UI presents their human-readable labels. Tools and reviews are a commercial/content layer that can apply across pillars rather than a primary category.

All published articles use `/guides/[slug]`; there are no category archive URLs that duplicate content. Drafts are excluded by the registry from pages, internal links, static params, and the sitemap. Related guides prefer editorial `relatedSlugs`, then use shared pillar and tags as a deterministic fallback.
