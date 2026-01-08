import {
  $ExpressionNode,
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
import {$Model, is, newArrayData, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Integer type ', () => {
  const text = newText('a: 1');
  const node = getTypeNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect((node.target as IdNode).getText().toNativeString()).toBe('a');

  expect(is(node.type.operator, $TypeOperatorNode())).toBe(true);
  expect(node.type.operator.text.toNativeString()).toBe(':');

  expect(is(node.type.expression, $ExpressionNode())).toBe(true);
  expect(is(node.type.expression, $IntegerNode())).toBe(true);
  expect((node.type.expression as IntegerNode).token.text.toNativeString()).toBe('1');
});

function getTypeNode(text: Text): TypeNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const {index, deleteCount, node} = collapseTypeNode().collapse(nodes, nodes.lastIndex()!)!;

  expect(node).toBeTruthy();
  expect(index).toBe(0);
  expect(deleteCount).toBe(3);
  expect(is(node, $TypeNode())).toBe(true);

  return node;
}
