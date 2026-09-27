"use client";

import React from "react";
import { expertiseData } from "@/data/expertise";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Bot, Cpu, Code2, Database, Wrench } from "lucide-react";

export const Expertise: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Bot":
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="EXPERTISE"
          title="Technical Capabilities &amp; Stack"
          subtitle="A focused overview of core technologies across Generative AI, Machine Learning, Full-Stack, Data, and Tooling."
        />

        {/* 5 Cards Grid: 3 top row, 2 bottom row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, idx) => (
            <GlassCard
              key={item.id}
              className={`p-6 sm:p-7 flex flex-col justify-between group border-white/10 hover:border-emerald-500/40 transition-all duration-300 ${
                idx === 3 || idx === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-zinc-800/80 text-emerald-300 border border-emerald-500/20">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                {/* 1-sentence statement */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-800/90 text-zinc-200 border border-zinc-700/50 group-hover:border-emerald-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
