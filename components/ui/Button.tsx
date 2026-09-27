"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  isExternal = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 border border-emerald-400/40 font-semibold",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/15 hover:border-white/30 shadow-sm",
    outline:
      "bg-transparent border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300",
    ghost:
      "bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white border border-transparent",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};
