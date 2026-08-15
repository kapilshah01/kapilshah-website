# Cloudflare

## Deployment Target

The application targets Cloudflare Workers through OpenNext for Cloudflare.

## Current Configuration

- `wrangler.jsonc` defines the Worker name, generated Worker entry, compatibility date, compatibility flags, static assets binding, and observability.
- `open-next.config.ts` defines the OpenNext Cloudflare adapter configuration.
- The app is static-first, so dummy incremental and tag cache configuration remains acceptable until real caching infrastructure is needed.

## Wrangler

Current required settings:

```jsonc
{
  "main": ".open-next/worker.js",
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
}
```

`nodejs_compat` is required by the OpenNext adapter. Application code should still prefer Web Platform APIs.

## Scripts

```bash
npm run cf:build
npm run cf:preview
npm run cf:deploy
npm run cf:typegen
```

- `cf:build` builds the OpenNext Cloudflare output.
- `cf:preview` previews the built app through the OpenNext Cloudflare preview command.
- `cf:deploy` builds and deploys through OpenNext Cloudflare.
- `cf:typegen` generates Cloudflare environment binding types when bindings are added or changed.

## Local Development

Use the Next.js development server for normal development:

```bash
npm run dev
```

Use Cloudflare preview when testing behavior that depends on the Workers runtime:

```bash
npm run cf:preview
```

## Deferred Services

Do not add these in Phase 2:

- Cloudflare D1.
- Cloudflare R2.
- Cloudflare KV.
- Authentication.
- Newsletter backend.
- CMS.
- Application APIs.

## Future Service Choices

D1 is appropriate for structured application data such as newsletter subscribers, contact records, product data, and future SaaS data. It should not be used for static MDX content that can be built into the site.

R2 is appropriate for large media files, downloadable resources, and future user-uploaded content. It should not be introduced for a small static asset set.

KV is appropriate for small cached values and configuration where eventual consistency is acceptable. It should not be used for strongly consistent transactional data.

## Compatibility Rules

- Avoid packages that require long-running Node.js servers.
- Avoid runtime filesystem access in Worker request paths.
- Avoid native modules unless Cloudflare Workers support is proven.
- Do not use `export const runtime = "edge"` with OpenNext Cloudflare.
- Review new dependencies before installation.

## Validation

Run these before deployment-related work:

```bash
npm run lint
npm run typecheck
npm run cf:build
```

OpenNext currently warns that Windows is not the optimal environment. WSL is recommended for production-like local testing if Windows-specific OpenNext behavior appears.

