last_reviewed: 2025-09-03
stage: planning

# System Patterns

Overview
- This file captures durable patterns discovered during work. Classify each as declarative (facts) or procedural (repeatable sequences). Only procedural, high-value patterns may change workflows.

Definitions
- Declarative: Facts, mappings, invariants. Stored here and in related context files. Does not change workflows.
- Procedural: Steps/recipes that can be reused. Candidates for workflow synthesis.

Pattern Entry Format
- ID: PAT-YYYYMMDD-<slug>
- Title: short name
- Type: procedural | declarative
- Importance: low | medium | high
- Context: when this applies
- Trigger: signal that starts the pattern
- Steps: ordered list (procedural only)
- Signals: metrics/observables to detect usefulness
- Workflow_Impact: none | modify:<workflow> | create:<slug>
- Status: proposed | adopted

Synthesis Rule
- If Type=procedural and Importance>=medium and recurring across ≥2 tasks (per `agents/memory-bank/progress.log.md` or Reflexion), then:
  - Propose Workflow_Impact=modify:<existing> if pattern naturally augments an existing workflow phase; else Workflow_Impact=create:<slug>.
  - In the Documenter phase, perform "Workflow Synthesis":
    - Modify an existing workflow under `agents/workflows/*.workflow.md`, or
    - Create a new workflow from `agents/workflows/templates/pattern.workflow.template.md` as `agents/workflows/<slug>.workflow.md`.
  - For system-impacting changes, open ADR stub via `agents/memory-bank/decisions/ADR-0000-template.md`.

Example (Procedural)
- ID: PAT-20250903-workflow-synthesis
- Title: Workflow Synthesis from Procedural Patterns
- Type: procedural
- Importance: high
- Context: When a repeatable implementation/testing recipe emerges across tasks
- Trigger: Two or more Reflexion entries cite the same steps
- Steps:
  1. Capture the steps succinctly here
  2. Decide modify vs create
  3. Apply changes to `agents/workflows/*`
  4. Add ADR stub if impactful
  5. Log progress and Reflexion
- Signals: Fewer ad-hoc steps in similar tasks; faster execution
- Workflow_Impact: modify:default.workflow.md (or create:pattern-specific)
- Status: adopted

Example (Declarative)
- ID: PAT-20250903-env-facts
- Title: Environment Facts
- Type: declarative
- Importance: medium
- Context: Recording env vars and their meanings
- Trigger: New env var introduced
- Signals: Correctness of docs; reduced confusion
- Workflow_Impact: none
- Status: adopted
