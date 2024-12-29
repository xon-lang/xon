import {newText, newTextResource, nothing} from '#common';
import {$BraceCloseNode, BraceCloseNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('close paren', () => {
  const text = newText('}');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BraceCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($BraceCloseNode);
  expect(node.text.toString()).toBe('}');
});
