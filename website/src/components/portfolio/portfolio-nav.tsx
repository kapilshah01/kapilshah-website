"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Menu, X } from "lucide-react";

const navSections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "mindset", label: "Mindset" },
  { id: "direction", label: "Direction" },
  { id: "contact", label: "Contact" },
];

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Intersection observer for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Portfolio section navigation"
      className={`sticky top-16 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-2.5"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Back to Main Website link & Identity pill */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Cybersecurity Site</span>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-[11px] font-mono text-teal-300">
              <Sparkles className="h-3 w-3 text-teal-400" />
              <span>Developer Portfolio</span>
            </span>
          </div>

          {/* Center/Right: Desktop Navigation Pills */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800/80">
            {navSections.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-xs"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Right: Quick Connect button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-xs font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all shadow-xs shadow-teal-500/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Get in Touch
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close section menu" : "Open section menu"}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 rounded-xl bg-slate-900/95 border border-slate-800 backdrop-blur-md animate-in fade-in duration-150">
            <div className="grid grid-cols-2 gap-2">
              {navSections.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollTo(id)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer ${
                      isActive
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

