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

The seven accepted portfolio cases are four documentation contributions and three code fixes. Tablib #715 was merged on 29 October 2026 (UTC). Go-Hybrid #1518 was merged on 30 October after maintainer review, with linked technical feedback. Error Translator #120 was merged on 27 October; its requested clarification #121 was merged on 30 October and belongs to the same contribution. PETL #776 restored nine documentation links and was merged on 30 October. The related display check confirmed existing HTML behavior on four inputs; maintainer juarezr reacted positively to the answer and closed #416 as completed. Jupyter itself was not tested, and no new display code fix or verbal testimonial is claimed. These records describe open-source contributions, with no paid client engagement claimed.

The four technical-contribution examples awaiting review link to open Filament, Paramiko and image-processing pull requests as of 30 October 2026 (UTC). Their checks and verification notes are linked from each proposal. The Linux image-processing tool passed 356 local tests with no skips, including two real Ollama tool calls; its GitHub workflows still require maintainer approval. Tablib #715 is now listed with accepted contributions: it replaces #714, which was closed because its eager imports lost the lazy-loading benefit. The merged fix registers formats on demand and passes the suites on Python 3.14 and 3.15.

The independent reviews link to proposals authored by other contributors. The published reviews include dynamic-column validation, a tested JSON-import correction, and reproductions of missing transcript messages and hidden-map fitting failures. Tablib #663 was closed as a duplicate of #709; the proposed correction has not been accepted. The other three reviews await feedback as of 29 October 2026 (UTC). The Happy checks cover its transcript scanner; the map checks cover the frontend in Edge, without a full WordPress installation.

## Rebuild the PDF versions

Run build_portfolio.py with Python, ReportLab and the Segoe UI / Georgia fonts installed. README.md and ENGLISH.md link to portfolio-en.pdf; README.ru.md links to portfolio-ru.pdf.

Each PDF has six pages: services, example tools, four accepted documentation cases, three accepted code fixes, technical contributions awaiting review, and independent code reviews with contact details. The documentation page links to the PETL change and the resolved display question. The accepted-code page links to Go-Hybrid maintainer feedback and the Error Translator follow-up. The English and Russian PDFs retain the same case order and acceptance distinctions as their matching README files.
