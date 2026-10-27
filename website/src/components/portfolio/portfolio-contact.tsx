"use client";

import { useState } from "react";
import { Mail, Copy, Check, MapPin, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./portfolio-icons";

export function PortfolioContact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "kapilshahsonar@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Social Presence"
      className="py-20 lg:py-28 border-t border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>06 // CONNECT &amp; COLLABORATE</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let’s start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
              conversation.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you want to discuss backend architecture, software engineering internships, academic projects, or shared technical interests, I would welcome the opportunity to connect.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Direct Action Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Direct Channel
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">Email Address</h3>
              <p className="mt-1 text-xs text-slate-400">
                Preferred for formal inquiries, internships, and technical discussions.
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-teal-300 break-all select-all">
                {emailAddress}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 text-slate-950 text-xs font-semibold hover:bg-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
                className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-teal-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* GitHub Channel Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  Version Control
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">GitHub Profile</h3>
              <p className="mt-1 text-xs text-slate-400">
                Explore my code repositories, experiment commits, and development activity.
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                @kapilshah01
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <a
                href="https://github.com/kapilshah01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-teal-400" />
              </a>
            </div>
          </div>

          {/* LinkedIn Channel Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Professional Network
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">LinkedIn Network</h3>
              <p className="mt-1 text-xs text-slate-400">
                Connect professionally, review academic milestones, and follow my software engineering journey.
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                in/kapil-shah-bba4a0361
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <a
                href="https://www.linkedin.com/in/kapil-shah-bba4a0361"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Academic Base Note */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-teal-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Education Base:</strong> Bengaluru, India (JAIN University) • Nepal
            </span>
          </div>
          <span className="font-mono text-[11px] text-teal-300">
            Computer Science Engineering Student • Aspiring Software Engineer
          </span>
        </div>
      </div>
    </section>
  );
}
