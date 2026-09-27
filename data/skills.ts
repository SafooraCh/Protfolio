export type SkillCategory =
  | "All"
  | "AI & Generative AI"
  | "Machine Learning"
  | "Development"
  | "Databases & Tools";

export interface Skill {
  name: string;
  category: "AI & Generative AI" | "Machine Learning" | "Development" | "Databases & Tools";
  levelTag?: string; // e.g., "Core Focus", "Hands-on", "Production"
  description?: string;
  iconName?: string;
}

export const skillCategories: SkillCategory[] = [
  "All",
  "AI & Generative AI",
  "Machine Learning",
  "Development",
  "Databases & Tools",
];

export const skills: Skill[] = [
  // AI & Generative AI
  {
    name: "LLM (Large Language Models)",
    category: "AI & Generative AI",
    levelTag: "Core Focus",
    description: "Prompt orchestration, Groq, Ollama, API integration",
    iconName: "Bot",
  },
  {
    name: "RAG (Retrieval-Augmented Gen)",
    category: "AI & Generative AI",
    levelTag: "Core Focus",
    description: "Document chunking, hybrid search, context-injected generation",
    iconName: "BrainCircuit",
  },
  {
    name: "Prompt Engineering",
    category: "AI & Generative AI",
    levelTag: "Proficient",
    description: "Few-shot, chain-of-thought, structured JSON outputs",
    iconName: "Terminal",
  },
  {
    name: "LangChain",
    category: "AI & Generative AI",
    levelTag: "Hands-on",
    description: "Chains, retrieval agents, custom tool bindings",
    iconName: "Boxes",
  },
  {
    name: "LangGraph",
    category: "AI & Generative AI",
    levelTag: "Exploring",
    description: "Stateful multi-agent workflows, cyclic execution graphs",
    iconName: "GitFork",
  },
  {
    name: "AI Agents",
    category: "AI & Generative AI",
    levelTag: "Hands-on",
    description: "Autonomous reasoning, tool-augmented assistants",
    iconName: "Cpu",
  },
  {
    name: "Chatbots",
    category: "AI & Generative AI",
    levelTag: "Production",
    description: "Conversational UI, session memory, domain guardrails",
    iconName: "MessageSquareCode",
  },
  {
    name: "Embeddings",
    category: "AI & Generative AI",
    levelTag: "Core Focus",
    description: "Vector representations, semantic similarity calculations",
    iconName: "Fingerprint",
  },
  {
    name: "Vector Databases",
    category: "AI & Generative AI",
    levelTag: "Hands-on",
    description: "Index storage, similarity search, nearest neighbor queries",
    iconName: "Database",
  },

  // Machine Learning
  {
    name: "Machine Learning",
    category: "Machine Learning",
    levelTag: "Foundation",
    description: "Supervised & unsupervised algorithms, feature engineering",
    iconName: "Activity",
  },
  {
    name: "Deep Learning",
    category: "Machine Learning",
    levelTag: "Hands-on",
    description: "Neural network architectures, backpropagation, optimization",
    iconName: "Layers",
  },
  {
    name: "CNN (Convolutional Neural Networks)",
    category: "Machine Learning",
    levelTag: "Hands-on",
    description: "Spatial feature extraction, classification, pooling layers",
    iconName: "ScanSearch",
  },
  {
    name: "Computer Vision",
    category: "Machine Learning",
    levelTag: "Hands-on",
    description: "Image classification, scene understanding, visual quality inspection",
    iconName: "Eye",
  },
  {
    name: "NLP (Natural Language Processing)",
    category: "Machine Learning",
    levelTag: "Hands-on",
    description: "Text preprocessing, tokenization, semantic extraction",
    iconName: "FileText",
  },

  // Development
  {
    name: "Python",
    category: "Development",
    levelTag: "Primary Language",
    description: "Data manipulation, ML scripting, async backend APIs",
    iconName: "Code2",
  },
  {
    name: "FastAPI",
    category: "Development",
    levelTag: "Backend Core",
    description: "High-performance asynchronous REST endpoints, Pydantic schemas",
    iconName: "Zap",
  },
  {
    name: "React.js",
    category: "Development",
    levelTag: "Frontend Core",
    description: "Component lifecycle, state management, modern hooks",
    iconName: "Atom",
  },
  {
    name: "Next.js",
    category: "Development",
    levelTag: "Framework",
    description: "App Router, SSR, SEO, responsive web architectures",
    iconName: "Globe",
  },
  {
    name: "JavaScript",
    category: "Development",
    levelTag: "Proficient",
    description: "Modern ES6+, DOM manipulation, asynchronous promises",
    iconName: "Braces",
  },
  {
    name: "Tailwind CSS",
    category: "Development",
    levelTag: "Design Core",
    description: "Utility-first modern styling, responsive layouts, dark themes",
    iconName: "Palette",
  },
  {
    name: "REST APIs",
    category: "Development",
    levelTag: "Architecture",
    description: "Resource modeling, authentication, JSON contracts",
    iconName: "Network",
  },

  // Databases & Tools
  {
    name: "MySQL",
    category: "Databases & Tools",
    levelTag: "Relational",
    description: "Relational modeling, indexing, ACID transactions",
    iconName: "Database",
  },
  {
    name: "PostgreSQL",
    category: "Databases & Tools",
    levelTag: "Relational",
    description: "Spatial queries (PostGIS), JSONB, robust storage",
    iconName: "Server",
  },
  {
    name: "Qdrant",
    category: "Databases & Tools",
    levelTag: "Vector Search",
    description: "High-dimensional vector indexing and payload filtering",
    iconName: "SearchCode",
  },
  {
    name: "Git / GitHub",
    category: "Databases & Tools",
    levelTag: "Version Control",
    description: "Branching strategies, pull requests, collaboration",
    iconName: "GitBranch",
  },
  {
    name: "Docker",
    category: "Databases & Tools",
    levelTag: "Containers",
    description: "Containerization, microservice isolation, Docker Compose",
    iconName: "Container",
  },
];
