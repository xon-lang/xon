import {
  $OperatorNode,
  $SymbolOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  OperatorNode,
  parseSymbolOperatorNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Symbol operator plus', () => {
  const text = newText('+');
  const node = operatorFromText(text);

  expect(is(node, $SymbolOperatorNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('+');
});

test('Symbol operator exclamation', () => {
  const text = newText('!');
  const node = operatorFromText(text);

  expect(is(node, $SymbolOperatorNode())).toBe(true);
  expect(node?.text.toNativeString()).toBe('!');
});

function operatorFromText(text: Text): OperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseSymbolOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $OperatorNode())).toBe(true);

  return node as OperatorNode;
}
