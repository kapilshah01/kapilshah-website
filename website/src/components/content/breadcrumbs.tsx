import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { Article } from "@/types/content";
import { guideBreadcrumbs } from "@/lib/seo";

export function Breadcrumbs({ article }: { article: Article }) {
  const breadcrumbs = guideBreadcrumbs(article);

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          let href = breadcrumb.href || "/";
          if (href.startsWith("http")) {
            try {
              href = new URL(href).pathname;
            } catch {
              // fallback
            }
          }

          return (
            <li key={`${breadcrumb.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
              ) : null}
              {isLast ? (
                <span aria-current="page" className="max-w-xs truncate font-medium text-foreground sm:max-w-md">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={href}
                  className="flex items-center gap-1 rounded-xs transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {index === 0 ? <Home className="h-3 w-3" aria-hidden="true" /> : null}
                  <span>{breadcrumb.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
