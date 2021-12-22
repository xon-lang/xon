import { SingleBodyNode } from '../../body/single/single-body-node';
import { evalExpression } from '../../eval';
import { ArrayExpressionNode } from '../../expression/array/array-expression-node';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { ForStatementNode } from './for-statement-node';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]:\n    12+(45/5)';
  const tree = parseStatement<ForStatementNode>(code);
  expect(tree).toBeInstanceOf(ForStatementNode);

  expect(tree.indexVarName).toBe(null);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionNode);

  const body = tree.body as SingleBodyNode;
  expect(evalExpression((body.statement as ExpressionStatementNode).expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value, i in array:\n    12+10';
  const tree = parseStatement<ForStatementNode>(code);
  expect(tree).toBeInstanceOf(ForStatementNode);

  expect(tree.valueVarName).toBe('value');
  expect(tree.indexVarName).toBe('i');
  expect(tree.expression).toBeInstanceOf(IdExpressionNode);

  const body = tree.body as SingleBodyNode;
  expect(evalExpression((body.statement as ExpressionStatementNode).expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]:\n    1+1';
  const tree = parseStatement<ForStatementNode>(code);
  expect(tree).toBeInstanceOf(ForStatementNode);

  expect(tree.valueVarName).toBe(null);
  expect(tree.indexVarName).toBe(null);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionNode);

  const body = tree.body as SingleBodyNode;
  expect(evalExpression((body.statement as ExpressionStatementNode).expression)).toBe(1 + 1);
});
