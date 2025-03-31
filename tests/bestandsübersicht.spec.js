// @ts-check
import { test, expect } from '@playwright/test';

// Selector für den "Suche starten"-Button
const selector_button_search = 'text=Weitere Details';

test('test', async ({ page }) => {
  await page.goto('https://www.dla-marbach.de/katalog');
  await page.getByRole('link', { name: ' Bestandsübersicht' }).click();
  await page.getByRole('textbox', { name: 'Suche in der Bestandsübersicht' }).click();
  await page.getByRole('textbox', { name: 'Suche in der Bestandsübersicht' }).fill('kafka');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Kafka, Franz (1883-1924)' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Weitere Details').click();
  await page1.getByText('Österreich').dblclick();
  await page1.getByText('Österreich').click({
    button: 'right'
  });
  await page1.getByRole('listitem').filter({ hasText: 'Österreich' }).click();
  await expect(page1.locator('#content-area')).toContainText('Österreich');
});
