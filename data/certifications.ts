export interface Certification {
  id: string;
  title: string;
  provider: string;
  issueDate: string;
  skills: string[];
  credentialUrl?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: "udemy-ai-genai",
    title: "Artificial Intelligence and Generative AI",
    provider: "Udemy",
    issueDate: "August 2025",
    skills: ["Artificial Intelligence", "Generative AI", "LLMs", "Deep Learning"],
    // Default placeholder URL until user inputs exact verification hash
    credentialUrl: "https://www.udemy.com/certificate/UC-AI-GENAI-SAFOORA/",
  },
];
