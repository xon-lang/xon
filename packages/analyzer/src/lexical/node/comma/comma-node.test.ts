import {$CommaNode, parseCommaNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('comma', () => {
  const text = newText(',');
  const source = charStreamFromText(text);
  const node = parseCommaNode(source);

  expect(node).toBeTruthy();
  expect(is(node, $CommaNode)).toBe(true);
});
