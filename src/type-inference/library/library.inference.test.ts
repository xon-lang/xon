import { parseStatement } from '../../tree/parse';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';

test('has return String type', () => {
  const code = '1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);
});
