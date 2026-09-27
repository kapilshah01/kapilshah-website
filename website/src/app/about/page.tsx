import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { profilePageSchema, structuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Kapil Shah",
  description: "About Kapil Shah and the purpose and editorial approach behind this small-business cybersecurity resource.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData(profilePageSchema) }} /><Section><Container className="max-w-3xl"><header><p className="text-sm font-semibold uppercase tracking-wider text-primary">About</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Kapil Shah</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">This site shares practical cybersecurity guidance for small businesses that do not have a dedicated security team.</p></header><section className="mt-10"><h2 className="text-2xl font-semibold text-foreground">Editorial approach</h2><p className="mt-4 leading-7 text-muted-foreground">Guides focus on clear actions, explain technical terms, and link to primary sources such as government and standards-body guidance where relevant. Security recommendations can change as products and threats change, so pages show publication and update dates and should be reviewed when their source guidance changes.</p><p className="mt-4 leading-7 text-muted-foreground">The site does not claim professional certifications, endorsements, or product testing that are not described on the relevant page.</p></section></Container></Section></main>;
}
