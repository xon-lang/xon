import {
  $TypeInfixNode,
  $TypeOperatorNode,
  $IdNode,
  $IntegerNode,
  TypeInfixNode,
  collapseTypeInfixNode,
  IdNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Type integer', () => {
  const text = newText('a: 1');
  const node = getTypeInfixNode(text);

  expect(is(node.leftNode, $IdNode())).toBe(true);
  expect((node.leftNode as IdNode).text.toNativeString()).toBe('a');
  expect(node.rightNode?.canBeExpression).toBe(true);
  expect(is(node.rightNode, $IntegerNode())).toBe(true);
  expect((node.rightNode as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getTypeInfixNode(text: Text): TypeInfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseTypeInfixNode().collapse(nodes, nodes.lastIndex()!)?.node as TypeInfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $TypeInfixNode())).toBe(true);
  expect(is(node.operatorNode, $TypeOperatorNode())).toBe(true);
  expect(node.operatorNode.text.toNativeString()).toBe(':');
  expect(node.leftNode.canBeExpression).toBe(true);

  return node;
}
