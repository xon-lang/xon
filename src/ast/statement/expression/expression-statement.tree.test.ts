import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from './expression-statement.tree';

test('variable assignment', () => {
  const code = '5 + 5\n';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  expect(evalExpression(tree.expression)).toBe(10);
});