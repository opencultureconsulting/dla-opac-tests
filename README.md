# playwright-github-action
run Playwright tests with GitHub Actions and upload test-results (trace.zip) to GitHub Repo

[![Github Actions Workflow](https://github.com/felixlohmeier/playwright-github-action/actions/workflows/playwright.yml/badge.svg)](https://github.com/felixlohmeier/playwright-github-action/actions/workflows/playwright.yml)

## Playwright Trace Viewer

Desktop: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/felixlohmeier/playwright-github-action/refs/heads/main/test-results/example-get-started-link-desktop/trace.zip

Desktop: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/felixlohmeier/playwright-github-action/refs/heads/main/test-results/example-get-started-link-mobile/trace.zip

## Required settings

https://github.com/ysfaran/playwright-gh-actions-gh-pages/commit/3d87ee93626549b10ffd32d37b417ce008a9df68
* GitHub Repository / Settings / Actions / General / Workflow permissions
  * Select "Read and write permissions"
  * Save
