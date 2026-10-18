import { test, expect, type Page } from '@playwright/test';
import { modeLabel } from '../locators/mainPage';
import { clickButton } from '../utils/clickMethod';

test.describe('Проверка смены темы на темный и светлый режим', () => {
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
});
