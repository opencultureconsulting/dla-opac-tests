# Automatisierte Tests des Katalogs des DLA Marbach mit Playwright

## Tests mit GitHub Actions ausführen

[![Github Actions Workflow](https://github.com/opencultureconsulting/dla-opac-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/opencultureconsulting/dla-opac-tests/actions/workflows/playwright.yml)

Die Konfigurationsdateien für die Tests liegen im Ordner [tests](tests). Weitere Testdateien dort ablegen und sie werden automatisch berücksichtigt.

## Testergebnisse in Playwright Trace Viewer

### Neuester Test

Dateien liegen im Ordner [test-results](test-results) und können über den "Trace Viewer" geprüft werden. Hier eine manuell erstellte Übersicht (ggf. zu aktualisieren):

| Datei    | Testname           | Trace Viewer |
| -------- | ------------------ | ------------ |
| suche    | ricarda-huch       | [desktop](https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/suche-ricarda-huch-desktop/trace.zip), [mobile](https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/suche-ricarda-huch-mobile/trace.zip) |
| detail   | kafka              | [desktop](https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/detail-kafka-desktop/trace.zip), [mobile](https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/detail-kafka-mobile/trace.zip) |
| bestandsübersicht   | kafka              | [desktop](https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/bestandsübersicht-kafka-desktop/trace.zip), [mobile](https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/refs/heads/main/test-results/bestandsübersicht-kafka-mobile/trace.zip) |

### Ältere Tests

Testergebnisse für einzelne Commits können wie folgt aufgerufen werden:

https://trace.playwright.dev/?trace=https://raw.githubusercontent.com/opencultureconsulting/dla-opac-tests/de37bfc/test-results/suche-ricarda-huch-desktop/trace.zip

* commit hash "de37bfc" ersetzen
* testname "suche-ricarda-huch" ggf. ersetzen
* device "desktop" ggf. durch "mobile" ersetzen

## Entwkicklung in GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/opencultureconsulting/dla-opac-tests)

```
npx playwright test --reporter html
npx playwright show-report
```

## Entwicklung lokal mit Visual Studio Code

```
git clone git@github.com:opencultureconsulting/dla-opac-tests.git
cd dla-opac-tests
npm i --save-dev @playwright/test
npx playwright install chromium --with-deps
```
