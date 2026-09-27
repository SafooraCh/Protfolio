"use client";

import React from "react";
import { personalInfo } from "@/data/social";
import { Button } from "@/ui/Button";
import { SocialLinks } from "@/ui/SocialLinks";
import { ProfileAvatar } from "@/ui/ProfileAvatar";
import { ParticleBackground } from "@/effects/ParticleBackground";
import { ArrowRight, Code2, Cpu, BrainCircuit } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Interactive AI Neural Particle Canvas */}
      <ParticleBackground />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-sm shadow-emerald-950/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wider uppercase">{personalInfo.statusLabel}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300 font-normal">Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              AI Developer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                | LLM &amp; RAG
              </span>{" "}
              | Full-Stack
            </h1>

            {/* Supporting Tagline */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              &ldquo;{personalInfo.heroTagline}&rdquo;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Let&apos;s Connect
              </Button>

              <Button
                href="#projects"
                variant="secondary"
                size="lg"
              >
                View Projects
              </Button>

              <SocialLinks size="md" className="pt-1 sm:pt-0" />
            </div>

            {/* Micro Tech Pills */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-400 uppercase tracking-wider text-[11px] mr-2">
                Specializations:
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/5 text-emerald-300">
                LLMs &amp; RAG
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/5 text-emerald-300">
                Machine Learning
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/5 text-emerald-300">
                FastAPI &amp; Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/5 text-emerald-300">
                Vector DBs
              </span>
            </div>
          </div>

          {/* Right Column - Profile Image with Orbiting Tech Nodes */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative">
              {/* Profile Avatar */}
              <ProfileAvatar size={320} />

              {/* Floating Technology Badge 1 (Top Left) */}
              <div className="absolute -top-4 -left-6 sm:-left-10 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: "5s" }}>
                <BrainCircuit className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-semibold text-zinc-200">
                  RAG &amp; LLMs
                </span>
              </div>

              {/* Floating Technology Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: "6s", animationDelay: "1s" }}>
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-semibold text-zinc-200">
                  Full-Stack AI
                </span>
              </div>

              {/* Floating Technology Badge 3 (Top Right) */}
              <div className="absolute top-1/4 -right-8 hidden sm:flex px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-white/10 text-[11px] font-mono text-emerald-300 items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>FastAPI + Qdrant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
