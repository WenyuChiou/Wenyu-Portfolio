
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  pdf?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  pdf: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
