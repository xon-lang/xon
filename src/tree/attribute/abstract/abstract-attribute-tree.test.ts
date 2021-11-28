import { parseAttribute } from '../../parse';
import { AbstractAttributeTree } from './abstract-attribute-tree';

test('private value with type', () => {
  const code = '_a Integer';
  const tree = parseAttribute<AbstractAttributeTree>(code);
  expect(tree).toBeInstanceOf(AbstractAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
});

test('array value', () => {
  const code = 'a<T> T[]';
  const tree = parseAttribute<AbstractAttributeTree>(code);
  expect(tree).toBeInstanceOf(AbstractAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
});
