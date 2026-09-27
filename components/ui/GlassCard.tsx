"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowOnHover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowOnHover = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        "bg-zinc-900/60 backdrop-blur-xl",
        "border border-white/10",
        hoverEffect && "hover:-translate-y-1 hover:border-emerald-500/30",
        glowOnHover && "hover:shadow-xl hover:shadow-emerald-950/40",
        className
      )}
      {...props}
    >
      {/* Subtle top reflection sheen */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </div>
  );
};
