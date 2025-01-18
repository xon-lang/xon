import {$CommentLineNode, newAnalyzerContext, parseCommentLineNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('line comment', () => {
  const text = newText('// abc \n def');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCommentLineNode(context);

  expect(is(node, $CommentLineNode)).toBe(true);
  expect(node?.contentNode?.text.toNativeString()).toBe(' abc ');
  expect(node?.contentNode?.range.start.index).toBe(2);
  expect(node?.contentNode?.range.stop.index).toBe(7);
});
