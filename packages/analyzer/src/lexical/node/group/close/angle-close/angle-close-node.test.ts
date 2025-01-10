import {$AngleCloseNode, parseGroupCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close angle', () => {
  const text = newText(':>');
  const source = charStreamFromText(text);
  const node = parseGroupCloseNode(source);

  expect(is(node, $AngleCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe(':>');
});
