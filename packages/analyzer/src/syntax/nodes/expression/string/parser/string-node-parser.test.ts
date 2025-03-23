import {$StringNode, newAnalyzerContext, newCharacterStreamFromText, parseStringNode} from '#analyzer';
import {newText, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('string', () => {
  const text = newText('"ab\n\nc"');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringNode(context);

  expect(is(node, $StringNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe('"');
  expect(node?.content?.text.toNativeString()).toBe('ab\n\nc');
  expect(node?.close?.text.toNativeString()).toBe('"');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.start.line).toBe(0);
  expect(node?.range.start.column).toBe(0);
  expect(node?.range.stop.index).toBe(7);
  expect(node?.range.stop.line).toBe(2);
  expect(node?.range.stop.column).toBe(2);
});

test('string only quote', () => {
  const text = newText('"a');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringNode(context);

  expect(is(node, $StringNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe('"');
  expect(node?.content?.text.toNativeString()).toBe('a');
  expect(node?.close).toBe(nothing);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('empty string single quote', () => {
  const text = newText('"');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringNode(context);

  expect(is(node, $StringNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe('"');
  expect(node?.content).toBe(nothing);
  expect(node?.close).toBe(nothing);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('empty string double quote', () => {
  const text = newText('""');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringNode(context);

  expect(is(node, $StringNode())).toBe(true);
  expect(node?.open.text.toNativeString()).toBe('"');
  expect(node?.content).toBe(nothing);
  expect(node?.close?.text.toNativeString()).toBe('"');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});
