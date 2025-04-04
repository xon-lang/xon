import {
  $AsInfixNode,
  $AsOperatorNode,
  $ExpressionNode,
  $IdNode,
  AsInfixNode,
  collapseAsInfixNode,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('As xyz', () => {
  const text = newText('abc as xyz');
  const node = getAsInfixNode(text);

  expect(is(node.left, $IdNode())).toBe(true);
  expect((node.left as IdNode).text.toNativeString()).toBe('abc');
  expect(is(node.right, $IdNode())).toBe(true);
  expect((node.right as IdNode).text.toNativeString()).toBe('xyz');
});

function getAsInfixNode(text: Text): AsInfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseAsInfixNode().collapse(nodes, 0)?.node as AsInfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $AsInfixNode())).toBe(true);
  expect(is(node.operator, $AsOperatorNode())).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('as');
  expect(is(node.left, $ExpressionNode())).toBe(true);
  expect(is(node.right, $ExpressionNode())).toBe(true);

  return node;
}
