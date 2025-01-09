import {$CommentBlockContentNode, parseCommentBlockContentNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment block content', () => {
  const text = newText('abc');
  const source = charStreamFromText(text);
  const node = parseCommentBlockContentNode(source);

  expect(is(node, $CommentBlockContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('abc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
