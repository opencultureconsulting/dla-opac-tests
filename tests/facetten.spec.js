import { test, expect } from '@playwright/test';

test('schillerplatz', async ({ page }) => {
  await page.goto('katalog');
  // Suche
  await page.locator('#token-input-c-field-').click();
  await page.locator('#token-input-c-field-').fill('schiller');
  await page.getByRole('button', { name: ' Jetzt suchen' }).click();
  // Wähle Facettenwert in geöffneter Facette
  await page.locator('#Medientypen').getByRole('link', { name: 'Bilder und Objekte' }).click();
  // Öffne geschlossene Facette
  await page.locator('#Ort').getByRole('heading', { name: 'Ort ' }).locator('a').click();
  // Wähle Werte in hierarchischer Facette
  await page.locator('#Ort').getByRole('link', { name: 'Schillerplatz Stuttgart' }).click();
  await page.locator('#Ort').getByRole('link', { name: ' Alle' }).click();
  // Erwarte bestimmten Text auf der Seite (hier Trefferliste)
  await page.waitForLoadState();
  await expect(page.locator('#content-area')).toContainText('Säkularfeier');
});