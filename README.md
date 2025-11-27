# Agentic Software Development Template

Build software with AI agents using a durable Memory Bank, explicit multi-phase Workflows, and per-task specs. This template keeps context close to code, makes execution visible, and keeps docs and diffs PR-friendly.

**What You Get**
- Memory Bank: tiered, structured markdown under `agents/memory-bank/**` with validation, stamping, and drift checks.
- Workflows: diff-able `agents/workflows/**` guides for the Requirements → Design → Implementation Planning → Execution loop plus supporting prompts.
- Task specs: per-task files under `agents/ephemeral/task-specs/` that hold requirements (EARS), design notes, implementation plan, and execution log.
- Agent scripts: repo-native helpers under `agents/scripts/**` for loading context, searching files, validating canonicals, and stamping updates.

**Who This Helps**
- Individuals or teams who want agents (and humans) to work predictably.
- Folks who value durable context, visible plans, and change validation.

## Start Here
1. Read [`AGENTS.md`](AGENTS.md) for the complete repo-native agent obligations and tooling overview.
2. Kick off each task with `node agents/scripts/load-context.mjs` to print the required Memory Bank + workflow files.
3. Create a per-task spec with `node agents/scripts/reset-active-context.mjs --slug <task-slug> [--title "..."]` to scaffold Requirements/Design/Implementation Planning/Execution.
4. Follow the current phase checklist in `agents/workflows/default.workflow.md` and log reflections after every phase via `node agents/scripts/append-memory-entry.mjs`.

## Working a Task (Requirements → Design → Implementation Planning → Execution)
- **Requirements**: author EARS-format user stories + acceptance criteria, list non-goals, constraints/risks, and invariants; record them in the task spec.
- **Design**: capture architecture notes, Mermaid sequence diagrams for primary flows, interface contracts, and edge/failure behaviors in the task spec.
- **Implementation Planning**: break down work into discrete tasks with outcomes/dependencies, map tests to EARS criteria, and ensure traceability.
- **Execution**: track progress against tasks, refine the spec as reality changes, gather evidence/tests, and validate outcomes.
- Append reflections for phases in `agents/ephemeral/active.context.md` using the append script.
- When Memory Bank canonicals change, stamp updates with `node agents/scripts/update-memory-stamp.mjs` before shipping.

## Repository Layout
- `agents/memory-bank.md`: Memory Bank overview plus stamped `generated_at` + `repo_git_sha` for drift tracking.
- `agents/memory-bank/operating-model.md`: Canonical description of the four-phase loop and expectations.
- `agents/memory-bank/task-spec.guide.md`: Guidance and examples for per-task specs.
- `agents/memory-bank/**`: Canonical context (project, product, tech, decisions, patterns, progress, active reflections).
- `agents/workflows/**`: Default and pattern-specific workflows that drive the phase gates.
- `agents/scripts/**`: Context loaders, search utilities, validation/stamping helpers, and quality checks (`constants.js` centralizes path settings).
- `agents/ephemeral/task-specs/**`: Per-task specs (Requirements/Design/Implementation Planning/Execution) created per task.
- `AGENTS.md`: Quick orientation for agents operating in this template.

## Commands & Scripts
- `node agents/scripts/load-context.mjs`: Print the required Memory Bank/workflow files for the current task.
- `node agents/scripts/list-files-recursively.mjs` and `node agents/scripts/smart-file-query.mjs`: Preferred file discovery helpers.
- `node agents/scripts/reset-active-context.mjs --slug <task-slug> [--title "..."] [--date YYYY-MM-DD]`: Create a per-task spec and refresh the active context index.
- `node agents/scripts/append-memory-entry.mjs --requirements "..." --design "..." --implementation "..." --execution "..."`: Append reflections to `agents/ephemeral/active.context.md` (at least one flag required).
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
3. Fill in Memory Bank canonicals (project brief, product/tech context) and keep per-task specs flowing during work.
4. Align workflow prompts to your stack or add new workflows under `agents/workflows/**` as patterns emerge.
5. Gate PRs by running `npm run agent:finalize` locally or in CI.

## Tips & Troubleshooting
- Validation failures: update incorrect paths in Memory Bank files or adjust `PATH_PREFIXES`/`ROOT_BASENAMES` in `agents/scripts/constants.js`.
- Drift failures: review canonical changes, then refresh the stamp via `node agents/scripts/update-memory-stamp.mjs`.
- Git and tooling: workflows are tool-agnostic—use your preferred git client or MCP integration while keeping the Memory Bank and reflections current.
