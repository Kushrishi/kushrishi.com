# Publication evidence provenance

Presentation only: no inference, registration, benchmark or source-measurement change.

- ASL `native-asl-wall-time-publication.{png,svg}` is a distinct spacing derivative
  of the accepted `docs/assets/performance_data.json` in autonomy-simulation-lab.
  Source SHA-256: `9abbd18cc1009551e02e814eba70a1498c82c50ba8e9d2982d7826c00f3fc23c`.
  Original website benchmark remains at `/projects/native-asl-matched-wall-time.png`.
  All six values and retained pair ordering are unchanged. Full-precision HTML labels
  are exact decimal strings copied from that JSON, avoiding JavaScript
  number-to-string normalization of the original recorded digits. The separate 57.5238%
  stage result is retained from the accepted native case study, not derived from
  the whole-process JSON. ONNX Runtime, MobileNetV2, KITTI, libpng and Rerun remain
  third-party runtime/model/data/decoder/viewer components.
- TrueMargin panels and the homepage case groups use the unchanged retained
  comparator/characterization CSV values. Source anatomy-table SHA-256:
  `ffa441251e2d606829c17aebb9c05f11545c3cb8504d5d036481bd028e0aca45`;
  case-table SHA-256: `141a8f42a9bec01b6e22ae27b756c96b2ac248e57b5b1f76b726854f74053153`.
  Ten source anatomies, three synthetic deformation cases per anatomy, fifty
  spatial samples per case. Spatial samples and repeated deformations are not
  independent patients. Case signs and order are preserved; six cases are negative.
  Source CSV links remain alongside the detailed panels. M6 uses a separate
  calibration/evaluation cohort and is not pooled into M4/M5 association results.
  Original M4–M6 figure remains at `/projects/truemargin.png`.
- No native Rerun screenshot or dataset-derived telemetry derivative is included:
  its rights gate remains unresolved. No private original screenshots are included.

## Regenerate the TrueMargin publication panels

From the repository root, with Python and Matplotlib installed:

```bash
python3 scripts/render_truemargin_publication.py
```

The public-only script reads `data/truemargin-publication.json` and writes the
association/case SVG and PNG files to `public/projects/publication/`.
Use `--output-dir /tmp/truemargin-publication-check` to verify without replacing
reviewed assets. It asserts exact plotted values, retained case ordering and six
negative associations; it does not calculate new correlations or calibration.
M6 remains a separate cohort. No native screenshots or dataset images are read.
Fixed font/canvas settings, SVG IDs and omitted dates make repeat output
byte-identical within the same rendering environment (verified Matplotlib 3.10.8).
Original research figures and source-value JSON remain unchanged.
