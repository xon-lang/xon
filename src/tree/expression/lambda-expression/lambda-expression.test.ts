import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('lambda with plus expression body', () => {
  const code = '(x Number): x + 42';
  const tree = parseExpression<LambdaExpressionTree>(code);
  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('x');
  expect(tree.args[0].type?.name).toBe('Number');
  expect(evalExpression(tree.body, new Map([['x', 37]]))).toBe(37 + 42);
});
