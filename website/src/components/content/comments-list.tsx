import type { PublicComment } from "@/types/comments";
import { MessageSquare } from "lucide-react";

export function CommentsList({ comments }: { comments: PublicComment[] }) {
  if (!comments.length) {
    return (
      <div className="my-6 rounded-xl border border-dashed border-border bg-surface/50 p-6 text-center">
        <MessageSquare className="mx-auto h-8 w-8 text-muted-foreground/60" aria-hidden="true" />
        <p className="mt-2 text-sm font-medium text-foreground">No comments published yet</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Be the first to share your field experience, question, or implementation insight.
        </p>
      </div>
    );
  }

  return (
    <ol className="my-6 space-y-4">
      {comments.map((comment) => {
        const initial = comment.name.trim().charAt(0).toUpperCase() || "?";
        const formattedDate = new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(comment.created_at));

        return (
          <li
            key={comment.id}
            className="rounded-xl border border-border bg-surface p-5 sm:p-6 transition-colors shadow-xs"
          >
            <article>
              <header className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary"
                  aria-hidden="true"
                >
                  {initial}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {comment.name}
                  </h3>
                  <time
                    className="text-xs text-muted-foreground"
                    dateTime={comment.created_at}
                  >
                    {formattedDate}
                  </time>
                </div>
              </header>
              <div className="mt-3.5 pl-12 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-words">
                {comment.body}
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
