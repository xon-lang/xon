import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { getExpressionType } from '../expression-type.helper';

test('all array items are integer literals', () => {
  const code = '\\x: 1 + 1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const type = getExpressionType(tree.value);
  expect('(Any) Integer').toBe(type.toString());
});
