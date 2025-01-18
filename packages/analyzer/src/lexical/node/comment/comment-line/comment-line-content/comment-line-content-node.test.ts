import {$CommentLineContentNode, newAnalyzerContext, parseCommentLineContentNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment content', () => {
  const text = newText('a');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineContentNode(context);

  expect(is(node, $CommentLineContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('a');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
