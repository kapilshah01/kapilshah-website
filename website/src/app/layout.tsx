import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kapilshah.com.np"),
  title: {
    default: "Kapil Shah",
    template: "%s | Kapil Shah",
  },
  description:
    "Personal brand, technical blog, portfolio, resources, and future digital business platform for Kapil Shah.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kapil Shah",
    description:
      "Personal brand, technical blog, portfolio, resources, and future digital business platform for Kapil Shah.",
    url: "https://kapilshah.com.np",
    siteName: "Kapil Shah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Shah",
    description:
      "Personal brand, technical blog, portfolio, resources, and future digital business platform for Kapil Shah.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
