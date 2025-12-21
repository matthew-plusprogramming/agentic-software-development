Workflows

It is very important you strictly follow the agent workflows.

- One-off workflow: `agents/workflows/oneoff.workflow.md`
- Purpose: drive the four-phase loop (Requirements → Design → Implementation Planning → Execution) with explicit inputs/outputs and gates.

Usage

- Open the workflow file and start at the current phase.
- Follow the checklist, produce outputs, and update the phase state in the file.
- After each phase, log a short reflection in the task spec and record approvals in the Decision & Work Log.
- Reference `agents/tools.md` for script helpers that support each phase.
- Retrieval tooling and single-pass rules live in `agents/memory-bank.md#retrieval-policy`; defer to that section for discovery commands and numbered output expectations.

Policies

- Retrieval: Follow the Retrieval Policy in `agents/memory-bank.md`.
- Commit proposal: Format commit proposals using conventional commit format under 70 chars and a brief body preview.
- Markdown: use Prettier (`npm run format:markdown`) to format Markdown in `agents/**`.
- Memory validation: run `npm run memory:validate` (or `npm run agent:finalize`) once canonical updates are ready to ensure referenced paths exist.
