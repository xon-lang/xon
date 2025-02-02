import {
  $ControlKeywordNode,
  $ModifierKeywordNode,
  $OperatorNode,
  $SymbolOperatorNode,
  $WordOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  OperatorNode,
  parseSymbolOperatorNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Control operator return', () => {
  const text = newText('return');
  const node = operatorFromText(text);

  expect(is(node, $ControlKeywordNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('return');
});

test('Modifier operator const', () => {
  const text = newText('const');
  const node = operatorFromText(text);

  expect(is(node, $ModifierKeywordNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('const');
});

test('Symbol operator plus', () => {
  const text = newText('+');
  const node = operatorFromText(text);

  expect(is(node, $SymbolOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('+');
});

test('Word operator as', () => {
  const text = newText('as');
  const node = operatorFromText(text);

  expect(is(node, $WordOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('as');
});

function operatorFromText(text: Text): OperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseSymbolOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $OperatorNode)).toBe(true);

  return node as OperatorNode;
}
