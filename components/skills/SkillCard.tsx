"use client";

import React from "react";
import { Skill } from "@/data/skills";
import { GlassCard } from "@/ui/GlassCard";
import {
  Bot,
  BrainCircuit,
  Terminal,
  Boxes,
  GitFork,
  Cpu,
  MessageSquareCode,
  Fingerprint,
  Database,
  Activity,
  Layers,
  ScanSearch,
  Eye,
  FileText,
  Code2,
  Zap,
  Atom,
  Globe,
  Braces,
  Palette,
  Network,
  Server,
  SearchCode,
  GitBranch,
  Container,
  CheckCircle,
} from "lucide-react";

interface SkillCardProps {
  skill: Skill;
}

// Icon mapper for dynamic icon string names
const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Boxes: <Boxes className="w-5 h-5" />,
  GitFork: <GitFork className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  MessageSquareCode: <MessageSquareCode className="w-5 h-5" />,
  Fingerprint: <Fingerprint className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  ScanSearch: <ScanSearch className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Atom: <Atom className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Braces: <Braces className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  SearchCode: <SearchCode className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Container: <Container className="w-5 h-5" />,
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const icon = (skill.iconName && iconMap[skill.iconName]) || (
    <CheckCircle className="w-5 h-5" />
  );

  return (
    <GlassCard className="p-4 sm:p-5 flex flex-col justify-between h-full group hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
            {icon}
          </div>

          {skill.levelTag && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-zinc-800/80 text-emerald-300 border border-emerald-500/20">
              {skill.levelTag}
            </span>
          )}
        </div>

        <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
          {skill.name}
        </h4>

        {skill.description && (
          <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
            {skill.description}
          </p>
        )}
      </div>

      <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] text-zinc-400 font-mono">
          {skill.category}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
      </div>
    </GlassCard>
  );
};
