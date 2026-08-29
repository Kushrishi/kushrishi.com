# Related Work Matrix

This document is the novelty gate for the flagship project. Do not mark an item "No" without reading the primary source or official documentation.

| Work | Behavior diff | Training-data attribution | Full lineage | Hypothesis generation | Active intervention | Causal verification | Ground-truth regression benchmark | Open source | Notes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Anthropic model diff / behavior comparison | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Read primary source |
| Goodfire predictive data debugging | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Read primary source |
| Influence / training-data attribution methods | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Split into concrete papers |
| Fine-tuning failure diagnostics | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Split into concrete papers |
| Model editing / causal tracing methods | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Adjacent, not necessarily direct |
| Experiment tracking / lineage tools | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Infrastructure baseline |

## Required fields for every source

- citation / URL
- publication date
- exact problem statement
- model family / scale
- what signal is used to localize causes
- whether causal language is observational or intervention-backed
- computational cost
- released code / data
- closest overlap with our proposed system
- specific gap that remains

## Decision rule

We proceed only if the review supports a defensible wedge such as:

> automated model-regression localization across behavioral diffs and versioned training lineage, evaluated on planted ground-truth regressions and verified through targeted intervention.

If a prior system already covers that end to end, we pivot.
