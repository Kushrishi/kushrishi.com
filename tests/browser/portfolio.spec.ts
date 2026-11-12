import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/cv",
  "/research/capsule-review",
  "/research/truemargin",
  "/research/model-regression-forensics",
  "/projects/autonomy-simulation-lab",
];
test("unknown routes show a branded, noindex 404", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Page not found." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to selected work →" })).toHaveAttribute("href", "/#work");
  const robots = await page.locator('meta[name="robots"]').evaluateAll(
    (tags) => tags.map((tag) => tag.getAttribute("content") || ""),
  );
  expect(robots.some((value) => value.includes("noindex"))).toBe(true);
});
for (const width of [320, 390, 430, 768, 1024, 1440, 1920]) {
  test(`all pages remain readable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      const overflow = await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        elements: [...document.querySelectorAll("body *")]
          .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
          .map((e) => ({
            tag: e.tagName,
            class: e.className,
            right: e.getBoundingClientRect().right,
            visibility: getComputedStyle(e).visibility,
            display: getComputedStyle(e).display,
          })),
      }));
      expect(
        overflow.scroll,
        JSON.stringify({ route, ...overflow }),
      ).toBeLessThanOrEqual(width);
      if (route === "/research/truemargin") {
        await page.getByText("Data and provenance", { exact: true }).click();
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth),
        ).toBeLessThanOrEqual(width);
        await expect(
          page.getByRole("link", { name: "Source CSV", exact: true }),
        ).toBeVisible();
      }
      expect(await page.locator("body").innerText()).not.toContain("\u2014");
      await expect(page.locator("main")).toBeVisible();
    }
  });
}
test("comparison selection changes the recorded values and remains keyboard accessible", async ({
  page,
}) => {
  await page.goto("/research/truemargin");
  await page
    .getByLabel("Compare ensemble spread with")
    .selectOption("residual");
  await page.getByLabel("Inspect anatomy").selectOption("1");
  await expect(page.locator('[aria-live="polite"]')).toContainText("0.610");
  await expect(page.locator('[aria-live="polite"]')).toContainText("0.560");
  await page.getByLabel("Compare ensemble spread with").focus();
  await expect(page.getByLabel("Compare ensemble spread with")).toBeFocused();
  await page.getByText("Data and provenance", { exact: true }).click();
  await expect(
    page.getByRole("link", { name: "Source CSV", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("table")).toHaveCount(2);
});
test("WCAG automated checks on all routes", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
});
test("reduced motion removes graphical transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/research/truemargin");
  expect(
    await page
      .locator("circle")
      .first()
      .evaluate((e) => getComputedStyle(e).transitionDuration),
  ).toBe("0s");
});
test("recorded values and navigation are present without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto((process.env.BASE_URL || "http://127.0.0.1:3012") + "/");
  await expect(
    page.getByRole("heading", { name: "Kush Rishi.", exact: true }),
  ).toBeVisible();
  await page.goto(
    (process.env.BASE_URL || "http://127.0.0.1:3012") + "/research/truemargin",
  );
  await page.getByText("Data and provenance", { exact: true }).click();
  await expect(
    page.getByRole("link", { name: "Source CSV", exact: true }),
  ).toBeVisible();
  await context.close();
});

test("retired project and social media return 410 without indexing", async ({
  request,
}) => {
  for (const path of [
    "/projects/prairiereach",
    "/projects/prairiereach/opengraph-image",
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(410);
    expect(response.headers()["x-robots-tag"]).toContain("noindex");
  }
});
test("hero is keyboard operable and links expose four projects", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  const firstProject = page.getByRole("navigation", { name: "Selected projects" }).getByRole("link").first();
  await firstProject.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#capsule$/);
  await expect(page.locator(".project-row")).toHaveCount(4);
});

test("visual evidence, image loading, console and zoom", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("main")).toBeVisible();
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveJSProperty("complete", true);
        expect(
          await img.evaluate((i) => (i as HTMLImageElement).naturalWidth),
        ).toBeGreaterThan(0);
      }
      if (route === "/projects/autonomy-simulation-lab") {
        await page.getByText("Inspect exact recorded timings", { exact: true }).click();
        await expect(page.locator(".exact-timings")).toBeVisible();
        await expect(page.locator(".exact-timings")).toContainText("3.9802216890020645");
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await testInfo.attach(
        `${width}-${route.replaceAll("/", "-") || "home"}`,
        {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        },
      );
      const broken = await page
        .locator("img")
        .evaluateAll((images) =>
          images
            .filter(
              (i): i is HTMLImageElement =>
                i instanceof HTMLImageElement &&
                i.complete &&
                i.naturalWidth === 0,
            )
            .map((i) => i.src),
        );
      expect(broken).toEqual([]);
    }
  }
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const route of routes) {
    await page.goto(route);
    await page.evaluate(() => {
      document.documentElement.style.zoom = "2";
    });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(1280);
    await expect(page.locator("h1")).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("Letter resume PDF and current icon metadata", async ({
  page,
  browserName,
}, testInfo) => {
  await page.goto("/cv");
  await expect(
    page.getByRole("button", { name: "Print CV" }),
  ).toHaveCount(0);
  const downloadLink = page.getByRole("link", { name: "Download CV (PDF)" });
  await expect(downloadLink).toBeVisible();
  await expect(downloadLink).toHaveAttribute("href", "/Kush-Rishi-CV.pdf");
  await expect(downloadLink).toHaveAttribute("download", "");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).toBeHidden();
  await expect(page.locator(".print-contact")).toBeVisible();
  if (browserName === "chromium") {
    const output = testInfo.outputPath("Kush-Rishi-Resume.pdf");
    await page.evaluate(() => document.fonts.ready);
    const pdf = await page.pdf({
      path: output,
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true,
    });
    await testInfo.attach("resume", {
      path: output,
      contentType: "application/pdf",
    });
    const inputs = ["app/cv/page.tsx", "app/globals.css", "app/layout.tsx", "app/fonts/manrope.woff2"];
    const sha = (bytes: Buffer) => createHash("sha256").update(bytes).digest("hex");
    const sourceHashes = Object.fromEntries(inputs.map((path) => [path, sha(readFileSync(path))]));
    const manifestPath = "tests/cv-pdf.json";
    if (process.env.UPDATE_CV_PDF === "1") {
      writeFileSync("public/Kush-Rishi-CV.pdf", pdf);
      writeFileSync(manifestPath, JSON.stringify({ sources: sourceHashes, pdf: sha(pdf) }, null, 2) + "\n");
    } else {
      const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
      expect(sourceHashes, "Regenerate and visually review the CV PDF after changing its source").toEqual(manifest.sources);
      const download = await page.request.get("/Kush-Rishi-CV.pdf");
      expect(download.status()).toBe(200);
      expect(download.headers()["content-type"]).toContain("application/pdf");
      const bytes = await download.body();
      expect(bytes.subarray(0, 5).toString()).toBe("%PDF-");
      expect(sha(bytes)).toBe(manifest.pdf);
      expect(bytes.toString("latin1").match(/\/Type \/Page\b/g)).toHaveLength(2);
    }
  }
  await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute(
    "sizes",
    "180x180",
  );
  const href = await page
    .locator('link[rel="icon"][type="image/svg+xml"]')
    .getAttribute("href");
  expect(href).toBeTruthy();
  const icon = await page.request.get(href!);
  expect(icon.status()).toBe(200);
  expect(await icon.text()).toContain("#234fe5");
});

test("Capsule project has a reachable overview, evidence and share metadata", async ({ page, request }) => {
  await page.goto("/");
  await page.locator("#capsule").getByRole("link", { name: "View project" }).click();
  await expect(page).toHaveURL(/\/research\/capsule-review$/);
  await expect(page.locator("h1")).toHaveText("Capsule Review");
  await expect(page.locator("main")).toContainText("49.35%");
  await expect(page.locator("main")).toContainText("50.62%");
  await expect(page.getByRole("link", { name: "Synthetic demo instructions" })).toHaveAttribute("href", /SUPERVISOR_DEMO.md$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://kushrishi.com/research/capsule-review");
  const imageUrl = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(imageUrl).toContain("/research/capsule-review/opengraph-image");
  const image = await request.get(new URL(imageUrl!).pathname);
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect(await (await request.get("/sitemap.xml")).text()).toContain("https://kushrishi.com/research/capsule-review");
  for (const link of await page.locator('.launch-toc a').all()) {
    const target = await link.getAttribute("href");
    await expect(page.locator(target!)).toHaveCount(1);
  }
});
