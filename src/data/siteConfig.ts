export interface SiteConfig {
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  siteUrl: string;
  heroIntro: string;
  aboutParagraphs: string[];
  connectHeading: string;
  connectNote: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
  };
  /**
   * Optional profile photo path (e.g. "/profile.jpg" after placing the image in public/profile.jpg).
   * Keep as "" to hide the photo frame cleanly with no placeholder box.
   */
  photoUrl: string;
  photoAlt: string;
  /**
   * Resume PDF configuration.
   * Drop your file at public/resume.pdf and flip resumeReady to true to enable direct one-click downloads.
   */
  resumeUrl: string;
  resumeReady: boolean;
  resumeLabel: string;
  resumeComingSoonLabel: string;
  resumeComingSoonNote: string;
  /**
   * Optional consultation / 1:1 booking block (e.g. Topmate or Cal.com).
   * Hidden cleanly while bookingEnabled is false.
   */
  bookingEnabled: boolean;
  bookingUrl: string;
  bookingLabel: string;
  bookingDescription: string;
  /**
   * Optional ElevenLabs Conversational AI agent ID for future experiments.
   * Leave as "" so nothing is loaded or rendered on the page.
   */
  elevenLabsAgentId: string;
}

export const siteConfig: SiteConfig = {
  name: 'Venkat Ramoju',
  eyebrow: 'STRATEGY & OPERATIONS · ANALYTICS · APPLIED AI BUILDER',
  title: 'Venkat Ramoju | Strategy & Operations, Analytics, Applied AI Builder',
  description:
    'Personal website of Venkat Ramoju. Strategy & Operations professional at Google, IIT Hyderabad and ISB alumnus, building practical AI tools and web apps.',
  siteUrl: 'https://venkatramoju01.github.io',
  heroIntro:
    'Strategy & Operations professional at Google with a background in analytics and business operations, educated at IIT Hyderabad and ISB. Outside of day-to-day work, I like building small, practical AI tools and web apps to solve everyday problems.',
  aboutParagraphs: [
    'I studied engineering with a minor in economics at IIT Hyderabad and later completed my PGP in Management at ISB, focusing on finance and IT management. Most of my career sits at the intersection of business operations, analytics, and structured problem solving.',
    'Outside work, I enjoy prototyping useful side projects with AI and web technologies. I prefer keeping things simple: find a real everyday problem, ship a focused tool, and iterate based on how people actually use it.',
  ],
  connectHeading: 'Say hello',
  connectNote:
    'If you want to talk about a product idea, compare notes on practical AI tools, or collaborate on something useful, feel free to reach out. Email and LinkedIn are the fastest ways to reach me.',
  email: 'ramoju.b2024@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/venkat-ramoju/',
    github: 'https://github.com/VenkatRamoju01',
  },
  photoUrl: '',
  photoAlt: 'Portrait of Venkat Ramoju',
  resumeUrl: '/resume.pdf',
  resumeReady: false,
  resumeLabel: 'Download Resume',
  resumeComingSoonLabel: 'Resume (PDF coming soon)',
  resumeComingSoonNote:
    'My updated resume PDF will be uploaded here soon. In the meantime, feel free to view my LinkedIn profile or email me directly.',
  bookingEnabled: false,
  bookingUrl: '',
  bookingLabel: 'Book a Call',
  bookingDescription:
    'Open to focused 1:1 chats on strategy, operations, analytics, or building small AI products.',
  elevenLabsAgentId: '',
};
