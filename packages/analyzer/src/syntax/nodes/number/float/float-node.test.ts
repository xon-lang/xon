import {
  $FloatNode,
  FloatNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseNumberNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('float', () => {
  const text = newText('123.456');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseNumberNode(context) as FloatNode;

  expect(is(node, $FloatNode())).toBe(true);
  expect(node?.integer.text.toNativeString()).toBe('123');
  expect(node?.fraction?.text.toNativeString()).toBe('456');
});

test('float with underscore', () => {
  const text = newText('1_2_3.456___');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseNumberNode(context) as FloatNode;

  expect(is(node, $FloatNode())).toBe(true);
  expect(node?.integer.text.toNativeString()).toBe('1_2_3');
  expect(node?.fraction?.text.toNativeString()).toBe('456___');
});

test('no float number', () => {
  const text = newText('_123.456');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseNumberNode(context) as FloatNode;

  expect(node).toBeFalsy();
});
