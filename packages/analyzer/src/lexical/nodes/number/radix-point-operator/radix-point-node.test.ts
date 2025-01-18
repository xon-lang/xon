import {
  $RadixPointNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseRadixPointNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('single point', () => {
  const text = newText('.');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseRadixPointNode(context);

  expect(is(node, $RadixPointNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('.');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('point fractional', () => {
  const text = newText('.123');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseRadixPointNode(context);

  expect(is(node, $RadixPointNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('.');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
