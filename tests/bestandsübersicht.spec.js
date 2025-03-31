// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.dla-marbach.de/bestandsuebersicht');
  await page.getByRole('textbox', { name: 'Suche in der Bestandsübersicht' }).click();
  await page.getByRole('textbox', { name: 'Suche in der Bestandsübersicht' }).fill('kafka');
  await page.locator('#PE00001005').getByRole('link', { name: '' }).click();
  await expect(page.locator('#BF00000718')).toContainText('Sammlung, Handschriftensammlung [A:Kafka, Franz]');
});
