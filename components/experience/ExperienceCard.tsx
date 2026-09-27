"use client";

import React from "react";
import { Experience } from "@/data/experience";
import { GlassCard } from "@/ui/GlassCard";
import { Briefcase, MapPin, Calendar, CheckCircle2, Award } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <GlassCard className="p-6 md:p-7 border-emerald-500/20 hover:border-emerald-500/40 relative">
      {/* Current / Active status pill */}
      {experience.isCurrent && (
        <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Current Role
        </span>
      )}

      {/* Header Info */}
      <div className="mb-4 pr-16 sm:pr-24">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
          {experience.position}
        </h3>
        <div className="text-emerald-400 font-semibold text-base sm:text-lg">
          {experience.company}
        </div>
      </div>

      {/* Meta Row */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-400 mb-5 pb-4 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span>{experience.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>{experience.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
          <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
            {experience.employmentType}
          </span>
        </div>
      </div>

      {/* Highlight Badge */}
      {experience.highlight && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 text-xs font-medium mb-4">
          <Award className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{experience.highlight}</span>
        </div>
      )}

      {/* Responsibilities */}
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="mb-5 space-y-2">
          <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            Key Contributions:
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </GlassCard>
  );
};
