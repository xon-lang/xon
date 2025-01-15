import {$BraceCloseNode, parseBraceCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close brace', () => {
  const text = newText('}');
  const source = charStreamFromText(text);
  const node = parseBraceCloseNode(source);

  expect(is(node, $BraceCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('}');
});
