const { test, expect } = require("@playwright/test");

test("Homepage loads and shows expected content", async ({ page }) => {
  await page.goto("https://example.com/");

  await expect(page).toHaveTitle(/Example Domain/);

  const heading = page.locator("h1");
  await expect(heading).toHaveText("Example Domain");

  const link = page.locator("a");
  await expect(link).toHaveAttribute(
    "href",
    "https://www.iana.org/domains/example"
  );
});
