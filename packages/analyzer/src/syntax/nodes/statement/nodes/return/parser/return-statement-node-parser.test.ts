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
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Return statement with errors', () => {
  const text = newText('return 7 17 37');
  const node = getReturnStatementNode(text);

  expect(node.errorNodes?.count()).toBe(2);
  expect(is(node.expressionNode, $IntegerNode())).toBe(true);
  expect((node.expressionNode as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('Return statement without errors', () => {
  const text = newText('return 7');
  const node = getReturnStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
  expect(is(node.expressionNode, $IntegerNode())).toBe(true);
  expect((node.expressionNode as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

function getReturnStatementNode(text: Text): ReturnStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseReturnStatementNode(0, nodes) as ReturnStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ReturnStatementNode())).toBe(true);

  return node;
}
