# Performance

## Goals

The site should have excellent Core Web Vitals, low JavaScript cost, fast Cloudflare edge delivery, and stable reading layouts.

## Strategy

- Prefer static generation for public pages and MDX content.
- Use Server Components by default.
- Keep Client Components small and leaf-level.
- Avoid unnecessary dependencies.
- Use responsive images with stable dimensions.
- Optimize fonts to prevent layout shift.
- Use Cloudflare static asset delivery and CDN caching.

## Core Web Vitals

Largest Contentful Paint:

- Keep first-viewport content simple.
- Avoid blocking third-party scripts.
- Use optimized images with explicit dimensions.
- Prefer static rendering for public pages.

Cumulative Layout Shift:

- Reserve image and media dimensions.
- Avoid late-loading fonts without fallback strategy.
- Keep banners and dynamic UI from pushing content unexpectedly.

Interaction to Next Paint:

- Minimize client JavaScript.
- Avoid heavy runtime libraries.
- Split interactive components from static layout.
- Defer noncritical interactions.

## Images

- Use `next/image` where compatible with the Cloudflare/OpenNext setup.
- Prefer Cloudflare Images only when image optimization needs justify the service.
- Store source assets in `public` initially.
- Consider R2 later only for large media libraries or user-uploaded files.

## Fonts

- Start with the system font stack.
- Add branded fonts only after visual identity is final.
- Self-host or use Next font tooling when fonts are introduced.

## Caching

- Static pages and assets should be CDN-cacheable.
- RSS, sitemap, and robots should be cacheable.
- Future dynamic route handlers should set explicit cache behavior.
- Do not add R2-backed incremental cache until ISR-like behavior or dynamic caching is needed.

## Bundle Discipline

- Review every new dependency for Worker compatibility and bundle cost.
- Keep icons imported from `lucide-react` at component level.
- Avoid client-only libraries in Server Components.
- Avoid analytics, animation, search, or CMS SDKs until the feature requires them.

## Cloudflare Runtime

The deployed application runs in `workerd`, not the local Node.js dev server. Use `cf:preview` and `cf:build` to validate runtime assumptions before deployment.

