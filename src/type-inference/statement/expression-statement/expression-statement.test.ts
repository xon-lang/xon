import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { fillStatementTypes } from '../statement-type.helper';

test('has Integer type', () => {
  const code = '1 + 1';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value.type.name).toBe('Integer');
});
