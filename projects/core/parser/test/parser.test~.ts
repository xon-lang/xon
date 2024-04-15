import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {Anything, String2} from '../../lib/core';
import {textResourceFromFilePath} from '../../util/resource/text/text-resource';
import {syntaxParse} from '../syntax-parser';

// test('performance', () => {
//   const source = sourceFromFile('src/parser/test/performance/source.xon');
//   const syntax = parseSyntax(source);
//   expect(syntax.issueManager.issues.length).toBe(0);

//   const {min, max, avg} = performanceIterations(10000, () => parseSyntax(source));

//   console.log(`min ${min}\nmax ${max}\navg ${avg}\n`);
// });

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
