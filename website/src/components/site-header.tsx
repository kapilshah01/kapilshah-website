import { Container } from "@/components/layout/container";
import Link from "next/link";
import { SearchButton } from "@/components/search/search-dialog";

const navigation = [
  ["Home", "/"],
  ["Cybersecurity Guides", "/guides"],
  ["Small Business", "/small-business"],
  ["About", "/about"],
] as const;

const linkClass =
  "rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background print:hidden">
      <Container className="flex min-h-16 items-center justify-between gap-4 sm:gap-6">
        <Link
          href="/"
          className="rounded-sm text-base font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Kapil Shah
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link key={label} href={href} className={linkClass}>
              {label}
            </Link>
          ))}
          <SearchButton />
          <Link
            href="/start-here"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start Here
          </Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <SearchButton className="px-2.5 py-1.5" />
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-md border border-border px-3 py-1.5 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              className="absolute right-0 top-12 z-20 flex w-64 flex-col gap-1 rounded-lg border border-border bg-surface p-3 shadow-md"
              aria-label="Mobile navigation"
            >
              {navigation.map(([label, href]) => (
                <Link key={label} href={href} className={`${linkClass} px-3 py-2`}>
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <SearchButton className="w-full justify-start" />
              </div>
              <Link
                href="/start-here"
                className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Start Here
              </Link>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
