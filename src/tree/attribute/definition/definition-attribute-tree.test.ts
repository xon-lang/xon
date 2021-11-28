import { parseAttribute } from '../../parse';
import { DefinitionAttributeTree } from './definition-attribute-tree';

test('value', () => {
  const code = 'a is Any\n  b = 123';
  const tree = parseAttribute<DefinitionAttributeTree>(code);
  expect(tree).toBeInstanceOf(DefinitionAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
});

test('value', () => {
  const code = 'a is Any\n  b = 123\n  c = "hi"';
  const tree = parseAttribute<DefinitionAttributeTree>(code);
  expect(tree).toBeInstanceOf(DefinitionAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
});
