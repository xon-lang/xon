import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { StringExpressionTree } from '~/tree/expression/string/string-expression-tree';
import { parseExpression } from '~/util/parse';

test('method call', () => {
  const code = 'f[3, \'str\']';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments).toBe(null);
  expect(tree.indexers?.length).toBe(2);
  expect(tree.indexers?.at(0)?.value as IntegerExpressionTree).toBeInstanceOf(IntegerExpressionTree);
  expect((tree.indexers?.at(0)?.value as IntegerExpressionTree).value).toBe(3);
  expect(tree.indexers?.at(1)?.value as StringExpressionTree).toBeInstanceOf(StringExpressionTree);
  expect((tree.indexers?.at(1)?.value as StringExpressionTree).value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments).toBe(null);
  expect(tree.indexers?.length).toBe(4);
  const indexer1 = tree.indexers?.at(0)?.value;
  const indexer2 = tree.indexers?.at(1)?.value;
  expect(indexer1).toBeInstanceOf(IntegerExpressionTree);
  expect(indexer2).toBeInstanceOf(StringExpressionTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments).toBe(null);
  expect(tree.indexers?.length).toBe(1);
  const indexer = tree.indexers?.at(0)?.value;
  expect(indexer).toBeInstanceOf(IntegerExpressionTree);
  expect(tree.instance).toBeInstanceOf(MemberExpressionTree);
});

test('object method', () => {
  const code = '{a, b}.call()';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments?.length).toBe(0);
  expect(tree.instance).toBeInstanceOf(MemberExpressionTree);
  expect((tree.instance as MemberExpressionTree).instance).toBeInstanceOf(ArrayExpressionTree);
});

test('generics', () => {
  const code = 'Animal{T}';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.generics?.length).toBe(1);
  expect(tree.arguments).toBe(null);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).name.text).toBe('Animal');
});
