---
last_reviewed: 2025-09-03
---

# Technical Context

Stacks & Tooling

- Memory Bank + Workflow Process markdowns drive the agent’s behavior.
- Workflow synthesis uses templates under `agents/workflows/templates/` when creating new workflows.

Constraints

- Keep workflow changes minimal and scoped; modify existing workflows when possible.

Environment

- One-off entrypoint workflow: `agents/workflows/oneoff.workflow.md`.
- Memory validation script: `npm run memory:validate`.

Entrypoints

- Start with `agents/workflows/oneoff.workflow.md`.

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

- Node.js scripts validate memory references. Markdown files drive the agent’s multi-phase execution.
