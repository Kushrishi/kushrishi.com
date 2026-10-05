import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/cv",
  "/research/truemargin",
  "/research/model-regression-forensics",
  "/projects/autonomy-simulation-lab",
];
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
  await page.goto("/");
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
test("hero is keyboard operable and links expose three flagships", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  const slider = page.getByLabel("Explore displacement");
  await slider.focus();
  await page.keyboard.press("ArrowRight");
  await expect(slider).toHaveValue("56");
  await expect(page.locator(".project-row")).toHaveCount(3);
});

test("visual evidence, image loading, console and zoom", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const width of [390, 768, 1440]) {
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

test("direct slider manipulation has no positional easing", async ({
  page,
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
  });
  const touchPage = await context.newPage();
  await touchPage.goto("/");
  const slider = touchPage.getByRole("slider", {
    name: "Explore displacement",
  });
  await slider.scrollIntoViewIfNeeded();
  const rect = await slider.boundingBox();
  if (!rect) throw new Error("Slider is missing");
  await touchPage.touchscreen.tap(
    rect.x + rect.width * 0.8,
    rect.y + rect.height / 2,
  );
  const value = Number(await slider.inputValue());
  expect(value).toBeGreaterThan(55);
  expect(
    await touchPage
      .locator(".field-figure circle")
      .first()
      .evaluate((e) => getComputedStyle(e).transitionDuration),
  ).toBe("0s");
  const center = touchPage.locator(".field-figure circle[r='6']");
  expect(Number(await center.getAttribute("cx"))).toBeCloseTo(
    252 + value * 0.85,
    3,
  );
  await context.close();
});
test("Letter resume PDF and current icon metadata", async ({
  page,
  browserName,
}, testInfo) => {
  await page.goto("/cv");
  await expect(
    page.getByRole("button", { name: "Save résumé as PDF" }),
  ).toBeVisible();
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).toBeHidden();
  await expect(page.locator(".print-contact")).toBeVisible();
  if (browserName === "chromium") {
    const output = testInfo.outputPath("Kush-Rishi-Resume.pdf");
    await page.pdf({
      path: output,
      preferCSSPageSize: true,
      printBackground: true,
    });
    await testInfo.attach("resume", {
      path: output,
      contentType: "application/pdf",
    });
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
