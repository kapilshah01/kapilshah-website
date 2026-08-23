import { CategoryBadge } from "@/components/content/category-badge";
import { ArticleMeta } from "@/components/content/article-meta";
import type { ArticleMetadata } from "@/types/content";
export function ArticleHeader({ article }: { article: ArticleMetadata }) { return <header><CategoryBadge category={article.category} /><h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{article.title}</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">{article.description}</p><div className="mt-6"><ArticleMeta article={article} /></div></header>; }
