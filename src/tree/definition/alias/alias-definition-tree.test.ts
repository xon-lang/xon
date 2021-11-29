import { parseDefinition } from '../../parse';
import { AliasDefinitionTree } from './alias-definition-tree';

test('number', () => {
  const code = 'Number = Integer || Float';
  const tree = parseDefinition<AliasDefinitionTree>(code);
  expect(tree).toBeInstanceOf(AliasDefinitionTree);

  expect(tree.id.text).toBe('Number');
  expect(tree.typeParameters.length).toBe(0);
  expect(tree.type.name).toBe('Union');
  expect(tree.type.toString()).toBe('Integer || Float');
});

test('string map', () => {
  const code = 'StringMap<T> = Map<String, T>';
  const tree = parseDefinition<AliasDefinitionTree>(code);
  expect(tree).toBeInstanceOf(AliasDefinitionTree);

  expect(tree.id.text).toBe('StringMap');
  expect(tree.typeParameters.length).toBe(1);
  expect(tree.typeParameters[0].id.text).toBe('T');
  expect(tree.type.name).toBe('Map');
  expect(tree.type.toString()).toBe('Map<String, T>');
});
