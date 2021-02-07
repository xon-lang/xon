import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { RangeExpressionTree } from './range-expression.tree';

test('number range', () => {
  const code = '1..10';
  const tree = parseExpression<RangeExpressionTree>(code);
  expect(evalExpression(tree.min)).toBe(1);
  expect(evalExpression(tree.max)).toBe(10);
  expect(tree).toBeInstanceOf(RangeExpressionTree);
});
