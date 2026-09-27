export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  status?: string;
}

export const educationList: Education[] = [
  {
    id: "case-bs-ai",
    degree: "BS Artificial Intelligence",
    institution: "Sir Syed CASE Institute of Technology",
    location: "Islamabad, Pakistan",
    status: "Undergraduate",
  },
  {
    id: "pcw-fsc",
    degree: "FSc Pre-Engineering",
    institution: "Punjab College for Women",
    location: "Pakistan",
  },
  {
    id: "opf-matric",
    degree: "Matriculation — Science",
    institution: "OPF School",
    location: "Pakistan",
  },
];
