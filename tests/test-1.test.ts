import { test, expect, type Page } from '@playwright/test';
import { modeLabel } from '../locators/mainPage';
import { clickButton } from '../utils/clickMethod';

const elements = [
    {
        locator: (page: Page) => page.getByRole('link', { name: 'Get started' }),
    },
    {
        locator: (page: Page) => page.getByRole('link', { name: 'Docs' }),
    },
    {
        locator: (page: Page) => page.getByRole('link', { name: 'API' }),
    },
    {
        locator: (page: Page) => page.getByRole('button', { name: 'Node.js' }),
    },
];

test.describe('Проверка кнопок на главной странице', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
    });

    test('Проверка смены темы на темный и светлый режим', async ({ page }) => {
        await test.step('Кликаем на кнопку', async () => {
            // Проверка видимости кнопки переключения темы
            await clickButton({ page }, modeLabel);
        });
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

    test('Проверка наличие всех возможных кнопок', async ({ page }) => {
        elements.forEach(({ locator }) => {
            test.step('Проверяем', async () => {
                await expect.soft(locator(page)).toBeVisible();
            });
        });
    });
});
