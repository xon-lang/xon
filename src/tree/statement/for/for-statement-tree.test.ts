import {
  ArrayExpressionTree,
  ExpressionStatementTree,
  ForStatementTree,
  IdExpressionTree,
} from '~/tree';
import { evaluate, parseStatement } from '~/util';

test('for with value', () => {
  const code = 'for item in [1, 2, 3]\n  12+(45/5)';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.parameter.name.text).toBe('item');
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  const statement = tree.body.statements[0];
  expect(evaluate((statement as ExpressionStatementTree).expression)).toBe(12 + 45 / 5);
});

test('for with value and index', () => {
  const code = 'for value in array\n  12+10';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.parameter?.name.text).toBe('value');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(evaluate((tree.body.statements[0] as ExpressionStatementTree).expression)).toBe(12 + 10);
});

test('for with expression only', () => {
  const code = 'for [1, 2, 3]\n  1+1';
  const tree = parseStatement(code) as ForStatementTree;

  expect(tree).toBeInstanceOf(ForStatementTree);
  expect(tree.parameter).toBe(null);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(evaluate((tree.body.statements[0] as ExpressionStatementTree).expression)).toBe(1 + 1);
});
