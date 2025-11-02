import {
  $ExpressionStatementNode,
  $IntegerNode,
  $UnionInfixNode,
  ExpressionStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseExpressionStatementNode,
  UnionInfixNode,
} from '#analyzer';
import {Integer, newArrayData, newText, Text} from '#core';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Expression statement with errors', () => {
  const text = newText('7 17 37');
  const node = getExpressionStatementNode(text, 2);

  expect(is(node.expression, $IntegerNode())).toBeTruthy();
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('Expression statement without errors', () => {
  const text = newText('7');
  const node = getExpressionStatementNode(text, 0);

  expect(is(node.expression, $IntegerNode())).toBeTruthy();
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('Union expression', () => {
  const text = newText('1 | 2 | 3');
  const node = getExpressionStatementNode(text, 0);

  expect(is(node.expression, $UnionInfixNode())).toBe(true);
  expect(is((node.expression as UnionInfixNode).left, $UnionInfixNode())).toBe(true);
  expect(((node.expression as UnionInfixNode).right as IntegerNode).contentNode.text.toNativeString()).toBe(
    '3',
  );
});

function getExpressionStatementNode(text: Text, extraNodesCount: Integer): ExpressionStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseExpressionStatementNode(context, 0, nodes) as ExpressionStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ExpressionStatementNode())).toBe(true);
  expect(context.extraNodes.count()).toBe(extraNodesCount);

  return node;
}
