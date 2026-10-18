async function clickButton({ page }: { page: any }, label: string): Promise<void> {
    await page.getByLabel(label, { exact: false }).click();
}

export { clickButton };
