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
      aria-label="Checklist progress"
      className="rounded-xl border border-border bg-surface p-5 sm:p-6 print:border-none print:p-0"
    >
      {/* Top summary row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary print:text-black" aria-hidden="true" />
            <h2 className="text-lg font-bold text-foreground print:text-black">
              Overall Security Baseline Progress
            </h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground print:text-black">
            <strong className="text-foreground print:text-black">
              {completedCount} of {totalCount} completed
            </strong>{" "}
            ({percentage}%)
          </p>
        </div>

        {/* Action buttons (hidden in print) */}
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <Button
            type="button"
            variant="secondary"
            onClick={handlePrint}
            className="cursor-pointer gap-2 text-xs"
            aria-label="Print or save checklist as PDF"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print / Save PDF
          </Button>

          {completedCount > 0 ? (
            showResetConfirm ? (
              <div className="flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 p-1">
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="rounded px-2 py-1 text-xs font-semibold text-amber-900 hover:bg-amber-500/20 dark:text-amber-200"
                >
                  Confirm Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-surface-muted"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setShowResetConfirm(true)}
                className="cursor-pointer gap-2 text-xs text-muted-foreground hover:text-foreground"
                aria-label="Reset checklist progress"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset
              </Button>
            )
          ) : null}
        </div>
      </div>

      {/* Visual progress bar */}
      <div className="mt-4">
        <div
          role="progressbar"
          aria-valuenow={completedCount}
          aria-valuemin={0}
          aria-valuemax={totalCount}
          aria-label="Checklist completion progress"
          className="h-3 w-full overflow-hidden rounded-full bg-surface-muted print:border print:border-gray-400"
        >
          <div
            className="h-full bg-primary transition-all duration-300 ease-out motion-reduce:transition-none print:bg-black"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Category breakdown pills */}
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 print:hidden">
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
                  ? "border-primary/40 bg-primary/5 text-primary"
                  : "border-border/70 bg-surface-muted/40 text-muted-foreground"
              }`}
            >
              <p className="font-semibold text-foreground truncate">{cat.label}</p>
              <p className="mt-0.5">
                {catCompleted}/{catItems.length}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

