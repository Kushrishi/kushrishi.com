"use client";
export function PrintCV() {
  return (
    <button className="button print-control" onClick={() => window.print()}>
      Print CV
    </button>
  );
}
