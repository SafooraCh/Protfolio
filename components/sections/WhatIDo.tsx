"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import {
  BrainCircuit,
  Cpu,
  Code2,
  Database,
  Rocket,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

export const WhatIDo: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: "ai-genai",
      title: "AI & Generative AI",
      description:
        "Designing contextual AI workflows using modern Large Language Models, Retrieval-Augmented Generation (RAG), prompt engineering orchestration, and conversational agents.",
      technologies: [
        "LLMs",
        "RAG Pipelines",
        "Prompt Engineering",
        "LangChain",
        "LangGraph",
        "AI Agents",
        "Chatbots",
      ],
      icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "machine-learning",
      title: "Machine Learning & CV",
      description:
        "Building, training, and optimizing supervised & deep learning models, convolutional neural networks for image understanding, and natural language processing pipelines.",
      technologies: [
        "Supervised ML",
        "Deep Learning",
        "CNN Architectures",
        "Computer Vision",
        "NLP & Tokenization",
      ],
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "full-stack",
      title: "Full-Stack Web Development",
      description:
        "Engineering responsive, scalable user interfaces and high-speed asynchronous backends to deliver production-grade user experiences for intelligent applications.",
      technologies: [
        "React.js",
        "Next.js App Router",
        "FastAPI",
        "Node.js",
        "REST APIs",
        "Tailwind CSS",
      ],
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "data-databases",
      title: "Data & Databases",
      description:
        "Structuring relational schemas, managing vector similarity search engines, performing rigorous data cleaning, and creating reproducible data pipelines.",
      technologies: [
        "PostgreSQL & PostGIS",
        "MySQL",
        "Qdrant Vector DB",
        "Dense Embeddings",
        "Data Engineering",
      ],
      icon: <Database className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "ai-product-dev",
      title: "AI Product Development",
      description:
        "Translating abstract algorithmic models into deployable, human-centered products by integrating APIs, containerized environments, databases, and refined UI interfaces.",
      technologies: [
        "End-to-End AI Products",
        "Model Ingestion",
        "Docker Containers",
        "Local Problem Solving",
        "Team Leadership",
      ],
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section id="what-i-do" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="WHAT I DO"
          title="Specialized Capabilities Across AI &amp; Software"
          subtitle="Combining advanced machine intelligence, data pipelines, and responsive frontend architecture into coherent products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <GlassCard
              key={service.id}
              className={`flex flex-col justify-between p-6 sm:p-7 group border-white/10 hover:border-emerald-500/40 transition-all duration-300 ${
                idx === 3 || idx === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Key Toolset:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900/80 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
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
