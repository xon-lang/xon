import {
  $StringInterpolationCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStringInterpolationCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('String interpolation close', () => {
  const text = newText('"a');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringInterpolationCloseNode(context);

  expect(is(node, $StringInterpolationCloseNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('"');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
