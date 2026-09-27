# SEO implementation report

Date: 2026-09-27. Scope: existing Next.js App Router application in `website/`. No deployment, push, or Search Console authentication was performed.

## 1. Current SEO architecture

- Next.js 16 App Router, static MDX article registry, Cloudflare OpenNext configuration.
- Root metadata provides the production metadata base and site defaults; route-level metadata is defined for guides, start page, and small-business page.
- Next metadata routes generate `robots.txt` and `sitemap.xml`.
- Published article data feeds static params, guide listings, related-guide links, comments slug validation, and sitemap URLs.
- JSON-LD existed for WebSite, Article, and BreadcrumbList.

## 2. Problems found

- Shared navigation relied on fragment links that pointed to homepage sections and therefore did not navigate correctly from guide pages.
- Footer labels for Tools, Resources, Contact, Privacy, and Terms appeared as links but pointed to `#top`; their matching public pages do not exist.
- No About route existed despite the visible author name and footer About label.
- Article canonical accepted a content-level override, which could point away from the production canonical origin.
- Source inspection cannot account for the previously reported production checklist 404; current content registry/build includes that guide.
- No public image assets or article images are present.

## 3. Problems fixed

- Centralized canonical URL construction on `https://kapilshah.com.np` and used it for article metadata, article schema, sitemap URLs, and optional article images.
- Replaced invalid navigation/footer fragment links with real crawlable site routes.
- Added a factual About page that makes no credential claims.
- Improved article social metadata, explicit index/follow behavior, BlogPosting author/date/page fields, and global Person/WebSite structured data.
- Aligned breadcrumb structured data with the visible guide category level.

## 4. Files changed or created

Changed: `src/lib/seo.ts`, `src/app/layout.tsx`, `src/app/guides/[slug]/page.tsx`, `src/app/sitemap.ts`, `src/components/site-header.tsx`, and `src/components/site-footer.tsx`.

Created: `src/app/about/page.tsx`, `SEO_AUDIT.md`, `SEO_CONTENT_PLAN.md`, `TRUST_AND_AUTHORITY_PLAN.md`, and this report.

The working tree also contains changes to `src/lib/content.ts` and an untracked password policy MDX file; these were already present during initial inspection and were not authored as part of this SEO pass.

## 5. Routes checked

The production build lists all four guides as statically generated. A local production server returned HTTP 200 for:

- `/`, `/robots.txt`, `/sitemap.xml`
- `/guides/small-business-cybersecurity-checklist`
- `/guides/mfa-for-small-businesses`
- `/guides/small-business-password-policy`
- `/guides/small-business-phishing-protection`
- `/guides`, `/start-here`, `/small-business`, `/about`

The checklist response contained the expected page title. No live production request was made, so the prior production 404 must be checked against the actual deployment after release.

## 6. Metadata and structured data improvements

- Canonicals resolve only against the fixed HTTPS production origin.
- Guide pages have unique title/description, canonical, Open Graph article metadata, Twitter metadata, and robots directives.
- Site-level identity uses WebSite and Person schema for the actual named site/author. Guide markup uses BlogPosting and BreadcrumbList.
- Optional image fields are emitted only when an actual cover image is set. No images currently exist.
- No Product, Review, AggregateRating, company, credential, award, or certification claims were added.

## 7. Internal-link improvements

- Header now links to `/`, `/guides`, `/small-business`, `/about`, and `/start-here` using real links from every route.
- Footer contains only existing destinations.
- Existing breadcrumbs, guide index, cross-links, and related guides remain in place. Detailed relationship map and gaps are in `SEO_AUDIT.md`.

## 8. Sitemap and robots

- Robots allows public routes, disallows `/api/`, and references the production sitemap.
- Sitemap is generated from fixed public pages plus published article registry entries; it excludes drafts and API routes.
- Added `/about` to sitemap. Current `getAllArticles()` is the source for all published guides.

## 9. Performance issues found

- No public images or third-party tracking scripts were found in inspected application source.
- Server Components are the default; comments are the identified client component for interactive comment loading/submission.
- No risky rendering or architecture changes were needed. Performance has not been measured with field data or Lighthouse.

## 10. Accessibility issues found

- Header and footer now expose descriptive route links instead of ambiguous fragment destinations. Mobile navigation retains native keyboard-operable `details/summary` and a named nav.
- Guide pages have one visible H1 and structured subheadings; images are absent.
- Full keyboard, contrast, and comment form browser QA remain manual checks.

## 11. Content architecture

- Four published guides currently cover small-business security management, account/MFA/password topics, and phishing/email.
- Six taxonomy pillars appear as sections on `/guides`; empty pillars are not exposed as thin indexable category routes.
- `SEO_CONTENT_PLAN.md` contains 40 future ideas, intent, audience/funnel, existing relationships, link suggestions, and relative priority, with no invented keyword metrics.

## 12. Affiliate readiness

- No affiliate links or product-review system was added. No empty indexable tool pages were created.
- Future review requirements, fact/opinion distinction, product source details, and disclosure requirements are documented in `TRUST_AND_AUTHORITY_PLAN.md`.

## 13. Trust and authority

- Added a transparent About page based only on the existing site identity and stated purpose.
- Documented future author/source/update practices and missing policy/contact needs. No unsupported expertise or credentials are claimed.
- A genuine contact method and privacy policy should be added before collecting personal data or enabling tracking; affiliate disclosure is required before affiliate links.

## 14. Remaining technical and manual tasks

- After deployment, confirm the checklist returns 200 at production and inspect deployment history/logs if it still fails. Source/build checks cannot explain a production-only failure.
- Search Console indexing/canonical reports and live redirects have not been checked.
- Add contact and legal pages only once accurate site-specific information exists.
- Add genuine article images and their useful alt text when available.

## 15. Validation and warnings

- `npm.cmd run check`: passed (ESLint and TypeScript).
- `npm.cmd run build`: passed; Next.js generated 15 static pages, including all guide pages, About, robots, and sitemap.
- Local built-server route checks: all 11 URLs listed above returned 200.
- Initial PowerShell `npm run check` invocation was blocked by execution policy for `npm.ps1`; invoking the equivalent `npm.cmd` script succeeded. No build warnings were reported.

## 16. Google Search Console steps

1. In the verified Domain property for `kapilshah.com.np`, open **Sitemaps** and submit `https://kapilshah.com.np/sitemap.xml`.
2. Use **URL Inspection** on these exact URLs and request indexing where appropriate:
   - `https://kapilshah.com.np/`
   - `https://kapilshah.com.np/guides`
   - `https://kapilshah.com.np/guides/small-business-cybersecurity-checklist`
   - `https://kapilshah.com.np/guides/mfa-for-small-businesses`
   - `https://kapilshah.com.np/guides/small-business-password-policy`
   - `https://kapilshah.com.np/guides/small-business-phishing-protection`
   - `https://kapilshah.com.np/small-business`
   - `https://kapilshah.com.np/start-here`
   - `https://kapilshah.com.np/about`
3. For the checklist, confirm tested live URL is available, user-declared canonical matches Google-selected canonical, and rendered page content is present. Review **Pages** and sitemap processing for exclusions/errors.
