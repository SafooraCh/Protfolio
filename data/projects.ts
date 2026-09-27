export type ProjectCategory =
  | "All"
  | "AI & Location Intelligence"
  | "RAG & LLM Tooling"
  | "Full-Stack & Machine Learning"
  | "Machine Learning & Data"
  | "Computer Vision";

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI & Location Intelligence",
  "RAG & LLM Tooling",
  "Full-Stack & Machine Learning",
  "Machine Learning & Data",
  "Computer Vision",
];

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  technologies: string[];
  status: "Featured" | "In Progress" | "Completed";
  leadershipBadge?: string;
  githubUrl: string;
  liveUrl?: string;
  highlights?: string[];
  concept?: string;
}

export const projects: Project[] = [
  {
    id: "nishaan",
    title: "Nishaan",
    shortDescription:
      "AI-powered location discovery system for Pakistan that extracts geographic clues from text, voice, and imagery to resolve verified locations.",
    category: "AI & Location Intelligence",
    technologies: ["Next.js", "FastAPI", "Python", "Groq", "Whisper", "PostgreSQL", "OSM"],
    status: "Featured",
    concept: "Extract first, verify later",
    githubUrl: "https://github.com/SafooraCh/",
  },
  {
    id: "smart-codebase-assistant",
    title: "Smart Codebase Assistant",
    shortDescription:
      "Local, open-source RAG assistant designed to index developer repositories and enable semantic conversational Q&A over local codebases.",
    category: "RAG & LLM Tooling",
    technologies: ["Python", "FastAPI", "RAG", "Qdrant", "Ollama", "Docker", "SQLite"],
    status: "In Progress",
    githubUrl: "https://github.com/SafooraCh/",
  },
  {
    id: "aims",
    title: "AIMS",
    shortDescription:
      "Centralized institute management platform for CORVIT Systems featuring role-based workflows and ML-driven student performance forecasting.",
    category: "Full-Stack & Machine Learning",
    technologies: ["React", "Node.js", "Express", "MySQL", "Python", "Scikit-learn"],
    status: "Completed",
    leadershipBadge: "Team Lead",
    githubUrl: "https://github.com/SafooraCh/",
  },
  {
    id: "bank-marketing-pipeline",
    title: "Bank Marketing Pipeline",
    shortDescription:
      "End-to-end data cleaning and machine learning pipeline predicting client term deposit subscriptions using an optimized CatBoost model.",
    category: "Machine Learning & Data",
    technologies: ["Python", "CatBoost", "Scikit-learn", "Pandas", "FastAPI", "MySQL"],
    status: "Completed",
    githubUrl: "https://github.com/SafooraCh/",
  },
  {
    id: "natural-scene-cnn",
    title: "Natural Scene CNN",
    shortDescription:
      "Deep convolutional neural network trained to accurately categorize and identify multi-class natural scene environments from visual input.",
    category: "Computer Vision",
    technologies: ["Python", "CNN", "Deep Learning", "TensorFlow/Keras"],
    status: "Completed",
    githubUrl: "https://github.com/SafooraCh/AI-Natural-Scene-Classification-CNN",
  },
  {
    id: "freshvision-ai",
    title: "FreshVision AI",
    shortDescription:
      "Computer vision application utilizing convolutional neural networks for automated produce quality grading and freshness classification.",
    category: "Computer Vision",
    technologies: ["Python", "CNN", "Computer Vision", "Deep Learning"],
    status: "Completed",
    githubUrl: "https://github.com/SafooraCh/FreshVision_AI",
  },
];
