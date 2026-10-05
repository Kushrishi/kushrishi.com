type SocialCardProps = {
  eyebrow: string;
  lines: [string, string, string];
  footer: string;
  accentLine?: number;
};

export function SocialCard({
  eyebrow,
  lines,
  footer,
  accentLine = 2,
}: SocialCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#07090b",
        color: "#f2f4f4",
        padding: "58px 64px 54px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: "1px solid rgba(157,249,255,0.13)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 17,
            letterSpacing: "0.18em",
            color: "#93a0a6",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 72,
            lineHeight: 0.88,
            letterSpacing: "-0.045em",
            fontWeight: 800,
            fontSize: 80,
          }}
        >
          {lines.map((line, index) => (
            <div
              key={line}
              style={{
                display: "flex",
                color: index === accentLine ? "#9df9ff" : "#f2f4f4",
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 13,
            letterSpacing: "0.12em",
            color: "#93a0a6",
            fontWeight: 700,
          }}
        >
          {footer}
        </div>
      </div>

      <div style={{ position:"absolute", right:64, bottom:54, display:"flex", fontSize:20, color:"#9df9ff", fontWeight:600 }}>kushrishi.com</div>
    </div>
  );
}
