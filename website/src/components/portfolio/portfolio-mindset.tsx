"use client";

import { useState } from "react";
import {
  HelpCircle,
  Network,
  TestTube2,
  ShieldCheck,
  RefreshCw,
  Terminal,
} from "lucide-react";

interface MindsetPrinciple {
  number: string;
  title: string;
  tagline: string;
  icon: typeof HelpCircle;
  description: string;
  inAction: string;
  systemPerspective: string;
}

const principles: MindsetPrinciple[] = [
  {
    number: "01",
    title: "Understand the problem before writing code",
    tagline: "Define inputs, outputs, and boundary conditions first.",
    icon: HelpCircle,
    description:
      "Jumping directly into editor syntax before fully clarifying requirements leads to fragile code. I start by writing down the expected input types, required invariants, potential failure modes, and what constitutes a successful output.",
    inAction:
      "Drafting endpoint contracts and expected JSON schemas on paper or markdown before implementing controller routing.",
    systemPerspective: "Specifying request boundaries & preconditions.",
  },
  {
    number: "02",
    title: "Build a clear mental model of the system",
    tagline: "Trace data flow end-to-end through every layer.",
    icon: Network,
    description:
      "A software system is a pipeline of transformations. I trace how data enters via HTTP, travels through middleware parsers, passes authentication checks, reaches business logic, and converts into SQL queries. When you understand the flow, bugs become easy to locate.",
    inAction:
      "Visualizing state transitions: Client -> Gateway -> Middleware -> Handler -> Database -> Response.",
    systemPerspective: "End-to-end data lifecycle comprehension.",
  },
  {
    number: "03",
    title: "Learn by implementing and testing",
    tagline: "Reading documentation is necessary; building proves it.",
    icon: TestTube2,
    description:
      "Theory solidifies when you verify it with running code. When learning a concept like database transactions or asynchronous I/O, I write minimal isolated test scripts to observe behavior under normal and broken conditions.",
    inAction:
      "Constructing minimal Python scripts to test how connection pools handle timeouts and bad inputs.",
    systemPerspective: "Empirical verification of library & language behavior.",
  },
  {
    number: "04",
    title: "Prioritize validation, correctness, and maintainability",
    tagline: "Defensive programming prevents silent failures.",
    icon: ShieldCheck,
    description:
      "Clean software assumes external inputs can be malformed, malicious, or missing. I prioritize early validation, meaningful error responses, explicit typing, and readable naming conventions over clever one-liners.",
    inAction:
      "Validating inbound JSON types, length limits, and null states before database insertion with clear HTTP 400 responses.",
    systemPerspective: "Input sanitization, boundary checks & clear errors.",
  },
  {
    number: "05",
    title: "Improve through feedback and iteration",
    tagline: "Errors and stack traces are instructive learning artifacts.",
    icon: RefreshCw,
    description:
      "Software engineering is an iterative craft. When code fails or breaks, I don't treat it as a setback—I analyze the stack trace, diagnose the root cause, refactor the design, and document the lesson to prevent recurrence.",
    inAction:
      "Reviewing compiler and runtime error logs systematically; refactoring repetitive code into reusable modular functions.",
    systemPerspective: "Root-cause diagnosis & disciplined refactoring.",
  },
];

export function PortfolioMindset() {
  const [activeIdx, setActiveIdx] = useState(0);

  const active = principles[activeIdx];
  const Icon = active.icon;

  return (
    <section
      id="mindset"
      aria-label="Engineering Mindset and Principles"
      className="py-20 lg:py-28 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>04 // WORKING PRINCIPLES</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How I approach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
              software engineering.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Personal engineering principles developed through university computer science coursework, hands-on coding, and iterative problem solving.
          </p>
        </div>

        {/* Interactive Mindset Navigator */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-[1.1fr_1.3fr] gap-8 items-start">
          {/* Principle Buttons List */}
          <div className="space-y-2.5">
            {principles.map((p, idx) => {
              const isSelected = idx === activeIdx;
              const PrincipleIcon = p.icon;
              return (
                <button
                  key={p.number}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-teal-500/60 shadow-lg shadow-teal-950/40 ring-1 ring-teal-500/40"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded transition-colors flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "bg-slate-800 text-slate-500"
                      }`}
                    >
                      <PrincipleIcon className="h-3 w-3" />
                      <span>{p.number}</span>
                    </span>

                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {p.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-slate-400 pl-10 font-medium">
                    {p.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Schematic / Principle Breakdown */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider">
                    Principle {active.number} {"//"} Perspective
                  </span>
                  <p className="text-xs font-mono text-slate-400">{active.systemPerspective}</p>
                </div>
              </div>

              <span className="text-3xl font-black text-slate-800 font-mono">
                {active.number}
              </span>
            </div>

            {/* Title & Description */}
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {active.title}
              </h3>
              <p className="mt-2 text-xs font-mono text-teal-300">
                &ldquo;{active.tagline}&rdquo;
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* In Action Box */}
            <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-[11px] uppercase tracking-wider">
                <Terminal className="h-3.5 w-3.5" />
                <span>How this translates to everyday practice:</span>
              </div>
              <p className="font-mono text-xs text-slate-300 leading-relaxed pl-5 border-l-2 border-teal-500/40">
                {active.inAction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
