import {newText, newTextResource, nothing} from '#common';
import {$CommentLineNode, CommentLineNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('line comment', () => {
  const text = newText('// abc');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes.at(0) as CommentLineNode;

  expect(statements.length()).toBe(0);
  expect(syntax.hiddenNodes.length()).toBe(1);
  expect(node.$).toBe($CommentLineNode);
  expect(node.text.toNativeString()).toBe('// abc');
});
