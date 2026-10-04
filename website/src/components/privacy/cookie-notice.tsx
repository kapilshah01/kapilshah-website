"use client";

import { useSyncExternalStore } from "react";
import { ShieldCheck, X } from "lucide-react";

const STORAGE_KEY = "kapilshah_privacy_notice_v1";

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
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "blocked";
  }
}

function getServerSnapshot(): string {
  // During SSR, return non-empty so the notice is not rendered before client hydration
  return "initial_ssr";
}

function acknowledgeNotice() {
  try {
    localStorage.setItem(STORAGE_KEY, "acknowledged");
  } catch {
    // Storage blocked/unavailable fallback
  }
  emitChange();
}

export function CookieNotice() {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // If user already acknowledged, storage is blocked, or during SSR, do not show
  if (status !== "") {
    return null;
  }

  return (
    <aside
      aria-label="Privacy and browser storage notice"
      role="region"
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-xl rounded-xl border border-border bg-surface p-4 shadow-xl sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md print:hidden"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-foreground">
            Privacy &amp; browser storage
          </h2>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            This site uses local browser storage for features such as saving your checklist progress. We don&apos;t currently use advertising or analytics cookies.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={acknowledgeNotice}
              className="rounded-md bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={acknowledgeNotice}
          className="rounded p-1 text-muted-foreground hover:bg-surface-muted hover:text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Dismiss privacy and browser storage notice"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}

