import { test, expect } from '@playwright/test';

test('fields', async ({ page }) => {
  await page.goto('https://dataservice.dla-marbach.de/');
  await page.getByRole('link', { name: '/records', exact: true }).click();
  await expect(page.getByRole('table')).toContainText('filterDateRange_mv');
});