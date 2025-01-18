import {
  $BraceCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseBraceCloseNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close brace', () => {
  const text = newText('}');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBraceCloseNode(context);

  expect(is(node, $BraceCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('}');
});
