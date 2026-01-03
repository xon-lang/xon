import {
  $AngleCloseNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseAngleCloseNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('close angle', () => {
  const text = newText(':>');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseAngleCloseNode(context);

  expect(is(node, $AngleCloseNode())).toBe(true);
  expect(node?.getText().toNativeString()).toBe(':>');
});
