import {$CommentBlockNode, parseCommentBlockNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('block comment', () => {
  const text = newText('---   abc ---');
  const source = charStreamFromText(text);
  const node = parseCommentBlockNode(source);

  expect(is(node, $CommentBlockNode)).toBe(true);
  expect(node?.contentNode?.text.toNativeString()).toBe('   abc ');
  expect(node?.contentNode?.range.start.index).toBe(3);
  expect(node?.contentNode?.range.stop.index).toBe(10);
});
