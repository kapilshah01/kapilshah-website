# Security

## Goals

The security baseline should protect visitors, future forms, future publishing workflows, and future product features without adding infrastructure before it is needed.

## Principles

- Keep secrets out of Git.
- Prefer Cloudflare-native protections where practical.
- Validate every untrusted input at route boundaries.
- Use least privilege for future bindings and integrations.
- Avoid runtime dependencies that require unsupported Node.js APIs.

## Headers

Recommended production headers:

| Header | Purpose |
| --- | --- |
| `Content-Security-Policy` | Restrict scripts, styles, images, connections, and frames |
| `X-Content-Type-Options: nosniff` | Prevent MIME sniffing |
| `Referrer-Policy: strict-origin-when-cross-origin` | Reduce referrer leakage |
| `Permissions-Policy` | Disable unused browser capabilities |
| `Strict-Transport-Security` | Enforce HTTPS after custom domain validation |
| `frame-ancestors 'none'` | Prevent clickjacking |

Headers may be configured in Next.js or Cloudflare. Cloudflare-level configuration is often better for environment-specific controls.

## CSP Strategy

Start strict and expand only when analytics, forms, images, embeds, or third-party tools are added.

```text
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self';
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

The inline style allowance should be reviewed when the production UI is implemented.

## Environment Variables

- Use `.env.local` only for local development.
- Store preview and production secrets in Cloudflare.
- Expose browser variables only with intentional `NEXT_PUBLIC_` names.
- Document new environment variables when they are introduced.

## Future Forms

Contact and newsletter flows should eventually include:

- Server-side schema validation.
- Payload size limits.
- Honeypot field.
- Cloudflare Turnstile when public forms launch.
- Cloudflare rate limiting.
- Plain-text or sanitized storage.
- No direct secret exposure to the browser.

No form backend is added in Phase 2.

## Comments

Comments use a public Supabase publishable key only in the server-side Edge route. The `comments` table has RLS enabled: the public role can insert only pending comments and has no direct table read permission. Approved comments are exposed through an email-free `approved_comments` view. Moderation status changes and private email access remain restricted to Supabase administrators. Required environment variables are `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`; neither belongs in Git or browser JavaScript.

## Future Rate Limiting

Use Cloudflare WAF or rate limiting for:

- Contact submissions.
- Newsletter signup endpoints.
- Search endpoints.
- Future authentication routes.
- Future SaaS APIs.

Application-level rate limiting can later use D1 or KV if route-specific state is required.

## Cloudflare Security Controls

Recommended controls for production:

- DNS proxying.
- SSL/TLS Full Strict.
- Always Use HTTPS.
- WAF managed rules.
- Turnstile for public forms.
- Rate limiting for write endpoints.
- Security event monitoring.

## Deferred Security Work

Phase 2 does not add authentication, databases, APIs, newsletter infrastructure, or SaaS security controls. Those belong to later phases when the related product surface exists.
