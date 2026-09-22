import { Project, SkillCategory, SocialLinks } from '../types.ts';

export const PROFILE = {
  name: 'Rithwik',
  role: 'Aspiring AI Engineer',
  education: '1st Year B.Tech Student, Computer Science and Engineering (CSE)',
  institution: 'Department of Computer Science & Engineering',
  tagline: 'Building the Future with Artificial Intelligence & Software',
  summary:
    'Motivated 1st-year B.Tech CSE student passionate about Generative AI, machine learning foundations, and modern web software engineering. Eager to solve real-world problems through clean code, curiosity, and rapid experimentation.',
  bio: [
    'My journey in Computer Science began with a deep curiosity about how lines of code translate into intelligent systems. As a first-year undergraduate in CSE, I am dedicating my time to mastering algorithmic logic, core web fundamentals, and practical software development principles.',
    'I am especially fascinated by the rapid evolution of Large Language Models (LLMs) and Generative AI. Whether analyzing prompt optimization patterns or building client-side logic tools, I approach every project with an analytical, problem-solving mindset and a commitment to continuous daily learning.',
    'Currently exploring foundational AI integration workflows while expanding my development toolkit across modern web architectures and collaborative Git environments.'
  ],
  stats: [
    { label: 'Current Education', value: 'B.Tech CSE (1st Year)' },
    { label: 'Primary Focus', value: 'Generative AI & Web' },
    { label: 'Projects Built', value: '3+ Applications' },
    { label: 'Code Activity', value: 'Active on GitHub' }
  ]
};

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/rithu07082008-collab',
  linkedin: 'https://linkedin.com/in/rithwik-cse', // Replace with your direct LinkedIn profile URL
  email: 'rithu07082008@gmail.com'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Web Fundamentals',
    description: 'Core web architecture, semantic markup, responsive styling, and modern DOM logic.',
    iconName: 'Globe',
    skills: [
      { name: 'HTML5', level: 'Core', description: 'Semantic structure, accessibility, forms & validation' },
      { name: 'CSS3', level: 'Core', description: 'Flexbox, CSS Grid, media queries & responsive layouts' },
      { name: 'JavaScript (Basics)', level: 'Intermediate', description: 'DOM manipulation, ES6+ syntax, functions & events' }
    ]
  },
  {
    category: 'Artificial Intelligence',
    description: 'Foundational concepts in LLMs, prompt structuring, and generative models.',
    iconName: 'Cpu',
    skills: [
      { name: 'Generative AI Fundamentals', level: 'Intermediate', description: 'Model architectures, tokenization, context windows' },
      { name: 'Prompt Engineering', level: 'Intermediate', description: 'Zero/few-shot prompts, system prompts, role formatting' },
      { name: 'LLM APIs & Workflows', level: 'Familiar', description: 'API integration concepts, temperature & parameters' }
    ]
  },
  {
    category: 'Tools & Environments',
    description: 'Version control, developer toolchains, and collaborative workflows.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git', level: 'Intermediate', description: 'Branching, committing, staging, conflict resolution' },
      { name: 'GitHub', level: 'Intermediate', description: 'Repositories, version tracking, collaboration & README docs' },
      { name: 'VS Code', level: 'Core', description: 'Extensions, debugging, modern workspace configurations' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    status: 'Completed',
    description:
      'An interactive web tool designed to calculate student percentages, GPA, and grade categories with input validation and clear visual feedback.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/rithu07082008-collab', // Update with specific repository URL
    hasInteractiveDemo: true,
    demoType: 'calculator',
    highlights: [
      'Multi-subject dynamic score calculation with 0-100 input validation',
      'Real-time percentage, 10-point GPA scale, and letter grade grading matrix',
      'Color-coded performance indicators and custom achievement feedback'
    ]
  },
  {
    id: 'voting-eligibility-checker',
    title: 'Voting Eligibility Checker',
    status: 'Completed',
    description:
      'A conditional logic application that verifies user age and citizenship criteria to assess voter registration eligibility.',
    tags: ['JavaScript', 'DOM Manipulation', 'Web Basics'],
    githubUrl: 'https://github.com/rithu07082008-collab', // Update with specific repository URL
    hasInteractiveDemo: true,
    demoType: 'voting',
    highlights: [
      'Multi-factor eligibility criteria checking (Age 18+, citizenship status, valid ID declaration)',
      'Dynamic countdown indicator for upcoming voter registration milestones',
      'Accessible visual status states (Eligible, Underage, Documentation Pending)'
    ]
  },
  {
    id: 'genai-concept-sandbox',
    title: 'GenAI Concept Sandbox',
    status: 'Upcoming',
    description:
      'Exploring foundational generative AI integrations, system prompt engineering, and parameter testing workflows.',
    tags: ['GenAI', 'APIs', 'In Progress'],
    githubUrl: 'https://github.com/rithu07082008-collab', // Update with specific repository URL
    hasInteractiveDemo: true,
    demoType: 'genai',
    highlights: [
      'Interactive prompt architecture tester (System Instructions, Few-Shot Demonstrations, User Input)',
      'Model parameters visualization (Temperature, Top-P, Token estimation)',
      'Designed to explore client-to-API integration patterns for conversational AI'
    ]
  }
];
