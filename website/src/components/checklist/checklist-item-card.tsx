import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  const priorityVariant =
    item.priority === "critical"
      ? "critical"
      : item.priority === "high"
        ? "warning"
        : "default";

  const timeframeLabel =
    item.timeframe === "30-minutes"
      ? "30-Min Triage"
      : item.timeframe === "1-week"
        ? "1-Week Routine"
        : "1-Month Project";

  return (
    <article
      className={`rounded-xl border p-5 transition-all duration-200 sm:p-6 print:break-inside-avoid print:border-gray-300 print:bg-white print:p-4 ${
        isChecked
          ? "border-primary/50 bg-primary/5 dark:bg-primary/10 shadow-2xs"
          : "border-border bg-surface hover:border-border-strong hover:shadow-2xs"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Accessible Checkbox */}
        <div className="pt-0.5 print:hidden">
          <input
            type="checkbox"
            id={item.id}
            checked={isChecked}
            onChange={() => onToggle(item.id)}
            className="h-5 w-5 cursor-pointer rounded-md border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-labelledby={`${item.id}-title`}
          />
        </div>

        <div className="flex-1 space-y-4">
          {/* Header row: title and badges */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              {isChecked ? (
                <CheckCircle2 className="hidden h-5 w-5 text-primary sm:inline-block print:hidden shrink-0" aria-hidden="true" />
              ) : null}
              <label
                htmlFor={item.id}
                id={`${item.id}-title`}
                className={`cursor-pointer text-base sm:text-lg font-bold leading-snug transition-colors print:text-black ${
                  isChecked
                    ? "text-muted-foreground line-through decoration-muted-foreground/60 print:no-underline"
                    : "text-foreground"
                }`}
              >
                {item.number}. {item.title}
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 print:hidden">
              <Badge variant={priorityVariant} className="text-[10px] uppercase font-bold tracking-wider">
                {item.priority}
              </Badge>
              <Badge variant="default" className="text-[10px]">
                {timeframeLabel}
              </Badge>
            </div>
          </div>

          {/* Print-only status */}
          <div className="hidden print:block print:text-xs print:text-gray-700">
            <strong>Status:</strong> {isChecked ? "[X] Completed" : "[ ] Incomplete"} ·{" "}
            <strong>Priority:</strong> {item.priority.toUpperCase()} ·{" "}
            <strong>Phase:</strong> {timeframeLabel}
          </div>

          {/* Why it matters */}
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {item.whyItMatters}
          </p>

          {/* Action and verification details */}
          <div className="space-y-2.5 rounded-lg border border-border/80 bg-surface-muted/60 p-4 text-xs sm:text-sm print:border-gray-300 print:bg-transparent">
            <div>
              <strong className="font-semibold text-foreground">Action required: </strong>
              <span className="text-muted-foreground">{item.whatToDo}</span>
            </div>

            <div>
              <strong className="font-semibold text-foreground">Done looks like: </strong>
              <span className="text-muted-foreground">{item.doneLooksLike}</span>
            </div>

            <div className="pt-1 text-xs text-muted-foreground border-t border-border/50">
              <strong className="font-semibold text-foreground">Verification check: </strong>
              <span>{item.verificationMethod}</span>
            </div>
          </div>

          {/* Deep-dive link */}
          {item.deepDiveRoute ? (
            <div className="pt-1 print:hidden">
              <Link
                href={item.deepDiveRoute}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
              >
                <span>Read detailed technical guide: {item.deepDiveLabel ?? "Deep Dive"}</span>
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
