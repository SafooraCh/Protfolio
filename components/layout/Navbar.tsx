"use client";

import React, { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/ui/Icons";
import { personalInfo } from "@/data/social";
import { Button } from "@/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6",
          isScrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-white font-bold text-base sm:text-lg tracking-tight focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-sm shadow-emerald-950">
              SC
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold group-hover:text-emerald-400 transition-colors">
                Safoora Chaudhry
              </span>
              <span className="text-[10px] font-mono font-medium text-emerald-400 leading-tight">
                AI Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30 shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-zinc-900/80 text-zinc-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Let&apos;s Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded-xl bg-zinc-900/80 text-zinc-300 hover:text-white border border-white/10"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
};
