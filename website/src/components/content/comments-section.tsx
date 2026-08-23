"use client";

import { useCallback, useEffect, useState } from "react";
import { CommentForm } from "@/components/content/comment-form";
import { CommentsList } from "@/components/content/comments-list";
import type { PublicComment } from "@/types/comments";

export function CommentsSection({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<PublicComment[]>([]);
  const loadComments = useCallback(async () => { const response = await fetch(`/api/comments?articleSlug=${encodeURIComponent(articleSlug)}`); if (!response.ok) return; const result = await response.json() as { comments?: PublicComment[] }; setComments(result.comments ?? []); }, [articleSlug]);
  // The request completes asynchronously; this is not a synchronous effect-state update.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { void loadComments(); }, [loadComments]);
  return <section className="mt-14 border-t border-border pt-10" aria-labelledby="comments-title"><h2 id="comments-title" className="text-2xl font-bold tracking-tight text-foreground">Comments</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Comments are reviewed before they appear publicly.</p><CommentsList comments={comments} /><CommentForm articleSlug={articleSlug} onSubmitted={() => { void loadComments(); }} /></section>;
}
