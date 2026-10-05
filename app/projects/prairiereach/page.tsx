import type { Metadata } from "next";
import { LaunchPage, MethodChain } from "@/components/LaunchPage";
import { CoordinationVisual } from "@/components/ProjectVisual";
import Image from "next/image";
export const metadata: Metadata = {
  title: "PrairieReach | Kush Rishi",
  description:
    "A fictional care-access coordination prototype for changed bookings and task ownership.",
  alternates: { canonical: "/projects/prairiereach" },
  openGraph: {
    title: "PrairieReach | Kush Rishi",
    description:
      "A fictional care-access coordination prototype for changed bookings and task ownership.",
    url: "/projects/prairiereach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrairieReach | Kush Rishi",
    description:
      "A fictional care-access coordination prototype for changed bookings and task ownership.",
  },
};
export default function Page() {
  return (
    <LaunchPage
      number="04"
      title="PrairieReach"
      question="A medical visit is booked. Who handles the ride, paperwork and changes?"
      status="Synthetic prototype / product validation next"
      stack="React / TypeScript / versioned task state"
      links={[
        {
          label: "Synthetic demo",
          href: "https://kushrishi.github.io/carebridge-canada/",
        },
        {
          label: "Code",
          href: "https://github.com/Kushrishi/carebridge-canada",
        },
      ]}
      visual={<CoordinationVisual />}
      sections={[
        {
          id: "problem",
          title: "The problem",
          content: (
            <>
              <p>
                A booked visit can still depend on a ride, a return journey,
                paperwork and a support person. A changed booking may leave an
                old arrangement looking confirmed. PrairieReach tests whether a
                source-linked plan makes those dependencies easier to manage.
              </p>
              <p>
                This is a product hypothesis, evolved from CareBridge. The
                current interface uses fictional journeys. No organization has
                commissioned it and no patient or customer benefit has been
                established.
              </p>
            </>
          ),
        },
        {
          id: "workflow",
          title: "Visual workflow",
          content: (
            <>
              <MethodChain
                steps={[
                  "Record the source instruction and task owner",
                  "Confirm arrangements against that source version",
                  "Reopen affected tasks when the source changes",
                ]}
              />
              <p>
                Choose “Get to a booked visit,” confirm the outward and return
                trip, then simulate a changed booking. Affected tasks require
                review. Reviewing an instruction does not reconfirm a ride.
              </p>
              <figure className="project-figure">
                <Image
                  src="/projects/prairiereach.jpg"
                  width={1348}
                  height={926}
                  alt="PrairieReach synthetic booked-visit plan with responsibility and arrangement states"
                  sizes="(max-width:760px) 100vw, 760px"
                />
                <figcaption>
                  Actual synthetic prototype. Existing carebridge-canada URLs
                  are retained for continuity.
                </figcaption>
              </figure>
            </>
          ),
        },
        {
          id: "architecture",
          title: "Engineering architecture",
          content: (
            <>
              <p>
                Pure task transitions connect confirmations to a source version.
                Responsibility, waiting and confirmed states remain distinct. A
                bounded local event record can be replayed with schema
                validation; corrupted storage and write failures are surfaced.
              </p>
              <p>
                The prototype supports personal check-ins, exports and a small
                manually reviewed resource set. Responsibility labels are not
                authenticated delegation. Local browser storage is not a secure
                patient record or cloud collaboration system.
              </p>
            </>
          ),
        },
        {
          id: "market",
          title: "Existing services",
          content: (
            <>
              <p>
                211 Saskatchewan already provides service navigation. Hope Air
                and Canadian Cancer Society programs address travel and
                financial support within their conditions. Momentm NovusMED
                already supplies transport scheduling, dispatch and
                communication tools.
              </p>
              <p>
                The opportunity to test is coordination around several existing
                services, especially when instructions change. A
                patient-navigation or community-support team is a possible
                customer, not a validated buyer. The project should improve a
                demonstrated workflow rather than assume the market is empty.
              </p>
              <p>
                <a href="https://github.com/Kushrishi/carebridge-canada/blob/main/docs/product-direction.md">
                  Product research and source links
                </a>
              </p>
            </>
          ),
        },
        {
          id: "evidence",
          title: "What is established",
          content: (
            <>
              <p>
                The fictional workflow and its state rules are implemented.
                Automated tests cover changed-source invalidation, separate
                review, persistence, storage failures, check-in suppression,
                exports and resource filtering. Browser checks cover narrow
                layouts, keyboard entry, downloads and print.
              </p>
              <p>
                No real-user study, willingness-to-pay test, health-outcome
                improvement or operational pilot has been completed. A software
                test passing does not validate the product idea.
              </p>
            </>
          ),
        },
        {
          id: "limits",
          title: "Limitations",
          content: (
            <>
              <p>
                There are no live appointments, availability data, dispatch,
                user accounts, notifications, clinic integrations, real-data AI
                calls or cross-device collaboration. The prototype does not
                determine urgency, treatment, eligibility or service
                availability.
              </p>
              <p>
                Real records require a partner-defined workflow, privacy and
                security work. A First Nations-specific deployment additionally
                needs a willing community partner and appropriate
                community-defined information governance.
              </p>
            </>
          ),
        },
        {
          id: "reproduce",
          title: "Run the prototype",
          content: (
            <>
              <pre>
                <code>{"npm ci\nnpm test\nnpm run build\nnpm run dev"}</code>
              </pre>
              <p>
                The base path stays <code>/carebridge-canada/</code>. The
                historical CareBridge implementation remains separately
                documented and is not the current app.
              </p>
              <p>
                <a href="https://github.com/Kushrishi/carebridge-canada/blob/main/README.md">
                  Setup and browser checks
                </a>{" "}
                ·{" "}
                <a href="https://github.com/Kushrishi/carebridge-canada/blob/main/docs/prairiereach-mvp.md">
                  Scope and research record
                </a>
              </p>
            </>
          ),
        },
        {
          id: "next",
          title: "Validation and future work",
          content: (
            <>
              <p>
                Compare the same fictional booking-change task against a shared
                checklist/calendar. Observe correct next-action and owner
                identification, missed dependencies, false confirmation, task
                time and support-person effort. Counterbalance order and keep
                individual failures.
              </p>
              <p>
                Start with exploratory feedback from approximately five to eight
                residents or caregivers and two to three administrative
                reviewers. No outreach has been performed. Proceed only after
                finding recurring coordination work, a responsible maintainer
                and a useful improvement over existing tools.
              </p>
              <p>
                If supported, build record-level access controls, explicit
                delegation and revocation, durable versioned events and
                idempotent reminders. Source extraction can later propose tasks
                for human review. It should not silently book services or make
                clinical decisions.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
