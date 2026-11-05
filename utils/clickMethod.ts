import type { Page } from '@playwright/test';

async function clickButton({ page }: { page: Page }, label: string): Promise<void> {
    await page.getByLabel(label, { exact: false }).click();
}

export { clickButton };
