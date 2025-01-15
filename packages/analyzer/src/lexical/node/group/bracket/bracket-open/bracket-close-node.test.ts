import {$BracketOpenNode, parseBracketOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open bracket', () => {
  const text = newText('[');
  const source = charStreamFromText(text);
  const node = parseBracketOpenNode(source);

  expect(is(node, $BracketOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('[');
});
