import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/cv",
  "/research/capsule-review",
  "/research/truemargin",
  "/research/model-regression-forensics",
  "/projects/autonomy-simulation-lab",
];

// Check rendered content: shared components can otherwise restore obsolete copy.
test("public pages describe current work without internal process notes", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const text = await page.locator("main").innerText();
    expect(text).not.toMatch(/Montréal|Montreal/i);
    expect(text).not.toMatch(/owner-side|independent first use remains unestablished|independent landmark validation is (?:next|the next test)|healthcare AI research interests|\bpreflight\b/i);
    if (route !== "/" && route !== "/cv") {
      await expect(page.locator(".launch-summary p")).not.toBeEmpty();
    }
  }
  await page.goto("/");
  await expect(page.locator(".hero-statement")).toHaveText("GNSS Analyst at Xona");
  await expect(page.locator("footer")).toContainText("Kush Rishi");
});
