import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {String2} from '../../lib/core';
import {resourceParse} from '../../parser/resource-parser';
import {textResourceFromFilePath} from '../../util/resource/text/text-resource';

test('1', () => testFormatter('1'));
test('2', () => testFormatter('2'));
test('3', () => testFormatter('3'));
test('4', () => testFormatter('4'));
test('5', () => testFormatter('5'));
test('6', () => testFormatter('6'));
test('7', () => testFormatter('7'));
test('8', () => testFormatter('8'));
test('9', () => testFormatter('9'));
test('10', () => testFormatter('10'));
test('11', () => testFormatter('11'));
test('12', () => testFormatter('12'));

function testFormatter(index: String2) {
  const dirPath = join(__dirname, index);
  const resource = textResourceFromFilePath(join(dirPath, 'source.xon'));

  expect(resource).toBeTruthy();

  if (!resource) {
    return;
  }

  const syntax = resourceParse(resource);

  const formattedText = syntax.formatterManager.getFormattedText();
  writeFileSync(join(dirPath, 'formatted.xon'), formattedText);

  const etalonText = readFileSync(join(dirPath, 'etalon.xon')).toString();

  expect(formattedText).toBe(etalonText);
}
