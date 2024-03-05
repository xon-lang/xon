import {readFileSync, writeFileSync} from 'fs';
import {Integer} from '../../lib/core';
import {parseSyntax} from '../../parser/syntax';

test('1', () => testFormatter(1));
test('2', () => testFormatter(2));
test('3', () => testFormatter(3));
test('4', () => testFormatter(4));
test('5', () => testFormatter(5));

function testFormatter(index: Integer) {
  const testDir = 'src/formatter/test';
  const dirPath = `${testDir}/${index}/`;
  const sourceText = readFileSync(dirPath + 'source.xon').toString();
  const etalonText = readFileSync(dirPath + 'etalon.xon').toString();
  const syntax = parseSyntax(sourceText);
  const formattedText = syntax.getFormattedText();

  writeFileSync(dirPath + 'formatted.xon', formattedText);

  expect(formattedText).toBe(etalonText);
}
