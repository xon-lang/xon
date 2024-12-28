import {newText, newTextResource, nothing} from '#common';
import {$ImportNode, $StringNode, ImportNode, StringNode, syntaxFromResource} from '#core';

test('import string', () => {
  const text = newText('import "xon/core"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($ImportNode);
  expect(node.operator.text.toString()).toBe('import');
  expect(node.value?.$).toBe($StringNode);
  expect((node.value as StringNode).content?.text.toString()).toBe('xon/core');
});

test('import integer', () => {
  const text = newText('import 1');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($ImportNode);
  expect(node.operator.text.toString()).toBe('import');
  expect(node.value).toBeFalsy();
});
