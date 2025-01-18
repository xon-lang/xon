import {
  $CommentLineOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentLineOperatorNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('no content', () => {
  const text = newText('//');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineOperatorNode(context);

  expect(is(node, $CommentLineOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('//');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('with content', () => {
  const text = newText('// comment');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineOperatorNode(context);

  expect(is(node, $CommentLineOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('//');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});
