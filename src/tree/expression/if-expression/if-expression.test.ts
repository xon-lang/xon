import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { IfExpressionTree } from './if-expression.tree';

test('if else if', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)\nelse if 2+2:\n    2 * 4';
  const tree = parseExpression<IfExpressionTree>(code);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

  const elseStatement = (tree.elseStatements[0] as ExpressionStatementTree)
    .value as IfExpressionTree;

  expect(evalExpression(elseStatement.condition)).toBe(2 + 2);
  expect(evalExpression((elseStatement.ifStatements[0] as ExpressionStatementTree).value)).toBe(
    2 * 4,
  );
});

test('if else', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)\nelse\n    2   *   4   ';
  const tree = parseExpression<IfExpressionTree>(code);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

  const elseStatement = tree.elseStatements[0] as ExpressionStatementTree;
  expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});

test('if', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)';
  const tree = parseExpression<IfExpressionTree>(code);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4:\n    12+(45^  5)';
  const tree = parseExpression<IfExpressionTree>(code);

  expect(evalExpression(tree.condition)).toBe(6 > 4);
  const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 ** 5);
});
