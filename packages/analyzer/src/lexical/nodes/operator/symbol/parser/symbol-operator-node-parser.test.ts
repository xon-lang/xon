import {
  $SymbolOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseSymbolOperatorNode,
  SymbolOperatorNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Plus operator', () => {
  const text = newText('+abc');
  const node = symbolOperatorFromText(text);

  expect(node?.text.toNativeString()).toBe('+');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('Range operator', () => {
  const text = newText('.. ');
  const node = symbolOperatorFromText(text);

  expect(node?.text.toNativeString()).toBe('..');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(2);
});

test('Equals operator', () => {
  const text = newText('== ');
  const node = symbolOperatorFromText(text);

  expect(node?.text.toNativeString()).toBe('==');
});

test('Assign operator', () => {
  const text = newText('= ');
  const node = symbolOperatorFromText(text);

  expect(node?.text.toNativeString()).toBe('=');
});

function symbolOperatorFromText(text: Text): SymbolOperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseSymbolOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $SymbolOperatorNode)).toBe(true);

  return node as SymbolOperatorNode;
}
