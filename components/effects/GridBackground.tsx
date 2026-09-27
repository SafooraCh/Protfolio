"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("relative min-h-screen w-full bg-[#07090E] text-zinc-100 overflow-x-hidden", className)}>
      {/* Ambient Radial Gradient Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-center emerald aura */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] opacity-60" />
        {/* Right side indigo/slate aura */}
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[160px] opacity-40" />
        {/* Bottom left aura */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-700/5 rounded-full blur-[160px] opacity-40" />
      </div>

      {/* Futuristic Grid Pattern with Center Mask */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
