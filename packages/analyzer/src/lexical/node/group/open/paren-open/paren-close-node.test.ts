import {$ParenOpenNode, parseGroupOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open paren', () => {
  const text = newText('(');
  const source = charStreamFromText(text);
  const node = parseGroupOpenNode(source);

  expect(is(node, $ParenOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('(');
});
