// @ts-check
import { test, expect } from '@playwright/test';

test('kafka', async ({ page }) => {
  await page.goto('find/opac/id/PE00001005');
  // Zeige versteckten Inhalt "Weitere Details"
  await page.getByText('Weitere Details').click();
  // Erwarte bestimmten Text auf der Detailseite
  await page.waitForLoadState();
  await expect(page.locator('#content-area')).toContainText('Tschechische Republik');
});
