# Copilot Instructions for apirak.github.io

## Project Overview
This is an Astro 5.16.6 portfolio website for Apirak Panatkool hosted on GitHub Pages. It showcases projects, Figma plugins, and blog posts with Tailwind CSS 4.1 for styling.

## Architecture

### Core Astro Structure
- **Layouts**: `src/layouts/BaseLayout.astro` (master layout with SEO), `src/layouts/BlogLayout.astro` (blog posts)
- **Components**: `src/components/Navbar.astro`, `Footer.astro`, `SchemaPerson.astro`, `SchemaArticle.astro`
- **Pages**: File-based routing in `src/pages/` (index.astro, projects.astro, contact.astro, blog/[...slug].astro)
- **Content Collections**: `src/content/blog/*.md` with type-safe schema validation
- **Data**: `src/data/*.ts` files (TypeScript) for projects and navigation
- **Build Output**: `dist/` directory (git-ignored)

### Styling Approach
- Tailwind CSS 4.1 via @tailwindcss/vite plugin
- CSS variables for theming in `src/styles/global.css`
- Light/dark mode toggle with localStorage persistence
- Custom design tokens: `--color-text-primary`, `--color-bg-primary`, `--shadow-card`, etc.
- Theme script runs inline to prevent flash of wrong theme

### Data-Driven Content
Projects use TypeScript data files:
- `src/data/projects.ts` - Main projects and mini projects with type definitions
- `src/data/navbar.ts` - Navigation items with external link flags

Pattern in pages:
```typescript
import { mainProjects, miniProjects } from '../data/projects';

{mainProjects.map((project) => (
  <div style={`background-color: ${project.color};`}>
    <h2>{project.title}</h2>
    <img src={`/assets/image/${project.image}`} />
  </div>
))}
```

### Content Collections
Blog posts use Astro Content Collections with schema validation:
```typescript
// src/content/config.ts
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    categories: z.array(z.string()),
    image: z.string().optional(),
  })
});
```

## Development Workflow

### Local Development
```bash
# First time setup
npm install -g pnpm
pnpm install

# Run development server
pnpm dev
# Visit http://localhost:4321

# Build for production
pnpm build

# Preview production build
pnpm preview
```

**Critical**: Development server runs on port 4321 (not 4000 like Jekyll)

### Adding Content
- **New blog post**: Create `src/content/blog/YYYY-MM-DD-title.md`:
  ```markdown
  ---
  title: 'Post Title'
  description: 'Brief description for SEO'
  pubDate: 2026-01-03
  categories: ['Product Development', 'UX Design']
  image: '/assets/image/blog/cover.png'
  ---
  
  Your markdown content...
  ```
- **New project**: Add entry to `src/data/projects.ts` in `mainProjects` or `miniProjects` array
- **Images**: Place in `public/assets/image/` and reference as `/assets/image/filename.png`

## Project-Specific Conventions

### Component Props
Astro components use TypeScript interfaces for props:
```typescript
interface Props {
  title: string;
  description: string;
  image?: string;
}
```

### Navigation State
Active nav items determined by comparing `pathname` with `href`:
```typescript
const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
```

### Image Naming
Retina images use `@2x` suffix: `apirak@2x.jpg`, `certificate@2x.png`

### Project Card Images
- Max height: 150px
- Object-fit: cover
- Object-position: top
- Prevents nested anchor tags by using `<div onclick>` instead of `<a>` wrapper

### Icons
- Uses `astro-icon` package with Font Awesome 6
- Icon sets: `fa6-solid`, `fa6-brands`
- Install icon sets: `pnpm add @iconify-json/fa6-solid @iconify-json/fa6-brands`
- Usage: `<Icon name="fa6-solid:envelope" class="w-6 h-6" />`

### SEO & Analytics
- Schema.org JSON-LD via `<SchemaPerson />` and `<SchemaArticle />` components
- Open Graph and Twitter Card meta tags in `BaseLayout.astro`
- Google Analytics ID: `G-V2L7EPCY83` configured in BaseLayout
- Sitemap auto-generated via `@astrojs/sitemap`
- RSS feed at `/rss.xml`

## SEO Strategy & Content Goals

### Target Audience & Brand Positioning
**Primary Goal**: Establish Apirak Panatkool as a recognized Product Design Specialist and Influencer in Thailand
- **Target Audience**: Thai UX/Product Design community professionals
- **Brand Identity**: Personal Brand Hub combining UX + AI + Teaching expertise
- **Authority**: Founder of UX Thailand (49K+ members), Friend of Figma Bangkok, Speaker at conferences

