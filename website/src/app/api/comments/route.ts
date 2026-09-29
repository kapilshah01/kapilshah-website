import { getArticleBySlug } from "@/lib/content";
import { getSupabaseClient } from "@/lib/supabase";
import type { CommentSubmission, PublicComment } from "@/types/comments";

const maxRequestBytes = 16_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const controlCharacters = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;

function supabaseConfigStatus() {
  let urlHost: string | null = null;
  try {
    if (process.env.SUPABASE_URL) urlHost = new URL(process.env.SUPABASE_URL).host;
  } catch {
    urlHost = "invalid-url";
  }
  return {
    hasUrl: Boolean(process.env.SUPABASE_URL),
    hasPublishableKey: Boolean(process.env.SUPABASE_PUBLISHABLE_KEY),
    urlHost,
  };
}

function validSubmission(value: unknown): CommentSubmission | null {
  if (!value || typeof value !== "object") return null;
  const { name, email, body } = value as Record<string, unknown>;
  if (typeof name !== "string" || typeof body !== "string" || (email !== undefined && typeof email !== "string")) return null;

  const cleanName = name.trim();
  const cleanEmail = email?.trim() || undefined;
  const cleanBody = body.trim();
  if (
    cleanName.length < 2 || cleanName.length > 80 ||
    cleanBody.length < 10 || cleanBody.length > 2_000 ||
    controlCharacters.test(cleanName) || controlCharacters.test(cleanBody) ||
    (cleanEmail && (cleanEmail.length > 254 || !emailPattern.test(cleanEmail)))
  ) return null;

  return { name: cleanName, email: cleanEmail, body: cleanBody };
}

function apiError(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("articleSlug");
  if (!slug) return apiError("An article is required to load comments.", 400);
  if (!getArticleBySlug(slug)) return apiError("This guide is not available for comments.", 404);

  const supabase = getSupabaseClient();
  if (!supabase) {
    console.error("Supabase comments are not configured.", supabaseConfigStatus());
    return apiError("Comments are temporarily unavailable.", 503);
  }

  try {
    const { data, error } = await supabase
      .from("approved_comments")
      .select("id, article_slug, name, body, created_at")
      .eq("article_slug", slug)
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Unable to load approved comments", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });
      return apiError("Comments are temporarily unavailable.", 500);
    }
    return Response.json({ comments: (data ?? []) as PublicComment[] }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Unexpected error loading approved comments", error);
    return apiError("Comments are temporarily unavailable.", 500);
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxRequestBytes) return apiError("Comment submission is too large.", 413);

  let payload: { articleSlug?: unknown; comment?: unknown; companyWebsite?: unknown } | null;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxRequestBytes) return apiError("Comment submission is too large.", 413);
    payload = JSON.parse(rawBody) as typeof payload;
  } catch {
    return apiError("The comment request is invalid.", 400);
  }

  // Quietly accept honeypot submissions without storing them.
  if (typeof payload?.companyWebsite === "string" && payload.companyWebsite.trim()) {
    return Response.json({ message: "Your comment has been submitted for review." }, { status: 201, headers: { "Cache-Control": "no-store" } });
  }

  const slug = typeof payload?.articleSlug === "string" ? payload.articleSlug : "";
  const comment = validSubmission(payload?.comment);
  if (!getArticleBySlug(slug)) return apiError("This guide is not available for comments.", 404);
  if (!comment) return apiError("Please provide a name and a comment between 10 and 2,000 characters. Include a valid email if supplied.", 400);

  const supabase = getSupabaseClient();
  if (!supabase) {
    console.error("Supabase comments are not configured.", supabaseConfigStatus());
    return apiError("Comment submissions are temporarily unavailable.", 503);
  }

  try {
    // Do not request a returned row: the pending insert need not have public SELECT permission.
    const { error } = await supabase.from("comments").insert({
      article_slug: slug,
      name: comment.name,
      email: comment.email ?? null,
      body: comment.body,
      status: "pending",
    });
    if (error) {
      console.error("Unable to submit comment", { code: error.code, message: error.message });
      return apiError("We could not submit your comment right now. Please try again later.", 500);
    }
    return Response.json({ message: "Your comment has been submitted for review." }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Unexpected error submitting comment", error);
    return apiError("We could not submit your comment right now. Please try again later.", 500);
  }
}
