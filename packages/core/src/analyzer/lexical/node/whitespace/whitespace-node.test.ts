import {newText, newTextResource, nothing} from '#common';
import {$WhitespaceNode, LexicalNode, syntaxFromResource, WhitespaceNode} from '#core';
import {expect, test} from 'vitest';

test('whitespace', () => {
  const text = newText('    ');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes.at(0) as WhitespaceNode;

  expect(statements.length()).toBe(0);
  expect(syntax.hiddenNodes.length()).toBe(1);
  expect(node.$).toBe($WhitespaceNode);
  expect((node as LexicalNode).text.toNativeString()).toBe('    ');
});
