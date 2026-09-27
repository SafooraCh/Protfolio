export interface ExpertiseCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
  iconName: "Bot" | "Cpu" | "Code2" | "Database" | "Wrench";
}

export const expertiseData: ExpertiseCategory[] = [
  {
    id: "genai",
    title: "Generative AI",
    badge: "Core Specialization",
    description: "Building production RAG pipelines, intelligent agentic workflows, and context-aware LLM solutions.",
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "AI Agents",
    ],
    iconName: "Bot",
  },
  {
    id: "ml",
    title: "Machine Learning",
    badge: "Deep Learning & Vision",
    description: "Training neural architectures, convolutional networks for image classification, and NLP pipelines.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "NLP",
      "Computer Vision",
    ],
    iconName: "Cpu",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    badge: "Web & APIs",
    description: "Engineering responsive web interfaces and high-throughput asynchronous backend services.",
    skills: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "REST APIs",
    ],
    iconName: "Code2",
  },
  {
    id: "data",
    title: "Data & Databases",
    badge: "Storage & Search",
    description: "Designing relational database schemas, cleaning raw datasets, and indexing high-dimensional embeddings.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Qdrant",
      "Embeddings",
    ],
    iconName: "Database",
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    badge: "Workflow & UI",
    description: "Containerization, modern version control workflows, and utility-first styling systems.",
    skills: [
      "Git / GitHub",
      "Docker",
      "Tailwind CSS",
    ],
    iconName: "Wrench",
  },
];
