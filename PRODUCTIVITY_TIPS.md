# How Recent AI Advances Can Make Your Workflows Even More Productive

A brief per-project analysis of how the latest Claude capabilities can amplify each workflow.

---

## 1. Literature Review (Midwest Niche Ag Markets)

**Current workflow:** Three-agent verification (A reads, B reads, C cross-compares), one agent per paper, all outputs traced to PDF source text.

**What's new that helps:**

- **Extended thinking (Claude Opus 4.7)** — The verifier agent (C) can now reason explicitly about discrepancies before resolving them, producing auditable reasoning chains rather than just a verdict. Better for complex cases where A and B differ significantly.
- **Large context windows (200k tokens)** — You can now give the verifier agent multiple full PDFs in a single context, reducing the need to split papers across sessions.
- **Native PDF understanding** — Claude can now read PDFs directly without needing pymupdf extraction. This removes an entire pipeline step and eliminates OCR-induced transcription errors before they enter the workflow.
- **Batch API** — Instead of running 30 agents manually, the Batch API can dispatch all 30 agents in a single API call and collect results asynchronously. Cuts session setup time dramatically.

**Immediate action:** Upgrade the verifier agent (C) to Opus with extended thinking. The `think` budget should be proportional to the number of discrepancies flagged between A and B.

---

## 2. LCA Typology Project (voice.md + CLAUDE.md as living memory)

**Current workflow:** voice.md encodes writing style; 700+ line CLAUDE.md as session memory; citation verification with SUPPORTED/NOT SUPPORTED verdicts.

**What's new that helps:**

- **Project memory (Claude.ai Pro/Max)** — Cross-session memory is now available in Claude.ai. For the terminal Claude Code workflow, a well-maintained CLAUDE.md remains the most reliable pattern — but you can now supplement it with cloud memory for shared co-author sessions.
- **Improved instruction following** — Claude 4-series models follow style instructions more precisely than earlier models. Your voice.md constraints (e.g., "average sentence length 18–22 words") are now more reliably applied.
- **Citations from thinking** — With extended thinking, Claude can show which passages in the cited paper it evaluated before returning SUPPORTED/NOT SUPPORTED, making the verdict auditable rather than opaque.

**Immediate action:** Append to voice.md: "If you are uncertain whether an edit preserves my voice, show the before/after side by side and flag it rather than applying it silently."

---

## 3. Fertilizer Adoption Paper (Reviewer Responses, Multi-Document Consistency)

**Current workflow:** ~80% Read/Grep/Bash (investigating); number tracing to Stata logs; multi-document diff; reviewer theme consolidation.

**What's new that helps:**

- **Tool use improvements** — Claude 4-series is significantly better at chaining Read → Grep → Bash in a single session without losing the thread. Fewer "I've lost context" failures in long verification sessions.
- **Structured output (JSON mode)** — Reviewer consolidation can now be requested as structured JSON (reviewer ID → theme → severity → requires new analysis?), making it machine-readable and easier to hand off to a co-author.
- **Computer use (beta)** — If your Stata output is in a GUI application rather than log files, Claude can now read it directly from screenshots. Eliminates the need to export intermediary CSVs for verification.

**Immediate action:** Add a CLAUDE.md rule: "When tracing a statistic, return output as JSON: {claim, file, line_number, verbatim_value, match: true/false}. This makes discrepancy detection scriptable."

---

## 4. Tanzania Panel (Stata + Python Validation Pipeline)

**Current workflow:** Python replicates Stata pipeline to catch data construction bugs; per-session CLAUDE.md + MEMORY.md; Plan → Code → Validate → Run → Fix → Document cycle.

**What's new that helps:**

