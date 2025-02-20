import {
  $AssignInfixNode,
  $AssignOperatorNode,
  $IdNode,
  $IntegerNode,
  AssignInfixNode,
  collapseAssignInfixNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Assign two integers', () => {
  const text = newText('a=1');
  const node = getAssignInfixNode(text);

  expect(is(node.leftNode, $IdNode())).toBe(true);
  expect((node.leftNode as IdNode).text.toNativeString()).toBe('a');
  expect(node.rightNode?.canBeExpression).toBe(true);
  expect(is(node.rightNode, $IntegerNode())).toBe(true);
  expect((node.rightNode as IntegerNode).contentNode.text.toNativeString()).toBe('2');
});

function getAssignInfixNode(text: Text): AssignInfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseAssignInfixNode().collapse(nodes, 0)?.node as AssignInfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $AssignInfixNode())).toBe(true);
  expect(is(node.operatorNode, $AssignOperatorNode())).toBe(true);
  expect(node.operatorNode.text.toNativeString()).toBe('+');
  expect(node.leftNode.canBeExpression).toBe(true);

  return node;
}
