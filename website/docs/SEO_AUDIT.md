# Phase 4 SEO and content audit

**Audit date:** 2026-09-27  
**Scope:** Repository implementation and local production build. The canonical live host could not be fetched with the available web access, and no Google Search Console property/data was available. This report does not claim live indexing or rankings.

## Technical SEO

- The site uses the canonical origin `https://kapilshah.com.np` in `src/lib/seo.ts`. Guide slugs are stable lowercase hyphenated paths under `/guides/`.
- Published guides generate title, description, self-canonical, Open Graph/Twitter metadata, and `index, follow`. All seven published guide titles and descriptions are unique in the rendered local output.
- The homepage canonical and homepage sitemap URL now use the same bare-host representation (`https://kapilshah.com.np`); other page URLs use clean paths without a trailing slash.
- Unknown guide slugs use Next.js `notFound()` behavior. No pagination or category archive routes exist. Search parameters are not used to create guide variants; comment API requests are query-based and the API path is disallowed in robots.txt.
- `next.config.ts` contains no explicit redirect rules. HTTPS, `www`/non-`www`, and edge slash redirects must be confirmed in the production hosting layer; live redirects could not be checked from this environment.

## Structured data

- Every rendered guide has exactly one `BlogPosting` and one `BreadcrumbList`.
- BlogPosting headline and description match the article metadata; author is the visible article author and links to `/about`; published and modified dates use registry values, with `publishedAt` as the modified-date fallback. No image is emitted because the published guides have no cover image.
- Guide breadcrumbs contain three real destinations: Home, Guides, and the current guide. Local output has valid positions, names, and item URLs, with no taxonomy keys.
- The root layout emits `WebSite` and `Person`; About emits `ProfilePage` whose main entity is the same author. Unsupported fixed creation/modification dates were removed from ProfilePage rather than asserting dates not established by the page.
- No organization, review, rating, or product schema is added.

## Sitemap and robots

- The local sitemap contains 12 unique URLs: five real top-level pages and all seven published guides. Every guide URL appears exactly once. There are no API, query-string, localhost, development, taxonomy-only, or duplicate URLs.
- `/robots.txt` returns 200 and contains `User-agent: *`, `Allow: /`, `Disallow: /api/`, and `Sitemap: https://kapilshah.com.np/sitemap.xml`.
- `/api/` is excluded from crawling and the sitemap. Public comment responses are JSON and are not linked as article pages.

## Internal links and content architecture

- The six guide records use the single MDX registry. Their categories match the six typed pillars; no category archive routes or invalid category references were found.
- Every guide has valid related-guide links. The guide graph is connected through the checklist, MFA, phishing, backup, and incident-response clusters; no article is orphaned.
- All local Markdown internal links from guide MDX resolve to a real site route or published guide. The audit found zero broken internal links.
- The Start Here and Small Business hubs now link their backup and incident-preparation sections directly to the relevant published guides. Backup and incident-response guides link to one another where recovery planning is relevant.
- The checklist already introduces password management, employee habits, updates, devices, Wi-Fi, risk planning, and other controls. Future guides should add depth to a distinct user task instead of reproducing checklist items.

## Content quality

- Seven guides are published: the cybersecurity checklist, MFA, password policy, phishing protection, backup/ransomware protection, incident response plan, and password-manager guide.
- Each guide has a distinct search intent and practical material. The checklist is a broad starting point; MFA and password policy cover account controls; phishing covers scams including business-email compromise; backup and incident-response guides cover recovery and preparation.
- Introductions answer the topic promptly. The newer recovery guides lead with a direct answer; the longer guides use practical steps, mistakes, and contextual sources. No thin or duplicate article intent was found.
- Business-email compromise is already explained within phishing protection. A separate guide should focus on payment-change verification workflows rather than repeat general phishing detection.

## Comments, safety, and page experience

- Comment text is rendered as React text, so markup is escaped; the renderer does not use `dangerouslySetInnerHTML` for comments.
- Public GET queries only `approved_comments` and selects `id`, `article_slug`, `name`, `body`, and `created_at`. The public type contains no email field. POST validates the current published slug and inserts with `status: "pending"`; the route has no public moderation operation. The client uses only the same-origin API and contains no Supabase key.
- The local production build's approved-comments GET returned HTTP 500. Server diagnostics reported Supabase code `42501`, `permission denied for table comments`, while reading `approved_comments`. This prevents verifying live approved-comment rendering in this workspace. Database/view/grant/RLS changes are outside this audit's authorization and were not made; an authorized Supabase administrator needs to investigate this result.
- The comments UI has loading, unavailable, empty, submission-pending, success, and error states. API calls are limited to initial comment loading and a refresh after submission.
- MDX guides are statically generated. No external scripts, large article images, or third-party tracking were found. The comments form/section are client components because they require fetch and form state; the rest of the guide template is server-rendered.
- The desktop table-of-contents component is currently a static placeholder rather than generated heading navigation. It was left unchanged because it is a separate reader-experience feature, not a technical SEO defect in this phase.

## Issues fixed

- Normalized the homepage canonical helper to the same bare-host form Next.js renders and the sitemap now emits.
- Replaced the homepage's brand-only title with a concise title matching its visible small-business cybersecurity focus.
- Removed unsupported hard-coded `dateCreated` and `dateModified` from ProfilePage structured data.
- Replaced generic hub links to `/guides` with direct links to the existing backup and incident-response guides.
- Added contextual cross-links between backup/recovery and incident-response guides.
- Added a loading state so the comments empty state does not appear before the first GET completes.
- Updated the content roadmap with a prioritized next-article sequence.

## Intentionally unchanged / manual verification

- No Supabase schema, view, RLS, policy, grant, or environment changes were made. Resolve the local `42501` approved-view read failure through authorized database administration without broadening public access.
- Production HTTPS/www/slash redirects and actual public-host availability were not verified because the live host was inaccessible to the available web tool. Check those at the hosting/edge layer.
- Google Search Console ownership, submitted sitemap status, coverage, and indexing were not available; verify them manually after deployment. No indexing or ranking claim is made.
- Commercial metadata is defined in types but is not rendered by the guide template. The content documentation now says not to publish it until visible disclosure and review-date rendering is implemented.

## Recommended next topics

See [CONTENT_ROADMAP.md](CONTENT_ROADMAP.md) for the ordered list. The strongest next clusters are account tools and access, payment-fraud workflows, device/software maintenance, cloud workspace administration, and small-business risk inventory.
