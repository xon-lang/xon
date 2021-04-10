import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement.tree';

test('if else if', () => {
  const code = 'if 12+(45/9) then\n    12+(45/5)\nelse if 2+2 then\n    2 * 4';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

  const nextIfStatement = tree.elseStatements[0] as IfStatementTree;

  expect(evalExpression(nextIfStatement.condition)).toBe(2 + 2);
  expect(evalExpression((nextIfStatement.thenStatements[0] as ExpressionStatementTree).value)).toBe(
    2 * 4,
  );
});

test('if else', () => {
  const code = 'if 12+(45/9) then\n    12+(45/5)\nelse\n    2   *   4   ';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

  const elseStatement = tree.elseStatements[0] as ExpressionStatementTree;
  expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});

test('if', () => {
  const code = 'if 12+(45/9) then\n    12+(45/5)';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4 then\n    12+(45^  5)';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evalExpression(tree.condition)).toBe(6 > 4);
  const ifStatement = tree.thenStatements[0] as ExpressionStatementTree;
  expect(evalExpression(ifStatement.value)).toBe(12 + 45 ** 5);
});
