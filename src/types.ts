export interface Project {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
  tags: string[];
  githubUrl: string;
  hasInteractiveDemo: boolean;
  demoType?: 'calculator' | 'voting' | 'genai';
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Familiar' | 'Intermediate' | 'Core';
    description?: string;
  }[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}
