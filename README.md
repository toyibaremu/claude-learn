# Claude Code: From Zero to Mastery

> A free, open, interactive course on Claude Code for researchers, economists, and social scientists — no prior coding experience required.

**[▶ Start the Course](https://toyibaremu.github.io/claude-learn/)** · [View on GitHub](https://github.com/toyibaremu/claude-learn) · [Jargon Library](https://toyibaremu.github.io/claude-learn/modules/glossary.html) · [Resources & Credits](https://toyibaremu.github.io/claude-learn/modules/resources.html)

---

## What is this?

This is a comprehensive, interactive web-based course that teaches [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) — Anthropic's AI coding assistant — to researchers, economists, and social scientists from first principles.

**The course is designed around one core belief:** AI tools like Claude Code should be accessible to every researcher, regardless of their programming background, institutional resources, or geographic location.

Every module includes:
- Plain-English explanations with no assumed knowledge
- A **Jargon Glossary** — hover over any dotted term to see an instant definition
- Code examples in **Stata, R, Python, and LaTeX**
- Practical **exercises** using real research scenarios
- Both **terminal (CLI) and web (claude.ai)** usage paths

---

## Course Modules

| # | Module | Level | Time |
|---|--------|-------|------|
| 0 | [What is Claude Code?](modules/module-00.html) | Beginner | 20 min |
| 1 | [Installation & Setup](modules/module-01.html) | Beginner | 30 min |
| 2 | [Your First Session](modules/module-02.html) | Beginner | 25 min |
| 3 | [CLAUDE.md — Teaching Claude Your Project](modules/module-03.html) | Beginner | 35 min |
| 4 | [Research Workflows: Data & Analysis](modules/module-04.html) | Intermediate | 50 min |
| 5 | [Writing, Papers & LaTeX](modules/module-05.html) | Intermediate | 45 min |
| 6 | [Slash Commands & Skills](modules/module-06.html) | Intermediate | 40 min |
| 7 | [Hooks — Automating Your Workflow](modules/module-07.html) | Intermediate | 45 min |
| 8 | [MCP — Connecting Claude to the World](modules/module-08.html) | Intermediate | 50 min |
| 9 | [Multi-file Projects & Codebases](modules/module-09.html) | Advanced | 45 min |
| 10 | [Building Tools & Apps with Claude](modules/module-10.html) | Advanced | 60 min |
| 11 | [Team Research & Collaboration](modules/module-11.html) | Advanced | 40 min |
| 12 | [Advanced: Agents & API Integration](modules/module-12.html) | Advanced | 60 min |
| 13 | [Mastery, Ethics & Best Practices](modules/module-13.html) | Advanced | 35 min |
| — | [Jargon Library & Glossary](modules/glossary.html) | Reference | — |
| — | [Resources & Credits](modules/resources.html) | Reference | — |

**Total: ~9 hours of content + exercises**

---

## Who is this for?

- **Development economists** — clean survey data, run DiD/IV regressions, write up results
- **Social scientists** — automate repetitive analysis, write better code, manage large projects
- **Graduate students & RAs** — become indispensable with AI-assisted research workflows
- **Researchers in LMICs** — access world-class AI assistance regardless of institutional resources
- **Policy analysts** — turn data into reports and visualisations more efficiently
- **Anyone with Stata, R, Python, or LaTeX experience** — no additional programming required

---

## Features

### 🌐 Interactive Web Site
A polished GitHub Pages site with dark mode, progress tracking (localStorage), and responsive design that works on any device.

### 📖 Jargon-Free Learning
Every technical term has a plain-English definition accessible via hover tooltip. A dedicated [Jargon Library](modules/glossary.html) page with search and alphabetical filtering covers 40+ terms.

### 💻 Multi-Language Examples
All code examples are presented in tabs covering Stata, R, Python, and LaTeX — wherever relevant.

### 🎯 Practical Exercises
Every module ends with a hands-on exercise tied to real research scenarios. The capstone in Module 13 brings everything together.

### 📊 Progress Tracking
Your completion progress is saved locally in your browser — no login needed. Mark each module complete as you go.

### ♿ Accessibility
- No heavy frameworks (pure HTML/CSS/JS — loads fast on slow connections)
- Semantic HTML
- Keyboard navigable
- WCAG AA colour contrast in both light and dark modes

---

## Getting Started

### Option 1: Take the course (no setup needed)
Just go to **[toyibaremu.github.io/claude-learn](https://toyibaremu.github.io/claude-learn/)** and start with Module 0.

### Option 2: Fork and adapt for your own use
```bash
git clone https://github.com/toyibaremu/claude-learn.git
cd claude-learn
# Open index.html in your browser — no build step required
open index.html
```

### Option 3: Contribute improvements
```bash
git fork https://github.com/toyibaremu/claude-learn
# Make your changes
# Submit a pull request
```

---

## Technical Stack

This course is intentionally simple:

```
claude-learn/
├── index.html              # Landing page
├── modules/                # All module HTML files
│   ├── module-00.html      # ... through module-13.html
│   ├── glossary.html       # Jargon library
│   └── resources.html      # Credits & bibliography
├── assets/
│   ├── css/
│   │   ├── style.css       # Full design system (custom properties, dark mode)
│   │   └── tooltip.css     # Jargon tooltip + glossary styles
│   └── js/
│       ├── main.js         # All interactivity (tabs, tooltips, progress, etc.)
│       └── glossary.js     # Glossary search & filter
├── CLAUDE.md               # Claude Code context for this project
├── MEMORY.md               # Session progress log
└── _config.yml             # GitHub Pages config
```

**No build tools. No npm install. No frameworks.** Open any HTML file in a browser and it works.

---

## Enabling GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `Deploy from a branch`
4. Select the branch `claude/setup-research-portfolio-bhBsT` and folder `/ (root)`
5. Click **Save**
6. Your site will be live at `https://[your-username].github.io/claude-learn/`

---

## Attribution & Credits

This course draws from the work of many researchers and developers. See the full [Resources & Credits](modules/resources.html) page for detailed attribution. Key sources include:

- **Chris Blattman** (UChicago) — claudeblattman.com
- **Pedro Sant'Anna** (Microsoft Research) — research workflow documentation
- **Scott Cunningham** (Baylor) — MixtapeTools skills library
- **Hugo Sant'Anna** — Obsidian vault manager & CLO Author
- **Simon Willison** — simonwillison.net
- **GenAI for Economists** newsletter — genaiforecon.substack.com
- **Anthropic** — Claude Code official documentation
- And many others — see [Resources & Credits](modules/resources.html)

---

## How to Cite

```bibtex
@misc{ibaremu2026claudelearn,
  author       = {Ibaremu, Toyib},
  title        = {Claude Code: From Zero to Mastery},
  year         = {2026},
  publisher    = {GitHub},
  howpublished = {\url{https://github.com/toyibaremu/claude-learn}},
  note         = {Open-source course for researchers and social scientists}
}
```

---

## Contributing

Contributions are welcome! Here's what would be most helpful:

- **CLAUDE.md templates** for specific fields (public health, political science, education research)
- **Custom skills** for common research tasks
- **Module improvements** — corrections, updated examples, new prompts
- **Translations** — making the course accessible in other languages
- **New module ideas** — is there a topic missing?

Please [open an issue](https://github.com/toyibaremu/claude-learn/issues) or submit a pull request.

---

## License

MIT License — free to use, adapt, and redistribute with attribution.

Built with [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) by Anthropic.
Course author: Toyib Ibaremu ([@toyibaremu](https://orcid.org/0000-0003-1448-4942))

---

*"The question is not 'can I trust Claude?' The question is 'have I set up Claude to succeed?'"*
