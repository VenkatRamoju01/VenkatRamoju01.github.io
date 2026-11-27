export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  siteUrl: string;
  heroGreeting: string;
  heroSubline: string;
  projectsIntro: string;
  linkedInNotePrefix: string;
  linkedInNoteLinkText: string;
  linkedInNoteSuffix: string;
  storyParagraphs: string[];
  experienceSubtitle: string;
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
  title: 'Venkat Ramoju',
  description:
    'Personal website of Venkat Ramoju. Strategy & Operations at Google (YouTube), previously at Accordion and HPCL, educated at IIT Hyderabad and ISB.',
  siteUrl: 'https://venkatramoju01.github.io',
  heroGreeting:
    "Hi, I'm Venkat. I currently work in Strategy & Operations at Google (YouTube). Previously at Accordion and HPCL; studied at IIT Hyderabad and ISB.",
  heroSubline:
    "In my free time, I experiment with AI workflows, build small tools, and share what I'm learning.",
  projectsIntro:
    'Much of my day-to-day work at Google and several personal experiments are either confidential or still in progress. This is a curated, living inventory of public-safe builds I can share here.',
  linkedInNotePrefix: 'I also share occasional practical notes on ',
  linkedInNoteLinkText: 'LinkedIn',
  linkedInNoteSuffix: ' as I experiment and learn along the way.',
  storyParagraphs: [
    'I grew up in a modest household where doing well academically was the main focus. While studying at RGUKT, where I topped ECE in my first year, I prepared for IIT-JEE on my own and joined IIT Hyderabad in Civil Engineering, graduating as the Institute Silver Medalist (9.2/10.0).',
    'I always had a quiet pull toward computer science and coding, and enjoyed working with Python and C in my first year. Even so, I stayed in marks-first mode and figured out my career mostly by trying paths and learning what did not fit. I briefly explored UPSC and Civil Services, did a third-year research internship in Japan where I realized academia and civil engineering were not for me, joined HPCL in pipeline operations, and later did my MBA at ISB Hyderabad to move into the private sector.',
    'At Accordion India, analytics was completely new to me. Learning fast on the job, leading a team, and building real automation systems there eventually led me to Google.',
    'Over the last year at Google, modern AI tools finally brought back that old builder curiosity. They made it possible for a non-CS operator to build real tools, automations, and even this website. Today, this site is simply my experimental playground and a living inventory of what I am building and learning.',
  ],
  experienceSubtitle:
    '5+ years across tech, private equity operations, and energy infrastructure',
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
