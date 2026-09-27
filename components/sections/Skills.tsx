"use client";

import React, { useState } from "react";
import { skills, skillCategories, SkillCategory } from "@/data/skills";
import { SectionHeading } from "@/ui/SectionHeading";
import { SkillCard } from "@/skills/SkillCard";
import { cn } from "@/lib/utils";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "All") return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Skills &amp; Technologies"
          subtitle="Core proficiencies organized by technical domain, without arbitrary skill percentages."
        />

        {/* Skill Categories Filter */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
