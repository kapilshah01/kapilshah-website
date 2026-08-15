# Architecture

## Purpose

Kapil Shah Website is a Cloudflare-first Next.js application for `kapilshah.com.np`. It is intended to grow from a personal brand and portfolio into a technical blog, resource library, learning platform, and future digital business without replacing the foundation.

Phase 2 does not build the full website. It defines the system shape that future phases will use.

## Current Stack

- Next.js App Router with TypeScript and React.
- Tailwind CSS v4 with CSS design tokens.
- shadcn/ui-compatible configuration.
- MDX support through `@next/mdx`.
- OpenNext for Cloudflare with Wrangler.
- Cloudflare Workers as the deployment runtime.

## Principles

- Prefer static generation and cacheable content by default.
- Use Server Components unless browser interaction requires a Client Component.
- Keep dependencies minimal and compatible with the Cloudflare Workers runtime.
- Avoid long-running Node.js servers, runtime filesystem assumptions, and native Node-only packages.
- Keep Cloudflare services behind typed adapters when they are introduced later.
- Add folders and abstractions only when they support real application behavior.

## Folder Structure

```text
website/
|-- docs/
|-- public/
|-- src/
|   |-- app/
|   |-- components/
|   |-- content/
|   |-- hooks/
|   |-- lib/
|   |-- styles/
|   |-- types/
|   `-- utils/
|-- components.json
|-- eslint.config.mjs
|-- next.config.ts
|-- open-next.config.ts
|-- package.json
|-- tsconfig.json
`-- wrangler.jsonc
```

## Directory Responsibilities

- `src/app`: App Router routes, layouts, metadata, route handlers, error boundaries, loading states, `robots.ts`, sitemap, and RSS route handlers.
- `src/components`: Reusable React components grouped by responsibility when components are introduced.
- `src/content`: MDX content collections for blog posts, projects, resources, and learning notes.
- `src/hooks`: Client-only React hooks. These must not import server-only code.
- `src/lib`: Framework adapters, content registry utilities, SEO helpers, Cloudflare access wrappers, and integration boundaries.
- `src/styles`: Global CSS, Tailwind v4 tokens, semantic color tokens, and base styling.
- `src/types`: Shared TypeScript models for content, navigation, SEO, projects, and future integrations.
- `src/utils`: Small pure utilities that can run in browser, server, and Worker contexts.
- `public`: Static assets served directly by Cloudflare static assets.
- `docs`: Engineering documentation and architecture decisions for the website application.

## Routing Plan

Public routes:

```text
/
/about
/blog
/blog/[slug]
/projects
/projects/[slug]
/resources
/learning
/tools
/contact
/search
/privacy
/terms
```

System routes:

```text
/robots.txt
/sitemap.xml
/rss.xml
/not-found
/error
```

## Static and Dynamic Strategy

Static by default:

- `/`
- `/about`
- `/blog`
- `/blog/[slug]`
- `/projects`
- `/projects/[slug]`
- `/resources`
- `/learning`
- `/tools`
- `/privacy`
- `/terms`
- `/robots.txt`
- `/sitemap.xml`
- `/rss.xml`

Potentially dynamic later:

- `/search` if the search index moves beyond a static client index.
- `/contact` when a secure form backend is added.
- Future SaaS/product areas that require auth, per-user data, or request-specific rendering.

## Rendering Rules

- Use Server Components for layout, page composition, MDX rendering, metadata, and content lists.
- Use Client Components only for interactive navigation, theme switching, search controls, forms, modals, command menus, and browser-state features.
- Use static generation for MDX content and public marketing pages.
- Use route handlers for RSS, sitemap, robots, contact submission, and future APIs only when needed.
- Keep route handlers based on Web Platform APIs such as `Request`, `Response`, `URL`, `Headers`, Streams, and Web Crypto.

## Component Architecture

Layout components:

- `Navbar`: Primary navigation, mobile menu, active route state.
- `Footer`: Secondary navigation, legal links, contact and social links.
- `Container`: Width and horizontal rhythm primitive.

UI components:

- `Button`, `Card`, `Badge`, `Tag`, `Input`, `Textarea`, `Modal`, `Dropdown`, `Tooltip`.

Content components:

- `ArticleCard`, `ProjectCard`, `AuthorCard`, `TagList`, `TableOfContents`, `RelatedArticles`, `Pagination`.

System components:

- `LoadingState`, `EmptyState`, `ErrorState`, `Breadcrumb`, `Search`.

These are responsibilities, not an instruction to implement every component in Phase 2.

## Future Data Flow

```text
MDX file
-> typed metadata
-> content registry
-> Server Component page
-> Metadata API
-> sitemap and RSS generation
-> OpenNext build
-> Cloudflare Worker and static assets
-> Cloudflare CDN
```

Future D1, R2, and KV usage must enter through `src/lib` adapters rather than being imported directly into route components.

## Cloudflare Boundary

The current app is deployed through OpenNext for Cloudflare. `wrangler.jsonc` defines the Worker entry and static assets binding. `open-next.config.ts` keeps the app static-first with dummy cache configuration until real cache infrastructure is needed.

Do not add Cloudflare D1, R2, KV, authentication, newsletter backends, APIs, CMS integrations, or UI components during Phase 2.

