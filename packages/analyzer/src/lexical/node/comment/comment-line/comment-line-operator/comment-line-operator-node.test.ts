import {$CommentLineOperatorNode, newAnalyzerContext, parseCommentLineOperatorNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('no content', () => {
  const text = newText('//');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineOperatorNode(context);

  expect(is(node, $CommentLineOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('//');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('with content', () => {
  const text = newText('// comment');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineOperatorNode(context);

  expect(is(node, $CommentLineOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('//');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});
