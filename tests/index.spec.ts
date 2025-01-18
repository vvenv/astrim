import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await expect(page).toHaveTitle(/ASTRIM/);
});

test("menu drawer", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.getByLabel("Toggle menu").click();
  await expect(
    page.getByTestId("menu-drawer-content").locator("div").nth(1)
  ).toBeVisible();
});
