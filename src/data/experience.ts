export interface EducationItem {
  institution: string;
  shortName: string;
  program: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  focus?: string;
  period?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
}

export const education: EducationItem[] = [
  {
    institution: 'Indian School of Business (ISB)',
    shortName: 'ISB',
    program: 'MBA (PGP in Finance & IT Management), 3.6/4.0',
    period: 'Apr 2023 – Apr 2024',
  },
  {
    institution: 'IIT Hyderabad',
    shortName: 'IIT Hyderabad',
    program: 'B.Tech in Civil Engineering, 9.2/10.0, Institute Silver Medalist',
    period: 'Aug 2016 – May 2020',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Strategy & Operations',
    organization: 'Google (YouTube)',
    period: 'Aug 2025 – Present',
    summary:
      'Currently part of YouTube Deal Strategy & Operations (Payment Integrity), working across engineering, business, legal, and finance teams on partner payout integrity and pre-payout AI anomaly workflows. Previously served as Performance Lead in YouTube Help Center Analytics.',
  },
  {
    role: 'Business Manager',
    organization: 'Accordion India',
    focus: 'Private Equity Portfolio Operations & Analytics',
    period: 'Apr 2024 – Aug 2025',
    summary:
      'Managed a team of 8 analysts serving a top US software PE firm across 80+ B2B SaaS portfolio companies, building executive KPI scorecards, M&A benchmarking tools, and automated reporting and validation workflows.',
  },
  {
    role: 'Operations Officer',
    organization: 'Hindustan Petroleum Corporation Limited (HPCL)',
    focus: 'Petroleum Pipeline Operations',
    period: 'Sep 2020 – Apr 2023',
    summary:
      'Managed 24/7 mission-critical pipeline operations, supporting ML-based alarm classification deployment, BI reporting automation, and vendor and capex governance.',
  },

  /*
   * Template for adding another role (uncomment and fill in):
   *
   * {
   *   role: 'Role Title',
   *   organization: 'Company Name',
   *   focus: 'Optional team or focus area',
   *   period: 'MMM YYYY – MMM YYYY',
   *   location: 'City',
   *   summary: 'Optional concise overview of the role.',
   *   highlights: [
   *     'Key project, scope, or outcome.',
   *   ],
   * },
   */
];
