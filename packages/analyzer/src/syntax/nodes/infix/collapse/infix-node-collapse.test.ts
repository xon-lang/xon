import {
  $InfixNode,
  $IntegerNode,
  $PlusInfixNode,
  collapseInfixNode,
  InfixNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  PLUS,
} from '#analyzer';
import {newArrayData, newDictionary, newKeyValue, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Plus two integers', () => {
  const text = newText('1+2');
  const node = getInfixNode(text);

  expect(is(node, $PlusInfixNode)).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('+');
  expect(is(node.left, $IntegerNode)).toBe(true);
  expect((node.left as IntegerNode).contentNode.text.toNativeString()).toBe('1');
  expect(is(node.right, $IntegerNode)).toBe(true);
  expect((node.right as IntegerNode).contentNode.text.toNativeString()).toBe('2');
});

function getInfixNode(text: Text): InfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const collapse = collapseInfixNode(newDictionary(newArrayData([newKeyValue(PLUS, $PlusInfixNode)])), true);
  const node = collapse(nodes, 0)?.node as InfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $InfixNode)).toBe(true);

  return node;
}
