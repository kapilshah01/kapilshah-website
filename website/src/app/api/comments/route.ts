import { getArticleBySlug } from "@/lib/content";
import { getSupabaseClient } from "@/lib/supabase";
import type { CommentSubmission, PublicComment } from "@/types/comments";

export const runtime = "edge";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validSubmission(value: unknown): CommentSubmission | null {
  if (!value || typeof value !== "object") return null;
  const { name, email, body } = value as Record<string, unknown>;
  if (typeof name !== "string" || typeof body !== "string" || (email !== undefined && typeof email !== "string")) return null;
  const cleanName = name.trim(); const cleanEmail = email?.trim() || undefined; const cleanBody = body.trim();
  if (cleanName.length < 2 || cleanName.length > 80 || cleanBody.length < 10 || cleanBody.length > 2_000 || (cleanEmail && !emailPattern.test(cleanEmail))) return null;
  return { name: cleanName, email: cleanEmail, body: cleanBody };
}

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("articleSlug");
  if (!slug || !getArticleBySlug(slug)) return Response.json({ comments: [] });
  const supabase = getSupabaseClient();
  if (!supabase) return Response.json({ comments: [] });
  const { data, error } = await supabase.from("approved_comments").select("id, article_slug, name, body, created_at").eq("article_slug", slug).order("created_at", { ascending: false });
  if (error) { console.error("Unable to load approved comments", error.message); return Response.json({ comments: [] }); }
  return Response.json({ comments: (data ?? []) as PublicComment[] });
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 4_500) return Response.json({ message: "Comment submission is too large." }, { status: 413 });
  const payload = await request.json().catch(() => null) as { articleSlug?: unknown; comment?: unknown } | null;
  const slug = typeof payload?.articleSlug === "string" ? payload.articleSlug : "";
  const comment = validSubmission(payload?.comment);
  if (!getArticleBySlug(slug)) return Response.json({ message: "This guide is not available for comments." }, { status: 404 });
  if (!comment) return Response.json({ message: "Please provide a name, a valid optional email, and a comment between 10 and 2,000 characters." }, { status: 400 });
  const supabase = getSupabaseClient();
  if (!supabase) return Response.json({ message: "Comment submissions are not available yet." }, { status: 503 });
  const { error } = await supabase.from("comments").insert({ article_slug: slug, name: comment.name, email: comment.email ?? null, body: comment.body, status: "pending" });
  if (error) { console.error("Unable to submit comment", error.message); return Response.json({ message: "We could not submit your comment right now. Please try again later." }, { status: 500 }); }
  return Response.json({ message: "Your comment has been submitted for review." }, { status: 201 });
}
