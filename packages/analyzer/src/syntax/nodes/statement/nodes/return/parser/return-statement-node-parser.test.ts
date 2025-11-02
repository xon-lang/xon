import {
  $IntegerNode,
  $ReturnStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseReturnStatementNode,
  ReturnStatementNode,
} from '#analyzer';
import {$Model, Integer, is, newArrayData, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Return statement with errors', () => {
  const text = newText('return 7 17 37');
  const node = getReturnStatementNode(text, 2);

  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('Return statement without errors', () => {
  const text = newText('return 7');
  const node = getReturnStatementNode(text, 0);

  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

function getReturnStatementNode(text: Text, extraNodesCount: Integer): ReturnStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseReturnStatementNode(context, 0, nodes) as ReturnStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ReturnStatementNode())).toBe(true);
  expect(context.extraNodes.count()).toBe(extraNodesCount);

  return node;
}
