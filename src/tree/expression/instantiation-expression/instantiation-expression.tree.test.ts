import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { InstantiationExpressionTree } from './instantiation-expression.tree';

test('no generics no arguments', () => {
  const code = 'SomeClass()';
  const tree = parseExpression<InstantiationExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstantiationExpressionTree);

  expect(tree.id.text).toBe('SomeClass');
  expect(tree.genericArguments.length).toBe(0);
  expect(tree.arguments.length).toBe(0);
});

test('no generics', () => {
  const code = 'SomeClass(1, "John")';
  const tree = parseExpression<InstantiationExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstantiationExpressionTree);

  expect(tree.id.text).toBe('SomeClass');
  expect(tree.genericArguments.length).toBe(0);
  expect(tree.arguments.length).toBe(2);
  expect((tree.arguments[0].value as LiteralExpressionTree).literal.value).toBe(1);
  expect((tree.arguments[1].value as LiteralExpressionTree).literal.value).toBe('John');
});

test('no arguments', () => {
  const code = 'SomeClass<Integer>()';
  const tree = parseExpression<InstantiationExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstantiationExpressionTree);

  expect(tree.id.text).toBe('SomeClass');
  expect(tree.genericArguments.length).toBe(1);
  expect(tree.genericArguments[0].name).toBe('Integer');
  expect(tree.arguments.length).toBe(0);
});

test('generics and arguments', () => {
  const code = 'SomeClass<Integer>(1, "John")';
  const tree = parseExpression<InstantiationExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstantiationExpressionTree);

  expect(tree.id.text).toBe('SomeClass');
  expect(tree.genericArguments.length).toBe(1);
  expect(tree.genericArguments[0].name).toBe('Integer');
  expect(tree.arguments.length).toBe(2);
  expect((tree.arguments[0].value as LiteralExpressionTree).literal.value).toBe(1);
  expect((tree.arguments[1].value as LiteralExpressionTree).literal.value).toBe('John');
});
