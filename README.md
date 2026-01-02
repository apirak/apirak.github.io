# Apirak Panatkool - Personal Website

> 🌐 Live at [apirak.com](https://apirak.com)

Personal brand hub for Apirak Panatkool - Product Design Specialist, UX Thailand Founder, and Figma Plugin Developer.

## 👤 About

This Jekyll-based portfolio showcases:
- **UX/Product Design Projects** - Figma plugins with 13K+ users, Design Systems
- **Teaching & Education** - Skooldio courses (UX, UI, IA, A11Y), Published book author
- **AI Products** - DealDroid.net (AI chatbot for e-commerce)
- **Blog** - Insights on UX, Agile, Product Development, and AI in Thai language
- **Community Leadership** - Founder of [UX Thailand](https://www.facebook.com/groups/uxthailand) (49K+ members)

## 🚀 Quick Start

### Prerequisites
- Ruby 3.3.6 (managed via rbenv)
- Bundler

### Installation

```bash
# Install rbenv (if not already installed)
brew install rbenv

# Install Ruby 3.3.6
rbenv install 3.3.6

# Install Bundler
gem install bundler

# Install dependencies
bundle install
```

### Development

```bash
# Run local development server
bundle exec jekyll serve

# Visit http://localhost:4000
```

**⚠️ Important**: Always use `bundle exec jekyll serve` (not just `jekyll serve`)

## 📁 Project Structure

```
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html         # Master layout
│   └── post.html           # Blog post layout
├── _includes/               # Reusable components
│   ├── navbar.html
│   └── footer.html
├── _data/                   # Data files (YAML)
│   ├── figma_plugin.yml    # Projects showcase
│   ├── mini_project.yml    # Side projects
│   └── navbar.yml          # Navigation items
├── _posts/                  # Blog posts (Markdown)
├── _sass/                   # SCSS partials
├── assets/
│   ├── css/                # Compiled CSS
│   ├── image/              # Images & media
│   └── js/                 # JavaScript files
└── _site/                   # Generated site (git-ignored)
```

## ✍️ Adding Content

### New Blog Post

Create `_posts/YYYY-MM-DD-title.markdown`:

```yaml
---
layout: post
author: Apirak Panatkool
title: Your Post Title
image: /assets/image/blog/cover.png
description: >-
  Brief description for SEO
---

Your markdown content here...
```

### New Project

Add entry to `_data/figma_plugin.yml`:

```yaml
- title: 'Project Name'
  description: Project description with <a href="url">links</a>
  link: 'https://project-url.com'
  image: 'project-image.png'
  color: 'blue'  # or: gray, green, pink, cream
```

## 🎨 Tech Stack

- **Static Site Generator**: Jekyll 4.3.3
- **CSS Framework**: Bootstrap 5.3.3 (via CDN)
- **Icons**: Bootstrap Icons
- **Styling**: SCSS with custom design tokens
- **Analytics**: Google Analytics (G-V2L7EPCY83)
- **Hosting**: GitHub Pages

## 🔧 Key Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/light theme toggle
- ✅ SEO optimized (jekyll-seo-tag)
- ✅ RSS feed (jekyll-feed)
- ✅ Data-driven content (YAML)
- ✅ Google Analytics integration

## 📊 SEO Strategy

Targeting Thai UX/Product Design community with keywords:
- Primary: `apirak`, `ux thailand`, `ux designer thailand`
- Secondary: `figma plugin`, `agile ux`, `product design thailand`
- Content: Educational blog posts on UX, Product Development, and Design-to-Code

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for detailed SEO guidelines.

## 🤝 Connect

- **UX Thailand Community**: [Facebook Group](https://www.facebook.com/groups/uxthailand) (49K+ members)
- **Teaching**: [Skooldio Courses](https://www.skooldio.com/instructors/apirak-panatkool)
- **AI Product**: [DealDroid.net](https://dealdroid.net)
- **Figma Plugins**: [Community Profile](https://www.figma.com/community)

## 📝 License

© 2026 Apirak Panatkool. All rights reserved.

---

Built with ❤️ using Jekyll & Bootstrap
