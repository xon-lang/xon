import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { LoopStatementTree } from '../../../tree/statement/loop-statement/loop-statement.tree';
import { fillStatementTypes } from '../statement-type.helper';

test('has Integer type', () => {
  const code = 'loop item, index in [1, true]: index + 2';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree).toBeInstanceOf(LoopStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value.type.toString()).toBe('Integer | Boolean');
  expect(tree.index.type.toString()).toBe('Integer');
  expect(tree.expression.type.toString()).toBe('(Integer | Boolean)[]');
  expect((tree.body[0] as ExpressionStatementTree).value.type.toString()).toBe('Integer');
});
