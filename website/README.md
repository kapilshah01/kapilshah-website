# KapilShah Website

KapilShah Website is the application foundation for `kapilshah.com.np`, a long-term personal brand, technical blog, portfolio, resources library, learning notes platform, and future digital business.

This folder contains the actual web application. The root-level numbered folders remain planning and documentation areas.

## Technology Stack

- Next.js `16.2.12` with App Router
- React `19.2.4`
- TypeScript
- Tailwind CSS `4`
- shadcn/ui-compatible project configuration
- Lucide React icons
- MDX content support
- OpenNext for Cloudflare
- Cloudflare Pages and Workers
- Wrangler for local preview and deployment

## Architecture

The application is built Cloudflare-first. It avoids custom Node.js servers, keeps runtime assumptions close to Web Platform APIs, and uses OpenNext for Cloudflare to adapt the Next.js build for Workers.

Server Components are the default. Client Components should be introduced only when interactivity requires browser APIs or client state.

Detailed architecture documentation lives in `docs/ARCHITECTURE.md`.

## Folder Structure

```text
website/
├── .vscode/
├── docs/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   └── utils/
├── components.json
├── next.config.ts
├── open-next.config.ts
├── package.json
├── tsconfig.json
└── wrangler.jsonc
```

## Development Workflow

```bash
npm run dev
npm run lint
npm run typecheck
npm run check
```

Use `npm run dev` for local development. Use `npm run check` before committing meaningful changes.

## Deployment Workflow

```bash
npm run cf:build
npm run cf:preview
npm run cf:deploy
```

The Cloudflare build uses OpenNext for Cloudflare and Wrangler. Production deployment requires Cloudflare authentication and project configuration.

## Roadmap

- Phase 1 - Foundation
- Phase 2 - Design System
- Phase 3 - Core Website Pages
- Phase 4 - MDX Content Engine
- Phase 5 - SEO, RSS, Sitemap, and Structured Data
- Phase 6 - Analytics, Newsletter, and Monetization
- Phase 7 - D1, R2, Auth, Products, and Scaling

See `docs/ROADMAP.md` for the active architecture roadmap.

## Documentation

- `docs/ARCHITECTURE.md`: application architecture, data flow, rendering, MDX, and Cloudflare compatibility
- `docs/DESIGN_SYSTEM.md`: tokens, color system, accessibility rules, and component architecture
- `docs/SEO.md`: metadata, sitemap, robots, RSS, canonical URLs, and structured data
- `docs/SECURITY.md`: headers, CSP, rate limiting, secrets, spam protection, and Cloudflare security
- `docs/CLOUDFLARE.md`: deployment commands and Cloudflare adapter notes

## Contribution Guide

- Use TypeScript for all application code.
- Prefer Server Components by default.
- Add Client Components only when browser interactivity is required.
- Keep dependencies minimal and Cloudflare-compatible.
- Use accessible HTML semantics and WCAG-aware interaction patterns.
- Keep shared logic in `src/lib`, `src/utils`, or `src/hooks` based on responsibility.
- Run linting and type checking before opening a pull request.

## Future Features

- Portfolio and case study pages
- Technical blog with MDX
- Resources library
- Learning notes
- AI and cybersecurity article collections
- RSS feed
- Newsletter integration
- Cloudflare D1-backed features
- Cloudflare R2-backed media workflows
- Better Auth if authentication becomes necessary
- SaaS product experiments

## License

This project is licensed under the MIT License. See the root repository `LICENSE` file.
