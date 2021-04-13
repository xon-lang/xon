import { parseStatement } from '../../tree/parse';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { getExpressionType } from './expression.type';

test('true has Boolean type', () => {
  const code = 'true';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const type = getExpressionType(tree.value);
  expect('Boolean').toBe(type.toString());
});
