import { parseAttribute } from '../../parse';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { MethodAttributeTree } from './method-attribute-tree';

test('no parameters', () => {
  const code = 'a() Integer\n  123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Lambda');
});

test('with parameters', () => {
  const code = '_a(x String) Integer\n  123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type).toBeInstanceOf(LambdaTypeTree);
  expect((tree.type as LambdaTypeTree).resultType.name).toBe('Integer');
});

test('with type parameters', () => {
  const code = 'a<T>(x Integer) T[]\n 123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Lambda');
});
