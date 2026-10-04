import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { profilePageSchema, structuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Kapil Shah & Editorial Policy",
  description:
    "About Kapil Shah, the mission, editorial standards, research methodology, and transparency principles behind this small-business cybersecurity resource.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(profilePageSchema) }}
      />
      <Section>
        <Container className="max-w-3xl">
          <header>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About & Trust
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Kapil Shah
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Independent cybersecurity educator and web technologist providing practical, vendor-neutral security baselines for small businesses without a dedicated security team.
            </p>
          </header>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Why this resource exists
            </h2>
            <p className="leading-7 text-muted-foreground">
              Small businesses make up the majority of everyday enterprises, yet most cybersecurity guidance is written for two extremes: oversimplified consumer tips that leave businesses unprotected, or complex enterprise frameworks requiring six-figure security budgets and dedicated Security Operations Centers (SOCs).
            </p>
            <p className="leading-7 text-muted-foreground">
              When a small clinic, retail shop, accounting practice, or professional services firm wants to protect their email, configure backups, or stop payment scams, they need practical, actionable instructions that fit their actual schedule and resources.
            </p>
            <p className="leading-7 text-muted-foreground">
              This site bridges that gap. Every guide is written to give owners, office managers, and internal team leads step-by-step clarity on the security controls that make the highest real-world difference, using built-in operating system and platform capabilities wherever possible.
            </p>
          </section>

          <section id="editorial-policy" className="mt-14 space-y-6 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-foreground">
              Editorial standards & research methodology
            </h2>
            <p className="leading-7 text-muted-foreground">
              To ensure our guidance is technically sound, reliable, and grounded in industry consensus, all articles adhere to four strict editorial principles:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">
                  1. Primary authoritative sourcing
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Recommendations are drawn directly from recognized standards bodies, federal security agencies, and primary technical documentation. These include the National Institute of Standards and Technology (NIST SP 800-63B, SP 800-61, CSF 2.0), the Cybersecurity and Infrastructure Security Agency (CISA), the Federal Trade Commission (FTC), the FBI Internet Crime Complaint Center (IC3), ICANN, and first-party vendor documentation (Microsoft Learn, Apple Platform Security, Google Workspace). We do not cite secondary content farms or unverified blogs.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">
                  2. Realistic operational scoping
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We prioritize controls that address the most prevalent small-business threat vectors—Business Email Compromise (BEC), ransomware, credential reuse, lost laptops, and accidental access leaks—before discussing advanced tooling. We focus first on built-in defenses like full-disk encryption (BitLocker/FileVault), standard user privileges, Microsoft 365 Security Defaults, and router guest isolation.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">
                  3. Visual and step-by-step clarity
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Where multi-step workflows or architectural configurations can be confusing, guides include custom-crafted vector diagrams—such as network segmentation maps, offboarding workflows, and dual-authorization payment verification checkpoints—to illustrate exactly how the defenses work.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">
                  4. Timeliness and update tracking
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Cybersecurity threats and administrative interfaces change over time. Every guide clearly states its initial publication date and last updated date so readers know how recently the guidance was reviewed against current platform interfaces and security standards.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Editorial independence & commercial transparency
            </h2>
            <p className="leading-7 text-muted-foreground">
              This site maintains strict editorial independence. We do not accept paid article placements, sponsored reviews, or commercial compensation to feature or rank any software, service, or vendor.
            </p>
            <p className="leading-7 text-muted-foreground">
              When third-party tools (such as password managers or DNS security services) are mentioned, they are chosen solely on technical merit, security architecture (such as zero-knowledge encryption), and suitability for small-business budgets. If partner links are introduced in the future, they will always be clearly and prominently disclosed without altering our editorial recommendations.
            </p>
          </section>

          <section id="feedback" className="mt-14 space-y-6 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-foreground">
              Corrections, errata & feedback
            </h2>
            <p className="leading-7 text-muted-foreground">
              We take factual and technical accuracy seriously. If you are an IT administrator, security researcher, or small-business operator and spot an error, outdated vendor screenshot, broken interface path, or ambiguous recommendation, please let us know so we can investigate and update the guide promptly.
            </p>
            <div className="rounded-lg border border-border bg-surface-muted/60 p-5">
              <p className="text-sm font-semibold text-foreground">
                How to submit corrections or technical feedback:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
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

          <section className="mt-14 border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground">
              Educational disclaimer
            </h2>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              The guides and checklists on this website are published for educational and informational purposes only. They are designed to help small businesses implement practical baseline security hygiene. This guidance does not constitute formal legal counsel, regulatory compliance certification, or bespoke incident response retainer services. Organizations with specialized regulatory mandates (such as HIPAA, PCI-DSS Level 1, or CMMC) should engage qualified security compliance assessors to verify their specific legal obligations.
            </p>
          </section>
        </Container>
      </Section>
    </main>
  );
}
