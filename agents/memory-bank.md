---
memory_bank: v1
generated_at: 2025-09-04
repo_git_sha: 39fa7b6a9e8a1d06a87060b211fb02e453ece0e1
---

Memory Bank

- Canonical: `agents/memory-bank/*`
- Single source of truth: This file defines the canonical Storage Tiers and Retrieval Policy. Other docs should reference (not duplicate) these rules.

Procedural vs Declarative
- Declarative knowledge (facts, mappings, invariants) is recorded in canonical files under `agents/memory-bank/*` and does not change workflow definitions.
- Procedural learnings (repeatable steps) are captured as patterns in `agents/memory-bank/system.patterns.md`. High-importance procedural patterns may modify/create workflows per the synthesis rule.

Storage Tiers
- Tier 0 — Task Context: ephemeral notes in the active workflow.
- Tier 1 — Active Context Ring: rolling buffer summarized in `agents/memory-bank/active.context.md`; Reflexion entries appended per phase.
- Tier 2 — Canonical Files: `agents/memory-bank/` (PR‑reviewed only).

Retrieval Policy
- Identify task type: bug | feature | refactor | ops.
- Always include: `agents/workflows/default.workflow.md`, `agents/memory-bank/project.brief.md`, recent `agents/memory-bank/progress.log.md`, and `agents/memory-bank/active.context.md`.
- Gate optional files by substance: include `agents/memory-bank/tech.context.md` and `agents/memory-bank/system.patterns.md` only when they contain substantive, non‑placeholder content (more than headings/TBDs). Include relevant ADRs under `agents/memory-bank/decisions/` when directly applicable.
- For system‑impacting changes, open an ADR stub using `agents/memory-bank/decisions/ADR-0000-template.md`.
- After each phase, append a 3‑line Reflexion to `agents/memory-bank/active.context.md`; when stable, roll up into an ADR or a relevant stable memory bank file.

Stage Metadata Policy (proposal)
- Purpose: avoid drift and contradictory `stage:` values across Memory Bank files.
- Policy: prefer `last_reviewed` as the status indicator; omit `stage` unless it conveys actionable workflow state. When used in this template, set `stage: template`. In concrete repos, if kept, restrict values to `plan|build|verify` and update only when materially relevant.

Validation scripts
- Validate file paths across all Memory Bank files: `npm run memory:validate`
- Drift check against stamped SHA (front matter in this file): `npm run memory:drift`