- **Code execution (Artifacts)** — Claude can now run Python directly in session and show output. The Python validation script can be run interactively, with Claude interpreting discrepancy output in the same turn.
- **Longer context for code review** — The full 3,000-line Stata pipeline and 1,100-line Python script can now fit in a single context window. Claude can reason across both files simultaneously, spotting inconsistencies that session-by-session review missed.
- **Better diff reasoning** — Claude 4-series is better at reading two code files and identifying semantic differences (e.g., "this variable is constructed differently in lines 45 and 312 of the Stata file").

**Immediate action:** Move the Python validation script to a Claude skill (`/validate-pipeline`) so it runs automatically at the end of every coding session.

---

## 5. HSSC Evidence Awareness (Forensic Document Verification)

**Current workflow:** git show to extract specific .docx versions; parse with python-docx; verify every claim in appeal letter against manuscript; FLAG FOR AUTHOR on anything unverifiable.

**What's new that helps:**

- **Native document reading** — Claude can now read .docx files without needing python-docx extraction as an intermediary. Directly compare two document versions in a single prompt.
- **Grounded citations in thinking** — With extended thinking, Claude produces an explicit reasoning chain: "I searched paragraph 3, paragraph 7, and the conclusion — the claim does not appear in any of them." This is auditable, unlike the previous opaque NOT FOUND verdicts.
- **Hallucination guard improvements** — Claude 4-series is measurably less likely to generate plausible-sounding but fabricated manuscript content when producing replacement response text. Still verify with verbatim quote requirement, but the baseline failure rate has dropped.

**Immediate action:** Add to CLAUDE.md: "Before writing any replacement text for the appeal letter, you must first output: VERBATIM QUOTE: [quote] at PARAGRAPH: [number]. If you cannot find a supporting quote, write REWRITE NEEDED: [reason]. Never produce replacement text without this preceding step."

---

## 6. Emeritas (SaaS Product with 8-Head Adversarial Review)

**Current workflow:** 8 parallel review agents (Engineering, InfoSec, Legal, Privacy, CS, Scientist, Brand, Product); CLAUDE.md as codified guardrails; TECHNICAL_DEBT.md; deferred burn payment pattern.

**What's new that helps:**

- **Interleaved thinking in agents** — Each review agent can now use extended thinking to reason through edge cases before flagging issues. InfoSec agent reasoning through OWASP checklist items becomes auditable.
- **Agent SDK + Projects** — The Anthropic Agent SDK now supports structured multi-agent orchestration. The 8-head review can be defined as a reusable workflow rather than a manual prompt, making it consistently reproducible across PRs.
- **Prompt caching** — The shared context (CLAUDE.md rules, TECHNICAL_DEBT.md, codebase overview) can be cached, so each of the 8 agents pays only the incremental token cost rather than re-processing the full context. Cuts review cost by ~60% for large codebases.
- **Claude.ai Projects** — Store the full CLAUDE.md, voice.md, and evaluation rubric in a Claude.ai Project so they persist across web sessions without relying only on terminal-based context loading.

**Immediate action:** Convert the 8-head review into a Claude skill (`/adversarial-review`) that loads agent definitions from `.claude/commands/adversarial-review.md`. This makes it one command rather than a manually assembled prompt.

---

## Cross-Cutting Upgrades (Apply to All Projects)

| Advance | How to use it | Applies to |
|---|---|---|
| **Extended thinking** | Add `think` budget to verifier and auditor agents | Projects 1, 3, 5 |
| **Native PDF/DOCX reading** | Remove pymupdf and python-docx intermediaries | Projects 1, 5 |
| **Batch API** | Dispatch all parallel agents in one API call | Projects 1, 4, 6 |
| **Prompt caching** | Cache CLAUDE.md + shared context across agent calls | All projects |
| **Structured output (JSON)** | Make verification output machine-readable | Projects 3, 5 |
| **Agent SDK** | Define reusable multi-agent workflows as code | Projects 1, 6 |
| **Computer use** | Read GUI outputs (Stata, Excel) directly | Project 4 |

---

*Last updated: 2026-05-20*
