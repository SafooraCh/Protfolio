"use client";

import React from "react";
import { personalInfo } from "@/data/social";
import { Mail, ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/Icons";
import { Button } from "@/ui/Button";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/90 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer CTA Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-emerald-500/20 text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "8s" }} />
            OPEN FOR OPPORTUNITIES
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Let&apos;s build something intelligent.
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm mb-6">
            Open for AI engineering roles, internships, and intelligent software collaborations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="#contact" variant="primary" size="md">
              Let&apos;s Connect
            </Button>
            <Button href="#projects" variant="secondary" size="md">
              View Projects
            </Button>
          </div>
        </div>

        {/* Footer Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm">
                SC
              </div>
              <div>
                <span className="text-lg font-bold text-white block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-emerald-400 block">
                  {personalInfo.role}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              {personalInfo.heroTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-normal">
          <div>
            <span>© {new Date().getFullYear()} Safoora Chaudhry. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
