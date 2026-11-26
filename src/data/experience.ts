export interface EducationItem {
  institution: string;
  shortName: string;
  program: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
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
      'Working across business operations, analytics, and cross-functional strategy.',
    /*
     * Once your resume is finalized, add bullet points right here.
     * The layout will automatically render them as a clean list:
     *
     * highlights: [
     *   'Concise description of a key initiative or responsibility.',
     *   'Second highlight focused on measurable business or operational impact.',
     * ],
     */
  },

  /*
   * Template for adding previous roles (uncomment and fill in):
   *
   * {
   *   role: 'Previous Role Title',
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
