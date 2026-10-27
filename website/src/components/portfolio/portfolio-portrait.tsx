"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Terminal } from "lucide-react";

interface PortfolioPortraitProps {
  className?: string;
}

export function PortfolioPortrait({ className = "" }: PortfolioPortraitProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* Ambient glow behind portrait */}
      <div
        className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-teal-500/20 via-cyan-500/15 to-violet-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 -z-10"
        aria-hidden="true"
      />

      {/* Outer technical frame */}
      <div className="relative rounded-2xl p-1 bg-gradient-to-b from-teal-500/40 via-slate-800/80 to-slate-900 border border-teal-500/30 shadow-2xl shadow-teal-950/40 overflow-hidden">
        {/* Corner HUD brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-teal-400/80 pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-teal-400/80 pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-10 left-2 w-3 h-3 border-b-2 border-l-2 border-teal-400/80 pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-10 right-2 w-3 h-3 border-b-2 border-r-2 border-teal-400/80 pointer-events-none z-20" aria-hidden="true" />

        {/* Top tech header tag */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/80 border-b border-teal-500/20 text-[10px] font-mono text-teal-300/80 tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>ID: KAPIL.SHAH // CSE</span>
          </span>
          <span className="text-slate-400">JAIN UNIV</span>
        </div>

        {/* Portrait container */}
        <div className="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden">
          {!imageError ? (
            <Image
              src="/images/portfolio/kapil-profile.jpg"
              alt="Kapil Kumar Shah Sonar — Computer Science Engineering student at JAIN University"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ objectPosition: "50% 18%" }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-300 mb-4">
                <User className="h-10 w-10" />
              </div>
              <p className="text-base font-bold text-slate-100">Kapil Kumar Shah Sonar</p>
              <p className="text-xs text-teal-400 mt-1 font-mono">B.Tech CSE • JAIN University</p>
              <p className="text-[11px] text-slate-400 mt-3 max-w-[220px]">
                Add portrait to: <br />
                <code className="text-teal-300 font-mono text-[10px]">public/images/portfolio/kapil-profile.jpg</code>
              </p>
            </div>
          )}

          {/* Subtle gradient vignette at bottom of image for seamless contrast */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Interactive hover overlay label */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-slate-200">
            <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs border border-teal-500/30 text-teal-300">
              Bengaluru, IN
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs border border-slate-700/60 text-slate-400">
              CGPA 9.03 / 10
            </span>
          </div>
        </div>

        {/* Bottom micro-spec metadata bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-slate-950/90 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <Terminal className="h-3 w-3 text-teal-400" />
            <span>Python • Backend • APIs</span>
          </span>
          <span className="text-teal-400 font-semibold">2024–2028</span>
        </div>
      </div>
    </div>
  );
}
