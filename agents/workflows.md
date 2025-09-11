Workflows

It is very important you strictly follow the agent workflows.

- Default workflow: `agents/workflows/default.workflow.md`
- Purpose: drive three-phase execution (plan → build → verify) with explicit inputs/outputs and gates.
- New workflow template: `agents/workflows/templates/pattern.workflow.template.md`

Usage
- Open the workflow file and start at the current phase.
- Follow the checklist, produce outputs, and update the phase state in the file.
- After each phase, log a 3-line Reflexion to `agents/memory-bank/active.context.md` and append a brief entry to `agents/memory-bank/progress.log.md`.
- For system-impacting changes, open an ADR stub using `agents/memory-bank/decisions/ADR-0000-template.md`.

Policies
- Retrieval: see canonical policy in `agents/memory-bank.md`.
  - Always load `agents/workflows/default.workflow.md`, `agents/memory-bank/project.brief.md`, recent `agents/memory-bank/progress.log.md`, and `agents/memory-bank/active.context.md`.
  - Include `agents/memory-bank/tech.context.md` and `agents/memory-bank/system.patterns.md` only if they contain substantive (non-placeholder) content.
- External tools: prefer GitHub MCP for git actions (branching, commits, PRs).
- Workflow Synthesis: When a high-importance procedural pattern is recorded in `agents/memory-bank/system.patterns.md`, update an existing workflow or create a new one from the template. Declarative knowledge updates do not change workflows and should be captured in the Memory Bank only.
