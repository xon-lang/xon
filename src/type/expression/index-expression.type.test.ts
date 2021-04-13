import { parseStatement } from '../../tree/parse';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { getExpressionType } from './expression.type';

test('index type is Integer', () => {
  const code = '[1, 2, 3][1]';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const type = getExpressionType(tree.value);
  expect('Integer').toBe(type.toString());
});

test('index type is Union', () => {
  const code = '["1", 2, 3][1]';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const type = getExpressionType(tree.value);
  expect('String | Integer').toBe(type.toString());
});
