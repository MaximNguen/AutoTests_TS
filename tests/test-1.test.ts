import { test, expect, type Page } from '@playwright/test';
import { modeLabel } from '../locators/mainPage';

async function clickButton({ page }: { page: Page }, label: string): Promise<void> {
    await page.getByLabel(label, { exact: false }).click();
}

test('Проверка смены темы на темный и светлый режим', async ({ page }) => {
    await page.goto('https://playwright.dev/');
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
