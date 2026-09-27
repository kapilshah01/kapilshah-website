# Comments and moderation

## Application data contract

The existing `public.comments` table is expected to have `id`, `article_slug`, `name`, `email`, `body`, `status`, and `created_at`. The API inserts `article_slug`, `name`, optional `email`, `body`, and a server-selected `status = 'pending'`. It deliberately does not request a returned row because anonymous visitors cannot select raw comments. The public list reads only `id`, `article_slug`, `name`, `body`, and `created_at` from `public.approved_comments`, filtered to the current article slug. The view must expose approved comments only and must not expose email or moderation fields.

This checkout has no `supabase/` directory or SQL migration file. An earlier version of this document referred to `supabase/migrations/20260815_create_comments.sql`, but that file is not present here. The live database schema, view definition, grants, and RLS policies have not been verified from this checkout. Do not treat the application contract as proof the database is provisioned correctly.

Before enabling submissions, verify the existing Supabase project has the table/view and columns above. Check both table/view privileges and RLS policies. The `anon` role needs only the insert columns accepted by policy on `comments`, and SELECT access to the safe `approved_comments` view; direct SELECT of `comments` and any ability to set arbitrary status values must remain unavailable to public users. Ensure the insert policy only accepts pending rows. Do not add a service-role key to this application.

## Environment

Set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in `.env.local` for local development and as runtime environment variables for the deployed Worker. These are the only variables read by `src/lib/supabase.ts`. Missing configuration makes comment API operations return a clear 503 response; it is not treated as an empty comment list.

`.env.example` contains empty placeholders only. `.env.local` is ignored by Git. Never log or commit key values; server diagnostics may record only whether each variable exists, the URL hostname, and Supabase error code/message. Use only the publishable key with the intended anonymous RLS policies; never use a service-role key to work around policy errors.

## Local checks

Start the Next.js app from `website/` with `npm run dev`, submit a valid comment on a published guide, and confirm the response is 201 and the row appears in Supabase with `status = pending`. Use a clearly labeled test comment and remove it through authorized database moderation after verifying if it should not remain. Also check malformed input (400), unknown slug (404), a filled honeypot (no row), approved-only GET output, and a deliberate unavailable/failed Supabase configuration (non-2xx). The browser must never receive an email field. Do not query raw pending comments through the public API.

## Moderation

Visitor submissions are stored as pending. Only the approved-comments view is queried by the public application. Moderation remains a database/operator responsibility; there is no admin interface in this project.

Approve or reject pending submissions through authorized Supabase administrative access under the site's review policy. No public moderation endpoint or client-side admin credential exists.
