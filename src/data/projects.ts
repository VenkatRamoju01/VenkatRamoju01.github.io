export type ProjectStatus = 'Live' | 'In Progress' | 'Experiment';

export interface Project {
  title: string;
  status: ProjectStatus;
  tagline?: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  repoUrl?: string;
  repoLabel?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Naamya',
    status: 'Live',
    description:
      'An AI-powered baby naming assistant built for modern Indian parents to discover meaningful names rooted in tradition and heritage.',
    tags: ['AI', 'React'],
    liveUrl: 'https://naamya-ai-assistant.vercel.app/',
    secondaryUrl: 'https://naamya-landingpage.vercel.app',
    secondaryLabel: 'Landing Page',
    repoUrl: 'https://github.com/VenkatRamoju01/Naamya-landingpage',
    repoLabel: 'Landing Repo',
    featured: true,
  },
  {
    title: 'Job Intelligence',
    status: 'In Progress',
    description:
      'A tool currently in development to help job seekers stay organized and make better decisions during their job search.',
    tags: ['Applied AI', 'Productivity'],
    featured: false,
  },
  {
    title: 'Day Reminder',
    status: 'Experiment',
    description:
      'A minimal Android app that counts down the days to an upcoming goal or deadline, built as a hands-on way to learn Kotlin and Android basics.',
    tags: ['Android', 'Kotlin'],
    repoUrl: 'https://github.com/VenkatRamoju01/Day_Reminder',
    repoLabel: 'GitHub',
    featured: true,
  },

  /*
   * Template for adding a new project (uncomment and fill in):
   *
   * {
   *   title: 'Project Name',
   *   status: 'Live', // 'Live' | 'In Progress' | 'Experiment'
   *   description: 'One or two clear sentences explaining what it does and why you built it.',
   *   tags: ['AI', 'Web App'],
   *   liveUrl: 'https://example.com',
   *   secondaryUrl: 'https://docs.example.com',
   *   secondaryLabel: 'Overview',
   *   repoUrl: 'https://github.com/VenkatRamoju01/project-repo',
   *   repoLabel: 'GitHub',
   *   featured: true,
   * },
   */
];
