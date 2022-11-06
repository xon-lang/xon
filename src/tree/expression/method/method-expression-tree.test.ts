import { IdExpressionTree, InfixExpressionTree, MethodExpressionTree } from '~/tree';
import { evaluate, parseExpression } from '~/util';

test('has argument', () => {
  const code = '[x]: String => x + 42';
  const tree = parseExpression(code) as MethodExpressionTree;

  expect(tree).toBeInstanceOf(MethodExpressionTree);
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name.text).toBe('x');
  expect((tree.type as IdExpressionTree).name.text).toBe('String');
  expect(
    evaluate(tree.value, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '<N,M ,K:String >[x] => x + 42';
  const tree = parseExpression(code) as MethodExpressionTree;

  expect(tree).toBeInstanceOf(MethodExpressionTree);
  expect(tree.generics.length).toBe(3);
  expect(tree.generics[0].name.text).toBe('N');
  expect(tree.generics[1].name.text).toBe('M');
  expect(tree.generics[2].name.text).toBe('K');
  expect((tree.generics[2].type as IdExpressionTree).name.text).toBe('String');
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
