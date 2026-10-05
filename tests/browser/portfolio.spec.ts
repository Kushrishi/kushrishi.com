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
  await page.goto("http://127.0.0.1:3012/");
  await expect(
    page.getByRole("heading", { name: "Kush Rishi.", exact: true }),
  ).toBeVisible();
  await page.goto("http://127.0.0.1:3012/research/truemargin");
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
