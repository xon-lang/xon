import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { MethodExpressionTree } from './method-expression-tree';

test('has argument', () => {
  const code = '(x) x + 42';
  const tree = parseExpression(code) as MethodExpressionTree;
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].id.name.text).toBe('x');
  expect(evaluate(tree.result, { x: 37 })).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '() 42+45';
  const tree = parseExpression(code) as MethodExpressionTree;
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.parameters.length).toBe(0);
  expect(evaluate(tree.result)).toBe(42 + 45);
});
