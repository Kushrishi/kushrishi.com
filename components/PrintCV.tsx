"use client";
export function PrintCV() {
  return (
    <button className="button print-control" onClick={() => window.print()}>
      Save résumé as PDF
    </button>
  );
}
