import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { StringExpressionTree } from '~/tree/expression/string/string-expression-tree';
import { parseExpression } from '~/util/parse';

test('method call', () => {
  const code = "f(3, 'str')";
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0) as IntegerExpressionTree).toBeInstanceOf(IntegerExpressionTree);
  expect((tree.array.parameters.at(0) as IntegerExpressionTree).value).toBe(3);
  expect(tree.array.parameters.at(1) as StringExpressionTree).toBeInstanceOf(StringExpressionTree);
  expect((tree.array.parameters.at(1) as StringExpressionTree).value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.array.parameters.length).toBe(4);
  const indexer1 = tree.array.parameters.at(0);
  const indexer2 = tree.array.parameters.at(1);
  expect(indexer1).toBeInstanceOf(IntegerExpressionTree);
  expect(indexer2).toBeInstanceOf(StringExpressionTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.array.parameters.length).toBe(1);
  expect((tree.array.parameters[0] as IntegerExpressionTree).value).toBe(1);
  expect(tree.instance).toBeInstanceOf(InfixExpressionTree);
  const { operator, left, right } = tree.instance as InfixExpressionTree;
  expect(operator.text).toBe('.');
  expect((left as IdExpressionTree).name.text).toBe('a');
  expect((right as IdExpressionTree).name.text).toBe('get');
});

test('object method', () => {
  const code = '{a, b}.call()';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.array.parameters.length).toBe(0);
  expect(tree.instance).toBeInstanceOf(InfixExpressionTree);
  const { operator, left, right } = tree.instance as InfixExpressionTree;
  expect(operator.text).toBe('.');
  const leftParameters = (left as ArrayExpressionTree).parameters;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0] as IdExpressionTree).name.text).toBe('a');
  expect((leftParameters[1] as IdExpressionTree).name.text).toBe('b');
  expect((right as IdExpressionTree).name.text).toBe('call');
});

test('generics', () => {
  const code = 'Animal{T}';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.array.parameters.length).toBe(1);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).name.text).toBe('Animal');
});
