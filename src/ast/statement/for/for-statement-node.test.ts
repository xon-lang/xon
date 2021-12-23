import { MultipleBodyNode } from '../../body/multiple/multiple-body-node';
import { SingleBodyNode } from '../../body/single/single-body-node';
import { evalExpression } from '../../eval';
import { ArrayExpressionNode } from '../../expression/array/array-expression-node';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { ForStatementNode } from './for-statement-node';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]:   12+(45/5)';
  const node = parseStatement<ForStatementNode>(code);
  expect(node).toBeInstanceOf(ForStatementNode);

  expect(node.indexVarName).toBe(null);
  expect(node.expression).toBeInstanceOf(ArrayExpressionNode);

  const body = node.body as SingleBodyNode;
  expect(evalExpression((body.statement as ExpressionStatementNode).expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value, i in array:\n    12+10';
  const node = parseStatement<ForStatementNode>(code);
  expect(node).toBeInstanceOf(ForStatementNode);

  expect(node.valueVarName).toBe('value');
  expect(node.indexVarName).toBe('i');
  expect(node.expression).toBeInstanceOf(IdExpressionNode);

  const body = node.body as MultipleBodyNode;
  expect(evalExpression((body.statements[0] as ExpressionStatementNode).expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]:\n    1+1';
  const node = parseStatement<ForStatementNode>(code);
  expect(node).toBeInstanceOf(ForStatementNode);

  expect(node.valueVarName).toBe(null);
  expect(node.indexVarName).toBe(null);
  expect(node.expression).toBeInstanceOf(ArrayExpressionNode);

  const body = node.body as MultipleBodyNode;
  expect(evalExpression((body.statements[0] as ExpressionStatementNode).expression)).toBe(1 + 1);
});
