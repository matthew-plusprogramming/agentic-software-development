last_reviewed: 2025-09-03
stage: design

# Technical Context

Stacks & Tooling
- Memory Bank + Workflow Process markdowns drive the agent’s behavior.
- Workflow synthesis uses templates under `agents/workflows/templates/` when creating new workflows.

Constraints
- Keep workflow changes minimal and scoped; modify existing workflows when possible.

Environment
- Default entrypoint workflow: `agents/workflows/default.workflow.md`.
- Memory validation scripts: `npm run memory:validate`, `npm run memory:drift`.

Entrypoints
- Start with `agents/workflows/default.workflow.md`.
- When a procedural pattern is marked important in `agents/memory-bank/system.patterns.md`, run the Workflow Synthesis step in the Documenter phase to modify/create workflows.

Where To Look First
- `agents/workflows/*.workflow.md` for current processes

Codebase Map
- Agent Files
  - Memory Bank: `agents/memory-bank/**`
  - Workflows: `agents/workflows/**`
  - Scripts: `agents/scripts/**`
- Project Files
  - TBD

Tech Stack Details
- Node.js scripts validate memory and drift. Markdown files drive the agent’s multi-phase execution.
