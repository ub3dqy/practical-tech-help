"""Build the two language-matched PDF brochures using ReportLab."""
from html import escape
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, HRFlowable

ROOT = Path(__file__).resolve().parent
BASE = "https://github.com/ub3dqy/practical-tech-help"
KWORK_URL = "https://kwork.ru/website-repair/55310656/dorabotayu-sayt-ispravlyu-oshibki-i-dobavlyu-nuzhnie-funktsii"
FONT_DIR = Path("C:/Windows/Fonts")
INK = colors.HexColor("#203536")
MUTED = colors.HexColor("#536968")
TEAL = colors.HexColor("#146452")
LINE = colors.HexColor("#d4dfdb")

def register_fonts():
    required = {"Text": "segoeui.ttf", "TextBold": "segoeuib.ttf", "Title": "georgia.ttf"}
    for name, filename in required.items():
        path = FONT_DIR / filename
        if not path.is_file():
            raise FileNotFoundError("Required PDF font missing: " + str(path))
        pdfmetrics.registerFont(TTFont(name, str(path)))
    pdfmetrics.registerFontFamily("Text", normal="Text", bold="TextBold")

DATA = {
    "en": {
        "label": "ENGLISH / PORTFOLIO",
        "title": "Small tools and practical computer help",
        "intro": "I'm Dima Mak, also known as ub3dqy. I make small tools for everyday tasks and help work through confusing computer and software problems.",
        "opening": "Maybe you keep doing the same job by hand. Maybe an app has stopped working and the instructions only make things more confusing. Tell me what you want to get done, and we'll work out a sensible way forward.",
        "services": [
            ("01", "Small tools for repetitive work", "Compare folders, prepare file names, check lists or turn a string of small steps into one useful tool.", "You get a tool for the agreed task, a checked example and a short explanation of how to use it."),
            ("02", "Help with a stubborn problem", "An app won't open, a guide skips a step, or an error keeps interrupting something you need to finish.", "You get an explanation of what the evidence shows, practical next steps and a clear account of what still needs checking."),
            ("03", "Everyday computer help", "Photos and documents, keeping track of copies, choosing the right folder or following an installation guide.", "You get clear steps for the task in front of you. If a change could affect your files, we agree what to change and what to keep first.")
        ],
        "page1note": "The next page shows three working examples. You can download them and try them on your own computer.",
        "examplesTitle": "Three examples you can try",
        "examplesIntro": "These small projects were made for this portfolio. The supplied file names and situations are examples.",
        "examples": [
            ("Check a folder copy", '"Did everything make it into the copy?"', "Choose two folders. The tool lists missing files, extra files and different sizes. It flags names differing only in letter case.", "It compares names and sizes, not file contents. Nothing is moved or deleted."),
            ("Plan a set of new file names", '"I want these photo names in a sensible order."', "Preview names such as Trip-001.jpg. File endings are kept, and clashes in the supplied list are marked before you use the plan.", "This is a preview. It does not rename files or inspect other files in the folder."),
            ("Put a help request together", '"I know something is wrong, but I cannot explain it clearly."', "Write what you wanted to do, what happened and what you have already tried. The tool puts those details into a clear message.", "It does not diagnose the problem or send a message.")
        ],
        "startTitle": "Try them without installing anything",
        "start": "Download the example ZIP from the portfolio, extract all the files and open index.html. English is the default; the Russian button switches the page. Your files and text are not uploaded.",
        "workTitle": "Improvements accepted by other projects",
        "workIntro": "These contributions were made through my GitHub account, ub3dqy, and accepted by the project maintainers.",
        "work": [
            ("Clearer Windows setup", "Explained how to choose a local folder and distinguish it from a OneDrive folder in Screenshot Organizer.", "https://github.com/Iqranawaz-debug/Screenshot_Organizer/pull/5"),
            ("Fewer steps to get the example files", "Replaced two file-page links with direct file links and explained how to save them in the ShareR walkthrough.", "https://github.com/DepressionCenter/ShareR/pull/36"),
            ("A less confusing first exercise", "Clarified the starting point and made the expected report easier to read in Data Engineering Launchpad.", "https://github.com/DineshDhanoki/data-engineering-launchpad/pull/19")
        ],
        "accepted": "View the accepted change",
        "workNote": "These changes improved the instructions. The applications themselves belong to their respective projects.",
        "reviewPageNote": "The next page shows four technical contributions awaiting maintainer review.",
        "pendingTitle": "Technical contributions awaiting review",
        "pendingIntro": "Four public proposals with checks and verification notes.",
        "pendingWork": [
            ("Tablib - Python 3.15 compatibility", "Restores format registration after a Python standard-library change.", "Checks passed on Python 3.14 and 3.15.", "https://github.com/jazzband/tablib/pull/714"),
            ("Filament - decimal values in JSON", "Fixes negative-scale decimal formatting and keeps extreme values in a short, exact representation.", "Linux checks passed; 10 checks requiring databases were skipped.", "https://github.com/galaxy-io/filament/pull/619"),
            ("Paramiko - SFTP memory guidance", "Explains why limiting concurrent requests does not limit all buffered data, with a bounded-reading example.", "Documentation build and targeted checks passed.", "https://github.com/paramiko/paramiko/pull/2710"),
            ("Paramiko - an empty SFTP read request", "Prevents an empty readv call from starting a remote prefetch.", "Targeted regression checks passed.", "https://github.com/paramiko/paramiko/pull/2711")
        ],
        "proposed": "View the proposed fix and checks",
        "pendingStatus": "As of 29 October 2026 (UTC), all four proposals are open and awaiting maintainer review.",
        "peerTitle": "Independent code reviews",
        "peerIntro": "The original proposals belong to other contributors. These are my published findings, checks and proposed correction.",
        "peerWork": [
            ("Tablib - JSON imports and dynamic columns", "Reproduced dropped fields and an empty-object crash; a proposed correction passes 185 tests. Also checked a dynamic-column fix on Python 3.14, with additional cases on 3.14 and 3.15.", [
                ("Import review and tested correction", "https://github.com/jazzband/tablib/pull/663#pullrequestreview-5693844761"),
                ("Dynamic-column validation", "https://github.com/jazzband/tablib/pull/695#pullrequestreview-5693590289")]),
            ("Happy - missing transcript messages", "Reproduced two file-rewrite cases that skip messages in the transcript scanner on Windows and Linux.", [("Findings and reproduction", "https://github.com/slopus/happy/pull/1915#pullrequestreview-5694345644")]),
            ("WordPress map - hidden tabs", "Reproduced a marker-fitting failure in Edge and suggested fitting after the map becomes visible. A full WordPress installation was not tested.", [("Findings and reproduction", "https://github.com/mcguffin/acf-openstreetmap-field/pull/139#pullrequestreview-5695128035")])
        ],
        "peerStatus": "These reviews await feedback as of 29 October 2026 (UTC).",
        "contactTitle": "Tell me what you're trying to do",
        "contact": "Send a few lines about what you wanted to do and what happened instead. Include the error message, if there is one, or a screenshot with personal details hidden.",
        "terms": "We'll agree on what's included, the price, the deadline and the payment method before work starts. I'm registered as an individual entrepreneur. If you need business paperwork, let me know when you describe the task.",
        "reply": "Reply in the conversation where you received this portfolio, or leave a short request on GitHub. Keep personal files and sign-in details out of public posts.",
        "open": "Open the portfolio and example downloads",
        "request": "Leave a short request",
        "booking": "Book a small website fix on Kwork (Russian listing)",
    },
    "ru": {
        "label": "ПОРТФОЛИО / РУССКИЙ",
        "title": "Небольшие программы и понятная помощь с компьютером",
        "intro": "Я Dima Mak, в сети - ub3dqy. Делаю небольшие полезные программы и помогаю разобраться с компьютерными проблемами, которые не получается решить с ходу.",
        "opening": "Может быть, вы постоянно делаете одну и ту же работу вручную. Или программа перестала работать, а инструкция только запутывает. Расскажите, что нужно сделать, - разберёмся, с чего начать.",
        "services": [
            ("01", "Программы для повторяющихся задач", "Сравнить папки, подготовить новые имена файлов, проверить списки или собрать несколько ручных действий в один удобный инструмент.", "Вы получите программу под согласованную задачу, проверенный пример и короткое объяснение, как ей пользоваться."),
            ("02", "Помощь с непонятной ошибкой", "Программа не открывается, в инструкции пропущен важный шаг или ошибка мешает закончить дело.", "Вы получите понятное объяснение того, что удалось выяснить, порядок дальнейших действий и список оставшихся вопросов."),
            ("03", "Повседневные дела на компьютере", "Фотографии и документы, проверка копий, выбор нужной папки или установка по запутанной инструкции.", "Вы получите понятные шаги для своей задачи. Если изменения могут затронуть файлы, сначала договоримся, что меняем и что сохраняем.")
        ],
        "page1note": "На следующей странице - три работающих примера. Их можно скачать и попробовать на своём компьютере.",
        "examplesTitle": "Три примера, которые можно попробовать",
        "examplesIntro": "Эти небольшие проекты сделаны для портфолио. Названия файлов и ситуации в готовых примерах учебные.",
        "examples": [
            ("Сравнить папку с её копией", "«Все ли файлы попали в копию?»", "Выберите две папки. Инструмент покажет недостающие и лишние файлы, разные размеры и имена, отличающиеся только регистром букв.", "Сравниваются имена и размеры, а не содержимое. Ничего не перемещается и не удаляется."),
            ("Подготовить новые имена файлов", "«Хочу привести имена фотографий в порядок».", "Посмотрите будущие имена вроде Trip-001.jpg. Окончания файлов сохраняются, совпадения в переданном списке отмечаются.", "Это предварительный просмотр. Файлы не переименовываются, остальные файлы в папке не проверяются."),
            ("Составить обращение за помощью", "«Что-то не работает, но я не знаю, как это объяснить».", "Напишите, что хотели сделать, что получилось и что уже пробовали. Инструмент соберёт эти сведения в понятное сообщение.", "Он не определяет причину ошибки и ничего не отправляет.")
        ],
        "startTitle": "Попробовать без установки",
        "start": "Скачайте ZIP с примерами, распакуйте все файлы и откройте index.html. По умолчанию включён английский; кнопка «Русский» переводит страницу. Файлы и текст никуда не загружаются.",
        "workTitle": "Улучшения, принятые в других проектах",
        "workIntro": "Эти изменения отправлены через мой аккаунт GitHub ub3dqy и приняты авторами проектов.",
        "work": [
            ("Понятнее установка в Windows", "В инструкции Screenshot Organizer объяснено, как выбрать локальную папку и отличить её от папки OneDrive.", "https://github.com/Iqranawaz-debug/Screenshot_Organizer/pull/5"),
            ("Проще скачать файлы примера", "В учебной инструкции ShareR две ссылки на страницы заменены прямыми ссылками на файлы и добавлена подсказка по сохранению.", "https://github.com/DepressionCenter/ShareR/pull/36"),
            ("Яснее первые шаги учебной работы", "В Data Engineering Launchpad уточнено, с чего начать, а пример ожидаемого отчёта стал удобнее читать.", "https://github.com/DineshDhanoki/data-engineering-launchpad/pull/19")
        ],
        "accepted": "Посмотреть принятое изменение",
        "workNote": "Эти изменения касались инструкций. Сами приложения принадлежат соответствующим проектам.",
        "reviewPageNote": "На следующей странице - четыре предложения, ожидающие проверки авторов проектов.",
        "pendingTitle": "Исправления и инструкции на рассмотрении",
        "pendingIntro": "Четыре открытых предложения с проверками и описанием результата.",
        "pendingWork": [
            ("Tablib - совместимость с Python 3.15", "Восстановлена работа форматов после изменения в стандартной библиотеке Python.", "Проверки пройдены на Python 3.14 и 3.15.", "https://github.com/jazzband/tablib/pull/714"),
            ("Filament - десятичные числа в JSON", "Устранён сбой при преобразовании чисел; крайние значения сохраняются в короткой точной записи.", "Проверки в Linux пройдены; 10 проверок с отдельными базами данных пропущены.", "https://github.com/galaxy-io/filament/pull/619"),
            ("Paramiko - расход памяти при чтении SFTP", "Объяснено, почему ограничение одновременных запросов не ограничивает весь буфер; добавлен пример чтения небольшими порциями.", "Сборка инструкции и отдельные проверки пройдены.", "https://github.com/paramiko/paramiko/pull/2710"),
            ("Paramiko - пустой запрос чтения SFTP", "Пустой вызов readv больше не запускает предварительное чтение на сервере.", "Проверки исправленного случая пройдены.", "https://github.com/paramiko/paramiko/pull/2711")
        ],
        "proposed": "Посмотреть исправление и проверки",
        "pendingStatus": "На 29 октября 2026 года (UTC) все четыре предложения открыты и ожидают проверки авторов проектов.",
        "peerTitle": "Независимая проверка чужих изменений",
        "peerIntro": "Исходные предложения принадлежат другим разработчикам. Здесь - мои результаты проверки, воспроизведение ошибок и предложенная поправка.",
        "peerWork": [
            ("Tablib - чтение JSON и вычисляемые столбцы", "Воспроизведены пропажа полей и сбой на пустом объекте; поправка проходит 185 проверок. Также проверено исправление вычисляемых столбцов на Python 3.14 с дополнительными случаями на 3.14 и 3.15.", [
                ("Отзыв и проверенная поправка", "https://github.com/jazzband/tablib/pull/663#pullrequestreview-5693844761"),
                ("Проверка вычисляемых столбцов", "https://github.com/jazzband/tablib/pull/695#pullrequestreview-5693590289")]),
            ("Happy - пропущенные сообщения", "В Windows и Linux воспроизведены два случая перезаписи файла, при которых обработчик истории пропускает сообщения.", [("Ошибка и её воспроизведение", "https://github.com/slopus/happy/pull/1915#pullrequestreview-5694345644")]),
            ("Карта WordPress - скрытые вкладки", "В Edge воспроизведён сбой подбора масштаба; предложено дождаться видимого размера карты. Полная установка WordPress не проверялась.", [("Ошибка и её воспроизведение", "https://github.com/mcguffin/acf-openstreetmap-field/pull/139#pullrequestreview-5695128035")])
        ],
        "peerStatus": "На 29 октября 2026 года (UTC) отзывы ожидают ответа.",
        "contactTitle": "Расскажите, что не получается",
        "contact": "Напишите, что вы хотели сделать и что вышло вместо этого. Если есть ошибка, пришлите её текст или снимок экрана со скрытыми личными данными.",
        "terms": "До начала работы договоримся о задаче, цене, сроке и способе оплаты. Есть статус ИП; оформление можно обсудить вместе с задачей.",
        "reply": "Ответьте в той переписке, где получили портфолио, или оставьте короткий запрос на GitHub. Личные файлы и данные для входа в открытом обращении не размещайте.",
        "open": "Открыть портфолио и скачать примеры",
        "request": "Оставить короткий запрос",
        "booking": "Заказать небольшую доработку сайта на Kwork",
    }
}

