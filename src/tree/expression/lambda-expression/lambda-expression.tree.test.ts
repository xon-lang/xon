import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { LambdaExpressionTree } from './lambda-expression.tree';

test('with arg type', () => {
  const code = '\\x: x + 42';
  const tree = parseExpression<LambdaExpressionTree>(code);
  expect(tree).toBeInstanceOf(LambdaExpressionTree);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].id.text).toBe('x');
  expect(evalExpression(tree.expression, { x: 37 })).toBe(37 + 42);
});

test('no args', () => {
  const code = '\\ 42+45';
  const tree = parseExpression<LambdaExpressionTree>(code);
  expect(tree).toBeInstanceOf(LambdaExpressionTree);

  expect(tree.parameters.length).toBe(0);
  expect(evalExpression(tree.expression)).toBe(42 + 45);
});
