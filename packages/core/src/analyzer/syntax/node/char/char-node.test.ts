import {newText, newTextResource, nothing} from '#common';
import {$CharNode, CharNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('a', () => {
  const text = newText("'a'");
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CharNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($CharNode);
  expect(node.content?.text.toNativeString()).toBe(text.slice(1, -1).toNativeString());
});
