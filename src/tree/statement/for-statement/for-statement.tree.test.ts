import { evalExpression } from '../../eval';
import { ArrayExpressionTree } from '../../expression/array-expression/array-expression.tree';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { ForStatementTree } from './for-statement.tree';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]:\n    12+(45/5)';
  const tree = parseStatement<ForStatementTree>(code);
  expect(tree).toBeInstanceOf(ForStatementTree);

  expect(tree.indexVarName).toBe(null);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value, i in array:\n    12+10';
  const tree = parseStatement<ForStatementTree>(code);
  expect(tree).toBeInstanceOf(ForStatementTree);

  expect(tree.valueVarName).toBe('value');
  expect(tree.indexVarName).toBe('i');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]:\n    1+1';
  const tree = parseStatement<ForStatementTree>(code);
  expect(tree).toBeInstanceOf(ForStatementTree);

  expect(tree.valueVarName).toBe(null);
  expect(tree.indexVarName).toBe(null);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.expression)).toBe(1 + 1);
});
