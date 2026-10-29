# About these examples

The three tools in this repository were made for this portfolio. They are working demonstrations, with example data rather than past client jobs.

- Folder comparison uses relative names and file sizes. It does not read file contents and does not prove that a backup is complete or uncorrupted.
- The naming preview checks the supplied names, preserves extensions and flags existing-name clashes and ambiguous source names. It does not touch the file system.
- The help-request tool formats what the user writes. It does not infer a diagnosis or contact anyone.
- Inputs are displayed as text. There are no external scripts, analytics, uploads or paid services.
- The folder example is cleared when the user begins choosing real folders, so example data and real folder data are not mixed.
- Changing a naming or help-request input clears the old result.

## Run the logic checks

The checks use the standard Node.js test runner, with no packages to install:

~~~text
node --test tests/tools.test.js
~~~

They cover separate comparison outcomes, empty files, subfolders, letter case, duplicate paths, invalid inputs, naming collisions, Windows reserved names, extensions, numbering, request text and size limits.

The built-in folder example, naming preview, collision warning, request form, language switch and clearing of outdated results were also checked in Edge. The folder-selection dialog itself was not driven during those browser checks.

The accepted contributions linked from the portfolio are documentation changes to existing projects. They are not claims of authorship of those applications or paid client engagements.

The technical-contribution examples link to open Tablib, Filament and Paramiko pull requests as of 29 October 2026 (UTC). Their checks and verification notes are linked from each proposal. They await maintainer review.

The independent reviews link to proposals authored by other contributors. The published reviews include dynamic-column validation, a tested JSON-import correction, and reproductions of missing transcript messages and hidden-map fitting failures. These reviews await feedback as of 29 October 2026 (UTC). The Happy checks cover its transcript scanner; the map checks cover the frontend in Edge, without a full WordPress installation.

## Rebuild the PDF versions

Run build_portfolio.py with Python, ReportLab and the Segoe UI / Georgia fonts installed. README.md and ENGLISH.md link to portfolio-en.pdf; README.ru.md links to portfolio-ru.pdf.

Each PDF has five pages: services, example tools, accepted documentation contributions, technical contributions awaiting review, and independent code reviews with contact details.
