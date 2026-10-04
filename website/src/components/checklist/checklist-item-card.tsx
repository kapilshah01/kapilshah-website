import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { ChecklistItem } from "@/data/checklist";

interface ChecklistItemCardProps {
  item: ChecklistItem;
  isChecked: boolean;
  onToggle: (id: string) => void;
}

export function ChecklistItemCard({
  item,
  isChecked,
  onToggle,
}: ChecklistItemCardProps) {
  const priorityBadgeVariant =
    item.priority === "critical"
      ? "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400"
      : item.priority === "high"
        ? "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300"
        : "border-border bg-surface-muted text-muted-foreground";

  const timeframeLabel =
    item.timeframe === "30-minutes"
      ? "30 mins"
      : item.timeframe === "1-week"
        ? "1 week"
        : "1 month";

  return (
    <article
      className={`rounded-lg border p-5 transition-colors sm:p-6 print:break-inside-avoid print:border-border print:bg-white print:p-4 ${
        isChecked
          ? "border-primary/40 bg-surface-muted/40 dark:bg-surface-muted/20"
          : "border-border bg-surface hover:border-border/80"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Real native checkbox (hidden in print; print uses explicit status block below) */}
        <div className="pt-1 print:hidden">
          <input
            type="checkbox"
            id={item.id}
            checked={isChecked}
            onChange={() => onToggle(item.id)}
            className="h-5 w-5 cursor-pointer rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-labelledby={`${item.id}-title`}
          />
        </div>

        <div className="flex-1 space-y-4">
          {/* Header row: title and badges */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <label
              htmlFor={item.id}
              id={`${item.id}-title`}
              className={`cursor-pointer text-lg font-semibold leading-snug transition-colors print:text-black ${
                isChecked
                  ? "text-muted-foreground line-through decoration-muted-foreground/60 print:no-underline"
                  : "text-foreground"
              }`}
            >
              {item.title}
            </label>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 print:hidden">
              <span
                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium uppercase tracking-wide ${priorityBadgeVariant}`}
              >
                {item.priority}
              </span>
              <Badge className="text-xs">
                {timeframeLabel}
              </Badge>
            </div>
          </div>

          {/* Print-only status and badges */}
          <div className="hidden print:block print:text-xs print:text-gray-600">
            <strong>Status:</strong> {isChecked ? "[X] Completed" : "[ ] Incomplete"} ·{" "}
            <strong>Priority:</strong> {item.priority.toUpperCase()} ·{" "}
            <strong>Timeframe:</strong> {timeframeLabel}
          </div>

          {/* Why it matters */}
          <p className="text-sm leading-6 text-muted-foreground">
            {item.whyItMatters}
          </p>

          {/* Action and verification details */}
          <div className="space-y-2 rounded-md border border-border/70 bg-surface-muted/50 p-3.5 text-sm sm:p-4 print:border-gray-300 print:bg-transparent">
            <div>
              <strong className="font-semibold text-foreground">What to do: </strong>
              <span className="text-muted-foreground">{item.whatToDo}</span>
            </div>

            <div>
              <strong className="font-semibold text-foreground">Done looks like: </strong>
              <span className="text-muted-foreground">{item.doneLooksLike}</span>
            </div>

            <div className="pt-1 text-xs text-muted-foreground">
              <strong className="font-medium text-foreground">Verification check: </strong>
              {item.verificationMethod}
            </div>
          </div>

          {/* Deep-dive link (hidden in print) */}
          {item.deepDiveRoute ? (
            <div className="pt-1 print:hidden">
              <Link
                href={item.deepDiveRoute}
                className="inline-flex items-center text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Read in-depth guide: {item.deepDiveLabel ?? "Detailed Guide"} &rarr;
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
