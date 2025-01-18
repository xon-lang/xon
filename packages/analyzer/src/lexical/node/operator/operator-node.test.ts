import {$OperatorNode, newAnalyzerContext, newCharacterStreamFromText, parseOperatorNode} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('import operator', () => {
  const text = newText('import');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseOperatorNode(context);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('import');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(6);
});

test('plus operator', () => {
  const text = newText('+abc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseOperatorNode(context);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('+');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('range operator', () => {
  const text = newText('.. ');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseOperatorNode(context);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('..');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('equals operator', () => {
  const text = newText('== ');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseOperatorNode(context);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('==');
});

test('assign operator', () => {
  const text = newText('= ');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseOperatorNode(context);

  expect(is(node, $OperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('=');
});
