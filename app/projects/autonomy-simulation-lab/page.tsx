import type { Metadata } from "next";
import { LaunchPage, MethodChain } from "@/components/LaunchPage";
import { SimulatorVisual } from "@/components/ProjectVisual";
import { NativeBenchmarkPublication } from "@/components/PublicationEvidence";

const repo = "https://github.com/Kushrishi/autonomy-simulation-lab";
const description = "C++/Python recording replay and CPU inference, alongside an educational browser simulator.";
export const metadata: Metadata = {
  title: "Autonomy Simulation Lab | Kush Rishi",
  description,
  alternates: { canonical: "/projects/autonomy-simulation-lab" },
  openGraph: { title: "Autonomy Simulation Lab | Kush Rishi", description, url: "/projects/autonomy-simulation-lab", type: "website" },
  twitter: { card: "summary_large_image", title: "Autonomy Simulation Lab | Kush Rishi", description },
};

export default function Page() {
  return (
    <LaunchPage
      number="04"
      title="Autonomy Simulation Lab"
      question="Compare model outputs from the same recording."
      summary="I built C++ and Python tools to process the same recorded images repeatedly and compare model predictions. A separate interactive browser simulator demonstrates route planning and position estimation."
      status="Browser v1.0.2 / native tool in maintenance"
      stack="C++ / Python / TypeScript / React"
      links={[
        { label: "Live simulator", href: "https://kushrishi.github.io/autonomy-simulation-lab/" },
        { label: "Code", href: repo },
        { label: "MIT licence", href: `${repo}/blob/main/LICENSE` },
      ]}
      visual={<NativeBenchmarkPublication />}
      sections={[
        {
          id: "native",
          title: "Native C++ systems case study",
          content: (
            <>
              <p>The native tool verifies recording timestamps, paths and file identities; decodes bounded PNG images; and runs a pinned ONNX Runtime CPU model. Python tools compare outputs and processing configurations. Optional Rerun export adds timing and spatial context.</p>
              <MethodChain steps={["Verify recording and model identity", "Prepare images and compute model predictions", "Compare outputs and timing"]} />
              <p>I implemented a crop-aware preprocessing path that avoids computing resized pixels discarded by the center crop. The figure above reports the paired timings, identical model outputs and workload limits.</p>
              <p>Libpng, ONNX Runtime, MobileNetV2 and Rerun are dependencies, not original components. KITTI data retains its own terms and is not republished here.</p>
              <p><a href={`${repo}/blob/main/native/CONTROLLED_REPLAY_CASE_STUDY.md`}>Full case study</a> · <a href={`${repo}/blob/main/native/USABILITY.md`}>Native quickstart</a></p>
            </>
          ),
        },
        {
          id: "question",
          title: "Browser simulator",
          content: <p>A separate educational simulator lets a visitor edit a grid, compare routes, introduce noisy measurements and inspect position estimates against simulated truth. It is not a complete autonomy stack or GNSS receiver.</p>,
        },
        {
          id: "method",
          title: "Planning and localization",
          content: <p>BFS provides an unweighted step-count reference. A* and Dijkstra use terrain-weighted costs. Localization includes Gauss–Newton range estimation and a constant-velocity Kalman filter using position measurements, not direct nonlinear range fusion. JSON/CSV telemetry can be inspected with Python.</p>,
        },
        {
          id: "demo",
          title: "Try the browser demo",
          content: (
            <>
              <SimulatorVisual />
              <p>Choose a scenario, compare planners with terrain costs, add an obstacle during motion and inspect the resulting route. Use arrow keys to move between grid cells and Enter or Space to apply the selected editor tool.</p>
              <p><a href="https://kushrishi.github.io/autonomy-simulation-lab/">Open the live simulator</a></p>
            </>
          ),
        },
        {
          id: "verification",
          title: "Verification",
          content: <p>Automated checks cover paths, weighted optimality, queue ordering, range recovery, input validation and filter behaviour. The native workflow includes numerical-reference and repeated-run checks. Those tests are not evidence of real-vehicle perception accuracy or cross-platform numerical equivalence.</p>,
        },
        {
          id: "limits",
          title: "Limits and unresolved issues",
          content: (
            <>
              <p>The browser uses simplified dynamics and deterministic noise; its covariance is not calibrated to real sensing errors. Gauss–Newton has a finite iteration budget, not a convergence guarantee. Compatibility with assistive technologies has not been established.</p>
              <p>The native tool has no packaged release. An earlier output-cleanup issue remains unresolved. Installation by a new user and reopening saved viewer sessions still need testing.</p>
              <p><a href={`${repo}/blob/main/native/RELEASE_READINESS_2026_10.md`}>Native release-readiness record</a> · <a href={`${repo}/blob/main/analysis/numerical-audit/README.md`}>Numerical audit</a></p>
            </>
          ),
        },
        {
          id: "reproduce",
          title: "Run and reproduce",
          content: (
            <>
              <pre tabIndex={0} role="region" aria-label="Browser development commands"><code>{"npm ci\nnpm test\nnpm run build\nnpm run dev"}</code></pre>
              <p>The browser base path is <code>/autonomy-simulation-lab/</code>. Native builds and optional inference dependencies are documented separately.</p>
              <pre tabIndex={0} role="region" aria-label="Native build commands"><code>{"cmake -S native -B native/build -DCMAKE_BUILD_TYPE=Debug\ncmake --build native/build\nctest --test-dir native/build --output-on-failure"}</code></pre>
              <p><a href={`${repo}/blob/main/native/README.md`}>Native build options</a> · <a href={`${repo}/blob/main/native/INSTALLED_RECORDING_WORKFLOW.md`}>Recording walkthrough</a> · <a href={`${repo}/releases/tag/v1.0.2`}>Browser release</a></p>
            </>
          ),
        },
        {
          id: "next",
          title: "Current scope",
          content: <p>Both workflows are in maintenance. This project compares software behaviour on recorded or simulated data; it does not validate real-world driving performance.</p>,
        },
      ]}
    />
  );
}
