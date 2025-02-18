import { test, expect } from '@playwright/test';

const baseURL = process.env.BASEURL;
if (!baseURL) {
    throw new Error('BASEURL environment variable is not defined');
}
const username = process.env.MAILID as string;
if (!username) {
    throw new Error('MAILID environment variable is not defined');
}
const password = process.env.PASSWORD;
if (!password) {
    throw new Error('PASSWORD environment variable is not defined');
}

test('test', async ({ page }) => {
    // Goto Base URL
    await page.goto(baseURL);
    // Input Login
    await page.locator('input#email').fill(username);
    await page.locator('input#password').fill(password);
    await page.getByRole('button', { name: 'Submit' }).click();
    // Goto Home Page
    await page.getByRole('heading', { name: 'Contact List' }).click();
    // Add Contact
    await page.getByRole('button', { name: 'Add a New Contact' }).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Manikandan');
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('Adaikalam');
    await page.getByPlaceholder('yyyy-MM-dd').click();
    await page.getByPlaceholder('yyyy-MM-dd').fill('1996-12-07');
    await page.getByPlaceholder('example@email.com').click();
    await page.getByPlaceholder('example@email.com').fill('manizivamsd@gmail.com');
    await page.getByPlaceholder('8005551234').click();
    await page.getByPlaceholder('8005551234').fill('8098606357');
    await page.getByPlaceholder('Address 1').click();
    await page.getByPlaceholder('Address 1').fill('434, Pudumanai 1st street');
    await page.getByPlaceholder('Address 2').click();
    await page.getByPlaceholder('Address 2').fill('Rayavaram');
    await page.getByPlaceholder('City').click();
    await page.getByPlaceholder('City').fill('Pudukkottai');
    await page.getByPlaceholder('State or Province').click();
    await page.getByPlaceholder('State or Province').fill('Tamilnadu');
    await page.getByPlaceholder('Postal Code').click();
    await page.getByPlaceholder('Postal Code').fill('622506');
    await page.getByPlaceholder('Country').click();
    await page.getByPlaceholder('Country').fill('India');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('cell', { name: 'Manikandan Adaikalam' }).click();
    // Logout and Goto LoginPage
    await page.getByRole('button', { name: 'Logout' }).click();
    await page.getByRole('heading', { name: 'Contact List App' }).click();
});