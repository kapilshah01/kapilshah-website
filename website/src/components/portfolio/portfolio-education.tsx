"use client";

import { useState } from "react";
import { GraduationCap, BookOpen, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  institution: string;
  location: string;
  scoreLabel: string;
  scoreValue: string;
  degreeType: string;
  status: string;
  description: string;
  courses: string[];
}

const milestones: Milestone[] = [
  {
    id: "btech",
    year: "2024 – 2028",
    title: "B.Tech Computer Science Engineering (CSE General)",
    institution: "JAIN (Deemed-to-be University)",
    location: "Bengaluru, India",
    scoreLabel: "Current CGPA",
    scoreValue: "9.03 / 10",
    degreeType: "Undergraduate Degree",
    status: "Currently in 4th Semester",
    description:
      "Pursuing a foundational curriculum in computer science engineering. Maintaining a 9.03/10 cumulative GPA across the first four semesters, with academic study focused on object-oriented programming, data structures, relational database modeling, and client-server architecture.",
    courses: [
      "Object-Oriented Programming (Python & C#)",
      "Relational Database Concepts & SQL",
      "Client-Server Architecture & API Basics",
      "Data Validation & Program Logic",
      "Algorithms & Computational Problem Solving",
    ],
  },
  {
    id: "secondary",
    year: "Completed",
    title: "Higher Secondary Education",
    institution: "Global School of Science / Global College",
    location: "Nepal",
    scoreLabel: "Academic Score",
    scoreValue: "86.25%",
    degreeType: "Higher Secondary Education",
    status: "Completed (86.25%)",
    description:
      "Completed secondary education in science and mathematics, achieving 86.25%. Established analytical skills in mathematics and introductory computing concepts.",
    courses: [
      "Science & Advanced Mathematics",
      "Computer Science Fundamentals",
      "Analytical Problem Solving",
    ],
  },
];

export function PortfolioEducation() {
  const [selectedMilestone, setSelectedMilestone] = useState<string>("btech");

  const active = milestones.find((m) => m.id === selectedMilestone) || milestones[0];

  return (
    <section
      id="education"
      aria-label="Academic Education and Timeline"
      className="py-20 lg:py-28 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>02 // ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Formal education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
              engineering milestones.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A verified record of my academic journey—grounded in computer science theory, analytical mathematics, and high scholastic standing.
          </p>
        </div>

        {/* Timeline & Interactive Deep-Dive Grid */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-[1.1fr_1.3fr] gap-8 items-start">
          {/* Timeline Visual Track */}
          <div className="space-y-6 relative">
            {/* Connecting line */}
            <div
              className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500/50 to-slate-800"
              aria-hidden="true"
            />

            {milestones.map((m) => {
              const isSelected = m.id === selectedMilestone;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMilestone(m.id)}
                  className={`relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-teal-500/60 shadow-xl shadow-teal-950/40 ring-1 ring-teal-500/40"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                >
                  {/* Timeline Node Icon */}
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      isSelected
                        ? "bg-teal-500/20 border-teal-400 text-teal-300 shadow-md shadow-teal-500/20"
                        : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}
                  >
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  {/* Milestone Card Summary */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-teal-400 font-semibold">
                        <Calendar className="h-3.5 w-3.5" />
                        {m.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 font-mono text-xs font-bold text-teal-300">
                        {m.scoreValue}
                      </span>
                    </div>

                    <h3
                      className={`mt-2 text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isSelected ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {m.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
                      {m.institution}
                    </p>

                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      <span>{m.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Milestone Details Pane */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Top spec badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Academic Standing
                </span>
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  {active.scoreValue}
                </p>
                <p className="text-[11px] text-teal-400 font-mono">{active.scoreLabel}</p>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Status
                </span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">{active.status}</p>
                <p className="text-[11px] text-slate-400 font-mono">{active.degreeType}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h4 className="text-lg font-bold text-white">{active.title}</h4>
              <p className="mt-1 text-xs text-teal-400 font-mono">
                {active.institution} — {active.location}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Core Coursework */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 tracking-wider">
                <BookOpen className="h-4 w-4 text-teal-400" />
                <span>Core Academic &amp; Conceptual Focus:</span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {active.courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
