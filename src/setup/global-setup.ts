import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/Common/LoginPages.page';
const baseURL = process.env.BASEURL as string;

test('Login', async ({ page }) => {
  //Login
  const loginPage = new LoginPage(page)
  await page.goto(baseURL);
  console.log('Navigate to '+baseURL)
  await loginPage.login()
  //Store auth session to LoginAuth.json
  await page.context().storageState({path:"./src/setup/LoginAuth.json"})
});