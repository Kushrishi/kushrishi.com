"use client";
export function PrintCV() {
  return (
    <button className="button print-control" onClick={() => window.print()}>
      Print / Save PDF
    </button>
  );
}
