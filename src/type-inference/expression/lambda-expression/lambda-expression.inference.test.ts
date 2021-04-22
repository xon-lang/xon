import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { fillExpressionTypes } from '../expression-inference.helper';

test('all array items are integer literals', () => {
  const code = '\\x: 1 + 1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillExpressionTypes(tree.value, new Map());
  expect('(Any) Integer').toBe(tree.value.type.toString());
});
