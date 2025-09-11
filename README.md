# Agentic Software Development Template

Build software with AI agents using durable Memory Bank + explicit multi‑phase Workflows. This template gives you a lightweight, PR‑friendly way to capture knowledge, steer execution, and validate changes.

**Who This Is For**
- Individuals or teams who want agents (and humans) to work predictably.
- Folks who value durable context, visible plans, and change validation.

**What You Get**
- Memory Bank: tiered, structured markdown under `agents/memory-bank/**` with validation and drift checks.
- Workflows: clear, diff‑able process files under `agents/workflows/**` (plan → build → verify).
- Scripts: `npm run memory:validate` and `npm run memory:drift` to keep context correct and in sync with git.

**Start Here**
- Read `AGENTS.md` for the repo‑native agent system overview.
- Open `agents/workflows/default.workflow.md` and begin at the current phase.
- Keep `agents/memory-bank/*` updated as you work (Reflexion notes after each phase).
  - This happens automatically when using agentic tools such as Codex

**Repository Layout**
- `agents/memory-bank.md`: Memory Bank overview + stamped git SHA for drift checks.
- `agents/memory-bank/**`: Canonical context (project, product, tech, patterns, ADRs, progress, active context).
- `agents/workflows/**`: Process files that drive multi‑phase execution.
- `agents/scripts/**`: Node scripts to validate paths and check drift; tweak `constants.js` for your repo.
- `AGENTS.md`: Quick orientation for agents.

**Quickstart**
1) Use this as a template or copy `agents/` + `AGENTS.md` into your repo.
2) Adjust `agents/scripts/constants.js`:
   - `PATH_PREFIXES`: top‑level code paths to validate (e.g., `src/`, `packages/`).
   - `DRIFT_TRACKED_DIRS`: directories whose changes should trigger a drift warning.
3) Update Memory Bank canonicals:
   - Fill `agents/memory-bank/project.brief.md`, `product.context.md`, `tech.context.md`.
   - Keep `agents/memory-bank/active.context.md` and `progress.log.md` flowing during work.
4) Run validation anytime:
   - `npm run memory:validate` — verifies referenced paths exist in all Memory files.
   - `npm run memory:drift` — checks stamped SHA vs HEAD for tracked areas.
5) Execute work via the workflow:
   - Follow checklists in `agents/workflows/default.workflow.md`.
   - After each phase, append a 3‑line Reflexion to `active.context.md` and a brief entry to `progress.log.md`.

**How It Works**
- Memory Bank (Durable Context)
  - Tiers: Task Context (ephemeral) → Active Context Ring (rolling) → Canonical Files (PR‑reviewed).
  - Retrieval Policy: always include `project.brief.md`, recent `progress.log.md`, and `active.context.md`; add `tech.context.md`, `system.patterns.md`, and ADRs as relevant.
  - Stamping: update `agents/memory-bank.md` front matter with `generated_at` and `repo_git_sha` when shipping a change touching canonicals.
- Workflows (Explicit Phases)
  - Phases: plan → build → verify.
  - Synthesis: when a procedural pattern in `system.patterns.md` proves valuable, modify/create a workflow (template provided). System‑impacting changes may warrant an ADR under `agents/memory-bank/decisions/`.

**Adopt In An Existing Repo**
- Copy `agents/` and `AGENTS.md` into your project root.
- Adjust `agents/scripts/constants.js` to reflect your code layout.
- Align default workflow prompts to your stack; add more workflows if needed.
- Seed `project.brief.md` and product/tech context with your project’s facts.
- Gate PRs by running `npm run memory:validate` and `npm run memory:drift` locally or in CI.

**Commands**
- `npm run memory:validate`: Scans Memory Bank markdown for inline code/path references and ensures they exist.
- `npm run memory:drift`: Compares stamped SHA in `agents/memory-bank.md` to `HEAD` for tracked dirs and flags drift.

**Tips & Troubleshooting**
- Validation failures: fix bad paths in memory files or update `PATH_PREFIXES`/`ROOT_BASENAMES` in `agents/scripts/constants.js`.
- Drift failures: update `generated_at` and `repo_git_sha` in `agents/memory-bank.md` after reviewing canonical changes; rerun the check.
- Git operations: prefer GitHub MCP or your standard tooling; workflows are tool‑agnostic.
