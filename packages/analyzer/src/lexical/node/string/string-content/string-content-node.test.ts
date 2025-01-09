import {$StringContentNode, parseStringContentNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('string content', () => {
  const text = newText('a');
  const source = charStreamFromText(text);
  const node = parseStringContentNode(source);

  expect(is(node, $StringContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('a');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.start.column).toBe(0);
  expect(node?.range.stop.index).toBe(1);
  expect(node?.range.stop.line).toBe(0);
  expect(node?.range.stop.column).toBe(1);
});

test('string content with close quote', () => {
  const text = newText('a\nc"');
  const source = charStreamFromText(text);
  const node = parseStringContentNode(source);

  expect(is(node, $StringContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('a\nc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.start.column).toBe(0);
  expect(node?.range.stop.index).toBe(3);
  expect(node?.range.stop.line).toBe(1);
  expect(node?.range.stop.column).toBe(1);
});
