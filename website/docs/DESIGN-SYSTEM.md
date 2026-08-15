# Design System

## Goals

The design system should feel modern, professional, minimal, technical, accessible, fast, and mobile-first. It must support long-form reading, portfolio pages, project cards, resource indexes, tools, contact flows, and future product surfaces without becoming visually noisy.

## Design Principles

- Prioritize content clarity over decoration.
- Use semantic design tokens instead of hard-coded component colors.
- Keep layouts responsive and stable across mobile and desktop.
- Use motion only to clarify state changes.
- Keep components accessible by default.
- Avoid unnecessary client-side design dependencies.

## Typography

Initial font strategy:

- Use the current system font stack: `Arial, Helvetica, sans-serif`.
- Defer external or branded fonts until the visual identity is finalized.
- If brand fonts are added later, use Next font tooling or self-hosted static assets to avoid layout shift.

Scale:

| Token | Size | Usage |
| --- | --- | --- |
| `text-xs` | `0.75rem / 1rem` | Metadata, badges, compact labels |
| `text-sm` | `0.875rem / 1.25rem` | Secondary UI text |
| `text-base` | `1rem / 1.5rem` | Body text and forms |
| `text-lg` | `1.125rem / 1.75rem` | Lead copy and article intros |
| `text-xl` | `1.25rem / 1.75rem` | Card titles |
| `text-2xl` | `1.5rem / 2rem` | Section headings |
| `text-3xl` | `1.875rem / 2.25rem` | Page headings |
| `text-4xl` | `2.25rem / 2.5rem` | Major headings |
| `text-5xl` | `3rem / 1.1` | First-viewport editorial headings |

Weights:

- `400`: body copy.
- `500`: navigation, labels, compact emphasis.
- `600`: headings and strong calls to action.
- `700`: rare use for high-emphasis editorial headings.

Letter spacing should remain normal for most text. Avoid viewport-based font scaling.

## Spacing

Use Tailwind's 4px spacing scale.

| Token | Value | Usage |
| --- | --- | --- |
| `1` | `0.25rem` | Tight icon gaps |
| `2` | `0.5rem` | Labels and compact groups |
| `3` | `0.75rem` | Badge groups |
| `4` | `1rem` | Standard component rhythm |
| `6` | `1.5rem` | Card internals |
| `8` | `2rem` | Content group spacing |
| `12` | `3rem` | Section rhythm |
| `16` | `4rem` | Page-level vertical spacing |
| `24` | `6rem` | Major landing sections |

## Containers

| Token | Width | Usage |
| --- | --- | --- |
| `container-sm` | `640px` | Forms and compact content |
| `container-md` | `768px` | Articles and learning notes |
| `container-lg` | `1024px` | Standard page sections |
| `container-xl` | `1280px` | Portfolio and archive grids |
| `container-2xl` | `1440px` | Future product surfaces |

Article prose should usually stay between 680px and 780px for comfortable reading.

## Radius

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | `0.25rem` | Badges and compact controls |
| `radius-md` | `0.375rem` | Buttons and inputs |
| `radius-lg` | `0.5rem` | Cards and alerts |
| `radius-xl` | `0.75rem` | Rare large panels |

Cards should stay at 8px radius or less unless a future product interface has a clear reason.

## Shadows

- `shadow-none`: default.
- `shadow-sm`: subtle cards and sticky navigation.
- `shadow-md`: dropdowns, popovers, and command menus.
- `shadow-lg`: modals and elevated overlays.

Prefer spacing and borders before shadows.

## Breakpoints

Use Tailwind defaults:

| Breakpoint | Width | Strategy |
| --- | --- | --- |
| `sm` | `640px` | Larger mobile refinements |
| `md` | `768px` | Tablet navigation and two-column content |
| `lg` | `1024px` | Desktop navigation and grids |
| `xl` | `1280px` | Wide archives and project layouts |
| `2xl` | `1536px` | Large-screen polish |

## Z-Index Strategy

| Token | Usage |
| --- | --- |
| `z-10` | Sticky headers and local overlays |
| `z-20` | Dropdowns and popovers |
| `z-30` | Mobile navigation |
| `z-40` | Modals |
| `z-50` | Toasts and critical overlays |

Avoid arbitrary z-index values unless a component has a documented stacking need.

## Motion

- Keep transitions between 150ms and 250ms.
- Animate opacity and transform when possible.
- Avoid layout-shifting animations.
- Respect `prefers-reduced-motion`.
- Do not animate long-form reading content unnecessarily.

## Color System

Use semantic tokens in CSS variables and Tailwind theme mapping.

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| `background` | `#ffffff` | `#020617` | Page background |
| `foreground` | `#111827` | `#f8fafc` | Primary text |
| `surface` | `#ffffff` | `#0f172a` | Cards, panels, nav |
| `primary` | `#0f766e` | `#2dd4bf` | Primary actions |
| `secondary` | `#334155` | `#cbd5e1` | Secondary emphasis |
| `accent` | `#f59e0b` | `#fbbf24` | Highlights |
| `muted` | `#f8fafc` | `#0f172a` | Soft backgrounds |
| `muted-foreground` | `#64748b` | `#94a3b8` | Secondary text |
| `border` | `#e2e8f0` | `#334155` | Separators |
| `success` | `#15803d` | `#4ade80` | Positive state |
| `warning` | `#b45309` | `#facc15` | Warning state |
| `error` | `#dc2626` | `#f87171` | Error state |

Component code should use semantic tokens such as `background`, `foreground`, `primary`, `muted`, `border`, and state tokens rather than raw hex values.

## Accessibility

- Meet WCAG AA contrast for text and controls.
- Provide visible focus states.
- Use semantic HTML before ARIA.
- Make touch targets at least 44px where practical.
- Never rely on color alone for status.
- Ensure keyboard navigation works for menus, forms, pagination, search, and modal workflows.

