import {
  $IfStatementNode,
  $IntegerNode,
  IfStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseIfStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('If statement with errors', () => {
  const text = newText('if 7 17 37');
  const node = getIfStatementNode(text);

  expect(node.errorNodes?.count()).toBe(2);
  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('If statement without errors', () => {
  const text = newText('if 7');
  const node = getIfStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

function getIfStatementNode(text: Text): IfStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseIfStatementNode(0, nodes) as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode())).toBe(true);

  return node;
}
