"use client";

import { useState } from "react";
import { Printer, RotateCcw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { checklistCategories, type ChecklistItem } from "@/data/checklist";

interface ChecklistProgressProps {
  items: ChecklistItem[];
  completedIds: string[];
  onReset: () => void;
}

export function ChecklistProgress({
  items,
  completedIds,
  onReset,
}: ChecklistProgressProps) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const totalCount = items.length;
  const completedCount = completedIds.filter((id) =>
    items.some((item) => item.id === id)
  ).length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleConfirmReset = () => {
    onReset();
    setShowResetConfirm(false);
  };

  return (
    <section
      aria-label="Checklist progress dashboard"
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm print:border-none print:p-0"
    >
      {/* Top summary row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary print:hidden">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-foreground print:text-black">
              Baseline Security Progress
            </h2>
          </div>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground print:text-black">
            <strong className="text-foreground font-semibold print:text-black">
              {completedCount} of {totalCount} controls verified
            </strong>{" "}
            ({percentage}% complete)
          </p>
        </div>

        {/* Action buttons (hidden in print) */}
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handlePrint}
            className="gap-1.5 text-xs"
            aria-label="Print or save checklist as PDF"
          >
            <Printer className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Print / Save PDF</span>
          </Button>

          {completedCount > 0 ? (
            showResetConfirm ? (
              <div className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-1">
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="rounded px-2.5 py-1 text-xs font-bold text-amber-900 hover:bg-amber-500/20 dark:text-amber-200 cursor-pointer"
                >
                  Confirm Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-surface-muted cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowResetConfirm(true)}
                className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                aria-label="Reset checklist progress"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset</span>
              </Button>
            )
          ) : null}
        </div>
      </div>

      {/* Visual progress bar */}
      <div className="mt-5">
        <div
          role="progressbar"
          aria-valuenow={completedCount}
          aria-valuemin={0}
          aria-valuemax={totalCount}
          aria-label="Checklist completion progress"
          className="h-3.5 w-full overflow-hidden rounded-full bg-surface-muted print:border print:border-gray-400"
        >
          <div
            className="h-full bg-primary transition-all duration-300 ease-out motion-reduce:transition-none print:bg-black"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Category breakdown pills */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 print:hidden">
        {checklistCategories.map((cat) => {
          const catItems = items.filter((item) => item.category === cat.id);
          const catCompleted = catItems.filter((item) =>
            completedIds.includes(item.id)
          ).length;
          const isCatDone = catItems.length > 0 && catCompleted === catItems.length;

          return (
            <div
              key={cat.id}
              className={`rounded-lg border p-2.5 text-center text-xs transition-colors ${
                isCatDone
                  ? "border-primary/50 bg-primary/10 text-primary font-medium"
                  : "border-border bg-surface-muted/50 text-muted-foreground"
              }`}
            >
              <p className="font-semibold text-foreground truncate text-[11px]">{cat.label}</p>
              <p className="mt-1 text-[11px]">
                {catCompleted} / {catItems.length}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

