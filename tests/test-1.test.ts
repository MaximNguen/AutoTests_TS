import { test, expect, type Page } from '@playwright/test';
import { modeLabel } from '../locators/mainPage';
import { clickButton } from '../utils/clickMethod';

test.describe('Проверка кнопок на главной странице', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

    test('Проверка смены темы на темный и светлый режим', async ({ page }) => {
        // Проверка видимости кнопки переключения темы
        await clickButton({ page }, modeLabel);
        await expect(
            page.getByRole('button', { name: 'Switch between dark and light' }),
        ).toHaveAttribute('title', 'light mode');
        await clickButton({ page }, modeLabel);
        await expect(
            page.getByRole('button', { name: 'Switch between dark and light' }),
        ).toHaveAttribute('title', 'dark mode');
    });

    test('Проверка главной кнопки "Get started"', async ({ page }) => {
        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page).toHaveURL(/.*docs\/intro/);
    });
});
