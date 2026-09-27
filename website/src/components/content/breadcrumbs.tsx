import Link from "next/link";
import type { Article } from "@/types/content";
import { guideBreadcrumbs } from "@/lib/seo";

export function Breadcrumbs({ article }: { article: Article }) {
  const breadcrumbs = guideBreadcrumbs(article);

  return <nav aria-label="Breadcrumb" className="mb-8 text-sm"><ol className="flex flex-wrap items-center gap-2 text-muted-foreground">{breadcrumbs.map((breadcrumb, index) => <li key={`${breadcrumb.name}-${index}`} className="contents">{index > 0 ? <span aria-hidden="true">/</span> : null}{index < breadcrumbs.length - 1 && breadcrumb.href ? <Link href={new URL(breadcrumb.href).pathname} className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{breadcrumb.name}</Link> : <span aria-current="page" className="text-foreground">{breadcrumb.name}</span>}</li>)}</ol></nav>;
}
