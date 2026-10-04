"use client";

import { useEffect, useState } from "react";
import { ListCollapse } from "lucide-react";
import type { TocHeading } from "@/data/search-index";

export function TableOfContents({
  headings = [],
}: {
  headings?: TocHeading[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const h2Elements = Array.from(
      document.querySelectorAll("article h2")
    ) as HTMLElement[];

    h2Elements.forEach((el, index) => {
      if (headings[index]) {
        el.id = headings[index].id;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    h2Elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <aside
      className="sticky top-24 hidden rounded-xl border border-border bg-surface p-4.5 shadow-2xs lg:block"
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 border-b border-border/70 pb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <ListCollapse className="h-4 w-4 text-primary" aria-hidden="true" />
        <span>On This Page</span>
      </div>

      <nav className="mt-3 max-h-[calc(100vh-12rem)] overflow-y-auto pr-1">
        <ul className="space-y-1 text-xs">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block rounded-sm py-1 transition-colors hover:text-foreground line-clamp-1 ${
                    isActive
                      ? "font-semibold text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
