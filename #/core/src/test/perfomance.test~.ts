import {Anything, newTextData, newTextResourceFromLocation, performanceIterations, String2} from '#common';
import {syntaxFromResource} from '#core';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';

test('performance', () => {
  const resource = newTextResourceFromLocation(
    newTextData('packages/core/parser/test/performance/source.xon'),
  );

  if (!resource) {
    return;
  }

  const syntax = syntaxFromResource(resource);
  expect(syntax.diagnosticManager.diagnostics.length).toBe(0);

  const {min, max, avg} = performanceIterations(1000, () => syntaxFromResource(resource));

  console.log(`min ${min}ms\nmax ${max}ms\navg ${avg}ms\n`);
});

// test('1', () => testFormatter('1'));

function testFormatter(index: String2) {
  const dirPath = join(__dirname, index);
  const source = newTextResourceFromLocation(newTextData(join(dirPath, 'source.xon')));

  expect(source).toBeTruthy();

  if (!source) {
    return;
  }

  const syntax = syntaxFromResource(source);

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
