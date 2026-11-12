const report = "https://github.com/Kushrishi/capsule-review-public/blob/main/docs/GALAR_UNSEEN_11_20_RESULTS.md";

export function CapsuleEvidence() {
  return (
    <figure className="recorded-figure">
      <div className="plate-heading"><span>Locked comparison</span><span>10% of frames</span></div>
      <table className="result-table">
        <caption>Blood-positive sequences reached (mean annotation-run recall)</caption>
        <thead><tr><th scope="col">Selection policy</th><th scope="col">Recall</th></tr></thead>
        <tbody>
          <tr><th scope="row">Score per chronological bin</th><td>49.35%</td></tr>
          <tr><th scope="row">Uniform sampling</th><td>50.62%</td></tr>
        </tbody>
      </table>
      <figcaption>A run is a sequence of consecutive positive labels. Each examination contributes equally to this six-examination mean. <a href={report}>Locked study and evidence</a>.</figcaption>
    </figure>
  );
}
