import {$BracketCloseNode, newAnalyzerContext, parseBracketCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close bracket', () => {
  const text = newText(']');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBracketCloseNode(context);

  expect(is(node, $BracketCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe(']');
});
