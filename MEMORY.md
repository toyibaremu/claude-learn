# MEMORY.md — Session Progress Log

## Session: 2026-03-23

### What was built
- Full site architecture: GitHub Pages static site, no build tools
- Design system: `assets/css/style.css` (custom CSS with dark mode, responsive)
- Tooltip system: `assets/css/tooltip.css` + jargon definitions in `assets/js/main.js`
- JavaScript: `assets/js/main.js` (theme, tabs, copy, accordion, tooltips, progress)
- JavaScript: `assets/js/glossary.js` (search + filter for glossary page)
- Landing page: `index.html` with hero, module grid (14 cards), resources, footer
- Module 0: What is Claude Code (conceptual, no jargon, analogies, flow diagrams)
- Module 1: Installation on Mac/Windows/Linux, API key setup, cost explanation
- Module 2: First session, anatomy, prompting formula, permissions, key commands
- Module 3: CLAUDE.md — full examples for Stata/R/Python, hierarchy, iteration
- Module 4: Research workflows — data cleaning, analysis, debugging, tables
- Module 5: Writing, LaTeX, referee responses, academic integrity note

### User requirements noted
1. Accessible & simplified — no intimidating jargon (hover tooltips implemented)
2. Jargon library/dictionary — in every module hover + dedicated glossary page (pending)
3. Resources & Credits page for academic integrity (pending)
4. Regular pushes + CLAUDE.md / MEMORY.md updates (done here)
5. Works for both terminal and web Claude Code users
6. Tools covered: Stata, R, Python, LaTeX (tabs in all modules)
7. New resource URLs to incorporate (5 additional substacks/blogs from user)

### Still to build
- module-06.html — Slash Commands & Skills
- module-07.html — Hooks
- module-08.html — MCP (Model Context Protocol)
- module-09.html — Multi-file Projects
- module-10.html — Building Tools & Apps
- module-11.html — Team Research
- module-12.html — Agents & API
- module-13.html — Mastery & Ethics
- modules/glossary.html — Full jargon library with search
- modules/resources.html — Credits & bibliography
- _config.yml, 404.html, README update

### Research still incoming (background agents)
- Agent aee635afb43a4f392: claudeblattman, boristane, psantanna, genaiforecon, awesome-econ-ai
- Agent a3407da80bffc7237: ChernyCode, MixtapeTools, obsidian-vault, vibe, clo-author, ChrisWiles, Guide2EconRA, AEI, simonwillison
- Agent a002448374cc3e695: official Anthropic docs (hooks, MCP, slash commands, settings)
- Agent a17c3620b74dd8018: 5 new URLs from user (calibrated, unforeseeable future, agentic, APE lab, reskilled)

### Design decisions made
- No build tools (just static HTML — works everywhere, no npm run build needed)
- localStorage for progress (no login, works offline)
- CSS custom properties for dark mode (smooth toggle)
- Jargon in JS object — easy to extend
- Module numbering: mod-00 through mod-13
