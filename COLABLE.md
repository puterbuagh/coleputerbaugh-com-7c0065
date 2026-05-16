# coleputerbaugh.com
Stack: react-vite-vercel-stripe
Created: 2026-05-16

## Decisions
- Editorial-minimal aesthetic: off-white background, burnt-orange accent, serif (Fraunces) display + sans (Inter) body + mono accents
- Semantic color tokens via Tailwind using oklch; CSS variables store raw oklch components for opacity modifiers
- Custom utilities: grain-overlay, scrollbar-hide, prose-editorial, hairline divider, drop-cap, editorial links
- Routing: React Router BrowserRouter with 8 routes (Home, Work With Me, Portfolio, Case Studies, About, Blog, BlogPost, Contact)
- Toasts via sonner; SPA rewrite handled in vercel.json
- Contact: Formspree form with honeypot + validation; Calendly embed for booking
- Site-wide constants centralized in src/lib/site.js (includes CALENDLY_URL export)
- Content data colocated in src/data (projects, caseStudies, posts)
- Button component accepts but does not forward `external` prop; auto-detects external links

## Components
- Layout: Navbar (sticky blurred, serif wordmark, mobile menu), Footer, SiteLayout
- UI primitives: Button (external-aware), Badge, SectionDivider
- Home: Hero (asymmetric magazine layout with portrait plate), Packages (3-tier hairline grid), ProofStrip, BioTeaser
- Work: PackageSection (full-width, spread-prop API), FAQ (accordion)
- Portfolio: ProjectCard (gradient placeholders, tech badges, visit links)
- Case Studies: CaseStudy (editorial detail layout, aligned to data shape)
- Contact: CalendlyEmbed, ContactForm (Formspree + honeypot + sonner)
- Pages: Home, WorkWithMe, Portfolio, CaseStudies, About, Blog, BlogPost, Contact
- Data: projects.js, caseStudies.js, posts.js (3 placeholder articles)
- Config: package.json, vite.config.js, tailwind.config.js, postcss.config.js, vercel.json, .env.example, .gitignore, README.md