import {
  $CommentBlockCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockCloseNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment block close', () => {
  const text = newText('---');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentBlockCloseNode(context);

  expect(is(node, $CommentBlockCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('---');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
