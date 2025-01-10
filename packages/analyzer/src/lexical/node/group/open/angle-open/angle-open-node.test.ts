import {$AngleOpenNode, parseGroupOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open angle', () => {
  const text = newText('<:');
  const source = charStreamFromText(text);
  const node = parseGroupOpenNode(source);

  expect(is(node, $AngleOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('<:');
});
