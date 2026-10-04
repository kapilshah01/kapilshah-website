import Link from "next/link";
import { User, Calendar, Clock, ShieldCheck } from "lucide-react";
import { formatDate } from "@/lib/format";
import type { ArticleMetadata } from "@/types/content";

export function ArticleMeta({ article }: { article: ArticleMetadata }) {
  const displayDate = article.updatedAt ?? article.publishedAt;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-border/80 py-3 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5 font-medium text-foreground">
        <User className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        <Link
          href="/about"
          className="rounded-xs hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {article.author}
        </Link>
      </span>

      <span className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        <span>
          {article.updatedAt ? "Updated " : "Published "}
          <time dateTime={displayDate}>{formatDate(displayDate)}</time>
        </span>
      </span>

      {article.readingTime ? (
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <span>{article.readingTime} min read</span>
        </span>
      ) : null}

      <span className="ml-auto flex items-center gap-1 text-[11px] font-medium text-primary">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Vendor-neutral guidance</span>
      </span>
    </div>
  );
}
