"use client";

import React from "react";
import { Project } from "@/data/projects";
import { GlassCard } from "@/ui/GlassCard";
import { ExternalLink, CheckCircle2, Clock, Users } from "lucide-react";
import { GithubIcon } from "@/ui/Icons";
import { Button } from "@/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <GlassCard className="flex flex-col justify-between h-full group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.leadershipBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-black shadow-sm">
                <Users className="w-3 h-3" />
                {project.leadershipBadge}
              </span>
            )}

            {project.status === "In Progress" ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25">
                <Clock className="w-3 h-3" />
                In Progress
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Completed
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Highlights / Workflow if available */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-5 space-y-1.5 text-xs text-zinc-300">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-white/5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-900 text-zinc-500">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            href={project.githubUrl}
            isExternal
            variant="outline"
            size="sm"
            className="flex-1"
            icon={<GithubIcon className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            GitHub
          </Button>

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              isExternal
              variant="primary"
              size="sm"
              className="flex-1"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
