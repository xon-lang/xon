import { AttributeTree } from '../attribute/attribute-tree';
import { parseAttribute } from '../parse';

test('1', () => {
  const code = 'a ((s String) Integer) []';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.type.toString()).toBe('((s String) Integer)[]');
});

test('2', () => {
  const code = 'a ((s String | null ) Integer |  "hello") []';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.type.toString()).toBe('((s String | null) Integer | "hello")[]');
});
