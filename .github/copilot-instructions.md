# Copilot Instructions for apirak.github.io

## Project Overview
This is a Jekyll-based portfolio website (v4.3.3) for Apirak Panatkool hosted on GitHub Pages. It showcases projects, Figma plugins, and blog posts with a Bootstrap 5 frontend.

## Architecture

### Core Jekyll Structure
- **Layouts**: `_layouts/default.html` (master template), `_layouts/post.html` (blog posts)
- **Includes**: `_includes/navbar.html`, `_includes/footer.html` (reusable components)
- **Data**: `_data/*.yml` files drive dynamic content (navbar, projects)
- **Posts**: Blog content in `_posts/YYYY-MM-DD-title.markdown` format
- **Compiled**: `_site/` directory (git-ignored build output)

### Styling Approach
- Bootstrap 5.3.3 via CDN (not npm)
- Custom SCSS in `assets/css/style.scss` with Jekyll front matter `---`
- SCSS partials in `_sass/` imported without extensions: `@import "icon-font";`
- Variables defined in main SCSS: `$backgroundColor`, `$bodyColor`, `$bodyFont`, `$base-shadow`

### Data-Driven Content
Project pages use YAML data files instead of hardcoded HTML:
- `_data/figma_plugin.yml` - Major projects with color, image, link, description
- `_data/mini_project.yml` - Smaller experiments
- `_data/navbar.yml` - Navigation items with icon support (Bootstrap Icons)

Loop pattern in templates:
```liquid
{% for project in site.data.figma_plugin %}
  <div style="background-color: {{project.color}};">
    <h2>{{project.title}}</h2>
    <img src="assets/image/{{project.image}}">
  </div>
{% endfor %}
```

## Development Workflow

### Local Development
```bash
# First time setup (uses rbenv for Ruby version management)
brew install rbenv
rbenv install 3.3.6
gem install bundler
bundle install

# Run development server
bundle exec jekyll serve
```

**Critical**: Always use `bundle exec jekyll serve`, not just `jekyll serve`

### Adding Content
- **New project**: Add entry to `_data/figma_plugin.yml` or `_data/mini_project.yml`
- **New blog post**: Create `_posts/YYYY-MM-DD-title.markdown` with front matter:
  ```yaml
  ---
  layout: post
  author: Apirak Panatkool
  title: Post Title
  image: filename.png
  description: >-
    Multi-line description
  ---
  ```
- **Images**: Place in `assets/image/` and reference as `assets/image/filename.png`

## Project-Specific Conventions

### Front Matter
- All HTML pages require YAML front matter (even if just `---\n---`)
- SCSS files need empty front matter to be processed: `assets/css/style.scss` starts with `---`

### Navigation State
Active nav items use conditional class in `_includes/navbar.html`:
```liquid
{% if page.url == item.link %}
  {% assign is_active = "link-dark selected" %}
{% endif %}
```

### Image Naming
Retina images use `@2x` suffix: `apirak@2x.jpg`, `certificate@2x.png`

### Color Theming
Each project card has custom background color defined in YAML data (`color: '#f0f7ff'`)

### SEO & Analytics
- Uses `jekyll-seo-tag` plugin (add `{% seo %}` in layouts)
- Google Analytics ID: `G-V2L7EPCY83` in `_config.yml`

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
   - XML sitemap generation (jekyll-sitemap)
   - Fast page load (optimize images)
   - Mobile-responsive (Bootstrap 5 handles this)
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

- Don't edit files in `_site/` - they're auto-generated
- Don't forget `bundle exec` prefix when running Jekyll commands
- SCSS imports in `_sass/` directory must be imported without file extension
- Links to posts use Jekyll permalink format: `/YYYY/MM/DD/title.html`
- Bootstrap loaded via CDN, not package.json - don't try to npm install it

## Key Files to Reference

- `_config.yml` - Site-wide settings, plugins, author info
- `_layouts/default.html` - Master template structure (shows Bootstrap CDN pattern)
- `_data/navbar.yml` - Example of data-driven navigation
- `project.html` - Example of looping through data files with Liquid
