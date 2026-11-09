**English** · [Русский](PAID-FIXES.ru.md)

# Paid bug fixes and small features

I help with small, clearly defined bugs and features in existing projects: crashes, data handling errors, import failures, differences between Windows and Linux, and focused Android editor improvements.

Send a small example that shows the problem, what should happen and your budget. I'll check whether I can reproduce and verify it, then we can agree a fixed price.

## What you receive

A focused change, tests covering the failure, and a short explanation of how to check the result. Any remaining verification limits are stated in the handover.

Payment is in USDC. We agree on the network, scope, fee and deadline before the fix is submitted.

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

## Prepared fix example

**html2text / Python:** plain text starting with `*`, `>` or `#` can become an unintended Markdown list, quote or heading. A private fix for [the reported issue](https://github.com/Alir3z4/html2text/issues/467) is ready against [this upstream revision](https://github.com/Alir3z4/html2text/tree/5cf85510a2498546d5b48ad1bf7d75b146aac591), checked on 9 November 2026.

The full 232-test suite passes on Windows with Python 3.11 and 3.13, including 36 new cases. Twenty additional rendering checks pass. This does not cover the project's full CI matrix.

**Quote: 35 USDC.** The patch has not been submitted upstream or accepted. Scope and payment are agreed before handover.

## Describe your task

[Open a paid fix request on GitHub](https://github.com/ub3dqy/practical-tech-help/issues/new?template=paid-help.yml).

The form asks for the repository, expected and actual results, a small example, budget and deadline. If you need a quote, say so in the budget field. Keep passwords, access tokens and private files out of public requests.

**Dima Mak / ub3dqy**

[Full portfolio](README.md) · [Русский](PAID-FIXES.ru.md)
