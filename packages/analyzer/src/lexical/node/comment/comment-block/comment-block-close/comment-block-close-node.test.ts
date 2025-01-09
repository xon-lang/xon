import {$CommentBlockCloseNode, parseCommentBlockCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment block close', () => {
  const text = newText('---');
  const source = charStreamFromText(text);
  const node = parseCommentBlockCloseNode(source);

  expect(is(node, $CommentBlockCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('---');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
