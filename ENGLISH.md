**English** · [Русский](README.ru.md)

# Small tools and practical computer help

I'm Dima Mak, also known as ub3dqy. I make small tools for everyday tasks and help work through confusing computer and software problems.

Maybe you keep doing the same job by hand. Maybe an app has stopped working and the instructions only make things more confusing. Tell me what you want to get done, and we'll work out a sensible way forward.

**[Download the PDF portfolio](portfolio-en.pdf)** · **[Try the example tools](practical-tools.zip?raw=true)**

## Small tools that save repetitive work

Comparing folders, preparing file names, checking lists, turning a string of small steps into one useful tool.

**What you get:** a tool built around the agreed task, a checked example and a short explanation of how to use it. The folder comparison and naming preview below show the sort of work I mean.

## Help with a stubborn computer problem

An app won't open, a setup guide skips a step, or an error keeps interrupting something you need to finish.

**What you get:** an explanation of what the evidence shows, practical next steps and a clear account of what still needs checking. If support needs to get involved, I can help put the details into a useful message.

## Everyday computer help, explained normally

Working with photos and documents, keeping track of copies, choosing the right folder, or following an installation guide without getting lost.

**What you get:** clear steps for the task in front of you. Where a change could affect your files, we agree what to change and what to keep first.

## Three examples you can try

These are small projects made for this portfolio. The supplied file names and situations are examples.

| The problem | What the example does |
| --- | --- |
| "Did everything make it into this folder copy?" | Lists missing files, extra files and different sizes. It compares names and sizes, not file contents. |
| "I want these photo names in a sensible order." | Prepares old and new names, keeps file endings and flags clashes in the supplied list. It does not rename files. |
| "I don't know how to explain what's gone wrong." | Turns a few notes into a clear help request. It does not diagnose the problem or send a message. |

[Download the tools](practical-tools.zip?raw=true), extract the folder and open **index.html**. English is the default; **Русский** switches the whole page. No installation or account is needed. Your files and text are not uploaded.

The folder picker is intended for a recent desktop browser. For a quick look without selecting any folders, choose **Try an example**.

![The folder example separates missing files, extra files and different sizes](images/folder-check.en.png)

## Improvements accepted by other projects

These are contributions to existing projects, made through my GitHub account **ub3dqy**.

- **Clearer Windows setup instructions.** Explained how to choose a local folder and distinguish it from a OneDrive folder in Screenshot Organizer. [Accepted change](https://github.com/Iqranawaz-debug/Screenshot_Organizer/pull/5).
- **Fewer steps to get the example files.** Replaced two file-page links with direct file links and explained how to save them in the ShareR walkthrough. [Accepted change](https://github.com/DepressionCenter/ShareR/pull/36).
- **A less confusing first exercise.** Clarified the starting point and made the expected report easier to read in Data Engineering Launchpad. [Accepted change](https://github.com/DineshDhanoki/data-engineering-launchpad/pull/19).
- **PETL - documentation links and HTML checks.** Restored nine documentation links in a merged PR. Four local checks confirmed the existing HTML table sections; the maintainer reacted positively and closed the display question. [Accepted documentation](https://github.com/petl-developers/petl/pull/776) · [Checks and resolved question](https://github.com/petl-developers/petl/issues/416#issuecomment-6534560533).
- **Tablib - Python 3.15 compatibility.** Built-in formats register on first use while preserving lazy imports. The fix was merged after maintainer review; checks passed on Python 3.14 and 3.15. [Accepted fix](https://github.com/jazzband/tablib/pull/715).
- **Go-Hybrid - JSON error handling.** Returns serialization failures to the caller and preserves output on invalid handles. The fix was merged after maintainer review. [Accepted fix](https://github.com/limitlessprojects/Go-Hybrid/pull/1518) · [Maintainer feedback](https://github.com/limitlessprojects/Go-Hybrid/pull/1518#issuecomment-6526341209).
- **Error Translator - import error hints.** Corrected missing-module handling and close-name suggestions. The fix and requested clarification were merged. [Accepted fix](https://github.com/gourabanandad/error-translator-cli-v2/pull/120) · [Accepted clarification](https://github.com/gourabanandad/error-translator-cli-v2/pull/121).

Four documentation contributions and three code fixes. The PETL display result confirms existing behavior; it is not a new code fix. The applications themselves belong to their respective projects.

## Technical contributions awaiting review

These four public proposals include checks and verification notes:

- **Filament - decimal values in JSON.** Fixes negative-scale decimal formatting and keeps extreme values in a short, exact representation. [Proposed fix](https://github.com/galaxy-io/filament/pull/619).
- **Paramiko - SFTP memory guidance.** Explains why limiting concurrent requests does not limit all buffered data, with a bounded-reading example. [Proposed documentation](https://github.com/paramiko/paramiko/pull/2710).
- **Paramiko - an empty SFTP read request.** Prevents an empty `readv` call from starting a remote prefetch. [Proposed fix](https://github.com/paramiko/paramiko/pull/2711).
- **Image processing on Linux.** Converts, resizes, crops and adjusts images, with watermarks and metadata removal. File access, time and resources are bounded. All 356 local tests passed, including two real Ollama tool calls; GitHub checks await maintainer approval. [Proposed tool and verification](https://github.com/iyeanur6-cyber/ultimate-ai-platform/pull/61).

All four proposals are open and awaiting maintainer review as of 30 October 2026 (UTC).

## Independent code reviews

I also review changes proposed by other contributors, reproduce failures and suggest focused corrections.

- **Tablib - checking a dynamic-column fix.** Ran the existing tests on Python 3.14 and additional cases on Python 3.14 and 3.15. [Published review](https://github.com/jazzband/tablib/pull/695#pullrequestreview-5693590289).
- **Tablib - JSON import data loss.** Reproduced dropped fields and a crash on an empty object. Sent a correction that passes 185 tests. The original proposal was then closed as a duplicate of #709; this correction has not been accepted. [Review and tested correction](https://github.com/jazzband/tablib/pull/663#pullrequestreview-5693844761).
- **Happy - missing transcript messages.** Reproduced two file-rewrite cases that skip messages in the transcript scanner on Windows and Linux. [Findings and reproduction](https://github.com/slopus/happy/pull/1915#pullrequestreview-5694345644).
- **WordPress map - hidden tabs.** Reproduced a marker-fitting failure in Edge and suggested delaying the fit until the map has a visible size. A full WordPress installation was not tested. [Findings and reproduction](https://github.com/mcguffin/acf-openstreetmap-field/pull/139#pullrequestreview-5695128035).

The original changes belong to their authors. My contributions are the linked review findings, checks and proposed correction. The other three reviews await feedback as of 29 October 2026 (UTC).

## Tell me what you're trying to do

Send a few lines about what you wanted to do and what happened instead. Include the error message, if there is one, or a screenshot with personal details hidden.

We'll agree on what's included, the price, the deadline and the payment method before work starts. I'm registered as an individual entrepreneur. If you need business paperwork, let me know when you describe the task.

Reply in the conversation where you received this portfolio. If you already use GitHub, you can also [leave a short request here](https://github.com/ub3dqy/practical-tech-help/issues/new). Keep personal files and sign-in details out of public posts.

For a small website fix, [book through Kwork](https://kwork.ru/website-repair/55310656/dorabotayu-sayt-ispravlyu-oshibki-i-dobavlyu-nuzhnie-funktsii). The listing is in Russian.

**Dima Mak / ub3dqy**

[Русская версия](README.ru.md) · [English PDF](portfolio-en.pdf) · [Spreadsheet and writing examples](https://github.com/ub3dqy/spreadsheet-cleanup-examples)
