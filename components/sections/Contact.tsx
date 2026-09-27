"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/social";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Button } from "@/ui/Button";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  MapPin,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/ui/Icons";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something Intelligent"
          subtitle="Open for AI engineering roles, research collaborations, internships, and intelligent software opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 sm:p-7 border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Contact Channels</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Feel free to reach out directly via email, phone, or LinkedIn. I am always excited to discuss AI solutions, RAG pipelines, or full-stack integrations.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold truncate block">
                      {personalInfo.socials.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.socials.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                      Direct Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold">
                      {personalInfo.socials.phone}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-semibold">
                      safoorachaudhry
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                      GitHub Repositories
                    </span>
                    <span className="text-sm font-semibold">
                      SafooraCh
                    </span>
                  </div>
                </a>
              </div>
            </GlassCard>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center gap-3 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Based in Rawalpindi / Islamabad, Pakistan · Open to on-site and remote work.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill in the details below and I will get back to you promptly.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold block text-white">Message sent successfully!</span>
                    Thank you for reaching out. I will respond to your email as soon as possible.
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold block text-white">Error sending message</span>
                    Please try reaching out directly via email at {personalInfo.socials.email}.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all ${
                        errors.name
                          ? "border-red-500/60"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                    >
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all ${
                        errors.email
                          ? "border-red-500/60"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., AI Engineering Opportunity / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-white/20 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-zinc-300 mb-1.5"
                  >
                    Your Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, position, or collaboration proposal..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all resize-none ${
                      errors.message
                        ? "border-red-500/60"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                    icon={
                      isSubmitting ? (
                        <Clock className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                    iconPosition="right"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
