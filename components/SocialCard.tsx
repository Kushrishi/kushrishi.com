import records from "@/data/registration.json";

type Props = { kind?: "home" | "tm" | "mrf" | "asl" };

export function SocialCard({ kind = "home" }: Props) {
  const info = {
    home: {
      name: "Kush Rishi",
      sub: "Selected work",
      color: "#284bea",
      label: "SELECTED PROJECTS",
      foot: "Experience · Projects · CV",
    },
    tm: {
      name: "TrueMargin",
      sub: "Image-registration error and uncertainty.",
      color: "#284bea",
      label: "ANATOMY-LEVEL CORRELATIONS",
      foot: "30 controlled cases · 10 anatomies",
    },
    mrf: {
      name: "Model Regression Forensics",
      sub: "Compare classifier predictions.",
      color: "#a6532e",
      label: "RANK OF THE PLANTED CHANGE",
      foot: "Two constructed Banking77 benchmarks",
    },
    asl: {
      name: "Autonomy Simulation Lab",
      sub: "Replay sensor data. Compare outputs.",
      color: "#136c64",
      label: "RECORDING COMPARISON",
      foot: "C++ · Python · Browser simulator",
    },
  }[kind];

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#fafbfc",
        color: "#192132",
        padding: 56,
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 590,
          paddingRight: 30,
        }}
      >
        <div style={{ display: "flex", fontSize: 16, letterSpacing: "0.08em", color: "#586170" }}>
          {kind === "home" ? "PORTFOLIO" : "KUSH RISHI / SELECTED WORK"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            marginTop: 90,
          }}
        >
          {info.name}
        </div>
        <div style={{ display: "flex", fontSize: 29, lineHeight: 1.35, color: info.color, marginTop: 24 }}>
          {info.sub}
        </div>
        <div style={{ display: "flex", fontSize: 17, lineHeight: 1.5, color: "#586170", marginTop: "auto" }}>
          {info.foot}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 470,
          background: info.color,
          color: "#fff",
          padding: 28,
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", fontSize: kind === "home" ? 18 : 13, letterSpacing: "0.04em", marginBottom: 24 }}>
          {info.label}
        </div>
        {kind === "home" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              "Capsule Review",
              "TrueMargin",
              "Model Regression Forensics",
              "Autonomy Simulation Lab",
            ].map((name) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", padding: "24px 0", borderBottom: "1px solid #8298f4" }}>
                <span style={{ fontSize: 34, lineHeight: 1.25 }}>{name}</span>
              </div>
            ))}
          </div>
        ) : kind === "tm" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <svg width="410" height="330" viewBox="0 0 410 330">
              {records.map((record, i) => (
                <g key={record.id}>
                  <line x1={20 + record.spread * 350} x2={20 + record.ice * 350} y1={20 + i * 29} y2={20 + i * 29} stroke="#afc0f9" />
                  <circle cx={20 + record.ice * 350} cy={20 + i * 29} r="6" fill="#efb17e" />
                  <circle cx={20 + record.spread * 350} cy={20 + i * 29} r="6" fill="#fff" />
                </g>
              ))}
            </svg>
            <div style={{ display: "flex", fontSize: 15 }}>
              White: ensemble spread · Amber: ICE
            </div>
          </div>
        ) : kind === "mrf" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              ["Diagnostic", "Benchmark A / B"],
              ["Label overlap", "1 / 1"],
              ["Lexical Jaccard", "1 / 1"],
              ["Grad-Dot", "1 / 5"],
              ["TracIn", "1 / 5"],
            ].map(([name, ranks], i) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", fontSize: i === 0 ? 14 : 23, padding: "20px 0", borderBottom: "1px solid #d9a487" }}>
                <span>{name}</span>
                <span>{ranks}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              "01   Check the recording",
              "02   Run CPU inference",
              "03   Compare changed frames",
            ].map((step) => (
              <div key={step} style={{ display: "flex", fontSize: 21, padding: "24px 0", borderBottom: "1px solid #7bb5af" }}>
                {step}
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: "flex", position: "absolute", bottom: 18, right: 56, fontSize: 15, color: "#586170" }}>
        kushrishi.com
      </div>
    </div>
  );
}
