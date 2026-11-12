import type { Metadata } from "next";
import { LaunchPage, MethodChain } from "@/components/LaunchPage";
import { CapsuleEvidence } from "@/components/CapsuleEvidence";

const repo = "https://github.com/Kushrishi/capsule-review-public";
const description = "Capsule-endoscopy research software and a locked comparison of frame selection at fixed review budgets.";
export const metadata: Metadata = {
  title: "Capsule Review | Kush Rishi",
  description,
  alternates: { canonical: "/research/capsule-review" },
  openGraph: { title: "Capsule Review | Kush Rishi", description, url: "/research/capsule-review", type: "website" },
  twitter: { card: "summary_large_image", title: "Capsule Review | Kush Rishi", description },
};

export default function Page() {
  return (
    <LaunchPage
      number="01"
      title="Capsule Review"
      question="Which annotated events survive a limited frame-review budget?"
      summary="At a fixed 10% review budget, score-per-bin selection reached 49.35% of positive annotation runs versus 50.62% for uniform sampling. The model-guided policy did not improve the primary result."
      status="Research software / locked study complete"
      stack="Python / FastAPI / JavaScript / CNN evaluation"
      links={[
        { label: "Code", href: repo },
        { label: "Locked study", href: `${repo}/blob/main/docs/GALAR_UNSEEN_11_20_RESULTS.md` },
        { label: "Synthetic demo instructions", href: `${repo}/blob/main/docs/SUPERVISOR_DEMO.md` },
      ]}
      visual={<CapsuleEvidence />}
      sections={[
        {
          id: "question",
          title: "The question",
          content: <p>Capsule endoscopy produces long image sequences. Selecting the highest-scoring frames may repeatedly capture one long positive region while missing shorter events. This project asks whether model-guided selection can cover more distinct blood-positive annotation runs than uniform sampling when both select the same number of frames.</p>,
        },
        {
          id: "contribution",
          title: "What I built",
          content: <>
            <p>I built a local research viewer with sequence navigation, human notes, bookmarks and intervals, imported model scores, deterministic review queues and verifiable evidence exports. Unselected images remain accessible; model scores stay separate from human findings.</p>
            <p>The experimental work includes compact-CNN training and evaluation, original-image verification, fixed-budget policy comparisons and independent numerical replay. Later studies tested training diversity and short-event ranking across excluded examinations.</p>
            <p><a href={`${repo}/tree/main/src/capsule_review`}>Viewer and selection code</a> · <a href={`${repo}/tree/main/tests`}>Tests</a></p>
          </>,
        },
        {
          id: "method",
          title: "Locked comparison",
          content: <>
            <p>The Galar 11–20 study used 163,161 source-verified images from ten examinations, including 1,742 blood-positive annotated images in 154 contiguous annotation runs. Six examinations contained positive runs; recall is undefined for the other four.</p>
            <MethodChain steps={["Verify original images and chronology", "Select the same exact K frames per policy", "Measure frame retrieval and distinct-run coverage"]} />
            <p>The compact blood CNN and four deterministic policies were fixed before the corrected evaluation outcomes were inspected. Policies included uniform midpoint sampling, unrestricted highest-score ranking, score per chronological bin and score with temporal spacing. The prespecified primary compared score-per-bin with uniform selection at 10% of each examination’s annotated frames.</p>
            <p>The mean paired difference was −1.27 percentage points across the six positive-run examinations: two improved, two declined and two tied. The 25% secondary comparison was +9.51 points, with substantial variation between examinations; it does not reverse the negative primary result.</p>
            <p><a href={`${repo}/blob/main/docs/GALAR_UNSEEN_11_20_EVALUATION_LOCK.json`}>Frozen evaluation contract</a> · <a href={`${repo}/blob/main/experiments/galar-unseen-11-20-20261104/aggregate.json`}>Preserved public aggregate</a></p>
          </>,
        },
        {
          id: "frames-and-runs",
          title: "Frames are not runs",
          content: <>
            <p>A policy can retrieve many positive frames from relatively few runs. The highest-score policy illustrates this failure at the same 10% budget:</p>
            <table className="result-table">
              <caption>Pooled counts, separate from the mean-examination primary endpoint</caption>
              <thead><tr><th scope="col">Policy</th><th scope="col">Positive frames</th><th scope="col">Runs reached</th></tr></thead>
              <tbody>
                <tr><th scope="row">Highest score</th><td>305</td><td>28 / 154</td></tr>
                <tr><th scope="row">Uniform</th><td>170</td><td>63 / 154</td></tr>
              </tbody>
            </table>
            <p>Here, an annotation run means consecutive blood-positive labels at the dataset’s native annotation stride. It is not an independently adjudicated lesion. Pooled run counts and equally weighted examination means answer different questions.</p>
          </>,
        },
        {
          id: "limits",
          title: "Limitations",
          content: <p>This is a retrospective annotation-coverage study, not clinical validation. Examination IDs have not been verified as unique patients, and the sampled annotations are not complete video-event ground truth. No clinician reading-time savings or lesion sensitivity were measured. The evaluated 11–20 examinations are already inspected; the dataset authors’ reserved 61–80 outcomes remain unopened.</p>,
        },
        {
          id: "reproduce",
          title: "Try the software",
          content: <>
            <p>The local demonstration contains 24 synthetic images and generated, non-AI scores. From a checkout of the repository:</p>
            <pre tabIndex={0} role="region" aria-label="Synthetic demo setup commands"><code>{"python3 -m venv .venv\n. .venv/bin/activate\npython -m pip install -e .\ncapsule-review serve"}</code></pre>
            <p>Open <code>http://127.0.0.1:8765</code> and choose <strong>Open test sequence</strong>. The <a href={`${repo}/blob/main/docs/SUPERVISOR_DEMO.md`}>walkthrough</a> includes Windows setup, queue comparison and evidence export.</p>
            <p>To check selected saved public aggregates without medical images or model training, run <code>python scripts/project_status.py</code>. See the <a href={`${repo}/blob/main/docs/VERIFICATION.md`}>verification guide</a> for software tests and reproduction boundaries. Full medical-image experiments require private inputs; they cannot be reproduced from the public aggregate alone.</p>
            <p>The repository contains no medical images, individual predictions or trained pathology weights. Source is publicly visible without an explicit software licence.</p>
          </>,
        },
        {
          id: "next",
          title: "Current research direction",
          content: <>
            <p>Later development did not establish reliable cross-examination improvement. A frozen MobileNet ranking probe reached 49.08% pair ordering versus 72.29% for the compact CNN on 69 matched boundary comparisons. This small, already-inspected development task is distinct from whole-examination run recall.</p>
            <p>The next useful step is qualified expert interpretation of short events and ambiguous labels before another model comparison. A private 137-image blinded pilot is prepared but has not been reviewed or distributed. Reviewer participation, data-use requirements and adjudication must be settled first.</p>
            <p><a href={`${repo}/blob/main/docs/PROJECT_STATUS.md`}>Current status</a> · <a href={`${repo}/blob/main/docs/RESEARCH_COLLABORATION_BRIEF.md`}>Scientific synthesis</a> · <a href={`${repo}/blob/main/docs/FROZEN_REPRESENTATION_SHORT_EVENT_RESULTS_20261109.md`}>Representation study</a></p>
          </>,
        },
      ]}
    />
  );
}
