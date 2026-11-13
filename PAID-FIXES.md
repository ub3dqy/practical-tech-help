**English** · [Русский](PAID-FIXES.ru.md)

# Paid technical services

Payment is in USDC. We agree on the transfer network, scope, price and deadline before work starts.

## AI agent development and integration

I build, configure and deploy AI agents for specific workflows. I can create a new agent or improve one you already use, then connect it to your documents, spreadsheets, GitHub or other tools you approve.

An agent can sort incoming requests, draft replies or prepare reports. We agree on what it can access and which actions need your approval. I check it on agreed examples and hand over instructions for running and updating it.

Tell me what the agent should do, where it gets its information and what result you expect. I can quote a price and timeline once the scope is clear.

### Try a request-triage agent

This example reads a sample support request and uses a local Ollama model to summarize it and suggest a category. It selects a reply from a set of templates and prints the draft for review.

With Python 3.9+ and Ollama running on this computer with `qwen3:4b` installed, run this from the repository folder.

~~~text
python -X utf8 examples/agent-intake/triage.py examples/agent-intake/sample.txt
~~~

The sample about a missing supplier column was classified as a technical request. The draft asks which version of the app the customer uses. Check the category, summary and draft before using them. [Example source](examples/agent-intake/triage.py) · [Sample request](examples/agent-intake/sample.txt)

## Offline document OCR on Windows

I set up offline OCR for printed scans and compare the output with reference text. You receive Windows setup instructions and a report with character error rates by language and processing time per page.

In a local RapidOCR test on generated A4 pages, the Russian and English samples matched the reference text. The Kazakh page had four character substitutions in 214 characters. [Test notes](https://github.com/RapidAI/RapidOCR/discussions/774#discussioncomment-19552795)

For a quote, include the scan format, languages and the result you need.

## Bug fixes and small features

I help with small, clearly defined bugs and features in existing projects: crashes, data handling errors, import failures, differences between Windows and Linux, and focused Android editor improvements.

Send a small example that shows the problem, what should happen and your budget. I'll check whether I can reproduce and verify it, then we can agree a fixed price.

### What you receive

A focused change, tests covering the failure, and a short explanation of how to check the result. Any remaining verification limits are stated in the handover.

## A recent local example

**Android note editor:** select a typed expression or LaTeX fraction and append its answer. The calculation works offline, keeps the original expression, and can be undone in one step.

| Selected expression | Appended answer |
| --- | --- |
| `0.1 + 0.2` | `= 0.3` |
| `1 / 3` | `≈ 0.333333333333` |

Twenty new tests and checks on an Android tablet emulator (API 36) pass, including undo, reopening a saved note, and rejecting division by zero without changing the note. This is a private prototype. Scope and fee are agreed before a PR is submitted.

## Public contributions

- **Tablib:** restored built-in format registration while keeping imports lazy. [Merged fix](https://github.com/jazzband/tablib/pull/715).
- **Go-Hybrid:** returned JSON serialization errors to the caller and preserved output on invalid handles. [Merged fix](https://github.com/limitlessprojects/Go-Hybrid/pull/1518).
- **Go-Hybrid:** applied target-platform build rules before choosing a package name. [Merged fix](https://github.com/limitlessprojects/Go-Hybrid/pull/2400).
- **PETL:** reviewed uncached merge behavior; the author accepted the finding and corrected it. [Review](https://github.com/petl-developers/petl/pull/774#pullrequestreview-5725109947) · [Author's reply](https://github.com/petl-developers/petl/pull/774#discussion_r4434273917).
- **Viridis:** identified two mismatches between paper statements and formal results; the maintainer confirmed both. [Positive-angle condition](https://github.com/jdhart81/viridis-canon/issues/145#issuecomment-6711535656) · [Probability-event direction](https://github.com/jdhart81/viridis-canon/issues/146#issuecomment-6711530033).
- **xlsx2csv:** reported that named-sheet selection was ignored during batch conversion. The maintainer fixed it; checks passed on Windows and Linux, including nested folders and different worksheet orders. [Report](https://github.com/dilshod/xlsx2csv/issues/320) · [Maintainer's fix](https://github.com/dilshod/xlsx2csv/commit/4e2b082521c27cfc33a11eb6e77378b6f0b73898) · [Verification](https://github.com/dilshod/xlsx2csv/issues/320#issuecomment-6768777082).

## Prepared fixes

**html2text / Python:** plain text starting with `*`, `>` or `#` can become an unintended Markdown list, quote or heading. A private fix for [the reported issue](https://github.com/Alir3z4/html2text/issues/467) is ready against [this upstream revision](https://github.com/Alir3z4/html2text/tree/5cf85510a2498546d5b48ad1bf7d75b146aac591), checked on 9 November 2026.

The full 232-test suite passes on Windows with Python 3.11 and 3.13, including 36 new cases. Twenty additional rendering checks pass. This does not cover the project's full CI matrix.

**Quote: 35 USDC.** The patch has not been submitted upstream or accepted. Scope and payment are agreed before handover.

**Unidiff / Python:** Windows-style (CRLF) diff headers can leave `\r` in file paths and skip Git file modes and binary-patch markers. A private fix for [the reported issue](https://github.com/matiasb/python-unidiff/issues/154) is ready against [this upstream revision](https://github.com/matiasb/python-unidiff/tree/926d4ce81da020b19e985796fce389cb278f16a1), checked on 10 November 2026. The changed files' text, including embedded carriage returns and CRLF line endings, is preserved.

All 82 tests pass on each of Python 3.9–3.13 on Linux and 3.9–3.14 on Windows, including nine new regression test methods. Type checks also pass.

**Quote: 25 USDC on Base.** The code has not been submitted upstream or accepted. Scope and payment are agreed before handover.

## Describe your task

[Open a paid help request on GitHub](https://github.com/ub3dqy/practical-tech-help/issues/new?template=paid-help.yml).

Describe the task, the expected result, your budget and deadline. Add a project link or a small example if available. If you need a quote, say so in the budget field. Keep passwords, access tokens and private files out of public requests.

**Dima Mak / ub3dqy**

[Full portfolio](README.md) · [Русский](PAID-FIXES.ru.md)
