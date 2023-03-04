import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('has argument', () => {
  const code = '[x] => x + 42';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect((tree.left as ArrayExpressionTree).parameters.length).toBe(1);
  expect(((tree.left as ArrayExpressionTree).parameters[0] as IdExpressionTree).name.text).toBe('x');
  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '{N,M ,K:String }[x] => x + 42';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  const left = tree.left as InvokeExpressionTree;
  const generics = left.instance as ArrayExpressionTree;
  expect(generics.parameters.length).toBe(3);
  expect((generics.parameters[0] as IdExpressionTree).name.text).toBe('N');
  expect((generics.parameters[1] as IdExpressionTree).name.text).toBe('M');
  const kExpression = generics.parameters[2] as InfixExpressionTree;
  expect(kExpression).toBeInstanceOf(InfixExpressionTree);
  expect((kExpression.left as IdExpressionTree).name.text).toBe('K');
  expect(kExpression.operator.text).toBe(':');
  expect((kExpression.right as IdExpressionTree).name.text).toBe('String');
  expect(left.parameters?.length).toBe(1);
  expect(left.parameters?.at(0)).toBeInstanceOf(IdExpressionTree);
  expect((left.parameters?.at(0) as IdExpressionTree).name.text).toBe('x');
  expect(
    evaluate(tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]=> 42+45';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect((tree.left as ArrayExpressionTree).parameters.length).toBe(0);
  expect(evaluate(tree.right)).toBe(42 + 45);
});

test('lambda inner lambda', () => {
  const code = '[a] => [b, c] => 42+45';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(ArrayExpressionTree);
  expect((tree.left as ArrayExpressionTree).parameters.length).toBe(1);
  expect(((tree.left as ArrayExpressionTree).parameters[0] as IdExpressionTree).name.text).toBe('a');
  expect(tree.right).toBeInstanceOf(InfixExpressionTree);
  expect(((tree.right as InfixExpressionTree).left as ArrayExpressionTree).parameters.length).toBe(2);
  expect((tree.right as InfixExpressionTree).right).toBeInstanceOf(InfixExpressionTree);
});
