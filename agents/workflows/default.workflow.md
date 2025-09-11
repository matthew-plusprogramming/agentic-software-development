---
Title: Default Software Change Workflow
---

Intent
- Orchestrate end-to-end changes with visible, diff-able phases, artifacts, and gates. Keeps memory updated across phases.

State
- current_phase: plan

Global Prompts
- Retrieval setup: Identify task type (bug|feature|refactor|ops). Always include `agents/memory-bank/project.brief.md`, recent `agents/memory-bank/progress.log.md`, and `agents/memory-bank/active.context.md`. Add more canonical files by relevance. For system-impacting changes, create an ADR stub PR.
- Reflexion note: After each phase, add a 3-line Reflexion to `active.context.md` and append a succinct entry to `progress.log.md`.
- External tools: Use GitHub MCP for git operations.
- Commit confirmation: Before each commit (including fixups), present the proposed Conventional Commit title (< 70 chars) and body, and ask for explicit approval. Do not commit without approval.
- Markdown standards: When editing `.md` files, follow CommonMark. Use ATX headings (`#`), one space after `#`, a blank line before and after headings when appropriate, `- ` for lists, fenced code blocks with language tags, inline code in backticks, no trailing spaces, and a final newline.

Phase: plan
- Goal: Clarify scope, gather context, and propose approach.
- Inputs: Issue/ask; `agents/memory-bank/project.brief.md`; `agents/memory-bank/product.context.md` (if present); `agents/memory-bank/system.patterns.md`; `agents/memory-bank/tech.context.md`; recent `agents/memory-bank/progress.log.md`; ADR template for system-impacting changes.
- Checklist:
  - Define problem statement, desired outcome, and acceptance criteria.
  - Identify constraints, risks, and assumptions.
  - Map impacted components and critical paths.
  - Identify interfaces, contracts, and invariants; list candidate files and tests to touch.
  - Sketch design/options; choose and justify approach; note performance, security, and migration implications.
  - If system-impacting, open ADR stub.
- Outputs: Brief plan; acceptance criteria; context notes; file list; invariants list; design notes; ADR stub (if needed); updated `active.context.md` next steps.
- Done_when: Scope and criteria are clear; context coverage is credible; approach addresses constraints.
- Gates: Criteria testable; invariants confirmed; risks mitigated; migration path identified.
- Next: build

Phase: build
- Goal: Apply minimal, focused changes and self-review for clarity.
- Inputs: Plan outputs; design notes; file list.
- Checklist:
  - Implement code and docs surgically; keep unrelated changes out; follow repo style.
  - Update `agents/memory-bank` canonical files if required by the change.
  - Self-review diff for clarity and minimalism; verify naming, comments, and docs; re-check invariants and contracts.
  - With confirmation, create `codex/<slug>` branch. Before each commit, ask for approval with the proposed Conventional Commit title (< 70 chars) and body; then push to the remote branch when confirmed.
- Outputs: Code changes; updated docs; migrations/scripts as needed; review notes and fixups.
- Done_when: Changes compile and meet plan scope.
- Gates: Lint/build pass locally.
- Next: verify

Phase: verify
- Goal: Validate behavior against criteria and finalize Memory Bank updates.
- Inputs: Plan; acceptance criteria; test harness; diff.
- Checklist:
  - Run targeted tests; add missing ones nearby if an adjacent pattern exists.
  - Validate error paths and edge cases; re-run build/lint.
  - Update Memory Bank: canonical files under `agents/memory-bank/`; add/update ADRs for accepted decisions; append Reflexion and progress log entries.
  - Workflow Synthesis: If `agents/memory-bank/system.patterns.md` contains new high-importance procedural patterns, then update an existing workflow or create a new one from `agents/workflows/templates/pattern.workflow.template.md`; for workflow changes that alter behavior, open an ADR stub.
  - Validate Memory Bank and drift:
    - `npm run memory:validate`
    - `npm run memory:drift`
- Outputs: Test results; fixes; updated Memory Bank; optional workflow updates.
- Done_when: Criteria met; no regressions visible; memory validated and drift-free.
- Gates: CI passes (if applicable); memory validation/drift checks pass.
- Next: done

End
- Close with summary and next steps.
