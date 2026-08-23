# Comments and Moderation

Apply `supabase/migrations/20260815_create_comments.sql` in the Supabase SQL editor or migration workflow before enabling submissions.

The migration creates a `comments` table with pending, approved, rejected, and spam states plus a nullable `parent_id` for future replies. Public inserts are limited by RLS to pending comments. Direct public reads from `comments` are revoked; `approved_comments` is a minimal view that never includes email or moderation fields.

Set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in `.env.local` for local development, and configure the same values as Cloudflare environment variables for preview and production. Do not use or expose a service-role key in the application.
