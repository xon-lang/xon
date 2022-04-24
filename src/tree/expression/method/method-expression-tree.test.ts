import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { InfixExpressionTree } from '../infix/infix-expression-tree';
import { MethodExpressionTree } from './method-expression-tree';

test('has argument', () => {
  const code = '[x] => x + 42';
  const tree = parseExpression(code) as MethodExpressionTree;

  expect(tree).toBeInstanceOf(MethodExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name.text).toBe('x');
  expect(
    evaluate(tree.value, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]=> 42+45';
  const tree = parseExpression(code) as MethodExpressionTree;

  expect(tree).toBeInstanceOf(MethodExpressionTree);
  expect(tree.parameters.length).toBe(0);
  expect(evaluate(tree.value)).toBe(42 + 45);
});

test('method with method type', () => {
  const code = '[a] => [b, c] => 42+45';
  const tree = parseExpression(code) as MethodExpressionTree;

  expect(tree).toBeInstanceOf(MethodExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect(tree.value).toBeInstanceOf(MethodExpressionTree);
  expect((tree.value as MethodExpressionTree).parameters.length).toBe(2);
  expect((tree.value as MethodExpressionTree).value).toBeInstanceOf(InfixExpressionTree);
});
