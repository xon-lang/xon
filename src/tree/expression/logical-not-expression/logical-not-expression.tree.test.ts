import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { LogicalNotExpressionTree } from './logical-not-expression.tree';

test('not non zero integer', () => {
  const code = 'not 1';
  const tree = parseExpression<LogicalNotExpressionTree>(code);
  expect(tree).toBeInstanceOf(LogicalNotExpressionTree);

  expect(evalExpression(tree)).toBe(false);
});

test('negative zero integer', () => {
  const code = 'not 0';
  const tree = parseExpression<LogicalNotExpressionTree>(code);
  expect(tree).toBeInstanceOf(LogicalNotExpressionTree);

  expect(evalExpression(tree)).toBe(true);
});
