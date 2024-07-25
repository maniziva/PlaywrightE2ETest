import { test, expect } from '@playwright/test';
const baseURL = process.env.BASEURL as string;

test('Navigation', async ({ page }) => {
  //Navigation
  await page.goto(baseURL);
  console.log('Navigation - Started');

});