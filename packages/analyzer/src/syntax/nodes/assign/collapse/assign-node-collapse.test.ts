import {
  $IdNode,
  $IntegerNode,
  $AssignNode,
  $AssignOperatorNode,
  collapseAssignNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  AssignNode,
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

  expect(node.assign.value?.canBeExpression).toBe(true);
  expect(is(node.assign.value, $IntegerNode())).toBe(true);
  expect((node.assign.value as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getAssignNode(text: Text): AssignNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseAssignNode().collapse(nodes, nodes.lastIndex()!)!.node;

  expect(node).toBeTruthy();
  expect(is(node, $AssignNode())).toBe(true);

  return node;
}
