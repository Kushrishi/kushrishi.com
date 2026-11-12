# Kush Rishi

Personal website with independent research and engineering projects.

[Website](https://kushrishi.com) · [Experience and CV](https://kushrishi.com/cv)

## Project pages

- **[Capsule Review](https://kushrishi.com/research/capsule-review):** capsule-endoscopy viewer and a locked, negative comparison of fixed-budget frame selection, with links to the scientific summary and synthetic demo.
- **TrueMargin:** registration uncertainty, recorded correlations, blind spots and calibrated error bounds.
- **Model Regression Forensics:** saved classification-release comparison and portable reports; completed attribution research, negative results and ambiguous repairs.
- **Autonomy Simulation Lab:** interactive planning/localization and a separate native replay tool.

Project entries link to methods, results, limitations, code and reproduction instructions. The interactive plot on the TrueMargin project page uses the retained anatomy comparator CSV. `data/registration.json` preserves its numeric values; rounding is applied only in the display. Comparator failures and valid-case counts remain in the linked source record.

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

Browser checks cover six content routes at 320, 390, 430, 768, 1024, 1440 and 1920 pixels, plot selection, keyboard focus, automated WCAG checks, reduced motion, image loading, zoom, print output and content without JavaScript. Unknown routes and the retired PrairieReach routes have separate status/indexing checks. These checks do not replace physical-device or assistive-technology testing.

## Structure

- `app/`: static routes, metadata and social images.
- `components/EvidenceExplorer.tsx`: small client-side recorded-data comparison.
- `components/LaunchPage.tsx`: project-page structure and navigation.
- `components/SocialCard.tsx`: project-specific previews in the shared visual system.
- `data/registration.json`: numeric display data from the public research record.
- `tests/browser/`: Chromium and WebKit checks, also run by CI.

Essential content renders as HTML. Graphics do not require WebGL. Reduced-motion preferences disable transitions. The site uses no trackers or third-party animation runtime.

## CV download

`/cv` is the maintained CV source. `/Kush-Rishi-CV.pdf` is its reviewed two-page
export. Download the PDF to view, save or print the reviewed layout. Browser
printing of the web page can vary with browser and paper settings.
After changing CV content, styles, layout or its font, rebuild and regenerate the PDF:

```bash
npm run build
UPDATE_CV_PDF=1 npx playwright test --project=chromium -g "Letter resume PDF"
```

Inspect both PDF pages, check links and commit the PDF and `tests/cv-pdf.json`
with the source change. Normal CI checks the source fingerprints, served PDF
bytes and two-page count so the download cannot silently become stale.

## Profile artwork

`public/brand/linkedin-banner.png` is the approved navy “Selected work” master
image. LinkedIn applies its cover crop when uploading; keep the text on the right
and the portrait area clear. Project previews use the shared
`SocialCard` layout with distinct project accents; they do not follow a visitor’s
light/dark preference.
