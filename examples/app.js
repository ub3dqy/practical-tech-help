(function () {
  'use strict';
  let T = window.PracticalTools, lang = 'en';
  let original = [], copy = [], comparison = null, plan = null, request = null;
  let sampleMode = false, displayedErrors = {};
  let $ = function (id) { return document.getElementById(id); };
  let words = {
    en: {
      skip:'Skip to the tools', eyebrow:'PRACTICAL TECH HELP',
      title:'A few useful tools.\nOne less thing to do by hand.',
      intro:'Try the examples below. They run in this page and do not upload your files or text.',
      navBackup:'Check a folder copy', navRename:'Plan new file names', navHelp:'Describe a problem',
      backupTitle:'What is missing from the copy?', backupIntro:'Choose the original folder and its copy, or start with the example.',
      original:'Original folder', backup:'Folder copy', compare:'Compare folders', example:'Try an example',
      backupLimit:'This checks names and file sizes, not the contents of a file. Nothing is moved, renamed or deleted. Up to 10,000 files per folder.',
      renameTitle:'Put a set of file names in order.', renameIntro:'Preview names such as Trip-001.jpg before changing anything.',
      names:'Current file names, one per line', prefix:'Start each name with', firstNumber:'First number', digits:'Minimum digits', preview:'Show the plan',
      renameLimit:'This is a preview. Check existing names in the same folder before using the plan. File endings such as .jpg are kept. Up to 5,000 names.',
      helpTitle:'Make the problem easier to explain.', helpIntro:'A few details often save a long back-and-forth. Fill in the first two boxes; the rest are optional.',
      goalLabel:'What were you trying to do?', happenedLabel:'What happened instead?', deviceLabel:'Device and app',
      errorLabel:'Exact message on screen, if there is one', triedLabel:'What have you already tried?', makeRequest:'Put the message together',
      helpLimit:'Leave out passwords, sign-in codes and personal details. This page puts your notes in order; it does not diagnose the problem or send a message.',
      footer:'Examples by Dima Mak / ub3dqy. A specific task, price and deadline are agreed before work starts.',
      portfolio:'Read the portfolio', missing:'Missing from the copy', extra:'Only in the copy', different:'Different file sizes', matching:'Same name and size',
      caseWarnings:'Names differing only in letter case: check these first', files:'files selected', sample:'Example files, not your own folders',
      first200:'Showing the first 200 entries in this section.', from:'Current name', to:'Proposed name', check:'Check',
      conflict:'Another listed file already has this name.', ambiguous:'Original names differ only in letter case or are repeated.',
      unchanged:'Already has this name.', ready:'Preview only', planWarning:'Some names need attention. Do not use this as a rename order.',
      copied:'Copied.', copyText:'Copy the text', copyFailed:'Copy was not available. Select the text below and copy it.',
      bytes:'bytes', noIssues:'No name or size differences were found. File contents have not been checked.',
      errors:{empty:'Choose both folders, or try the example. For a rename plan, enter at least one file name.',limit:'This example supports 10,000 files per folder or 5,000 names per rename plan.',path:'A file path could not be read. Choose the folders again.',size:'A file size could not be read. Choose the folders again.',duplicate:'The list contains the same relative path more than once. Choose a folder rather than a mixed list.',names:'A file name is not valid for this Windows naming plan, or is too long. Check for slashes, reserved names and trailing spaces.',prefix:'Enter a short name prefix without slashes or special characters. Do not end it with a dot or a space.',number:'Use a whole starting number of zero or more, and 1 to 8 digits.',length:'Keep each answer under 2,000 characters.',required:'Fill in what you wanted to do and what happened instead.',unknown:'Something could not be read. Check the inputs and try again.'}
    },
    ru: {
      skip:'Перейти к примерам', eyebrow:'ПОНЯТНАЯ ПОМОЩЬ С КОМПЬЮТЕРОМ',
      title:'Несколько полезных инструментов.\nМеньше работы вручную.',
      intro:'Попробуйте примеры ниже. Они работают на этой странице и никуда не загружают ваши файлы или текст.',
      navBackup:'Сравнить папку с копией', navRename:'Подготовить имена файлов', navHelp:'Описать проблему',
      backupTitle:'Чего не хватает в копии папки?', backupIntro:'Выберите исходную папку и её копию или начните с готового примера.',
      original:'Исходная папка', backup:'Копия папки', compare:'Сравнить папки', example:'Попробовать пример',
      backupLimit:'Сравниваются имена и размеры файлов, а не их содержимое. Файлы не перемещаются, не переименовываются и не удаляются. До 10 000 файлов в каждой папке.',
      renameTitle:'Привести имена файлов в порядок.', renameIntro:'Посмотрите, как будут выглядеть имена вроде Trip-001.jpg, прежде чем что-то менять.',
      names:'Текущие имена файлов, каждое с новой строки', prefix:'Начинать каждое имя с', firstNumber:'Первый номер', digits:'Минимум цифр', preview:'Показать план',
      renameLimit:'Это предварительный просмотр. Перед переименованием проверьте остальные файлы в папке. Окончания вроде .jpg сохраняются. До 5 000 имён.',
      helpTitle:'Понятно объяснить, что случилось.', helpIntro:'Несколько подробностей помогают быстрее разобраться. Заполните первые два поля, остальные по желанию.',
      goalLabel:'Что вы хотели сделать?', happenedLabel:'Что получилось вместо этого?', deviceLabel:'Устройство и программа',
      errorLabel:'Точный текст сообщения на экране, если оно есть', triedLabel:'Что вы уже пробовали?', makeRequest:'Составить сообщение',
      helpLimit:'Не указывайте пароли, коды входа и личные данные. Страница собирает ваши заметки в сообщение, но не ставит диагноз и ничего не отправляет.',
      footer:'Примеры Dima Mak / ub3dqy. Задачу, цену и срок согласуем до начала работы.',
      portfolio:'Открыть портфолио', missing:'Нет в копии', extra:'Есть только в копии', different:'Размеры различаются', matching:'Совпали имя и размер',
      caseWarnings:'Имена отличаются только регистром букв: сначала проверьте их', files:'файлов выбрано', sample:'Готовый пример, а не ваши папки',
      first200:'Показаны первые 200 записей этого раздела.', from:'Текущее имя', to:'Предложенное имя', check:'Проверка',
      conflict:'Такое имя уже есть у другого файла в списке.', ambiguous:'Исходные имена повторяются или отличаются только регистром букв.',
      unchanged:'Имя уже такое.', ready:'Предварительный просмотр', planWarning:'Некоторые имена нужно проверить. Этот список нельзя использовать как готовую команду переименования.',
      copied:'Скопировано.', copyText:'Скопировать текст', copyFailed:'Скопировать автоматически не удалось. Выделите текст ниже и скопируйте его.',
      bytes:'байт', noIssues:'Различий в именах и размерах не найдено. Содержимое файлов не проверялось.',
      errors:{empty:'Выберите обе папки или готовый пример. Для плана переименования укажите хотя бы одно имя файла.',limit:'В примере можно сравнить до 10 000 файлов в каждой папке или подготовить до 5 000 новых имён.',path:'Не удалось прочитать путь одного из файлов. Выберите папки заново.',size:'Не удалось прочитать размер одного из файлов. Выберите папки заново.',duplicate:'Один путь встретился в списке несколько раз. Выберите одну папку, а не смешанный список.',names:'Одно из имён не подходит для этого плана переименования в Windows или слишком длинное. Проверьте специальные символы, зарезервированные имена и пробелы в конце.',prefix:'Введите короткое начало имени без слешей и специальных символов. В конце не должно быть точки или пробела.',number:'Начальный номер должен быть целым и неотрицательным. Количество цифр: от 1 до 8.',length:'Оставьте в каждом ответе не больше 2 000 символов.',required:'Заполните, что вы хотели сделать и что получилось вместо этого.',unknown:'Не удалось прочитать данные. Проверьте поля и попробуйте ещё раз.'}
    }
  };
  function el(tag, text, cls) { let n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; }
  function errorAt(id, error) {
    displayedErrors[id] = Object.prototype.hasOwnProperty.call(words[lang].errors,error.message) ? error.message : 'unknown';
    $(id).replaceChildren(el('p', words[lang].errors[displayedErrors[id]], 'warning'));
  }
  function clearError(id) { delete displayedErrors[id]; }
  function folderNotes() {
    $('original-note').textContent = sampleMode ? words[lang].sample : original.length + ' ' + words[lang].files;
    $('copy-note').textContent = sampleMode ? words[lang].sample : copy.length + ' ' + words[lang].files;
  }
  function renderComparison() {
    if (!comparison) return;
    let box = $('backup-result'), w = words[lang], counts = el('div', undefined, 'counts');
    box.replaceChildren();
    ['missing','different','extra','matching'].forEach(function (key) {
      let item = el('div', undefined, 'count'); item.append(el('strong', String(comparison[key].length)), el('span', w[key])); counts.append(item);
    });
    box.append(counts);
    if (comparison.caseWarnings.length) {
      box.append(el('h3', w.caseWarnings, 'warning'));
      let warnings = el('ul'); comparison.caseWarnings.slice(0,200).forEach(function (paths) { warnings.append(el('li', paths.join(' / '))); }); box.append(warnings);
      if (comparison.caseWarnings.length > 200) box.append(el('p', w.first200, 'note'));
    }
    ['missing','different','extra'].forEach(function (key) {
      if (!comparison[key].length) return;
      box.append(el('h3', w[key])); let list = el('ul');
      comparison[key].slice(0,200).forEach(function (file) {
        let text = file.path;
        if (key === 'different') text += ' (' + file.originalSize + ' / ' + file.backupSize + ' ' + w.bytes + ')';
        list.append(el('li', text));
      });
      box.append(list); if (comparison[key].length > 200) box.append(el('p', w.first200, 'note'));
    });
    if (!comparison.missing.length && !comparison.different.length && !comparison.extra.length) box.append(el('p', w.noIssues));
  }
  function renderPlan() {
    if (!plan) return;
    let w = words[lang], box = $('rename-result'), table = el('table'), head = el('tr'), body = el('tbody');
    box.replaceChildren(); [w.from,w.to,w.check].forEach(function (label) { let th = el('th', label); th.scope = 'col'; head.append(th); });
    let thead = el('thead'); thead.append(head); table.append(thead,body);
    if (plan.some(function (item) { return item.conflict || item.ambiguousSource; })) box.append(el('p', w.planWarning, 'warning'));
    plan.slice(0,200).forEach(function (item) {
      let row = el('tr'), status = w.ready;
      if (item.conflict) status = w.conflict;
      else if (item.ambiguousSource) status = w.ambiguous;
      else if (item.unchanged) status = w.unchanged;
      row.append(el('td', item.from),el('td', item.to),el('td', status, item.conflict || item.ambiguousSource ? 'warning' : '')); body.append(row);
    });
    let wrap = el('div', undefined, 'table-wrap'); wrap.append(table); box.append(wrap);
    if (plan.length > 200) box.append(el('p', w.first200, 'note'));
  }
  function renderRequest() {
    if (!request) return;
    let box = $('help-result'), text = T.helpRequest(request, lang), output = el('textarea'), button = el('button', words[lang].copyText), status = el('p', '', 'copy-status');
    output.value = text; output.readOnly = true; output.rows = 12; output.setAttribute('aria-label', lang === 'ru' ? 'Готовое сообщение' : 'Your message');
    button.type = 'button'; status.setAttribute('role','status');
    button.addEventListener('click', async function () {
      try { if (!navigator.clipboard) throw new Error('clipboard'); await navigator.clipboard.writeText(text); status.textContent = words[lang].copied; }
      catch (_) { status.textContent = words[lang].copyFailed; output.focus(); output.select(); }
    });
    box.replaceChildren(button,output,status);
  }
  function setLanguage(value) {
    lang = value; document.documentElement.lang = lang; document.title = lang === 'ru' ? 'Помощь с компьютером | Dima Mak' : 'Practical tech help | Dima Mak';
    document.querySelectorAll('[data-text]').forEach(function (node) { node.textContent = words[lang][node.dataset.text]; });
    $('english').setAttribute('aria-pressed', String(lang === 'en')); $('russian').setAttribute('aria-pressed', String(lang === 'ru'));
    $('portfolio-link').href = lang === 'ru' ? 'https://github.com/ub3dqy/practical-tech-help/blob/main/README.ru.md' : 'https://github.com/ub3dqy/practical-tech-help';
    folderNotes(); renderComparison(); renderPlan(); renderRequest();
    Object.keys(displayedErrors).forEach(function (id) { $(id).replaceChildren(el('p', words[lang].errors[displayedErrors[id]], 'warning')); });
  }
  $('english').addEventListener('click', function () { setLanguage('en'); });
  $('russian').addEventListener('click', function () { setLanguage('ru'); });
  $('original').addEventListener('change', function (event) {
    if (sampleMode) copy = [];
    original = Array.from(event.target.files); sampleMode = false; comparison = null; $('backup-result').replaceChildren(); clearError('backup-result'); folderNotes();
  });
  $('copy').addEventListener('change', function (event) {
    if (sampleMode) original = [];
    copy = Array.from(event.target.files); sampleMode = false; comparison = null; $('backup-result').replaceChildren(); clearError('backup-result'); folderNotes();
  });
  $('compare').addEventListener('click', function () {
    try { clearError('backup-result'); comparison = T.compareFolders(original,copy); renderComparison(); } catch (error) { comparison = null; errorAt('backup-result',error); }
  });
  $('backup-example').addEventListener('click', function () {
    $('original').value = ''; $('copy').value = '';
    original = [{path:'Holiday/photo.jpg',size:2450000},{path:'Documents/invoice.pdf',size:142000},{path:'notes.txt',size:128}];
    copy = [{path:'Holiday/photo.jpg',size:2450000},{path:'Documents/invoice.pdf',size:137000},{path:'old-note.txt',size:64}];
    sampleMode = true; clearError('backup-result'); comparison = T.compareFolders(original,copy); folderNotes(); renderComparison();
  });
  ['names','prefix','first-number','digits'].forEach(function (id) {
    $(id).addEventListener('input', function () { plan = null; clearError('rename-result'); $('rename-result').replaceChildren(); });
  });
  $('plan').addEventListener('click', function () {
    try { clearError('rename-result'); let names = $('names').value.split(/\r?\n/).filter(function (line) { return line.length > 0; });
      let first = $('first-number').value, digits = $('digits').value;
      if (!first.trim() || !digits.trim()) throw new Error('number');
      plan = T.renamePlan(names,$('prefix').value,Number(first),Number(digits)); renderPlan();
    } catch (error) { plan = null; errorAt('rename-result',error); }
  });
  ['goal','happened','device','error','tried'].forEach(function (id) {
    $(id).addEventListener('input', function () { request = null; clearError('help-result'); $('help-result').replaceChildren(); });
  });
  $('make-request').addEventListener('click', function () {
    try { clearError('help-result'); let values = {}; ['goal','happened','device','error','tried'].forEach(function (key) { values[key] = $(key).value; });
      T.helpRequest(values,lang); request = values; renderRequest();
    } catch (error) { request = null; errorAt('help-result',error); }
  });
  setLanguage('en');
}());
