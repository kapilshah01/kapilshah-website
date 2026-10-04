import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { InteractiveChecklist } from "@/components/checklist/interactive-checklist";
import { authorSchema, canonicalUrl, structuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Small Business Cybersecurity Checklist | Kapil Shah",
  description:
    "A practical 25-point interactive cybersecurity checklist for small businesses without a security team. Track your progress, verify key controls, and print your executive baseline.",
  alternates: { canonical: canonicalUrl("/checklist") },
  openGraph: {
    title: "Small Business Cybersecurity Checklist | Kapil Shah",
    description:
      "A practical 25-point interactive cybersecurity checklist for small businesses without a security team. Track your progress, verify key controls, and print your executive baseline.",
    url: canonicalUrl("/checklist"),
    siteName: "Kapil Shah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Cybersecurity Checklist | Kapil Shah",
    description:
      "A practical 25-point interactive cybersecurity checklist for small businesses without a security team. Track your progress, verify key controls, and print your executive baseline.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Small Business Cybersecurity Checklist",
  description:
    "A practical 25-point interactive cybersecurity checklist and progress tracker for small businesses without a dedicated security team.",
  url: canonicalUrl("/checklist"),
  author: authorSchema,
};

export default function ChecklistPage() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(pageSchema) }}
      />

      <Section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          {/* Header row */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Interactive Tool</Badge>
              <span className="text-xs text-muted-foreground print:hidden">
                Saved privately in your browser
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Small Business Cybersecurity Checklist
            </h1>

            <p className="text-lg leading-8 text-muted-foreground">
              A practical 25-point operational baseline designed for businesses without a dedicated security team. Check off items as you complete them, filter by time commitment, and print an executive summary sheet for your records or IT support.
            </p>

            {/* In-depth guide reference callout */}
            <div className="rounded-lg border border-border bg-surface-muted/50 p-4 text-sm text-muted-foreground print:hidden">
              <p>
                <strong>Looking for the comprehensive written guide?</strong> Read our in-depth{" "}
                <Link
                  href="/guides/small-business-cybersecurity-checklist"
                  className="font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Small Business Cybersecurity Checklist Guide
                </Link>{" "}
                for full explanations of each defense layer, background context, and official primary standards.
              </p>
            </div>
          </header>

          {/* Interactive Checklist Container */}
          <div className="mt-10">
            <InteractiveChecklist />
          </div>

          {/* Educational Disclaimer */}
          <footer className="mt-16 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground print:mt-8 print:border-gray-300 print:pt-4 print:text-gray-700">
            <p>
              <strong className="font-semibold text-foreground print:text-black">Operational Disclaimer:</strong> This checklist provides an educational baseline for practical risk reduction and is adapted from government and standards-body guidance (including NIST CSF 2.0 and CISA SMB resources). Every small business operates within a unique technology and risk environment; completing these items does not guarantee complete security or regulatory compliance. Organizations should adapt these controls to their specific systems, contractual commitments, and statutory duties.
            </p>
          </footer>
        </Container>
      </Section>
    </main>
  );
}

