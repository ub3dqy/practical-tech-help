**English** · [Русский](PAID-FIXES.ru.md)

# Paid Python and Go bug fixes

I help fix small, clearly defined bugs in existing projects: crashes, data handling errors, import failures and differences between Windows and Linux.

Send a small example that shows the problem, what should happen and your budget. I'll check whether I can reproduce and verify it, then we can agree a fixed price.

## What you receive

A focused change, tests covering the failure, and a short explanation of how to check the result. Any remaining verification limits are stated in the handover.

We agree on the scope, fee, deadline and payment method before the fix is submitted.

## Public contributions

- **Tablib:** restored built-in format registration while keeping imports lazy. [Merged fix](https://github.com/jazzband/tablib/pull/715).
- **Go-Hybrid:** returned JSON serialization errors to the caller and preserved output on invalid handles. [Merged fix](https://github.com/limitlessprojects/Go-Hybrid/pull/1518).
- **Go-Hybrid:** applied target-platform build rules before choosing a package name. [Merged fix](https://github.com/limitlessprojects/Go-Hybrid/pull/2400).
- **PETL:** reviewed uncached merge behavior; the author accepted the finding and corrected it. [Review](https://github.com/petl-developers/petl/pull/774#pullrequestreview-5725109947) · [Author's reply](https://github.com/petl-developers/petl/pull/774#discussion_r4434273917).
- **Viridis:** identified two mismatches between paper statements and formal results; the maintainer confirmed both. [Positive-angle condition](https://github.com/jdhart81/viridis-canon/issues/145#issuecomment-6711535656) · [Probability-event direction](https://github.com/jdhart81/viridis-canon/issues/146#issuecomment-6711530033).

## Prepared fix example

**Fyne / Go:** `IntToFloat.Set` can silently discard a source read error. A small fix and nine regression cases are prepared against [this upstream revision](https://github.com/fyne-io/fyne/tree/3cc4916eaea93c77ce52c6eab6ea921dab5aae6e), checked on 7 November 2026.

All 85 tests in the binding package pass. A full Windows race run still has 13 dialog/widget failures; the same 13 also occur on unchanged upstream code.

**Quote: 20 USDC on Base.** The patch has not been submitted upstream or accepted. Scope and payment are agreed before handover.

## Describe your task

[Open a paid fix request on GitHub](https://github.com/ub3dqy/practical-tech-help/issues/new?template=paid-help.yml).

The form asks for the repository, expected and actual results, a small example, budget and deadline. If you need a quote, say so in the budget field. Keep passwords, access tokens and private files out of public requests.

**Dima Mak / ub3dqy**

[Full portfolio](README.md) · [Русский](PAID-FIXES.ru.md)
