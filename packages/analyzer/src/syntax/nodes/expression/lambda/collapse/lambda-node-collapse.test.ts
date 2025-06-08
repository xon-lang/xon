import {
  $GroupNode,
  $LambdaNode,
  collapseNodes,
  ExpressionStatementNode,
  IdNode,
  IntegerNode,
  LambdaNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Lambda integer type and value', () => {
  const text = newText('(a): 1 = 2');
  const node = getLambdaNode(text);

  expect(node.parameters.items.count()).toBe(1);
  expect(
    (
      (node.parameters.items.at(0)?.statement as ExpressionStatementNode).expression as IdNode
    ).text.toNativeString(),
  ).toBe('a');

  expect((node.type?.expression as IntegerNode).contentNode.text.toNativeString()).toBe('1');
  expect((node.value?.expression as IntegerNode).contentNode.text.toNativeString()).toBe('2');
});

function getLambdaNode(text: Text): LambdaNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = collapseNodes(context, nodes).first() as LambdaNode;

  expect(node).toBeTruthy();
  expect(is(node, $LambdaNode())).toBe(true);
  expect(is(node.parameters, $GroupNode())).toBe(true);

  return node;
}
