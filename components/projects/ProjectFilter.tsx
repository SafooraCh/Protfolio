"use client";

import React from "react";
import { ProjectCategory, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 pt-1 mb-8 no-scrollbar gap-2">
      {projectCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300",
              "border focus:outline-none focus:ring-2 focus:ring-emerald-500/40",
              isActive
                ? "bg-emerald-500 text-black font-semibold border-emerald-400 shadow-lg shadow-emerald-500/20"
                : "bg-zinc-900/70 text-zinc-400 border-white/10 hover:border-emerald-500/30 hover:text-white hover:bg-zinc-800/80"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
