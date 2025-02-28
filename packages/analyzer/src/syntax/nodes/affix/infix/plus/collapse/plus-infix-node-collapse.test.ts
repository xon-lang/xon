import {
  $IntegerNode,
  $PlusInfixNode,
  $PlusOperatorNode,
  collapsePlusInfixNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  PlusInfixNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Plus two integers', () => {
  const text = newText('1+2');
  const node = getPlusInfixNode(text);

  expect(is(node.left, $IntegerNode())).toBe(true);
  expect((node.left as IntegerNode).contentNode.text.toNativeString()).toBe('1');
  expect(is(node.right, $IntegerNode())).toBe(true);
  expect((node.right as IntegerNode).contentNode.text.toNativeString()).toBe('2');
});

function getPlusInfixNode(text: Text): PlusInfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapsePlusInfixNode().collapse(nodes, 0)?.node as PlusInfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $PlusInfixNode())).toBe(true);
  expect(is(node.operator, $PlusOperatorNode())).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('+');
  expect(node.left.canBeExpression).toBe(true);
  expect(node.right.canBeExpression).toBe(true);

  return node;
}
