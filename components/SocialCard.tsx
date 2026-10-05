import records from "@/data/registration.json";
type Props = {
  eyebrow: string;
  lines: [string, string, string];
  footer: string;
  accentLine?: number;
};
export function SocialCard({ eyebrow, footer }: Props) {
  const kind = eyebrow.includes("REGRESSION")
    ? "mrf"
    : eyebrow.includes("AUTONOMY")
      ? "asl"
      : eyebrow.includes("TRUEMARGIN")
        ? "tm"
        : "home";
  const names = {
    home: "Kush Rishi",
    tm: "TrueMargin",
    mrf: "Model Regression Forensics",
    asl: "Autonomy Simulation Lab",
  };
  const labels = {
    home: "ML systems, evaluation and spatial intelligence",
    tm: "Registration uncertainty and spatial error",
    mrf: "Training changes and ambiguous repairs",
    asl: "Planning, localization and native replay",
  };
  const color = {
    home: "#adc0ff",
    tm: "#adc0ff",
    mrf: "#efb17e",
    asl: "#9edcd4",
  }[kind];
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#182235",
        color: "#f1f0e8",
        padding: 58,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 640 }}>
        <div
          style={{
            display: "flex",
            fontSize: 15,
            color: "#afbec2",
            letterSpacing: "0.06em",
          }}
        >
          KUSH RISHI / ENGINEERING & RESEARCH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            letterSpacing: "-0.045em",
            lineHeight: 1.04,
            marginTop: 84,
            maxWidth: 640,
          }}
        >
          {names[kind]}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 25,
            lineHeight: 1.4,
            color,
            marginTop: 24,
            maxWidth: 600,
          }}
        >
          {labels[kind]}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 14,
            color: "#afbec2",
            maxWidth: 620,
            lineHeight: 1.5,
          }}
        >
          {kind === "home" ? "GNSS Analyst at Xona · Montréal" : footer}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: 390,
          marginLeft: 35,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {kind === "tm" || kind === "home" ? (
          <div style={{ display: "flex", flexDirection: "column", width: 390 }}>
            <svg width="390" height="330" viewBox="0 0 390 330">
              <line x1="15" x2="375" y1="300" y2="300" stroke="#34474d" />
              {records.map((r, i) => (
                <g key={r.id}>
                  <line
                    x1={15 + r.spread * 350}
                    x2={15 + r.ice * 350}
                    y1={20 + i * 28}
                    y2={20 + i * 28}
                    stroke="#75888e"
                  />
                  <circle
                    cx={15 + r.ice * 350}
                    cy={20 + i * 28}
                    r="5"
                    fill="#efb17e"
                  />
                  <circle
                    cx={15 + r.spread * 350}
                    cy={20 + i * 28}
                    r="5"
                    fill="#adc0ff"
                  />
                </g>
              ))}
            </svg>
            <div style={{ display: "flex", fontSize: 13, color: "#afbec2" }}>
              Recorded anatomy-level associations
            </div>
          </div>
        ) : kind === "mrf" ? (
          <div style={{ display: "flex", flexDirection: "column", width: 390 }}>
            <div style={{ display: "flex", fontSize: 18, color: "#afbec2" }}>
              Root rank / World 00 · 01
            </div>
            {[
              ["Label overlap", "1 / 1"],
              ["Grad-Dot", "1 / 5"],
              ["TracIn", "1 / 5"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  width: 390,
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid #34474d",
                  fontSize: 22,
                }}
              >
                <span>{label}</span>
                <span style={{ color }}>{value}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", width: 390 }}>
            <div style={{ display: "flex", fontSize: 16, color: "#afbec2" }}>
              IMPLEMENTED / NEXT
            </div>
            {["Stable browser simulator", "Validated C++ frame decoding", "Next: preprocessing + inference"].map((s, i) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  padding: "22px 0",
                  borderBottom: "1px solid #34474d",
                  width: 390,
                  fontSize: 21,
                  color: i === 2 ? color : "#f1f0e8",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 25,
          right: 58,
          display: "flex",
          fontSize: 17,
          color,
        }}
      >
        kushrishi.com
      </div>
    </div>
  );
}
