import {
  $CommentBlockContentNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockContentNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment block content', () => {
  const text = newText('abc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentBlockContentNode(context);

  expect(is(node, $CommentBlockContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('abc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
