"use client";

import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { PortfolioPortrait } from "./portfolio-portrait";
import { GithubIcon, LinkedinIcon } from "./portfolio-icons";

export function PortfolioHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Portfolio Introduction and Hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 lg:py-20 overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[30rem] bg-gradient-to-b from-teal-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Introduction */}
          <div className="space-y-6 sm:space-y-8">
            {/* Academic Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-xs text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
              <span className="font-semibold text-teal-300">Computer Science Engineer in Progress</span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">•</span>
              <span className="text-slate-400 hidden sm:inline">B.Tech CSE @ JAIN (2024–2028)</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                I’m interested in what makes software work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400">
                  beneath the surface.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Computer science undergraduate focused on backend engineering, REST API architecture, and building reliable systems from first principles.
              </p>
            </div>

            {/* Personal Statement */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              I enjoy understanding how data moves through request pipelines, authentication boundaries, and database transactions. Rather than stopping at visual interfaces, I focus on data validation, clean schema design, and predictable software behavior.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <p className="text-[11px] font-mono uppercase text-slate-400">Current CGPA</p>
                <p className="text-lg font-bold text-teal-300 mt-0.5">9.03 / 10</p>
                <p className="text-[10px] text-slate-500">Semesters 1–4</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <p className="text-[11px] font-mono uppercase text-slate-400">University</p>
                <p className="text-lg font-bold text-slate-100 mt-0.5">JAIN (Deemed)</p>
                <p className="text-[10px] text-slate-500">Bengaluru, India</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <p className="text-[11px] font-mono uppercase text-slate-400">Core Focus</p>
                <p className="text-lg font-bold text-cyan-300 mt-0.5">Backend & APIs</p>
                <p className="text-[10px] text-slate-500">Python • Node.js • SQL</p>
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-teal-500/50 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <Mail className="h-4 w-4 text-teal-400" aria-hidden="true" />
                <span>Let’s Connect</span>
              </button>

              {/* External profile icons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href="https://github.com/kapilshah01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kapil's GitHub profile"
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kapil-shah-bba4a0361"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kapil's LinkedIn profile"
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Portrait Composition */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md">
              <PortfolioPortrait />
            </div>
          </div>
        </div>

        {/* Scroll cue at bottom */}
        <div className="mt-16 lg:mt-24 flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-teal-400 transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-teal-400/80 group-hover:text-teal-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