def build(language):
    data = DATA[language]
    style = {
        "title": ParagraphStyle("title",fontName="Title",fontSize=28,leading=33,textColor=INK,spaceAfter=19),
        "intro": ParagraphStyle("intro",fontName="Text",fontSize=12,leading=17,textColor=INK,spaceAfter=12),
        "body": ParagraphStyle("body",fontName="Text",fontSize=10.6,leading=15,textColor=INK,spaceAfter=9),
        "heading": ParagraphStyle("heading",fontName="TextBold",fontSize=13,leading=17,textColor=TEAL,spaceBefore=8,spaceAfter=8,keepWithNext=True),
        "small": ParagraphStyle("small",fontName="Text",fontSize=9,leading=12.5,textColor=MUTED,spaceAfter=9),
        "quote": ParagraphStyle("quote",fontName="TextBold",fontSize=11,leading=15,textColor=INK,spaceAfter=7,keepWithNext=True),
    }
    story = []
    def p(text,kind="body"):
        story.append(Paragraph(escape(text),style[kind]))
    def link(label,url):
        safe_url = escape(url,quote=True)
        story.append(Paragraph('<link href="'+safe_url+'" color="#146452"><u>'+escape(label)+'</u></link>',style["small"]))
    def rule():
        story.extend([Spacer(1,5),HRFlowable(width="100%",thickness=.6,color=LINE),Spacer(1,12)])
    p(data["title"],"title")
    p(data["intro"],"intro")
    p(data["opening"])
    rule()
    for number,title,situation,result in data["services"]:
        p(number+" / "+title,"heading")
        p(situation)
        p(result,"small")
        story.append(Spacer(1,5))
    rule()
    p(data["page1note"],"small")
    story.append(PageBreak())
    p(data["examplesTitle"],"title")
    p(data["examplesIntro"],"intro")
    for index,(title,question,result,limit) in enumerate(data["examples"],1):
        p(str(index).zfill(2)+" / "+title,"heading")
        p(question,"quote")
        p(result)
        p(limit,"small")
        story.append(Spacer(1,7))
    rule()
    p(data["startTitle"],"heading")
    p(data["start"])
    link(data["open"],BASE)
    story.append(PageBreak())
    p(data["workTitle"],"title")
    p(data["workIntro"],"intro")
    for title,description,url in data["work"]:
        p(title,"heading")
        p(description)
        link(data["accepted"],url)
    p(data["workNote"],"small")
    p(data["reviewPageNote"],"small")
    story.append(PageBreak())
    p(data["pendingTitle"],"title")
    p(data["pendingIntro"],"intro")
    for title,description,checks,url in data["pendingWork"]:
        p(title,"heading")
        p(description)
        p(checks,"small")
        link(data["proposed"],url)
    p(data["pendingStatus"],"small")
    story.append(PageBreak())
    p(data["peerTitle"],"title")
    p(data["peerIntro"],"intro")
    for title,description,links in data["peerWork"]:
        p(title,"heading")
        p(description)
        for label,url in links:
            link(label,url)
    p(data["peerStatus"],"small")
    rule()
    p(data["contactTitle"],"heading")
    p(data["contact"])
    p(data["terms"])
    p(data["reply"],"small")
    link(data["request"],BASE+"/issues/new")
    link(data["booking"],KWORK_URL)
    def page(canvas,doc):
        width,height = A4
        canvas.saveState()
        canvas.setFillColor(TEAL)
        canvas.setFont("TextBold",9)
        canvas.drawString(44,height-30,"DIMA MAK / ub3dqy")
        canvas.setFont("Text",8)
        canvas.drawRightString(width-44,height-30,data["label"])
        canvas.setStrokeColor(LINE)
        canvas.line(44,height-42,width-44,height-42)
        canvas.line(44,38,width-44,38)
        canvas.setFillColor(MUTED)
        canvas.setFont("Text",8)
        canvas.drawString(44,24,"Dima Mak / ub3dqy")
        canvas.drawRightString(width-44,24,str(doc.page)+" / 5")
        canvas.restoreState()
    filename = ROOT/("portfolio-"+language+".pdf")
    doc = SimpleDocTemplate(str(filename),pagesize=A4,leftMargin=44,rightMargin=44,topMargin=64,bottomMargin=52,title=data["title"],author="Dima Mak / ub3dqy",subject="Practical technology help portfolio",pageCompression=1)
    doc.build(story,onFirstPage=page,onLaterPages=page)
    return filename

if __name__ == "__main__":
    register_fonts()
    for code in ("en","ru"):
        print(build(code))
