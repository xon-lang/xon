import {
  $ExpressionNode,
  $IdNode,
  $IsInfixNode,
  $IsOperatorNode,
  collapseIsInfixNode,
  IdNode,
  IsInfixNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Is xyz', () => {
  const text = newText('abc is xyz');
  const node = getIsInfixNode(text);

  expect(is(node.left, $IdNode())).toBe(true);
  expect((node.left as IdNode).text.toNativeString()).toBe('abc');
  expect(is(node.right, $IdNode())).toBe(true);
  expect((node.right as IdNode).text.toNativeString()).toBe('xyz');
});

function getIsInfixNode(text: Text): IsInfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseIsInfixNode().collapse(nodes, 0)?.node as IsInfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $IsInfixNode())).toBe(true);
  expect(is(node.operator, $IsOperatorNode())).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('is');
  expect(is(node.left, $ExpressionNode())).toBe(true);
  expect(is(node.right, $ExpressionNode())).toBe(true);

  return node;
}
