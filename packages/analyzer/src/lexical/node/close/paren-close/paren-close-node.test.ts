import {$ParenCloseNode, ParenCloseNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('close paren', () => {
  const text = newText(')');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as ParenCloseNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($ParenCloseNode);
  expect(node.text.toNativeString()).toBe(')');
});
