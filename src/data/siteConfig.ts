export interface SiteConfig {
  name: string;
  monogram: string;
  title: string;
  description: string;
  siteUrl: string;
  heroGreeting: string;
  heroSubline: string;
  projectsIntro: string;
  storyParagraphs: string[];
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
   * Drop your file at public/resume.pdf and flip resumeReady to true to show the Download Resume button.
   */
  resumeUrl: string;
  resumeReady: boolean;
  resumeLabel: string;
  /**
   * Optional consultation / 1:1 booking block (e.g. Topmate or Cal.com).
   * Hidden cleanly while bookingEnabled is false.
   */
  bookingEnabled: boolean;
  bookingUrl: string;
  bookingLabel: string;
  bookingDescription: string;
  /**
   * Quiet employer disclaimer rendered in the footer.
   */
  footerDisclaimer: string;
  /**
   * Optional ElevenLabs Conversational AI agent ID for future experiments.
   * Leave as "" so nothing is loaded or rendered on the page.
   */
  elevenLabsAgentId: string;
}

export const siteConfig: SiteConfig = {
  name: 'Venkat Ramoju',
  monogram: 'VR',
  title: 'Venkat Ramoju',
  description:
    'Personal site of Venkat Ramoju. Small tools, AI experiments, and notes from an unconventional path into tech.',
  siteUrl: 'https://venkatramoju01.github.io',
  heroGreeting:
    "Hi, I'm Venkat. I work in Strategy & Operations at Google (YouTube) by day, and spend my free time building small tools and experimenting with AI.",
  heroSubline: '',
  projectsIntro: '',
  storyParagraphs: [
    'I grew up in a modest household where doing well academically was the main focus. After starting out at RGUKT, I prepared for IIT-JEE on my own and joined IIT Hyderabad in Civil Engineering.',
    'I always had a quiet pull toward computer science and coding, and enjoyed Python and C in my first year. Still, I stayed in marks-first mode and figured out my direction mostly by trying different paths and seeing what fit. I briefly explored UPSC and Civil Services, and a third-year research internship in Japan helped me realize that academia and civil engineering were not for me.',
    'After college, I joined HPCL in pipeline operations, where I quickly realized a public-sector career was not the right long-term fit. I even interviewed for a few software engineering roles to test that old coding interest before deciding to pursue an MBA at ISB Hyderabad to make the switch into the private sector. At Accordion India, analytics was completely new to me; learning fast on the job, leading a team, and building real automation systems there eventually led me to Google.',
    'More recently, modern AI tools brought back that early curiosity for building. They made it possible for a non-CS operator to actually ship working apps, small automations, and this website. It has been fun finally building things instead of only analyzing them.',
  ],
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
  bookingEnabled: false,
  bookingUrl: '',
  bookingLabel: 'Book a Call',
  bookingDescription:
    'Open to focused 1:1 chats on strategy, operations, analytics, or building small AI products.',
  footerDisclaimer:
    'Views and experiments shared here are strictly my own and do not represent my employer.',
  elevenLabsAgentId: '',
};
