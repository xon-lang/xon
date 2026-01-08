import {
  $StringInterpolationOpenNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStringInterpolationOpenNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('String interpolation open', () => {
  const text = newText('$"a');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringInterpolationOpenNode(context);

  expect(is(node, $StringInterpolationOpenNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('$"');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});
