import Link from "next/link";
import { CategoryBadge } from "@/components/content/category-badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";
export function ArticleCard({ article }: { article: Article }) { return <Card><CategoryBadge category={article.category} /><h2 className="mt-4 text-xl font-semibold text-foreground"><Link href={`/guides/${article.slug}`} className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{article.title}</Link></h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p><p className="mt-5 text-sm text-muted-foreground">{article.difficulty} · {article.readingTime} min read · <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></p></Card>; }
