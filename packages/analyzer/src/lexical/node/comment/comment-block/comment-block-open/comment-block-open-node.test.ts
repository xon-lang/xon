import {$CommentBlockOpenNode, parseCommentBlockOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment block open', () => {
  const text = newText('---');
  const source = charStreamFromText(text);
  const node = parseCommentBlockOpenNode(source);

  expect(is(node, $CommentBlockOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('---');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
