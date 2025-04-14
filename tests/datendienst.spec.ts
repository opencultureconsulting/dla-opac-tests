import { test, expect } from '@playwright/test';

test('fields', async ({ page }) => {
  await page.goto('https://dataservice.dla-marbach.de/');
  // Öffne Endpunkt /records
  await page.getByRole('link', { name: '/records', exact: true }).click();
  // Erwarte einen bestimmten Feldnamen in der Tabelle
  await page.waitForLoadState();
  await expect(page.getByRole('table')).toContainText('filterDateRange_mv');
});