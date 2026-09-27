export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  statusLabel: string;
  heroTagline: string;
  aboutLines: string[];
  socials: SocialLinks;
}

export const personalInfo: PersonalInfo = {
  name: "Safoora Chaudhry",
  role: "AI Developer | LLM & RAG | Full-Stack",
  statusLabel: "AI DEVELOPER",
  heroTagline: "Exploring AI, building intelligent systems, and turning ideas into real applications.",
  aboutLines: [
    "BS Artificial Intelligence student at Sir Syed CASE Institute of Technology.",
    "Passionate about building practical AI systems with LLMs, RAG pipelines, and modern full-stack architectures.",
    "Experienced in taking machine learning ideas from data and code to deployed, real-world applications.",
  ],
  socials: {
    github: "https://github.com/SafooraCh/",
    linkedin: "https://www.linkedin.com/in/safoorachaudhry/",
    email: "safoorach742@gmail.com",
    phone: "03165634674",
    location: "Rawalpindi / Islamabad, Pakistan",
  },
};
