import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("theme follows system, remembers explicit choice and keeps print light", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const theme = page.getByLabel("Colour theme");
  await expect(theme).toHaveValue("system");
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(17, 24, 39)");
  await theme.selectOption("light");
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(252, 252, 253)");
  await page.reload();
  await expect(theme).toHaveValue("light");
  await theme.selectOption("dark");
  await page.goto("/cv");
  await expect(theme).toHaveValue("dark");
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(17, 24, 39)");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(theme).toBeHidden();
  await page.emulateMedia({ media: "screen", colorScheme: "light" });
  await theme.selectOption("system");
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(252, 252, 253)");
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(17, 24, 39)");
});

test("dark pages remain accessible and fit mobile and desktop", async ({ page }, testInfo) => {
  await page.emulateMedia({ colorScheme: "dark" });
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/cv", "/research/truemargin", "/research/model-regression-forensics", "/projects/autonomy-simulation-lab"]) {
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(result.violations).toEqual([]);
      if (width !== 320) await testInfo.attach(`dark-${width}-${route.replaceAll("/", "-")}`, { body: await page.screenshot({ fullPage: true }), contentType: "image/png" });
    }
  }
});

test("mobile overview puts all three project links near the introduction", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const links = page.getByRole("navigation", { name: "Selected projects" }).getByRole("link");
  await expect(links).toHaveCount(3);
  await expect(links.nth(0)).toContainText("Model Regression Forensics");
  await expect(links.nth(1)).toContainText("Autonomy Simulation Lab");
  await expect(links.nth(2)).toContainText("TrueMargin");
  const overview = await page.locator(".work-index").boundingBox();
  expect(overview!.y).toBeLessThan(700);
});
