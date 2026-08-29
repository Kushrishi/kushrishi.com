# Model Regression Forensics

> Working title. Do not claim novelty publicly until the related-work review and baseline experiments support it.

## 1. Objective

Build an open-source research and engineering system that helps answer a practical question in model development:

> **A new checkpoint regressed on a behavior. Which training change caused it, and what evidence would make that diagnosis credible?**

The proposed workflow combines behavioral differencing, regression clustering, training-lineage analysis, candidate-cause ranking, and controlled interventions. The end goal is not merely correlation or attribution. It is a reproducible debugging loop that can generate and test causal hypotheses about model regressions.

## 2. Why this matters

Modern model development produces many moving parts:

- training-data additions and removals
- mixture-weight changes
- synthetic-data generators
- SFT and preference datasets
- reward / grader changes
- prompt and template changes
- optimization schedules
- training phases
- checkpoint selection
- post-training interventions

When a model improves globally but regresses on a particular capability or behavioral slice, teams can often observe **that** it regressed without knowing **why**. Existing attribution, interpretability, data-debugging, and model-diff methods attack parts of this problem, but the exact end-to-end gap must be validated before implementation is scaled.

## 3. Core thesis

A useful model-regression debugger should connect five layers:

1. **Behavior diff** — detect what changed between baseline and candidate models.
2. **Regression clustering** — group failures into coherent behavioral patterns rather than isolated examples.
3. **Training lineage** — enumerate the data, configuration, and training changes that could plausibly explain the regression.
4. **Hypothesis ranking** — prioritize likely causes using attribution, similarity, timing, and other signals.
5. **Intervention** — remove, replace, replay, or modify a suspected cause and test whether the regression changes.

The project is successful only if interventions provide evidence that is stronger than a retrospective correlation score.

## 4. Research questions

### RQ1 — Detection
Can the system reliably identify and cluster behavioral regressions between two checkpoints?

### RQ2 — Localization
Given a known planted regression, can the system rank the true root cause near the top of the candidate list?

### RQ3 — Causal verification
Do targeted interventions recover the regressed behavior when the candidate cause is correct, while negative-control interventions do not?

### RQ4 — Generalization
Does the diagnosis explain held-out examples from the same behavioral failure family rather than only the exact examples used to detect the regression?

### RQ5 — Efficiency
Can the system reduce debugging cost relative to naive replay / ablation over all changed data or training settings?

## 5. Initial hypotheses

- **H1:** Behavioral clustering before attribution improves root-cause localization over per-example attribution alone.
- **H2:** Training-lineage metadata materially narrows the candidate space and reduces intervention cost.
- **H3:** Intervention-verified diagnoses have higher held-out explanatory power than correlation-only rankings.
- **H4:** A benchmark with controlled planted regressions can expose important differences between debugging methods that aggregate metrics hide.

## 6. V0.1 scope

V0.1 must be deliberately small.

### Model
Use a small open-weight language model that can be fine-tuned cheaply enough to create repeated controlled experiments.

### Training intervention
Introduce **one known behavioral regression** through a controlled, versioned training change.

Candidate first regression:

- conflicting supervision in a narrow SFT slice, or
- a controlled data-mixture shift that damages a small held-out capability.

### Pipeline

```text
baseline checkpoint
        │
        ├───────────────┐
        │               │
        ▼               ▼
  candidate model   held-out evals
        │               │
        └──────┬────────┘
               ▼
         behavior diff
               │
               ▼
       regression cluster
               │
               ▼
        lineage candidates
               │
               ▼
       candidate ranking
               │
               ▼
      targeted intervention
               │
               ▼
      recovery / no recovery
```

### V0.1 success condition

For at least one planted regression:

- detect the behavioral regression,
- rank the planted source among the top candidate causes,
- perform an intervention against that source,
- observe statistically credible recovery on held-out examples,
- show that negative-control interventions do not produce comparable recovery.

If this cannot be achieved on one controlled regression, do not build the larger platform.

## 7. RegressionBench concept

If V0.1 works, create a benchmark of controlled regressions with known causes.

Potential families:

| ID | Regression | Example planted cause |
|---|---|---|
| R001 | Conflicting supervision | contradictory SFT examples |
| R002 | Rare-capability forgetting | skewed continuation mixture |
| R003 | Style drift | repeated synthetic response pattern |
| R004 | Over-refusal | preference imbalance |
| R005 | Tool-use regression | malformed tool-use training slice |
| R006 | Template sensitivity | formatting / prompt-template change |
| R007 | Optimization regression | learning-rate / warmup change |
| R008 | Synthetic-data defect | one generator injects systematic error |
| R009 | Capability interference | training improves A while degrading B |
| R010 | Contamination artifact | eval-like data enters training set |

Each case should include:

- baseline checkpoint
- candidate checkpoint
- versioned training lineage
- behavioral evals
- known planted root cause
- held-out regression examples
- permitted intervention set

## 8. Metrics

### Detection
- regression magnitude
- confidence interval / repeated-run stability
- slice / cluster purity

### Localization
- root-cause top-1 accuracy
- root-cause top-k recall
- mean reciprocal rank
- false-cause rate

### Intervention
- recovery effect size
- recovery confidence interval
- negative-control effect
- unrelated-capability regression

### Efficiency
- candidate hypotheses tested
- training / inference cost
- wall-clock debugging time
- intervention count to verified cause

### Generalization
- held-out regression recovery
- transfer to paraphrased / perturbed cases
- transfer across seeds or checkpoints where appropriate

## 9. Candidate architecture

