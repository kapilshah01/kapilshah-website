import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { CookieNotice } from "@/components/privacy/cookie-notice";
import { authorSchema, canonicalUrl, structuredData, websiteSchema } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kapilshah.com.np"),
  title: {
    default: "Practical Small Business Cybersecurity",
    template: "%s | Kapil Shah",
  },
  description:
    "Practical cybersecurity guidance for small businesses without a security team.",
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "Practical Small Business Cybersecurity | Kapil Shah",
    description:
      "Practical cybersecurity guidance for small businesses without a security team.",
    url: "https://kapilshah.com.np",
    siteName: "Kapil Shah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical Small Business Cybersecurity | Kapil Shah",
    description:
      "Practical cybersecurity guidance for small businesses without a security team.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData([websiteSchema, authorSchema]) }} />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
        <SearchDialog />
        <CookieNotice />
      </body>
    </html>
  );
}
