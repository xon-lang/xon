import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';
import { ForStatementTree } from '~/tree/statement/for/for-statement-tree';
import { evaluate } from '~/util/evaluate';
import { parseStatement } from '~/util/parse';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]\n  12+(45/5)';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.declaration).toBeInstanceOf(DeclarationTree);
  expect(tree.declaration?.name?.text).toBe('item');
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  const [statement] = tree.body?.statements ?? [];
  expect(evaluate((statement as ExpressionStatementTree).expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value in array\n  12+10';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.declaration).toBeInstanceOf(DeclarationTree);
  expect(tree.declaration?.name?.text).toBe('value');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(evaluate((tree.body?.statements[0] as ExpressionStatementTree).expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]\n  1+1';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.declaration).toBe(null);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(evaluate((tree.body?.statements[0] as ExpressionStatementTree).expression)).toBe(1 + 1);
});
