import { parseAttribute } from '../../parse';
import { IdTypeTree } from '../../type/id-type/id-type.tree';
import { MethodAttributeTree } from './method-attribute-tree';

test('value', () => {
  const code = 'a Integer\n  123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as IdTypeTree).typeArguments[0].name).toBe('String');
});

test('private value with type', () => {
  const code = '_a (x String) Integer\n  123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
});

test('array value', () => {
  const code = 'a<T> (x Integer) T[]\n 123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
});
