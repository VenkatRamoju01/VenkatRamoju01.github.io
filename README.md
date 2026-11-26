# Venkat Ramoju | Personal Website

Static personal portfolio built with **Astro**, **Tailwind CSS**, and **TypeScript**, deployed automatically to GitHub Pages at `https://venkatramoju01.github.io/`.

All editable profile copy, links, projects, experience entries, and feature flags live under `src/data/`, so day-to-day updates do not require touching layout or styling code.

## Project Structure

```text
.
├── .github/workflows/deploy.yml   # Automatic GitHub Pages deployment on push to main
├── public/                        # Static files (favicon, future resume.pdf, profile.jpg)
├── src/
│   ├── components/                # Page sections (Header, Hero, Projects, About, Background, Connect, Footer)
│   ├── data/
│   │   ├── siteConfig.ts          # Personal info, bio, social links, photo, resume & booking flags
│   │   ├── projects.ts            # Projects / products list
│   │   └── experience.ts          # Work experience and education entries
│   ├── layouts/BaseLayout.astro   # HTML shell, SEO tags, fonts, light/dark theme setup
│   ├── pages/index.astro          # Main landing page
│   └── styles/global.css          # Editorial typography and color tokens
└── astro.config.mjs               # Site URL and Astro configuration
```

## Quick Maintenance Guide

### 1. Upload your Resume PDF
1. Place your PDF file at `public/resume.pdf`.
2. Open `src/data/siteConfig.ts` and change:
   ```ts
   resumeReady: true,
   ```
3. Commit and push to `main`. Both Download Resume buttons (and the header Resume link) immediately become active one-click PDF downloads.

### 2. Add your profile photo
1. Place a square or portrait image at `public/profile.jpg` (PNG or WebP works too).
2. Open `src/data/siteConfig.ts` and set:
   ```ts
   photoUrl: '/profile.jpg',
   ```
3. Commit and push to `main`. The hero section automatically reveals the framed photo beside your intro. Leaving `photoUrl: ''` keeps it cleanly hidden.

### 3. Add detailed Work Experience bullets
1. Open `src/data/experience.ts`.
2. Add a `highlights` array to your existing role, or uncomment the template block at the bottom of `experience` to add previous roles:
   ```ts
   highlights: [
     'Led analysis and planning for a core operational workflow.',
     'Partnered with product and engineering teams to streamline reporting.',
   ],
   ```
3. Commit and push to `main`. The Background section renders the bullet list automatically.

### 4. Add a new project or product
1. Open `src/data/projects.ts`.
2. Copy the commented template at the bottom of the `projects` array and fill in `title`, `status` (`'Live' | 'In Progress' | 'Experiment'`), `tagline`, `description`, `tags`, and any URLs (`liveUrl`, `secondaryUrl`, `repoUrl`).
3. Keep `featured: true` to show it in the Projects section.

### 5. Enable Consultations / Booking (Topmate / Cal.com) or an AI widget later
Open `src/data/siteConfig.ts`:
- **To turn on 1:1 booking (Topmate, Cal.com, etc.):**
  ```ts
  bookingEnabled: true,
  bookingUrl: 'https://topmate.io/your-handle',
  bookingLabel: 'Book a Call',
  ```
- **To test an ElevenLabs Conversational AI agent later:**
  ```ts
  elevenLabsAgentId: 'your-agent-id',
  ```
  Leaving `elevenLabsAgentId` as `''` keeps the page completely free of third-party widget scripts.

### 6. Connect a custom domain on GitHub Pages later
1. Buy your domain (for example, `venkatramoju.com`).
2. In your DNS provider, configure GitHub Pages DNS records:
   - For an apex domain (`venkatramoju.com`), add `A` records pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - For a `www` subdomain, add a `CNAME` record pointing to `venkatramoju01.github.io`.
3. Add a file at `public/CNAME` containing only your domain name (for example, `venkatramoju.com`).
4. Update `site` in `astro.config.mjs` and `siteUrl` in `src/data/siteConfig.ts` to your new `https://` domain.
5. In GitHub, go to **Settings -> Pages -> Custom domain**, enter your domain, save, and enable **Enforce HTTPS**.

## First-Time GitHub Pages Setup
In your GitHub repository, open **Settings -> Pages** and under **Build and deployment**, set **Source** to **GitHub Actions**. Every push to `main` will automatically build and publish your site via `.github/workflows/deploy.yml`.

## Local Development

```bash
npm install
npm run dev      # Start local dev server
npm run build    # Build production static output to dist/
npm run preview  # Preview production build locally
```
