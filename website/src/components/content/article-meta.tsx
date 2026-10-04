import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { ArticleMetadata } from "@/types/content";

export function ArticleMeta({ article }: { article: ArticleMetadata }) {
  return (
    <p className="text-sm text-muted-foreground">
      By{" "}
      <Link
        href="/about"
        className="font-medium text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {article.author}
      </Link>{" "}
      · <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      {article.updatedAt ? (
        <>
          {" "}
          · Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
        </>
      ) : null}{" "}
      · {article.readingTime} min read
    </p>
  );
}
