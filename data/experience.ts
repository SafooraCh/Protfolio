export interface Experience {
  id: string;
  company: string;
  position: string;
  employmentType: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
  highlight: string;
  responsibilities?: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "crescovate",
    company: "Crescovate",
    position: "Artificial Intelligence Engineer",
    employmentType: "Internship",
    location: "Greater London, UK · Remote",
    duration: "Jun 2026 – Present",
    isCurrent: true,
    highlight: "Developing experimental generative AI prototypes and scalable model pipelines in an international remote setting.",
    responsibilities: [
      "Developing experimental generative AI prototypes and scalable model pipelines in an international remote setting.",
    ],
    technologies: ["AI Engineering", "Generative AI", "Python", "APIs"],
  },
  {
    id: "corvit-systems",
    company: "CORVIT Systems Rawalpindi",
    position: "Artificial Intelligence Engineer",
    employmentType: "Internship",
    location: "Rawalpindi, Pakistan · On-site",
    duration: "Jun 2026 – Aug 2026",
    highlight: "Served as Team Lead on AIMS, engineering predictive machine learning models for academic performance forecasting.",
    responsibilities: [
      "Served as Team Lead on AIMS, engineering predictive machine learning models for academic performance forecasting.",
    ],
    technologies: ["Python", "Scikit-learn", "React", "Node.js", "MySQL"],
  },
  {
    id: "ezitech-institute",
    company: "Ezitech Institute",
    position: "Frontend Developer Intern",
    employmentType: "Internship",
    location: "Rawalpindi, Pakistan · Remote",
    duration: "Jul 2025 – Oct 2025",
    highlight: "Built modular, responsive user interface components with React and modern CSS best practices.",
    responsibilities: [
      "Built modular, responsive user interface components with React and modern CSS best practices.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];
