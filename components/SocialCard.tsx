import records from "@/data/registration.json";
type Props = { kind?: "home" | "tm" | "mrf" | "asl" };
export function SocialCard({ kind = "home" }: Props) {
  const info = {
    home: {
      name: "Kush Rishi",
      sub: "ML systems. Evaluation. Spatial intelligence.",
      color: "#284bea",
      label: "SPATIAL CORRESPONDENCE",
      foot: "GNSS Analyst at Xona · Montréal",
    },
    tm: {
      name: "TrueMargin",
      sub: "Useful uncertainty. Important blind spots.",
      color: "#284bea",
      label: "RECORDED ANATOMY ASSOCIATIONS",
      foot: "30 controlled cases · 10 anatomies · External validation next",
    },
    mrf: {
      name: "Model Regression Forensics",
      sub: "What explains a model regression?",
      color: "#a6532e",
      label: "RECORDED ROOT-CANDIDATE RANK",
      foot: "Two constructed Banking77 worlds · Matched study complete",
    },
    asl: {
      name: "Autonomy Simulation Lab",
      sub: "Sensing systems you can inspect.",
      color: "#136c64",
      label: "NATIVE RECORDING COMPARISON",
      foot: "Browser v1 released · Native desktop acceptance pending",
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
        <div
          style={{
            display: "flex",
            fontSize: 16,
            letterSpacing: "0.08em",
            color: "#586170",
          }}
        >
          KUSH RISHI / SELECTED WORK
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
        <div
          style={{
            display: "flex",
            fontSize: 29,
            lineHeight: 1.35,
            color: info.color,
            marginTop: 24,
          }}
        >
          {info.sub}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 17,
            lineHeight: 1.5,
            color: "#586170",
            marginTop: "auto",
          }}
        >
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
        <div
          style={{
            display: "flex",
            fontSize: 13,
            letterSpacing: "0.04em",
            marginBottom: 24,
          }}
        >
          {info.label}
        </div>
        {kind === "home" ? (
          <svg width="410" height="330" viewBox="0 0 410 330">
            {Array.from({ length: 99 }, (_, i) => {
              const x = 25 + (i % 11) * 35,
                y = 25 + Math.floor(i / 11) * 34;
              const d = Math.exp(-((x - 205) ** 2 + (y - 165) ** 2) / 14000);
              return (
                <g key={i}>
                  <line
                    x1={x}
                    y1={y}
                    x2={x + 35 * d}
                    y2={y - 25 * d}
                    stroke="#8eabff"
                  />
                  <circle cx={x + 35 * d} cy={y - 25 * d} r="2.7" fill="#fff" />
                </g>
              );
            })}
            <circle
              cx="220"
              cy="150"
              r="38"
              stroke="#efb17e"
              fill="none"
              strokeDasharray="4 5"
            />
          </svg>
        ) : kind === "tm" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <svg width="410" height="330" viewBox="0 0 410 330">
              {records.map((r, i) => (
                <g key={r.id}>
                  <line
                    x1={20 + r.spread * 350}
                    x2={20 + r.ice * 350}
                    y1={20 + i * 29}
                    y2={20 + i * 29}
                    stroke="#afc0f9"
                  />
                  <circle
                    cx={20 + r.ice * 350}
                    cy={20 + i * 29}
                    r="6"
                    fill="#efb17e"
                  />
                  <circle
                    cx={20 + r.spread * 350}
                    cy={20 + i * 29}
                    r="6"
                    fill="#fff"
                  />
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
              ["Diagnostic", "World 00 / 01"],
              ["Label overlap", "1 / 1"],
              ["Lexical Jaccard", "1 / 1"],
              ["Grad-Dot", "1 / 5"],
              ["TracIn", "1 / 5"],
            ].map(([a, b], i) => (
              <div
                key={a}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: i === 0 ? 14 : 23,
                  padding: "20px 0",
                  borderBottom: "1px solid #d9a487",
                }}
              >
                <span>{a}</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              "01   Verify recording identity",
              "02   Execute CPU inference",
              "03   Compare + inspect changed frames",
            ].map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  fontSize: 21,
                  padding: "24px 0",
                  borderBottom: "1px solid #7bb5af",
                }}
              >
                {s}
              </div>
            ))}
            <div
              style={{
                display: "flex",
                fontSize: 17,
                marginTop: 30,
                lineHeight: 1.5,
              }}
            >
              NEXT / Desktop acceptance + independent first use
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: 18,
          right: 56,
          fontSize: 15,
          color: "#586170",
        }}
      >
        kushrishi.com
      </div>
    </div>
  );
}
