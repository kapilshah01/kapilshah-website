"use client";

import { useState } from "react";
import { Server, Cpu, Database, CheckCircle2 } from "lucide-react";

const focusAreas = [
  {
    id: "backend",
    title: "Why Backend Systems",
    icon: Server,
    badge: "System Core",
    summary: "Fascinated by state management, data pipelines, and request lifecycles.",
    content:
      "When most people interact with software, they experience the interface. What captivates me is the invisible orchestration beneath: how an HTTP request is parsed, authenticated, validated against strict business rules, routed to a controller, and translated into atomic database transactions. I enjoy designing clean REST endpoints and understanding how systems behave when network conditions are imperfect or payloads are malformed.",
    highlights: [
      "RESTful API design with clean resource modeling and predictable HTTP semantics",
      "Request authentication patterns and role-based access control separation",
      "Defensive validation of inbound payloads before persistence",
    ],
  },
  {
    id: "mindset",
    title: "How I Learn & Build",
    icon: Cpu,
    badge: "Methodology",
    summary: "Reading documentation, isolating test cases, and building mental models.",
    content:
      "Rather than blindly copying code or relying on black-box abstractions, I prioritize building a reliable mental model of every layer I touch. If an API returns an unexpected error, I inspect the request headers, check the database query logs, and write small isolated test scripts to reproduce the problem. I read official language specifications and framework documentation to understand why design choices were made.",
    highlights: [
      "Consulting official docs (Python, Node.js, MDN, PostgreSQL) as primary references",
      "Writing minimal reproduction scripts to verify library behavior",
      "Breaking complex logic into small, testable pure functions",
    ],
  },
  {
    id: "academics",
    title: "Academic & Real World",
    icon: Database,
    badge: "JAIN (2024–2028)",
    summary: "Connecting rigorous CS theory with practical software implementations.",
    content:
      "At JAIN University in Bengaluru, my coursework covers Data Structures, Object-Oriented Design, Operating Systems, and Relational Database Systems. I treat this academic foundation as the bedrock for modern engineering. Concepts like algorithmic time complexity, memory allocation, database normalization, and ACID properties directly inform how I structure backend code and design schemas.",
    highlights: [
      "9.03 / 10 CGPA maintained across foundational computer science coursework",
      "Strong grounding in Object-Oriented Programming (OOP) in Python and C#",
      "Relational schema modeling and structured SQL query development",
    ],
  },
];

export function PortfolioAbout() {
  const [activeTab, setActiveTab] = useState("backend");

  const activeFocus = focusAreas.find((area) => area.id === activeTab) || focusAreas[0];
  const Icon = activeFocus.icon;

  return (
    <section
      id="about"
      aria-label="About Kapil Shah"
      className="py-20 lg:py-28 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>01 // IDENTITY & PERSPECTIVE</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Building reliable software from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              first principles.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a Computer Science Engineering student at JAIN (Deemed-to-be University) in Bengaluru. My journey in technology is driven by a desire to understand the architectural spine of modern applications: backends, databases, and APIs.
          </p>
        </div>

        {/* Interactive Narrative Explorer */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Tab Selector Buttons */}
          <div className="space-y-3" role="tablist" aria-label="Perspective topics">
            {focusAreas.map((area) => {
              const AreaIcon = area.icon;
              const isSelected = area.id === activeTab;
              return (
                <button
                  key={area.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${area.id}`}
                  onClick={() => setActiveTab(area.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-teal-500/50 shadow-lg shadow-teal-950/30 ring-1 ring-teal-500/30"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          isSelected ? "bg-teal-500/20 text-teal-300" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <AreaIcon className="h-5 w-5" />
                      </div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {area.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      {area.badge}
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {area.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Detail Panel */}
          <div
            id={`panel-${activeFocus.id}`}
            role="tabpanel"
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            {/* Subtle corner badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 text-teal-300 font-mono text-xs">
              <Icon className="h-4 w-4" />
              <span>PERSPECTIVE DEEP DIVE // {activeFocus.badge}</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {activeFocus.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeFocus.content}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Working Principles in Practice:
              </p>
              <ul className="mt-3 space-y-2.5">
                {activeFocus.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
