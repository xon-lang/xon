import {$NlNode, parseNlNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('cr lf', () => {
  const text = newText('\n\r\nabc');
  const source = charStreamFromText(text);
  const node = parseNlNode(source);

  expect(node).toBeTruthy();
  expect(is(node, $NlNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('\n\r\n');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.stop.index).toBe(3);
  expect(node?.range.stop.line).toBe(2);
});

test('cr lf whitespace', () => {
  const text = newText('\n   \r\n\n   abc');
  const source = charStreamFromText(text);
  const node = parseNlNode(source);

  expect(node).toBeTruthy();
  expect(is(node, $NlNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('\n   \r\n\n   ');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.stop.index).toBe(10);
  expect(node?.range.stop.line).toBe(3);
});

test('starts with whitespace', () => {
  const text = newText(' \n   \r\n\n   abc');
  const source = charStreamFromText(text);
  const node = parseNlNode(source);

  expect(node).toBeFalsy();
});
