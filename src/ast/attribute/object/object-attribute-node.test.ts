import { parseAttribute } from '../../parse';
import { ObjectAttributeNode } from './object-attribute-node';

test('no parameters', () => {
  const code = 'a\n  a: 123\n  b: "hi"';
  const tree = parseAttribute<ObjectAttributeNode>(code);
  expect(tree).toBeInstanceOf(ObjectAttributeNode);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.body.length).toBe(2);
});
