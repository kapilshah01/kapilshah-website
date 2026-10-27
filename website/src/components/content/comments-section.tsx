"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Mail, ArrowUpRight } from "lucide-react";
import { CommentForm } from "@/components/content/comment-form";
import { CommentsList } from "@/components/content/comments-list";
import type { PublicComment } from "@/types/comments";

interface CommentsSectionProps {
  articleSlug: string;
}

export function CommentsSection({ articleSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadComments = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/comments?articleSlug=${encodeURIComponent(articleSlug)}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        setIsUnavailable(true);
        setComments([]);
        return;
      }

      const result = (await response.json()) as {
        comments?: PublicComment[];
        unavailable?: boolean;
      };

      if (result.unavailable) {
        setIsUnavailable(true);
        setComments([]);
      } else {
        setComments(result.comments ?? []);
        setIsUnavailable(false);
      }
    } catch {
      setIsUnavailable(true);
      setComments([]);
    } finally {
      setLoading(false);
    }
  }, [articleSlug]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadComments();
  }, [loadComments]);

  const emailFeedbackHref = `mailto:kapilshahsonar@gmail.com?subject=${encodeURIComponent(
    `Feedback on guide: ${articleSlug}`
  )}`;

  return (
    <section
      id="comments"
      className="mt-14 border-t border-border pt-10"
      aria-labelledby="comments-title"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <h2
              id="comments-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
            >
              Comments &amp; Discussion
            </h2>
          </div>
        </div>

        {!loading && !isUnavailable && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface border border-border text-muted-foreground">
            {comments.length} {comments.length === 1 ? "comment" : "comments"}
          </span>
        )}
      </div>

      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Join the practical security conversation. All submissions are moderated to maintain high editorial standards and prevent spam.
      </p>

      {loading ? (
        <div className="my-8 rounded-xl border border-border bg-surface/50 p-6 text-center text-xs sm:text-sm text-muted-foreground">
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent mr-2 align-middle" />
          <span>Loading approved comments…</span>
        </div>
      ) : isUnavailable ? (
        /* Graceful offline/maintenance fallback */
        <div className="my-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Have questions, corrections, or field insights for this guide?
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Our live comment database is currently undergoing scheduled maintenance. In the meantime, we actively welcome your technical feedback, updated screenshots, or real-world implementation questions directly via email.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={emailFeedbackHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email kapilshahsonar@gmail.com</span>
                </a>

                <Link
                  href="/about#feedback"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-medium text-foreground hover:bg-surface-elevated transition-colors"
                >
                  <span>Read our editorial correction policy</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Active comments list and form */
        <>
          <CommentsList comments={comments} />
          <CommentForm
            articleSlug={articleSlug}
            onSubmitted={() => {
              setLoading(true);
              void loadComments();
            }}
          />
        </>
      )}
    </section>
  );
}
