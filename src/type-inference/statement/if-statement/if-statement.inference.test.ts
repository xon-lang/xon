import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from '../../../tree/statement/if-statement/if-statement.tree';
import { fillStatementTypes } from '../statement-inference.helper';

test('has Integer type', () => {
  const code = 'if true: 2 else: 3.5';
  const tree = parseStatement<IfStatementTree>(code);
  expect(tree).toBeInstanceOf(IfStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.condition.type.toString()).toBe('Boolean');
  expect((tree.thenBody[0] as ExpressionStatementTree).value.type.toString()).toBe('Integer');
  expect((tree.elseBody[0] as ExpressionStatementTree).value.type.toString()).toBe('Float');
});
