"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { MapPin, Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="EXPERIENCE"
          title="Career Journey"
          subtitle="Applied industry roles in AI engineering, machine learning workflows, and full-stack development."
        />

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8">
          {/* Vertical Line */}
          <div className="absolute left-[7px] sm:left-[9px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/30 to-transparent pointer-events-none" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Timeline Milestone Node */}
                <div className="absolute -left-[27px] sm:-left-[31px] top-5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-400 shadow-md shadow-emerald-500/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                <GlassCard className="p-5 sm:p-6 border-emerald-500/20 hover:border-emerald-500/40">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <div className="text-emerald-400 font-semibold text-sm sm:text-base">
                        {exp.company}
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {exp.location}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-emerald-400" />
                      {exp.employmentType}
                    </span>
                  </div>

                  {/* Exactly 1 short highlight */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2 border-t border-white/5">
                    {exp.highlight}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
