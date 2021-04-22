import { parseExpression } from '../../parse';
import { evalExpression } from '../../eval';
import { LogicalAndExpressionTree } from './logical-and-expression.tree';

test('can use integers', () => {
  const code = '1 and 2';
  const tree = parseExpression<LogicalAndExpressionTree>(code);
  expect(tree).toBeInstanceOf(LogicalAndExpressionTree);

  expect(evalExpression(tree)).toBe(2);
});
