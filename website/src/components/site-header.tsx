"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SearchButton } from "@/components/search/search-dialog";

const navigation = [
  ["Guides", "/guides"],
  ["Checklist", "/checklist"],
  ["Small Business", "/small-business"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md print:hidden">
      <Container className="flex min-h-16 items-center justify-between gap-4 sm:gap-6">
        {/* Brand logo / title */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Shield className="h-4.5 w-4.5" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-foreground">
              Kapil Shah
            </span>
            <span className="hidden sm:inline-block rounded-md bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground border border-border">
              SMB Security
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </Link>
          ))}

          <SearchButton />

          <Link
            href="/start-here"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span>Start Here</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <SearchButton className="px-2.5 py-1.5" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface p-2 text-foreground hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen ? (
        <div
          id="mobile-navigation"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-background/95 backdrop-blur-md p-6 lg:hidden animate-in fade-in duration-150"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile menu links">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-surface-muted transition-colors"
            >
              Home
            </Link>
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-surface-muted transition-colors"
              >
                {label}
              </Link>
            ))}

            <div className="mt-4 border-t border-border pt-4">
              <Link
                href="/start-here"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-xs"
              >
                <span>Start Here Roadmap</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
