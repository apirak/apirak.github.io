# Apirak Panatkool - Personal Website

> 🌐 Live at [apirak.com](https://apirak.com)

Personal brand hub for Apirak Panatkool - Product Design Specialist, UX Thailand Founder, and Figma Plugin Developer.

## 👤 About

This Astro-based portfolio showcases:
- **UX/Product Design Projects** - Figma plugins with 13K+ users, Design Systems
- **Teaching & Education** - Skooldio courses (UX, UI, IA, A11Y), Published book author
- **AI Products** - DealDroid.net (AI chatbot for e-commerce)
- **Blog** - Insights on UX, Agile, Product Development, and AI in Thai language
- **Community Leadership** - Founder of [UX Thailand](https://www.facebook.com/groups/uxthailand) (49K+ members)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm

### Installation

```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install
```

### Development

```bash
# Run local development server
pnpm dev

# Visit http://localhost:4321
```

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
├── astro.config.mjs         # Astro configuration
├── src/
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro # Master layout with SEO
│   │   └── BlogLayout.astro # Blog post layout
│   ├── components/          # Reusable components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── SchemaPerson.astro
│   │   └── SchemaArticle.astro
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Blog homepage
│   │   ├── projects.astro   # Projects showcase
│   │   ├── contact.astro    # Profile/contact
│   │   └── blog/            # Blog posts
│   │       └── [...slug].astro
│   ├── content/             # Content collections
│   │   ├── config.ts        # Collection schemas
│   │   └── blog/            # Blog markdown files
│   ├── data/                # Data files (TypeScript)
│   │   ├── projects.ts      # Projects data
│   │   └── navbar.ts        # Navigation items
│   └── styles/              # Global styles
│       └── global.css       # CSS variables & base styles
├── public/                  # Static assets
│   ├── assets/
│   │   └── image/          # Images & media
│   ├── favicon.ico
│   └── robots.txt
└── dist/                    # Build output (git-ignored)
```

## ✍️ Adding Content

### New Blog Post

Create `src/content/blog/YYYY-MM-DD-title.md`:

```markdown
---
title: 'Your Post Title'
description: 'Brief description for SEO'
pubDate: 2026-01-03
categories: ['Product Development', 'UX Design']
image: '/assets/image/blog/cover.png'
---

Your markdown content here...
```

### New Project

Add entry to `src/data/projects.ts`:

```typescript
{
  title: 'Project Name',
  description: 'Project description with <a href="url">links</a>',
  link: 'https://project-url.com',
  image: 'project-image.png',
  color: '#f0f7ff'
}
```
```

## 🎨 Tech Stack

- **Framework**: Astro 5.16.6 (SSG)
- **CSS**: Tailwind CSS 4.1
- **Icons**: astro-icon with Font Awesome 6
- **Styling**: CSS variables for theming (light/dark mode)
- **Analytics**: Google Analytics (G-V2L7EPCY83)
- **Hosting**: GitHub Pages

## 🔧 Key Features

- ✅ Responsive design (mobile-first with Tailwind)
- ✅ Dark/light theme toggle with persistence
- ✅ SEO optimized (Schema.org JSON-LD)
- ✅ RSS feed & sitemap
- ✅ Content collections for type-safe blog posts
- ✅ Medium-style typography for readability
- ✅ Google Analytics integration

## 📊 SEO Strategy

Targeting Thai UX/Product Design community with keywords:
- Primary: `apirak`, `ux thailand`, `ux designer thailand`
- Secondary: `figma plugin`, `agile ux`, `product design thailand`
- Content: Educational blog posts on UX, Product Development, and Design-to-Code

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for detailed SEO guidelines.

## 🚢 Deployment

Automatically deployed to GitHub Pages via GitHub Actions when pushing to `main` branch.

The workflow builds the Astro site and deploys to `https://apirak.com`.


## 🤝 Connect

- **UX Thailand Community**: [Facebook Group](https://www.facebook.com/groups/uxthailand) (49K+ members)
- **Teaching**: [Skooldio Courses](https://www.skooldio.com/instructors/apirak-panatkool)
- **AI Product**: [DealDroid.net](https://dealdroid.net)
- **Figma Plugins**: [Community Profile](https://www.figma.com/community)

## 📝 License

© 2026 Apirak Panatkool. All rights reserved.

---

Built with ❤️ using Jekyll & Bootstrap
