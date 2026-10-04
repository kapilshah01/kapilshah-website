"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, BookOpen, CheckSquare, FileText, CornerDownLeft } from "lucide-react";
import { searchContent, type SearchResult } from "@/lib/search";

const OPEN_SEARCH_EVENT = "kapilshah:open-search";

export function openSearchDialog() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT));
  }
}

export function SearchButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openSearchDialog}
      className={`inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer ${className}`}
      aria-label="Search guides and resources (Ctrl+K)"
    >
      <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <span>Search</span>
      <kbd className="hidden sm:inline-flex items-center rounded border border-border bg-surface-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
        Ctrl K
      </kbd>
    </button>
  );
}

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search results
  const results = useMemo(() => searchContent(query), [query]);

  // Open / Close listeners
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSelectedIndex(0);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Global shortcut: Ctrl+K or Cmd+K
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSelectedIndex(0);
      }
      // Global shortcut: "/" when not focused on an input/textarea
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setIsOpen(true);
        setSelectedIndex(0);
      }
    };

    window.addEventListener(OPEN_SEARCH_EVENT, handleOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(OPEN_SEARCH_EVENT, handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Focus management and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector<HTMLElement>(`[data-search-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const handleSelectResult = useCallback(
    (result: SearchResult) => {
      handleClose();
      router.push(result.item.href);
    },
    [handleClose, router]
  );

  const handleKeyDownInDialog = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
      return;
    }

    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search guides and resources"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-12 overflow-y-auto"
      onKeyDown={handleKeyDownInDialog}
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-border px-4 py-3 sm:px-5">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search cybersecurity guides, controls, topics..."
            className="flex-1 bg-transparent px-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-autocomplete="list"
            aria-controls="search-results-list"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="mr-2 rounded p-1 text-muted-foreground hover:bg-surface-muted hover:text-foreground cursor-pointer"
              aria-label="Clear search input"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={handleClose}
            className="rounded border border-border bg-surface-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Close search dialog"
          >
            ESC
          </button>
        </div>

        {/* Status / Category indicator */}
        <div className="flex items-center justify-between border-b border-border/60 bg-surface-muted/50 px-4 py-2 text-xs text-muted-foreground sm:px-5">
          <span>
            {query.trim() === "" ? (
              <span className="font-semibold text-foreground">
                All Published Resources ({results.length})
              </span>
            ) : (
              <span>
                Found <strong className="text-foreground">{results.length}</strong> {results.length === 1 ? "match" : "matches"} for &ldquo;{query}&rdquo;
              </span>
            )}
          </span>
          <span className="hidden sm:inline">Use ↑↓ to navigate · Enter to select</span>
        </div>

        {/* Results Scroll Area */}
        <div
          ref={listRef}
          id="search-results-list"
          role="listbox"
          aria-label="Search results"
          className="max-h-[60vh] overflow-y-auto p-3 space-y-2 divide-y divide-border/30 sm:p-4"
        >
          {results.length > 0 ? (
            results.map((res, index) => {
              const isSelected = index === selectedIndex;
              const { item, snippet } = res;
              const typeIcon =
                item.type === "tool" ? (
                  <CheckSquare className="h-4 w-4 text-primary" aria-hidden="true" />
                ) : item.type === "page" ? (
                  <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                ) : (
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                );

              return (
                <div
                  key={item.id}
                  data-search-index={index}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelectResult(res)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group relative rounded-lg border p-3.5 transition-all cursor-pointer ${
                    isSelected
                      ? "border-primary/60 bg-primary/5 shadow-xs"
                      : "border-transparent bg-surface hover:border-border hover:bg-surface-muted/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Meta header: Type + Category + Reading Time */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-1.5">
                        <span className="flex items-center gap-1 font-medium text-foreground">
                          {typeIcon}
                          <span className="capitalize">{item.type}</span>
                        </span>
                        <span>•</span>
                        <span className="rounded bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-foreground">
                          {item.categoryLabel}
                        </span>
                        {item.readingTime && (
                          <>
                            <span>•</span>
                            <span>{item.readingTime} min read</span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-sm font-semibold tracking-tight transition-colors ${
                          isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => e.stopPropagation()}
                          className="focus:outline-none"
                        >
                          {item.title}
                        </Link>
                      </h3>

                      {/* Description or Content snippet */}
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {snippet ? (
                          <span>
                            <span className="font-semibold text-foreground">Context: </span>
                            {snippet}
                          </span>
                        ) : (
                          item.description
                        )}
                      </p>

                      {/* Tags */}
                      {item.tags.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {item.tags.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="inline-block rounded-xs bg-surface-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                          {item.tags.length > 5 && (
                            <span className="text-[10px] text-muted-foreground self-center">
                              +{item.tags.length - 5}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Arrow / Enter hint indicator */}
                    <div className="hidden sm:flex shrink-0 items-center self-center pl-2 text-muted-foreground group-hover:text-primary">
                      {isSelected ? (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-primary">
                          Open <CornerDownLeft className="h-3 w-3" />
                        </span>
                      ) : (
                        <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty Results State */
            <div className="py-12 px-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-muted-foreground">
                <Search className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                No guides or controls match your search
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground max-w-sm mx-auto">
                No published cybersecurity resources match &ldquo;{query}&rdquo;. Try checking for typos or searching broader keywords like &ldquo;mfa&rdquo;, &ldquo;passwords&rdquo;, &ldquo;backup&rdquo;, or &ldquo;phishing&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedIndex(0);
                  inputRef.current?.focus();
                }}
                className="mt-4 inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
              >
                Browse All Guides
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-border bg-surface-muted/30 px-4 py-2.5 text-[11px] text-muted-foreground sm:px-5">
          <span>kapilshah.com.np content search</span>
          <span className="text-[11px]">Private, client-side, zero tracking</span>
        </div>
      </div>
    </div>
  );
}
