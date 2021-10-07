import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { NegativeExpressionTree } from './prefix-expression.tree';

test('negative integer', () => {
  const code = '-1';
  const tree = parseExpression<NegativeExpressionTree>(code);
  expect(tree).toBeInstanceOf(NegativeExpressionTree);

  expect(evalExpression(tree)).toBe(-1);
});
