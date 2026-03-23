/* =============================================================
   Claude Code: From Zero to Mastery — Main JavaScript
   ============================================================= */

/* ─── Theme Toggle ─────────────────────────────────────────────── */
(function initTheme() {
  const saved = localStorage.getItem('cc-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('cc-theme', next);
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
  });
}

/* ─── Sidebar Mobile Toggle ────────────────────────────────────── */
function toggleSidebar() {
  document.querySelector('.sidebar')?.classList.toggle('open');
}

/* ─── Progress Tracking ────────────────────────────────────────── */
const TOTAL_MODULES = 14;

function getProgress() {
  const raw = localStorage.getItem('cc-progress');
  return raw ? JSON.parse(raw) : {};
}

function markComplete(moduleId) {
  const progress = getProgress();
  progress[moduleId] = true;
  localStorage.setItem('cc-progress', JSON.stringify(progress));
  updateProgressUI();
  const btn = document.getElementById('complete-btn');
  if (btn) {
    btn.textContent = '✓ Completed!';
    btn.classList.add('completed');
    btn.disabled = true;
  }
}

function updateProgressUI() {
  const progress = getProgress();
  const completed = Object.keys(progress).filter(k => progress[k]).length;
  const pct = Math.round((completed / TOTAL_MODULES) * 100);

  document.querySelectorAll('.progress-fill').forEach(el => {
    el.style.width = pct + '%';
  });
  document.querySelectorAll('.progress-text').forEach(el => {
    el.textContent = `${completed} / ${TOTAL_MODULES} modules completed`;
  });
  // Mark sidebar links as done
  document.querySelectorAll('.sidebar-link[data-module]').forEach(link => {
    const id = link.getAttribute('data-module');
    if (progress[id]) {
      link.querySelector('.badge')?.remove();
      if (!link.querySelector('.done-check')) {
        const check = document.createElement('span');
        check.className = 'done-check';
        check.textContent = '✓';
        link.appendChild(check);
      }
    }
  });
  // Update module cards on landing
  document.querySelectorAll('.module-card[data-module]').forEach(card => {
    const id = card.getAttribute('data-module');
    if (progress[id]) {
      const status = card.querySelector('.module-status');
      if (status) status.innerHTML = '<span class="done-check" style="font-size:1.1rem">✓</span>';
    }
  });
}

/* ─── Tabs ─────────────────────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const panels  = container.querySelectorAll('.tab-panel');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = container.querySelector('#' + btn.getAttribute('data-tab'));
        if (target) target.classList.add('active');
      });
    });
  });
}

/* ─── Copy Code Button ─────────────────────────────────────────── */
function initCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    if (pre.querySelector('.copy-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code')?.textContent || pre.textContent;
      navigator.clipboard.writeText(code.trim()).then(() => {
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
}

/* ─── Accordion ────────────────────────────────────────────────── */
function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const body = btn.nextElementSibling;
      if (body) body.classList.toggle('open', !expanded);
    });
  });
}

