import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { fillExpressionTypes } from '../expression-type.helper';

test('integer operands', () => {
  const code = '1 and 2';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillExpressionTypes(tree.value, new Map());
  expect(tree.value.type.toString()).toBe('Boolean');
});
