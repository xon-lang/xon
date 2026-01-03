import {
  $CommentLineNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseCommentLineNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('line comment', () => {
  const text = newText('// abc \n def');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineNode(context);

  expect(is(node, $CommentLineNode())).toBe(true);
  expect(node?.content?.getText().toNativeString()).toBe(' abc ');
  expect(node?.content?.range.start.index).toBe(2);
  expect(node?.content?.range.stop.index).toBe(7);
});
