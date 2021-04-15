import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { getExpressionType } from '../expression-type.helper';

test('literal tests: has no own tests', () => {
  const code = '1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const type = getExpressionType(tree.value, new Map());
  expect('Integer').toBe(type.toString());
});
