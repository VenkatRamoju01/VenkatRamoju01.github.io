export interface EducationItem {
  institution: string;
  shortName: string;
  program: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
}

export const education: EducationItem[] = [
  {
    institution: 'Indian School of Business (ISB)',
    shortName: 'ISB',
    program: 'PGP in Management (Finance & IT Management)',
    period: 'Apr 2023 - Apr 2024',
  },
  {
    institution: 'Indian Institute of Technology Hyderabad (IITH)',
    shortName: 'IIT Hyderabad',
    program: 'B.Tech in Civil Engineering & Minor in Economics',
    period: 'Aug 2016 - Apr 2020',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Strategy & Operations',
    organization: 'Google',
    period: 'Current',
    summary:
      'Working across business operations, analytics, and cross-functional strategy. Previously worked in Performance Analytics (YouTube) at Google.',
    /*
     * Optional detailed bullets (automatically rendered when added):
     * highlights: [
     *   'Concise description of a key initiative or responsibility.',
     * ],
     */
  },
  {
    role: 'Analytics & Automation',
    organization: 'Accordion',
    // period: 'MMM YYYY - MMM YYYY',
    summary:
      'Led an 8-member analytics and automation team supporting a $100B+ PE portfolio, reducing reporting turnaround by 88% and identifying $1M+ in SaaS savings.',
  },
  {
    role: 'Operations',
    organization: 'HPCL',
    // period: 'MMM YYYY - MMM YYYY',
    summary: 'Managed ₹400Cr+ energy supply-chain operations.',
  },

  /*
   * Template for adding another role (uncomment and fill in):
   *
   * {
   *   role: 'Role Title',
   *   organization: 'Company Name',
   *   period: 'MMM YYYY - MMM YYYY',
   *   location: 'City',
   *   summary: 'Optional one-line overview of the role.',
   *   highlights: [
   *     'Key project, scope, or outcome.',
   *     'Another clear bullet point.',
   *   ],
   * },
   */
];
