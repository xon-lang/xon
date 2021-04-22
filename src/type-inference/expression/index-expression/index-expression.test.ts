import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { fillExpressionTypes } from '../expression-type.helper';

test('index type is Integer', () => {
  const code = '[1, 2, 3][1]';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillExpressionTypes(tree.value, new Map());
  expect('Integer').toBe(tree.value.type.toString());
});

test('index type is Union', () => {
  const code = '["1", 2, 3][1]';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillExpressionTypes(tree.value, new Map());
  expect('String | Integer').toBe(tree.value.type.toString());
});
