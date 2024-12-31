import {newText, newTextResource, nothing} from '#common';
import {$CommentBlockNode, CommentBlockNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('block comment', () => {
  const text = newText('--- abc\n\n\n def---');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as CommentBlockNode;

  expect(statements.length).toBe(0);
  expect(syntax.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($CommentBlockNode);
  expect(node.text.toNativeString()).toBe('--- abc\n\n\n def---');
});
