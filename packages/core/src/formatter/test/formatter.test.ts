import {newText, String2, textResourceFromLocation} from '#common';
import {syntaxFromResource} from '#core';
import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {expect, test} from 'vitest';

test('01', () => testFormatter('1'));
test('02', () => testFormatter('2'));
test('03', () => testFormatter('3'));
test('04', () => testFormatter('4'));
test('05', () => testFormatter('5'));
test('06', () => testFormatter('6'));
test('07', () => testFormatter('7'));
test('08', () => testFormatter('8'));
test('09', () => testFormatter('9'));
test('10', () => testFormatter('10'));
// test('11', () => testFormatter('11'));
test('12', () => testFormatter('12'));

function testFormatter(index: String2) {
  const dirPath = join(__dirname, index);
  const resource = textResourceFromLocation(newText(join(dirPath, 'source.xon')));

  expect(resource).toBeTruthy();

  if (!resource) {
    return;
  }

  const syntax = syntaxFromResource(resource);

  const formattedText = syntax.formatterManager.getFormattedText();
  writeFileSync(join(dirPath, 'formatted.xon'), formattedText);

  const etalonText = readFileSync(join(dirPath, 'etalon.xon')).toString();

  expect(formattedText).toBe(etalonText);
}
