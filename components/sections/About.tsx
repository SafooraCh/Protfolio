"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { ProfileAvatar } from "@/ui/ProfileAvatar";
import { GraduationCap, Sparkles, Layers } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="ABOUT"
          title="Who I Am"
          subtitle="A brief introduction to my background and core technical focus."
        />

        <GlassCard className="p-6 sm:p-10 border-emerald-500/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar */}
            <div className="md:col-span-4 flex justify-center">
              <ProfileAvatar size={200} />
            </div>

            {/* Right: 2-3 short lines */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-3 text-base sm:text-lg text-zinc-200 leading-relaxed">
                <p>
                  🎓 <span className="font-semibold text-white">BS Artificial Intelligence</span> student at <span className="text-emerald-400 font-medium">Sir Syed CASE Institute of Technology</span>.
                </p>
                <p>
                  ⚡ Passionate about building intelligent systems with <span className="font-semibold text-white">LLMs, RAG pipelines</span>, and modern <span className="font-semibold text-white">Full-Stack development</span>.
                </p>
                <p>
                  🚀 Focused on turning research and algorithms into <span className="text-emerald-300 font-medium">practical, real-world AI applications</span>.
                </p>
              </div>

              {/* Quick Focus Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-emerald-300 border border-emerald-500/20">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  BS AI Undergrad
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-emerald-300 border border-emerald-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  LLMs &amp; RAG
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-emerald-300 border border-emerald-500/20">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  Full-Stack Architecture
                </span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
