"use client";

import React from "react";
import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/ui/Icons";
import { personalInfo } from "@/data/social";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  variant?: "icon-only" | "with-labels";
  size?: "sm" | "md" | "lg";
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  variant = "icon-only",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const buttonSizes = {
    sm: "p-2 text-xs",
    md: "p-2.5 text-sm",
    lg: "p-3 text-base",
  };

  const links = [
    {
      name: "GitHub",
      url: personalInfo.socials.github,
      icon: <GithubIcon className={iconSizes[size]} />,
      label: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: personalInfo.socials.linkedin,
      icon: <LinkedinIcon className={iconSizes[size]} />,
      label: "LinkedIn Profile",
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.socials.email}`,
      icon: <Mail className={iconSizes[size]} />,
      label: personalInfo.socials.email,
    },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={link.name}
          title={link.label}
          className={cn(
            "group inline-flex items-center gap-2 rounded-xl transition-all duration-300",
            "bg-zinc-900/80 hover:bg-emerald-500/10 text-zinc-400 hover:text-emerald-400",
            "border border-white/10 hover:border-emerald-500/40",
            "hover:scale-105 active:scale-95 shadow-sm",
            buttonSizes[size]
          )}
        >
          <span className="transition-transform group-hover:rotate-6">
            {link.icon}
          </span>
          {variant === "with-labels" && (
            <span className="font-medium text-xs tracking-wide">
              {link.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};
