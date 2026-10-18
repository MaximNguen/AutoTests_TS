import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
    await page.getByRole('button', { name: 'Search (Control+k)' }).click();
    await expect(page.getByRole('searchbox', { name: 'Search' })).toBeEmpty();
    await page.getByRole('searchbox', { name: 'Search' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('11111');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Clear the query' })).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
});
