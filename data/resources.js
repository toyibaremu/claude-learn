/* Course resources registry — edit this file to add/update resources.
   Each entry added here will appear automatically in the "Recently Added" section
   of resources.html, sorted by dateAdded (newest first).
   Fields: id, name, type, desc, url, usedIn, dateAdded
*/
const COURSE_RESOURCES = [
  // ── New additions (May 2026) ─────────────────────────────────────────────
  {
    id: "ai-research-feedback",
    name: "Claes Bäckman — AI Research Feedback Skills",
    type: "GitHub Repository",
    desc: "Five Claude Code review skills for academic research: review-paper (full referee report via 6 parallel agents), review-paper-light (fast 2-agent check), review-paper-code (reproducibility), review-pap (pre-analysis plan), and review-grant (NSF/NIH-style grant review).",
    url: "https://github.com/claesbackman/AI-research-feedback",
    usedIn: "Module 6",
    dateAdded: "2026-05-20"
  },
  {
    id: "results-db-skill",
    name: "batikas — Results DB Skill",
    type: "GitHub Repository",
    desc: "A Claude skill that works as a structured results ledger for quantitative research. Logs regression estimates with metadata (outcome, sample, estimator, p-values, validation checks), exports to LaTeX/CSV, and runs integrity checks before submission.",
    url: "https://github.com/batikas/results-db-skill",
    usedIn: "Module 6",
    dateAdded: "2026-05-20"
  },
  {
    id: "dariia-m-skills",
    name: "dariia-m — My Claude Skills",
    type: "GitHub Repository",
    desc: "Personal collection of Claude Code skills for academic researchers: abstract (abstract drafting), academic_writing, code-walkthrough, dont-lie (accuracy guard), econ_intro_writing, event-studies, and paper_verification.",
    url: "https://github.com/dariia-m/my_claude_skills",
    usedIn: "Module 6",
    dateAdded: "2026-05-20"
  },
  {
    id: "ai-research-feedback-slides",
    name: "Claes Bäckman — AI Workshop Slides",
    type: "GitHub Repository",
    desc: "Slide deck for a course called 'Practical AI for academics' — covers applying AI tools in academic research workflows. Useful companion to this course for workshop or classroom settings.",
    url: "https://github.com/claesbackman/AI_Workshop_Slides",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "feynman",
    name: "companion-inc — Feynman",
    type: "Open-Source Agent",
    desc: "Open-source AI research agent (7k+ stars) with four built-in sub-agents: Researcher, Reviewer, Writer, Verifier. Supports literature reviews, multi-agent investigation, experiment replication, and peer review simulation. Integrates with Claude.",
    url: "https://github.com/companion-inc/feynman",
    usedIn: "Module 12",
    dateAdded: "2026-05-20"
  },
  {
    id: "reviewer-ingar30",
    name: "Ingar30 — Reviewer",
    type: "GitHub Repository",
    desc: "Reproducible multi-agent reviewer for academic economics papers. Parses PDFs, runs parallel specialized reviewers (grammar, numerical accuracy, methodology, claim-evidence alignment), and synthesises findings into a structured report.",
    url: "https://github.com/Ingar30/reviewer",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "idea-evaluation-pipeline",
    name: "alejandroll10 — Idea Evaluation Pipeline",
    type: "GitHub Repository",
    desc: "Prompt-based 8-step pipeline for evaluating PhD-level research ideas in finance and economics. No code required — works with any AI (Claude, GPT-4). Rates ideas 1–10 and iterates until they meet top-3 finance journal quality.",
    url: "https://github.com/alejandroll10/idea-evaluation-pipeline",
    usedIn: "Module 4",
    dateAdded: "2026-05-20"
  },
  {
    id: "pgp-mini-series",
    name: "Paul Goldsmith-Pinkham — Mini-Series on Claude Code (Princeton BCF)",
    type: "Lecture Series",
    desc: "Video lecture mini-series by Yale economist Paul Goldsmith-Pinkham on Claude Code for applied economists, hosted by the Princeton Bendheim Center for Finance.",
    url: "https://bcf.princeton.edu/events/paul-goldsmith-pinkham-mini-series-on-claude-code-for-applied-economists/",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "pgp-style-guide",
    name: "Paul Goldsmith-Pinkham — Style Guide",
    type: "Reference Guide",
    desc: "Academic writing and AI style guide by Yale economist Paul Goldsmith-Pinkham. A concise reference for maintaining quality and clarity when using AI in economic research.",
    url: "https://paulgp.com/style_guide.md",
    usedIn: "Module 5",
    dateAdded: "2026-05-20"
  },
  {
    id: "markus-academy-substack",
    name: "Markus Academy — 'Claude Code for Applied Economists'",
    type: "Newsletter / Substack",
    desc: "In-depth Substack article on using Claude Code in applied economics research, with tips specific to the applied micro workflow.",
    url: "https://markusacademy.substack.com/p/claude-code-for-applied-economists",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "causalinf-panel",
    name: "Scott Cunningham — 'What a Panel of Economists Said About AI'",
    type: "Newsletter / Substack",
    desc: "Causal Inference substack report on a panel discussion by economists about AI tools in research. Key primary-source perspectives on what AI does well and where it still falls short.",
    url: "https://causalinf.substack.com/p/what-a-panel-of-economists-said-about",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "backman-substack",
    name: "Claes Bäckman — 'Recent Pieces on AI and Research'",
    type: "Newsletter / Substack",
    desc: "Curated roundup of recent articles and resources on AI for academic research, with commentary by Claes Bäckman.",
    url: "https://claesbackman.substack.com/p/recent-pieces-on-ai-and-research",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "mushtaq-bilal-linkedin",
    name: "Mushtaq Bilal — 'Claude Code 101 for Academic Researchers'",
    type: "Article",
    desc: "LinkedIn article introducing Claude Code for academic researchers — practical onboarding guide with an emphasis on writing and reference management.",
    url: "https://www.linkedin.com/pulse/claude-code-101-academic-researchers-mushtaq-bilal-phd-h6cke/",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "velikov-ai-econ-wiki",
    name: "Mihail Velikov — AI Econ Wiki",
    type: "Website / Wiki",
    desc: "Community-maintained wiki of AI tools, workflows, and resources for economists. A living reference that is regularly updated.",
    url: "https://velikov-mihail.github.io/ai-econ-wiki/",
    usedIn: "Resources",
    dateAdded: "2026-05-20"
  },
  {
    id: "deeplearning-agents",
    name: "DeepLearning.AI — Build Interactive Agents with Generative UI",
    type: "Course",
    desc: "Free short course on building agentic applications with generative UI. Complements Module 12 of this course for learners wanting to go deeper into building their own agent-powered tools.",
    url: "https://www.deeplearning.ai/courses/build-interactive-agents-with-generative-ui",
    usedIn: "Module 12",
    dateAdded: "2026-05-20"
  },
  {
    id: "citation-hallucination-checker",
    name: "OBIN Lab — Citation Hallucination Checker",
    type: "Website / Tool",
    desc: "Tool and guide for verifying that AI-generated citations are real and accurate. Critical companion for the academic integrity section of Module 5.",
    url: "https://sites.google.com/site/obintlab/wiki/useful-resources/citation-hallucination-checker",
    usedIn: "Module 5",
    dateAdded: "2026-05-20"
  },
  // ── Original resources ───────────────────────────────────────────────────
  {
    id: "anthropic-docs",
    name: "Anthropic — Claude Code Official Documentation",
    type: "Primary Source",
    desc: "The authoritative source for all Claude Code features, including hooks, MCP, slash commands, settings, and the agent SDK.",
    url: "https://docs.anthropic.com/en/docs/claude-code/overview",
    usedIn: "All modules",
    dateAdded: "2026-01-01"
  },
  {
    id: "anthropic-api",
    name: "Anthropic — Claude API Reference",
    type: "Primary Source",
    desc: "Official API documentation including model IDs, pricing, rate limits, and the Messages API specification.",
    url: "https://docs.anthropic.com/en/api",
    usedIn: "Module 12",
    dateAdded: "2026-01-01"
  },
  {
    id: "blattman",
    name: "Chris Blattman — claudeblattman.com",
    type: "Blog / Researcher",
    desc: "Development economist at University of Chicago. Documents his Claude Code workflows for research writing, iteration, and literature review.",
    url: "https://claudeblattman.com/",
    usedIn: "Modules 0, 5",
    dateAdded: "2026-01-01"
  },
  {
    id: "santanna-workflow",
    name: "Pedro Sant'Anna — 'Claude Code: My Workflow'",
    type: "Blog / Researcher",
    desc: "Econometrician at Vanderbilt/Microsoft Research. Detailed walkthrough of CLAUDE.md structure, custom skills, and full analysis pipeline workflows.",
    url: "https://psantanna.com/claude-code-my-workflow/",
    usedIn: "Modules 3, 4, 6",
    dateAdded: "2026-01-01"
  },
  {
    id: "boris-tane",
    name: "Boris Tane — 'How I Use Claude Code'",
    type: "Blog / Developer",
    desc: "Software developer documenting practical Claude Code workflows for building applications and managing codebases.",
    url: "https://boristane.com/blog/how-i-use-claude-code/",
    usedIn: "Modules 2, 9, 10",
    dateAdded: "2026-01-01"
  },
  {
    id: "simon-willison",
    name: "Simon Willison — simonwillison.net",
    type: "Blog / Developer",
    desc: "Independent developer and AI researcher known for deep technical analysis of AI tools and practical deployment patterns.",
    url: "https://simonwillison.net/",
    usedIn: "Modules 0, 13",
    dateAdded: "2026-01-01"
  },
  {
    id: "genai-for-econ",
    name: "GenAI for Economists",
    type: "Newsletter / Substack",
    desc: "Newsletter focused on practical applications of generative AI in economics research.",
    url: "https://genaiforecon.substack.com/",
    usedIn: "Modules 0, 4",
    dateAdded: "2026-01-01"
  },
  {
    id: "get-calibrated",
    name: "Get Calibrated — 'The Economist in the Machine'",
    type: "Newsletter / Substack",
    desc: "Essay on what AI tools mean for economists' role in research.",
    url: "https://getcalibrated.substack.com/p/the-economist-in-the-machine-what",
    usedIn: "Modules 0, 13",
    dateAdded: "2026-01-01"
  },
  {
    id: "modelling-unforeseeable",
    name: "Modelling an Unforeseeable Future — 'AI as Research Collaborator'",
    type: "Newsletter / Substack",
    desc: "Essay on using AI as a genuine research collaborator rather than just a tool.",
    url: "https://modelinganunforeseeablefuture.substack.com/p/ai-as-a-research-collaborator-not",
    usedIn: "Modules 0, 4",
    dateAdded: "2026-01-01"
  },
  {
    id: "ted-svo",
    name: "Ted Svo — 'Agentic Everything'",
    type: "Newsletter / Substack",
    desc: "Analysis of the shift to agentic AI workflows. Key inspiration for the agents module.",
    url: "https://tedsvo.substack.com/p/agentic-everything",
    usedIn: "Module 12",
    dateAdded: "2026-01-01"
  },
  {
    id: "reskilled",
    name: "ReSkilled",
    type: "Newsletter / Substack",
    desc: "Newsletter focused on AI tools for researchers and knowledge workers, with practical coverage of Claude Code.",
    url: "https://reskilled.substack.com/",
    usedIn: "Modules 1, 2",
    dateAdded: "2026-01-01"
  },
  {
    id: "mixtapetools",
    name: "Scott Cunningham — MixtapeTools (skills)",
    type: "GitHub Repository",
    desc: "Collection of Claude Code skills for causal inference methods (DiD, RDD, IV). By the author of 'Causal Inference: The Mixtape'.",
    url: "https://github.com/scunning1975/MixtapeTools/tree/main/skills",
    usedIn: "Module 6",
    dateAdded: "2026-01-01"
  },
  {
    id: "chernycode",
    name: "meleantonio — ChernyCode",
    type: "GitHub Repository",
    desc: "Example repository demonstrating Claude Code workflows and CLAUDE.md patterns for economics research.",
    url: "https://github.com/meleantonio/ChernyCode",
    usedIn: "Modules 3, 9",
    dateAdded: "2026-01-01"
  },
  {
    id: "obsidian-vault",
    name: "Hugo Sant'Anna — Obsidian Vault Manager",
    type: "GitHub Repository",
    desc: "Tool for managing Obsidian note-taking vaults using Claude Code.",
    url: "https://github.com/hugosantanna/obsidian-vault-manager",
    usedIn: "Module 10",
    dateAdded: "2026-01-01"
  },
  {
    id: "guide2econra",
    name: "Alalalalaki — Guide2EconRA",
    type: "GitHub Repository",
    desc: "Comprehensive guide to software tools and workflows for economics research assistants.",
    url: "https://github.com/Alalalalaki/Guide2EconRA",
    usedIn: "Modules 9, 11",
    dateAdded: "2026-01-01"
  },
  {
    id: "cc-showcase",
    name: "ChrisWiles — claude-code-showcase",
    type: "GitHub Repository",
    desc: "Showcase of Claude Code capabilities and example workflows.",
    url: "https://github.com/ChrisWiles/claude-code-showcase",
    usedIn: "Multiple modules",
    dateAdded: "2026-01-01"
  },
  {
    id: "awesome-econ-ai",
    name: "meleantonio — Awesome Econ AI Stuff",
    type: "Website / Curated List",
    desc: "Comprehensive curated list of AI tools and resources for economists.",
    url: "https://meleantonio.github.io/awesome-econ-ai-stuff/",
    usedIn: "Resources, Module 13",
    dateAdded: "2026-01-01"
  },
  {
    id: "aei-tools",
    name: "AEI — AI Tools for Economists and Policy Analysts",
    type: "Website / Policy",
    desc: "American Enterprise Institute overview of AI tools relevant to economists and policy analysts.",
    url: "https://www.aei.org/technology-and-innovation/ai-tools-for-economists-and-policy-analysts/",
    usedIn: "Modules 0, 13",
    dateAdded: "2026-01-01"
  },
  {
    id: "vibe",
    name: "Gexijin — Vibe",
    type: "Website / Tool",
    desc: "AI-assisted data analysis and visualisation tool.",
    url: "https://gexijin.github.io/vibe/",
    usedIn: "Module 10",
    dateAdded: "2026-01-01"
  },
  {
    id: "clo-author",
    name: "Hugo Sant'Anna — CLO Author",
    type: "Website / Tool",
    desc: "AI-assisted academic writing workflow demonstration.",
    url: "https://hsantanna.org/clo-author/#how-it-works",
    usedIn: "Module 5",
    dateAdded: "2026-01-01"
  },
  {
    id: "ape-lab",
    name: "APE Lab",
    type: "Website / Lab",
    desc: "Applied Policy and Economics Lab demonstrating AI integration in development research and policy analysis.",
    url: "https://ape.socialcatalystlab.org/",
    usedIn: "Modules 4, 13",
    dateAdded: "2026-01-01"
  }
];
