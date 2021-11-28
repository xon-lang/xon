import { parseAttribute } from '../../parse';
import { IdTypeTree } from '../../type/id-type/id-type.tree';
import { MethodAttributeTree } from './method-attribute-tree';

test('value', () => {
  const code = 'a is Any\n  b = 123';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as IdTypeTree).typeArguments[0].name).toBe('String');
});

test('value', () => {
  const code = 'a is Any\n  b = 123\n  c = "hi"';
  const tree = parseAttribute<MethodAttributeTree>(code);
  expect(tree).toBeInstanceOf(MethodAttributeTree);

  expect(tree.id.text).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as IdTypeTree).typeArguments[0].name).toBe('String');
});
