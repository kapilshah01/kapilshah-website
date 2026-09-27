# Content system

## Registry and route

Published guides are MDX files in `src/content/guides/`, imported by `src/lib/content.ts` into the single typed `Article` registry in `src/types/content.ts`. `/guides/[slug]` resolves from that registry. Do not add a parallel content database or a second route.

The registry drives `/guides`, static guide parameters, related articles, and `src/app/sitemap.ts`. Articles marked `draft` are excluded from public listings and sitemap. The current six category values and their labels live in `contentPillars` in `src/types/content.ts`; use an existing pillar rather than creating a category archive or an ad hoc taxonomy value.

## Slugs and metadata

Use lowercase, descriptive, hyphen-separated slugs. Keep a published slug stable. Each registry record needs a unique title, description, slug, category, tags, author, publication date, reading time, difficulty, business relevance, and MDX component. Use `seoTitle` only when a shorter search/social title is helpful; the page heading remains `title`. Set `updatedAt` after a material content revision.

The guide route generates a self-canonical URL from the slug, unique description, Open Graph and Twitter metadata, `BlogPosting` structured data, and a breadcrumb list containing the real Home, Guides, and current guide routes. The sitemap adds each published registry entry once. Keep API routes disallowed in `robots.ts`.

## Writing and internal links

Answer the central question near the start. Give useful steps, tradeoffs, mistakes to avoid, and sources for claims that depend on changing product behavior. Link to relevant existing guides and real site pages where they naturally help the reader; don't create links solely to increase link count. The related guide system first uses explicit `relatedSlugs`, then shared pillar and tags.

Add a guide by writing `src/content/guides/<slug>.mdx`, importing its default component in `src/lib/content.ts`, adding one record with accurate metadata and related slugs, and updating the roadmap. This automatically makes a published guide available through the guides page, static route generation, related links, article metadata, structured data, breadcrumbs, and sitemap.

## Future commercial content

Commercial guides remain ordinary entries in the same registry and MDX system. The optional `commercial` type currently holds a disclosure string, `lastReviewedAt`, and internal `researchNotes`, but the guide template does not render this metadata yet. Do not publish commercial metadata until a future template change visibly renders the disclosure and review date while keeping research notes private. Product comparisons should state the selection criteria and scope. Add vendor links only after checking the destination and any affiliate relationship; do not invent claims, pricing, tests, or commissions. Educational guides need no commercial fields.
