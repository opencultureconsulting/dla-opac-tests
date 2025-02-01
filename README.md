# playwright-github-action

run Playwright tests with GitHub Actions and upload test-results (trace.zip) to GitHub Repo

## Reuse

* [Fork your own copy](https://github.com/felixlohmeier/playwright-github-action/fork)
* Your Repository / Settings / Actions / General / Workflow permissions
  * Select "Read and write permissions"
  * Save
* Your Repository / Actions / playwright / Run workflow
* Update links in README.md (replace felixlohmeier/playwright-github-action)

## Run tests in GitHub Actions

[![Github Actions Workflow](https://github.com/felixlohmeier/playwright-github-action/actions/workflows/playwright.yml/badge.svg)](https://github.com/felixlohmeier/playwright-github-action/actions/workflows/playwright.yml)

## View results in Playwright Trace Viewer

test example / get started link:
* latest run:
  * Desktop: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/felixlohmeier/playwright-github-action/refs/heads/main/test-results/example-get-started-link-desktop/trace.zip
  * Mobile: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/felixlohmeier/playwright-github-action/refs/heads/main/test-results/example-get-started-link-mobile/trace.zip
* specific commit:
  * Desktop: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/felixlohmeier/playwright-github-action/c27b6ec/test-results/example-get-started-link-desktop/trace.zip
  * Mobile: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/felixlohmeier/playwright-github-action/c27b6ec/main/test-results/example-get-started-link-mobile/trace.zip

## Development in GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/felixlohmeier/playwright-github-action)

```
npx playwright test --reporter html
npx playwright show-report
```
