'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const T = require('../examples/tools.js');
test('missing, extra, changed and same-size files stay separate, including empty files', () => {
  const r = T.compareFolders([{path:'a.txt',size:0},{path:'b.txt',size:3},{path:'c.txt',size:4}],[{path:'a.txt',size:0},{path:'b.txt',size:8},{path:'d.txt',size:4}]);
  assert.deepEqual(r.matching,[{path:'a.txt',size:0}]);
  assert.equal(r.different[0].path,'b.txt');
  assert.equal(r.missing[0].path,'c.txt');
  assert.equal(r.extra[0].path,'d.txt');
});
test('folder picker strips only the selected root, keeping subfolders distinct', () => {
  const r = T.compareFolders([{webkitRelativePath:'Original/one/a.txt',size:3},{webkitRelativePath:'Original/two/a.txt',size:3}],[{webkitRelativePath:'Backup/one/a.txt',size:3}]);
  assert.equal(r.matching[0].path,'one/a.txt'); assert.equal(r.missing[0].path,'two/a.txt');
});
test('case-only differences are flagged rather than called a match', () => {
  const r = T.compareFolders([{path:'Photo.jpg',size:3}],[{path:'photo.jpg',size:3}]);
  assert.equal(r.matching.length,0); assert.equal(r.caseWarnings.length,1); assert.equal(r.missing.length,1);
});
test('ambiguous paths, traversal and invalid sizes are rejected', () => {
  assert.throws(() => T.compareFolders([{path:'a',size:1},{path:'a',size:2}],[{path:'b',size:1}]),/duplicate/);
  for (const path of ['../a','/a','C:/a','one//a','one/./a']) assert.throws(() => T.compareFolders([{path,size:1}],[{path:'b',size:1}]),/path/);
  assert.throws(() => T.compareFolders([{path:'a',size:NaN}],[{path:'b',size:1}]),/size/);
  assert.throws(() => T.compareFolders([],[{path:'b',size:1}]),/empty/);
});
test('rename plan preserves extensions and does not change the source list', () => {
  const names = ['photo.JPG','scan.final.pdf','notes'];
  const original = names.slice(); const r = T.renamePlan(names,'Trip',7,3);
  assert.deepEqual(r.map(x => x.to),['Trip-007.JPG','Trip-008.pdf','Trip-009']);
  assert.deepEqual(names,original); assert.ok(r.every(x => !x.conflict));
});
test('existing target names and duplicate source names are flagged', () => {
  const r = T.renamePlan(['photo.jpg','Trip-001.jpg'],'Trip',1,3); assert.equal(r[0].conflict,true);
  assert.ok(T.renamePlan(['a.txt','A.txt'],'Doc',1,2).every(x => x.ambiguousSource));
});
test('Windows reserved names, invalid prefixes and invalid numbering are rejected', () => {
  for (const name of ['CON.txt','NUL','COM¹.txt','COM²','COM³.log','LPT¹','LPT².pdf','LPT³','file.','a/b.txt','x?.jpg']) assert.throws(() => T.renamePlan([name],'File',1,3),/names/);
  for (const prefix of ['','a/','a:','one.']) assert.throws(() => T.renamePlan(['a.txt'],prefix,1,3),/prefix/);
  for (const number of [-1,1.5,Infinity]) assert.throws(() => T.renamePlan(['a.txt'],'File',number,3),/number/);
  assert.throws(() => T.renamePlan(['a.txt'],'File',1,0),/number/);
});
test('dotfiles do not gain an invented extension', () => {
  assert.equal(T.renamePlan(['.env'],'Copy',0,2)[0].to,'Copy-00');
});
test('help request keeps supplied facts and omits empty optional fields', () => {
  const v = {goal:'Open the old photos.',happened:'The folder is empty.',device:'',error:'',tried:''};
  const en = T.helpRequest(v,'en'), ru = T.helpRequest(v,'ru');
  assert.match(en,/Open the old photos\./); assert.doesNotMatch(en,/Device and app/);
  assert.match(ru,/Здравствуйте, Дима/); assert.match(ru,/The folder is empty/);
  assert.throws(() => T.helpRequest({...v,goal:''},'en'),/required/);
  assert.throws(() => T.helpRequest({...v,error:'x'.repeat(2001)},'en'),/length/);
});
test('limits bound work before processing large lists', () => {
  assert.throws(() => T.compareFolders(Array(10001).fill({path:'a',size:1}),[{path:'b',size:1}]),/limit/);
  assert.throws(() => T.renamePlan(Array(5001).fill('a.txt'),'File',1,3),/limit/);
});
