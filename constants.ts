
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Wenyu Chiou",
  role: "Ph.D. Candidate | Complex Water Adaptive System Group",
  bio: "Exploring innovative applications of LLM as Agents to model decision-making under risk — from flood insurance choices to community resilience. Department of Civil and Environmental Engineering, Lehigh University.",
  email: "wec324@lehigh.edu",
  github: "https://github.com/WenyuChiou",
  linkedin: "https://www.linkedin.com/in/wenyu-chiou",
  orcid: "https://orcid.org/0009-0005-8006-1288",
  location: "Bethlehem, PA, USA",
  cvUrl: "assets/documents/CV_Wenyu_Chiou.pdf",
  avatar: "assets/images/profile/avatar_new.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "abm-flood",
    title: "Agent-Based Flood Adaptation Model",
    description: "A comprehensive agent-based modeling system to simulate long-term household adaptation to flood risk, accounting for social heterogeneity.",
    techStack: ["AGU 2025", "ABM", "Flood Risk", "Adaptation"],
    image: "assets/images/projects/agu2025/poster.jpg"
  },
  {
    id: "ai-trader",
    title: "AI-Trader Ollama",
    description: "A fully autonomous stock trading system using 6 specialized LLM agents with RAG memory and 28+ market tools to analyze NASDAQ-100.",
    techStack: ["Python", "LLM Agents", "RAG", "MCP"],
    image: "assets/images/projects/ai-trader/cover.png"
  },
  {
    id: "event-driven",
    title: "Event-Driven Trading Strategy",
    description: "A machine learning-based trading system inspired by 'Hydraulic Jump' fluid dynamics to detect market reversal events.",
    techStack: ["Python", "Machine Learning", "Alpha Mining", "Backtesting"],
    image: "assets/images/projects/event-driven/cover.png"
  },
  {
    id: "agu-2023",
    title: "Groundwater Modeling (AGU 2023)",
    description: "Integrated ERT techniques, field observations, and numerical simulations to investigate dynamics of submarine groundwater discharge.",
    techStack: ["AGU 2023", "ERT", "SGD", "Poster"],
    image: "assets/images/projects/groundwater/anima.gif"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "lehigh_phd",
    company: "Lehigh University",
    role: "Ph.D. Candidate",
    period: "Aug 2024 - Present",
    description: [
      "Member of Center of Catastrophe Modeling and Resilience.",
      "Developing computational models to simulate human-water system interactions under climate change."
    ],
    skills: ["ABM", "Flood Risk", "Resilience"],
    image: "assets/images/cover.jpg"
  },
  {
    id: "ncu_ra",
    company: "National Central University",
    role: "Research Assistant",
    period: "Jan 2024 - Jun 2024",
    description: [
      "Developed 3D groundwater flow simulation models for coastal aquifer systems.",
      "Established Nature-Based Solutions (NBS) assessment indicators."
    ],
    skills: ["Groundwater", "NBS", "Modeling"],
    image: "assets/images/profile/avatar.jpg"
  },
  {
    id: "ncdr_intern",
    company: "NCDR",
    role: "Summer Intern",
    period: "Jul 2022 - Aug 2022",
    description: [
      "Conducted research on climate change adaptation strategies and disaster risk reduction."
    ],
    skills: ["Climate Adaptation", "Disaster Risk"],
    image: "assets/images/projects/ncdr/cover.jpg"
  },
  {
    id: "ncu_ms",
    company: "National Central University",
    role: "M.S. in Hydrological and Oceanic Sciences",
    period: "Aug 2021 - Jun 2023",
    description: [
      "Thesis: Submarine Groundwater Discharge and Salinity Dynamics in Coastal Taoyuan."
    ],
    skills: ["Hydrology", "Oceanic Science"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Research & Modeling",
    skills: ["Catastrophe Modeling", "Agent-Based Modeling", "Hydrology & Groundwater", "Risk & Resilience Analysis", "Bayesian Inference"]
  },
  {
    category: "Programming & Tools",
    skills: ["Python", "Matlab", "R", "GIS (QGIS, ArcGIS)", "Git", "Jupyter"]
  },
  {
    category: "AI & Emerging Tech",
    skills: ["LLM-Enabled Agents", "Prompt Engineering", "Multi-Agent Systems", "Automated Workflows"]
  }
];
