import {$CommentLineNode, CommentLineNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('line comment', () => {
  const text = newText('// abc');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes.at(0) as CommentLineNode;

  expect(statements.count()).toBe(0);
  expect(syntax.hiddenNodes.count()).toBe(1);
  expect(node.$).toBe($CommentLineNode);
  expect(node.text.toNativeString()).toBe('// abc');
});