/* ─── Jargon Tooltips ──────────────────────────────────────────── */
const JARGON = {
  "CLI": "Command Line Interface — a text-based way to give instructions to your computer by typing commands, instead of clicking buttons.",
  "terminal": "A program that lets you type commands directly to your computer. On Mac it's called 'Terminal', on Windows it's 'Command Prompt' or 'PowerShell', on Linux it's usually called 'Terminal' or 'Bash'.",
  "repository": "A folder (often on GitHub) that stores all the files for a project, along with the full history of every change ever made. Often shortened to 'repo'.",
  "repo": "Short for repository — a project folder tracked by Git.",
  "Git": "A version control system — software that tracks every change you make to files, so you can see what changed, when, and undo mistakes. Think of it as 'track changes' for your code.",
  "GitHub": "A website that hosts Git repositories online, making it easy to share code, collaborate, and back up your work. Free for public projects.",
  "commit": "A saved snapshot of your changes in Git. Like pressing 'Save' but with a message explaining what you changed and why.",
  "branch": "A parallel version of your project where you can experiment without affecting the main version. Like working on a copy of a document.",
  "API": "Application Programming Interface — a way for different software programs to talk to each other. Think of it as a waiter: you (the program) tell the waiter (API) what you want, and it brings it from the kitchen (the other program).",
  "LLM": "Large Language Model — the type of AI behind Claude. It's a neural network trained on enormous amounts of text to understand and generate human language.",
  "MCP": "Model Context Protocol — a standard way to connect Claude to external tools and data sources (like your database, calendar, or files), so Claude can take actions in the real world.",
  "hook": "An automated action that runs when something specific happens. For example, a hook can run a spell-check every time you save a file. You set it up once and it runs automatically.",
  "CLAUDE.md": "A special instruction file you create in your project folder that tells Claude about your project — its structure, conventions, and how you want Claude to behave. Like a briefing document for your AI assistant.",
  "slash command": "A shortcut that starts with / that you type to Claude to trigger a specific behavior, like /help or /commit. Saves time on common tasks.",
  "skill": "A reusable custom instruction set you can trigger with a slash command. Like creating a macro or template for common tasks.",
  "prompt": "The message or instruction you send to Claude. The quality of your prompt greatly affects the quality of Claude's response.",
  "context window": "The amount of text Claude can 'see' at one time — including your conversation history, files, and instructions. Think of it as Claude's working memory. Once full, older content is forgotten.",
  "agentic": "When Claude works autonomously across multiple steps to complete a complex task, rather than just answering one question. It can use tools, run code, and make decisions along the way.",
  "token": "The basic unit Claude uses to process text — roughly ¾ of a word. Pricing and context limits are measured in tokens.",
  "npm": "Node Package Manager — a tool for installing JavaScript software packages. You use it to install Claude Code.",
  "Node.js": "A JavaScript runtime environment needed to run Claude Code on your computer.",
  "Markdown": "A simple way to format text using symbols: **bold**, *italic*, # Heading, - bullet point. Used in README files and CLAUDE.md.",
  "README": "A file (usually README.md) at the top of a project folder that explains what the project is and how to use it.",
  "do file": "In Stata, a .do file is a script containing Stata commands — like a recipe of analysis steps that can be run automatically.",
  "R script": "A .R file containing R commands for data analysis, cleaning, or visualization.",
  "Jupyter notebook": "An interactive document that mixes code, text, and outputs. Popular in Python for data science.",
  "LaTeX": "A document preparation system popular in academia for writing papers with equations, references, and precise formatting.",
  "Stata": "A statistical software package widely used in economics, public health, and social science research.",
  "agent": "An AI system that can take sequences of actions autonomously to complete a goal, using tools like web search, code execution, or file editing.",
  "environment variable": "A named value stored in your computer's system (not in your code files) — used to store secret keys, settings, and configuration. Like a sticky note your computer reads.",
  "SSH": "Secure Shell — a way to securely connect to and control another computer (like a remote server) over the internet, using the terminal.",
  "Docker": "A tool for packaging software with all its dependencies into a 'container', so it runs the same way on any computer.",
  "diff": "Short for 'difference' — a display showing exactly what changed between two versions of a file (additions in green, deletions in red).",
  "merge conflict": "When Git can't automatically combine changes from two different branches because the same lines were edited differently. Requires manual resolution.",
  "regression": "In statistics, a method to estimate the relationship between variables. In Git/code, going back to a previous version.",
  "IDE": "Integrated Development Environment — software with built-in tools for writing code (like VS Code, RStudio, Stata's do-file editor).",
  "VS Code": "Visual Studio Code — a free, popular code editor made by Microsoft, with extensions for almost every programming language.",
  "shell": "Another name for the terminal/command line — the program that interprets your typed commands.",
  "bash": "A specific type of shell (command interpreter) commonly used on Mac and Linux.",
  "PowerShell": "A command-line shell for Windows, more powerful than the basic Command Prompt.",
  "WSL": "Windows Subsystem for Linux — lets you run a Linux environment inside Windows, which is useful for development tools that work best on Linux.",
  "stdout": "Standard output — the default place a program sends its text output (usually your terminal screen).",
  "stderr": "Standard error — where programs send error messages (also usually your terminal).",
  "JSON": "JavaScript Object Notation — a simple text format for storing structured data, like a dictionary in Python or a list in R. Commonly used for settings files.",
  "YAML": "Yet Another Markup Language — another text format for configuration files, simpler than JSON. Uses indentation to show structure.",
  "dependency": "Software that your project needs in order to work. Like how a Stata do-file might require a specific package (e.g., outreg2).",
  "open source": "Software whose source code is freely available for anyone to read, use, modify, and share.",
  "permissions": "Controls over what actions Claude Code is allowed to take automatically vs. what requires your approval first.",
  "glob pattern": "A way to describe multiple files using wildcards. E.g., '*.do' means all Stata do files; '**/*.csv' means all CSV files in any subfolder.",
  "regex": "Regular expression — a pattern language for searching and matching text. Powerful but complex.",
};

