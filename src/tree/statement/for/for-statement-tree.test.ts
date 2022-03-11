import { none } from '../../../lib/core';
import { evaluate } from '../../../util/evaluate';
import { parseStatement } from '../../../util/parse';
import { MultipleBodyTree } from '../../body/multiple/multiple-body-tree';
import { ArrayExpressionTree } from '../../expression/array/array-expression-tree';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { ForStatementTree } from './for-statement-tree';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]\n  12+(45/5)';
  const tree = parseStatement(code) as ForStatementTree;
  expect(tree).toBeInstanceOf(ForStatementTree);

  expect(tree.indexVarName).toBe(none);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  const statement = (tree.body as MultipleBodyTree).statements[0];
  expect(evaluate((statement as ExpressionStatementTree).expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value, i in array\n  12+10';
  const tree = parseStatement(code) as ForStatementTree;
  expect(tree).toBeInstanceOf(ForStatementTree);

  expect(tree.valueVarName).toBe('value');
  expect(tree.indexVarName).toBe('i');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  const body = tree.body as MultipleBodyTree;
  expect(evaluate((body.statements[0] as ExpressionStatementTree).expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]\n  1+1';
  const tree = parseStatement(code) as ForStatementTree;
  expect(tree).toBeInstanceOf(ForStatementTree);

  expect(tree.valueVarName).toBe(none);
  expect(tree.indexVarName).toBe(none);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  const body = tree.body as MultipleBodyTree;
  expect(evaluate((body.statements[0] as ExpressionStatementTree).expression)).toBe(1 + 1);
});
