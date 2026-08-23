import { Badge } from "@/components/ui/badge";
import { getPillar } from "@/lib/content";
import type { ArticleCategory } from "@/types/content";
export function CategoryBadge({ category }: { category: ArticleCategory }) { return <Badge>{getPillar(category).label}</Badge>; }
