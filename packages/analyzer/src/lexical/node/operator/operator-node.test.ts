import {$OperatorNode, parseIdNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('import operator', () => {
  const text = newText('import');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('import');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(6);
});

test('plus operator', () => {
  const text = newText('+');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('+');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('import operator', () => {
  const text = newText('import');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('import');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(6);
});
