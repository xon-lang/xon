import {nothing} from '#common';
import {$, CommentBlockNode, syntaxFromResource, textResourceFromData} from '#core';

test('block comment', () => {
  const text = '--- abc\n\n\n def---';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as CommentBlockNode;

  expect(statements.length).toBe(0);
  expect(syntax.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($.CommentBlockNode);
  expect(node.text.toString()).toBe('--- abc\n\n\n def---');
});
