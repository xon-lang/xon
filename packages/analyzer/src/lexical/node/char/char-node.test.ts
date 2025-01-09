import {$CharNode, parseCharNode} from '#analyzer';
import {charStreamFromText, newText, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('char', () => {
  const text = newText("'ab\n\nc'");
  const source = charStreamFromText(text);
  const node = parseCharNode(source);

  expect(is(node, $CharNode)).toBe(true);
  expect(node?.openNode.text.toNativeString()).toBe("'");
  expect(node?.contentNode?.text.toNativeString()).toBe('ab\n\nc');
  expect(node?.closeNode?.text.toNativeString()).toBe("'");
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.start.column).toBe(0);
  expect(node?.range.stop.index).toBe(7);
  expect(node?.range.stop.line).toBe(2);
  expect(node?.range.stop.column).toBe(2);
});

test('char only quote', () => {
  const text = newText("'a");
  const source = charStreamFromText(text);
  const node = parseCharNode(source);

  expect(is(node, $CharNode)).toBe(true);
  expect(node?.openNode.text.toNativeString()).toBe("'");
  expect(node?.contentNode?.text.toNativeString()).toBe('a');
  expect(node?.closeNode).toBe(nothing);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('empty char single quote', () => {
  const text = newText("'");
  const source = charStreamFromText(text);
  const node = parseCharNode(source);

  expect(is(node, $CharNode)).toBe(true);
  expect(node?.openNode.text.toNativeString()).toBe("'");
  expect(node?.contentNode).toBe(nothing);
  expect(node?.closeNode).toBe(nothing);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('empty char double quote', () => {
  const text = newText("''");
  const source = charStreamFromText(text);
  const node = parseCharNode(source);

  expect(is(node, $CharNode)).toBe(true);
  expect(node?.openNode.text.toNativeString()).toBe("'");
  expect(node?.contentNode).toBe(nothing);
  expect(node?.closeNode?.text.toNativeString()).toBe("'");
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});
