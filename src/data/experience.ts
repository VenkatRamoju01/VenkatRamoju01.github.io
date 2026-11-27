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
    program: 'MBA (PGP in Finance & IT Management)',
    period: 'Apr 2023 - Apr 2024',
  },
  {
    institution: 'Indian Institute of Technology Hyderabad (IITH)',
    shortName: 'IIT Hyderabad',
    program: 'B.Tech in Civil Engineering & Minor in Economics',
    period: 'Aug 2016 - May 2020',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Strategy & Operations',
    organization: 'Google (YouTube)',
    period: 'Aug 2025 - Present',
    summary:
      'Working on partner payment integrity, financial reconciliation, and AI-assisted anomaly workflows in YouTube Deal Strategy & Operations. Previously worked as Performance Lead in YouTube Help Center Analytics.',
  },
  {
    role: 'Business Manager',
    organization: 'Accordion',
    period: 'Apr 2024 - Aug 2025',
    summary:
      'Led an 8-member private equity portfolio operations and analytics team building SaaS scorecards, M&A tools, and workflow automation across 80+ B2B SaaS companies.',
  },
  {
    role: 'Operations Officer',
    organization: 'HPCL',
    period: 'Sep 2020 - Apr 2023',
    summary:
      'Managed 24/7 operations, safety, and infrastructure projects across a 133 km cross-country petroleum pipeline.',
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
