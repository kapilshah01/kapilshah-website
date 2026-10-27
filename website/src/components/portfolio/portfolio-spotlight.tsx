"use client";

import { useEffect, useRef } from "react";

export function PortfolioSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion and touch devices
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (container) {
        container.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-10 hidden md:block"
    >
      <div
        ref={containerRef}
        className="absolute -top-64 -left-64 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-teal-500/10 via-cyan-500/8 to-violet-500/10 blur-3xl opacity-60 transition-opacity duration-1000 will-change-transform"
      />
    </div>
  );
}

