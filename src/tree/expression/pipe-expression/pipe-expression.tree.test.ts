import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { PipeExpressionTree } from './pipe-expression.tree';

test('has an arg', () => {
  const code = '7 |x: x + 3';
  const tree = parseExpression<PipeExpressionTree>(code);
  expect(tree).toBeInstanceOf(PipeExpressionTree);

  expect(tree.parameter).toBe('x');
  expect(evalExpression(tree.left)).toBe(7);
  expect(evalExpression(tree.right, { x: 7 })).toBe(10);
  expect(evalExpression(tree)).toBe(10);
});
