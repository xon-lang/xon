import {$IntegerContentNode, parseIntegerContentNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('integer content', () => {
  const text = newText('123');
  const source = charStreamFromText(text);
  const node = parseIntegerContentNode(source);

  expect(is(node, $IntegerContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('123');
});

test('integer content underscore', () => {
  const text = newText('123_456');
  const source = charStreamFromText(text);
  const node = parseIntegerContentNode(source);

  expect(is(node, $IntegerContentNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('123_456');
});

test('underscore digits', () => {
  const text = newText('_123_456');
  const source = charStreamFromText(text);
  const node = parseIntegerContentNode(source);

  expect(node).toBeFalsy();
});
