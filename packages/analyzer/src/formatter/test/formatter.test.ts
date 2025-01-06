import {syntaxFromResource} from '#analyzer';
import {newText, Text, textResourceFromLocation} from '#common';
import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {expect, test} from 'vitest';

test('01', () => testFormatter(newText('1')));
test('02', () => testFormatter(newText('2')));
test('03', () => testFormatter(newText('3')));
test('04', () => testFormatter(newText('4')));
test('05', () => testFormatter(newText('5')));
test('06', () => testFormatter(newText('6')));
test('07', () => testFormatter(newText('7')));
test('08', () => testFormatter(newText('8')));
test('09', () => testFormatter(newText('9')));
test('10', () => testFormatter(newText('10')));
// test('11', () => testFormatter(newText('11')));
test('12', () => testFormatter(newText('12')));

function testFormatter(index: Text) {
  const dirPath = join(__dirname, index.toNativeString());
  const resource = textResourceFromLocation(newText(join(dirPath, 'source.xon')));

  expect(resource).toBeTruthy();

  if (!resource) {
    return;
  }

  const syntax = syntaxFromResource(resource);

  const formattedText = syntax.formatterManager.getFormattedText();
  writeFileSync(join(dirPath, 'formatted.xon'), formattedText.toNativeString());

  const etalonText = readFileSync(join(dirPath, 'etalon.xon')).toString();

  expect(formattedText.toNativeString()).toBe(etalonText);
}
