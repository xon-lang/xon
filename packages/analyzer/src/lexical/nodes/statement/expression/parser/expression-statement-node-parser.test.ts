import {
  $ExpressionStatementNode,
  $IntegerNode,
  ExpressionStatementNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('If statement with errors', () => {
  const text = newText('37');
  const node = parseExpressionStatementNode(text);

  expect(is(node.expression, $IntegerNode)).toBeTruthy();
  expect((node.expression as IntegerNode).contentNode.text.toNativeString()).toBe('37');
});

function parseExpressionStatementNode(text: Text): ExpressionStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first() as ExpressionStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ExpressionStatementNode)).toBe(true);

  return node;
}
