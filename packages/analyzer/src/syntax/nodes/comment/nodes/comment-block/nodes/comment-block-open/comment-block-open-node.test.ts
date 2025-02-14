import {
  $CommentBlockOpenNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentBlockOpenNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comment block open', () => {
  const text = newText('---');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentBlockOpenNode(context);

  expect(is(node, $CommentBlockOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('---');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
