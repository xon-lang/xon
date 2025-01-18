import {
  $BracketCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseBracketCloseNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close bracket', () => {
  const text = newText(']');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBracketCloseNode(context);

  expect(is(node, $BracketCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe(']');
});
