import { test, expect } from '@playwright/test';
const baseURL = process.env.BASEURL as string;
const username = process.env.MAILID as string;
const password = process.env.PASSWORD as string;

test('test', async ({ page }) => {
  // Goto Base URL
  await page.goto(baseURL);
  // Input Login
  await page.locator('input#email').fill(username);
  await page.locator('input#password').fill(password);
  await page.getByRole('button', { name: 'Submit' }).click();
  // Goto Home Page
  await page.getByRole('heading', { name: 'Contact List' }).click();
  // Logout and Goto LoginPage
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('heading', { name: 'Contact List App' }).click();
});