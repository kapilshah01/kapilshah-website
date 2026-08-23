import { formatDate } from "@/lib/format";
import type { ArticleMetadata } from "@/types/content";
export function ArticleMeta({ article }: { article: ArticleMetadata }) { return <p className="text-sm text-muted-foreground">By {article.author} · <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>{article.updatedAt ? <> · Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time></> : null} · {article.readingTime} min read</p>; }
