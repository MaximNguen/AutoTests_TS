import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.getByText('Wikipedia', { exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
    await page
        .getByRole('searchbox', { name: 'Search Wikipedia' })
        .fill('Test blalalalalala anable text');
    await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press('Enter');
    await page.getByText('There were no results').click();
});
