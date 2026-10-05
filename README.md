# Kush Rishi

Personal website with independent research and engineering projects.

[Website](https://kushrishi.com) · [Experience and CV](https://kushrishi.com/cv)

## Project pages

- **TrueMargin:** registration uncertainty, recorded correlations, blind spots and calibrated error bounds.
- **Model Regression Forensics:** training-change diagnostics, negative results and ambiguous repairs.
- **Autonomy Simulation Lab:** interactive planning/localization and a separate native replay tool.

Each page links to methods, results, limitations, code and reproduction instructions. The home-page plot uses the retained TrueMargin anatomy comparator CSV. `data/registration.json` preserves its numeric values; rounding is applied only in the display. Comparator failures and valid-case counts remain in the linked source record.

## Run

Node.js 22 or later:

```bash
npm ci
npm run dev
```

## Verify

```bash
npm run lint
npm run build
npx playwright install --with-deps chromium webkit
npm run test:browser
```

Browser checks cover six content routes at 320, 390, 768 and 1440 pixels, plot selection, keyboard focus, automated WCAG checks, reduced motion and content without JavaScript. They do not replace physical-device or assistive-technology testing.

## Structure

- `app/`: static routes, metadata and social images.
- `components/EvidenceExplorer.tsx`: small client-side recorded-data comparison.
- `components/LaunchPage.tsx`: project-page structure and navigation.
- `components/SocialCard.tsx`: project-specific previews in the shared visual system.
- `data/registration.json`: numeric display data from the public research record.
- `tests/browser/`: Chromium and WebKit checks, also run by CI.

Essential content renders as HTML. Graphics do not require WebGL. Reduced-motion preferences disable transitions. The site uses no trackers or third-party animation runtime.
