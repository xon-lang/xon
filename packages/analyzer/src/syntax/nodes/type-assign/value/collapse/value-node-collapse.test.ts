import {
  $AssignOperatorNode,
  $ExpressionNode,
  $IdNode,
  $IntegerNode,
  $ValueNode,
  collapseValueNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  ValueNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Integer value', () => {
  const text = newText('a= 1');
  const node = getAssignNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect((node.target as IdNode).text.toNativeString()).toBe('a');

  expect(is(node.value.operator, $AssignOperatorNode())).toBe(true);
  expect(node.value.operator.text.toNativeString()).toBe('=');

  expect(is(node.value.expression, $ExpressionNode())).toBe(true);
  expect(is(node.value.expression, $IntegerNode())).toBe(true);
  expect((node.value.expression as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getAssignNode(text: Text): ValueNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const {index, deleteCount, node} = collapseValueNode().collapse(nodes, nodes.lastIndex()!)!;

  expect(node).toBeTruthy();
  expect(index).toBe(0);
  expect(deleteCount).toBe(3);
  expect(is(node, $ValueNode())).toBe(true);

  return node;
}
