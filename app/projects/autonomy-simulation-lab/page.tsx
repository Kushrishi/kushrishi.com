import type { Metadata } from "next";
import { LaunchPage, MethodChain } from "@/components/LaunchPage";
import { SimulatorVisual } from "@/components/ProjectVisual";
export const metadata: Metadata = {
  title: "Autonomy Simulation Lab | Kush Rishi",
  description:
    "Native C++/Python recording replay, CPU inference and configuration comparison, alongside a released browser planning/localization simulator.",
  alternates: { canonical: "/projects/autonomy-simulation-lab" },
  openGraph: {
    title: "Autonomy Simulation Lab | Kush Rishi",
    description:
      "Native C++/Python recording replay, CPU inference and configuration comparison, alongside a released browser planning/localization simulator.",
    url: "/projects/autonomy-simulation-lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomy Simulation Lab | Kush Rishi",
    description:
      "Native C++/Python recording replay, CPU inference and configuration comparison, alongside a released browser planning/localization simulator.",
  },
};
export default function Page() {
  return (
    <LaunchPage
      number="02"
      title="Autonomy Simulation Lab"
      question="Which frames change when a sensing pipeline changes, and what do their timing and spatial context show?"
      status="Browser v1 released / native desktop acceptance pending"
      stack="TypeScript / React / Python / C++"
      links={[
        {
          label: "Live simulator",
          href: "https://kushrishi.github.io/autonomy-simulation-lab/",
        },
        {
          label: "Code",
          href: "https://github.com/Kushrishi/autonomy-simulation-lab",
        },
      ]}
      visual={<SimulatorVisual />}
      sections={[
        {
          id: "question",
          title: "The problem",
          content: (
            <>
              <p>
                Planning and localization are easier to understand when their
                assumptions are visible. This simulator lets a visitor change a
                grid, compare routes, introduce noisy measurements and inspect
                the position estimates against simulated truth.
              </p>
              <p>
                It is an educational engineering system, not a complete autonomy
                stack or GNSS receiver.
              </p>
            </>
          ),
        },
        {
          id: "method",
          title: "System architecture",
          content: (
            <>
              <MethodChain
                steps={[
                  "Edit a scenario and compare grid planners",
                  "Move the robot and generate noisy observations",
                  "Inspect estimates and export telemetry",
                ]}
              />
              <p>
                BFS provides an unweighted step-count reference. Dijkstra
                minimizes terrain-weighted cost; A* uses the same cost model
                with a Manhattan heuristic and binary priority queue. Dynamic
                obstacles can trigger replanning from the robot’s current state.
              </p>
              <p>
                Localization includes noisy position fixes, nonlinear
                Gauss-Newton range least squares and a linear constant-velocity
                Kalman filter. The Kalman filter uses position measurements; it
                does not directly fuse the nonlinear beacon ranges.
              </p>
            </>
          ),
        },
        {
          id: "demo",
          title: "Try an experiment",
          content: (
            <>
              <ol>
                <li>Open the simulator and choose the warehouse scenario.</li>
                <li>
                  Compare BFS, Dijkstra and A* with terrain costs enabled.
                </li>
                <li>
                  Add a route obstacle during motion and inspect replanning.
                </li>
                <li>Increase measurement noise and compare position errors.</li>
                <li>Export JSON or CSV and inspect the Python analysis.</li>
              </ol>
              <p>
                <a href="https://kushrishi.github.io/autonomy-simulation-lab/">
                  Open the live simulator
                </a>
              </p>
            </>
          ),
        },
        {
          id: "verification",
          title: "Verification",
          content: (
            <>
              <p>
                Automated checks cover path validity, weighted optimality,
                A*/Dijkstra agreement, queue ordering, blocked goals,
                dynamic-obstacle helpers, range recovery, finite noisy estimates
                and Kalman behavior. CI runs the tests and production build.
              </p>
              <p>
                The quantitative displays report the current simulated run. They
                are not claims of superiority on real vehicles. Matched seeds,
                scenarios and hardware are needed before any performance
                comparison.
              </p>
            </>
          ),
        },
        {
          id: "limits",
          title: "Limits and failures",
          content: (
            <>
              <p>
                A blocked goal may have no route. BFS deliberately ignores
                terrain cost. Noisy or poorly conditioned measurements can
                produce inaccurate estimates. Simulated ground truth makes these
                failures inspectable.
              </p>
              <p>
                The GNSS-inspired model omits satellite ephemerides, receiver
                clock bias, atmospheric effects, multipath, ambiguities and
                cycle slips. The current browser release does not perform camera
                perception or learned navigation.
              </p>
            </>
          ),
        },
        {
          id: "native",
          title: "Native replay pipeline",
          content: (
            <>
              <p>
                The separate C++ tool validates a tab-separated recording
                manifest, increasing timestamps, bounded record counts,
                contained file paths and SHA-256 identities. Bounded streaming
                verifies frame bytes. Libpng decodes images into RGB8 buffers
                with a pixel-count limit.
              </p>
              <p>
                The runner applies explicit preprocessing and executes a pinned
                ONNX Runtime CPU model. Python tools compare frame predictions,
                identities and latency. Optional Rerun export combines camera
                imagery, timing, synchronization skew and ENU positions. Native
                CI covers Linux and macOS; Linux also uses sanitizers.
              </p>
              <MethodChain
                steps={[
                  "Verify recording, model and preprocessing identity",
                  "Decode images and execute CPU inference",
                  "Compare predictions and processing configurations",
                  "Inspect camera, timing and spatial context in Rerun",
                ]}
              />
              <p className="status-line">A relocated installation compared all 108 recorded frames and reproduced the retained baseline exactly. Desktop acceptance and independent first use remain open. Historical output residue is detected but its original cause remains unresolved.</p>
            </>
          ),
        },
        {
          id: "reproduce",
          title: "Run and reproduce",
          content: (
            <>
              <pre>
                <code>{"npm ci\nnpm test\nnpm run build\nnpm run dev"}</code>
              </pre>
              <p>
                The Vite base path is <code>/autonomy-simulation-lab/</code>.
                Telemetry exports can be analyzed with the supplied Python
                utilities.
              </p>
              <pre>
                <code>
                  {
                    "cmake -S native -B native/build -DCMAKE_BUILD_TYPE=Debug\ncmake --build native/build\nctest --test-dir native/build --output-on-failure"
                  }
                </code>
              </pre>
              <p>
                <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/native/README.md">
                  Native contracts and build options
                </a>{" "}
                ·{" "}
                <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/native/INSTALLED_RECORDING_WORKFLOW.md">
                  Installed recording walkthrough
                </a>{" "}
                ·{" "}
                <a href="https://github.com/Kushrishi/autonomy-simulation-lab/releases/tag/v1.0.0">
                  Browser v1.0.0 release
                </a>
              </p>
            </>
          ),
        },
        {
          id: "next",
          title: "Next engineering milestone",
          content: (
            <>
              <p>
                Open the retained recording and layout in the desktop viewer.
                Inspect beginning, middle and end frames, read camera/timing/
                skew panels, navigate the ENU view, then close and reopen.
                Record setup, readability and responsiveness problems.
              </p>
              <p>
                Verify the installed synthetic example on another machine and
                complete independent first use before a native release. The
                existing comparison establishes repeatability in its measured
                environment, not perception accuracy or sensor fusion.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
