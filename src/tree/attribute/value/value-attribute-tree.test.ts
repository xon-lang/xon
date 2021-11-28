import { parseAttribute } from '../../parse';
import { IdTypeTree } from '../../type/id-type/id-type.tree';
import { ValueAttributeTree } from './value-attribute-tree';

test('value', () => {
  const code = 'a = 123';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as IdTypeTree).typeArguments[0].name).toBe('String');
});

test('private value with type', () => {
  const code = '_a Integer = 123';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
});

test('array value', () => {
  const code = 'a<T> T[] = []';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
});
