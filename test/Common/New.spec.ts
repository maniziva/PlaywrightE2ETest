const { test, expect } = require('@playwright/test');
const baseURL = process.env.BASEURL as string;

test('basic test', async ({ page }) => {
  await page.goto(baseURL);
  const title = await page.title();
  expect(title).toBe('Contact List App');
});