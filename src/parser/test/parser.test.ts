import {readFileSync, writeFileSync} from 'fs';
import {Anything, Integer, String2} from '../../lib/core';
import {sourceFromFile} from '../../source/source';
import {performanceIterations} from '../../util/performance';
import {parseSyntax} from '../syntax';

test('performance', () => {
  const source = sourceFromFile('src/parser/test/performance/source.xon');
  const syntax = parseSyntax(source);
  expect(syntax.issueManager.issues.length).toBe(0);

  const {min, max, avg} = performanceIterations(10000, () => parseSyntax(source));

  console.log(`min ${min}\nmax ${max}\navg ${avg}\n`);
});

test('1', () => testFormatter(1));

function testFormatter(index: Integer) {
  const testDir = 'src/parser/test';
  const dirPath = `${testDir}/${index}/`;
  const source = sourceFromFile(dirPath + 'source.xon');
  const syntax = parseSyntax(source);

  const syntaxJson = JSON.stringify(syntax.statements, jsonCircularReplacer, 2);
  writeFileSync(dirPath + 'ast.json', syntaxJson);

  const etalonText = readFileSync(dirPath + 'etalon.json').toString();

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
