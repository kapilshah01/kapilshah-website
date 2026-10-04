import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";

const footerNavigation = [
  {
    title: "Explore",
    links: [
      ["Cybersecurity Guides", "/guides"],
      ["Interactive Checklist", "/checklist"],
      ["Small Business Security", "/small-business"],
      ["Start Here Roadmap", "/start-here"],
    ],
  },
  {
    title: "Practical Blueprints",
    links: [
      ["Google Workspace Baseline", "/guides/google-workspace-security-small-business"],
      ["Microsoft 365 Baseline", "/guides/microsoft-365-security-small-business"],
      ["BEC & Payment Fraud", "/guides/business-email-compromise-small-business-payment-fraud"],
      ["Cyber Insurance Readiness", "/guides/cyber-insurance-readiness-small-business"],
      ["Workstation & Laptop Security", "/guides/small-business-computer-laptop-security"],
    ],
  },
  {
    title: "Trust & Editorial",
    links: [
      ["About Kapil Shah", "/about"],
      ["Editorial & Sourcing Standards", "/about#editorial-policy"],
      ["Corrections & Technical Feedback", "/about#feedback"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-muted/60 print:hidden">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand and Positioning Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="text-base font-bold tracking-tight">Kapil Shah</span>
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Practical, vendor-neutral cybersecurity baselines for small businesses without a dedicated IT security team. Focused on native controls and realistic operational habits.
            </p>

            <div className="pt-2">
              <Link
                href="/checklist"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Take the 25-Point Security Check</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Navigation link groups */}
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright and privacy disclosure */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/80 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Kapil Shah. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground/80">
            Zero third-party tracking scripts. Browser storage used strictly for functional features like checklist progress.
          </p>
        </div>
      </Container>
    </footer>
  );
}
