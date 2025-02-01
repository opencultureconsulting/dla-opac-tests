// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  /* Configure projects for browsers */
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
       name: 'mobile',
       use: { ...devices['Pixel 5'] },
     },
  ],
});
