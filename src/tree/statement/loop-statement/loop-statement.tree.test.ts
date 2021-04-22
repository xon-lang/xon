import { evalExpression } from '../../eval';
import { ArrayExpressionTree } from '../../expression/array-expression/array-expression.tree';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { MethodExpressionTree } from '../../expression/method-expression/method-expression.tree';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { LoopStatementTree } from './loop-statement.tree';

test('loop with value', () => {
  const code = 'loop item in [1, 2, 3]:\n    12+(45/5)';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree).toBeInstanceOf(LoopStatementTree);

  expect(tree.indexVarName).toBeUndefined();
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 45 / 5);
});

test('loop with value and index', () => {
  const code = 'loop value, i in object:\n    12+10';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree).toBeInstanceOf(LoopStatementTree);

  expect(tree.valueVarName).toBe('value');
  expect(tree.indexVarName).toBe('i');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with expression only', () => {
  const code = 'loop [1, 2, 3]:\n    1+1';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree).toBeInstanceOf(LoopStatementTree);

  expect(tree.valueVarName).toBeUndefined();
  expect(tree.indexVarName).toBeUndefined();
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(1 + 1);
});

test('infinity loop', () => {
  const code = 'loop:\n   log("To infinity and beyond!")';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree).toBeInstanceOf(LoopStatementTree);

  expect(tree.valueVarName).toBeUndefined();
  expect(tree.indexVarName).toBeUndefined();
  expect(tree.expression).toBeUndefined();

  expect(tree.body.length).toBe(1);
  const statement = tree.body[0] as ExpressionStatementTree;
  expect(statement.value).toBeInstanceOf(MethodExpressionTree);
});
