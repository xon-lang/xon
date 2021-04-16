import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { LogicalOrExpressionTree } from './logical-or-expression.tree';

test('can use integers', () => {
  const code = '1 or 2';
  const tree = parseExpression<LogicalOrExpressionTree>(code);
  expect(tree).toBeInstanceOf(LogicalOrExpressionTree);

  expect(evalExpression(tree)).toBe(1);
});
