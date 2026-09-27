"use client";

import React from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Button } from "@/ui/Button";
import { GithubIcon } from "@/ui/Icons";
import { Sparkles, Clock, Users } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="PROJECTS"
          title="Featured Work &amp; Systems"
          subtitle="Selected AI applications, RAG assistants, deep learning models, and full-stack solutions."
        />

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              className="p-6 flex flex-col justify-between group border-white/10 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {project.leadershipBadge && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500 text-black">
                        <Users className="w-3 h-3" />
                        {project.leadershipBadge}
                      </span>
                    )}

                    {project.status === "Featured" && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}

                    {project.status === "In Progress" && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25">
                        <Clock className="w-3 h-3" />
                        In Progress
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* 1-2 line description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <Button
                  href={project.githubUrl}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  View on GitHub
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