### Key Credentials & Projects
- **Community Leadership**: Founded and manages UX Thailand (largest Thai UX community)
- **Education**: Instructor at Skooldio (UX, UI, IA, A11Y courses)
- **Product**: Founder of DealDroid.net (AI chatbot for online sellers)
- **Figma Ecosystem**: Published 3 Figma plugins (13K+ total users)
- **Publications**: Book author "Design Mobile App", Medium contributor

### SEO Target Keywords (Priority Order)
**Primary Keywords:**
- `apirak` - Personal brand searches
- `ux thailand` - Community association
- `ux designer thailand` - Professional positioning

**Secondary Keywords:**
- `product design thailand`
- `figma plugin thailand`
- `agile ux`
- `conversation design`
- `ai product design`
- `software design thailand`

**Long-tail Keywords (Content Strategy):**
- `ux designer เขียน code` - Planned 5-part series
- `vertical slicing agile`
- `ux evangelist thailand`

### Content Strategy
**Blog Focus Areas:**
1. **How-to & Tutorials** - Practical guides for UX practitioners
2. **Insights from Experience** - Real-world product development lessons
3. **UX-to-Code Bridge** - Helping designers understand development (signature series)
4. **Agile & Product Development** - Team collaboration methodologies

**Publishing Cadence:** Weekly blog posts (minimum 1 per week)

**Content Objectives:**
- Educate UX community in Thailand
- Encourage designers to learn coding fundamentals
- Build thought leadership in Product Design + AI intersection
- Drive traffic to Skooldio courses and DealDroid.net

### Social Sharing Strategy
**Target Platforms:** Facebook, LinkedIn, Twitter
**Sharing Goals:**
- Enable easy social sharing with proper Open Graph tags
- Create shareable insights for UX Thailand community
- Build viral potential through valuable, actionable content

### SEO Technical Requirements
**Must-Have Elements:**
1. **Schema.org JSON-LD** for:
   - Person schema (Apirak's profile with all credentials)
   - Article schema (blog posts with author, publisher info)
   - Organization schema (UX Thailand founder connection)

2. **Meta Tags & Descriptions:**
   - Unique, keyword-rich descriptions for every page
   - Proper title tags following pattern: `[Page Title] - Apirak Panatkool | UX Thailand`
   - Open Graph tags for social previews

3. **Content Structure:**
   - Blog posts must include categories/tags
   - Alt text for all images (accessibility + SEO)
   - Internal linking to related content
   - External links to credible sources

4. **Technical SEO:**
   - XML sitemap generation (@astrojs/sitemap)
   - Fast page load (optimize images)
   - Mobile-responsive (Tailwind CSS handles this)
   - Clean URL structure

### Writing Guidelines for AI Assistance
When creating or reviewing blog content:
- **Tone**: Professional yet approachable, Thai language with occasional English technical terms
- **Length**: 1,500-3,000 words for SEO optimization
- **Structure**: Use H2/H3 headings with target keywords
- **Examples**: Real-world scenarios from software development experience
- **CTAs**: Encourage community participation, course enrollment, or DealDroid trials
- **Links**: Include internal links to related posts, external links to UX Thailand, Skooldio, DealDroid

### Cross-Promotion Strategy
**Properties to Link:**
- Main site: apirak.com (this site)
- DealDroid: dealdroid.net
- UX Thailand: facebook.com/groups/uxthailand & uxth.co
- Skooldio: skooldio.com/instructors/apirak-panatkool
- Figma Plugins: Community plugin pages
- Medium: Legacy blog posts for backlinks

## Common Pitfalls

- Don't edit files in `dist/` - they're auto-generated
- Don't forget to run `pnpm install` after pulling changes
- Image paths in public/ don't need `/public` prefix - use `/assets/image/filename.png`
- Content collection files must have frontmatter matching the schema in `src/content/config.ts`
- Development server runs on port 4321, not 4000

## Key Files to Reference

- `astro.config.mjs` - Site-wide settings, integrations, site URL
- `src/layouts/BaseLayout.astro` - Master template with SEO meta tags
- `src/content/config.ts` - Content collection schemas
- `src/data/projects.ts` - Project data with TypeScript types
- `src/styles/global.css` - CSS variables and global styles
- `_layouts/default.html` - Master template structure (shows Bootstrap CDN pattern)
- `_data/navbar.yml` - Example of data-driven navigation
- `project.html` - Example of looping through data files with Liquid
