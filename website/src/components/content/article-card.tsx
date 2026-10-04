import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { CategoryBadge } from "@/components/content/category-badge";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  const displayDate = article.updatedAt ?? article.publishedAt;

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-sm">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CategoryBadge category={article.category} />
          {article.readingTime ? (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{article.readingTime} min read</span>
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
          <Link
            href={`/guides/${article.slug}`}
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm leading-6 text-muted-foreground line-clamp-3">
          {article.description}
        </p>

        {article.tags && article.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" aria-hidden="true" />
          <time dateTime={displayDate}>{formatDate(displayDate)}</time>
        </span>

        <Link
          href={`/guides/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-primary group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`Read guide: ${article.title}`}
        >
          <span>Read guide</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
