import {
  $IfStatementNode,
  $IntegerNode,
  IfStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('If statement with errors', () => {
  const text = newText('if 7 17 37');
  const node = parseIfStatementNode(text);

  expect(node.errorNodes?.count()).toBe(2);
  expect(is(node.conditionNode, $IntegerNode)).toBe(true);
  expect((node.conditionNode as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

test('If statement without errors', () => {
  const text = newText('if 7');
  const node = parseIfStatementNode(text);

  expect(node.errorNodes?.count()).toBe(0);
  expect(is(node.conditionNode, $IntegerNode)).toBe(true);
  expect((node.conditionNode as IntegerNode).contentNode.text.toNativeString()).toBe('7');
});

function parseIfStatementNode(text: Text): IfStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first() as IfStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $IfStatementNode)).toBe(true);

  return node;
}
