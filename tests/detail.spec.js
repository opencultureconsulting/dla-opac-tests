// @ts-check
import { test, expect } from '@playwright/test';

// Selector für den "Suche starten"-Button
const selector_button_search = 'text=Weitere Details';

test('kafka', async ({ page }) => {
  await page.goto('https://www.dla-marbach.de/find/opac/id/PE00001005');
  await page.click(selector_button_search);
  await page.waitForLoadState();
  expect(await page.content()).toMatch('Tschechische Republik');
});
