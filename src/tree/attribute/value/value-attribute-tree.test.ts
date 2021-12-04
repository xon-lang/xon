import { parseAttribute } from '../../parse';
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
  expect(tree.type.name).toBe('Integer');
});

test('array value', () => {
  const code = 'a T[]: []';
  const tree = parseAttribute<ValueAttributeTree>(code);
  expect(tree).toBeInstanceOf(ValueAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
});
