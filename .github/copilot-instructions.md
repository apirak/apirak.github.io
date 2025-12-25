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
