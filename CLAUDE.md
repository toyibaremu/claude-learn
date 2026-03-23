# CLAUDE.md — claude-learn repository

## Project Overview
This is an open-source interactive course on Claude Code for researchers,
economists, and social scientists. The course is a GitHub Pages static site
(HTML/CSS/JS, no build tools) that takes learners from zero knowledge to
mastery of Claude Code.

## Course Structure
- `index.html` — Landing page with all module cards
- `modules/` — Individual module HTML files (module-00.html through module-13.html)
- `modules/glossary.html` — Jargon library with plain-English definitions
- `modules/resources.html` — Full credits and bibliography page
- `assets/css/style.css` — Main design system (custom properties, all components)
- `assets/css/tooltip.css` — Jargon tooltip styles + glossary page styles
- `assets/js/main.js` — All interactivity: theme toggle, tabs, copy buttons, accordion, jargon tooltips, progress tracking

## Target Audience
- Applied economists, social scientists, development researchers
- Graduate students and research assistants
- Researchers in low- and middle-income countries (accessibility matters)
- Tools covered: Stata, R, Python, LaTeX

## Design Principles
1. Jargon-free: All technical terms have hover tooltips defined in plain English
2. Accessible: Works on slow connections, no heavy frameworks, semantic HTML
3. Practical: Every module has real research examples and an exercise
4. Multi-tool: Stata/R/Python/LaTeX tabs throughout all code examples
5. Progress tracking: localStorage-based, no login needed

## GitHub Pages Setup
- Branch: `claude/setup-research-portfolio-bhBsT`
- Enable Pages from this branch root in repo Settings → Pages
- No build process needed — all files served directly

## Completed Modules (as of last push)
- [x] index.html (landing page)
- [x] module-00.html (What is Claude Code?)
- [x] module-01.html (Installation & Setup)
- [x] module-02.html (Your First Session)
- [x] module-03.html (CLAUDE.md)
- [x] module-04.html (Research Workflows)
- [x] module-05.html (Writing & LaTeX)
- [x] module-06.html (Slash Commands & Skills)
- [x] module-07.html (Hooks)
- [x] module-08.html (MCP)
- [x] module-09.html (Multi-file Projects)
- [x] module-10.html (Building Tools & Apps)
- [x] module-11.html (Team Research)
- [x] module-12.html (Agents & API)
- [x] module-13.html (Mastery & Ethics)
- [x] glossary.html (Jargon Library)
- [x] resources.html (Credits & Bibliography)

## Module Template Pattern
All module pages follow this structure:
- `<body data-module="mod-XX">` for progress tracking
- Shared sidebar with all module links
- `.main-content` with chip, page-title, page-subtitle
- `.toc` at top
- Sections with `class="anchor-heading"` and `id="section-name"`
- `.tabs` with Stata/R/Python panels where applicable
- `.exercise` block at end
- `.module-nav` for prev/next navigation
- `markComplete('mod-XX')` on complete button

## JavaScript: Progress Tracking
- Progress stored in localStorage key 'cc-progress' as JSON
- `markComplete(moduleId)` saves to localStorage and updates UI
- `updateProgressUI()` reads all progress and updates sidebar + cards
- TOTAL_MODULES = 13

## Jargon System
- Terms defined in `JARGON` object in assets/js/main.js
- Applied via `initJargonTooltips()` to p, li, td, h2-h4 elements
- Shown as CSS tooltip on hover
- Same dictionary used for glossary.html page

## Resources Used (for credits page)
See modules/resources.html — must credit all sources used including:
- Personal blogs (Blattman, Sant'Anna, Boris Tane, etc.)
- GitHub repos (MixtapeTools, ChernyCode, etc.)
- Substacks (GenAI for Econ, Calibrated, etc.)
- Official Anthropic documentation
