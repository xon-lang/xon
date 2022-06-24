import { evaluate } from '../../../util/evaluate';
import { parseStatement } from '../../../util/parse';
import { ArrayExpressionTree } from '../../expression/array/array-expression-tree';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { ForStatementTree } from './for-statement-tree';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]\n  12+(45/5)';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.indexVar?.name.text).toBeFalsy();
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  const statement = tree.body.statements[0];
  expect(evaluate((statement as ExpressionStatementTree).expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value, i in array\n  12+10';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.valueVar?.name.text).toBe('value');
  expect(tree.indexVar?.name.text).toBe('i');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(evaluate((tree.body.statements[0] as ExpressionStatementTree).expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]\n  1+1';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.valueVar?.name.text).toBeFalsy();
  expect(tree.indexVar?.name.text).toBeFalsy();
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(evaluate((tree.body.statements[0] as ExpressionStatementTree).expression)).toBe(
    1 + 1,
  );
});
