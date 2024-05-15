import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {Anything, String2} from '../../lib/core';
import {performanceIterations} from '../../util/performance';
import {textResourceFromFilePath} from '../../util/resource/text/text-resource';
import {syntaxParse} from '../syntax-parser';

test('performance', () => {
  const resource = textResourceFromFilePath('projects/core/parser/test/performance/source.xon');

  if (!resource) {
    return;
  }

  const syntax = syntaxParse(resource);
  expect(syntax.issueManager.issues.length).toBe(0);

  const {min, max, avg} = performanceIterations(1000, () => syntaxParse(resource));

  console.log(`min ${min}ms\nmax ${max}ms\navg ${avg}ms\n`);
});

// test('1', () => testFormatter('1'));

function testFormatter(index: String2) {
  const dirPath = join(__dirname, index);
  const source = textResourceFromFilePath(join(dirPath, 'source.xon'));

  expect(source).toBeTruthy();

  if (!source) {
    return;
  }

  const syntax = syntaxParse(source);

  const syntaxJson = JSON.stringify(syntax.statements, jsonCircularReplacer, 2);
  writeFileSync(join(dirPath, 'ast.json'), syntaxJson);

  const etalonText = readFileSync(join(dirPath, 'etalon.json')).toString();

  expect(syntaxJson).toBe(etalonText);
}

export function jsonCircularReplacer(key: String2, value: Anything): Anything {
  // if (key === 'children') {
  //   return undefined;
  // }

  if (key === 'parent') {
    return undefined;
  }

  return value;
}
