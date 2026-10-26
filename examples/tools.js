(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PracticalTools = factory();
}(typeof window === 'object' ? window : this, function () {
  'use strict';
  function fail(code) { throw new Error(code); }
  function entries(files) {
    let list = Array.from(files || []);
    if (list.length > 10000) fail('limit');
    let seen = new Set();
    return list.map(function (file) {
      let path = file.webkitRelativePath || file.path || file.name;
      if (typeof path !== 'string') fail('path');
      path = path.replace(/\\/g, '/');
      if (file.webkitRelativePath) path = path.split('/').slice(1).join('/');
      if (!path || path[0] === '/' || /^[A-Za-z]:/.test(path) ||
          /[\u0000-\u001f]/.test(path) ||
          path.split('/').some(function (p) { return !p || p === '.' || p === '..'; })) fail('path');
      path = path.normalize('NFC');
      if (!Number.isSafeInteger(file.size) || file.size < 0) fail('size');
      if (seen.has(path)) fail('duplicate');
      seen.add(path);
      return { path: path, size: file.size };
    });
  }
  function compareFolders(original, backup) {
    let left = entries(original), right = entries(backup);
    if (!left.length || !right.length) fail('empty');
    let a = new Map(left.map(function (x) { return [x.path, x]; }));
    let b = new Map(right.map(function (x) { return [x.path, x]; }));
    let result = { matching: [], different: [], missing: [], extra: [], caseWarnings: [] };
    a.forEach(function (file, path) {
      let other = b.get(path);
      if (!other) result.missing.push(file);
      else if (file.size !== other.size) result.different.push({ path: path, originalSize: file.size, backupSize: other.size });
      else result.matching.push(file);
    });
    b.forEach(function (file, path) { if (!a.has(path)) result.extra.push(file); });
    let folded = new Map();
    left.concat(right).forEach(function (file) {
      let key = file.path.toLowerCase();
      if (!folded.has(key)) folded.set(key, new Set());
      folded.get(key).add(file.path);
    });
    folded.forEach(function (paths) {
      if (paths.size > 1) result.caseWarnings.push(Array.from(paths).sort());
    });
    ['matching', 'different', 'missing', 'extra'].forEach(function (key) {
      result[key].sort(function (x, y) { return x.path.localeCompare(y.path, 'en'); });
    });
    return result;
  }
  function validName(name) {
    return name.length > 0 && name.length <= 255 &&
      !/[<>:"/\\|?*\u0000-\u001f]/.test(name) &&
      !/[ .]$/.test(name) && name !== '.' && name !== '..' &&
      !/^(CON|PRN|AUX|NUL|COM[1-9¹²³]|LPT[1-9¹²³])(?:\.|$)/i.test(name);
  }
  function renamePlan(names, prefix, start, width) {
    if (!Array.isArray(names) || !names.length) fail('empty');
    if (names.length > 5000) fail('limit');
    if (typeof prefix !== 'string' || !prefix.trim() || prefix.length > 70 ||
        /[<>:"/\\|?*\u0000-\u001f]/.test(prefix) || /[ .]$/.test(prefix)) fail('prefix');
    if (!Number.isSafeInteger(start) || start < 0 ||
        !Number.isSafeInteger(width) || width < 1 || width > 8 ||
        !Number.isSafeInteger(start + names.length - 1)) fail('number');
    let existing = new Map();
    names.forEach(function (name, index) {
      if (typeof name !== 'string' || !validName(name)) fail('names');
      let key = name.normalize('NFC').toLowerCase();
      if (!existing.has(key)) existing.set(key, []);
      existing.get(key).push(index);
    });
    return names.map(function (name, index) {
      let dot = name.lastIndexOf('.');
      let extension = dot > 0 ? name.slice(dot) : '';
      let target = prefix + '-' + String(start + index).padStart(width, '0') + extension;
      if (!validName(target)) fail('names');
      let targetKey = target.normalize('NFC').toLowerCase();
      let originalKey = name.normalize('NFC').toLowerCase();
      let holders = existing.get(targetKey) || [];
      return {
        from: name, to: target, unchanged: name === target,
        conflict: holders.some(function (holder) { return holder !== index; }),
        ambiguousSource: existing.get(originalKey).length > 1
      };
    });
  }
  function helpRequest(values, language) {
    let fields = ['goal', 'happened', 'device', 'error', 'tried'];
    fields.forEach(function (key) {
      if (typeof values[key] !== 'string' || values[key].length > 2000) fail('length');
    });
    if (!values.goal.trim() || !values.happened.trim()) fail('required');
    let ru = language === 'ru';
    let labels = ru
      ? ['Что хочу сделать', 'Что получилось', 'Устройство и программа', 'Сообщение об ошибке', 'Что уже пробовал(а)']
      : ['What I was trying to do', 'What happened', 'Device and app', 'Message on screen', 'What I have already tried'];
    let lines = [ru ? 'Здравствуйте, Дима!\n\nПомогите, пожалуйста, разобраться.' : 'Hi Dima,\n\nCould you help me work this out?'];
    fields.forEach(function (key, index) {
      if (values[key].trim()) lines.push(labels[index] + '\n' + values[key].trim());
    });
    return lines.join('\n\n');
  }
  return { compareFolders: compareFolders, renamePlan: renamePlan, helpRequest: helpRequest };
}));
