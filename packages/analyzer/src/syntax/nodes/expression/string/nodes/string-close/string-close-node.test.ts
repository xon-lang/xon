import {
  $StringCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStringCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('String close', () => {
  const text = newText('"a');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringCloseNode(context);

  expect(is(node, $StringCloseNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe('"');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
