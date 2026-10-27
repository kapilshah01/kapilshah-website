import type { Metadata } from "next";
import { canonicalUrl, structuredData } from "@/lib/seo";
import { PortfolioSpotlight } from "@/components/portfolio/portfolio-spotlight";
import { PortfolioNav } from "@/components/portfolio/portfolio-nav";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioAbout } from "@/components/portfolio/portfolio-about";
import { PortfolioEducation } from "@/components/portfolio/portfolio-education";
import { PortfolioSkills } from "@/components/portfolio/portfolio-skills";
import { PortfolioMindset } from "@/components/portfolio/portfolio-mindset";
import { PortfolioDirection } from "@/components/portfolio/portfolio-direction";
import { PortfolioContact } from "@/components/portfolio/portfolio-contact";

export const metadata: Metadata = {
  title: "Kapil Kumar Shah Sonar | Computer Science Engineering Portfolio",
  description:
    "Personal developer portfolio of Kapil Kumar Shah Sonar — B.Tech Computer Science Engineering student at JAIN (Bengaluru). Focused on backend engineering, Python, REST APIs, and software architecture.",
  alternates: {
    canonical: canonicalUrl("/portfolio"),
  },
  openGraph: {
    title: "Kapil Kumar Shah Sonar | Computer Science Engineering Portfolio",
    description:
      "Personal developer portfolio of Kapil Kumar Shah Sonar — B.Tech CSE student at JAIN University (Bengaluru). Focused on backend systems, Python, REST APIs, and reliable software.",
    url: canonicalUrl("/portfolio"),
    siteName: "Kapil Shah",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: canonicalUrl("/images/portfolio/kapil-profile.jpg"),
        width: 800,
        height: 1000,
        alt: "Kapil Kumar Shah Sonar — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Kumar Shah Sonar | Developer Portfolio",
    description:
      "B.Tech CSE student at JAIN University. Exploring backend engineering, Python, REST APIs, and software architecture.",
    images: [canonicalUrl("/images/portfolio/kapil-profile.jpg")],
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Kapil Kumar Shah Sonar",
    alternateName: "Kapil Shah",
    url: canonicalUrl("/portfolio"),
    image: canonicalUrl("/images/portfolio/kapil-profile.jpg"),
    jobTitle: "Computer Science Engineering Student",
    description:
      "Computer Science Engineering undergraduate at JAIN (Deemed-to-be University), Bengaluru. Focused on backend engineering, REST API architecture, and database systems.",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "JAIN (Deemed-to-be University), Bengaluru",
        programName: "B.Tech Computer Science Engineering",
      },
      {
        "@type": "EducationalOrganization",
        name: "Global School of Science / Global College, Nepal",
        programName: "Higher Secondary Education (+2 Science)",
      },
    ],
    sameAs: [
      "https://github.com/kapilshah01",
      "https://www.linkedin.com/in/kapil-shah-bba4a0361",
    ],
    knowsAbout: [
      "Python Development",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQL",
      "C#",
      "Object-Oriented Programming",
      "Data Validation",
      "Client-Server Architecture",
    ],
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#070b14] text-slate-100 min-h-screen relative overflow-hidden font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(portfolioSchema) }}
      />

      {/* Engineering Grid Subtle Canvas */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30, 41, 59, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.3) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient Lighting Orbs */}
      <div
        className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Cursor spotlight on desktop */}
      <PortfolioSpotlight />

      {/* Sub-Navigation Bar */}
      <PortfolioNav />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex-1">
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioEducation />
        <PortfolioSkills />
        <PortfolioMindset />
        <PortfolioDirection />
        <PortfolioContact />
      </main>
    </div>
  );
}
