"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Filter, CheckCircle2, RotateCcw } from "lucide-react";
import {
  checklistCategories,
  checklistItems,
  type ChecklistCategoryId,
  type ChecklistTimeframe,
} from "@/data/checklist";
import { ChecklistItemCard } from "@/components/checklist/checklist-item-card";
import { ChecklistProgress } from "@/components/checklist/checklist-progress";

const STORAGE_KEY = "kapilshah_checklist_v1";

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      callback();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function getServerSnapshot(): string {
  return "[]";
}

function saveCompletedIds(ids: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Graceful fallback when localStorage is blocked/unavailable
  }
  emitChange();
}

function clearCompletedIds() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Graceful fallback
  }
  emitChange();
}

export function InteractiveChecklist() {
  const rawStored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const completedIds = useMemo(() => {
    try {
      const parsed = JSON.parse(rawStored);
      if (Array.isArray(parsed)) {
        return parsed.filter(
          (id): id is string =>
            typeof id === "string" && checklistItems.some((item) => item.id === id)
        );
      }
    } catch {
      // Return empty array on parse errors
    }
    return [];
  }, [rawStored]);

  const [selectedTimeframe, setSelectedTimeframe] = useState<
    "all" | ChecklistTimeframe
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | ChecklistCategoryId
  >("all");
  const [announcement, setAnnouncement] = useState("");

  const handleToggle = (id: string) => {
    const next = completedIds.includes(id)
      ? completedIds.filter((item) => item !== id)
      : [...completedIds, id];

    saveCompletedIds(next);

    const item = checklistItems.find((i) => i.id === id);
    const isNowCompleted = next.includes(id);
    setAnnouncement(
      `${item?.title ?? "Item"} ${isNowCompleted ? "marked complete" : "marked incomplete"}. ${next.length} of ${checklistItems.length} completed.`
    );
  };

  const handleReset = () => {
    clearCompletedIds();
    setAnnouncement("Checklist progress has been reset.");
  };

  const clearFilters = () => {
    setSelectedTimeframe("all");
    setSelectedCategory("all");
  };

  // Filter items
  const filteredItems = checklistItems.filter((item) => {
    if (selectedTimeframe !== "all" && item.timeframe !== selectedTimeframe) {
      return false;
    }
    if (selectedCategory !== "all" && item.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const totalCount = checklistItems.length;
  const isAllComplete = completedIds.length === totalCount && totalCount > 0;

  return (
    <div className="space-y-8">
      {/* Screen reader live updates */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Progress Dashboard */}
      <ChecklistProgress
        items={checklistItems}
        completedIds={completedIds}
        onReset={handleReset}
      />

      {/* Completion Banner */}
      {isAllComplete ? (
        <section
          aria-label="Checklist completion notice"
          className="rounded-xl border border-primary/40 bg-primary/10 p-6 text-center sm:p-8 print:border print:border-black print:bg-white"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary print:hidden">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl print:text-black">
            All 25 Baseline Controls Completed!
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground print:text-black">
            You have implemented the foundational security layers. Cybersecurity is continuous improvement: review these controls when software, team members, or suppliers change, and schedule a recurring quarterly review on your calendar.
          </p>
        </section>
      ) : null}

      {/* Filter Toolbar (hidden in print) */}
      <section
        aria-label="Checklist filters"
        className="rounded-xl border border-border bg-surface-muted/40 p-4 sm:p-5 print:hidden"
      >
        <div className="flex items-center gap-2 pb-3 text-sm font-semibold text-foreground">
          <Filter className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>Filter Controls</span>
          {(selectedTimeframe !== "all" || selectedCategory !== "all") && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto flex items-center gap-1 text-xs text-primary hover:underline cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              Reset filters
            </button>
          )}
        </div>

        <div className="space-y-3">
          {/* Timeframe Filter Buttons */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground pb-1.5">
              By Phased Timeframe:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: `All (${totalCount})` },
                {
                  id: "30-minutes",
                  label: `30-Min Triage (${
                    checklistItems.filter((i) => i.timeframe === "30-minutes").length
                  })`,
                },
                {
                  id: "1-week",
                  label: `1-Week Routine (${
                    checklistItems.filter((i) => i.timeframe === "1-week").length
                  })`,
                },
                {
                  id: "1-month",
                  label: `1-Month Foundation (${
                    checklistItems.filter((i) => i.timeframe === "1-month").length
                  })`,
                },
              ].map((tf) => (
                <button
                  key={tf.id}
                  type="button"
                  onClick={() =>
                    setSelectedTimeframe(tf.id as "all" | ChecklistTimeframe)
                  }
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedTimeframe === tf.id
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "border border-border bg-surface text-foreground hover:bg-surface-muted"
                  }`}
                  aria-pressed={selectedTimeframe === tf.id}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground pb-1.5">
              By Operational Category:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-surface text-foreground hover:bg-surface-muted"
                }`}
                aria-pressed={selectedCategory === "all"}
              >
                All Categories ({totalCount})
              </button>

              {checklistCategories.map((cat) => {
                const count = checklistItems.filter(
                  (i) => i.category === cat.id
                ).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "border border-border bg-surface text-foreground hover:bg-surface-muted"
                    }`}
                    aria-pressed={selectedCategory === cat.id}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist items list */}
      {filteredItems.length > 0 ? (
        <div className="space-y-4 print:space-y-3">
          {filteredItems.map((item) => (
            <ChecklistItemCard
              key={item.id}
              item={item}
              isChecked={completedIds.includes(item.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      ) : (
        /* Empty filter state */
        <div className="rounded-xl border border-dashed border-border p-8 text-center sm:p-12">
          <p className="text-base font-semibold text-foreground">
            No checklist items match the selected filters.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your category or timeframe selections.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

