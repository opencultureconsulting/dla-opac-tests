// @ts-check
import { test, expect } from '@playwright/test';

test('kafka', async ({ page }) => {
  await page.goto('find/opac/id/PE00001005');
  await page.waitForLoadState();
  expect(await page.content()).toMatch('Tschechische Republik');
});
