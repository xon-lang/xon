import {newText, newTextResource, nothing} from '#common';
import {$ImportNode, $StringNode, ImportNode, StringNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('import string', () => {
  const text = newText('import "xon/core"');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as ImportNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($ImportNode);
  expect(node.operator.text.toNativeString()).toBe('import');
  expect(node.value?.$).toBe($StringNode);
  expect((node.value as StringNode).content?.text.toNativeString()).toBe('xon/core');
});

test('import integer', () => {
  const text = newText('import 1');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as ImportNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($ImportNode);
  expect(node.operator.text.toNativeString()).toBe('import');
  expect(node.value).toBeFalsy();
});
