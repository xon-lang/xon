import {
  $CommentBlockNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('block comment', () => {
  const text = newText('---   abc ---');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentBlockNode(context);

  expect(is(node, $CommentBlockNode())).toBe(true);
  expect(node?.content?.text.toNativeString()).toBe('   abc ');
  expect(node?.content?.range.start.index).toBe(3);
  expect(node?.content?.range.stop.index).toBe(10);
});