function initJargonTooltips() {
  const mainContent = document.querySelector('.main-content, .hero');
  if (!mainContent) return;

  // Only process text nodes in p, li, td elements (not code blocks)
  const walkElements = ['p', 'li', 'td', 'h2', 'h3', 'h4'];

  walkElements.forEach(tag => {
    mainContent.querySelectorAll(tag).forEach(el => {
      // Skip if inside pre/code
      if (el.closest('pre, code, .no-tooltip')) return;
      let html = el.innerHTML;
      // Sort by length descending to match longer terms first
      const terms = Object.keys(JARGON).sort((a, b) => b.length - a.length);
      terms.forEach(term => {
        // Only replace first occurrence of each term
        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(?<![\\w>"/=])${escapedTerm}(?![\\w<"/=])`, 'g');
        let replaced = false;
        html = html.replace(re, (match) => {
          if (replaced) return match;
          // Don't wrap if already inside a tooltip span
          replaced = true;
          return `<span class="jargon-term" data-term="${term}">${match}</span>`;
        });
      });
      el.innerHTML = html;
    });
  });

  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.id = 'jargon-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  document.body.appendChild(tooltip);

  let hideTimer;

  document.addEventListener('mouseover', e => {
    const term = e.target.closest('.jargon-term');
    if (!term) return;
    clearTimeout(hideTimer);
    const def = JARGON[term.getAttribute('data-term')];
    if (!def) return;
    tooltip.innerHTML = `<strong class="tt-term">${term.textContent}</strong><p class="tt-def">${def}</p>`;
    tooltip.classList.add('visible');
    positionTooltip(e, term, tooltip);
  });

  document.addEventListener('mousemove', e => {
    if (e.target.closest('.jargon-term') || e.target.closest('#jargon-tooltip')) {
      positionTooltip(e, null, tooltip);
    }
  });

  document.addEventListener('mouseout', e => {
    const to = e.relatedTarget;
    if (to && (to.closest('.jargon-term') || to.closest('#jargon-tooltip'))) return;
    hideTimer = setTimeout(() => tooltip.classList.remove('visible'), 200);
  });
}

function positionTooltip(e, term, tooltip) {
  const x = e.clientX;
  const y = e.clientY;
  const tw = tooltip.offsetWidth;
  const th = tooltip.offsetHeight;
  const vw = window.innerWidth;
  let left = x + 12;
  let top  = y + 20;
  if (left + tw > vw - 16) left = x - tw - 12;
  if (top  + th > window.innerHeight - 16) top = y - th - 12;
  tooltip.style.left = Math.max(8, left) + 'px';
  tooltip.style.top  = Math.max(8, top)  + 'px';
}

/* ─── Smooth anchor scrolling ──────────────────────────────────── */
function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─── Active sidebar link (scroll spy) ────────────────────────── */
function initScrollSpy() {
  const headings = document.querySelectorAll('.anchor-heading');
  if (!headings.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.toc a').forEach(a => {
          a.style.fontWeight = a.getAttribute('href') === '#' + id ? '700' : '';
          a.style.color = a.getAttribute('href') === '#' + id ? 'var(--cc-orange)' : '';
        });
      }
    });
  }, { rootMargin: '-60px 0px -70% 0px' });
  headings.forEach(h => observer.observe(h));
}

/* ─── Init all ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Set theme button text
  const theme = document.documentElement.getAttribute('data-theme');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  });

  // Set complete button state
  const currentModule = document.body.getAttribute('data-module');
  if (currentModule) {
    const progress = getProgress();
    const btn = document.getElementById('complete-btn');
    if (btn && progress[currentModule]) {
      btn.textContent = '✓ Completed!';
      btn.classList.add('completed');
      btn.disabled = true;
    }
  }

  initTabs();
  initCopyButtons();
  initAccordion();
  initJargonTooltips();
  initAnchors();
  initScrollSpy();
  updateProgressUI();
});
