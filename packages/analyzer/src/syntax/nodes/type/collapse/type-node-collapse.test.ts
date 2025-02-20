import {
  $IdNode,
  $IntegerNode,
  $TypeNode,
  $TypeOperatorNode,
  collapseTypeNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  TypeNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Type integer', () => {
  const text = newText('a: 1');
  const node = getTypeNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect((node.target as IdNode).text.toNativeString()).toBe('a');

  expect(is(node.type.operator, $TypeOperatorNode())).toBe(true);
  expect(node.type.operator.text.toNativeString()).toBe(':');

  expect(node.type.value?.canBeExpression).toBe(true);
  expect(is(node.type.value, $IntegerNode())).toBe(true);
  expect((node.type.value as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getTypeNode(text: Text): TypeNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseTypeNode().collapse(nodes, nodes.lastIndex()!)!.node;

  expect(node).toBeTruthy();
  expect(is(node, $TypeNode())).toBe(true);

  return node;
}
