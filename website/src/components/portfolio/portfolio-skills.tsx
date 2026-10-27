"use client";

import { useState, useMemo } from "react";
import {
  Code2,
  Server,
  Wrench,
  Cpu,
  Search,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface SkillItem {
  id: string;
  name: string;
  category: "languages" | "backend" | "tools" | "concepts";
  categoryLabel: string;
  role: string;
  context: string;
  concepts: string[];
}

const skillsData: SkillItem[] = [
  // Languages
  {
    id: "python",
    name: "Python",
    category: "languages",
    categoryLabel: "Programming Languages",
    role: "Primary Backend Language",
    context:
      "Core language used for scripting, algorithmic problem solving, data manipulation, and building Flask-based web services.",
    concepts: ["OOP Classes", "Decorators", "Virtual Environments", "List Comprehensions"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    categoryLabel: "Programming Languages",
    role: "Asynchronous Scripting",
    context:
      "Used for client-side interactivity, DOM manipulation, asynchronous promises, and server-side runtime scripts in Node.js.",
    concepts: ["ES6+ Syntax", "Promises & Async/Await", "Event Loop Basics", "JSON Handling"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "languages",
    categoryLabel: "Programming Languages",
    role: "Relational Data Querying",
    context:
      "Writing structured queries, schema design, filtering, aggregate functions, and foreign key relations for database systems.",
    concepts: ["SELECT / JOINs", "Schema Modeling", "Aggregate Functions", "Primary/Foreign Keys"],
  },
  {
    id: "csharp",
    name: "C#",
    category: "languages",
    categoryLabel: "Programming Languages",
    role: "Strongly Typed OOP",
    context:
      "Studied and implemented in academic coursework for object-oriented software engineering and strongly typed system design.",
    concepts: ["Class Hierarchies", "Encapsulation", "Interfaces", "Type Safety"],
  },

  // Backend & Web Technologies
  {
    id: "flask",
    name: "Flask",
    category: "backend",
    categoryLabel: "Backend & Web Technologies",
    role: "Lightweight Python Framework",
    context:
      "Building modular microservices, REST endpoint routing, handling request lifecycles, and connecting backend routes to databases.",
    concepts: ["Blueprints", "Request/Response Cycle", "Routing", "HTTP Error Handlers"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    categoryLabel: "Backend & Web Technologies",
    role: "JavaScript Server Runtime",
    context:
      "Executing asynchronous server-side scripts, managing packages via npm, and building event-driven web applications.",
    concepts: ["npm Ecosystem", "Non-blocking I/O", "File System (fs)", "Environment Variables"],
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "backend",
    categoryLabel: "Backend & Web Technologies",
    role: "REST API Middleware Framework",
    context:
      "Configuring middleware chains, JSON body parsing, structured error handling, and parameter extraction for backend routes.",
    concepts: ["Middleware Pipelines", "CORS Configuration", "Route Controllers", "Status Codes"],
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "backend",
    categoryLabel: "Backend & Web Technologies",
    role: "Resource Architecture",
    context:
      "Designing clean stateless endpoints following standard HTTP methods (GET, POST, PUT, DELETE) and consistent response payloads.",
    concepts: ["Statelessness", "HTTP Status Codes", "Resource Naming", "Error Payloads"],
  },
  {
    id: "http-json",
    name: "HTTP & JSON",
    category: "backend",
    categoryLabel: "Backend & Web Technologies",
    role: "Data Exchange Protocols",
    context:
      "Understanding HTTP headers, request verbs, response bodies, and parsing structured JSON data between client and server.",
    concepts: ["Headers & Payloads", "Serialization / Deserialization", "Content-Type", "Query Params"],
  },
  {
    id: "crud",
    name: "CRUD Operations",
    category: "backend",
    categoryLabel: "Backend & Web Technologies",
    role: "Data Persistence Lifecycles",
    context:
      "Implementing Create, Read, Update, and Delete patterns connected to database storage with defensive input validation.",
    concepts: ["Data Validation", "Atomic Updates", "Soft vs Hard Deletes", "Database Sync"],
  },

  // Developer Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    categoryLabel: "Developer Tools",
    role: "Version Control",
    context:
      "Managing source code changes, branch workflows, rebasing, committing with clear messages, and inspecting project diffs.",
    concepts: ["Commit Discipline", "Branching Workflows", "Merge Conflict Resolution", "Diff Inspection"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    categoryLabel: "Developer Tools",
    role: "Code Hosting & Collaboration",
    context:
      "Hosting repositories, reviewing code, managing remotes, tracking issues, and deploying documentation/pages.",
    concepts: ["Remote Repositories", "Pull Requests", "Markdown Documentation", "Release Tags"],
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    categoryLabel: "Developer Tools",
    role: "Development Environment",
    context:
      "Configuring debugging environments, integrated terminal workflows, linting extensions, and language server protocols.",
    concepts: ["Debugging Breakpoints", "Terminal Integration", "Extension Ecosystem", "Workspace Settings"],
  },

  // Engineering Concepts
  {
    id: "oop",
    name: "Object-Oriented Programming",
    category: "concepts",
    categoryLabel: "Engineering Concepts",
    role: "Software Architecture Paradigm",
    context:
      "Applying encapsulation, inheritance, polymorphism, and abstraction to organize code into maintainable, modular classes.",
    concepts: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
  },
  {
    id: "api-dev",
    name: "API Development",
    category: "concepts",
    categoryLabel: "Engineering Concepts",
    role: "Endpoint & Contract Design",
    context:
      "Structuring API endpoints with clear request contracts, payload validation, status code semantics, and defensive error responses.",
    concepts: ["Contract Design", "Defensive Validation", "Error Propagation", "Predictable Payloads"],
  },
  {
    id: "auth-concepts",
    name: "Authentication Basics",
    category: "concepts",
    categoryLabel: "Engineering Concepts",
    role: "Security & Identity",
    context:
      "Studying how authentication works in client-server architecture: tokens, password hashing concepts, and role-based privileges.",
    concepts: ["Token Lifecycles", "Session Separation", "Credential Hashing", "Protected Routes"],
  },
  {
    id: "data-validation",
    name: "Data Validation",
    category: "concepts",
    categoryLabel: "Engineering Concepts",
    role: "Correctness & Hygiene",
    context:
      "Verifying input boundaries, sanitizing user data, enforcing type checks, and rejecting malformed payloads before execution.",
    concepts: ["Boundary Checking", "Type Coercion Defense", "Sanitization", "Detailed Error Messages"],
  },
  {
    id: "client-server",
    name: "Client-Server Architecture",
    category: "concepts",
    categoryLabel: "Engineering Concepts",
    role: "System Architecture",
    context:
      "Separating concerns between user interface consumers and backend service providers across network protocols.",
    concepts: ["Separation of Concerns", "Stateless Interaction", "Latency Awareness", "Network Boundaries"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "languages", label: "Languages", icon: Code2 },
  { id: "backend", label: "Backend & Web", icon: Server },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "concepts", label: "Concepts", icon: Cpu },
];

export function PortfolioSkills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSkillId, setActiveSkillId] = useState<string>("python");

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        selectedCategory === "all" || skill.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.concepts.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const activeSkill =
    skillsData.find((s) => s.id === activeSkillId) ||
    filteredSkills[0] ||
    skillsData[0];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Competencies"
      className="py-20 lg:py-28 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>03 // TECHNICAL COMPETENCIES</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Practical skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
              engineering toolset.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Technologies and concepts I actively study, implement, and develop. Presented transparently as working proficiencies without fabricated percentages or claims of mastery.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            {categoryTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-xs"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills or concepts..."
              aria-label="Filter skills or concepts"
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Main Interactive Skills Layout */}
        <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = skill.id === activeSkill.id;
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setActiveSkillId(skill.id)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer group ${
                    isSelected
                      ? "bg-slate-900 border-teal-500/60 shadow-lg shadow-teal-950/40 ring-1 ring-teal-500/40"
                      : "bg-slate-900/50 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 group-hover:text-teal-400">
                      {skill.categoryLabel.split(" ")[0]}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-teal-400/90 font-medium">{skill.role}</p>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {skill.context}
                  </p>
                </button>
              );
            })}

            {filteredSkills.length === 0 && (
              <div className="col-span-2 p-8 text-center rounded-xl bg-slate-900/30 border border-slate-800 text-slate-400 text-sm">
                No skills found matching &ldquo;{searchQuery}&rdquo;.
              </div>
            )}
          </div>

          {/* Interactive Inspection Drawer */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl sticky top-32">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-[11px] font-mono uppercase text-teal-400 tracking-wider">
                Skill In-Depth Inspection
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {activeSkill.categoryLabel}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-2xl font-bold text-white">{activeSkill.name}</h3>
              <p className="text-xs font-mono text-teal-300 mt-1">{activeSkill.role}</p>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeSkill.context}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Core Conceptual Touchpoints:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeSkill.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    <CheckCircle2 className="h-3 w-3 text-teal-400 shrink-0" />
                    <span>{concept}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Career Interests Alignment */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                Career Interests Alignment:
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {[
                  "Python Development",
                  "Backend Engineering",
                  "Software Engineering",
                  "REST APIs",
                  "Cloud Computing",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 border border-teal-500/20 text-teal-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
