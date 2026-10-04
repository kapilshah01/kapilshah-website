import type { Metadata } from "next";
import { ArticleCard } from "@/components/content/article-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { SearchButton } from "@/components/search/search-dialog";
import { getAllArticles } from "@/lib/content";
import { contentPillars } from "@/types/content";

export const metadata: Metadata = {
  title: "Cybersecurity Guides for Small Businesses",
  description:
    "Practical, vendor-neutral cybersecurity guides for small businesses without a dedicated IT security team. Actionable baselines for accounts, email, workstations, networks, and backups.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const articles = getAllArticles();
  const featured = articles.filter((article) => article.featured);

  return (
    <main className="flex-1">
      <Section className="py-12 sm:py-16">
        <Container>
          {/* Header */}
          <header className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">Knowledge Library</Badge>
              <span className="text-xs text-muted-foreground">
                {articles.length} Published Practical Guides
              </span>
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Practical Cybersecurity Guides
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Vendor-neutral security guidance designed for small business owners, office managers, and operations leads. Every guide focuses on native controls, clear verification steps, and realistic operational schedules.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SearchButton className="px-4 py-2" />
            </div>
          </header>

          {/* Quick jump filter bar */}
          <nav className="mt-12" aria-label="Security pillars jump navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Browse by Operational Pillar:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {contentPillars.map((pillar) => {
                const count = articles.filter((a) => a.category === pillar.value).length;
                return (
                  <a
                    key={pillar.value}
                    href={`#${pillar.value}`}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-primary/50 hover:bg-surface-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {pillar.label}
                        </p>
                        <span className="text-xs font-medium text-muted-foreground bg-surface-muted px-2 py-0.5 rounded-full">
                          {count} {count === 1 ? "guide" : "guides"}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {pillar.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Featured Guides Section */}
          {featured.length > 0 ? (
            <section className="mt-16" aria-labelledby="featured-guides-title">
              <div className="border-b border-border/70 pb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Core Foundations
                </p>
                <h2
                  id="featured-guides-title"
                  className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  Featured Guides
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          ) : null}

          {/* All Guides By Pillar Section */}
          <section className="mt-20" aria-labelledby="all-pillars-title">
            <div className="border-b border-border/70 pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Comprehensive Archive
              </p>
              <h2
                id="all-pillars-title"
                className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                All Guides by Operational Domain
              </h2>
            </div>

            <div className="mt-10 space-y-16">
              {contentPillars.map((pillar) => {
                const pillarArticles = articles.filter(
                  (article) => article.category === pillar.value
                );

                return (
                  <section
                    key={pillar.value}
                    id={pillar.value}
                    aria-labelledby={`${pillar.value}-title`}
                    className="scroll-mt-20"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-border/50 pb-3">
                      <div>
                        <h3
                          id={`${pillar.value}-title`}
                          className="text-xl font-bold tracking-tight text-foreground"
                        >
                          {pillar.label}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground mt-2 sm:mt-0">
                        {pillarArticles.length} {pillarArticles.length === 1 ? "guide" : "guides"}
                      </span>
                    </div>

                    {pillarArticles.length > 0 ? (
                      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {pillarArticles.map((article) => (
                          <ArticleCard key={article.slug} article={article} />
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 text-xs text-muted-foreground italic">
                        Guides for this domain are currently in preparation.
                      </p>
                    )}
                  </section>
                );
              })}
            </div>
          </section>
        </Container>
      </Section>
    </main>
  );
}
