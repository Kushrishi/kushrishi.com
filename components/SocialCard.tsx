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
          width: "79%",
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
            fontSize: 90,
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
            fontSize: 15,
            letterSpacing: "0.12em",
            color: "#93a0a6",
            fontWeight: 700,
          }}
        >
          {footer}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 72,
          top: 110,
          width: 178,
          height: 360,
          display: "flex",
          borderLeft: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 34,
            top: 24,
            width: 112,
            height: 112,
            borderRadius: 999,
            border: "1px solid rgba(157,249,255,0.30)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 62,
            top: 52,
            width: 56,
            height: 56,
            borderRadius: 999,
            border: "1px solid rgba(157,249,255,0.58)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 86,
            top: 76,
            width: 8,
            height: 8,
            borderRadius: 999,
            backgroundColor: "#9df9ff",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 30,
            top: 210,
            width: 122,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 30,
            top: 210,
            width: 54,
            height: 1,
            backgroundColor: "#9df9ff",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 84,
            top: 210,
            width: 28,
            height: 1,
            backgroundColor: "#ff9b8f",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 106,
            top: 206,
            width: 9,
            height: 9,
            borderRadius: 999,
            backgroundColor: "#ff9b8f",
            display: "flex",
          }}
        />
      </div>
    </div>
  );
}
