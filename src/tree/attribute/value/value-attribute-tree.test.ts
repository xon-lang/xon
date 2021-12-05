import { parseAttribute } from '../../parse';
import { ArrayTypeTree } from '../../type/array/array-type.tree';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { ValueAttributeTree } from './value-attribute-tree';

test('value', () => {
  const code = 'a: 123';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type).toBe(null);
});

test('private value with type', () => {
  const code = '_a Integer: 123';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type).toBeInstanceOf(IdTypeTree);
});

test('array value', () => {
  const code = 'a T[]: []';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type).toBeInstanceOf(ArrayTypeTree);
});
