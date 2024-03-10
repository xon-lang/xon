import {readFileSync, writeFileSync} from 'fs';
import {Integer} from '../../lib/core';
import {parseSyntax} from '../../parser/syntax';
import {sourceFromFile} from '../../source/source';

test('1', () => testFormatter(1));
test('2', () => testFormatter(2));
test('3', () => testFormatter(3));
test('4', () => testFormatter(4));
test('5', () => testFormatter(5));
test('6', () => testFormatter(6));
test('7', () => testFormatter(7));
test('8', () => testFormatter(8));
test('9', () => testFormatter(9));
test('10', () => testFormatter(10));
test('11', () => testFormatter(11));

function testFormatter(index: Integer) {
  const testDir = 'src/formatter/test';
  const dirPath = `${testDir}/${index}/`;
  const source = sourceFromFile(dirPath + 'source.xon');
  const syntax = parseSyntax(source);

  const formattedText = syntax.formatterManager.getFormattedText();
  writeFileSync(dirPath + 'formatted.xon', formattedText);

  const etalonText = readFileSync(dirPath + 'etalon.xon').toString();

  expect(formattedText).toBe(etalonText);
}
