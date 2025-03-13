import {
  $AssignNode,
  $AssignOperatorNode,
  $IdNode,
  $IntegerNode,
  AssignNode,
  collapseAssignNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Assign integer', () => {
  const text = newText('a= 1');
  const node = getAssignNode(text);

  expect(is(node.target, $IdNode())).toBe(true);
  expect((node.target as IdNode).text.toNativeString()).toBe('a');

  expect(is(node.assign.operator, $AssignOperatorNode())).toBe(true);
  expect(node.assign.operator.text.toNativeString()).toBe('=');

  expect(node.assign.expression?.canBeExpression).toBe(true);
  expect(is(node.assign.expression, $IntegerNode())).toBe(true);
  expect((node.assign.expression as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getAssignNode(text: Text): AssignNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const {index, deleteCount, node} = collapseAssignNode().collapse(nodes, nodes.lastIndex()!)!;

  expect(node).toBeTruthy();
  expect(index).toBe(0);
  expect(deleteCount).toBe(3);
  expect(is(node, $AssignNode())).toBe(true);

  return node;
}
