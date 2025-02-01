# playwright-github-action

run Playwright tests with GitHub Actions and upload test-results (trace.zip) to GitHub Repo

## Run tests in GitHub Actions

[![Github Actions Workflow](https://github.com/opencultureconsulting/opencultureconsulting/dla-opac-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/opencultureconsulting/opencultureconsulting/dla-opac-tests/actions/workflows/playwright.yml)

## View results in Playwright Trace Viewer

test example / get started link:
* latest run:
  * Desktop: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/example-get-started-link-desktop/trace.zip
  * Mobile: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/example-get-started-link-mobile/trace.zip
* specific commit:
  * Desktop: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/opencultureconsulting/dla-opac-tests/c27b6ec/test-results/example-get-started-link-desktop/trace.zip
  * Mobile: https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/opencultureconsulting/dla-opac-tests/c27b6ec/main/test-results/example-get-started-link-mobile/trace.zip

## Development in GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/opencultureconsulting/opencultureconsulting/dla-opac-tests)

```
npx playwright test --reporter html
npx playwright show-report
```
