"use client";

import React from "react";
import { Project } from "@/data/projects";
import { GlassCard } from "@/ui/GlassCard";
import { ExternalLink, Sparkles, CheckCircle2, Clock, Users, Layers } from "lucide-react";
import { GithubIcon } from "@/ui/Icons";
import { Button } from "@/ui/Button";

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  reverse = false,
}) => {
  return (
    <GlassCard className="p-6 md:p-8 lg:p-10 border-emerald-500/20 hover:border-emerald-500/40 relative overflow-hidden">
      {/* Background Accent Sheen */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Project Content (7 cols) */}
        <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3 h-3" />
              Featured Project
            </span>

            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/60">
              {project.category}
            </span>

            {project.leadershipBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-black shadow-sm">
                <Users className="w-3 h-3" />
                {project.leadershipBadge}
              </span>
            )}

            {project.status === "In Progress" ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25">
                <Clock className="w-3 h-3" />
                In Progress
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Completed
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            {project.title}
          </h3>

          {/* Concept Highlight */}
          {project.concept && (
            <div className="inline-block px-3 py-1 rounded-lg text-xs font-mono text-emerald-300 bg-emerald-950/50 border border-emerald-500/20 mb-3">
              Core Concept: &ldquo;{project.concept}&rdquo;
            </div>
          )}

          {/* Description */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Highlights List */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Key Technical Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-zinc-200 border border-zinc-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href={project.githubUrl}
              isExternal
              variant="primary"
              size="md"
              icon={<GithubIcon className="w-4 h-4" />}
              iconPosition="left"
            >
              View on GitHub
            </Button>

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                isExternal
                variant="outline"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
              >
                Live Preview
              </Button>
            )}
          </div>
        </div>

        {/* Visual Architecture Card (5 cols) */}
        <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative rounded-xl p-6 bg-zinc-950/80 border border-emerald-500/20 shadow-inner overflow-hidden">
            {/* Tech Matrix Visual */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                  SYSTEM ARCHITECTURE
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                AI / STACK
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1">
                  Primary Domain
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1">
                  Execution Environment
                </span>
                <span className="text-sm font-mono text-emerald-300">
                  {project.technologies.slice(0, 4).join(" · ")}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/5">
                <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1">
                  Deployment Status
                </span>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.status === "In Progress" ? "bg-amber-400" : "bg-emerald-400"} animate-pulse`} />
                  <span className="text-xs text-zinc-200">
                    {project.status === "In Progress" ? "Active Development (Core Complete)" : "Verified & Stable"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center">
              <span className="text-[11px] font-mono text-zinc-400">
                Designed & Engineered by Safoora Chaudhry
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
