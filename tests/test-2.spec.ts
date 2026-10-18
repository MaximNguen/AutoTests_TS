import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('Docs');
    await expect(page.getByRole('navigation', { name: 'Main' })).toContainText('API');
});
