import { ArticleCard } from "@/components/content/article-card";
import type { Article } from "@/types/content";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;

  return (
    <aside className="mt-16 border-t border-border pt-12" aria-labelledby="related-articles-title">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Next steps &amp; recommendations
        </p>
        <h2 id="related-articles-title" className="mt-1 text-2xl font-bold tracking-tight text-foreground">
          Related Cybersecurity Guides
        </h2>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </aside>
  );
}
