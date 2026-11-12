import type { Metadata } from "next";
import { LaunchPage, MethodChain } from "@/components/LaunchPage";
import { RegressionVisual, ReleaseInvestigationVisual } from "@/components/ProjectVisual";

const repo = "https://github.com/Kushrishi/model-regression-forensics";
const description = "Compare classifier releases and inspect changed predictions, with a separate completed localization study.";
export const metadata: Metadata = {
  title: "Model Regression Forensics | Kush Rishi",
  description,
  alternates: { canonical: "/research/model-regression-forensics" },
  openGraph: { title: "Model Regression Forensics | Kush Rishi", description, url: "/research/model-regression-forensics", type: "website" },
  twitter: { card: "summary_large_image", title: "Model Regression Forensics | Kush Rishi", description },
};

export default function Page() {
  return (
    <LaunchPage
      number="03"
      title="Model Regression Forensics"
      question="What changed between two classifier releases?"
      summary="Import saved predictions, compare model versions and inspect changed cases in a local HTML report. A separate study compares methods for tracing model regressions."
      status="Comparison tool and completed study"
      stack="Python / release policies / local HTML reports"
      links={[
        { label: "Code", href: repo },
        { label: "MIT licence", href: `${repo}/blob/main/LICENSE` },
        { label: "Technical report", href: `${repo}/blob/main/research/M4_TECHNICAL_REPORT.md` },
        { label: "Run the example", href: `${repo}/blob/main/docs/deployment-comparison.md` },
      ]}
      visual={<ReleaseInvestigationVisual />}
      sections={[
        {
          id: "question",
          title: "The question",
          content: <p>The application compares saved predictions and checks declared release requirements. A separate research study asks whether a diagnostic ranking can identify the training change responsible for a regression. A successful repair does not necessarily identify a unique cause.</p>,
        },
        {
          id: "engineering",
          title: "Release comparison software",
          content: (
            <>
              <p>I implemented the prediction importer, identity checks, slice-policy comparison, supplied-repair assessment and local HTML report. The retained example contains 1,969 cases: eight labels change, including three new errors and three corrections, while the candidate still passes its declared policy. Repairs are unevaluated in this example.</p>
              <pre tabIndex={0} role="region" aria-label="Saved-prediction import commands"><code>{"python -m pip install .\nmrf-import examples/deployment_comparison/policy.json examples/deployment_comparison/predictions.csv deployment-investigation"}</code></pre>
              <p>From a checkout with Python 3.12 or later, use a new output directory and open its <code>index.html</code>. The example needs no model training or report server.</p>
              <p><a href={`${repo}/blob/main/docs/deployment-comparison.md`}>Walkthrough</a> · <a href={`${repo}/blob/main/docs/architecture.md`}>Architecture</a></p>
            </>
          ),
        },
        {
          id: "method",
          title: "Study design",
          content: (
            <>
              <p>Two constructed Banking77 benchmarks contain five matched label-swap candidates each. A third-party DistilBERT classifier was trained across three paired trajectories per benchmark. Rankings were finalized before truth scoring.</p>
              <MethodChain steps={["Construct candidate changes and paired model releases", "Rank candidates without planted truth", "Finalize rankings and evaluate"]} />
              <p>The comparison includes deterministic random ranking, target-label overlap, lexical Jaccard, final-checkpoint Grad-Dot and seven-checkpoint TracIn. Repeated training trajectories are not additional independent benchmarks.</p>
            </>
          ),
        },
        {
          id: "results",
          title: "Research results",
          content: (
            <>
              <p>Label overlap and lexical similarity ranked the planted change first in both benchmarks. Grad-Dot and TracIn ranked it first in one and fifth in the other. The random reference ranked it third in each.</p>
              <p>No consistent top-1 benefit from model-based diagnostics was established. Known target labels and disjoint candidate pairs provide a semantic shortcut for the simple baseline.</p>
              <RegressionVisual />
            </>
          ),
        },
        {
          id: "failures",
          title: "Ambiguous repairs",
          content: <p>A separate deterministic example restores identical predictions in two ways: correcting feature order or reversing model weights. The report returns <code>ambiguous_repairs</code> and leaves the historical cause <code>not_identified</code>. Passing a policy is not proof of a unique cause.</p>,
        },
        {
          id: "limits",
          title: "Limitations",
          content: <p>Two constructed settings are a narrow basis for inference. The project does not establish general causal identification, superiority to attribution methods, statistical significance from policy thresholds, or independent-user benefit. No peer-reviewed publication is claimed.</p>,
        },
        {
          id: "experiments",
          title: "Experiment history",
          content: <p>Earlier unsuccessful tasks, confounds and competing repairs remain in the <a href={`${repo}/blob/main/research/EXPERIMENT_HISTORY.md`}>experimental history</a>.</p>,
        },
        {
          id: "reproduce",
          title: "Reproducibility",
          content: (
            <>
              <pre tabIndex={0} role="region" aria-label="Development verification commands"><code>{"uv sync --extra dev\nuv run ruff check .\nuv run ruff format --check .\nuv run pytest"}</code></pre>
              <p><a href={`${repo}/blob/main/research/REPRODUCE_M4.md`}>Saved-result replay</a> checks aggregation and truth scoring without retraining. It does not regenerate original checkpoints or scores. Optional research dependencies are documented separately.</p>
            </>
          ),
        },
        {
          id: "next",
          title: "Current scope",
          content: <p>The comparison tool is in maintenance and the research study is complete. Its usefulness to independent users has not been evaluated.</p>,
        },
      ]}
    />
  );
}
