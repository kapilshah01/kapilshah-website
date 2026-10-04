import { Badge } from "@/components/ui/badge";
import { getPillar } from "@/lib/content";
import type { ArticleCategory } from "@/types/content";

export function CategoryBadge({
  category,
  className = "",
}: {
  category: ArticleCategory;
  className?: string;
}) {
  const pillar = getPillar(category);
  return (
    <Badge variant="primary" className={className}>
      {pillar ? pillar.label : category}
    </Badge>
  );
}
