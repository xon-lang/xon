import { evaluate } from '../../util/evaluate';
import { parseExpression } from '../../util/parse';
import { MethodExpressionNode } from './method-expression-node';

test('has argument', () => {
  const code = '(x) x + 42';
  const node = parseExpression<MethodExpressionNode>(code);
  expect(node).toBeInstanceOf(MethodExpressionNode);

  expect(node.parameters.length).toBe(1);
  expect(node.parameters[0].id.name.text).toBe('x');
  expect(evaluate(node.result, { x: 37 })).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '() 42+45';
  const node = parseExpression<MethodExpressionNode>(code);
  expect(node).toBeInstanceOf(MethodExpressionNode);

  expect(node.parameters.length).toBe(0);
  expect(evaluate(node.result)).toBe(42 + 45);
});
