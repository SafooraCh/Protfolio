"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/Icons";
import { personalInfo } from "@/data/social";
import { Button } from "@/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-zinc-950/95 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    SC
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Safoora Chaudhry
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 block">
                      AI Developer
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close mobile menu"
                  className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="py-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-900/60"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Button
                href="#contact"
                onClick={onClose}
                variant="primary"
                size="md"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Let&apos;s Connect
              </Button>

              <div className="flex items-center justify-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-emerald-400 border border-white/10"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-emerald-400 border border-white/10"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
