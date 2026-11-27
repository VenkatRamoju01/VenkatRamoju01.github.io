export interface EducationItem {
  institution: string;
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
    program: 'MBA (PGP in Finance & IT Management)',
    period: '2023 – 2024',
  },
  {
    institution: 'IIT Hyderabad',
    program: 'B.Tech in Civil Engineering, Institute Silver Medalist',
    period: '2016 – 2020',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Strategy & Operations',
    organization: 'Google (YouTube)',
    period: '2025 – Present',
    summary:
      'Partner payout integrity and pre-payout AI anomaly workflows in YouTube Deal Strategy & Operations; previously Performance Lead in YouTube Help Center Analytics.',
  },
  {
    role: 'Business Manager',
    organization: 'Accordion India',
    focus: 'Private Equity Portfolio Operations & Analytics',
    period: '2024 – 2025',
    summary:
      'Led an 8-person analytics team working with a US software private equity firm across 80+ B2B SaaS portfolio companies on KPI scorecards, M&A benchmarks, and reporting automation.',
  },
  {
    role: 'Operations Officer',
    organization: 'Hindustan Petroleum Corporation Limited (HPCL)',
    focus: 'Petroleum Pipeline Operations',
    period: '2020 – 2023',
    summary:
      'Ran 24/7 petroleum pipeline operations alongside BI reporting automation, ML-based alarm classification, and capex project coordination.',
  },

  /*
   * Template for adding another role (uncomment and fill in):
   *
   * {
   *   role: 'Role Title',
   *   organization: 'Company Name',
   *   focus: 'Optional team or focus area',
   *   period: 'YYYY – YYYY',
   *   location: 'City',
   *   summary: 'Concise one-line overview of the role.',
   *   highlights: [
   *     'Key project, scope, or outcome.',
   *   ],
   * },
   */
];
