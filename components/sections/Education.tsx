"use client";

import React from "react";
import { educationList } from "@/data/education";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { GraduationCap, MapPin } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="EDUCATION"
          title="Academic Background"
          subtitle="Foundations in Artificial Intelligence, Mathematics, and Computing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {educationList.map((edu) => (
            <GlassCard
              key={edu.id}
              className="p-6 flex flex-col justify-between border-white/10 hover:border-emerald-500/30"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm text-emerald-400 font-medium leading-snug mb-3">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                {edu.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {edu.location}
                  </span>
                )}
                {edu.status && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {edu.status}
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
