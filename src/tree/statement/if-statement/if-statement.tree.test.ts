import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement.tree';

test('if else if', () => {
  const code = 'if 12+(45/9) :\n    12+(45/5)\nelse: if 2+2 : 2 * 4';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenBody[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);

  const nextIfStatement = tree.elseBody[0] as IfStatementTree;

  expect(evalExpression(nextIfStatement.condition)).toBe(2 + 2);
  expect(evalExpression((nextIfStatement.thenBody[0] as ExpressionStatementTree).expression)).toBe(
    2 * 4,
  );
});

test('if else', () => {
  const code = 'if 12+(45/9) :    12+(45/5) else: 2   *   4   ';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenBody[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);

  const elseStatement = tree.elseBody[0] as ExpressionStatementTree;
  expect(evalExpression(elseStatement.expression)).toBe(2 * 4);
});

test('if expression', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenBody[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4:\n    12+(45^  5)';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(6 > 4);
  const ifStatement = tree.thenBody[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 ** 5);
});
