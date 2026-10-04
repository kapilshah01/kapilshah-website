import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Small Business Security Guidance Hub",
  description:
    "Security guidance designed for businesses without a dedicated security team. Essential baselines for accounts, email, workstations, networks, and backups.",
  alternates: { canonical: "/small-business" },
};

const areas = [
  {
    title: "Cybersecurity Checklist Baseline",
    description: "A practical 25-point starting point for prioritizing security work across accounts, email, devices, and incident preparedness.",
    href: "/guides/small-business-cybersecurity-checklist",
    cta: "Explore checklist guide",
  },
  {
    title: "MFA & Password Security",
    description: "Protect high-impact business accounts with phishing-resistant MFA, team password vaults, and role-based privilege separation.",
    href: "/guides/mfa-for-small-businesses",
    cta: "Explore account security",
  },
  {
    title: "Phishing & Payment Fraud (BEC)",
    description: "Train staff to spot fraudulent invoices, verify unusual bank-detail changes verbally, and prevent business email compromise.",
    href: "/guides/business-email-compromise-small-business-payment-fraud",
    cta: "Explore fraud prevention",
  },
  {
    title: "Workstation & Device Hygiene",
    description: "Protect company laptops and workstations with full-disk encryption, automated patching, standard user accounts, and theft plans.",
    href: "/guides/small-business-computer-laptop-security",
    cta: "Explore device security",
  },
  {
    title: "Data Backups & Ransomware Recovery",
    description: "Implement recoverable 3-2-1 backup routines, separate backup access credentials, and conduct restore drills before an incident occurs.",
    href: "/guides/small-business-backup-ransomware-protection",
    cta: "Explore recovery plans",
  },
  {
    title: "Incident Response & Insurance Readiness",
    description: "Build an offline emergency contact sheet, define immediate containment roles, and prepare underwriting evidence for cyber insurance.",
    href: "/guides/cyber-insurance-readiness-small-business",
    cta: "Explore readiness controls",
  },
];

export default function SmallBusinessPage() {
  return (
    <main className="flex-1">
      <Section className="py-12 sm:py-16">
        <Container>
          <header className="max-w-3xl">
            <Badge variant="primary" className="mb-3">
              Operational Roadmap
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Practical Cybersecurity for Small Businesses
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Practical security guidance for companies without a dedicated security team. Focus on high-impact defensive baselines that reduce everyday risk and protect your operations.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Card key={area.title} hover className="flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">
                    {area.title}
                  </h2>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/70">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
                  >
                    <span>{area.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive Tool Banner */}
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
                  Ready to audit your security posture?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Step through 25 foundational security controls with our browser-saved checklist. Print an executive report for your records or IT service provider.
                </p>
              </div>
              <Link
                href="/checklist"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
              >
                Launch Checklist &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
