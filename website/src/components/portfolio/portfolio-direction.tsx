"use client";

import { Code, Database, Key, Cloud } from "lucide-react";

interface DirectionGoal {
  id: string;
  category: string;
  title: string;
  focus: string;
  icon: typeof Code;
  details: string;
  learningTracks: string[];
}

const goals: DirectionGoal[] = [
  {
    id: "backend-mastery",
    category: "Primary Technical Goal",
    title: "Deepening Python & Backend Engineering",
    focus: "Application Architecture & Performance",
    icon: Code,
    details:
      "Transitioning from basic endpoint routing to production-grade request pipelines, asynchronous I/O with asyncio, clean dependency injection, and modular application layering.",
    learningTracks: [
      "Deepening Python async programming and generator pipelines",
      "Building robust RESTful services with strict schema contracts",
      "Structuring modular backend codebases with clear domain boundaries",
    ],
  },
  {
    id: "relational-databases",
    category: "Data Integrity",
    title: "Advanced Relational Data & SQL",
    focus: "Schema Design, Indexing & Query Tuning",
    icon: Database,
    details:
      "Advancing beyond elementary CRUD queries to master database normalization (1NF–BCNF), multi-table JOIN execution plans, transaction isolation levels (ACID), and indexing strategies.",
    learningTracks: [
      "Analyzing SQL EXPLAIN query plans to eliminate bottlenecks",
      "Designing normalized schemas with strict foreign-key integrity",
      "Understanding connection pooling and concurrent transaction safety",
    ],
  },
  {
    id: "auth-security",
    category: "System Security",
    title: "Production Authentication & Access Control",
    focus: "Tokens, Sessions & Identity Lifecycles",
    icon: Key,
    details:
      "Developing a deep understanding of security protocols, JSON Web Token (JWT) verification lifecycles, OAuth 2.0 flows, secure password hashing (Argon2/bcrypt), and role-based permissions.",
    learningTracks: [
      "Implementing stateless token authentication with refresh mechanisms",
      "Defending against token replay, session fixation, and CSRF vulnerabilities",
      "Enforcing least-privilege role separation on sensitive API endpoints",
    ],
  },
  {
    id: "cloud-infra",
    category: "Infrastructure & Deployment",
    title: "Cloud Fundamentals & Edge Runtimes",
    focus: "Containerization, Edge Compute & CI/CD",
    icon: Cloud,
    details:
      "Learning how code transitions from local development to production through containerization (Docker), modern edge computing runtimes, automated linting, and continuous integration workflows.",
    learningTracks: [
      "Containerizing Python and Node backend services with Docker",
      "Understanding serverless execution and edge functions",
      "Automating typecheck and linting validation in automated pipelines",
    ],
  },
];

export function PortfolioDirection() {
  return (
    <section
      id="direction"
      aria-label="Current Direction and Learning Goals"
      className="py-20 lg:py-28 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>05 // FUTURE TRAJECTORY</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Current direction &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
              engineering goals.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Where I am concentrating my study, practice, and hands-on experimentation. Presented honestly as deliberate learning trajectories I am actively working toward.
          </p>
        </div>

        {/* Learning Roadmap Progression Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.id}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase text-teal-300 font-semibold tracking-wider">
                        {goal.category}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-slate-500">
                      TRACK 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {goal.title}
                  </h3>

                  <p className="mt-1 text-xs font-mono text-cyan-400/90">
                    {goal.focus}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {goal.details}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    Active Study Topics:
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {goal.learningTracks.map((track, trackIdx) => (
                      <li
                        key={trackIdx}
                        className="flex items-start gap-2 text-xs text-slate-400 leading-snug"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                        <span>{track}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
