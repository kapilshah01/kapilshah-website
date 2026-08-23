import type { PublicComment } from "@/types/comments";

export function CommentsList({ comments }: { comments: PublicComment[] }) {
  if (!comments.length) return <p className="mt-6 text-sm text-muted-foreground">No approved comments yet.</p>;
  return <ol className="mt-6 space-y-5">{comments.map((comment) => <li key={comment.id} className="rounded-lg border border-border bg-surface p-5"><article><header className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-semibold text-foreground">{comment.name}</h3><time className="text-sm text-muted-foreground" dateTime={comment.created_at}>{new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(comment.created_at))}</time></header><p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{comment.body}</p></article></li>)}</ol>;
}
