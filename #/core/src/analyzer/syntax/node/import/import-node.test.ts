import {newTextData, nothing, textResourceFromData} from '#/common';
import {ImportNode, StringNode, syntaxFromResource} from '#/core';
import {$} from '#/typing';
test('import string', () => {
  const text = newTextData('import "xon/core"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ImportNode);
  expect(node.operator.text.toString()).toBe('import');
  expect(node.value?.$).toBe($.StringNode);
  expect((node.value as StringNode).content?.text.toString()).toBe('xon/core');
});

test('import integer', () => {
  const text = newTextData('import 1');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ImportNode);
  expect(node.operator.text.toString()).toBe('import');
  expect(node.value).toBeFalsy();
});
