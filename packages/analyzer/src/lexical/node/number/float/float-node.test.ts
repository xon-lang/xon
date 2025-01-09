import {$FloatNode, FloatNode, parseNumberNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('float', () => {
  const text = newText('123.456');
  const source = charStreamFromText(text);
  const node = parseNumberNode(source) as FloatNode;

  expect(is(node, $FloatNode)).toBe(true);
  expect(node?.integerPartNode.text.toNativeString()).toBe('123');
  expect(node?.fractionalPartNode?.text.toNativeString()).toBe('456');
});
