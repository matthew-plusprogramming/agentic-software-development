## 🔧 Start Here (for AI agents)

Before modifying code, use the repo-native agent system under `agents/`.

- Memory Bank overview: `agents/memory-bank.md`
- Workflows overview: `agents/workflows.md`

## 🔑 Memory Bank

The Memory Bank provides durable, structured context for all tasks.

- Canonical overview and policy: `agents/memory-bank.md`
- Canonical tiered files: `agents/memory-bank/` (PR‑reviewed)

Policies (canonical, de‑duplicated)

- Storage tiers and Retrieval Policy live in `agents/memory-bank.md` and should not be duplicated elsewhere.
- Retrieval Gate: always load `agents/workflows/default.workflow.md`, `agents/memory-bank/project.brief.md`, recent `agents/memory-bank/progress.log.md`, and `agents/memory-bank/active.context.md`. Include `tech.context.md` and `system.patterns.md` only when they contain substantive, non‑placeholder content.
- For system‑impacting changes: open an ADR stub PR using `agents/memory-bank/decisions/ADR-0000-template.md`.
- After each phase: append a 3‑line Reflexion to `agents/memory-bank/active.context.md`; when stable, roll up learnings into an ADR or `agents/memory-bank/system.patterns.md`.

Update Requirements (per task)

- Update relevant canonical files under `agents/memory-bank/` to reflect changes.
- Stamp `agents/memory-bank.md` front matter:
  - `generated_at`: today (YYYY‑MM‑DD)
  - `repo_git_sha`: `git rev-parse HEAD`
- Validate and check drift:
  - `npm run memory:validate` — verify referenced paths exist across all memory files
  - `npm run memory:drift` — ensure stamped SHA matches or intentionally update
- Include Memory Bank updates in the same PR.

## 🧭 Workflow Process List

One LLM executes work by following process markdowns in `agents/workflows/`.

- Phases: plan → build → verify
- Each process file defines checklists, inputs/outputs, and quality gates.
- The LLM loads the process .md (+ linked partials), executes the current phase, writes artifacts, updates phase state, advances when gates pass, and logs a short Reflexion to the Memory Bank.
- External tools: prefer GitHub MCP for git workflows.

Start with: `agents/workflows/default.workflow.md`
