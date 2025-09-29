import {
  $ExpressionNode,
  $IdNode,
  $UnionInfixNode,
  $UnionOperatorNode,
  collapseUnionInfixNode,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  UnionInfixNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Union infix operator', () => {
  const text = newText('abc | xyz');
  const node = getUnionInfixNode(text);

  expect(is(node.left, $IdNode())).toBe(true);
  expect((node.left as IdNode).text.toNativeString()).toBe('abc');
  expect(is(node.right, $IdNode())).toBe(true);
  expect((node.right as IdNode).text.toNativeString()).toBe('xyz');
});

function getUnionInfixNode(text: Text): UnionInfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = collapseUnionInfixNode().collapse(nodes, 0)?.node as UnionInfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $UnionInfixNode())).toBe(true);
  expect(is(node.operator, $UnionOperatorNode())).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('|');
  expect(is(node.left, $ExpressionNode())).toBe(true);
  expect(is(node.right, $ExpressionNode())).toBe(true);

  return node;
}
