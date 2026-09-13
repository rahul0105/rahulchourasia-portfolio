export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  status?: "Personal project" | "Built to demonstrate";
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}