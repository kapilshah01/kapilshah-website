import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Start Here: Practical Cybersecurity Roadmap",
  description:
    "The practical first cybersecurity steps for small businesses. A step-by-step roadmap to secure accounts, email, workstations, data, and incident preparedness.",
  alternates: { canonical: "/start-here" },
};

const steps = [
  {
    step: "01",
    title: "Secure Business Accounts",
    copy: "Start with multi-factor authentication (MFA) on business email, cloud storage, domain registrars, and payroll. Deploy a team password manager.",
    href: "/guides/mfa-for-small-businesses",
    label: "Explore account security guide",
  },
  {
    step: "02",
    title: "Harden Email & Stop Scams",
    copy: "Disable automatic mailbox forwarding, train staff to recognize urgent spoofed emails, and mandate verbal callback verification for payment changes.",
    href: "/guides/business-email-compromise-small-business-payment-fraud",
    label: "Explore payment fraud guide",
  },
  {
    step: "03",
    title: "Protect Work Computers",
    copy: "Turn on BitLocker or FileVault full-disk encryption, enforce automated operating-system updates, and remove unnecessary local administrator rights.",
    href: "/guides/small-business-computer-laptop-security",
    label: "Explore laptop security guide",
  },
  {
    step: "04",
    title: "Protect & Test Backups",
    copy: "Maintain automated, isolated backup copies of critical accounting, client, and operational files. Test recovery before an emergency hits.",
    href: "/guides/small-business-backup-ransomware-protection",
    label: "Explore backup recovery guide",
  },
  {
    step: "05",
    title: "Prepare for Incidents",
    copy: "Document decision roles and emergency offline contacts for your bank, cyber insurer, IT vendor, and hosting providers.",
    href: "/guides/small-business-incident-response-plan",
    label: "Explore incident response guide",
  },
  {
    step: "06",
    title: "Maintain Repeatable Habits",
    copy: "Use a structured 25-point checklist to audit your progress quarterly and verify controls when staff, vendors, or software change.",
    href: "/checklist",
    label: "Launch interactive checklist",
  },
];

export default function StartHerePage() {
  return (
    <main className="flex-1">
      <Section className="py-12 sm:py-16">
        <Container>
          <header className="max-w-3xl">
            <Badge variant="primary" className="mb-3">
              Getting Started
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Start Here: Practical Cybersecurity Roadmap
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              You do not need to become a cybersecurity specialist or hire an expensive consultancy. Follow this practical, six-step progression to build a resilient security foundation.
            </p>
          </header>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
            {steps.map((item) => (
              <li key={item.step}>
                <Card hover className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                        {item.step}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        Stage {item.step}
                      </span>
                    </div>

                    <h2 className="mt-4 text-lg font-bold text-foreground">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/70">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </li>
            ))}
          </ol>

          {/* Interactive Checklist CTA Callout */}
          <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-primary">
                  <CheckSquare className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Interactive Baseline Tool
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                  Step through all 25 controls in real time
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Track your business&apos;s implementation progress, filter controls by 30-minute quick wins, and export an executive summary sheet.
                </p>
              </div>
              <Link
                href="/checklist"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
              >
                Launch Interactive Checklist &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