```text
                    RUN REGISTRY
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       DATASET        CONFIG       CHECKPOINTS
       LINEAGE        LINEAGE        LINEAGE
          └─────────────┼─────────────┘
                        ▼
                 TRAINING CHANGESET
                        │
BASE MODEL ─────────────┼──────────── CANDIDATE MODEL
                        │
                        ▼
                  BEHAVIOR DIFF
                        │
                        ▼
                REGRESSION CLUSTERER
                        │
                        ▼
                HYPOTHESIS GENERATOR
                        │
                        ▼
                   CAUSE RANKER
                        │
                        ▼
                INTERVENTION RUNNER
                        │
                        ▼
                 CAUSAL EVIDENCE
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
         REPORT                REGRESSION EVAL
```

## 10. Software interfaces

The exact API is intentionally deferred until the V0.1 experiment proves the workflow.

Longer-term shape:

```python
from modelbisect import diagnose

report = diagnose(
    baseline="runs/v14",
    candidate="runs/v15",
    eval_suite="evals/instruction_following.yaml",
    lineage="lineage.yaml",
)

report.regressions
report.hypotheses
report.interventions
report.verified_causes
```

CLI concept:

```bash
modelbisect diagnose \
  --baseline runs/v14 \
  --candidate runs/v15 \
  --eval evals/instruction_following.yaml \
  --lineage lineage.yaml
```

The final project name is not chosen yet.

## 11. Baselines to evaluate

The related-work review must identify implementable baselines across at least these classes:

1. random candidate ranking
2. change-recency / lineage heuristics
3. embedding or similarity-based data retrieval
4. training-data attribution methods
5. model behavioral-diff methods
6. influence / gradient-based methods where computationally feasible
7. replay / brute-force ablation on small benchmark cases

A paper-quality result requires comparison, not only a successful demo.

## 12. Related-work questions that must be answered first

For every closest paper/tool, record:

- Does it compare behaviors across checkpoints?
- Does it attribute behavior to training examples or training changes?
- Does it use full training lineage?
- Does it generate root-cause hypotheses?
- Does it actively choose interventions?
- Does it verify causes through retraining / replay / ablation?
- Does it provide a benchmark with ground-truth planted regressions?
- Is it open source?
- What model sizes / modalities does it support?
- What evaluation metric does it optimize?

The project should not claim novelty until the intersection above has been checked carefully.

## 13. Non-goals for V0.1

Do **not** start with:

- frontier-scale models
- distributed multi-node training
- mechanistic interpretability of internal circuits
- arbitrary multimodal models
- a polished SaaS dashboard
- every possible attribution algorithm
- autonomous self-improvement loops
- agentic debugging of production systems

Those can come later. V0.1 exists to test the central causal-debugging thesis cheaply and rigorously.

## 14. Engineering principles

- Reproducible runs from configuration.
- Version training data and lineage explicitly.
- Separate observed evidence from inferred cause.
- Interventions must be logged as first-class experiment artifacts.
- Keep benchmark generation deterministic when possible.
- Make held-out evaluation mandatory.
- Avoid a single opaque "root cause score" without decomposable evidence.
- Prefer small, interpretable controlled experiments before scale.

## 15. Open-source plan

If the central result survives V0.1:

### Repository
- clean install
- examples
- benchmark download / generation
- reproducible experiment configs
- contribution guide
- issue templates

### Package
Potentially publish a Python package after the API stabilizes.

### Public artifacts
- RegressionBench
- technical report / preprint
- interactive regression visualization
- benchmark leaderboard only if it adds scientific value

### Adoption target
The tool should eventually be useful to someone who did not build it. A forkable repo with an understandable extension interface is more valuable than a one-off private demo.

## 16. Portfolio integration

The project page should evolve with evidence:

### Stage 0
Working hypothesis, architecture, related work, and explicit "active research" status.

### Stage 1
First planted regression and intervention result.

### Stage 2
RegressionBench v0.1 and baseline comparison.

### Stage 3
Interactive behavior / lineage visualization using real experiment data.

### Stage 4
Preprint, package, public reproducibility instructions, external contributors.

Never present planned capabilities as completed results.

## 17. Eight-week execution target

### Week 1 — Literature + experiment design
- complete related-work matrix
- choose model and task
- choose first planted regression
- define exact success criteria

### Week 2 — Reproducible training harness
- baseline training / fine-tuning
- run registry
- lineage schema
- deterministic evaluation

### Week 3 — Plant regression
- produce candidate checkpoint
- verify regression is measurable and repeatable
- create held-out regression set

### Week 4 — Behavior diff + clustering
- regression detection
- failure representation
- first clustering baseline

### Week 5 — Cause ranking
- simple lineage heuristics
- similarity / attribution baseline
- candidate hypothesis output

### Week 6 — Interventions
- remove / replace / replay suspected cause
- negative controls
- repeated runs

### Week 7 — Evaluation
- root-cause ranking metrics
- recovery metrics
- generalization analysis
- cost analysis

### Week 8 — Public V0.1
- cleaned repo
- benchmark case
- report
- portfolio visualization
- decision: scale, pivot, or kill

## 18. Kill / pivot criteria

Pivot or stop if any of the following becomes true:

1. A close existing system already provides the same end-to-end workflow with intervention-verified regression localization.
2. Planted causes cannot be recovered better than trivial baselines.
3. Intervention cost makes the method unusable even on small controlled settings without a credible approximation path.
4. The benchmark only rewards artificial failure modes that do not resemble real development regressions.
5. Results do not generalize beyond the exact examples used for diagnosis.

The goal is a strong research contribution, not emotional attachment to a project concept.

## 19. Naming

`ResilientML` is no longer treated as the final flagship name.

Current working descriptors:

- Model Regression Forensics
- Model Bisect
- Training Lineage Debugger
- RegressionBench (benchmark name candidate)

Do not finalize branding until the technical wedge is validated and name availability is checked.
