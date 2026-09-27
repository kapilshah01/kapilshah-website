"use client";

import { useCallback, useEffect, useState } from "react";
import { CommentForm } from "@/components/content/comment-form";
import { CommentsList } from "@/components/content/comments-list";
import type { PublicComment } from "@/types/comments";

export function CommentsSection({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [loadError, setLoadError] = useState(false);
  const [loading, setLoading] = useState(true);
  const loadComments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/comments?articleSlug=${encodeURIComponent(articleSlug)}`, { cache: "no-store" });
      if (!response.ok) {
        setLoadError(true);
        setComments([]);
        return;
      }
      const result = await response.json() as { comments?: PublicComment[] };
      setComments(result.comments ?? []);
      setLoadError(false);
    } catch {
      setLoadError(true);
      setComments([]);
    } finally {
      setLoading(false);
    }
  }, [articleSlug]);
  // The request completes asynchronously; this is not a synchronous effect-state update.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { void loadComments(); }, [loadComments]);
  return <section className="mt-14 border-t border-border pt-10" aria-labelledby="comments-title"><h2 id="comments-title" className="text-2xl font-bold tracking-tight text-foreground">Comments</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Comments are reviewed before they appear publicly.</p>{loadError ? <p role="status" className="mt-6 text-sm text-muted-foreground">Approved comments are temporarily unavailable.</p> : loading ? <p role="status" className="mt-6 text-sm text-muted-foreground">Loading approved comments…</p> : <CommentsList comments={comments} />}<CommentForm articleSlug={articleSlug} onSubmitted={() => { void loadComments(); }} /></section>;
}
