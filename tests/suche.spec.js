// @ts-check
import { test, expect } from '@playwright/test';

test('ricarda-huch', async ({ page }) => {
  await page.goto('katalog');
  // Suche
  await page.locator('#token-input-c-field-').click();
  await page.locator('#token-input-c-field-').fill('Ricarda Huch');
  await page.getByRole('button', { name: ' Jetzt suchen' }).click();
  // Erwarte bestimmten Text auf der Seite (hier Normdaten-Werbetreffer)
  await page.waitForLoadState();
  await expect(page.locator('#content-area')).toContainText('Huch, Ricarda (1864-1947)');
});
