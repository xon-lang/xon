import {
  $BraceCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseBraceCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('close brace', () => {
  const text = newText('}');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBraceCloseNode(context);

  expect(is(node, $BraceCloseNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('}');
});
