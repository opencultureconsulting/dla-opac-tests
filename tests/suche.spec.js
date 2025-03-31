// @ts-check
import { test, expect } from '@playwright/test';

// Selector des Eingabefeldes
const selector_query_text = '//li/input[normalize-space(@type)=\'text\']';

// Selector für den "Suche starten"-Button
const selector_button_search = 'text=Jetzt suchen';

test('ricarda-huch', async ({ page }) => {
  await page.goto('katalog');
  await page.click(selector_query_text);
  await page.fill(selector_query_text, 'Ricarda Huch');
  await page.click(selector_button_search);
  await page.waitForLoadState();
  expect(await page.content()).toMatch('Huch, Ricarda');
});
