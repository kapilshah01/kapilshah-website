# SEO Architecture

## Goals

The SEO system must support a personal brand, portfolio, technical blog, resource library, learning notes, and future product surfaces while staying static-first and Cloudflare-compatible.

## Metadata API

Use the Next.js Metadata API for:

- Global site defaults in `src/app/layout.tsx`.
- Route-specific static metadata.
- Dynamic metadata for MDX-driven routes when content routes are added.

## Title Strategy

- Default title: `Kapil Shah`.
- Template: `%s | Kapil Shah`.
- Article titles should be direct and descriptive.
- Do not use generic keyword-stuffed titles.

## Description Strategy

- Use curated descriptions from content metadata.
- Keep descriptions concise and accurate.
- Do not derive descriptions from arbitrary article excerpts unless no curated value exists.

## Canonical URLs

Canonical URLs should be based on:

```text
https://kapilshah.com.np
```

Every public route, article, project, and resource should define a canonical URL. Paginated pages should canonicalize to their own page URL.

## Open Graph

Public routes should eventually define:

- `og:title`
- `og:description`
- `og:url`
- `og:type`
- `og:image` when branded social images exist
- `og:site_name`

Articles should use article-specific metadata, including published and modified dates.

## Twitter/X Cards

Use `summary_large_image` once branded social preview images exist. Until then, keep metadata valid without requiring an image.

## System Routes

Planned SEO routes:

```text
/robots.txt
/sitemap.xml
/rss.xml
```

These should be generated through App Router metadata files or route handlers.

## robots.txt

Initial policy:

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://kapilshah.com.np/sitemap.xml
```

## Sitemap

Start with a single generated sitemap. When the archive grows, split by content type:

```text
/sitemap.xml
/sitemaps/pages.xml
/sitemaps/blog-1.xml
/sitemaps/projects.xml
/sitemaps/resources.xml
/sitemaps/learning.xml
```

## RSS

Generate RSS at `/rss.xml` when blog or learning content launches. The feed should be cacheable and based on the typed content registry.

## Structured Data

Future JSON-LD helpers in `src/lib/seo` should support:

- `Person`
- `WebSite`
- `Article`
- `BreadcrumbList`
- `Organization` where appropriate

Structured data must come from typed metadata and visible page content.

## Cloudflare Compatibility

- Keep sitemap and RSS generation cacheable.
- Avoid runtime filesystem reads in Worker request paths.
- Use build-time content indexes for large content collections.
- Do not add external SEO libraries unless they are Worker-compatible and necessary.

## Implemented Static SEO

`src/app/robots.ts` allows public pages, disallows `/api/`, and declares the generated sitemap. `src/app/sitemap.ts` uses the static content registry and includes only public hubs plus published guide URLs. Drafts, APIs, and internal routes are not included.

The root layout supplies canonical-ready metadata, robots directives, and accurate `WebSite` structured data. Published guide pages supply `Article` and `BreadcrumbList` structured data using registry metadata only. No Organization, ratings, keywords, or fabricated facts are emitted.
