import {newText, newTextResource, nothing} from '#common';
import {$BracketCloseNode, BracketCloseNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('close paren', () => {
  const text = newText(']');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($BracketCloseNode);
  expect(node.text.toNativeString()).toBe(']');
});
