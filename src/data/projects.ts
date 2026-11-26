export type ProjectStatus = 'Live' | 'In Progress' | 'Experiment';

export interface Project {
  title: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Naamya',
    status: 'Live',
    tagline: 'Culturally rooted baby naming for Indian parents',
    description:
      'An AI-powered baby naming assistant built for modern Indian parents to discover meaningful names rooted in tradition and heritage.',
    tags: ['AI', 'Web App', 'React'],
    liveUrl: 'https://naamya-ai-assistant.vercel.app/',
    secondaryUrl: 'https://naamya-landingpage.vercel.app',
    secondaryLabel: 'Landing Page',
    repoUrl: 'https://github.com/VenkatRamoju01/Naamya-landingpage',
    featured: true,
  },
  {
    title: 'Job Intelligence',
    status: 'In Progress',
    tagline: 'Structured workspace for job search decisions',
    description:
      'A tool currently in development to help job seekers stay organized and make better decisions during their job search.',
    tags: ['Applied AI', 'Productivity', 'In Progress'],
    featured: true,
  },
  {
    title: 'Day Reminder',
    status: 'Experiment',
    tagline: 'Lightweight countdown utility for Android',
    description:
      'A lightweight Android app that tracks how many days remain until an upcoming goal or deadline.',
    tags: ['Android', 'Kotlin', 'Utility'],
    repoUrl: 'https://github.com/VenkatRamoju01/Day_Reminder',
    featured: true,
  },

  /*
   * Template for adding a new project (uncomment and fill in):
   *
   * {
   *   title: 'Project Name',
   *   status: 'Live', // 'Live' | 'In Progress' | 'Experiment'
   *   tagline: 'Short 4-7 word subtitle',
   *   description: 'One or two clear sentences explaining what it does and who it helps.',
   *   tags: ['AI', 'Web App'],
   *   liveUrl: 'https://example.com',
   *   secondaryUrl: 'https://docs.example.com',
   *   secondaryLabel: 'Overview',
   *   repoUrl: 'https://github.com/VenkatRamoju01/project-repo',
   *   featured: true,
   * },
   */
];
