# Agentic Software Development Template

Build software with AI agents using durable Memory Bank + explicit multi-phase Workflows. This template keeps context close to code, makes execution visible, and keeps docs and diffs PR-friendly.

**What You Get**
- Memory Bank: tiered, structured markdown under `agents/memory-bank/**` with validation, stamping, and drift checks.
- Workflows: diff-able `agents/workflows/**` guides for the plan → build → verify loop plus supporting prompts.
- Agent scripts: repo-native helpers under `agents/scripts/**` for loading context, searching files, validating canonicals, and stamping updates.

**Who This Helps**
- Individuals or teams who want agents (and humans) to work predictably.
- Folks who value durable context, visible plans, and change validation.

## Start Here
1. Read [`AGENTS.md`](AGENTS.md) for the complete repo-native agent obligations and tooling overview.
2. Kick off each task with `node agents/scripts/load-context.mjs` to print the required Memory Bank + workflow files.
3. Follow the current phase checklist in `agents/workflows/default.workflow.md` and log reflections after every phase.

## Working a Task (Plan → Build → Verify)
- **Plan**: clarify scope, capture Given/When/Then acceptance criteria, list non-goals, and record the plan reflection via `node agents/scripts/append-memory-entry.mjs --target active --plan "..."`
- **Build**: apply focused changes, keep unrelated edits out, and run `npm run phase:check` (runs the lint placeholder and `node agents/scripts/check-code-quality.mjs`).
- **Verify**: gather a line-numbered diff with `node agents/scripts/git-diff-with-lines.mjs`, run targeted tests, update canonicals, then finish with `npm run agent:finalize` (formats markdown, validates the Memory Bank, checks drift, and reruns quality checks).
- After each phase, append a 3-line reflection to `agents/memory-bank/active.context.md`.
- When Memory Bank canonicals change, stamp updates with `node agents/scripts/update-memory-stamp.mjs` before shipping.

## Repository Layout
- `agents/memory-bank.md`: Memory Bank overview plus stamped `generated_at` + `repo_git_sha` for drift tracking.
- `agents/memory-bank/**`: Canonical context (project, product, tech, decisions, patterns, progress, active reflections).
- `agents/workflows/**`: Default and pattern-specific workflows that drive the phase gates.
- `agents/scripts/**`: Context loaders, search utilities, validation/stamping helpers, and quality checks (`constants.js` centralizes path settings).
- `AGENTS.md`: Quick orientation for agents operating in this template.

## Commands & Scripts
- `node agents/scripts/load-context.mjs`: Print the required Memory Bank/workflow files for the current task.
- `node agents/scripts/list-files-recursively.mjs` and `node agents/scripts/smart-file-query.mjs`: Preferred file discovery helpers (use shell fallbacks for multi-file reads until a dedicated reader lands).
- `node agents/scripts/append-memory-entry.mjs`: Append reflections to `active.context.md`.
- `node agents/scripts/update-memory-stamp.mjs`: Stamp canonicals with the latest git SHA after updates.
- `npm run memory:validate`: Ensure referenced paths in Memory Bank files exist.
- `npm run memory:drift`: Compare the stamped SHA in `agents/memory-bank.md` to `HEAD` for tracked directories.
- `npm run phase:check`: Run the lint placeholder (`npm run lint:fix`) and repo quality checks (`node agents/scripts/check-code-quality.mjs`).
- `npm run agent:finalize`: Format markdown, validate the Memory Bank, check drift, and run the phase check in one pass.

## Adopt This Template
1. Copy `agents/` and `AGENTS.md` into your repository root (or fork this template).
2. Update `agents/scripts/constants.js`:
   - `PATH_PREFIXES`: directories to validate (e.g., `src/`, `packages/`).
   - `DRIFT_TRACKED_DIRS`: directories whose changes should trigger drift warnings.
3. Fill in Memory Bank canonicals (project brief, product/tech context) and keep `active.context.md` flowing during work.
4. Align workflow prompts to your stack or add new workflows under `agents/workflows/**` as patterns emerge.
5. Gate PRs by running `npm run agent:finalize` locally or in CI.

## Tips & Troubleshooting
- Validation failures: update incorrect paths in Memory Bank files or adjust `PATH_PREFIXES`/`ROOT_BASENAMES` in `agents/scripts/constants.js`.
- Drift failures: review canonical changes, then refresh the stamp via `node agents/scripts/update-memory-stamp.mjs`.
- Missing helpers: `read-files.mjs` is referenced in process docs but not yet included; rely on your editor or shell for now when streaming multiple files.
- Git and tooling: workflows are tool-agnostic—use your preferred git client or MCP integration while keeping the Memory Bank and reflections current.
