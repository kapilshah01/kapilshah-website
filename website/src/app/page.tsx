import Link from "next/link";
import {
  ShieldCheck,
  CheckSquare,
  BookOpen,
  ArrowRight,
  Lock,
  Mail,
  Laptop,
  Wifi,
  Database,
  AlertTriangle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/content/article-card";
import { getAllArticles } from "@/lib/content";

const domains = [
  {
    title: "Accounts & Identity",
    icon: Lock,
    description: "Multi-factor authentication (MFA), strong password vaults, role separation, and departure access cutoffs.",
    href: "/guides/mfa-for-small-businesses",
    guideCount: "3 guides",
  },
  {
    title: "Email & Cloud SaaS",
    icon: Mail,
    description: "Microsoft 365 and Google Workspace hardening, phishing protection, and business email compromise prevention.",
    href: "/guides/microsoft-365-security-small-business",
    guideCount: "4 guides",
  },
  {
    title: "Computers & Workstations",
    icon: Laptop,
    description: "Full-disk encryption (BitLocker/FileVault), automated OS updates, standard user privileges, and endpoint hygiene.",
    href: "/guides/small-business-computer-laptop-security",
    guideCount: "2 guides",
  },
  {
    title: "Office Wi-Fi & Domains",
    icon: Wifi,
    description: "Office Wi-Fi segmentation, WPA3, router credentials, registrar transfer locks, and DNS record protection.",
    href: "/guides/small-business-wifi-network-security",
    guideCount: "2 guides",
  },
  {
    title: "Data Backups & Recovery",
    icon: Database,
    description: "Practical backup strategies, ransomware containment, isolated copies, and routine restore drills.",
    href: "/guides/small-business-backup-ransomware-protection",
    guideCount: "2 guides",
  },
  {
    title: "Incident Response & Insurance",
    icon: AlertTriangle,
    description: "Emergency offline playbooks, breach reporting paths, and underwriting evidence for cyber insurance applications.",
    href: "/guides/cyber-insurance-readiness-small-business",
    guideCount: "2 guides",
  },
];

const practicalTools = [
  {
    title: "Interactive 25-Point Security Checklist",
    badge: "Interactive Tool",
    description: "An operational baseline for small teams. Filter by 30-minute quick wins, 1-week routines, and 1-month foundational projects. Saves progress privately in your browser.",
    href: "/checklist",
    cta: "Launch Interactive Checklist",
  },
  {
    title: "Cyber Insurance Readiness Assessment",
    badge: "Underwriting Guide",
    description: "A vendor-neutral checklist detailing the security controls and technical evidence small businesses need before submitting a cyber insurance questionnaire.",
    href: "/guides/cyber-insurance-readiness-small-business",
    cta: "View Readiness Controls",
  },
  {
    title: "Employee Offboarding Security Workflow",
    badge: "Operational Checklist",
    description: "A step-by-step checklist to revoke mailboxes, recover hardware, audit session tokens, and prevent credential leaks when staff or contractors depart.",
    href: "/guides/employee-offboarding-security-checklist",
    cta: "View Offboarding Steps",
  },
  {
    title: "Incident Response Action Playbook",
    badge: "Planning Guide",
    description: "A simple incident response framework for small businesses: assigned decision roles, offline emergency contacts, and practical recovery priorities.",
    href: "/guides/small-business-incident-response-plan",
    cta: "Review Incident Plan",
  },
];

export default function Home() {
  const allArticles = getAllArticles();
  const recentGuides = allArticles.slice(0, 6);

  return (
    <main id="top" className="flex-1">
      {/* Hero Section */}
      <Section className="border-b border-border/80 bg-surface/50 py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>Practical SMB Security Platform</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Practical cybersecurity for small businesses without a security team.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Vendor-neutral baselines, step-by-step guides, and interactive tools for business owners, office managers, and operations leads who need to secure their company without becoming cybersecurity specialists.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button href="/checklist" size="lg" className="gap-2">
                <CheckSquare className="h-4 w-4" aria-hidden="true" />
                Start Security Check
              </Button>
              <Button href="/guides" variant="secondary" size="lg" className="gap-2">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Explore Guides
              </Button>
            </div>

            {/* Trust / Product Signals */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border/70 pt-8 sm:grid-cols-4">
              {[
                ["Vendor-Neutral Guidance", "Zero paid tool rankings"],
                ["Practical Security Controls", "Focus on native OS/SaaS settings"],
                ["Zero Account Required", "Free, open, and private"],
                ["Based on Established Guidance", "Adapted from NIST & CISA SMB resources"],
              ].map(([signal, detail]) => (
                <div key={signal}>
                  <p className="text-xs font-bold text-foreground sm:text-sm">{signal}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 1: Where do you need help? */}
      <Section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Operational Pillars"
            title="Where does your business need protection?"
            description="Start with the security domain most urgent for your operations. Every section focuses on practical, verifiable steps."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <Card
                  key={domain.title}
                  hover
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {domain.guideCount}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-foreground">
                      {domain.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {domain.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Link
                      href={domain.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
                    >
                      <span>Explore domain guidance</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Section 2: Start with 30 minutes (Checklist Spotlight) */}
      <Section className="border-y border-border/80 bg-surface-muted/40 py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-primary/30 bg-surface p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>30-Minute Triage Baseline</span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Small Business Cybersecurity Checklist: 25 Essential Controls
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  You don’t have to implement everything at once. Start with our highest-impact 30-minute triage controls—enforcing MFA on critical mailboxes, verbal payment verification, master password separation, and domain locks—before moving to weekly routines.
                </p>

                <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span><strong>Tracks progress in your browser:</strong> Checkmarks persist across visits without an account.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span><strong>Filterable by time:</strong> Choose 30-minute quick wins, 1-week tasks, or 1-month projects.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span><strong>Executive print mode:</strong> Print a clean summary sheet for management or IT support.</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/checklist" size="lg" className="gap-2">
                    <CheckSquare className="h-4 w-4" />
                    Launch Interactive Checklist
                  </Button>
                  <Button href="/guides/small-business-cybersecurity-checklist" variant="secondary" size="lg">
                    Read Written Guide
                  </Button>
                </div>
              </div>

              {/* Visual Triage Preview Box */}
              <div className="rounded-xl border border-border bg-surface-muted/50 p-6 text-xs space-y-3">
                <p className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
                  Sample 30-Minute Triage Controls:
                </p>
                <div className="space-y-2">
                  {[
                    "Enforce MFA across all email and banking logins",
                    "Mandate verbal verification for bank account changes",
                    "Deploy password manager with business recovery owner",
                    "Lock domain registrar and enable transfer protection",
                    "Confirm 24-hour backup completion on critical data",
                  ].map((item, idx) => (
                    <div key={item} className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-surface p-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-xs bg-primary/10 text-primary font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground pt-1">
                  25 total controls across 6 operational categories.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3: Explore the Security Library */}
      <Section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              badge="Security Library"
              title="Essential Guides for Small Teams"
              description="Detailed, vendor-neutral operational blueprints covering identity, email, devices, networks, and incident readiness."
            />
            <Button href="/guides" variant="outline" className="self-start sm:self-auto gap-2 text-xs">
              <span>View All 15 Guides</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentGuides.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: Practical Security Resources & Frameworks */}
      <Section className="border-t border-border/80 bg-surface-muted/30 py-16 sm:py-20">
        <Container>
          <SectionHeading
            badge="Practical Toolkits"
            title="Operational Frameworks & Resources"
            description="Pre-built workflows and templates to help you implement security policies and verify defenses with minimal overhead."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {practicalTools.map((tool) => (
              <Card key={tool.title} hover className="flex flex-col justify-between">
                <div>
                  <Badge variant="primary">{tool.badge}</Badge>
                  <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/70">
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
                  >
                    <span>{tool.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 5: Why Trust This Platform? */}
      <Section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
            <SectionHeading
              badge="Editorial Integrity"
              title="Why Trust This Platform?"
              description="Cybersecurity guidance should be transparent, defensible, and grounded in industry consensus—not commercial kickbacks."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Based on Established Guidance",
                  desc: "Recommendations are adapted from NIST CSF 2.0, NIST SP 800-63B, CISA SMB guides, FTC guidance, and platform documentation (such as Microsoft Learn and Google Workspace).",
                },
                {
                  title: "Vendor-Neutral Guidance",
                  desc: "We do not accept paid article placements, sponsored tool reviews, or financial compensation to rank any security software or vendor.",
                },
                {
                  title: "Documented Publication Dates",
                  desc: "Every guide displays its publication date and last updated date so readers know how recently guidance was reviewed.",
                },
              ].map((point) => (
                <div key={point.title} className="rounded-xl border border-border/70 bg-surface-muted/40 p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border/70 pt-6 text-xs text-muted-foreground">
              <span>Read our full research methodology and standards</span>
              <Link
                href="/about#editorial-policy"
                className="font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Editorial Policy &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final Actionable CTA */}
      <Section className="border-t border-border bg-surface-muted/50 py-16 sm:py-20" aria-labelledby="final-cta-title">
        <Container className="text-center max-w-2xl">
          <Badge variant="primary" className="mb-3">
            Start Today
          </Badge>
          <h2 id="final-cta-title" className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Strengthen your business security today.
          </h2>
          <p className="mx-auto mt-4 text-base leading-7 text-muted-foreground">
            No expensive software licenses, consultants, or technical certifications required. Start with the highest-impact controls and make repeatable progress.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/checklist" size="lg" className="gap-2">
              <CheckSquare className="h-4 w-4" />
              Launch Security Checklist
            </Button>
            <Button href="/start-here" variant="secondary" size="lg">
              Start Here Roadmap
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
