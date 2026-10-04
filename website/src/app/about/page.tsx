import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { profilePageSchema, structuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Kapil Shah & Editorial Policy",
  description:
    "About Kapil Shah, the mission, editorial standards, research methodology, and transparency principles behind this small-business cybersecurity resource.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(profilePageSchema) }}
      />
      <Section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <header>
            <Badge variant="primary" className="mb-3">
              About &amp; Trust Architecture
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              About Kapil Shah
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Independent cybersecurity educator and web technologist providing practical, vendor-neutral security baselines for small businesses without a dedicated security team.
            </p>
          </header>

          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Why this resource exists
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Small businesses make up the majority of everyday enterprises, yet most cybersecurity guidance is written for two extremes: oversimplified consumer tips that leave businesses unprotected, or complex enterprise frameworks requiring six-figure security budgets and dedicated Security Operations Centers (SOCs).
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              When a small clinic, retail shop, accounting practice, or professional services firm wants to protect their email, configure backups, or stop payment scams, they need practical, actionable instructions that fit their actual schedule and resources.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              This site bridges that gap. Every guide is written to give owners, office managers, and internal team leads step-by-step clarity on the security controls that make the highest real-world difference, using built-in operating system and platform capabilities wherever possible.
            </p>
          </section>

          <section id="editorial-policy" className="mt-16 space-y-6 scroll-mt-20">
            <div className="border-b border-border/70 pb-3">
              <Badge variant="primary" className="mb-2">
                Standards &amp; Verification
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Editorial standards &amp; research methodology
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              To ensure our guidance is technically sound, reliable, and grounded in industry consensus, all articles adhere to four strict editorial principles:
            </p>

            <div className="space-y-4">
              {[
                {
                  number: "1",
                  title: "Primary Authoritative Sourcing",
                  desc: "Recommendations are drawn directly from recognized standards bodies, federal security agencies, and primary technical documentation. These include the National Institute of Standards and Technology (NIST SP 800-63B, SP 800-61, CSF 2.0), the Cybersecurity and Infrastructure Security Agency (CISA), the Federal Trade Commission (FTC), the FBI Internet Crime Complaint Center (IC3), ICANN, and first-party vendor documentation (Microsoft Learn, Apple Platform Security, Google Workspace). We do not cite secondary content farms or unverified blogs.",
                },
                {
                  number: "2",
                  title: "Realistic Operational Scoping",
                  desc: "We prioritize controls that address the most prevalent small-business threat vectors—Business Email Compromise (BEC), ransomware, credential reuse, lost laptops, and accidental access leaks—before discussing advanced tooling. We focus first on built-in defenses like full-disk encryption (BitLocker/FileVault), standard user privileges, Microsoft 365 Security Defaults, and router guest isolation.",
                },
                {
                  number: "3",
                  title: "Visual and Step-by-Step Clarity",
                  desc: "Where multi-step workflows or architectural configurations can be confusing, guides include custom-crafted vector diagrams—such as network segmentation maps, offboarding workflows, and dual-authorization payment verification checkpoints—to illustrate exactly how the defenses work.",
                },
                {
                  number: "4",
                  title: "Timeliness and Update Tracking",
                  desc: "Cybersecurity threats and administrative interfaces change over time. Every guide clearly states its initial publication date and last updated date so readers know how recently the guidance was reviewed against current platform interfaces and security standards.",
                },
              ].map((principle) => (
                <Card key={principle.number} className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 space-y-5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Editorial independence &amp; commercial transparency
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              This site maintains strict editorial independence. We do not accept paid article placements, sponsored reviews, or commercial compensation to feature or rank any software, service, or vendor.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              When third-party tools (such as password managers or DNS security services) are mentioned, they are chosen solely on technical merit, security architecture (such as zero-knowledge encryption), and suitability for small-business budgets. If partner links are introduced in the future, they will always be clearly and prominently disclosed without altering our editorial recommendations.
            </p>
          </section>

          <section id="feedback" className="mt-16 space-y-5 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Corrections, errata &amp; feedback
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              We take factual and technical accuracy seriously. If you are an IT administrator, security researcher, or small-business operator and spot an error, outdated vendor screenshot, broken interface path, or ambiguous recommendation, please let us know so we can investigate and update the guide promptly.
            </p>
            <div className="rounded-xl border border-border bg-surface-muted/60 p-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Mail className="h-4 w-4" />
                <span>How to submit corrections or technical feedback:</span>
              </div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Email:</strong> Send details to{" "}
                  <a
                    href="mailto:contact@kapilshah.com.np"
                    className="font-medium text-primary hover:underline"
                  >
                    contact@kapilshah.com.np
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">What to include:</strong> The URL of the guide, the specific section or sentence, and any supporting documentation or updated vendor references.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-16 border-t border-border pt-8">
            <h2 className="text-base font-bold text-foreground">
              Educational disclaimer
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              The guides and checklists on this website are published for educational and informational purposes only. They are designed to help small businesses implement practical baseline security hygiene. This guidance does not constitute formal legal counsel, regulatory compliance certification, or bespoke incident response retainer services. Organizations with specialized regulatory mandates (such as HIPAA, PCI-DSS Level 1, or CMMC) should engage qualified security compliance assessors to verify their specific legal obligations.
            </p>
          </section>
        </Container>
      </Section>
    </main>
  );
}
