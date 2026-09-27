"use client";

import React from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/ui/Button";

export const Certification: React.FC = () => {
  return (
    <section id="certification" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="CERTIFICATION"
          title="Industry Credentials"
          subtitle="Verified coursework and professional learning."
        />

        <div className="space-y-4">
          {certifications.map((cert) => (
            <GlassCard
              key={cert.id}
              className="p-6 sm:p-7 border-emerald-500/20 hover:border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    {cert.provider} · Issued {cert.issueDate}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="shrink-0 pt-2 sm:pt-0">
                  <Button
                    href={cert.credentialUrl}
                    isExternal
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    View Credential
                  </Button>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
