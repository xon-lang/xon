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
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
