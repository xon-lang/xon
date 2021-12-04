import { parseAttribute } from '../../parse';
import { ObjectAttributeTree } from './object-attribute-tree';

test('no parameters', () => {
  const code = 'a\n  a: 123';
  const tree = parseAttribute<ObjectAttributeTree>(code);
  expect(tree).toBeInstanceOf(ObjectAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
});
