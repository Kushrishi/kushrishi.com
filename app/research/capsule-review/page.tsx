import type { Metadata } from "next";
import Image from "next/image";
import viewer from "@/public/images/capsule-review/viewer-desktop.png";
import queues from "@/public/images/capsule-review/synthetic-policy-comparison.png";
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
      question="Can selecting fewer capsule-endoscopy images still capture distinct blood-positive sequences?"
      summary="I built a viewer for images recorded by a swallowed camera and tested which images to select for review. When selecting 10% of annotated images, the model-guided method reached 49.35% of blood-positive sequences, versus 50.62% for evenly spaced sampling, averaged across six examinations with positive sequences. It did not improve coverage."
      status="Research software / locked study complete"
      stack="Python / FastAPI / JavaScript / CNN evaluation"
      links={[
        { label: "Code", href: repo },
        { label: "Locked study", href: `${repo}/blob/main/docs/GALAR_UNSEEN_11_20_RESULTS.md` },
        { label: "Synthetic demo instructions", href: `${repo}/blob/main/docs/SUPERVISOR_DEMO.md` },
      ]}
      visual={<>
        <figure className="project-figure">
          <a href="/images/capsule-review/viewer-desktop.png" aria-label="Open the synthetic viewer screenshot at full size">
            <Image unoptimized src={viewer} alt="Capsule Review desktop viewer with a synthetic frame, sequence navigation and human review controls." sizes="(max-width: 960px) 100vw, 900px" style={{ width: "100%", height: "auto" }} />
          </a>
          <figcaption>The working local viewer with synthetic images and generated demonstration scores, separate from the evaluated blood CNN. Select the image to inspect the controls at full size.</figcaption>
        </figure>
        <CapsuleEvidence />
      </>}
      sections={[
        {
          id: "question",
          title: "The question",
          content: <p>A swallowed camera records images of the digestive tract during capsule endoscopy. Selecting many blood-positive images from one sequence can still miss other positive sequences. Here, an annotation run is a sequence of consecutive blood-positive labels at the dataset’s sampled image intervals; it is not a confirmed lesion. Run recall measures the fraction of those sequences reached by at least one selected image.</p>,
        },
        {
          id: "contribution",
          title: "What I built",
          content: <>
            <p>I built a local research viewer with sequence navigation, human notes, bookmarks and intervals, imported model scores, deterministic review queues and verifiable evidence exports. Unselected images remain accessible; model scores stay separate from human findings.</p>
            <p>The experimental work includes compact-CNN training and evaluation, original-image verification, fixed-budget policy comparisons and independent numerical replay. Later studies tested training diversity and short-event ranking across excluded examinations.</p>
            <p><a href={`${repo}/tree/main/src/capsule_review`}>Viewer and selection code</a> · <a href={`${repo}/tree/main/tests`}>Tests</a></p>
            <figure className="project-figure">
              <a href="/images/capsule-review/synthetic-policy-comparison.png" aria-label="Open the synthetic frame-selection comparison at full size">
                <Image unoptimized src={queues} alt="Synthetic demonstration comparing frame-selection policies at the same six-image review budget." sizes="(max-width: 960px) 100vw, 800px" style={{ width: "100%", height: "auto" }} />
              </a>
              <figcaption>Frame-selection policies using deterministic generated scores on the synthetic sequence. These software examples are separate from the Galar research results. Select the image for full size.</figcaption>
            </figure>
          </>,
        },
        {
          id: "method",
          title: "Locked comparison",
          content: <>
            <p>The Galar 11–20 study used 163,161 source-verified images from ten examinations, including 1,742 blood-positive annotated images in 154 contiguous annotation runs. Six examinations contained positive runs; recall is undefined for the other four.</p>
            <MethodChain steps={["Verify original images and chronology", "Select the same exact K frames per policy", "Measure frame retrieval and distinct-run coverage"]} />
            <p>A fixed review budget means selecting the same number of images under each policy. Uniform sampling chooses evenly spaced images; score-per-bin chooses the highest-scoring image within each chronological segment. The compact convolutional neural network (CNN) and four deterministic policies were fixed before the corrected evaluation outcomes were inspected. Policies included uniform midpoint sampling, unrestricted highest-score ranking, score per chronological bin and score with temporal spacing. The prespecified primary compared score-per-bin with uniform selection at 10% of each examination’s annotated frames.</p>
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
            <p>Pooled run counts give more weight to examinations with more runs. The primary result instead gives each positive-run examination equal weight.</p>
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
